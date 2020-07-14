"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatMap = void 0;
var mergeMap_1 = require("./mergeMap");
function concatMap(project, resultSelector) {
    if (typeof resultSelector === 'function') {
        return mergeMap_1.mergeMap(project, resultSelector, 1);
    }
    return mergeMap_1.mergeMap(project, 1);
}
exports.concatMap = concatMap;
//# sourceMappingURL=concatMap.js.map