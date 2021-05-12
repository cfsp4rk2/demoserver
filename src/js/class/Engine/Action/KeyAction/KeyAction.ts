import Action, { ActionDetails, ActionCallback } from '../Action.js';

export default abstract class KeyAction extends Action {
    public getActionDetails(event ?: KeyboardEvent) : ActionDetails {

        return {
            'key': event.key,
            'code': event.code,
            'altKeyFlag': event.altKey,
            'shiftKeyFlag': event.shiftKey,
            'controlKeyFlag': event.ctrlKey,
        };
    } 
}