;
;
/**
 * Log v2.3.3
 *
 * The Log class provides a means for outputting information to the console.
 *
 * @todo Export all logs to an output directory.
 * Trace logs should go to one file.
 * >= info logs to another.
 * >= error logs to another.
 *
 * @todo Provide a format or template for _getLogString.
 *
 * @todo Update the comments to include return values.
 *
 * @todo Add compact date modifier.
 *
 * @todo Need to research and implement standard colours.
 *
 * 2.3.2 - Implemented the email method.
 * 2.3.3 - Uses trace method for initialisation statement.
 *
 */
export default class Log {
    /**
     * The Log constructor used to set instance settings.
     * Sets the scope name + colour, application name + colour, formatting flag and minimum verbosity.
     *
     * @param {LogConfiguration} configuration - The main configuration object.
     * @param {string} [configuration.scopeName] - The name of the organisation, to be prefixed to all messages.
     * @param {string} [configuration.scopeColour] - The escape code identifier for the scope name.
     * @param {string} [configuration.applicationName] - The name of the application, to be prefixed to all messages.
     * @param {string} [configuration.applicationColour] - The escape code identifier for the application name.
     * @param {string} [configuration.verbosity] - The minimum verbosity level of the message output.
     * @param {boolean} [configuration.formattingFlag] - Flag to determine whether to use escape codes.
     */
    constructor(configuration) {
        this._scopeName = '<scope_name>';
        this._scopeColour = 'FG_BLUE';
        this._applicationName = '<application_name>';
        this._applicationColour = 'FG_BLUE';
        this._verbosity = 'info';
        this._formattingFlag = true;
        Log._instanceCount += 1;
        this._instanceId = Log._instanceCount;
        if (configuration.scopeName)
            this._scopeName = configuration.scopeName;
        if (configuration.scopeColour)
            this._scopeColour = configuration.scopeColour;
        if (configuration.applicationName)
            this._applicationName = configuration.applicationName;
        if (configuration.applicationColour)
            this._applicationColour = configuration.applicationColour;
        if (configuration.verbosity)
            this._verbosity = configuration.verbosity;
        if (configuration.formattingFlag != null)
            this._formattingFlag = configuration.formattingFlag;
        this.trace('Log initialised.');
    }
    ;
    /**
     * Simply returns a colour code string by id.
     *
     * @param {string} codeId - The string identifier for the escape code lookup table.
     */
    _getCode(codeId) {
        return (this._formattingFlag) ? Log._ESCAPE_CODE_LOOKUP[codeId] : '';
    }
    ;
    /**
     * The main function that crafts the string to be logged.
     *
     * @param {string} message - The message to be logged.
     * @param {string} messageColourCode - The colour code escape sequence.
     * @param {string} [context] - The context to be prefixed to the message.
     */
    _getLogString(message, messageColourCode, context) {
        return `[${this._getCode('FG_GREY')}${new Date().toUTCString()}${this._getCode('RESET')}] ` // Date
            + `[${this._getCode('FG_GREY')}#${this._instanceId}${this._getCode('RESET')}] ` // Instance ID
            + `[${this._getCode(this._scopeColour)}${this._scopeName}${this._getCode('RESET')}] ` // Scope Name
            + `[${this._getCode(this._applicationColour)}${this._applicationName}${this._getCode('RESET')}] ` // Application Name
            + `${(context) ? `[${this._getCode('FG_WHITE')}${context}${this._getCode('RESET')}] ` : ''}` // Optional Context
            + `${messageColourCode}${message}${this._getCode('RESET')}`; // Message
    }
    ;
    /**
     * The 'trace' logging method. Used for basic networking related messages. Outputs in grey.
     *
     * @param {string} message - The message to be logged.
     * @param {string} [context] - The context to be prefixed to the message.
     */
    trace(message, context) {
        if (Log._VERBOSITY_LOOKUP.indexOf(this._verbosity) <= Log._VERBOSITY_LOOKUP.indexOf('trace'))
            console.log(this._getLogString(message, this._getCode('FG_GREY'), context));
        return true;
    }
    ;
    /**
     * The 'info' logging method. Basic information. Outputs in white.
     *
     * @param {string} message - The message to be logged.
     * @param {string} [context] - The context to be prefixed to the message.
     */
    info(message, context) {
        if (Log._VERBOSITY_LOOKUP.indexOf(this._verbosity) <= Log._VERBOSITY_LOOKUP.indexOf('info'))
            console.log(this._getLogString(message, this._getCode('FG_WHITE'), context));
        return true;
    }
    ;
    /**
     * The 'warn' logging method. Warns the user that there may be an issue. Outputs in orange.
     *
     * @param {string} message - The message to be logged.
     * @param {string} [context] - The context to be prefixed to the message.
     */
    warn(message, context) {
        if (Log._VERBOSITY_LOOKUP.indexOf(this._verbosity) <= Log._VERBOSITY_LOOKUP.indexOf('warn'))
            console.log(this._getLogString(message, this._getCode('FG_ORANGE'), context));
        return true;
    }
    ;
    /**
     * The 'error' logging method. Lets the user know an error has occured. Outputs in red.
     *
     * @param {string} message - The message to be logged.
     * @param {string} [context] - The context to be prefixed to the message.
     */
    error(message, context) {
        if (Log._VERBOSITY_LOOKUP.indexOf(this._verbosity) <= Log._VERBOSITY_LOOKUP.indexOf('error'))
            console.log(this._getLogString(message, this._getCode('FG_RED'), context));
        return false;
    }
    ;
    /**
     * The 'fatal' logging method. Highest form of error, stops the application. Outputs in red and black.
     *
     * @param {string} message - The message to be logged.
     * @param {string} [context] - The context to be prefixed to the message.
     */
    fatal(message, context) {
        if (Log._VERBOSITY_LOOKUP.indexOf(this._verbosity) <= Log._VERBOSITY_LOOKUP.indexOf('fatal'))
            console.log(this._getLogString(message, `${this._getCode('BG_RED')}${this._getCode('FG_BLACK')}`, context));
        process.exit(1);
    }
    ;
    /**
     * The 'httpRequest' logging method. States the HTTP request information. Uses the trace method.
     *
     * @param {express.Request} request - The incoming express request object.
     */
    httpRequest(request) {
        return this.trace(`(${request.method}) `
            + `${request.connection.remoteAddress} -> `
            + `${request.protocol}://${request.get('host')}${request.originalUrl}`);
    }
    ;
    /**
     * The 'database' logging method. States the information processed by the database. Uses the trace method.
     *
     * @param {string} url - The database URL.
     * @param {string} dataId - An identifier for the data being processed.
     * @param {string} method - The processing method.
     */
    database(url, dataId, method) {
        return this.trace(`(DATABASE) ${method} ${dataId} -> ${url}`);
    }
    ;
    /**
     * The 'email' logging method. States an email being sent to an address. Uses the trace method.
     *
     * @param {string} url - The database URL.
     * @param {string} dataId - An identifier for the data being processed.
     * @param {string} method - The processing method.
     */
    email(emailId, recipient) {
        return this.trace(`(EMAIL) ${emailId} -> ${recipient}`);
    }
    ;
}
Log._instanceCount = 0;
Log._VERBOSITY_LOOKUP = ['trace', 'info', 'warn', 'error', 'fatal'];
Log._ESCAPE_CODE_LOOKUP = {
    'RESET': '\x1b[0m',
    'FG_GREY': '\x1b[38;5;8m',
    'FG_WHITE': '\x1b[38;5;254m',
    'FG_ORANGE': '\x1b[38;5;11m',
    'FG_RED': '\x1b[38;5;9m',
    'FG_BLUE': '\x1b[38;5;27m',
    'FG_BLACK': '\x1b[38;5;0m',
    'FG_GREEN': '\x1b[38;5;10m',
    'BG_RED': '\x1b[48;5;160m',
};
;
