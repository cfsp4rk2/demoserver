import KeyAction from './KeyAction.js';
export default class KeyPressAction extends KeyAction {
    constructor(callback) {
        super(callback);
    }
    listen() {
        window.addEventListener('keydown', this.dispatch.bind(this));
    }
}
