export default class Log {
    private static readonly _APPLICATION_NAME = 'COMSAT';

    private static _getMessageString(message : string, context ?: string) {
        return `%c[${Log._APPLICATION_NAME}] %c${(context) ? `(${context}) ` : ''}${message}`;
    }

    public static info(message : string, context ?: string) {
        console.info(Log._getMessageString(message, context), 'font-weight: bold; color: #2f3640;', 'color: #192a56;');
    }
}