import Action from '../Action.js';
export default class KeyAction extends Action {
    getActionDetails(event) {
        return {
            'key': event.key,
            'code': event.code,
            'altKeyFlag': event.altKey,
            'shiftKeyFlag': event.shiftKey,
            'controlKeyFlag': event.ctrlKey,
        };
    }
}
