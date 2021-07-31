// * ReplaySubject

import { ReplaySubject } from "rxjs";

// A ReplaySubject is similar to a BehaviorSubject
// in that it can send old values to new subscribers,
// but it can also record a part of the Observable execution.
// BehaviorSubject ~ ReplaySubject(1)

// const subject = new ReplaySubject(1);

// subject.next(0);
// subject.subscribe(v => console.log('a', v));

// subject.next(1);
// subject.next(2);

// subject.subscribe(v => console.log('b', v));

// subject.next(3);

// subject.subscribe(v => console.log('c', v));


// In the following example we use a large buffer size of 100,
// but a window time parameter of just 500 milliseconds.
const subject = new ReplaySubject(100, 500 /* windowTime*/);
subject.subscribe(v => console.log('a', v))
setTimeout(() => {
  // 600， 800， 1000 都可以保留
  subject.subscribe(v => console.log('b', v))
}, 1000);

let i = 1;
setInterval(() => subject.next(i++), 200);
