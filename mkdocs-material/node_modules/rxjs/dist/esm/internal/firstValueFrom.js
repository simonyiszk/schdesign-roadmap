import { EmptyError } from './util/EmptyError';
import { Subscription } from './Subscription';
export function firstValueFrom(source) {
    return new Promise((resolve, reject) => {
        const subs = new Subscription();
        subs.add(source.subscribe({
            next: value => {
                resolve(value);
                subs.unsubscribe();
            },
            error: reject,
            complete: () => {
                reject(new EmptyError());
            },
        }));
    });
}
//# sourceMappingURL=firstValueFrom.js.map