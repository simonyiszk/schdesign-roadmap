"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
var NotFoundErrorImpl = (function () {
    function NotFoundErrorImpl(message) {
        Error.call(this);
        this.message = message;
        this.name = 'NotFoundError';
        return this;
    }
    NotFoundErrorImpl.prototype = Object.create(Error.prototype);
    return NotFoundErrorImpl;
})();
exports.NotFoundError = NotFoundErrorImpl;
//# sourceMappingURL=NotFoundError.js.map