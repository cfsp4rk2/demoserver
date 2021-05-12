import Camera from '../Camera/Camera.js';
import Interface from '../Interface/Interface.js';
import World from '../World/World.js';
export default class Core {
    static loopHandler() {
        Core._fpsInterval = 1000 / Camera.targetFps;
        Core._timestampPre = window.performance.now();
        Core.update();
        Core.render();
        Core._loop();
    }
    static _loop(timestamp = 0) {
        Core.frameId = window.requestAnimationFrame(Core._loop);
        let timestampElapsed = timestamp - Core._timestampPre;
        if (timestampElapsed <= Core._fpsInterval)
            return;
        Core._timestampPre = timestamp - (timestampElapsed % Core._fpsInterval);
        Object.values(Core._frameContainer).forEach(group => {
            group.frameCount += 1;
            group.timestampElapsed = timestamp - group.timestampStart;
        });
        const frameGroupActive = Core._frameContainer[Core._frameContainerPosition];
        Camera.fps = Math.round(1000 / (frameGroupActive.timestampElapsed / frameGroupActive.frameCount) * 100) / 100;
        const resetIntervalTarget = (Core._frameContainer.left.frameCount === Core._frameContainer.right.frameCount)
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
    static update() {
        World.tempProcess();
    }
    static render() {
        Interface.clearScreen();
        // Draw background.
        World.tempRender();
        Interface.drawDebug();
    }
}
Core._resetInterval = 5;
Core._frameGroup = {
    'frameCount': 0,
    'timestampStart': Core._timestampPre,
    'timestampElapsed': 0,
};
Core._frameContainer = {
    'left': Object.assign({}, Core._frameGroup),
    'right': Object.assign({}, Core._frameGroup),
};
Core._frameContainerPosition = 'left';
