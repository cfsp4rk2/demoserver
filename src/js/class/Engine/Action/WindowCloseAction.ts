import Action, { ActionDetails, ActionCallback } from './Action.js';

export default class WindowCloseAction extends Action {
    public constructor(callback : ActionCallback) {
        super(callback);
    }

    public listen() : void {
        window.addEventListener('beforeunload', this.dispatch.bind(this));
    }

    public getActionDetails(event ?: Event) : ActionDetails {
        return { };
    } 
}