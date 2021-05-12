import Camera from '../Camera/Camera.js';
import Action from './Action.js';
export default class MouseScrollAction extends Action {
    constructor(callback) {
        super(callback);
    }
    listen() {
        Camera.canvas.addEventListener('wheel', this.dispatch.bind(this));
    }
    getActionDetails(event) {
        const cameraBoundingRectangle = event.target.getBoundingClientRect();
        return {
            'cameraX': event.clientX - cameraBoundingRectangle.left,
            'cameraY': event.clientY - cameraBoundingRectangle.top,
            'worldX': 0,
            'worldY': 0,
            'deltaX': event.deltaX,
            'deltaY': event.deltaY,
            'altKeyFlag': event.altKey,
            'shiftKeyFlag': event.shiftKey,
            'controlKeyFlag': event.ctrlKey,
        };
    }
}
