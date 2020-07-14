"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromObservable = void 0;
var Observable_1 = require("../Observable");
var subscribeToObservable_1 = require("../util/subscribeToObservable");
var scheduleObservable_1 = require("../scheduled/scheduleObservable");
function fromObservable(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToObservable_1.subscribeToObservable(input));
    }
    else {
        return scheduleObservable_1.scheduleObservable(input, scheduler);
    }
}
exports.fromObservable = fromObservable;
//# sourceMappingURL=fromObservable.js.map