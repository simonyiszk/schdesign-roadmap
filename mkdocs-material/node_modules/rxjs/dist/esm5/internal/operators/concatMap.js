import { mergeMap } from './mergeMap';
export function concatMap(project, resultSelector) {
    if (typeof resultSelector === 'function') {
        return mergeMap(project, resultSelector, 1);
    }
    return mergeMap(project, 1);
}
//# sourceMappingURL=concatMap.js.map