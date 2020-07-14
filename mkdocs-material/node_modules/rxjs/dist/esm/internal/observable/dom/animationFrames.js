import { Observable } from '../../Observable';
export function animationFrames(timestampProvider = Date) {
    return timestampProvider === Date ? DEFAULT_ANIMATION_FRAMES : animationFramesFactory(timestampProvider);
}
function animationFramesFactory(timestampProvider) {
    return new Observable(subscriber => {
        let id;
        const start = timestampProvider.now();
        const run = () => {
            subscriber.next(timestampProvider.now() - start);
            if (!subscriber.closed) {
                id = requestAnimationFrame(run);
            }
        };
        id = requestAnimationFrame(run);
        return () => cancelAnimationFrame(id);
    });
}
const DEFAULT_ANIMATION_FRAMES = animationFramesFactory(Date);
//# sourceMappingURL=animationFrames.js.map