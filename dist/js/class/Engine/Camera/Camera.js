import Engine from '../Engine.js';
import World from '../World/World.js';
import Log from '../../Log/Log.js';
import { CAMERA, ENGINE } from '../config.js';
export default class Camera {
    static initialise() {
        Camera.targetFps = CAMERA.TARGET_FPS;
        Camera._generateCanvas();
        Camera.resize();
        Log.info('Camera initialised.');
    }
    static getPosition() {
        return Camera._position;
    }
    static setPosition(position) {
        return (Object.assign(Camera._position, World.constrainEntity(position, Camera.width, Camera.height)));
    }
    static _generateCanvas() {
        Camera.canvas = document.createElement('canvas');
        Engine.context = Camera.canvas.getContext('2d');
        Camera._pixelRatio = Camera._getPixelRatio();
        Engine.context.setTransform(Camera._pixelRatio, 0, 0, Camera._pixelRatio, 0, 0);
        Engine.container = document.querySelector(`[${ENGINE.DEFAULT_CONTAINER_ATTRIBUTE}]`);
        Engine.container.insertBefore(Camera.canvas, Engine.container.firstChild);
        Log.info('Canvas generated.');
    }
    static resize(width = window.innerWidth, height = window.innerHeight) {
        Camera.width = width;
        Camera.height = height;
        Camera.canvas.width = Math.round(Camera.width * Camera._pixelRatio);
        Camera.canvas.height = Math.round(Camera.height * Camera._pixelRatio);
        Camera.canvas.style.width = `${Camera.width}px`;
        Camera.canvas.style.height = `${Camera.height}px`;
    }
    static _getPixelRatio(scope) {
        if (!(scope instanceof CanvasRenderingContext2D))
            scope = Engine.context;
        const devicePixelRatio = window.devicePixelRatio || 1;
        const backingStoreRatio = scope.webkitBackingStorePixelRatio
            || scope.mozBackingStorePixelRatio
            || scope.msBackingStorePixelRatio
            || scope.oBackingStorePixelRatio
            || scope.backingStorePixelRatio
            || 1;
        return devicePixelRatio / backingStoreRatio;
    }
}
Camera._position = {
    'x': 0,
    'y': 0,
};
Camera.zoomX = 1;
Camera.zoomY = 1;
