import { __extends } from "tslib";
import { Subscriber } from '../Subscriber';
export function retry(configOrCount) {
    if (configOrCount === void 0) { configOrCount = -1; }
    var config;
    if (configOrCount && typeof configOrCount === 'object') {
        config = configOrCount;
    }
    else {
        config = {
            count: configOrCount
        };
    }
    return function (source) { return source.lift(new RetryOperator(config.count, !!config.resetOnSuccess, source)); };
}
var RetryOperator = (function () {
    function RetryOperator(count, resetOnSuccess, source) {
        this.count = count;
        this.resetOnSuccess = resetOnSuccess;
        this.source = source;
    }
    RetryOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.resetOnSuccess, this.source));
    };
    return RetryOperator;
}());
var RetrySubscriber = (function (_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, resetOnSuccess, source) {
        var _this = _super.call(this, destination) || this;
        _this.count = count;
        _this.resetOnSuccess = resetOnSuccess;
        _this.source = source;
        _this.initialCount = _this.count;
        return _this;
    }
    RetrySubscriber.prototype.next = function (value) {
        _super.prototype.next.call(this, value);
        if (this.resetOnSuccess) {
            this.count = this.initialCount;
        }
    };
    RetrySubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.error.call(this, err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RetrySubscriber;
}(Subscriber));
//# sourceMappingURL=retry.js.map