import { __spreadArrays } from "tslib";
import { concat as concatStatic } from '../observable/concat';
export function concatWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return function (source) { return source.lift.call(concatStatic.apply(void 0, __spreadArrays([source], otherSources)), undefined); };
}
//# sourceMappingURL=concatWith.js.map