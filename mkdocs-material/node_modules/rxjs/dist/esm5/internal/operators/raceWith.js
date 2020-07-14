import { __spreadArrays } from "tslib";
import { isArray } from '../util/isArray';
import { race as raceStatic } from '../observable/race';
export function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function raceOperatorFunction(source) {
        if (observables.length === 1 && isArray(observables[0])) {
            observables = observables[0];
        }
        return source.lift.call(raceStatic.apply(void 0, __spreadArrays([source], observables)), undefined);
    };
}
export function raceWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return function raceWithOperatorFunction(source) {
        return source.lift.call(raceStatic.apply(void 0, __spreadArrays([source], otherSources)), undefined);
    };
}
//# sourceMappingURL=raceWith.js.map