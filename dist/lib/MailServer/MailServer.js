import nodemailer from 'nodemailer';
import fs from 'fs';
;
;
/**
 * MailServer v0.1
 */
export default class MailServer {
    constructor(configuration) {
        this._templates = {};
        this._log = configuration.log;
        this._hostname = configuration.hostname;
        this._port = configuration.port;
        this._username = configuration.username;
        this._password = configuration.password;
        this._initialise();
    }
    ;
    _initialise() {
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
    }
    ;
    newTemplate(id, configuration) {
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
        }
        catch (error) {
            this._log.fatal(`Unable to create MailServer template "${id}".\n${error}`);
        }
    }
    ;
    async send(templateId, recipient, variables) {
        let htmlMessage = this._templates[templateId].html.message;
        let textMessage = this._templates[templateId].text.message;
        this._templates[templateId].html.variables.forEach((variable) => {
            htmlMessage = htmlMessage.replace(new RegExp(`{${variable}}`, 'g'), variables[variable]);
        });
        this._templates[templateId].text.variables.forEach((variable) => {
            textMessage = textMessage.replace(new RegExp(`{${variable}}`, 'g'), variables[variable]);
        });
        let attemptCount = 1;
        while (attemptCount <= 3) {
            try {
                await this._transporter.sendMail({
                    'from': this._templates[templateId].sender,
                    'to': recipient,
                    'subject': this._templates[templateId].subject,
                    'text': textMessage,
                    'html': htmlMessage
                });
                return this._log.email(templateId, recipient);
            }
            catch (error) {
                if (attemptCount === 3)
                    return this._log.error(`Unable to send email "${templateId}" to ${recipient}.\n${error}`);
                this._log.warn(`Unable to send email. Retrying ${attemptCount}/3.`);
                attemptCount += 1;
            }
        }
    }
    ;
}
;
