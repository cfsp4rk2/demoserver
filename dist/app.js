import express from 'express';
import cookieParser from 'cookie-parser';
import { DIRECTORY, SERVER_ROUTE, API_ROUTE, ENVIRONMENT, SERVER, API, DATABASE } from './config.js';
// Libraries.
import HttpServer from './lib/HttpServer/HttpServer.js';
import HttpHeader from './lib/HttpHeader/HttpHeader.js';
import ExpressRouterApi from './lib/ExpressRouter/ExpressRouter.js';
import ExpressRouterServer from './lib/ExpressRouterTemp/ExpressRouter.js';
import MongoDatabase from './lib/MongoDatabase/MongoDatabase.js';
import Log from './lib/Log/Log.js';
// Classes.
import Database from './class/Database/Database.js';
import User from './class/User/User.js';
// Server routes.
import index from './route/index.js';
import dashboard from './route/dashboard.js';
import login from './route/login.js';
import register from './route/register.js';
import temp from './route/temp.js';
// Api routes.
import apiTempResetDatabase from './api/temp/resetDatabase.js';
import apiUserCreate from './api/user/create.js';
import apiUserEdit from './api/user/edit.js';
import apiUserDelete from './api/user/delete.js';
import apiUserConfirmEmailRequest from './api/user/confirmEmailRequest.js';
import apiUserConfirmEmail from './api/user/confirmEmail.js';
import apiUserAuthenticate from './api/user/authenticate.js';
import apiUserDeauthenticate from './api/user/deauthenticate.js';
import apiUserResetPasswordRequest from './api/user/resetPasswordRequest.js';
import apiUserResetPassword from './api/user/resetPassword.js';
const server = express();
const api = express();
// ------------------------------ Library setup.
const serverLog = new Log({
    'scopeName': SERVER.SCOPE_NAME,
    'scopeColour': SERVER.SCOPE_COLOUR,
    'applicationName': SERVER.APPLICATION_NAME,
    'applicationColour': SERVER.APPLICATION_COLOUR,
    'verbosity': ENVIRONMENT.SERVER_VERBOSITY,
});
const apiLog = new Log({
    'scopeName': API.SCOPE_NAME,
    'scopeColour': API.SCOPE_COLOUR,
    'applicationName': API.APPLICATION_NAME,
    'applicationColour': API.APPLICATION_COLOUR,
    'verbosity': ENVIRONMENT.API_VERBOSITY,
});
const httpHeader = new HttpHeader({
    'log': serverLog,
    'setHeaders': {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': 'false',
    }
});
const httpServerMain = new HttpServer({
    'log': serverLog,
    'express': server,
    'productionFlag': ENVIRONMENT.PRODUCTION,
    'redirectFlag': true,
    'ipAddress': SERVER.IP_ADDRESS,
    'hostname': SERVER.HOSTNAME,
    'portHttp': SERVER.PORT_HTTP,
    'portHttps': SERVER.PORT_HTTPS,
    'sslCertificatePath': ENVIRONMENT.SSL_CERTIFICATE_PATH,
    'sslPrivateKeyPath': ENVIRONMENT.SSL_PRIVATE_KEY_PATH,
    'sslCertificateAuthorityPath': ENVIRONMENT.SSL_CERTIFICATE_AUTHORITY_PATH,
});
const httpServerApi = new HttpServer({
    'log': apiLog,
    'express': api,
    'productionFlag': ENVIRONMENT.PRODUCTION,
    'redirectFlag': false,
    'ipAddress': API.IP_ADDRESS,
    'hostname': API.HOSTNAME,
    'portHttp': API.PORT_HTTP,
    'portHttps': API.PORT_HTTPS,
    'sslCertificatePath': ENVIRONMENT.SSL_CERTIFICATE_PATH,
    'sslPrivateKeyPath': ENVIRONMENT.SSL_PRIVATE_KEY_PATH,
    'sslCertificateAuthorityPath': ENVIRONMENT.SSL_CERTIFICATE_AUTHORITY_PATH,
});
const mongoDatabase = await new MongoDatabase({
    'log': apiLog,
    'hostname': DATABASE.HOSTNAME,
    'protocol': DATABASE.PROTOCOL,
    'port': DATABASE.PORT,
    'options': DATABASE.OPTIONS,
    'name': DATABASE.NAME,
}).initialise();
// const mailServer = new MailServer({
//     'log': apiLog,
//     'hostname': MAIL.HOSTNAME,
//     'port': MAIL.PORT,
//     'username': ENVIRONMENT.MAIL_USERNAME,
//     'password': ENVIRONMENT.MAIL_PASSWORD,
// });
// mailServer.newTemplate('User.create', {
//     'sender': 'comsat',
//     'subject': 'Create User',
//     'htmlMessage': {
//         'path': `${DIRECTORY.EMAIL}/user/create/create.html`,
//         'variables': ['CODE'],
//     },
//     'textMessage': {
//         'path': `${DIRECTORY.EMAIL}/user/create/create.txt`,
//         'variables': ['CODE'],
//     },
// });
// mailServer.newTemplate('User.resetPassword', {
//     'sender': 'comsat',
//     'subject': 'Reset Password',
//     'htmlMessage': {
//         'path': `${DIRECTORY.EMAIL}/user/resetPassword/resetPassword.html`,
//         'variables': ['CODE'],
//     },
//     'textMessage': {
//         'path': `${DIRECTORY.EMAIL}/user/resetPassword/resetPassword.txt`,
//         'variables': ['CODE'],
//     },
// });
ExpressRouterServer.initialise({
    'log': serverLog,
});
ExpressRouterApi.initialise({
    'log': apiLog,
});
// Toolbelt.set('mailServer', mailServer);
// ------------------------------ Library setup.
// ------------------------------ Class setup.
Database.initialise({
    'mongoDatabase': mongoDatabase,
});
User.initialise({
    'jwtSecret': ENVIRONMENT.JWT_SECRET,
    'productionFlag': ENVIRONMENT.PRODUCTION,
    'redirectForbiddenFlag': true,
});
// ------------------------------ Class setup.
// ------------------------------ Middleware.
server.set('views', DIRECTORY.VIEW);
server.set('view engine', SERVER.VIEW_ENGINE);
server.use(cookieParser());
server.use(express.static(DIRECTORY.PUBLIC));
server.use(httpHeader.apply);
api.use(express.json());
api.use(express.urlencoded({ 'extended': false }));
api.use(cookieParser());
api.use(httpHeader.apply);
// ------------------------------ Middleware.
// ------------------------------ Routing.
server.use(SERVER_ROUTE.INDEX, index);
server.use(SERVER_ROUTE.DASHBOARD, dashboard);
server.use(SERVER_ROUTE.LOGIN, login);
server.use(SERVER_ROUTE.REGISTER, register);
server.use(SERVER_ROUTE.TEMP, temp);
if (!(ENVIRONMENT.PRODUCTION))
    api.use(API_ROUTE.TEMP.RESET_DATABASE, apiTempResetDatabase);
api.use(API_ROUTE.USER.CREATE, apiUserCreate);
api.use(API_ROUTE.USER.EDIT, apiUserEdit);
api.use(API_ROUTE.USER.DELETE, apiUserDelete);
api.use(API_ROUTE.USER.CONFIRM_EMAIL_REQUEST, apiUserConfirmEmailRequest);
api.use(API_ROUTE.USER.CONFIRM_EMAIL, apiUserConfirmEmail);
api.use(API_ROUTE.USER.AUTHENTICATE, apiUserAuthenticate);
api.use(API_ROUTE.USER.DEAUTHENTICATE, apiUserDeauthenticate);
api.use(API_ROUTE.USER.RESET_PASSWORD_REQUEST, apiUserResetPasswordRequest);
api.use(API_ROUTE.USER.RESET_PASSWORD, apiUserResetPassword);
// ------------------------------ Routing.
