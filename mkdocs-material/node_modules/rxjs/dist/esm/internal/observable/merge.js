import { Observable } from '../Observable';
import { isScheduler } from '../util/isScheduler';
import { mergeAll } from '../operators/mergeAll';
import { fromArray } from './fromArray';
export function merge(...observables) {
    let concurrent = Infinity;
    let scheduler = undefined;
    let last = observables[observables.length - 1];
    if (isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (!scheduler && observables.length === 1 && observables[0] instanceof Observable) {
        return observables[0];
    }
    return mergeAll(concurrent)(fromArray(observables, scheduler));
}
//# sourceMappingURL=merge.js.map