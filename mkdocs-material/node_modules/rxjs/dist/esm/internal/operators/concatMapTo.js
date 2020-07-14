import { concatMap } from './concatMap';
export function concatMapTo(innerObservable, resultSelector) {
    if (typeof resultSelector === 'function') {
        return concatMap(() => innerObservable, resultSelector);
    }
    return concatMap(() => innerObservable);
}
//# sourceMappingURL=concatMapTo.js.map