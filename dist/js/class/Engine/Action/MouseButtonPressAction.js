import Action from './Action.js';
export default class MouseButtonAction extends Action {
    // public constructor(callback : ActionCallback) {
    //     super(callback);
    // }
    // public listen() : void {
    //     Camera.canvas.addEventListener('click', this.dispatch.bind(this));
    // }
    getActionDetails(event) {
        return {
            'click': '10',
            'y': '20'
        };
    }
}
