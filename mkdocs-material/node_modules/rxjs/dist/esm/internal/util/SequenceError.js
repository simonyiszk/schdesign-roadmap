const SequenceErrorImpl = (() => {
    function SequenceErrorImpl(message) {
        Error.call(this);
        this.message = message;
        this.name = 'SequenceError';
        return this;
    }
    SequenceErrorImpl.prototype = Object.create(Error.prototype);
    return SequenceErrorImpl;
})();
export const SequenceError = SequenceErrorImpl;
//# sourceMappingURL=SequenceError.js.map