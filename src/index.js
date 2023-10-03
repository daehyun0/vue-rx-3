/* global Vue */

import { install } from './util'
import rxMixin from './mixin'
import streamDirective from './directives/stream'
import watchAsObservable from './methods/watchAsObservable'
import fromDOMEvent from './methods/fromDOMEvent'
import subscribeTo from './methods/subscribeTo'
import eventToObservable from './methods/eventToObservable'
import createObservableMethod from './methods/createObservableMethod'

export default function VueRx (Vue) {
  install(Vue)
  Vue.mixin(rxMixin)
  Vue.directive('stream', streamDirective)
  Vue.config.globalProperties.$watchAsObservable = watchAsObservable
  Vue.config.globalProperties.$fromDOMEvent = fromDOMEvent
  Vue.config.globalProperties.$subscribeTo = subscribeTo
  Vue.config.globalProperties.$eventToObservable = eventToObservable
  Vue.config.globalProperties.$createObservableMethod = createObservableMethod
  Vue.config.optionMergeStrategies.subscriptions = Vue.config.optionMergeStrategies.data
}

// auto install
if (typeof Vue !== 'undefined') {
  Vue.use(VueRx)
}
