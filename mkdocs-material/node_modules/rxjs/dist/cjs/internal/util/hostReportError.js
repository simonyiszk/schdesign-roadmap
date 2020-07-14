"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hostReportError = void 0;
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map