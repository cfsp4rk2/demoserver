import global from './route/global.js';
import dashboard from './route/dashboard.js';
import index from './route/index.js';
import login from './route/login.js';
import register from './route/register.js';
import temp from './route/temp.js';
export default class Router {
    static initialise() {
        Router._route('*', global);
        Router._route('/', index);
        Router._route('/dashboard', dashboard);
        Router._route('/login', login);
        Router._route('/register', register);
        Router._route('/temp', temp);
    }
    static _route(context, Class) {
        if (context === window.location.pathname || context === '*')
            Class.initialise();
    }
}
Router.initialise();
