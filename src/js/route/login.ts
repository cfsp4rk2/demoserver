import Form, { FormResponse } from '../lib/Form/Form';

export default class LoginRouter {
    private static _formErrorMessageElement = document.querySelector('[data-form-error]') as HTMLElement;

    public static initialise() {

        new Form({
            'id': 'login',
            'route': 'https://buzzmedia.target:8000/api/v1/user/authenticate',
            'method': 'POST',
            'data': ['email', 'password'],
            'options': { 'credentials': 'include' },
            'preRequestCallback': LoginRouter._formPreRequestCallback,
            'successCallback': LoginRouter._formSuccessCallback,
            'errorCallback': LoginRouter._formErrorCallback,
        });

    }

    private static _formPreRequestCallback() : boolean {
        // console.log('pre');

        return true;
    }

    private static _formSuccessCallback(data : FormResponse) : void {
        window.location.href = '/dashboard';
    }

    private static _formErrorCallback(data : FormResponse) : void {
        LoginRouter._formErrorMessageElement.innerText = data['error'];

        LoginRouter._formErrorMessageElement.style.display = 'block';
    }
}