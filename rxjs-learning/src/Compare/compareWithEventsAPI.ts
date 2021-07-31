// One significant difference is that you can
// configure an observable to transform an event
// before passing the event to the handler.

import { fromEvent } from "rxjs";

const handler = () => { };
let buttonEl;

// * Creation & Cancellation
// * Observable
// setup
const clicks$ = fromEvent(buttonEl, 'click');
// begin listening
const subscription = clicks$.subscribe(handler);
// stop listening
subscription.unsubscribe();
// * Events API
// setup & begin listen
buttonEl.addEventListener('click', handler);
buttonEl.removeEventListener('click', handler);

// * Subscription
// * Observable
clicks$.subscribe(
  // focus here
)
// * Events API
buttonEl.addEventListener(
  'click',
  // focus here  
);

// * Configuration
// * Observable
clicks$.pipe(
  // focus here
)
// * Events API
buttonEl.addEventListener(
  'click',
  // can't change the passed event into another value
  // before it gets to the handler
);
