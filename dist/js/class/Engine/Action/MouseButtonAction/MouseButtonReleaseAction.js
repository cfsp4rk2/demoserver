import Camera from '../../Camera/Camera.js';
import MouseButtonAction from './MouseButtonAction.js';
export default class MouseButtonReleaseAction extends MouseButtonAction {
    constructor(callback) {
        super(callback);
    }
    listen() {
        Camera.canvas.addEventListener('mouseup', this.dispatch.bind(this));
        Camera.canvas.addEventListener('contextmenu', event => event.preventDefault());
    }
}
