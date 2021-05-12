import Log from '../Log/Log.js';
import Core from './Core/Core.js';
import Camera from './Camera/Camera.js';
import World from './World/World.js';
import Input from './Input/Input.js';
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
    static initialise() {
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
    static start() {
        Core.loopHandler();
        Engine.state = 'running';
        Log.info('Engine started.');
    }
    static stop() {
        window.cancelAnimationFrame(Core.frameId);
        Camera.fps = 0;
        Engine.state = 'stopped';
        Core.render();
        Log.info('Engine stopped.');
    }
    // Temp
    static _initialiseAction() {
        new MouseButtonPressAction((details) => this._debugAction(`MOUSE_BUTTON_PRESS (${details.button})`));
        new MouseButtonReleaseAction((details) => this._debugAction(`MOUSE_BUTTON_RELEASE (${details.button})`));
        new MouseMoveAction((details) => {
            Engine.mouseCameraX = details.cameraX;
            Engine.mouseCameraY = details.cameraY;
            Engine.mouseWorldX = details.worldX;
            Engine.mouseWorldY = details.worldY;
        });
        new MouseScrollAction((details) => this._debugAction(`MOUSE_SCROLL (${details.deltaX},${details.deltaY})`));
        new MouseEnterAction((details) => this._debugAction(`MOUSE_ENTER`));
        new MouseLeaveAction((details) => this._debugAction(`MOUSE_LEAVE`));
        new KeyPressAction((details) => this._debugAction(`KEY_PRESS (${details.code} - ${details.key})`));
        new KeyReleaseAction((details) => this._debugAction(`KEY_RELEASE (${details.code} - ${details.key})`));
        new WindowResizeAction((details) => {
            Camera.resize(details.width, details.height);
            this._debugAction(`WINDOW_RESIZE (${details.width} x ${details.height})`);
        });
        new WindowCloseAction((details) => this._debugAction(`WINDOW_CLOSE`));
        Log.info('Action initialised.');
    }
    // Temp
    static _debugAction(inputData) {
        this.actionList.unshift(inputData);
        this.actionList = this.actionList.slice(0, 10);
    }
}
Engine.Core = Core;
Engine.World = World;
Engine.Camera = Camera;
Engine.actionList = [];
Engine.state = 'unintialised';
Engine.debug = false;
Engine.mouseCameraX = 0;
Engine.mouseCameraY = 0;
Engine.mouseWorldX = 0;
Engine.mouseWorldY = 0;
