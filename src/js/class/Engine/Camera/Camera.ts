import Engine from '../Engine.js';
import World from '../World/World.js';
import Log from '../../Log/Log.js';
import Compute from '../../Compute/Compute.js';
import { Vector2 } from '../../Structure/Structure.js';
import { CAMERA, ENGINE } from '../config.js';

export interface CanvasRenderingContext2dWithBackingStoreRatios extends CanvasRenderingContext2D {
    'webkitBackingStorePixelRatio' ?: number;
    'mozBackingStorePixelRatio' ?: number;
    'msBackingStorePixelRatio' ?: number;
    'oBackingStorePixelRatio' ?: number;
    'backingStorePixelRatio' ?: number;
}

export default class Camera {
    private static _position = {
        'x': 0,
        'y': 0,
    };

    public static width : number;
    public static height : number;

    private static _pixelRatio : number;

    public static fps : number;
    public static targetFps : number;

    public static canvas : HTMLCanvasElement;

    public static zoomX = 1;
    public static zoomY = 1;
 
    public static initialise() : void {
        Camera.targetFps = CAMERA.TARGET_FPS;

        Camera._generateCanvas();

        Camera.resize();

        Log.info('Camera initialised.');
    }

    public static getPosition() : Vector2 {
        return Camera._position;
    }

    public static setPosition(position : Vector2) : Vector2 {
        return (Object.assign(Camera._position, World.constrainEntity(position, Camera.width, Camera.height)));
    }

    private static _generateCanvas() : void {
        Camera.canvas = document.createElement('canvas');
        
        Engine.context = Camera.canvas.getContext('2d');

        Camera._pixelRatio = Camera._getPixelRatio();

        Engine.context.setTransform(Camera._pixelRatio, 0, 0, Camera._pixelRatio, 0, 0);

        Engine.container = document.querySelector(`[${ENGINE.DEFAULT_CONTAINER_ATTRIBUTE}]`);
        Engine.container.insertBefore(Camera.canvas, Engine.container.firstChild);

        Log.info('Canvas generated.');
    }



    public static resize(width = window.innerWidth, height = window.innerHeight) : void {
        Camera.width = width;
        Camera.height = height;

        Camera.canvas.width = Math.round(Camera.width * Camera._pixelRatio);
        Camera.canvas.height = Math.round(Camera.height * Camera._pixelRatio);

        Camera.canvas.style.width = `${Camera.width}px`;
        Camera.canvas.style.height = `${Camera.height}px`;
    }

    private static _getPixelRatio(scope ?: CanvasRenderingContext2dWithBackingStoreRatios) : number {
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