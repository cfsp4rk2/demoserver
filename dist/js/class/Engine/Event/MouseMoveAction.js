import Camera from '../Camera/Camera.js';
import Action from './Action.js';
export default class MouseMoveAction extends Action {
    constructor(callback) {
        super(callback);
    }
    listen() {
        Camera.canvas.addEventListener('mousemove', this.dispatch.bind(this));
    }
}
