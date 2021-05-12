import { Vector3 } from '../../Structure/Structure.js';
import World from '../World/World.js';
import Camera from '../Camera/Camera.js';

export default abstract class Entity {
    protected _position = {
        'x': 0,
        'y': 0,
        'z': 0,
    };

    protected _worldPosition = {
        'x': 0,
        'y': 0,
        'z': 0,
    };

    protected _width = 0;
    protected _height = 0;

    abstract process() : void;
    abstract render() : void;

    public constructor(position : Vector3) {
        this.setPosition(position);
    }

    public getPosition() : Vector3 {
        // Need to convert it from true to virtual coordinates.
        return this._worldPosition;
    }

    public getScreenPosition() : Vector3 {
        return this._position;
    }

    // Will later return getPosition...
    public setPosition(position : Vector3) : void {
        position = World.constrainEntity(position, this._width, this._height);

        if (position.x != null) {
            this._worldPosition.x = position.x;
            this._position.x = this._worldToScreen(position).x;
        }

        if (position.y != null) {
            this._worldPosition.y = position.y;
            this._position.y = this._worldToScreen(position).y;
        }

        if (position.z != null) {
            this._worldPosition.z = position.z;
            this._position.z = position.z;
        }
    }

    protected _worldToScreen(position : Vector3) : Vector3 {
        const result : Vector3 = { };

        if (position.z != null) result.z = position.z;

        if (position.x != null) result.x = (Camera.width / 2 + (Camera.getPosition().x * -1) + position.x - this._width / 2) * Camera.zoomX;

        if (position.y != null) result.y = (Camera.height / 2 + Camera.getPosition().y + (position.y * -1) - this._height / 2) * Camera.zoomY;

        return result;
    }
}