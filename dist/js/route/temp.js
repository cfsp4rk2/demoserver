import Engine from '../class/Engine/Engine.js';
export default class TempRouter {
    static initialise() {
        Engine.initialise();
    }
}
window.Engine = Engine;
