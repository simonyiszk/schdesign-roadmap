import { Subscriber } from '../Subscriber';
export function scan(accumulator, seed) {
    let hasSeed = false;
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
class ScanOperator {
    constructor(accumulator, seed, hasSeed = false) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    call(subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    }
}
class ScanSubscriber extends Subscriber {
    constructor(destination, accumulator, _state, _hasState) {
        super(destination);
        this.accumulator = accumulator;
        this._state = _state;
        this._hasState = _hasState;
        this.index = 0;
    }
    _next(value) {
        const { destination } = this;
        if (!this._hasState) {
            this._state = value;
            this._hasState = true;
            destination.next(value);
        }
        else {
            const index = this.index++;
            let result;
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
    }
}
//# sourceMappingURL=scan.js.map