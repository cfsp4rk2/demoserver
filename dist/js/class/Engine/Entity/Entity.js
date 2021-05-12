import World from '../World/World.js';
import Camera from '../Camera/Camera.js';
export default class Entity {
    constructor(position) {
        this._position = {
            'x': 0,
            'y': 0,
            'z': 0,
        };
        this._worldPosition = {
            'x': 0,
            'y': 0,
            'z': 0,
        };
        this._width = 0;
        this._height = 0;
        this.setPosition(position);
    }
    getPosition() {
        // Need to convert it from true to virtual coordinates.
        return this._worldPosition;
    }
    getScreenPosition() {
        return this._position;
    }
    // Will later return getPosition...
    setPosition(position) {
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
    _worldToScreen(position) {
        const result = {};
        if (position.z != null)
            result.z = position.z;
        if (position.x != null)
            result.x = (Camera.width / 2 + (Camera.getPosition().x * -1) + position.x - this._width / 2) * Camera.zoomX;
        if (position.y != null)
            result.y = (Camera.height / 2 + Camera.getPosition().y + (position.y * -1) - this._height / 2) * Camera.zoomY;
        return result;
    }
}
