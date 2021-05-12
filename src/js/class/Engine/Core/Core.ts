import Camera from '../Camera/Camera.js';
import Interface from '../Interface/Interface.js';
import Log from '../../Log/Log.js';
import World from '../World/World.js';

interface Dictionary<TValue> { [key : string] : TValue }

export default class Core {
    public static frameId : number;

    private static _timestampPre : number;

    private static _fpsInterval : number;
    private static _resetInterval = 5;

    private static _frameGroup = {
        'frameCount': 0,
        'timestampStart': Core._timestampPre,
        'timestampElapsed': 0,
    };

    private static _frameContainer : Dictionary<Dictionary<number>> = {
        'left': { ...Core._frameGroup },
        'right': { ...Core._frameGroup },  
    };

    private static _frameContainerPosition = 'left';

    public static loopHandler() {
        Core._fpsInterval = 1000 / Camera.targetFps;

        Core._timestampPre = window.performance.now();

        Core.update();
        Core.render();
        Core._loop();
    }

    private static _loop(timestamp : number = 0) : void {
        Core.frameId = window.requestAnimationFrame(Core._loop);

        let timestampElapsed = timestamp - Core._timestampPre;

        if (timestampElapsed <= Core._fpsInterval) return;

        Core._timestampPre = timestamp - (timestampElapsed % Core._fpsInterval);

        Object.values(Core._frameContainer).forEach(group => {
            group.frameCount += 1;
            group.timestampElapsed = timestamp - group.timestampStart;
        });

        const frameGroupActive = Core._frameContainer[Core._frameContainerPosition];

        Camera.fps = Math.round(
            1000 / (frameGroupActive.timestampElapsed / frameGroupActive.frameCount) * 100
        ) / 100;

        const resetIntervalTarget = (
            Core._frameContainer.left.frameCount === Core._frameContainer.right.frameCount
        ) 
            ? Core._resetInterval * Camera.targetFps 
            : (Core._resetInterval * 2) * Camera.targetFps;

        if (frameGroupActive.frameCount > resetIntervalTarget) {
            Core._frameContainer[Core._frameContainerPosition].frameCount = 0;
            Core._frameContainer[Core._frameContainerPosition].timestampStart = timestamp;
            Core._frameContainer[Core._frameContainerPosition].timestampElapsed = 0;

            Core._frameContainerPosition = (Core._frameContainerPosition === 'left')
                ? 'right' 
                : 'left';
        }

        Core.update();
        Core.render();
    }

    public static update() : void {

        World.tempProcess();
    }

    public static render() : void {
        Interface.clearScreen();

        // Draw background.
        World.tempRender();


        Interface.drawDebug();
    }
}