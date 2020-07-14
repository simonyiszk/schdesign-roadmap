let Scheduler = (() => {
    class Scheduler {
        constructor(SchedulerAction, now = Scheduler.now) {
            this.SchedulerAction = SchedulerAction;
            this.now = now;
        }
        schedule(work, delay = 0, state) {
            return new this.SchedulerAction(this, work).schedule(state, delay);
        }
    }
    Scheduler.now = () => Date.now();
    return Scheduler;
})();
export { Scheduler };
//# sourceMappingURL=Scheduler.js.map