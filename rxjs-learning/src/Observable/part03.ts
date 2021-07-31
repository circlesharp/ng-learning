import { timer } from "rxjs";

const observable = timer(500, 1000);

const subscription = observable.subscribe(x => console.log(x));

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);
