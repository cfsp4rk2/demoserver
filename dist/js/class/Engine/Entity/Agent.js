import Entity from './Entity.js';
import Engine from '../Engine.js';
import Camera from '../Camera/Camera.js';
export default class Agent extends Entity {
    constructor(position) {
        super(position);
        this._width = 100;
        this._height = 100;
    }
    process() {
        this.setPosition(this.getPosition());
    }
    render() {
        const x = this.getScreenPosition().x;
        const y = this.getScreenPosition().y;
        Engine.context.fillStyle = 'red';
        Engine.context.fillRect(x, y, this._width * Camera.zoomX, this._height * Camera.zoomY);
    }
}
