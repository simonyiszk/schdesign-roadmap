import { Observable } from '../Observable';
import { OperatorFunction, SchedulerLike } from '../types';
export declare function windowTime<T>(windowTimeSpan: number, scheduler?: SchedulerLike): OperatorFunction<T, Observable<T>>;
export declare function windowTime<T>(windowTimeSpan: number, windowCreationInterval: number, scheduler?: SchedulerLike): OperatorFunction<T, Observable<T>>;
export declare function windowTime<T>(windowTimeSpan: number, windowCreationInterval: number, maxWindowSize: number, scheduler?: SchedulerLike): OperatorFunction<T, Observable<T>>;
//# sourceMappingURL=windowTime.d.ts.map