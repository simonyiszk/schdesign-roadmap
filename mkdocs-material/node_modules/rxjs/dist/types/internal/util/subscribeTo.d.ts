import { ObservableInput } from '../types';
import { Subscription } from '../Subscription';
import { Subscriber } from '../Subscriber';
export declare const subscribeTo: <T>(result: ObservableInput<T>) => (subscriber: Subscriber<T>) => Subscription | void;
//# sourceMappingURL=subscribeTo.d.ts.map