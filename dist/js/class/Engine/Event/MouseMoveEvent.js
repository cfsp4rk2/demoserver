import Camera from '../Camera/Camera.js';
import Event from './Event.js';
export default class MouseMoveEvent extends Event {
    constructor(callback) {
        super(callback);
    }
    listen() {
        Camera.canvas.addEventListener('mousemove', this.dispatch.bind(this));
    }
}
