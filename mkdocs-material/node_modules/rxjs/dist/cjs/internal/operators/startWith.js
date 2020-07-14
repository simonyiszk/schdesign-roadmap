"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startWith = void 0;
var concat_1 = require("../observable/concat");
var isScheduler_1 = require("../util/isScheduler");
function startWith() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var scheduler = values[values.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        values.pop();
        return function (source) { return concat_1.concat(values, source, scheduler); };
    }
    else {
        return function (source) { return concat_1.concat(values, source); };
    }
}
exports.startWith = startWith;
//# sourceMappingURL=startWith.js.map