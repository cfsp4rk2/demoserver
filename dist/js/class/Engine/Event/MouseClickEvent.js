import Camera from '../Camera/Camera.js';
import Event from './Event.js';
export default class MouseClickEvent extends Event {
    constructor(callback) {
        super(callback);
    }
    listen() {
        Camera.canvas.addEventListener('click', this.dispatch.bind(this));
    }
}
