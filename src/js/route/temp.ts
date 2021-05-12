import Engine from '../class/Engine/Engine.js';

export default class TempRouter {
    public static initialise() {
        Engine.initialise();
    }
}

(window as any).Engine = Engine;