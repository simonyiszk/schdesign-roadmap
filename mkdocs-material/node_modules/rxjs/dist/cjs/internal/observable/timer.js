"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timer = void 0;
var Observable_1 = require("../Observable");
var async_1 = require("../scheduler/async");
var isScheduler_1 = require("../util/isScheduler");
var isDate_1 = require("../util/isDate");
function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    var period = -1;
    if (periodOrScheduler != null) {
        if (isScheduler_1.isScheduler(periodOrScheduler)) {
            scheduler = periodOrScheduler;
        }
        else {
            period = periodOrScheduler;
        }
    }
    if (!isScheduler_1.isScheduler(scheduler)) {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        var due = Math.max(0, isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime);
        return scheduler.schedule(dispatch, due, {
            counter: 0,
            period: period,
            subscriber: subscriber,
        });
    });
}
exports.timer = timer;
function dispatch(state) {
    var period = state.period, subscriber = state.subscriber;
    var counter = state.counter++;
    subscriber.next(counter);
    if (!subscriber.closed) {
        if (period < 0) {
            return subscriber.complete();
        }
        this.schedule(state, period);
    }
}
//# sourceMappingURL=timer.js.map