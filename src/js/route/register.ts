import Form, { FormResponse } from '../lib/Form/Form';

export default class RegisterRouter {
    private static _formErrorMessageElement = document.querySelector('[data-form-error]') as HTMLElement;

    public static initialise() {
        console.log('here');

        new Form({
            'id': 'register',
            'route': 'https://buzzmedia.site:8000/api/v1/user/create',
            'method': 'PUT',
            'data': ['firstName', 'lastName', 'email', 'password', 'passwordConfirm'],
            'preRequestCallback': RegisterRouter._formPreRequestCallback,
            'successCallback': RegisterRouter._formSuccessCallback,
            'errorCallback': RegisterRouter._formErrorCallback,
        });

    }

    private static _formPreRequestCallback() : boolean {
        // console.log('pre');

        return true;
    }

    private static _formSuccessCallback(data : FormResponse) : void {
        window.location.href = '/login';
    }

    private static _formErrorCallback(data : FormResponse) : void {
        RegisterRouter._formErrorMessageElement.innerText = data['error'];

        RegisterRouter._formErrorMessageElement.style.display = 'block';
    }
}