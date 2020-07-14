import { concatMap } from './concatMap';
export function concatMapTo(innerObservable, resultSelector) {
    if (typeof resultSelector === 'function') {
        return concatMap(function () { return innerObservable; }, resultSelector);
    }
    return concatMap(function () { return innerObservable; });
}
//# sourceMappingURL=concatMapTo.js.map