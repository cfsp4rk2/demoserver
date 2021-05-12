import { spawn } from 'child_process';
;
;
export default class Shell {
    constructor(configuration) {
        this._log = configuration.log;
        this._log.trace('Shell initialised.');
    }
    ;
    async execute(command, parameters) {
        return new Promise((resolve, reject) => {
            const executedCommand = spawn(command, parameters);
            let output = '';
            const outputBuffer = [];
            executedCommand.stdout.on('data', data => {
                output += data;
                outputBuffer.push(data);
            });
            executedCommand.on('error', error => resolve(this._errorCallback(error)));
            executedCommand.on('close', code => {
                this._log.trace(`Connection closed: ${code}`);
                resolve(output);
            });
        });
    }
    ;
    _errorCallback(error) {
        if (error.code === 'ENOENT')
            this._log.error('Unknown command.');
        else
            this._log.error(error.toString());
        return false;
    }
    ;
}
;
