import Log from '../Log/Log.js';
import Core from './Core/Core.js';
import Camera, { CanvasRenderingContext2dWithBackingStoreRatios } from './Camera/Camera.js';
import World from './World/World.js';
import Input from './Input/Input.js';

import { ActionDetails } from './Action/Action.js';
import MouseButtonPressAction from './Action/MouseButtonAction/MouseButtonPressAction';
import MouseButtonReleaseAction from './Action/MouseButtonAction/MouseButtonReleaseAction.js';
import MouseMoveAction from './Action/MouseMoveAction.js';
import MouseScrollAction from './Action/MouseScrollAction.js';
import MouseEnterAction from './Action/MouseEnterAction.js';
import MouseLeaveAction from './Action/MouseLeaveAction.js';
import KeyPressAction from './Action/KeyAction/KeyPressAction.js';
import KeyReleaseAction from './Action/KeyAction/KeyReleaseAction.js';
import WindowResizeAction from './Action/WindowResizeAction.js';
import WindowCloseAction from './Action/WindowCloseAction.js';

import Agent from './Entity/Agent.js';

export default class Engine {
    public static Core = Core;
    public static World = World;
    public static Camera = Camera;

    public static container : HTMLElement;
    public static context : CanvasRenderingContext2dWithBackingStoreRatios;
    public static actionList : Array<string> = [ ];

    public static state = 'unintialised';

    public static debug = false;

    public static mouseCameraX = 0;
    public static mouseCameraY = 0;
    public static mouseWorldX = 0;
    public static mouseWorldY = 0;

    public static initialise() : void {
        World.initialise();

        Camera.initialise();

        Engine._initialiseAction(); // temp.

        Input.initialise();

        World.registerEntity(new Agent({ 'x': 0, 'y': 0, 'z': 0 }));

        Engine.state = 'initialised';

        Log.info('Engine initialised.');

        Engine.start();
    }

    // private static _initControls() : void {
    //     new KeyPressAction(Engine._moveCameraCallback);
    // }


    // private static _moveCameraCallback(details : ActionDetails) : void {
    //     let x = Camera.getPosition().x;
    //     let y = Camera.getPosition().y;

    //     if (details.key === 'ArrowUp') y = Camera.getPosition().y + 1;

    //     else if (details.key === 'ArrowLeft') x = Camera.getPosition().x - 1;

    //     else if (details.key === 'ArrowRight') x = Camera.getPosition().x + 1;

    //     else if (details.key === 'ArrowDown') y = Camera.getPosition().y - 1;

    //     Camera.setPosition({ x, y });
    // }

    public static start() : void {
        Core.loopHandler();

        Engine.state = 'running';

        Log.info('Engine started.');
    }

    public static stop() : void {
        window.cancelAnimationFrame(Core.frameId);
        Camera.fps = 0;

        Engine.state = 'stopped';

        Core.render();

        Log.info('Engine stopped.');
    }

    // Temp
    private static _initialiseAction() : void {
        new MouseButtonPressAction((details : ActionDetails) =>
            this._debugAction(`MOUSE_BUTTON_PRESS (${details.button})`));

        new MouseButtonReleaseAction((details : ActionDetails) =>
            this._debugAction(`MOUSE_BUTTON_RELEASE (${details.button})`));

        new MouseMoveAction((details : ActionDetails) => {
            Engine.mouseCameraX = details.cameraX as number;
            Engine.mouseCameraY = details.cameraY as number;
            Engine.mouseWorldX = details.worldX as number;
            Engine.mouseWorldY = details.worldY as number;
        });

        new MouseScrollAction((details : ActionDetails) =>
            this._debugAction(`MOUSE_SCROLL (${details.deltaX},${details.deltaY})`));

        new MouseEnterAction((details : ActionDetails) =>
            this._debugAction(`MOUSE_ENTER`));

        new MouseLeaveAction((details : ActionDetails) =>
            this._debugAction(`MOUSE_LEAVE`));

        new KeyPressAction((details : ActionDetails) =>
            this._debugAction(`KEY_PRESS (${details.code} - ${details.key})`));

        new KeyReleaseAction((details : ActionDetails) =>
            this._debugAction(`KEY_RELEASE (${details.code} - ${details.key})`));

        new WindowResizeAction((details : ActionDetails) => {
            Camera.resize(details.width as number, details.height as number);
            this._debugAction(`WINDOW_RESIZE (${details.width} x ${details.height})`);
        });

        new WindowCloseAction((details : ActionDetails) =>
            this._debugAction(`WINDOW_CLOSE`));

        Log.info('Action initialised.');
    }

    // Temp
    private static _debugAction(inputData : string) : void {
        this.actionList.unshift(inputData);

        this.actionList = this.actionList.slice(0, 10);
    }
}