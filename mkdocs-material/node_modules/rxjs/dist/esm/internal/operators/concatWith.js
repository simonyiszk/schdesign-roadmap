import { concat as concatStatic } from '../observable/concat';
export function concatWith(...otherSources) {
    return (source) => source.lift.call(concatStatic(source, ...otherSources), undefined);
}
//# sourceMappingURL=concatWith.js.map