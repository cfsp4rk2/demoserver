export default class Log {
    static _getMessageString(message, context) {
        return `%c[${Log._APPLICATION_NAME}] %c${(context) ? `(${context}) ` : ''}${message}`;
    }
    static info(message, context) {
        console.info(Log._getMessageString(message, context), 'font-weight: bold; color: #2f3640;', 'color: #192a56;');
    }
}
Log._APPLICATION_NAME = 'COMSAT';
