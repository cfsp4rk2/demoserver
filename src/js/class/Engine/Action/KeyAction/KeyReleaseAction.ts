import Camera from '../../Camera/Camera.js';
import Action, { ActionDetails, ActionCallback } from '../Action.js';
import KeyAction from './KeyAction.js';

export default class KeyReleaseAction extends KeyAction {
    public constructor(callback : ActionCallback) {
        super(callback);
    }

    public listen() : void {
        window.addEventListener('keyup', this.dispatch.bind(this));
    }
}