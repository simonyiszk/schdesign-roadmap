import { __extends } from "tslib";
import { Subscriber } from '../Subscriber';
import { ArgumentOutOfRangeError } from '../util/ArgumentOutOfRangeError';
import { EMPTY } from '../observable/empty';
export function take(count) {
    if (isNaN(count)) {
        throw new TypeError("'count' is not a number");
    }
    if (count < 0) {
        throw new ArgumentOutOfRangeError;
    }
    return function (source) { return (count === 0) ? EMPTY : source.lift(new TakeOperator(count)); };
}
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
}(Subscriber));
//# sourceMappingURL=take.js.map