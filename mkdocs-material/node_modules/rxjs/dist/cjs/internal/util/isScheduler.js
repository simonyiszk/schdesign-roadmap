"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isScheduler = void 0;
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map