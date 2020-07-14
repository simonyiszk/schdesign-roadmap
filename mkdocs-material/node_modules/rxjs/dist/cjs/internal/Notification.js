"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = exports.observeNotification = exports.Notification = exports.NotificationKind = void 0;
var empty_1 = require("./observable/empty");
var of_1 = require("./observable/of");
var throwError_1 = require("./observable/throwError");
var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        var _a, _b, _c;
        switch (this.kind) {
            case 'N':
                (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, this.value);
                break;
            case 'E':
                (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, this.error);
                break;
            case 'C':
                (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
                break;
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                next === null || next === void 0 ? void 0 : next(this.value);
                break;
            case 'E':
                error === null || error === void 0 ? void 0 : error(this.error);
                break;
            case 'C':
                complete === null || complete === void 0 ? void 0 : complete();
                break;
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return of_1.of(this.value);
            case 'E':
                return throwError_1.throwError(this.error);
            case 'C':
                return empty_1.EMPTY;
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        return new Notification('N', value);
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    return Notification;
}());
exports.Notification = Notification;
function observeNotification(notification, observer) {
    var _a, _b, _c;
    if (typeof notification.kind !== 'string') {
        throw new TypeError('Invalid notification, missing "kind"');
    }
    switch (notification.kind) {
        case 'N':
            (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, notification.value);
            break;
        case 'E':
            (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, notification.error);
            break;
        case 'C':
            (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
            break;
    }
}
exports.observeNotification = observeNotification;
exports.COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
exports.errorNotification = errorNotification;
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
exports.nextNotification = nextNotification;
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
exports.createNotification = createNotification;
//# sourceMappingURL=Notification.js.map