const rxjs = typeof require !== 'undefined'
  ? require('vue-rx-3/src/umd-aliases/rxjs')
  : typeof window !== 'undefined'
    ? window.rxjs
    : null

if (!rxjs) {
  throw new Error(`[vue-rx]: RxJS is not found.`)
}

const {
  Observable,
  Subject,
  Subscription,
  fromEvent,
  NEVER
} = rxjs

export {
  Observable,
  Subject,
  Subscription,
  fromEvent,
  NEVER
}
