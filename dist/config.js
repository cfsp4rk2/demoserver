import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
export const ENVIRONMENT = {
    'PRODUCTION': (process.env.PRODUCTION === 'true'),
    'SERVER_VERBOSITY': process.env.SERVER_VERBOSITY,
    'API_VERBOSITY': process.env.API_VERBOSITY,
    'SSL_CERTIFICATE_PATH': process.env.SSL_CERTIFICATE_PATH,
    'SSL_PRIVATE_KEY_PATH': process.env.SSL_PRIVATE_KEY_PATH,
    'SSL_CERTIFICATE_AUTHORITY_PATH': process.env.SSL_CERTIFICATE_AUTHORITY_PATH,
    'MAIL_USERNAME': process.env.MAIL_USERNAME,
    'MAIL_PASSWORD': process.env.MAIL_PASSWORD,
    'JWT_SECRET': process.env.JWT_SECRET,
};
export const SERVER = {
    'SCOPE_NAME': 'demoserver',
    'SCOPE_COLOUR': 'FG_BLUE',
    'APPLICATION_NAME': 'server',
    'APPLICATION_COLOUR': 'FG_BLUE',
    'PORT_HTTP': 80,
    'PORT_HTTPS': 443,
    'HOSTNAME': (ENVIRONMENT.PRODUCTION) ? 'demo.io' : '127.0.0.1',
    'IP_ADDRESS': '0.0.0.0',
    'VIEW_ENGINE': 'ejs',
};
export const API = {
    'SCOPE_NAME': 'demoserver',
    'SCOPE_COLOUR': 'FG_GREEN',
    'APPLICATION_NAME': 'api',
    'APPLICATION_COLOUR': 'FG_GREEN',
    'PORT_HTTP': 8000,
    'PORT_HTTPS': 8000,
    'HOSTNAME': (ENVIRONMENT.PRODUCTION) ? 'demo.io' : '127.0.0.1',
    'IP_ADDRESS': '0.0.0.0',
    'PREFIX_V1': '/api/v1'
};
export const DATABASE = {
    'NAME': 'demoserver',
    'HOSTNAME': '127.0.0.1',
    'PROTOCOL': 'mongodb',
    'PORT': 27017,
    'OPTIONS': {
        'useNewUrlParser': true,
        'useUnifiedTopology': true,
    },
};
export const MAIL = {
    'HOSTNAME': 'mail.privateemail.com',
    'PORT': 465,
};
export const DIRECTORY = {
    'VIEW': path.join(path.resolve(), 'src', 'view'),
    'PUBLIC': path.join(path.resolve(), 'public'),
    'ROUTE': path.join(path.resolve(), 'src', 'route'),
    'EMAIL': path.join(path.resolve(), 'src', 'email'),
};
export const SERVER_ROUTE = {
    'INDEX': '/',
    'DASHBOARD': '/dashboard',
    'LOGIN': '/login',
    'REGISTER': '/register',
    'TEMP': '/temp',
};
export const API_ROUTE = {
    'TEMP': {
        'RESET_DATABASE': `${API.PREFIX_V1}/temp/resetDatabase`,
    },
    'USER': {
        'CREATE': `${API.PREFIX_V1}/user/create`,
        'EDIT': `${API.PREFIX_V1}/user/edit`,
        'DELETE': `${API.PREFIX_V1}/user/delete`,
        'CONFIRM_EMAIL_REQUEST': `${API.PREFIX_V1}/user/confirm_email_request`,
        'CONFIRM_EMAIL': `${API.PREFIX_V1}/user/confirm_email`,
        'AUTHENTICATE': `${API.PREFIX_V1}/user/authenticate`,
        'DEAUTHENTICATE': `${API.PREFIX_V1}/user/deauthenticate`,
        'RESET_PASSWORD_REQUEST': `${API.PREFIX_V1}/user/reset_password_request`,
        'RESET_PASSWORD': `${API.PREFIX_V1}/user/reset_password`,
    },
};
export const LOCATIONS = [
    "London, United Kingdom",
    "Birmingham, United Kingdom",
    "Glasgow, United Kingdom",
    "Liverpool, United Kingdom",
    "Bristol, United Kingdom",
    "Manchester, United Kingdom",
    "Sheffield, United Kingdom",
    "Leeds, United Kingdom",
    "Edinburgh, United Kingdom",
    "Leicester, United Kingdom",
    "Coventry, United Kingdom",
    "Bradford, United Kingdom",
    "Cardiff, United Kingdom",
    "Belfast, United Kingdom",
    "Nottingham, United Kingdom",
    "Kingston upon Hull, United Kingdom",
    "Newcastle upon Tyne, United Kingdom",
    "Stoke-on-Trent, United Kingdom",
    "Southampton, United Kingdom",
    "Derby, United Kingdom",
    "Portsmouth, United Kingdom",
    "Brighton, United Kingdom",
    "Plymouth, United Kingdom",
    "Northampton, United Kingdom",
    "Reading, United Kingdom",
    "Luton, United Kingdom",
    "Wolverhampton, United Kingdom",
    "Bolton, United Kingdom",
    "Aberdeen, United Kingdom",
    "Bournemouth, United Kingdom",
    "Norwich, United Kingdom",
    "Swindon, United Kingdom",
    "Swansea, United Kingdom",
    "Milton Keynes, United Kingdom"
];
