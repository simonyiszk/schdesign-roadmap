import { Observable } from '../Observable';
import { subscribeToObservable } from '../util/subscribeToObservable';
import { scheduleObservable } from '../scheduled/scheduleObservable';
export function fromObservable(input, scheduler) {
    if (!scheduler) {
        return new Observable(subscribeToObservable(input));
    }
    else {
        return scheduleObservable(input, scheduler);
    }
}
//# sourceMappingURL=fromObservable.js.map