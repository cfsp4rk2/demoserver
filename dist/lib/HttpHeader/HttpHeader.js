;
;
export default class HttpHeader {
    constructor(configuration) {
        this._setHeaders = {};
        this._removeHeaders = [
            'X-Powered-By',
        ];
        this.apply = (request, response, next) => {
            const headers = Object.assign({}, HttpHeader.DEFAULT_HEADER_LOOKUP, this._setHeaders);
            Object.entries(headers).forEach(headerPair => response.header(headerPair[0], headerPair[1]));
            this._removeHeaders.forEach(headerKey => response.removeHeader(headerKey));
            next();
        };
        this._log = configuration.log;
        if (configuration.setHeaders)
            this._setHeaders = configuration.setHeaders;
        if (configuration.removeHeaders)
            this._removeHeaders = configuration.removeHeaders;
        this._log.trace('HttpHeader initialised.');
    }
    ;
    set(headerKey, headerValue) {
        this._setHeaders[headerKey] = headerValue;
        this._removeHeaders = this._removeHeaders.filter(header => header !== headerKey);
    }
    ;
    remove(headerKey) {
        if (!(this._removeHeaders.includes(headerKey)))
            this._removeHeaders.push(headerKey);
        delete this._setHeaders[headerKey];
    }
    ;
}
HttpHeader.DEFAULT_HEADER_LOOKUP = {
    'Referrer-Policy': 'no-referrer',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; preload',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    // 'Content-Security-Policy': `default-src 'self'; `
    //     + `script-src 'self'; `
    //     + `connect-src 'self'; `
    //     + `img-src 'self'; `
    //     + `style-src 'self'; `
    //     + `base-uri 'self'; `
    //     + `form-action 'self'; `
    //     + `worker-src blob:`,
    'Feature-Policy': `ambient-light-sensor 'none'; `
        + `autoplay 'none'; `
        + `accelerometer 'none'; `
        + `camera 'none'; `
        + `display-capture 'none'; `
        + `document-domain 'none'; `
        + `encrypted-media 'none'; `
        + `fullscreen 'self'; `
        + `gyroscope 'none'; `
        + `magnetometer 'none'; `
        + `microphone 'none'; `
        + `midi 'none'; `
        + `payment 'none'; `
        + `picture-in-picture 'none'; `
        + `sync-xhr 'none'; `
        + `usb 'none'; `
        + `wake-lock 'none'; `
        + `xr-spatial-tracking 'none'; `
        + `geolocation 'none'; `,
};
;
