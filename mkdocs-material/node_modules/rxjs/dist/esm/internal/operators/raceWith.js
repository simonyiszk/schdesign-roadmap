import { isArray } from '../util/isArray';
import { race as raceStatic } from '../observable/race';
export function race(...observables) {
    return function raceOperatorFunction(source) {
        if (observables.length === 1 && isArray(observables[0])) {
            observables = observables[0];
        }
        return source.lift.call(raceStatic(source, ...observables), undefined);
    };
}
export function raceWith(...otherSources) {
    return function raceWithOperatorFunction(source) {
        return source.lift.call(raceStatic(source, ...otherSources), undefined);
    };
}
//# sourceMappingURL=raceWith.js.map