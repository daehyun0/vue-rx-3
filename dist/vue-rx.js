let ee = function() {
};
function le(e) {
  return e && typeof e.subscribe == "function";
}
function C(e) {
  return e && typeof e.next == "function";
}
function de(e, t, r) {
  t in e && (e[t] = r);
}
function L(e) {
  return [e.arg].concat(Object.keys(e.modifiers)).join(":");
}
var D = function(e, t) {
  return D = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, D(e, t);
};
function P(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  D(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function he(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function u(f) {
      try {
        c(n.next(f));
      } catch (d) {
        s(d);
      }
    }
    function a(f) {
      try {
        c(n.throw(f));
      } catch (d) {
        s(d);
      }
    }
    function c(f) {
      f.done ? i(f.value) : o(f.value).then(u, a);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function re(e, t) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, s;
  return s = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function u(c) {
    return function(f) {
      return a([c, f]);
    };
  }
  function a(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, o && (i = c[0] & 2 ? o.return : c[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, c[1])).done)
          return i;
        switch (o = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
          case 0:
          case 1:
            i = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, o = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = c;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(c);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = t.call(e, r);
      } catch (f) {
        c = [6, f], o = 0;
      } finally {
        n = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function _(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function E(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}
function O(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function x(e) {
  return this instanceof x ? (this.v = e, this) : new x(e);
}
function ve(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), o, i = [];
  return o = {}, s("next"), s("throw"), s("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function s(l) {
    n[l] && (o[l] = function(p) {
      return new Promise(function(b, h) {
        i.push([l, p, b, h]) > 1 || u(l, p);
      });
    });
  }
  function u(l, p) {
    try {
      a(n[l](p));
    } catch (b) {
      d(i[0][3], b);
    }
  }
  function a(l) {
    l.value instanceof x ? Promise.resolve(l.value.v).then(c, f) : d(i[0][2], l);
  }
  function c(l) {
    u("next", l);
  }
  function f(l) {
    u("throw", l);
  }
  function d(l, p) {
    l(p), i.shift(), i.length && u(i[0][0], i[0][1]);
  }
}
function pe(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof _ == "function" ? _(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(i) {
    r[i] = e[i] && function(s) {
      return new Promise(function(u, a) {
        s = e[i](s), o(u, a, s.done, s.value);
      });
    };
  }
  function o(i, s, u, a) {
    Promise.resolve(a).then(function(c) {
      i({ value: c, done: u });
    }, s);
  }
}
function v(e) {
  return typeof e == "function";
}
function te(e) {
  var t = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = e(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var R = te(function(e) {
  return function(r) {
    e(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function F(e, t) {
  if (e) {
    var r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
var w = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, r, n, o, i;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var u = _(s), a = u.next(); !a.done; a = u.next()) {
              var c = a.value;
              c.remove(this);
            }
          } catch (h) {
            t = { error: h };
          } finally {
            try {
              a && !a.done && (r = u.return) && r.call(u);
            } finally {
              if (t)
                throw t.error;
            }
          }
        else
          s.remove(this);
      var f = this.initialTeardown;
      if (v(f))
        try {
          f();
        } catch (h) {
          i = h instanceof R ? h.errors : [h];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var l = _(d), p = l.next(); !p.done; p = l.next()) {
            var b = p.value;
            try {
              X(b);
            } catch (h) {
              i = i ?? [], h instanceof R ? i = O(O([], E(i)), E(h.errors)) : i.push(h);
            }
          }
        } catch (h) {
          n = { error: h };
        } finally {
          try {
            p && !p.done && (o = l.return) && o.call(l);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (i)
        throw new R(i);
    }
  }, e.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        X(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var r = this._parentage;
    return r === t || Array.isArray(r) && r.includes(t);
  }, e.prototype._addParent = function(t) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }, e.prototype._removeParent = function(t) {
    var r = this._parentage;
    r === t ? this._parentage = null : Array.isArray(r) && F(r, t);
  }, e.prototype.remove = function(t) {
    var r = this._finalizers;
    r && F(r, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), ne = w.EMPTY;
function oe(e) {
  return e instanceof w || e && "closed" in e && v(e.remove) && v(e.add) && v(e.unsubscribe);
}
function X(e) {
  v(e) ? e() : e.unsubscribe();
}
var ie = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Y = {
  setTimeout: function(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    var o = Y.delegate;
    return o != null && o.setTimeout ? o.setTimeout.apply(o, O([e, t], E(r))) : setTimeout.apply(void 0, O([e, t], E(r)));
  },
  clearTimeout: function(e) {
    var t = Y.delegate;
    return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e);
  },
  delegate: void 0
};
function se(e) {
  Y.setTimeout(function() {
    throw e;
  });
}
function G() {
}
function k(e) {
  e();
}
var J = function(e) {
  P(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, oe(r) && r.add(n)) : n.destination = we, n;
  }
  return t.create = function(r, n, o) {
    return new I(r, n, o);
  }, t.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, t.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(r) {
    this.destination.next(r);
  }, t.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(w), be = Function.prototype.bind;
function U(e, t) {
  return be.call(e, t);
}
var ye = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(t);
      } catch (n) {
        M(n);
      }
  }, e.prototype.error = function(t) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(t);
      } catch (n) {
        M(n);
      }
    else
      M(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (r) {
        M(r);
      }
  }, e;
}(), I = function(e) {
  P(t, e);
  function t(r, n, o) {
    var i = e.call(this) || this, s;
    if (v(r) || !r)
      s = {
        next: r ?? void 0,
        error: n ?? void 0,
        complete: o ?? void 0
      };
    else {
      var u;
      i && ie.useDeprecatedNextContext ? (u = Object.create(r), u.unsubscribe = function() {
        return i.unsubscribe();
      }, s = {
        next: r.next && U(r.next, u),
        error: r.error && U(r.error, u),
        complete: r.complete && U(r.complete, u)
      }) : s = r;
    }
    return i.destination = new ye(s), i;
  }
  return t;
}(J);
function M(e) {
  se(e);
}
function me(e) {
  throw e;
}
var we = {
  closed: !0,
  next: G,
  error: me,
  complete: G
}, K = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Se(e) {
  return e;
}
function Ee(e) {
  return e.length === 0 ? Se : e.length === 1 ? e[0] : function(r) {
    return e.reduce(function(n, o) {
      return o(n);
    }, r);
  };
}
var y = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var r = new e();
    return r.source = this, r.operator = t, r;
  }, e.prototype.subscribe = function(t, r, n) {
    var o = this, i = xe(t) ? t : new I(t, r, n);
    return k(function() {
      var s = o, u = s.operator, a = s.source;
      i.add(u ? u.call(i, a) : a ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      t.error(r);
    }
  }, e.prototype.forEach = function(t, r) {
    var n = this;
    return r = z(r), new r(function(o, i) {
      var s = new I({
        next: function(u) {
          try {
            t(u);
          } catch (a) {
            i(a), s.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      n.subscribe(s);
    });
  }, e.prototype._subscribe = function(t) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t);
  }, e.prototype[K] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return Ee(t)(this);
  }, e.prototype.toPromise = function(t) {
    var r = this;
    return t = z(t), new t(function(n, o) {
      var i;
      r.subscribe(function(s) {
        return i = s;
      }, function(s) {
        return o(s);
      }, function() {
        return n(i);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function z(e) {
  var t;
  return (t = e ?? ie.Promise) !== null && t !== void 0 ? t : Promise;
}
function ge(e) {
  return e && v(e.next) && v(e.error) && v(e.complete);
}
function xe(e) {
  return e && e instanceof J || ge(e) && oe(e);
}
function _e(e) {
  return v(e == null ? void 0 : e.lift);
}
function Q(e) {
  return function(t) {
    if (_e(t))
      return t.lift(function(r) {
        try {
          return e(r, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function q(e, t, r, n, o) {
  return new Oe(e, t, r, n, o);
}
var Oe = function(e) {
  P(t, e);
  function t(r, n, o, i, s, u) {
    var a = e.call(this, r) || this;
    return a.onFinalize = s, a.shouldUnsubscribe = u, a._next = n ? function(c) {
      try {
        n(c);
      } catch (f) {
        r.error(f);
      }
    } : e.prototype._next, a._error = i ? function(c) {
      try {
        i(c);
      } catch (f) {
        r.error(f);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, a._complete = o ? function() {
      try {
        o();
      } catch (c) {
        r.error(c);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, a;
  }
  return t.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      e.prototype.unsubscribe.call(this), !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, t;
}(J), Ae = te(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), B = function(e) {
  P(t, e);
  function t() {
    var r = e.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return t.prototype.lift = function(r) {
    var n = new V(this, this);
    return n.operator = r, n;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Ae();
  }, t.prototype.next = function(r) {
    var n = this;
    k(function() {
      var o, i;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var s = _(n.currentObservers), u = s.next(); !u.done; u = s.next()) {
            var a = u.value;
            a.next(r);
          }
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            u && !u.done && (i = s.return) && i.call(s);
          } finally {
            if (o)
              throw o.error;
          }
        }
      }
    });
  }, t.prototype.error = function(r) {
    var n = this;
    k(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = r;
        for (var o = n.observers; o.length; )
          o.shift().error(r);
      }
    });
  }, t.prototype.complete = function() {
    var r = this;
    k(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = !0;
        for (var n = r.observers; n.length; )
          n.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r);
  }, t.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, t.prototype._innerSubscribe = function(r) {
    var n = this, o = this, i = o.hasError, s = o.isStopped, u = o.observers;
    return i || s ? ne : (this.currentObservers = null, u.push(r), new w(function() {
      n.currentObservers = null, F(u, r);
    }));
  }, t.prototype._checkFinalizedStatuses = function(r) {
    var n = this, o = n.hasError, i = n.thrownError, s = n.isStopped;
    o ? r.error(i) : s && r.complete();
  }, t.prototype.asObservable = function() {
    var r = new y();
    return r.source = this, r;
  }, t.create = function(r, n) {
    return new V(r, n);
  }, t;
}(y), V = function(e) {
  P(t, e);
  function t(r, n) {
    var o = e.call(this) || this;
    return o.destination = r, o.source = n, o;
  }
  return t.prototype.next = function(r) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, r);
  }, t.prototype.error = function(r) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, r);
  }, t.prototype.complete = function() {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
  }, t.prototype._subscribe = function(r) {
    var n, o;
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : ne;
  }, t;
}(B), ue = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function Ie(e) {
  return v(e == null ? void 0 : e.then);
}
function Pe(e) {
  return v(e[K]);
}
function Te(e) {
  return Symbol.asyncIterator && v(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function je(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function $e() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Me = $e();
function ke(e) {
  return v(e == null ? void 0 : e[Me]);
}
function Ce(e) {
  return ve(this, arguments, function() {
    var r, n, o, i;
    return re(this, function(s) {
      switch (s.label) {
        case 0:
          r = e.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, x(r.read())];
        case 3:
          return n = s.sent(), o = n.value, i = n.done, i ? [4, x(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, x(o)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return r.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Le(e) {
  return v(e == null ? void 0 : e.getReader);
}
function T(e) {
  if (e instanceof y)
    return e;
  if (e != null) {
    if (Pe(e))
      return Re(e);
    if (ue(e))
      return Ue(e);
    if (Ie(e))
      return He(e);
    if (Te(e))
      return ce(e);
    if (ke(e))
      return De(e);
    if (Le(e))
      return Fe(e);
  }
  throw je(e);
}
function Re(e) {
  return new y(function(t) {
    var r = e[K]();
    if (v(r.subscribe))
      return r.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Ue(e) {
  return new y(function(t) {
    for (var r = 0; r < e.length && !t.closed; r++)
      t.next(e[r]);
    t.complete();
  });
}
function He(e) {
  return new y(function(t) {
    e.then(function(r) {
      t.closed || (t.next(r), t.complete());
    }, function(r) {
      return t.error(r);
    }).then(null, se);
  });
}
function De(e) {
  return new y(function(t) {
    var r, n;
    try {
      for (var o = _(e), i = o.next(); !i.done; i = o.next()) {
        var s = i.value;
        if (t.next(s), t.closed)
          return;
      }
    } catch (u) {
      r = { error: u };
    } finally {
      try {
        i && !i.done && (n = o.return) && n.call(o);
      } finally {
        if (r)
          throw r.error;
      }
    }
    t.complete();
  });
}
function ce(e) {
  return new y(function(t) {
    Ye(e, t).catch(function(r) {
      return t.error(r);
    });
  });
}
function Fe(e) {
  return ce(Ce(e));
}
function Ye(e, t) {
  var r, n, o, i;
  return he(this, void 0, void 0, function() {
    var s, u;
    return re(this, function(a) {
      switch (a.label) {
        case 0:
          a.trys.push([0, 5, 6, 11]), r = pe(e), a.label = 1;
        case 1:
          return [4, r.next()];
        case 2:
          if (n = a.sent(), !!n.done)
            return [3, 4];
          if (s = n.value, t.next(s), t.closed)
            return [2];
          a.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return u = a.sent(), o = { error: u }, [3, 11];
        case 6:
          return a.trys.push([6, , 9, 10]), n && !n.done && (i = r.return) ? [4, i.call(r)] : [3, 8];
        case 7:
          a.sent(), a.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (o)
            throw o.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
function Ge(e, t, r, n, o) {
  n === void 0 && (n = 0), o === void 0 && (o = !1);
  var i = t.schedule(function() {
    r(), o ? e.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (e.add(i), !o)
    return i;
}
function ae(e, t) {
  return Q(function(r, n) {
    var o = 0;
    r.subscribe(q(n, function(i) {
      n.next(e.call(t, i, o++));
    }));
  });
}
var qe = Array.isArray;
function Ze(e, t) {
  return qe(t) ? e.apply(void 0, O([], E(t))) : e(t);
}
function Je(e) {
  return ae(function(t) {
    return Ze(e, t);
  });
}
function Ke(e, t, r, n, o, i, s, u) {
  var a = [], c = 0, f = 0, d = !1, l = function() {
    d && !a.length && !c && t.complete();
  }, p = function(h) {
    return c < n ? b(h) : a.push(h);
  }, b = function(h) {
    i && t.next(h), c++;
    var S = !1;
    T(r(h, f++)).subscribe(q(t, function(m) {
      o == null || o(m), i ? p(m) : t.next(m);
    }, function() {
      S = !0;
    }, void 0, function() {
      if (S)
        try {
          c--;
          for (var m = function() {
            var g = a.shift();
            s ? Ge(t, s, function() {
              return b(g);
            }) : b(g);
          }; a.length && c < n; )
            m();
          l();
        } catch (g) {
          t.error(g);
        }
    }));
  };
  return e.subscribe(q(t, p, function() {
    d = !0, l();
  })), function() {
    u == null || u();
  };
}
function fe(e, t, r) {
  return r === void 0 && (r = 1 / 0), v(t) ? fe(function(n, o) {
    return ae(function(i, s) {
      return t(n, i, o, s);
    })(T(e(n, o)));
  }, r) : (typeof t == "number" && (r = t), Q(function(n, o) {
    return Ke(n, o, e, r);
  }));
}
var Qe = ["addListener", "removeListener"], Be = ["addEventListener", "removeEventListener"], We = ["on", "off"];
function Z(e, t, r, n) {
  if (v(r) && (n = r, r = void 0), n)
    return Z(e, t, r).pipe(Je(n));
  var o = E(Ve(e) ? Be.map(function(u) {
    return function(a) {
      return e[u](t, a, r);
    };
  }) : Xe(e) ? Qe.map(N(e, t)) : ze(e) ? We.map(N(e, t)) : [], 2), i = o[0], s = o[1];
  if (!i && ue(e))
    return fe(function(u) {
      return Z(u, t, r);
    })(T(e));
  if (!i)
    throw new TypeError("Invalid event target");
  return new y(function(u) {
    var a = function() {
      for (var c = [], f = 0; f < arguments.length; f++)
        c[f] = arguments[f];
      return u.next(1 < c.length ? c : c[0]);
    };
    return i(a), function() {
      return s(a);
    };
  });
}
function N(e, t) {
  return function(r) {
    return function(n) {
      return e[r](t, n);
    };
  };
}
function Xe(e) {
  return v(e.addListener) && v(e.removeListener);
}
function ze(e) {
  return v(e.on) && v(e.off);
}
function Ve(e) {
  return v(e.addEventListener) && v(e.removeEventListener);
}
var Ne = new y(G);
function er(e) {
  e === void 0 && (e = {});
  var t = e.connector, r = t === void 0 ? function() {
    return new B();
  } : t, n = e.resetOnError, o = n === void 0 ? !0 : n, i = e.resetOnComplete, s = i === void 0 ? !0 : i, u = e.resetOnRefCountZero, a = u === void 0 ? !0 : u;
  return function(c) {
    var f, d, l, p = 0, b = !1, h = !1, S = function() {
      d == null || d.unsubscribe(), d = void 0;
    }, m = function() {
      S(), f = l = void 0, b = h = !1;
    }, g = function() {
      var A = f;
      m(), A == null || A.unsubscribe();
    };
    return Q(function(A, W) {
      p++, !h && !b && S();
      var j = l = l ?? r();
      W.add(function() {
        p--, p === 0 && !h && !b && (d = H(g, a));
      }), j.subscribe(W), !f && p > 0 && (f = new I({
        next: function($) {
          return j.next($);
        },
        error: function($) {
          h = !0, S(), d = H(m, o, $), j.error($);
        },
        complete: function() {
          b = !0, S(), d = H(m, s), j.complete();
        }
      }), T(A).subscribe(f));
    })(c);
  };
}
function H(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  if (t === !0) {
    e();
    return;
  }
  if (t !== !1) {
    var o = new I({
      next: function() {
        o.unsubscribe(), e();
      }
    });
    return T(t.apply(void 0, O([], E(r)))).subscribe(o);
  }
}
const rr = {
  created() {
    const e = this, t = e.$options.domStreams;
    t && t.forEach((o) => {
      e[o] = new B();
    });
    const r = e.$options.observableMethods;
    r && (Array.isArray(r) ? r.forEach((o) => {
      e[o + "$"] = e.$createObservableMethod(o);
    }) : Object.keys(r).forEach((o) => {
      e[r[o]] = e.$createObservableMethod(o);
    }));
    let n = e.$options.subscriptions;
    typeof n == "function" && (n = n.call(e)), n && (e.$observables = {}, e._subscription = new w(), Object.keys(n).forEach((o) => {
      de(e, o, void 0);
      const i = e.$observables[o] = n[o];
      le(i) && e._subscription.add(n[o].subscribe((s) => {
        e[o] = s;
      }, (s) => {
        throw s;
      }));
    }));
  },
  serverPrefetch() {
    this._subscription && this._subscription.unsubscribe();
  },
  beforeDestroy() {
    this._subscription && this._subscription.unsubscribe();
  }
}, tr = {
  // Example ./example/counter_dir.html
  bind(e, t, r) {
    let n = t.value;
    const o = t.arg, i = t.expression, s = t.modifiers;
    if (C(n))
      n = { subject: n };
    else if (!n || !C(n.subject)) {
      ee(
        'Invalid Subject found in directive with key "' + i + '".' + i + " should be an instance of Subject or have the type { subject: Subject, data: any }.",
        r.context
      );
      return;
    }
    const u = {
      stop: (d) => d.stopPropagation(),
      prevent: (d) => d.preventDefault()
    };
    var a = Object.keys(u).filter(
      (d) => s[d]
    );
    const c = n.subject, f = (c.next || c.onNext).bind(c);
    if (!s.native && r.componentInstance)
      n.subscription = r.componentInstance.$eventToObservable(o).subscribe((d) => {
        a.forEach((l) => u[l](d)), f({
          event: d,
          data: n.data
        });
      });
    else {
      const d = n.options ? [e, o, n.options] : [e, o];
      n.subscription = Z(...d).subscribe((l) => {
        a.forEach((p) => u[p](l)), f({
          event: l,
          data: n.data
        });
      });
    }
    (e._rxHandles || (e._rxHandles = {}))[L(t)] = n;
  },
  update(e, t) {
    const r = t.value, n = e._rxHandles && e._rxHandles[L(t)];
    n && r && C(r.subject) && (n.data = r.data);
  },
  unbind(e, t) {
    const r = L(t), n = e._rxHandles && e._rxHandles[r];
    n && (n.subscription && n.subscription.unsubscribe(), e._rxHandles[r] = null);
  }
};
function nr(e, t) {
  const r = this;
  return new y((o) => {
    let i;
    const s = () => {
      i = r.$watch(e, (u, a) => {
        o.next({ oldValue: a, newValue: u });
      }, t);
    };
    return r._data ? s() : r.$once("hook:created", s), new w(() => {
      i && i();
    });
  });
}
function or(e, t) {
  if (typeof window > "u")
    return Ne;
  const r = this, n = document.documentElement;
  return new y((i) => {
    function s(u) {
      if (r.$el) {
        if (e === null && r.$el === u.target)
          return i.next(u);
        for (var a = r.$el.querySelectorAll(e), c = u.target, f = 0, d = a.length; f < d; f++)
          if (a[f] === c)
            return i.next(u);
      }
    }
    return n.addEventListener(t, s), new w(() => {
      n.removeEventListener(t, s);
    });
  });
}
function ir(e, ...t) {
  const r = e.subscribe(...t);
  return (this._subscription || (this._subscription = new w())).add(r), r;
}
function sr(e) {
  const t = this, r = Array.isArray(e) ? e : [e];
  return new y((o) => {
    const i = r.map((s) => {
      const u = (a) => o.next({ name: s, msg: a });
      return t.$on(s, u), { name: s, callback: u };
    });
    return () => {
      i.forEach((s) => t.$off(s.name, s.callback));
    };
  });
}
function ur(e, t) {
  const r = this;
  r[e] !== void 0 && ee(
    `Potential bug: Method ${e} already defined on vm and has been overwritten by $createObservableMethod.` + String(r[e])
  );
  const n = function(o) {
    return r[e] = function() {
      const i = Array.from(arguments);
      t ? (i.push(this), o.next(i)) : i.length <= 1 ? o.next(i[0]) : o.next(i);
    }, function() {
      delete r[e];
    };
  };
  return new y(n).pipe(er());
}
function cr(e) {
  e.mixin(rr), e.directive("stream", tr), e.config.globalProperties.$watchAsObservable = nr, e.config.globalProperties.$fromDOMEvent = or, e.config.globalProperties.$subscribeTo = ir, e.config.globalProperties.$eventToObservable = sr, e.config.globalProperties.$createObservableMethod = ur, e.config.optionMergeStrategies.subscriptions = e.config.optionMergeStrategies.data;
}
typeof Vue < "u" && Vue.use(cr);
export {
  cr as default
};
