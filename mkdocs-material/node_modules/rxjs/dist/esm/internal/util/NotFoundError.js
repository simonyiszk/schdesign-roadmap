const NotFoundErrorImpl = (() => {
    function NotFoundErrorImpl(message) {
        Error.call(this);
        this.message = message;
        this.name = 'NotFoundError';
        return this;
    }
    NotFoundErrorImpl.prototype = Object.create(Error.prototype);
    return NotFoundErrorImpl;
})();
export const NotFoundError = NotFoundErrorImpl;
//# sourceMappingURL=NotFoundError.js.map