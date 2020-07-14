import { Observable } from '../Observable';
import { ConnectableObservable } from '../observable/ConnectableObservable';
import { UnaryFunction } from '../types';
/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @name publishBehavior
 */
export declare function publishBehavior<T>(value: T): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
//# sourceMappingURL=publishBehavior.d.ts.map