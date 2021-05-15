import Form from '../lib/Form/Form';
export default class RegisterRouter {
    static initialise() {
        console.log('here');
        new Form({
            'id': 'register',
            'route': 'https://buzzmedia.target:8000/api/v1/user/create',
            'method': 'PUT',
            'data': ['firstName', 'lastName', 'email', 'password', 'passwordConfirm'],
            'preRequestCallback': RegisterRouter._formPreRequestCallback,
            'successCallback': RegisterRouter._formSuccessCallback,
            'errorCallback': RegisterRouter._formErrorCallback,
        });
    }
    static _formPreRequestCallback() {
        // console.log('pre');
        return true;
    }
    static _formSuccessCallback(data) {
        window.location.href = '/login';
    }
    static _formErrorCallback(data) {
        RegisterRouter._formErrorMessageElement.innerText = data['error'];
        RegisterRouter._formErrorMessageElement.style.display = 'block';
    }
}
RegisterRouter._formErrorMessageElement = document.querySelector('[data-form-error]');
