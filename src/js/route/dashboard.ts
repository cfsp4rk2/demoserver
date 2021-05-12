import Form, { FormResponse } from '../lib/Form/Form';

export default class DashboardRouter {
    public static initialise() {
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

    private static _formSuccessCallback(data : FormResponse) : void {
        window.location.href = '/login';
    }
}