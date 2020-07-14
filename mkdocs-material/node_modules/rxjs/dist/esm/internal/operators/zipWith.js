import { zip as zipStatic } from '../observable/zip';
export function zip(...observables) {
    return function zipOperatorFunction(source) {
        return source.lift.call(zipStatic(source, ...observables), undefined);
    };
}
export function zipWith(...otherInputs) {
    return zip(...otherInputs);
}
//# sourceMappingURL=zipWith.js.map