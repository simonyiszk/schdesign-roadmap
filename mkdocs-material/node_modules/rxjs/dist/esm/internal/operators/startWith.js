import { concat } from '../observable/concat';
import { isScheduler } from '../util/isScheduler';
export function startWith(...values) {
    const scheduler = values[values.length - 1];
    if (isScheduler(scheduler)) {
        values.pop();
        return (source) => concat(values, source, scheduler);
    }
    else {
        return (source) => concat(values, source);
    }
}
//# sourceMappingURL=startWith.js.map