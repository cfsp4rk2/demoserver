import Form from '../lib/Form/Form';
export default class DashboardRouter {
    static initialise() {
        new Form({
            'id': 'logout',
            'route': 'https://buzzmedia.site:8000/api/v1/user/deauthenticate',
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
