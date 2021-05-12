export interface ActionDetails { [key : string] : string | number | boolean; }

export type ActionCallback = (details ?: ActionDetails) => void;

export default abstract class Action {
    protected static callbackList ?: Array<ActionCallback>;

    abstract listen() : void;

    abstract getActionDetails(event ?: Event) : ActionDetails;

    private _derivedClass : typeof Action;

    public constructor(callback : ActionCallback) {
        this._derivedClass = this.constructor as { new (callback : ActionCallback) : Action };

        if (!(this._derivedClass.callbackList)) this._derivedClass.callbackList = [ ];

        this.register(callback);
    }

    public register(callback : ActionCallback) : void {
        this._derivedClass.callbackList.push(callback);

        if (this._derivedClass.callbackList.length === 1) this.listen();
    }

    public dispatch(event ?: Event) : void {
        event.preventDefault();

        const defaultDetails = {
            'timestamp': event.timeStamp,
            'type': `${this._derivedClass.name}`,
        };

        this._derivedClass.callbackList.forEach((callback : ActionCallback) => 
            callback({ ...defaultDetails, ...this.getActionDetails(event) }));
    }
}