export default class Toolbelt {
    static set(instanceName, instance) {
        Toolbelt._store[instanceName] = instance;
    }
    ;
    static get(instanceName) {
        return Toolbelt._store[instanceName];
    }
    ;
}
Toolbelt._store = {};
;
