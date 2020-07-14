import { concat } from '../observable/concat';
import { isScheduler } from '../util/isScheduler';
export function startWith() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var scheduler = values[values.length - 1];
    if (isScheduler(scheduler)) {
        values.pop();
        return function (source) { return concat(values, source, scheduler); };
    }
    else {
        return function (source) { return concat(values, source); };
    }
}
//# sourceMappingURL=startWith.js.map