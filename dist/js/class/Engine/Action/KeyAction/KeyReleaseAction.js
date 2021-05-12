import KeyAction from './KeyAction.js';
export default class KeyReleaseAction extends KeyAction {
    constructor(callback) {
        super(callback);
    }
    listen() {
        window.addEventListener('keyup', this.dispatch.bind(this));
    }
}
