import { catchError, Observable, of } from "rxjs";

const obs$ = new Observable<number>(observer => {
  observer.next(1);
  observer.error('error from observer');
});

obs$.pipe(
  catchError((error): Observable<number> => {
    console.log(2333, error);
    return of(2);
  }),
).subscribe(console.log);
