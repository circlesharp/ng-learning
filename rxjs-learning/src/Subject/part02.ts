import { from, Subject } from "rxjs";

const subject = new Subject<number>();

subject.subscribe(v => {
  console.log(`observerA: ${v}`);
});

subject.subscribe(v => {
  console.log(`observerB: ${v}`);
});

const observable = from([1, 2, 3]);

// convert a unicast Observable execution to multicast, through the Subject.
// A "multicasted Observable" passes notifications through a Subject which may have many subscribers,
// whereas a plain "unicast Observable" only sends notifications to a single Observer.
observable.subscribe(subject);
