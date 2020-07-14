import { __spreadArrays } from "tslib";
import { merge as mergeStatic } from '../observable/merge';
export function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function (source) { return source.lift.call(mergeStatic.apply(void 0, __spreadArrays([source], observables)), undefined); };
}
export function mergeWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return merge.apply(void 0, otherSources);
}
//# sourceMappingURL=mergeWith.js.map