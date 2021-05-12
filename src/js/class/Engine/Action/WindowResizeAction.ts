import Action, { ActionDetails, ActionCallback } from './Action.js';

export default class WindowResizeAction extends Action {
    public constructor(callback : ActionCallback) {
        super(callback);
    }

    public listen() : void {
        window.addEventListener('resize', this.dispatch.bind(this));
    }

    public getActionDetails(event ?: Event) : ActionDetails {
        return {
            'width': window.innerWidth,
            'height': window.innerHeight,
        };
    } 
}