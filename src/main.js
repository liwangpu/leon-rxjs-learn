const { observable, BehaviorSubject, Subject, of, from, interval, timer, pipe, Observable, asyncScheduler, defer } = require('rxjs');
const { switchMap, mergeMap, concatMap, map, delay, take, tap, observeOn } = require('rxjs/operators');
const { subscriber } = require('./subscriber');

let obs = of(1);
obs.subscribe(subscriber('s1'));
