"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publish = void 0;
var Subject_1 = require("../Subject");
var multicast_1 = require("./multicast");
function publish(selector) {
    return selector ?
        multicast_1.multicast(function () { return new Subject_1.Subject(); }, selector) :
        multicast_1.multicast(new Subject_1.Subject());
}
exports.publish = publish;
//# sourceMappingURL=publish.js.map