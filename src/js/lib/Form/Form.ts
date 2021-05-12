interface Dictionary<TValue> { [key : string] : TValue; }

interface FormConfiguration {
    'id' : string;
    'route' : string;
    'method' : string;
    'data' ?: Array<string>;
    'options' ?: Dictionary<string>;
    'preRequestCallback' ?: Function;
    'successCallback' ?: Function;
    'errorCallback' ?: Function;
}

export interface FormResponse { [key : string] : string; }

export default class Form {
    public route : string;

    public data : Array<string> = [];

    public options : Dictionary<string> = {};

    public method = 'POST';

    public preRequestCallback : Function;
    public successCallback : Function;
    public errorCallback : Function;

    private _id : string;
    private _formElement : HTMLFormElement;
    private _submitButtonElement : HTMLFormElement;

    public constructor(configuration : FormConfiguration) {
        this._id = configuration.id;

        this.route = configuration.route;

        if (configuration.data) this.data = configuration.data;

        if (configuration.options) this.options = configuration.options;

        this.preRequestCallback = configuration.preRequestCallback;
        this.successCallback = configuration.successCallback;
        this.errorCallback = configuration.errorCallback;

        if (configuration.method != null) this.method = configuration.method;

        this._formElement = document.querySelector(`[data-cf-form="${this._id}"]`);
        if (this._formElement == null) return;

        this._submitButtonElement = this._formElement.querySelector('[data-cf-form="submit"]');

        this._submitButtonElement.addEventListener('click', event => this._submit(event));
    }

    private async _submit(event : MouseEvent) : Promise<void> {
        event.preventDefault();
        
        const formData = new FormData(this._formElement);

        const details = { } as any;

        this.data.forEach(field => details[field] = formData.get(field));

        if (this.preRequestCallback != null && !(this.preRequestCallback())) return;

        const response = await fetch(this.route, {
            'method': this.method,
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify(details),
            ...this.options,
        });

        let responseDetails = {
            'status': response.status,
            'headers': response.headers,
        };

        let callback;
        if (response.status >= 200 && response.status < 300) callback = this.successCallback;
        else callback = this.errorCallback;

        const contentType = response.headers.get('content-type');

        if (contentType !== null && contentType.indexOf('application/json') !== -1) {
            (responseDetails as any).type = 'json';
            return callback(await response.json(), responseDetails);

        } else if (contentType !== null) {
            (responseDetails as any).type = 'text';
            return callback(await response.text(), responseDetails);
        }

        return callback(responseDetails);
    }
}