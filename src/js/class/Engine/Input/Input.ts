import Action, { ActionDetails } from '../Action/Action.js';
import MouseButtonPressAction from '../Action/MouseButtonAction/MouseButtonPressAction';
import MouseButtonReleaseAction from '../Action/MouseButtonAction/MouseButtonReleaseAction.js';
import MouseMoveAction from '../Action/MouseMoveAction.js';
import MouseScrollAction from '../Action/MouseScrollAction.js';
import MouseEnterAction from '../Action/MouseEnterAction.js';
import MouseLeaveAction from '../Action/MouseLeaveAction.js';
import KeyPressAction from '../Action/KeyAction/KeyPressAction.js';
import KeyReleaseAction from '../Action/KeyAction/KeyReleaseAction.js';
import WindowResizeAction from '../Action/WindowResizeAction.js';
import WindowCloseAction from '../Action/WindowCloseAction.js';
import Camera from '../Camera/Camera.js';
import { deflate } from 'zlib';

export default class Input {
    private static _panMode = false;
    private static _panPositionX = 0;
    private static _panPositionY = 0;

    private static readonly _PAN_BUTTON = 2;

    public static initialise() : void {
        new MouseButtonPressAction(Input._mouseButtonPressCallback);
        new MouseButtonReleaseAction(Input._mouseButtonReleaseCallback);
        new MouseMoveAction(Input._mouseMoveCallback);
        new MouseScrollAction(Input._mouseScrollCallback);
    }

    private static _panEnable(cameraX : number, cameraY : number) : void {
        Input._panMode = true;
        Input._panPositionX = cameraX;
        Input._panPositionY = cameraY;
        Camera.canvas.style.cursor = 'grab';
    }

    private static _panDisable() : void {
        Input._panMode = false;
        Camera.canvas.style.cursor = 'default';
    }

    private static _pan(cameraX : number, cameraY : number) : void {
        let x = Camera.getPosition().x;
        let y = Camera.getPosition().y;

        x += Input._panPositionX - cameraX;
        y -= Input._panPositionY - cameraY;

        Camera.setPosition({ x, y });

        Input._panPositionX = cameraX;
        Input._panPositionY = cameraY;
    }

    // private static _zoom(deltaX : number) : void {
    //     Camera.zoom -= deltaX * 0.05;
    // }

    private static _zoomIn() : void {
        Camera.zoomX *= 1.01;
        Camera.zoomY *= 1.01;
    }

    private static _zoomOut() : void {
        Camera.zoomX *= 0.99;
        Camera.zoomY *= 0.99;
    }

    private static _mouseButtonPressCallback(details : ActionDetails) : void {
        if (details.button === Input._PAN_BUTTON) Input._panEnable(details.cameraX as number, details.cameraY as number);
    }

    private static _mouseButtonReleaseCallback(details : ActionDetails) : void {
        if (details.button === Input._PAN_BUTTON) Input._panDisable();
    }

    private static _mouseMoveCallback(details : ActionDetails) : void {
        if (Input._panMode) Input._pan(details.cameraX as number, details.cameraY as number);
    }

    private static _mouseScrollCallback(details : ActionDetails) : void {
        if (details.deltaY < 0) Input._zoomIn();
        else if (details.deltaY > 0) Input._zoomOut();
    }
}