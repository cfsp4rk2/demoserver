import MouseButtonPressAction from '../Action/MouseButtonAction/MouseButtonPressAction';
import MouseButtonReleaseAction from '../Action/MouseButtonAction/MouseButtonReleaseAction.js';
import MouseMoveAction from '../Action/MouseMoveAction.js';
import MouseScrollAction from '../Action/MouseScrollAction.js';
import Camera from '../Camera/Camera.js';
export default class Input {
    static initialise() {
        new MouseButtonPressAction(Input._mouseButtonPressCallback);
        new MouseButtonReleaseAction(Input._mouseButtonReleaseCallback);
        new MouseMoveAction(Input._mouseMoveCallback);
        new MouseScrollAction(Input._mouseScrollCallback);
    }
    static _panEnable(cameraX, cameraY) {
        Input._panMode = true;
        Input._panPositionX = cameraX;
        Input._panPositionY = cameraY;
        Camera.canvas.style.cursor = 'grab';
    }
    static _panDisable() {
        Input._panMode = false;
        Camera.canvas.style.cursor = 'default';
    }
    static _pan(cameraX, cameraY) {
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
    static _zoomIn() {
        Camera.zoomX *= 1.01;
        Camera.zoomY *= 1.01;
    }
    static _zoomOut() {
        Camera.zoomX *= 0.99;
        Camera.zoomY *= 0.99;
    }
    static _mouseButtonPressCallback(details) {
        if (details.button === Input._PAN_BUTTON)
            Input._panEnable(details.cameraX, details.cameraY);
    }
    static _mouseButtonReleaseCallback(details) {
        if (details.button === Input._PAN_BUTTON)
            Input._panDisable();
    }
    static _mouseMoveCallback(details) {
        if (Input._panMode)
            Input._pan(details.cameraX, details.cameraY);
    }
    static _mouseScrollCallback(details) {
        if (details.deltaY < 0)
            Input._zoomIn();
        else if (details.deltaY > 0)
            Input._zoomOut();
    }
}
Input._panMode = false;
Input._panPositionX = 0;
Input._panPositionY = 0;
Input._PAN_BUTTON = 2;
