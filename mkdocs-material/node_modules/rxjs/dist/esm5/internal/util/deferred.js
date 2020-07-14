var Deferred = (function () {
    function Deferred() {
        var _this = this;
        this.resolve = null;
        this.reject = null;
        this.promise = new Promise(function (a, b) {
            _this.resolve = a;
            _this.reject = b;
        });
    }
    return Deferred;
}());
export { Deferred };
//# sourceMappingURL=deferred.js.map