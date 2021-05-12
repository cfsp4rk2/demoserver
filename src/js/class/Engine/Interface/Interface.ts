import Engine from '../Engine.js';
import Camera from '../Camera/Camera.js';

export default class Interface {
    private static readonly _PADDING_LEFT = 10;
    private static readonly _PADDING_TOP = 20;
    private static readonly _TEXT_MARGIN_BOTTOM = 15;

    private static readonly _LIST_SIZE = 10;

    private static readonly _COLOUR_HEADING = '#2f3640';
    private static readonly _COLOUR_SUBHEADING = '#353b48';
    private static readonly _COLOUR_LIST_ITEM = '#718093';

    public static drawDebug() {
        Engine.context.font = 'bold 10px Arial';

        Engine.context.fillStyle = Interface._COLOUR_HEADING;
        
        Engine.context.fillText(
            `[COMSAT] Debug (F2)`,
            Interface._PADDING_LEFT,
            Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 0)
        );

        Engine.context.fillStyle = Interface._COLOUR_SUBHEADING;

        Engine.context.font = 'italic 10px Arial';

        Engine.context.fillText(
            `State: ${Engine.state}`,
            Interface._PADDING_LEFT,
            Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 1)
        );

        Engine.context.fillText(
            `FPS: ${(Number.isNaN(Camera.fps)) ? 'loading...' : Camera.fps}`,
            Interface._PADDING_LEFT,
            Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 2)
        );

        Engine.context.fillText(
            `Mouse Position (Camera): ${Engine.mouseCameraX}, ${Engine.mouseCameraY}`,
            Interface._PADDING_LEFT,
            Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 3)
        );

        Engine.context.fillText(
            `Mouse Position (World): ${Engine.mouseWorldX}, ${Engine.mouseWorldY}`,
            Interface._PADDING_LEFT,
            Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 4)
        );

        Engine.context.fillText(
            `Camera Position: ${Camera.getPosition().x}, ${Camera.getPosition().y}`,
            Interface._PADDING_LEFT,
            Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 5)
        );

        Engine.context.fillText(
            `Camera Size: ${Camera.width} x ${Camera.height}`, 
            Interface._PADDING_LEFT,
            Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 6)
        );

        Engine.context.fillText(
            `Camera Zoom: ${Camera.zoomX}, ${Camera.zoomY}`,
            Interface._PADDING_LEFT,
            Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 7)
        );

        Engine.context.fillText(
            'Action Watch:',
            Interface._PADDING_LEFT,
            Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 8)
        );

        Engine.context.fillStyle = Interface._COLOUR_LIST_ITEM;

        Engine.actionList.forEach((actionText, i) => {
            Engine.context.globalAlpha = 1 - (i * (1 / Interface._LIST_SIZE));

            Engine.context.fillText(
                `> ${actionText}`,
                Interface._PADDING_LEFT * 2,
                Interface._PADDING_TOP
                    + (Interface._TEXT_MARGIN_BOTTOM * 8) 
                    + (Interface._TEXT_MARGIN_BOTTOM * (i + 1))
            );
        });

        Engine.context.globalAlpha = 1;
    }

    public static clearScreen() {
        Engine.context.fillStyle = 'white';
        Engine.context.fillRect(0, 0, Camera.width, Camera.height);
    }
}