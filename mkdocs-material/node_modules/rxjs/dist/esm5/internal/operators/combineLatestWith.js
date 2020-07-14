import { __spreadArrays } from "tslib";
import { isArray } from '../util/isArray';
import { CombineLatestOperator } from '../observable/combineLatest';
import { from } from '../observable/from';
export function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var project = undefined;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    if (observables.length === 1 && isArray(observables[0])) {
        observables = observables[0].slice();
    }
    return function (source) { return source.lift.call(from(__spreadArrays([source], observables)), new CombineLatestOperator(project)); };
}
export function combineLatestWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return combineLatest.apply(void 0, otherSources);
}
//# sourceMappingURL=combineLatestWith.js.map