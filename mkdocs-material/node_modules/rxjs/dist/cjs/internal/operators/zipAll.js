"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipAll = void 0;
var zip_1 = require("../observable/zip");
function zipAll(project) {
    return function (source) { return source.lift(new zip_1.ZipOperator(project)); };
}
exports.zipAll = zipAll;
//# sourceMappingURL=zipAll.js.map