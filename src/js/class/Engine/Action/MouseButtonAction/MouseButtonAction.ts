import Action, { ActionDetails, ActionCallback } from '../Action.js';

export default abstract class MouseButtonAction extends Action {
    public getActionDetails(event ?: MouseEvent) : ActionDetails {
        const cameraBoundingRectangle = (event.target as HTMLElement).getBoundingClientRect();

        return {
            'cameraX': event.clientX - cameraBoundingRectangle.left,
            'cameraY': event.clientY - cameraBoundingRectangle.top,
            'worldX': 0,
            'worldY': 0,
            'button': event.button,
            'altKeyFlag': event.altKey,
            'shiftKeyFlag': event.shiftKey,
            'controlKeyFlag': event.ctrlKey,
        };
    } 
}