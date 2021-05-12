import Action from './Action.js';
export default class WindowCloseAction extends Action {
    constructor(callback) {
        super(callback);
    }
    listen() {
        window.addEventListener('beforeunload', this.dispatch.bind(this));
    }
    getActionDetails(event) {
        return {};
    }
}
