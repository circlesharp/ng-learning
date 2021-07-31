// * BehaviorSubjects
// BehaviorSubjects are useful for representing "values over time".
// For instance, an event stream of birthdays is a Subject,
// but the stream of a person's age would be a BehaviorSubject.

import { BehaviorSubject } from "rxjs";

const subject = new BehaviorSubject(0);

subject.subscribe(v => console.log('a', v));

subject.next(1);
subject.next(2);

subject.subscribe(v => console.log('b', v));

subject.next(3);

subject.subscribe(v => console.log('c', v));
