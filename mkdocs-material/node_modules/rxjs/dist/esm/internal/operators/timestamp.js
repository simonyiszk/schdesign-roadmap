import { map } from './map';
export function timestamp(timestampProvider = Date) {
    return map((value) => ({ value, timestamp: timestampProvider.now() }));
}
//# sourceMappingURL=timestamp.js.map