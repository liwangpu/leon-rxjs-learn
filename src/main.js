const { observable, BehaviorSubject, Subject, of, concat, defer, from, interval, timer, pipe, Observable, asyncScheduler } = require('rxjs');
const { switchMap, mergeMap, concatMap, map, delay, take, tap, observeOn, publish, share, multicast, refCount } = require('rxjs/operators');
const { subscriber } = require('./subscriber');

// let obs = of(1);
// obs.subscribe(subscriber('s1'));

function random() {
    return Math.random();
}

// let source = defer(() => of(random()))
// .pipe(delay(0))
// .pipe(tap(x => console.log('source', x)));
const source = concat(
    defer(() => of(random())),
    defer(() => of(random())).pipe(delay(1))
);

let m = source.pipe(multicast(() => new Subject()), refCount());

m.subscribe(subscriber('a'));
m.subscribe(subscriber('b'));
