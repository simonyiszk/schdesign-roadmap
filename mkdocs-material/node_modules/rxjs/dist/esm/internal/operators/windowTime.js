import { Subject } from '../Subject';
import { async } from '../scheduler/async';
import { Subscriber } from '../Subscriber';
import { isNumeric } from '../util/isNumeric';
import { isScheduler } from '../util/isScheduler';
export function windowTime(windowTimeSpan) {
    let scheduler = async;
    let windowCreationInterval = null;
    let maxWindowSize = Infinity;
    if (isScheduler(arguments[3])) {
        scheduler = arguments[3];
    }
    if (isScheduler(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (isNumeric(arguments[2])) {
        maxWindowSize = Number(arguments[2]);
    }
    if (isScheduler(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (isNumeric(arguments[1])) {
        windowCreationInterval = Number(arguments[1]);
    }
    return function windowTimeOperatorFunction(source) {
        return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
    };
}
class WindowTimeOperator {
    constructor(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
    }
}
class CountedSubject extends Subject {
    constructor() {
        super(...arguments);
        this._numberOfNextedValues = 0;
    }
    next(value) {
        this._numberOfNextedValues++;
        super.next(value);
    }
    get numberOfNextedValues() {
        return this._numberOfNextedValues;
    }
}
class WindowTimeSubscriber extends Subscriber {
    constructor(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        super(destination);
        this.destination = destination;
        this.maxWindowSize = maxWindowSize;
        this.windows = [];
        const window = this.openWindow();
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            const closeState = { subscriber: this, window, context: null };
            const creationState = { windowTimeSpan, windowCreationInterval, subscriber: this, scheduler };
            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        }
        else {
            const timeSpanOnlyState = { subscriber: this, window, windowTimeSpan };
            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
    }
    _next(value) {
        const windows = this.maxWindowSize < Infinity ? this.windows.slice() : this.windows;
        const len = windows.length;
        for (let i = 0; i < len; i++) {
            const window = windows[i];
            if (!window.closed) {
                window.next(value);
                if (this.maxWindowSize <= window.numberOfNextedValues) {
                    this.closeWindow(window);
                }
            }
        }
    }
    _error(err) {
        const windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    }
    _complete() {
        const windows = this.windows;
        while (windows.length > 0) {
            windows.shift().complete();
        }
        this.destination.complete();
    }
    openWindow() {
        const window = new CountedSubject();
        this.windows.push(window);
        const destination = this.destination;
        destination.next(window);
        return window;
    }
    closeWindow(window) {
        const index = this.windows.indexOf(window);
        if (index >= 0) {
            window.complete();
            this.windows.splice(index, 1);
        }
    }
}
function dispatchWindowTimeSpanOnly(state) {
    const { subscriber, windowTimeSpan, window } = state;
    if (window) {
        subscriber.closeWindow(window);
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    const { windowTimeSpan, subscriber, scheduler, windowCreationInterval } = state;
    const window = subscriber.openWindow();
    const action = this;
    let context = { action, subscription: null };
    const timeSpanState = { subscriber, window, context };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(state) {
    const { subscriber, window, context } = state;
    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}
//# sourceMappingURL=windowTime.js.map