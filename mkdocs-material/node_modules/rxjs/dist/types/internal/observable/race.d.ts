import { Observable } from '../Observable';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { TeardownLogic, ObservableInput, ObservedValueUnionFromArray } from '../types';
import { OuterSubscriber } from '../OuterSubscriber';
import { InnerSubscriber } from '../InnerSubscriber';
export declare function race<A extends ObservableInput<any>[]>(observables: A): Observable<ObservedValueUnionFromArray<A>>;
export declare function race<A extends ObservableInput<any>[]>(...observables: A): Observable<ObservedValueUnionFromArray<A>>;
export declare class RaceOperator<T> implements Operator<T, T> {
    call(subscriber: Subscriber<T>, source: any): TeardownLogic;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class RaceSubscriber<T> extends OuterSubscriber<T, T> {
    private hasFirst;
    private observables;
    private subscriptions;
    constructor(destination: Subscriber<T>);
    protected _next(observable: any): void;
    protected _complete(): void;
    notifyNext(outerValue: T, innerValue: T, outerIndex: number, innerIndex: number, innerSub: InnerSubscriber<T, T>): void;
    notifyComplete(innerSub: InnerSubscriber<T, T>): void;
    notifyError(error: any, innerSub: InnerSubscriber<T, T>): void;
}
//# sourceMappingURL=race.d.ts.map