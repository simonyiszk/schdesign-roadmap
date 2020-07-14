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
export var SequenceError = SequenceErrorImpl;
//# sourceMappingURL=SequenceError.js.map