import Action from './Action.js';
export default class WindowResizeAction extends Action {
    constructor(callback) {
        super(callback);
    }
    listen() {
        window.addEventListener('resize', this.dispatch.bind(this));
    }
    getActionDetails(event) {
        return {
            'width': window.innerWidth,
            'height': window.innerHeight,
        };
    }
}
