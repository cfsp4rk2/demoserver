import Form from '../lib/Form/Form';
export default class DashboardRouter {
    static initialise() {
        new Form({
            'id': 'logout',
            'route': 'http://127.0.0.1:8000/api/v1/user/deauthenticate',
            'method': 'POST',
            'options': {
                'credentials': 'include'
            },
            'successCallback': DashboardRouter._formSuccessCallback,
        });
    }
    static _formSuccessCallback(data) {
        window.location.href = '/login';
    }
}
