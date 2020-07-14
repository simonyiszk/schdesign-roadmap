"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.take = void 0;
var Subscriber_1 = require("../Subscriber");
var ArgumentOutOfRangeError_1 = require("../util/ArgumentOutOfRangeError");
var empty_1 = require("../observable/empty");
function take(count) {
    if (isNaN(count)) {
        throw new TypeError("'count' is not a number");
    }
    if (count < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
    }
    return function (source) { return (count === 0) ? empty_1.EMPTY : source.lift(new TakeOperator(count)); };
}
exports.take = take;
var TakeOperator = (function () {
    function TakeOperator(count) {
        this.count = count;
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.count));
    };
    return TakeOperator;
}());
var TakeSubscriber = (function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, count) {
        var _this = _super.call(this, destination) || this;
        _this.count = count;
        _this._valueCount = 0;
        return _this;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.count;
        var count = ++this._valueCount;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=take.js.map