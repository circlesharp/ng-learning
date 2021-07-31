// * Void Subject
// Sometimes the emitted value doesn't matter
// as much as the fact that a value was emitted.

import { Subject } from "rxjs";

const subject = new Subject<void>(); // equals to: new Subject()

subject.subscribe(() => console.log('One Second Has Passed.'))

setTimeout(() => subject.next(), 1000);
