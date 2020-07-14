import { __extends } from "tslib";
import { Subscriber } from '../Subscriber';
export function scan(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
var ScanOperator = (function () {
    function ScanOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) { hasSeed = false; }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
}());
var ScanSubscriber = (function (_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _state, _hasState) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._state = _state;
        _this._hasState = _hasState;
        _this.index = 0;
        return _this;
    }
    ScanSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (!this._hasState) {
            this._state = value;
            this._hasState = true;
            destination.next(value);
        }
        else {
            var index = this.index++;
            var result = void 0;
            try {
                result = this.accumulator(this._state, value, index);
            }
            catch (err) {
                destination.error(err);
                return;
            }
            this._state = result;
            destination.next(result);
        }
    };
    return ScanSubscriber;
}(Subscriber));
//# sourceMappingURL=scan.js.map