export declare class Gesture {
    private el;
    private detail;
    private positions;
    private ctrl;
    private gesture;
    private lastTouch;
    private pan;
    private hasCapturedPan;
    private hasPress;
    private hasStartedPan;
    private requiresMove;
    private isMoveQueued;
    private blocker;
    private ionGestureMove;
    private ionGestureStart;
    private ionGestureEnd;
    private ionGestureNotCaptured;
    private ionPress;
    attachTo: string;
    autoBlockAll: boolean;
    block: string;
    disableScroll: boolean;
    direction: string;
    gestureName: string;
    gesturePriority: number;
    maxAngle: number;
    threshold: number;
    type: string;
    canStart: GestureCallback;
    onStart: GestureCallback;
    onMove: GestureCallback;
    onEnd: GestureCallback;
    onPress: GestureCallback;
    notCaptured: GestureCallback;
    ionViewDidLoad(): void;
    blockChange(block: string): void;
    onTouchStart(ev: TouchEvent): void;
    onMouseDown(ev: MouseEvent): void;
    private pointerDown(ev, timeStamp);
    onTouchMove(ev: TouchEvent): void;
    onMoveMove(ev: TouchEvent): void;
    private pointerMove(ev);
    private calcGestureData(ev);
    private tryToCapturePan(ev);
    private abortGesture();
    onTouchEnd(ev: TouchEvent): void;
    onMouseUp(ev: TouchEvent): void;
    private pointerUp(ev);
    private detectPress();
    private enableMouse(shouldEnable);
    private enableTouch(shouldEnable);
    private enable(shouldEnable);
    ionViewDidUnload(): void;
}
export interface GestureDetail {
    type?: string;
    event?: UIEvent;
    startX?: number;
    startY?: number;
    startTimeStamp?: number;
    currentX?: number;
    currentY?: number;
    velocityX?: number;
    velocityY?: number;
    deltaX?: number;
    deltaY?: number;
    directionX?: 'left' | 'right';
    directionY?: 'up' | 'down';
    velocityDirectionX?: 'left' | 'right';
    velocityDirectionY?: 'up' | 'down';
    timeStamp?: number;
}
export interface GestureCallback {
    (detail?: GestureDetail): boolean | void;
}
