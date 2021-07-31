import { AsyncSubject } from "rxjs";

// * AsyncSubject
// The AsyncSubject is a variant
// where only the last value of the Observable execution
// is sent to its observers,
// and only when the execution completes.

const subject = new AsyncSubject();

subject.subscribe(v => console.log('a', v));

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe(v => console.log('b', v));
subject.next(5);
subject.complete();
