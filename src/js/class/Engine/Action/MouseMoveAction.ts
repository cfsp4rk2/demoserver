import Camera from '../Camera/Camera.js';
import Action, { ActionDetails, ActionCallback } from './Action.js';

export default class MouseMoveAction extends Action {
    public constructor(callback : ActionCallback) {
        super(callback);
    }

    public listen() : void {
        Camera.canvas.addEventListener('mousemove', this.dispatch.bind(this));
    }

    public getActionDetails(event ?: MouseEvent) : ActionDetails {
        const cameraBoundingRectangle = (event.target as HTMLElement).getBoundingClientRect();

        return {
            'cameraX': event.clientX - cameraBoundingRectangle.left,
            'cameraY': event.clientY - cameraBoundingRectangle.top,
            'worldX': 0,
            'worldY': 0,
            'altKeyFlag': event.altKey,
            'shiftKeyFlag': event.shiftKey,
            'controlKeyFlag': event.ctrlKey,
        };
    } 
}