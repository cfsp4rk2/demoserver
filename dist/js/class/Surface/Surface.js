;
export default class Surface {
    static initialise(configuration) {
        this._generateCanvas();
        // this._initialiseControls();
    }
    _generateCanvas() {
        this.canvas = document.createElement('canvas');
        this.world = this.canvas.getContext('2d');
        // this._pixelRatio = this._getPixelRatio();
        this.canvas.width =
        ;
    }
    _getPixelRatio(scope) {
        if (!(scope instanceof CanvasRenderingContext2D))
            scope = this.world;
        const test = (Surface._BACKING_STORES_LOOKUP.reduce((accumulator, current) => {
            console.log(accumulator, current);
            return 1;
        }));
    }
}
Surface._DEFAULT_CAMERA_WIDTH = 800;
Surface._DEFAULT_CAMERA_HEIGHT = 600;
Surface._DEFAULT_TARGET_FPS = 60;
Surface._DEFAULT_WORLD_WIDTH = 1000;
Surface._DEFAULT_WORLD_HEIGHT = 1000;
Surface._BACKING_STORES_LOOKUP = [
    'webkitBackingStorePixelRatio',
    'mozBackingStorePixelRatio',
    'msBackingStorePixelRatio',
    'oBackingStorePixelRatio',
    'backingStorePixelRatio',
];
Surface._DEFAULT_CONTAINER_ATTRIBUTE = 'data-surface="container"';
