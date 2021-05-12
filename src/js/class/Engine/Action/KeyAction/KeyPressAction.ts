import Camera from '../../Camera/Camera.js';
import Action, { ActionDetails, ActionCallback } from '../Action.js';
import KeyAction from './KeyAction.js';

export default class KeyPressAction extends KeyAction {
    public constructor(callback : ActionCallback) {
        super(callback);
    }

    public listen() : void {
        window.addEventListener('keydown', this.dispatch.bind(this));
    }
}