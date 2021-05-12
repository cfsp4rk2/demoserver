export default class Toolbelt {
    private static _store : any = { };

    public static set(instanceName : string, instance : any) : void {
        Toolbelt._store[instanceName] = instance;
    };

    public static get(instanceName : string) : any {
        return Toolbelt._store[instanceName];
    };
};