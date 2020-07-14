"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstValueFrom = void 0;
var EmptyError_1 = require("./util/EmptyError");
var Subscription_1 = require("./Subscription");
function firstValueFrom(source) {
    return new Promise(function (resolve, reject) {
        var subs = new Subscription_1.Subscription();
        subs.add(source.subscribe({
            next: function (value) {
                resolve(value);
                subs.unsubscribe();
            },
            error: reject,
            complete: function () {
                reject(new EmptyError_1.EmptyError());
            },
        }));
    });
}
exports.firstValueFrom = firstValueFrom;
//# sourceMappingURL=firstValueFrom.js.map