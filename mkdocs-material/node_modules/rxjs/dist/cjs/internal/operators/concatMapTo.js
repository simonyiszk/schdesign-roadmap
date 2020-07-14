"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatMapTo = void 0;
var concatMap_1 = require("./concatMap");
function concatMapTo(innerObservable, resultSelector) {
    if (typeof resultSelector === 'function') {
        return concatMap_1.concatMap(function () { return innerObservable; }, resultSelector);
    }
    return concatMap_1.concatMap(function () { return innerObservable; });
}
exports.concatMapTo = concatMapTo;
//# sourceMappingURL=concatMapTo.js.map