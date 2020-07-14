import { Observable } from '../../Observable';
export function animationFrames(timestampProvider) {
    if (timestampProvider === void 0) { timestampProvider = Date; }
    return timestampProvider === Date ? DEFAULT_ANIMATION_FRAMES : animationFramesFactory(timestampProvider);
}
function animationFramesFactory(timestampProvider) {
    return new Observable(function (subscriber) {
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