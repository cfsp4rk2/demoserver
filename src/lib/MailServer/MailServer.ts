import nodemailer from 'nodemailer';
import fs from 'fs';
import Log from '../Log/Log.js';

interface MailServerConfiguration {
    'log' : Log;
    'hostname' : string;
    'port' : number;
    'username' : string;
    'password' : string;
};

interface MailServerTemplateConfiguration {
    'sender' : string;
    'subject' : string;
    'htmlMessage' : {
        'path' : string;
        'variables' ?: Array<string>;
    };
    'textMessage' : {
        'path' : string;
        'variables' ?: Array<string>;
    };

};

/**
 * MailServer v0.1
 */
export default class MailServer {
    private _log : Log;

    private _hostname : string;
    private _port : number;
    private _username : string;
    private _password : string;

    private _transporter : nodemailer.Transporter;

    private _templates : any = { };

    public constructor(configuration : MailServerConfiguration) {
        this._log = configuration.log;
        this._hostname = configuration.hostname;
        this._port = configuration.port;
        this._username = configuration.username;
        this._password = configuration.password;

        this._initialise();
    };

    private _initialise() : void {
        this._transporter = nodemailer.createTransport({
            'host': this._hostname,
            'port': this._port,
            'auth': {
                'user': this._username,
                'pass': this._password,
            },
            'tls': {
                'secureProtocol': 'TLSv1_method'
            }
        });

        this._log.trace('MailServer initialised.');
    };

    public newTemplate(id : string, configuration : MailServerTemplateConfiguration) : void {
        try {
            this._templates[id] = {
                'sender': `"${configuration.sender}" <${this._username}>`,
                'subject': configuration.subject,
                'html': {
                    'message': fs.readFileSync(configuration.htmlMessage.path, 'utf8'),
                    'variables': configuration.htmlMessage.variables || []
                },
                'text': {
                    'message': fs.readFileSync(configuration.textMessage.path, 'utf8'),
                    'variables': configuration.textMessage.variables || []
                }
            };
            this._log.trace(`Created MailServer template "${id}".`);

        } catch(error) {
            this._log.fatal(`Unable to create MailServer template "${id}".\n${error}`);
        }
    };

    public async send(templateId : string, recipient : string, variables : { [key : string] : string }) : Promise<boolean> {
        let htmlMessage = this._templates[templateId].html.message;
        let textMessage = this._templates[templateId].text.message;

        this._templates[templateId].html.variables.forEach((variable : string) => {
            htmlMessage = htmlMessage.replace(new RegExp(`{${variable}}`, 'g'), variables[variable]);
        });

        this._templates[templateId].text.variables.forEach((variable : string) => {
            textMessage = textMessage.replace(new RegExp(`{${variable}}`, 'g'), variables[variable]);
        });

        let attemptCount = 1;

        while(attemptCount <= 3) {
            try {
                await this._transporter.sendMail({
                    'from': this._templates[templateId].sender,
                    'to': recipient,
                    'subject': this._templates[templateId].subject,
                    'text': textMessage, 
                    'html': htmlMessage
                });
    
                return this._log.email(templateId, recipient);
    
            } catch(error) {
                if (attemptCount === 3) return this._log.error(`Unable to send email "${templateId}" to ${recipient}.\n${error}`);

                this._log.warn(`Unable to send email. Retrying ${attemptCount}/3.`);

                attemptCount += 1;
            }
        }
    };

};