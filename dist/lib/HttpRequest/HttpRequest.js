import http from 'http';
import https from 'https';
;
export default class HttpRequest {
    constructor(configuration) {
        this._initialised = false;
        if (!(configuration.protocol === 'http' || configuration.protocol === 'https'))
            return;
        this._protocol = (configuration.protocol === 'http') ? http : https;
        delete configuration.protocol;
        this.configuration = configuration;
        this._initialised = true;
    }
    ;
    async send(data) {
        return new Promise(resolve => {
            if (!(this._initialised)) {
                this.error = 'HttpRequest has not been configured.';
                resolve(false);
            }
            const request = this._protocol.request(this.configuration, (response) => {
                this.responseStatusCode = response.statusCode;
                this.responseHeaders = response.headers;
                let responseData = '';
                response.on('data', (dataChunk) => responseData += dataChunk);
                response.on('end', () => {
                    this.responseData = responseData;
                    resolve(true);
                });
            });
            request.on('error', (error) => {
                this.error = error;
                resolve(false);
            });
            request.write(JSON.stringify(data));
            request.end();
        });
    }
    ;
}
;
