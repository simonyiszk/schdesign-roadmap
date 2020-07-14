import { Subscriber } from '../Subscriber';
import { PartialObserver } from '../types';
export declare function toSubscriber<T>(nextOrObserver?: PartialObserver<T> | ((value: T) => void) | null, error?: ((error: any) => void) | null, complete?: (() => void) | null): Subscriber<T>;
//# sourceMappingURL=toSubscriber.d.ts.map