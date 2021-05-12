import Entity from '../Entity/Entity.js';
import Compute from '../../Compute/Compute.js';
import { Vector3 } from '../../Structure/Structure.js';
import { WORLD } from '../config.js';

export default class World {
    public static width : number;
    public static height : number;
    private static _entityList : Array<Array<Entity>> = Array.from(Array(100), () => new Array());

    public static initialise() {
        World.width = WORLD.DEFAULT_WIDTH;
        World.height = WORLD.DEFAULT_HEIGHT;
    }

    public static registerEntity(entityList : Entity | Array<Entity>) : void {
        if (entityList instanceof Entity) entityList = [ entityList ];

        entityList.forEach(entity => World._entityList[entity.getPosition().z].push(entity));
    }

    public static tempProcess() {
        World._entityList.forEach(layer =>
            layer.forEach(entity =>
                entity.process()));
    }

    public static tempRender() {
        World._entityList.forEach(layer =>
            layer.forEach(entity =>
                entity.render()));
    }

    public static constrainEntity(position : Vector3, width : number, height : number) : Vector3 {
        const xMin = (World.width / 2 - width / 2) * -1;
        const xMax = World.width / 2 - width / 2;
        const yMin = (World.height / 2 - height / 2) * -1;
        const yMax = World.height / 2 - height / 2;

        const result : Vector3 = { };

        if (position.z != null) result.z = position.z;

        if (position.x != null) result.x = Compute.constrain(position.x, xMin, xMax);

        if (position.y != null) result.y = Compute.constrain(position.y, yMin, yMax);

        return result;
    }
}