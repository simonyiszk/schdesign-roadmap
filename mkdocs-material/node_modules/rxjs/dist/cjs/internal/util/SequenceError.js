"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceError = void 0;
var SequenceErrorImpl = (function () {
    function SequenceErrorImpl(message) {
        Error.call(this);
        this.message = message;
        this.name = 'SequenceError';
        return this;
    }
    SequenceErrorImpl.prototype = Object.create(Error.prototype);
    return SequenceErrorImpl;
})();
exports.SequenceError = SequenceErrorImpl;
//# sourceMappingURL=SequenceError.js.map