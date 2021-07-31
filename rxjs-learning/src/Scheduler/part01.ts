// * Scheduler
// A scheduler controls when a subscription starts and
// when notifications are delivered.
// * It consists of 3 components:
// 1. A Scheduler is a data structure.
// 2. A Scheduler is an execution context.
// 3. A Scheduler has a (virtual) clock.

import { asyncScheduler, Observable, observeOn } from "rxjs";

const obs$ = new Observable((proxyObserver) => {
  proxyObserver.next(1);
  proxyObserver.next(2);
  proxyObserver.next(3);
  proxyObserver.complete();
});

console.log('just before subscribe');

// observeOn(asyncScheduler) introduces a proxy Observer between new Observable and the final Observer
obs$
  .pipe(observeOn(asyncScheduler))
  .subscribe({
    next: console.log,
    complete: () => { console.log('complete') },
  });

console.log('just after subscribe');
