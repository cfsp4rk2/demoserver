export default class Action {
    constructor(callback) {
        this._derivedClass = this.constructor;
        if (!(this._derivedClass.callbackList))
            this._derivedClass.callbackList = [];
        this.register(callback);
    }
    register(callback) {
        this._derivedClass.callbackList.push(callback);
        if (this._derivedClass.callbackList.length === 1)
            this.listen();
    }
    dispatch(event) {
        event.preventDefault();
        const defaultDetails = {
            'timestamp': event.timeStamp,
            'type': `${this._derivedClass.name}`,
        };
        this._derivedClass.callbackList.forEach((callback) => callback(Object.assign(Object.assign({}, defaultDetails), this.getActionDetails(event))));
    }
}
