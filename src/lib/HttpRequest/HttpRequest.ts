import http from 'http';
import https from 'https';

interface HttpRequestConfiguration {
    'protocol' : string;
    'hostname' : string;
    'port' : number;
    'path' : string;
    'method' : string;
    'headers' : Object;
};

export default class HttpRequest {
    public configuration : HttpRequestConfiguration;

    public responseData : string;
    public responseStatusCode : number;
    public responseHeaders : Object;

    public error : Error | string;

    private _protocol : any;

    private _initialised = false;

    public constructor(configuration : HttpRequestConfiguration) {
        if (!(configuration.protocol === 'http' || configuration.protocol === 'https')) return;

        this._protocol = (configuration.protocol === 'http') ? (http as any) : (https as any);
        delete configuration.protocol;

        this.configuration = configuration;

        this._initialised = true;
    };

    public async send(data : any) : Promise<Boolean> {
        return new Promise(resolve => {
            if (!(this._initialised)) {
                this.error = 'HttpRequest has not been configured.';
                resolve(false);
            }

            const request = this._protocol.request((this.configuration as any), (response : any) => {
                this.responseStatusCode = response.statusCode;
                this.responseHeaders = response.headers;

                let responseData = '';
                response.on('data', (dataChunk : any) => responseData += dataChunk);

                response.on('end', () => {
                    this.responseData = responseData;
                    resolve(true);
                });
            });
            
            request.on('error', (error : any) => {
                this.error = error;
                resolve(false);
            });

            request.write(JSON.stringify(data));

            request.end();
        });
    };
};