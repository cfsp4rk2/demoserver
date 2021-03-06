import crypto from 'crypto';
import HttpStatus from '../../lib/HttpStatus/HttpStatus.js';
import Crypto from '../../lib/Crypto/Crypto.js';
import Database from '../Database/Database.js';
/**
 * User v0.0.1
 */
export default class User {
    /**
     * Main initialisation function.
     *
     * Assigns the JWT secret, production flag, redirect forbidden flag, and redirect forbidden
     * path to the class.
     *
     * @param {UserConfiguration} configuration - User configuration object.
     * @param {string} configuration.jwtSecret - JWT secret.
     * @param {boolean} [configuration.productionFlag] - Flag to determine if server is running in production mode.
     * @param {boolean} [configuration.redirectForbiddenFlag] - Flag for redirecting users if given forbidden status.
     * @param {string} [configuration.redirectForbiddenPath] - Path to redirect user if given forbidden status.
     * @returns {void}
     */
    static initialise(configuration) {
        User._jwtSecret = configuration.jwtSecret;
        if (configuration.productionFlag != null)
            User._productionFlag = configuration.productionFlag;
        if (configuration.redirectForbiddenFlag != null)
            User._redirectForbiddenFlag = configuration.redirectForbiddenFlag;
        if (configuration.redirectForbiddenPath != null)
            User._redirectForbiddenPath = configuration.redirectForbiddenPath;
    }
    /**
     * Creates a new user.
     *
     * First checks that the passwords match. It then checks if the email address already exists in
     * the database. All users that have not been confirmed are removed. Generates a password hash
     * and adds the user to the database.
     *
     * @param {express.Response} response - Express response object.
     * @param {string} firstName - Users first name.
     * @param {string} lastName - Users last name.
     * @param {string} id - Users email address.
     * @param {string} password - Users password.
     * @param {string} passwordConfirm - Users confirmation password.
     * @param {number} role - Users privilage value.
     * @returns {Promise<apiError | boolean>} - A promise containing an API error or true.
     */
    static create(response, firstName, lastName, id, password, passwordConfirm, role = 1) {
        return new Promise(async (resolve, reject) => {
            if (password !== passwordConfirm) {
                HttpStatus.code(response, 'BAD_REQUEST');
                return reject({ 'error': User._ERROR_LOOKUP.PASSWORD });
            }
            if (await Database.User.get('email', id)) {
                HttpStatus.code(response, 'CONFLICT');
                return reject({ 'error': User._ERROR_LOOKUP.EMAIL });
            }
            if (!(await Database.User.delete('emailTemp', id))) {
                HttpStatus.code(response, 'INTERNAL_SERVER_ERROR');
                return reject({ 'error': User._ERROR_LOOKUP.REGISTRATION });
            }
            const passwordHash = await Crypto.getHash(password);
            if (!(passwordHash)) {
                HttpStatus.code(response, 'INTERNAL_SERVER_ERROR');
                return reject({ 'error': User._ERROR_LOOKUP.REGISTRATION });
            }
            if (!(await Database.User.insert({
                firstName,
                lastName,
                role,
                'emailTemp': id,
                'password': passwordHash,
            }))) {
                HttpStatus.code(response, 'INTERNAL_SERVER_ERROR');
                return reject({ 'error': User._ERROR_LOOKUP.REGISTRATION });
            }
            return resolve(true);
        });
    }
    /**
     * Requests for a email address confirmation email.
     *
     * Checks that the temporary email is in the database. Generates a random hex string as a one
     * time code. Adds the code and a timestamp to the user in the database. Sends an email to the
     * email address containing the code.
     *
     * @param {string} id - Users email address.
     * @returns {Promise<void>}
     */
    static async confirmEmailRequest(id) {
        if (!(await Database.User.get('emailTemp', id)))
            return;
        const code = (await crypto.randomBytes(48)).toString('hex');
        if (!(code))
            return;
        if (!(await Database.User.set('emailTemp', id, {
            'codeEmail': { code, 'iat': new Date().getTime() },
        })))
            return;
        console.log(code);
        // const mailServer = Toolbelt.get('mailServer');
        // if (!(await mailServer.send('User.create', id, { 'CODE': code }))) return;
    }
    /**
     * Confirms the users email address.
     *
     * First gets the user from the database by the one time email code. Checks that the code has
     * not expired. Updates the user in the database by setting the email and removing the
     * temporary email and one time code.
     *
     * @param {express.Response} response - Express response object.
     * @param {string} code - The one time code.
     * @returns {Promise<apiError | boolean>} - A promise containing an API error or true.
     */
    static confirmEmail(response, code) {
        return new Promise(async (resolve, reject) => {
            const user = await Database.User.get('codeEmail.code', code);
            if (!(user)) {
                HttpStatus.code(response, 'BAD_REQUEST');
                return reject({ 'error': User._ERROR_LOOKUP.LINK });
            }
            const expiryDate = new Date(user.codeEmail.iat);
            expiryDate.setMinutes(expiryDate.getMinutes() + User._CONFIRM_EMAIL_CODE_EXPIRY);
            if (new Date() > expiryDate) {
                HttpStatus.code(response, 'BAD_REQUEST');
                return reject({ 'error': User._ERROR_LOOKUP.LINK });
            }
            if (!(await Database.User.set('codeEmail.code', code, {
                'email': user.emailTemp,
                'emailTemp': '',
                'codeEmail': {
                    'code': '',
                    'iat': 0,
                },
            }))) {
                HttpStatus.code(response, 'INTERNAL_SERVER_ERROR');
                return reject({ 'error': User._ERROR_LOOKUP.REGISTRATION });
            }
            return resolve(true);
        });
    }
    /**
     * Edits the user by firstName, lastName or email.
     *
     * If the email is being edited, the new email is assigned as a temporary email. Updated the
     * users details with new email, first name and last name.
     *
     * @param {express.Response} response - Express response object.
     * @param {string} id - Users email address.
     * @param {string} [firstName] - Users modified first name.
     * @param {string} [lastName] - Users modified last name.
     * @param {string} [email] - Users modified email address.
     * @returns {Promise<apiError | boolean>} - A promise containing an API error or true.
     */
    static edit(response, id, firstName, lastName, email) {
        return new Promise(async (resolve, reject) => {
            const updatedDetails = {
                'emailTemp': (email != null) ? email : '',
                'firstName': firstName,
                'lastName': lastName,
            };
            Object.keys(updatedDetails).forEach(key => updatedDetails[key] === undefined && delete updatedDetails[key]);
            if (!(await Database.User.set('email', id, updatedDetails))) {
                HttpStatus.code(response, 'INTERNAL_SERVER_ERROR');
                return reject({ 'error': User._ERROR_LOOKUP.REGISTRATION });
            }
            return resolve(true);
        });
    }
    /**
     * Deletes a user.
     *
     * Deletes the user from the database.
     *
     * @param {express.Response} response - Express response object.
     * @param {string} id - Users email address.
     * @returns {Promise<apiError | boolean>} - A promise containing an API error or true.
     */
    static delete(response, id) {
        return new Promise((resolve, reject) => {
            if (!(Database.User.delete('email', id))) {
                HttpStatus.code(response, 'INTERNAL_SERVER_ERROR');
                return reject({ 'error': User._ERROR_LOOKUP.DELETE });
            }
            return resolve(true);
        });
    }
    /**
     * Express middleware function to act as authorisation.
     *
     * Checks the user has the JWT accessToken cookie set. Checks the access token isnt blacklisted
     * from the token database. Decodes the JWT token. Checks the user exists by the decoded
     * payload email. Assigns the first name, last name, email and role to the express request
     * object. Updates the JWT access token and set the accessToken cookie.
     *
     * If any errors occur during the authorisation process, a forbidden HTTP status is set and the
     * user is either given an error or redirected to a login page.
     *
     * @param {express.Request} request - Express request object.
     * @param {express.Response} response - Express response object.
     * @param {express.NextFunction} next - Express next function.
     * @returns {Promise<express.Response | void>}
     */
    static async authorise(request, response, next) {
        const accessToken = request.cookies.accessToken;
        if (accessToken == null) {
            HttpStatus.code(response, 'FORBIDDEN');
            if (User._redirectForbiddenFlag)
                return response.redirect(User._redirectForbiddenPath);
            return response.json({ 'error': User._ERROR_LOOKUP.AUTHORISE });
        }
        if (await Database.Token.get(accessToken)) {
            HttpStatus.code(response, 'FORBIDDEN');
            if (User._redirectForbiddenFlag)
                return response.redirect(User._redirectForbiddenPath);
            return response.json({ 'error': User._ERROR_LOOKUP.AUTHORISE });
        }
        const decoded = Crypto.jwtDecode(accessToken, User._jwtSecret);
        if (!(decoded)) {
            HttpStatus.code(response, 'FORBIDDEN');
            if (User._redirectForbiddenFlag)
                return response.redirect(User._redirectForbiddenPath);
            return response.json({ 'error': User._ERROR_LOOKUP.AUTHORISE });
        }
        if (!(await Database.User.get('email', decoded.email))) {
            HttpStatus.code(response, 'FORBIDDEN');
            if (User._redirectForbiddenFlag)
                return response.redirect(User._redirectForbiddenPath);
            return response.json({ 'error': User._ERROR_LOOKUP.AUTHORISE });
        }
        const user = {
            'firstName': decoded.firstName,
            'lastName': decoded.lastName,
            'email': decoded.email,
            'role': decoded.role,
        };
        request.user = user;
        const updatedAccessToken = Crypto.jwtSign(request.user, User._jwtSecret);
        response.cookie('accessToken', updatedAccessToken, {
            'httpOnly': false,
            'sameSite': false
        });
        next();
    }
    /**
     * Authenticates a user.
     *
     * Gets the user from the database. Compares the provided password with the hashed password in
     * the database. Creates a JWT payload containing the users first name, last name, email and
     * role. Signs the JWT payload and assigns it to a accessToken cookie.
     *
     * @param {express.Response} response - Express response object.
     * @param {string} id - Users email address.
     * @param {string} password - Users password.
     * @returns {Promise<apiError | boolean>} - A promise containing an API error or true.
     */
    static authenticate(response, id, password) {
        return new Promise(async (resolve, reject) => {
            const user = await Database.User.get('email', id);
            if (!(user)) {
                HttpStatus.code(response, 'UNAUTHORIZED');
                return reject({ 'error': 'The specified user does not exist.' });
            }
            if (!(await Crypto.compareHash(password, user.password))) {
                HttpStatus.code(response, 'UNAUTHORIZED');
                return reject({ 'error': 'Password incorrect.' });
            }
            const payload = {
                'firstName': user.firstName,
                'lastName': user.lastName,
                'email': user.email,
                'role': user.role,
            };
            const accessToken = Crypto.jwtSign(payload, User._jwtSecret);
            response.cookie('accessToken', accessToken, {
                'httpOnly': false,
                'sameSite': false
            });
            return resolve(true);
        });
    }
    /**
     * Deauthenticates a user.
     *
     * Adds the access token to the token blacklist database. Updates the accessToken to deleted
     * with a max age of 0.
     *
     * @param {express.Response} response - Express response object.
     * @param {string} id - Access token cookie.
     * @returns {Promise<apiError | boolean>} - A promise containing an API error or true.
     */
    static deauthenticate(response, accessToken) {
        return new Promise(async (resolve, reject) => {
            if (!(await Database.Token.insert(accessToken))) {
                HttpStatus.code(response, 'INTERNAL_SERVER_ERROR');
                return reject({ 'error': User._ERROR_LOOKUP.DEAUTHENTICATE });
            }
            response.cookie('accessToken', 'deleted', {
                'maxAge': 0,
                'httpOnly': false,
                'sameSite': false,
            });
            return resolve(true);
        });
    }
    /**
     * Requests for a password reset email.
     *
     * Gets the user from the database. Generates a hexadecimal string as a one time code. Assigns
     * the code and a timestamp to the user. Sends an email containing the code to the user.
     *
     * @param {string} id - Users email address.
     * @returns {Promise<void>}
     */
    static async resetPasswordRequest(id) {
        if (!(await Database.User.get('email', id)))
            return;
        const code = (await crypto.randomBytes(48)).toString('hex');
        if (!(code))
            return;
        if (!(await Database.User.set('email', id, {
            'codePassword': { code, 'iat': new Date().getTime() },
        })))
            return;
        console.log(code);
    }
    /**
     * Updates the users password.
     *
     * Checks that both passwords match. Gets the user from the database by the code. Checks that
     * the code has not expired. Hashes the new password. Updates the user in the database with the
     * new password.
     *
     * @param {express.Response} response - Express response object.
     * @param {string} code - One time code.
     * @param {string} password - Users new password.
     * @param {string} passwordConfirm - Users new confirmation password.
     * @returns {Promise<apiError | boolean>} - A promise containing an API error or true.
     */
    static async resetPassword(response, code, password, passwordConfirm) {
        return new Promise(async (resolve, reject) => {
            if (password !== passwordConfirm) {
                HttpStatus.code(response, 'BAD_REQUEST');
                return reject({ 'error': User._ERROR_LOOKUP.PASSWORD });
            }
            const user = await Database.User.get('codePassword.code', code);
            if (!(user)) {
                HttpStatus.code(response, 'BAD_REQUEST');
                return reject({ 'error': User._ERROR_LOOKUP.LINK });
            }
            const expiryDate = new Date(user.codePassword.iat);
            expiryDate.setMinutes(expiryDate.getMinutes() + User._PASSWORD_RESET_CODE_EXPIRY);
            if (new Date() > expiryDate) {
                HttpStatus.code(response, 'BAD_REQUEST');
                return reject({ 'error': User._ERROR_LOOKUP.LINK });
            }
            const passwordHash = await Crypto.getHash(password);
            if (!(passwordHash)) {
                HttpStatus.code(response, 'INTERNAL_SERVER_ERROR');
                return reject({ 'error': User._ERROR_LOOKUP.PASSWORD_RESET });
            }
            if (!(await Database.User.set('codePassword.code', code, {
                'password': passwordHash,
                'codePassword': {
                    'code': '',
                    'iat': 0,
                },
            }))) {
                HttpStatus.code(response, 'INTERNAL_SERVER_ERROR');
                return reject({ 'error': User._ERROR_LOOKUP.PASSWORD_RESET });
            }
            resolve(true);
        });
    }
}
User._CONFIRM_EMAIL_CODE_EXPIRY = 60;
User._PASSWORD_RESET_CODE_EXPIRY = 20;
User._productionFlag = false;
User._redirectForbiddenFlag = false;
User._redirectForbiddenPath = '/login';
User._ERROR_LOOKUP = {
    'PASSWORD': 'Passwords do not match.',
    'EMAIL': 'Email address already exists.',
    'REGISTRATION': 'Could not complete registration process.',
    'LINK': 'Link is invalid or has expired.',
    'AUTHORISE': 'You are not authorised to perform this action.',
    'AUTHENTICATE': 'Incorrect email address or password.',
    'DELETE': 'Could not delete the account.',
    'DEAUTHENTICATE': 'Could not log out.',
    'PASSWORD_RESET': 'Could not reset password.',
};
