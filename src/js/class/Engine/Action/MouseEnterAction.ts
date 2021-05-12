import Camera from '../Camera/Camera.js';
import Action, { ActionDetails, ActionCallback } from './Action.js';

export default class MouseEnterAction extends Action {
    public constructor(callback : ActionCallback) {
        super(callback);
    }

    public listen() : void {
        Camera.canvas.addEventListener('mouseenter', this.dispatch.bind(this));
    }

    public getActionDetails(event ?: WheelEvent) : ActionDetails {
        const cameraBoundingRectangle = (event.target as HTMLElement).getBoundingClientRect();

        return {
            'cameraX': event.clientX - cameraBoundingRectangle.left,
            'cameraY': event.clientY - cameraBoundingRectangle.top,
            'worldX': 0,
            'worldY': 0,
        };
    } 
}