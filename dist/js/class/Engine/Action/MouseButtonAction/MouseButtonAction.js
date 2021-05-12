import Action from '../Action.js';
export default class MouseButtonAction extends Action {
    getActionDetails(event) {
        const cameraBoundingRectangle = event.target.getBoundingClientRect();
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
