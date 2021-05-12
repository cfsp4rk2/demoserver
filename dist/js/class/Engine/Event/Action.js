export default class Action {
    constructor(callback) {
        this._derivedClass = this.constructor;
        this._derivedClass.callbackList = [];
        this.register(callback);
    }
    register(callback) {
        this._derivedClass.callbackList.push(callback);
        this.listen();
    }
    dispatch(event) {
        console.log(event);
        this._derivedClass.callbackList.forEach((callback) => callback());
    }
}
