import { Observable } from "rxjs";

const observable = new Observable(function subscribe(subscriber) {
  try {
    subscriber.next(1);
    subscriber.next(2);
    throw new Error('ooops');
    subscriber.next(3);
    subscriber.complete();
  } catch (error) {
    subscriber.error(error);
  }
});

observable.subscribe(x => console.log(x));
