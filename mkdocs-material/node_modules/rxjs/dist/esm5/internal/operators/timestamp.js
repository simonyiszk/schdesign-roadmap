import { map } from './map';
export function timestamp(timestampProvider) {
    if (timestampProvider === void 0) { timestampProvider = Date; }
    return map(function (value) { return ({ value: value, timestamp: timestampProvider.now() }); });
}
//# sourceMappingURL=timestamp.js.map