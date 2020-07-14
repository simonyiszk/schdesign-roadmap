import { EmptyError } from '../util/EmptyError';
import { SequenceError } from '../util/SequenceError';
import { NotFoundError } from '../util/NotFoundError';
const defaultPredicate = () => true;
export function single(predicate = defaultPredicate) {
    return (source) => source.lift(singleOperator(predicate));
}
function singleOperator(predicate) {
    return function (source) {
        let _hasValue = false;
        let _seenValue = false;
        let _value;
        let _i = 0;
        const _destination = this;
        return source.subscribe({
            next: value => {
                _seenValue = true;
                let match = false;
                try {
                    match = predicate(value, _i++, source);
                }
                catch (err) {
                    _destination.error(err);
                    return;
                }
                if (match) {
                    if (_hasValue) {
                        _destination.error(new SequenceError('Too many matching values'));
                    }
                    else {
                        _hasValue = true;
                        _value = value;
                    }
                }
            },
            error: err => _destination.error(err),
            complete: () => {
                if (_hasValue) {
                    _destination.next(_value);
                    _destination.complete();
                }
                else {
                    _destination.error(_seenValue ? new NotFoundError('No matching values') : new EmptyError());
                }
            },
        });
    };
}
//# sourceMappingURL=single.js.map