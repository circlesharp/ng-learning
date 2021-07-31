import { from, Observable, concatWith, concat, filter, find, findIndex, tap, of, map, concatMap, interval, take, reduce } from "rxjs";

const arrA = [1, 2, 3, 5, 7];
const arrB = ['a', 'b', 'c'];
const handler = (x: any) => {
  console.log(typeof x, x);
};

// * Given
const obsA$: Observable<number> = from(arrA);
const obsB$: Observable<string> = from(arrB);

// obsA$.subscribe(handler);
// obsB$.subscribe(handler);

// * concat
const obsC$: Observable<number | string> = concat(obsA$, obsB$);
// obsC$.subscribe(handler);

// obsA$
//   .pipe(
//     concatWith(obsB$)
//   )
//   .subscribe(handler);

// * filter
// obsA$.pipe(filter(i => i > 3)).subscribe(handler);

// * find
// obsA$.pipe(find(i => i > 3)).subscribe(handler);

// * findIndex
// obsA$.pipe(findIndex(i => i > 3)).subscribe(handler);

// * tap => forEach
// of(Math.random()).pipe(
//   tap(console.log),
//   map(n => n > 0.5 ? 'big' : 'small'),
// ).subscribe(console.log);

// obsA$.pipe(
//   tap(n => {
//     if (n > 3) {
//       throw new TypeError(`Value ${n} is greater than 3`)
//     }
//   })
// )
//   .subscribe(handler)

// of(1, 2, 3).pipe(
//   concatMap(n => interval(1000).pipe(
//     take(Math.round(Math.random() * 10)),
//     map(() => 'X'),
//     tap({
//       complete: () => console.log(`Done with ${n}`)
//     })
//   ))
// )
//   .subscribe(console.log);

// * map
// obsC$.pipe(map(i => String(i)))

// * reduce
// obsC$.pipe(
//   reduce((t, c) => `${t}${c}`, '')
// ).subscribe(handler);

// * take slice(0, n+1)
// obsA$.pipe(take(3)).subscribe(handler);
