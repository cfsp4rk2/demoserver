import Camera from '../Camera/Camera.js';
import Action from './Action.js';
export default class MouseClickAction extends Action {
    constructor(callback) {
        super(callback);
    }
    listen() {
        Camera.canvas.addEventListener('click', this.dispatch.bind(this));
    }
}
