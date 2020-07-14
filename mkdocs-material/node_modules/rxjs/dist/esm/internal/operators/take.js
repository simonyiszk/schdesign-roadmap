import { Subscriber } from '../Subscriber';
import { ArgumentOutOfRangeError } from '../util/ArgumentOutOfRangeError';
import { EMPTY } from '../observable/empty';
export function take(count) {
    if (isNaN(count)) {
        throw new TypeError(`'count' is not a number`);
    }
    if (count < 0) {
        throw new ArgumentOutOfRangeError;
    }
    return (source) => (count === 0) ? EMPTY : source.lift(new TakeOperator(count));
}
class TakeOperator {
    constructor(count) {
        this.count = count;
    }
    call(subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.count));
    }
}
class TakeSubscriber extends Subscriber {
    constructor(destination, count) {
        super(destination);
        this.count = count;
        this._valueCount = 0;
    }
    _next(value) {
        const total = this.count;
        const count = ++this._valueCount;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    }
}
//# sourceMappingURL=take.js.map