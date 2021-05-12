import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
;
export default class Crypto {
    static getHash(content, saltOrRounds = 10) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(content, 10, (error, hash) => {
                if (error)
                    return resolve(false);
                return resolve(hash);
            });
        });
    }
    ;
    static compareHash(content, hash) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(content, hash, (error, result) => {
                if (error)
                    return resolve(false);
                return resolve(result);
            });
        });
    }
    ;
    static jwtSign(payload, secret, expiresIn = '1800s') {
        return jwt.sign(payload, secret, { expiresIn });
    }
    ;
    static jwtDecode(accessToken, secret) {
        try {
            return jwt.verify(accessToken, secret);
        }
        catch (error) {
            return false;
        }
    }
}
;
