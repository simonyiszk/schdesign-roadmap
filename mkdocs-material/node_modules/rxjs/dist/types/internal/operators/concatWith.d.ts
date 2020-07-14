import { ObservableInput, OperatorFunction, ObservedValueUnionFromArray } from '../types';
export declare function concatWith<T>(): OperatorFunction<T, T>;
export declare function concatWith<T, A extends ObservableInput<any>[]>(...otherSources: A): OperatorFunction<T, ObservedValueUnionFromArray<A> | T>;
//# sourceMappingURL=concatWith.d.ts.map