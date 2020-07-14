"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animationFrames = void 0;
var Observable_1 = require("../../Observable");
function animationFrames(timestampProvider) {
    if (timestampProvider === void 0) { timestampProvider = Date; }
    return timestampProvider === Date ? DEFAULT_ANIMATION_FRAMES : animationFramesFactory(timestampProvider);
}
exports.animationFrames = animationFrames;
function animationFramesFactory(timestampProvider) {
    return new Observable_1.Observable(function (subscriber) {
        var id;
        var start = timestampProvider.now();
        var run = function () {
            subscriber.next(timestampProvider.now() - start);
            if (!subscriber.closed) {
                id = requestAnimationFrame(run);
            }
        };
        id = requestAnimationFrame(run);
        return function () { return cancelAnimationFrame(id); };
    });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory(Date);
//# sourceMappingURL=animationFrames.js.map