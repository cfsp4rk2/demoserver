import Camera from '../../Camera/Camera.js';
import Action, { ActionDetails, ActionCallback } from '../Action.js';
import MouseButtonAction from './MouseButtonAction.js';

export default class MouseButtonPressAction extends MouseButtonAction {
    public constructor(callback : ActionCallback) {
        super(callback);
    }

    public listen() : void {
        Camera.canvas.addEventListener('mousedown', this.dispatch.bind(this));
    }
}