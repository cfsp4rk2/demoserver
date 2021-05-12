import { spawn } from 'child_process';
import Log from '../Log/Log';

interface ShellConfiguration {
    'log' : Log;
};

interface ErrnoException extends Error {
    'errno' ?: string;
    'code' ?: string;
    'path' ?: string;
    'syscall' ?: string;
    'stack' ?: string;
};

export default class Shell {
    private _log : Log;

    public constructor(configuration : ShellConfiguration) {
        this._log = configuration.log;

        this._log.trace('Shell initialised.');
    };

    public async execute(command : string, parameters : Array<string>) : Promise<boolean | string> {
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
    };

    private _errorCallback(error : ErrnoException) : boolean {
        if (error.code === 'ENOENT')
            this._log.error('Unknown command.');

        else this._log.error(error.toString());

        return false;
    };
};