import { EmptyError } from '../util/EmptyError';
import { SequenceError } from '../util/SequenceError';
import { NotFoundError } from '../util/NotFoundError';
var defaultPredicate = function () { return true; };
export function single(predicate) {
    if (predicate === void 0) { predicate = defaultPredicate; }
    return function (source) { return source.lift(singleOperator(predicate)); };
}
function singleOperator(predicate) {
    return function (source) {
        var _hasValue = false;
        var _seenValue = false;
        var _value;
        var _i = 0;
        var _destination = this;
        return source.subscribe({
            next: function (value) {
                _seenValue = true;
                var match = false;
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
            error: function (err) { return _destination.error(err); },
            complete: function () {
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