import Entity from './Entity.js';
import Engine from '../Engine.js';
import Camera from '../Camera/Camera.js';
import { Vector3 } from '../../Structure/Structure.js';

export default class Agent extends Entity {
    protected _width = 100;
    protected _height = 100;

    public constructor(position : Vector3) {
        super(position);

    }

    public process() : void {
        this.setPosition(this.getPosition());

    }

    public render() : void {
        const x = this.getScreenPosition().x;
        const y = this.getScreenPosition().y;

        Engine.context.fillStyle = 'red';
        Engine.context.fillRect(x, y, this._width * Camera.zoomX, this._height * Camera.zoomY);
    }
}