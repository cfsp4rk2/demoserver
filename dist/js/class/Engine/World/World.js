import Entity from '../Entity/Entity.js';
import Compute from '../../Compute/Compute.js';
import { WORLD } from '../config.js';
export default class World {
    static initialise() {
        World.width = WORLD.DEFAULT_WIDTH;
        World.height = WORLD.DEFAULT_HEIGHT;
    }
    static registerEntity(entityList) {
        if (entityList instanceof Entity)
            entityList = [entityList];
        entityList.forEach(entity => World._entityList[entity.getPosition().z].push(entity));
    }
    static tempProcess() {
        World._entityList.forEach(layer => layer.forEach(entity => entity.process()));
    }
    static tempRender() {
        World._entityList.forEach(layer => layer.forEach(entity => entity.render()));
    }
    static constrainEntity(position, width, height) {
        const xMin = (World.width / 2 - width / 2) * -1;
        const xMax = World.width / 2 - width / 2;
        const yMin = (World.height / 2 - height / 2) * -1;
        const yMax = World.height / 2 - height / 2;
        const result = {};
        if (position.z != null)
            result.z = position.z;
        if (position.x != null)
            result.x = Compute.constrain(position.x, xMin, xMax);
        if (position.y != null)
            result.y = Compute.constrain(position.y, yMin, yMax);
        return result;
    }
}
World._entityList = Array.from(Array(100), () => new Array());
