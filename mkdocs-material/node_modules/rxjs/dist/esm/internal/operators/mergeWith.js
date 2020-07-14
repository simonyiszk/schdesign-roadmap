import { merge as mergeStatic } from '../observable/merge';
export function merge(...observables) {
    return (source) => source.lift.call(mergeStatic(source, ...observables), undefined);
}
export function mergeWith(...otherSources) {
    return merge(...otherSources);
}
//# sourceMappingURL=mergeWith.js.map