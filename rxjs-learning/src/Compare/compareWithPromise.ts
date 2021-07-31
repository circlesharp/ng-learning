import { Observable, Subject } from "rxjs";

const wait1000msAndReturnValue = (cb) => {
  setTimeout(() => {
    cb('value that returned in 1000ms.')
  }, 1000);
}

const solution = console.log;

// promise
new Promise(resolve => {
  wait1000msAndReturnValue(resolve);
}).then(solution);

// rxjs
const subject = new Subject<string>();
const observable$: Observable<string> = subject.asObservable();
wait1000msAndReturnValue(x => subject.next(x));
observable$.subscribe(solution);

// subject itself
const subj = new Subject<string>();
wait1000msAndReturnValue(x => subj.next(x));
subj.subscribe(solution);
