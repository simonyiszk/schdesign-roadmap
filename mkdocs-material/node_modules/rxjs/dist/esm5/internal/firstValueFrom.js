import { EmptyError } from './util/EmptyError';
import { Subscription } from './Subscription';
export function firstValueFrom(source) {
    return new Promise(function (resolve, reject) {
        var subs = new Subscription();
        subs.add(source.subscribe({
            next: function (value) {
                resolve(value);
                subs.unsubscribe();
            },
            error: reject,
            complete: function () {
                reject(new EmptyError());
            },
        }));
    });
}
//# sourceMappingURL=firstValueFrom.js.map