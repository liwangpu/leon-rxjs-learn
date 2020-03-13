const { observable, BehaviorSubject, Subject, of, from, interval, timer, pipe, Observable, asyncScheduler } = require('rxjs');
const { switchMap, mergeMap, concatMap, map, delay, take, tap, observeOn } = require('rxjs/operators');
const { Subscriber } = require('./subscriber');

let obs = of(1);
obs.subscribe(new Subscriber('Leon'));