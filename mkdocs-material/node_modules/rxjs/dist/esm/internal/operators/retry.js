import { Subscriber } from '../Subscriber';
export function retry(configOrCount = -1) {
    let config;
    if (configOrCount && typeof configOrCount === 'object') {
        config = configOrCount;
    }
    else {
        config = {
            count: configOrCount
        };
    }
    return (source) => source.lift(new RetryOperator(config.count, !!config.resetOnSuccess, source));
}
class RetryOperator {
    constructor(count, resetOnSuccess, source) {
        this.count = count;
        this.resetOnSuccess = resetOnSuccess;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.resetOnSuccess, this.source));
    }
}
class RetrySubscriber extends Subscriber {
    constructor(destination, count, resetOnSuccess, source) {
        super(destination);
        this.count = count;
        this.resetOnSuccess = resetOnSuccess;
        this.source = source;
        this.initialCount = this.count;
    }
    next(value) {
        super.next(value);
        if (this.resetOnSuccess) {
            this.count = this.initialCount;
        }
    }
    error(err) {
        if (!this.isStopped) {
            const { source, count } = this;
            if (count === 0) {
                return super.error(err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    }
}
//# sourceMappingURL=retry.js.map