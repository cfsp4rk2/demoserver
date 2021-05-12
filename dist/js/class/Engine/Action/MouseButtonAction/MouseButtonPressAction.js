import Camera from '../../Camera/Camera.js';
import MouseButtonAction from './MouseButtonAction.js';
export default class MouseButtonPressAction extends MouseButtonAction {
    constructor(callback) {
        super(callback);
    }
    listen() {
        Camera.canvas.addEventListener('mousedown', this.dispatch.bind(this));
    }
}
