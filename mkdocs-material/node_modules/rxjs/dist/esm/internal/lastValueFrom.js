import { EmptyError } from './util/EmptyError';
export function lastValueFrom(source) {
    return new Promise((resolve, reject) => {
        let _hasValue = false;
        let _value;
        source.subscribe({
            next: value => {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: () => {
                if (_hasValue) {
                    resolve(_value);
                }
                else {
                    reject(new EmptyError());
                }
            },
        });
    });
}
//# sourceMappingURL=lastValueFrom.js.map