import { __spreadArrays } from "tslib";
import { zip as zipStatic } from '../observable/zip';
export function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function zipOperatorFunction(source) {
        return source.lift.call(zipStatic.apply(void 0, __spreadArrays([source], observables)), undefined);
    };
}
export function zipWith() {
    var otherInputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherInputs[_i] = arguments[_i];
    }
    return zip.apply(void 0, otherInputs);
}
//# sourceMappingURL=zipWith.js.map