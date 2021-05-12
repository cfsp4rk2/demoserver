import Camera from '../Camera/Camera.js';
import Action, { ActionDetails, ActionCallback } from './Action.js';

export default class MouseScrollAction extends Action {
    public constructor(callback : ActionCallback) {
        super(callback);
    }

    public listen() : void {
        Camera.canvas.addEventListener('wheel', this.dispatch.bind(this));
    }

    public getActionDetails(event ?: WheelEvent) : ActionDetails {
        const cameraBoundingRectangle = (event.target as HTMLElement).getBoundingClientRect();

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