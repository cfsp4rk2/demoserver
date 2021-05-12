import Camera from '../../Camera/Camera.js';
import Action, { ActionDetails, ActionCallback } from '../Action.js';
import MouseButtonAction from './MouseButtonAction.js';

export default class MouseButtonReleaseAction extends MouseButtonAction {
    public constructor(callback : ActionCallback) {
        super(callback);
    }

    public listen() : void {
        Camera.canvas.addEventListener('mouseup', this.dispatch.bind(this));
        Camera.canvas.addEventListener('contextmenu', event => event.preventDefault());
    }
}