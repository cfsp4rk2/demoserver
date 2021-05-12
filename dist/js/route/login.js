import Form from '../lib/Form/Form';
export default class LoginRouter {
    static initialise() {
        new Form({
            'id': 'login',
            'route': 'http://127.0.0.1:8000/api/v1/user/authenticate',
            'method': 'POST',
            'data': ['email', 'password'],
            'options': { 'credentials': 'include' },
            'preRequestCallback': LoginRouter._formPreRequestCallback,
            'successCallback': LoginRouter._formSuccessCallback,
            'errorCallback': LoginRouter._formErrorCallback,
        });
    }
    static _formPreRequestCallback() {
        // console.log('pre');
        return true;
    }
    static _formSuccessCallback(data) {
        window.location.href = '/dashboard';
    }
    static _formErrorCallback(data) {
        LoginRouter._formErrorMessageElement.innerText = data['error'];
        LoginRouter._formErrorMessageElement.style.display = 'block';
    }
}
LoginRouter._formErrorMessageElement = document.querySelector('[data-form-error]');
