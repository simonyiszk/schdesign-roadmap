"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = void 0;
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map