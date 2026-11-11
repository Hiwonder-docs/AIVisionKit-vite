/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function $s(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const U = {}, nt = [], Te = () => {
}, Vn = () => !1, Xt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Hs = (e) => e.startsWith("onUpdate:"), z = Object.assign, Ns = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Yi = Object.prototype.hasOwnProperty, L = (e, t) => Yi.call(e, t), R = Array.isArray, it = (e) => Mt(e) === "[object Map]", Un = (e) => Mt(e) === "[object Set]", cn = (e) => Mt(e) === "[object Date]", F = (e) => typeof e == "function", J = (e) => typeof e == "string", Ee = (e) => typeof e == "symbol", V = (e) => e !== null && typeof e == "object", Bn = (e) => (V(e) || F(e)) && F(e.then) && F(e.catch), Wn = Object.prototype.toString, Mt = (e) => Wn.call(e), zi = (e) => Mt(e).slice(8, -1), kn = (e) => Mt(e) === "[object Object]", Ls = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _t = /* @__PURE__ */ $s(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), es = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Qi = /-\w/g, ae = es(
  (e) => e.replace(Qi, (t) => t.slice(1).toUpperCase())
), Zi = /\B([A-Z])/g, Ze = es(
  (e) => e.replace(Zi, "-$1").toLowerCase()
), qn = es((e) => e.charAt(0).toUpperCase() + e.slice(1)), as = es(
  (e) => e ? `on${qn(e)}` : ""
), Ce = (e, t) => !Object.is(e, t), Bt = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Gn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Ks = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let fn;
const ts = () => fn || (fn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vs(e) {
  if (R(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = J(n) ? sr(n) : Vs(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (J(e) || V(e))
    return e;
}
const Xi = /;(?![^(]*\))/g, er = /:([^]+)/, tr = /\/\*[^]*?\*\//g;
function sr(e) {
  const t = {};
  return e.replace(tr, "").split(Xi).forEach((s) => {
    if (s) {
      const n = s.split(er);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ct(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (R(e))
    for (let s = 0; s < e.length; s++) {
      const n = Ct(e[s]);
      n && (t += n + " ");
    }
  else if (V(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const nr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ir = /* @__PURE__ */ $s(nr);
function Jn(e) {
  return !!e || e === "";
}
function rr(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Us(e[n], t[n]);
  return s;
}
function Us(e, t) {
  if (e === t) return !0;
  let s = cn(e), n = cn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ee(e), n = Ee(t), s || n)
    return e === t;
  if (s = R(e), n = R(t), s || n)
    return s && n ? rr(e, t) : !1;
  if (s = V(e), n = V(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Us(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Yn = (e) => !!(e && e.__v_isRef === !0), Ge = (e) => J(e) ? e : e == null ? "" : R(e) || V(e) && (e.toString === Wn || !F(e.toString)) ? Yn(e) ? Ge(e.value) : JSON.stringify(e, zn, 2) : String(e), zn = (e, t) => Yn(t) ? zn(e, t.value) : it(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[ds(n, r) + " =>"] = i, s),
    {}
  )
} : Un(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => ds(s))
} : Ee(t) ? ds(t) : V(t) && !R(t) && !kn(t) ? String(t) : t, ds = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ee(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let oe;
class or {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = oe, !t && oe && (this.index = (oe.scopes || (oe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = oe;
      try {
        return oe = this, t();
      } finally {
        oe = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = oe, oe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (oe = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function lr() {
  return oe;
}
let k;
const hs = /* @__PURE__ */ new WeakSet();
class Qn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, oe && oe.active && oe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, hs.has(this) && (hs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Xn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, un(this), ei(this);
    const t = k, s = de;
    k = this, de = !0;
    try {
      return this.fn();
    } finally {
      ti(this), k = t, de = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ks(t);
      this.deps = this.depsTail = void 0, un(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? hs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ts(this) && this.run();
  }
  get dirty() {
    return Ts(this);
  }
}
let Zn = 0, bt, yt;
function Xn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = yt, yt = e;
    return;
  }
  e.next = bt, bt = e;
}
function Bs() {
  Zn++;
}
function Ws() {
  if (--Zn > 0)
    return;
  if (yt) {
    let t = yt;
    for (yt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; bt; ) {
    let t = bt;
    for (bt = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function ei(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ti(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), ks(n), cr(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function Ts(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (si(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function si(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Tt) || (e.globalVersion = Tt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ts(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = k, n = de;
  k = e, de = !0;
  try {
    ei(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ce(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    k = s, de = n, ti(e), e.flags &= -3;
  }
}
function ks(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      ks(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function cr(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let de = !0;
const ni = [];
function De() {
  ni.push(de), de = !1;
}
function je() {
  const e = ni.pop();
  de = e === void 0 ? !0 : e;
}
function un(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = k;
    k = void 0;
    try {
      t();
    } finally {
      k = s;
    }
  }
}
let Tt = 0;
class fr {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!k || !de || k === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== k)
      s = this.activeLink = new fr(k, this), k.deps ? (s.prevDep = k.depsTail, k.depsTail.nextDep = s, k.depsTail = s) : k.deps = k.depsTail = s, ii(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = k.depsTail, s.nextDep = void 0, k.depsTail.nextDep = s, k.depsTail = s, k.deps === s && (k.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Tt++, this.notify(t);
  }
  notify(t) {
    Bs();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Ws();
    }
  }
}
function ii(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        ii(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Es = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ Symbol(
  ""
), As = /* @__PURE__ */ Symbol(
  ""
), Et = /* @__PURE__ */ Symbol(
  ""
);
function Q(e, t, s) {
  if (de && k) {
    let n = Es.get(e);
    n || Es.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new qs()), i.map = n, i.key = s), i.track();
  }
}
function Ie(e, t, s, n, i, r) {
  const o = Es.get(e);
  if (!o) {
    Tt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Bs(), t === "clear")
    o.forEach(l);
  else {
    const c = R(e), d = c && Ls(s);
    if (c && s === "length") {
      const a = Number(n);
      o.forEach((p, S) => {
        (S === "length" || S === Et || !Ee(S) && S >= a) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(Et)), t) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(ze)), it(e) && l(o.get(As)));
          break;
        case "delete":
          c || (l(o.get(ze)), it(e) && l(o.get(As)));
          break;
        case "set":
          it(e) && l(o.get(ze));
          break;
      }
  }
  Ws();
}
function Xe(e) {
  const t = /* @__PURE__ */ N(e);
  return t === e ? t : (Q(t, "iterate", Et), /* @__PURE__ */ ue(e) ? t : t.map(he));
}
function ss(e) {
  return Q(e = /* @__PURE__ */ N(e), "iterate", Et), e;
}
function xe(e, t) {
  return /* @__PURE__ */ $e(e) ? lt(/* @__PURE__ */ Qe(e) ? he(t) : t) : he(t);
}
const ur = {
  __proto__: null,
  [Symbol.iterator]() {
    return ps(this, Symbol.iterator, (e) => xe(this, e));
  },
  concat(...e) {
    return Xe(this).concat(
      ...e.map((t) => R(t) ? Xe(t) : t)
    );
  },
  entries() {
    return ps(this, "entries", (e) => (e[1] = xe(this, e[1]), e));
  },
  every(e, t) {
    return Oe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Oe(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => xe(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Oe(
      this,
      "find",
      e,
      t,
      (s) => xe(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Oe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Oe(
      this,
      "findLast",
      e,
      t,
      (s) => xe(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Oe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Oe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return gs(this, "includes", e);
  },
  indexOf(...e) {
    return gs(this, "indexOf", e);
  },
  join(e) {
    return Xe(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return gs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Oe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ht(this, "pop");
  },
  push(...e) {
    return ht(this, "push", e);
  },
  reduce(e, ...t) {
    return an(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return an(this, "reduceRight", e, t);
  },
  shift() {
    return ht(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Oe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ht(this, "splice", e);
  },
  toReversed() {
    return Xe(this).toReversed();
  },
  toSorted(e) {
    return Xe(this).toSorted(e);
  },
  toSpliced(...e) {
    return Xe(this).toSpliced(...e);
  },
  unshift(...e) {
    return ht(this, "unshift", e);
  },
  values() {
    return ps(this, "values", (e) => xe(this, e));
  }
};
function ps(e, t, s) {
  const n = ss(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ ue(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const ar = Array.prototype;
function Oe(e, t, s, n, i, r) {
  const o = ss(e), l = o !== e && !/* @__PURE__ */ ue(e), c = o[t];
  if (c !== ar[t]) {
    const p = c.apply(e, r);
    return l ? he(p) : p;
  }
  let d = s;
  o !== e && (l ? d = function(p, S) {
    return s.call(this, xe(e, p), S, e);
  } : s.length > 2 && (d = function(p, S) {
    return s.call(this, p, S, e);
  }));
  const a = c.call(o, d, n);
  return l && i ? i(a) : a;
}
function an(e, t, s, n) {
  const i = ss(e), r = i !== e && !/* @__PURE__ */ ue(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(d, a, p) {
    return l && (l = !1, d = xe(e, d)), s.call(this, d, xe(e, a), p, e);
  }) : s.length > 3 && (o = function(d, a, p) {
    return s.call(this, d, a, p, e);
  }));
  const c = i[t](o, ...n);
  return l ? xe(e, c) : c;
}
function gs(e, t, s) {
  const n = /* @__PURE__ */ N(e);
  Q(n, "iterate", Et);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ys(s[0]) ? (s[0] = /* @__PURE__ */ N(s[0]), n[t](...s)) : i;
}
function ht(e, t, s = []) {
  De(), Bs();
  const n = (/* @__PURE__ */ N(e))[t].apply(e, s);
  return Ws(), je(), n;
}
const dr = /* @__PURE__ */ $s("__proto__,__v_isRef,__isVue"), ri = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ee)
);
function hr(e) {
  Ee(e) || (e = String(e));
  const t = /* @__PURE__ */ N(this);
  return Q(t, "has", e), t.hasOwnProperty(e);
}
class oi {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (s === "__v_isReactive")
      return !i;
    if (s === "__v_isReadonly")
      return i;
    if (s === "__v_isShallow")
      return r;
    if (s === "__v_raw")
      return n === (i ? r ? Sr : ui : r ? fi : ci).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = R(t);
    if (!i) {
      let c;
      if (o && (c = ur[s]))
        return c;
      if (s === "hasOwnProperty")
        return hr;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Z(t) ? t : n
    );
    if ((Ee(s) ? ri.has(s) : dr(s)) || (i || Q(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ Z(l)) {
      const c = o && Ls(s) ? l : l.value;
      return i && V(c) ? /* @__PURE__ */ Ps(c) : c;
    }
    return V(l) ? i ? /* @__PURE__ */ Ps(l) : /* @__PURE__ */ ns(l) : l;
  }
}
class li extends oi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = R(t) && Ls(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ $e(r);
      if (!/* @__PURE__ */ ue(n) && !/* @__PURE__ */ $e(n) && (r = /* @__PURE__ */ N(r), n = /* @__PURE__ */ N(n)), !o && /* @__PURE__ */ Z(r) && !/* @__PURE__ */ Z(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : L(t, s), c = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ Z(t) ? t : i
    );
    return t === /* @__PURE__ */ N(i) && (l ? Ce(n, r) && Ie(t, "set", s, n) : Ie(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = L(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Ie(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ee(s) || !ri.has(s)) && Q(t, "has", s), n;
  }
  ownKeys(t) {
    return Q(
      t,
      "iterate",
      R(t) ? "length" : ze
    ), Reflect.ownKeys(t);
  }
}
class pr extends oi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const gr = /* @__PURE__ */ new li(), mr = /* @__PURE__ */ new pr(), _r = /* @__PURE__ */ new li(!0);
const Os = (e) => e, Nt = (e) => Reflect.getPrototypeOf(e);
function br(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ N(i), o = it(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, d = i[e](...n), a = s ? Os : t ? lt : he;
    return !t && Q(
      r,
      "iterate",
      c ? As : ze
    ), z(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: p, done: S } = d.next();
          return S ? { value: p, done: S } : {
            value: l ? [a(p[0]), a(p[1])] : a(p),
            done: S
          };
        }
      }
    );
  };
}
function Lt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function yr(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ N(r), l = /* @__PURE__ */ N(i);
      e || (Ce(i, l) && Q(o, "get", i), Q(o, "get", l));
      const { has: c } = Nt(o), d = t ? Os : e ? lt : he;
      if (c.call(o, i))
        return d(r.get(i));
      if (c.call(o, l))
        return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Q(/* @__PURE__ */ N(i), "iterate", ze), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ N(r), l = /* @__PURE__ */ N(i);
      return e || (Ce(i, l) && Q(o, "has", i), Q(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ N(l), d = t ? Os : e ? lt : he;
      return !e && Q(c, "iterate", ze), l.forEach((a, p) => i.call(r, d(a), d(p), o));
    }
  };
  return z(
    s,
    e ? {
      add: Lt("add"),
      set: Lt("set"),
      delete: Lt("delete"),
      clear: Lt("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ N(this), o = Nt(r), l = /* @__PURE__ */ N(i), c = !t && !/* @__PURE__ */ ue(i) && !/* @__PURE__ */ $e(i) ? l : i;
        return o.has.call(r, c) || Ce(i, c) && o.has.call(r, i) || Ce(l, c) && o.has.call(r, l) || (r.add(c), Ie(r, "add", c, c)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ ue(r) && !/* @__PURE__ */ $e(r) && (r = /* @__PURE__ */ N(r));
        const o = /* @__PURE__ */ N(this), { has: l, get: c } = Nt(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ N(i), d = l.call(o, i));
        const a = c.call(o, i);
        return o.set(i, r), d ? Ce(r, a) && Ie(o, "set", i, r) : Ie(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ N(this), { has: o, get: l } = Nt(r);
        let c = o.call(r, i);
        c || (i = /* @__PURE__ */ N(i), c = o.call(r, i)), l && l.call(r, i);
        const d = r.delete(i);
        return c && Ie(r, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ N(this), r = i.size !== 0, o = i.clear();
        return r && Ie(
          i,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    s[i] = br(i, e, t);
  }), s;
}
function Gs(e, t) {
  const s = yr(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    L(s, i) && i in n ? s : n,
    i,
    r
  );
}
const vr = {
  get: /* @__PURE__ */ Gs(!1, !1)
}, xr = {
  get: /* @__PURE__ */ Gs(!1, !0)
}, wr = {
  get: /* @__PURE__ */ Gs(!0, !1)
};
const ci = /* @__PURE__ */ new WeakMap(), fi = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap();
function Cr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Tr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Cr(zi(e));
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  return /* @__PURE__ */ $e(e) ? e : Js(
    e,
    !1,
    gr,
    vr,
    ci
  );
}
// @__NO_SIDE_EFFECTS__
function Er(e) {
  return Js(
    e,
    !1,
    _r,
    xr,
    fi
  );
}
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  return Js(
    e,
    !0,
    mr,
    wr,
    ui
  );
}
function Js(e, t, s, n, i) {
  if (!V(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Tr(e);
  if (r === 0)
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    r === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return /* @__PURE__ */ $e(e) ? /* @__PURE__ */ Qe(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ue(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ys(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ N(t) : e;
}
function Ar(e) {
  return !L(e, "__v_skip") && Object.isExtensible(e) && Gn(e, "__v_skip", !0), e;
}
const he = (e) => V(e) ? /* @__PURE__ */ ns(e) : e, lt = (e) => V(e) ? /* @__PURE__ */ Ps(e) : e;
// @__NO_SIDE_EFFECTS__
function Z(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return Or(e, !1);
}
function Or(e, t) {
  return /* @__PURE__ */ Z(e) ? e : new Pr(e, t);
}
class Pr {
  constructor(t, s) {
    this.dep = new qs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ N(t), this._value = s ? t : he(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ ue(t) || /* @__PURE__ */ $e(t);
    t = n ? t : /* @__PURE__ */ N(t), Ce(t, s) && (this._rawValue = t, this._value = n ? t : he(t), this.dep.trigger());
  }
}
function Mr(e) {
  return /* @__PURE__ */ Z(e) ? e.value : e;
}
const Ir = {
  get: (e, t, s) => t === "__v_raw" ? e : Mr(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ Z(i) && !/* @__PURE__ */ Z(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function ai(e) {
  return /* @__PURE__ */ Qe(e) ? e : new Proxy(e, Ir);
}
class Rr {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new qs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Tt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    k !== this)
      return Xn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return si(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Fr(e, t, s = !1) {
  let n, i;
  return F(e) ? n = e : (n = e.get, i = e.set), new Rr(n, i, s);
}
const Kt = {}, Gt = /* @__PURE__ */ new WeakMap();
let Je;
function Dr(e, t = !1, s = Je) {
  if (s) {
    let n = Gt.get(s);
    n || Gt.set(s, n = []), n.push(e);
  }
}
function jr(e, t, s = U) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = s, d = (O) => i ? O : /* @__PURE__ */ ue(O) || i === !1 || i === 0 ? Re(O, 1) : Re(O);
  let a, p, S, T, H = !1, M = !1;
  if (/* @__PURE__ */ Z(e) ? (p = () => e.value, H = /* @__PURE__ */ ue(e)) : /* @__PURE__ */ Qe(e) ? (p = () => d(e), H = !0) : R(e) ? (M = !0, H = e.some((O) => /* @__PURE__ */ Qe(O) || /* @__PURE__ */ ue(O)), p = () => e.map((O) => {
    if (/* @__PURE__ */ Z(O))
      return O.value;
    if (/* @__PURE__ */ Qe(O))
      return d(O);
    if (F(O))
      return c ? c(O, 2) : O();
  })) : F(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (S) {
      De();
      try {
        S();
      } finally {
        je();
      }
    }
    const O = Je;
    Je = a;
    try {
      return c ? c(e, 3, [T]) : e(T);
    } finally {
      Je = O;
    }
  } : p = Te, t && i) {
    const O = p, Y = i === !0 ? 1 / 0 : i;
    p = () => Re(O(), Y);
  }
  const $ = lr(), C = () => {
    a.stop(), $ && $.active && Ns($.effects, a);
  };
  if (r && t) {
    const O = t;
    t = (...Y) => {
      O(...Y), C();
    };
  }
  let E = M ? new Array(e.length).fill(Kt) : Kt;
  const D = (O) => {
    if (!(!(a.flags & 1) || !a.dirty && !O))
      if (t) {
        const Y = a.run();
        if (i || H || (M ? Y.some((Ne, pe) => Ce(Ne, E[pe])) : Ce(Y, E))) {
          S && S();
          const Ne = Je;
          Je = a;
          try {
            const pe = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              E === Kt ? void 0 : M && E[0] === Kt ? [] : E,
              T
            ];
            E = Y, c ? c(t, 3, pe) : (
              // @ts-expect-error
              t(...pe)
            );
          } finally {
            Je = Ne;
          }
        }
      } else
        a.run();
  };
  return l && l(D), a = new Qn(p), a.scheduler = o ? () => o(D, !1) : D, T = (O) => Dr(O, !1, a), S = a.onStop = () => {
    const O = Gt.get(a);
    if (O) {
      if (c)
        c(O, 4);
      else
        for (const Y of O) Y();
      Gt.delete(a);
    }
  }, t ? n ? D(!0) : E = a.run() : o ? o(D.bind(null, !0), !0) : a.run(), C.pause = a.pause.bind(a), C.resume = a.resume.bind(a), C.stop = C, C;
}
function Re(e, t = 1 / 0, s) {
  if (t <= 0 || !V(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ Z(e))
    Re(e.value, t, s);
  else if (R(e))
    for (let n = 0; n < e.length; n++)
      Re(e[n], t, s);
  else if (Un(e) || it(e))
    e.forEach((n) => {
      Re(n, t, s);
    });
  else if (kn(e)) {
    for (const n in e)
      Re(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Re(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function It(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    is(i, t, s);
  }
}
function Ae(e, t, s, n) {
  if (F(e)) {
    const i = It(e, t, s, n);
    return i && Bn(i) && i.catch((r) => {
      is(r, t, s);
    }), i;
  }
  if (R(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ae(e[r], t, s, n));
    return i;
  }
}
function is(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || U;
  if (t) {
    let l = t.parent;
    const c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, c, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      De(), It(r, null, 10, [
        e,
        c,
        d
      ]), je();
      return;
    }
  }
  $r(e, s, i, n, o);
}
function $r(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const te = [];
let ve = -1;
const rt = [];
let Ke = null, tt = 0;
const di = /* @__PURE__ */ Promise.resolve();
let Jt = null;
function Hr(e) {
  const t = Jt || di;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Nr(e) {
  let t = ve + 1, s = te.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = te[n], r = At(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function zs(e) {
  if (!(e.flags & 1)) {
    const t = At(e), s = te[te.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= At(s) ? te.push(e) : te.splice(Nr(t), 0, e), e.flags |= 1, hi();
  }
}
function hi() {
  Jt || (Jt = di.then(gi));
}
function Lr(e) {
  R(e) ? rt.push(...e) : Ke && e.id === -1 ? Ke.splice(tt + 1, 0, e) : e.flags & 1 || (rt.push(e), e.flags |= 1), hi();
}
function dn(e, t, s = ve + 1) {
  for (; s < te.length; s++) {
    const n = te[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      te.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function pi(e) {
  if (rt.length) {
    const t = [...new Set(rt)].sort(
      (s, n) => At(s) - At(n)
    );
    if (rt.length = 0, Ke) {
      Ke.push(...t);
      return;
    }
    for (Ke = t, tt = 0; tt < Ke.length; tt++) {
      const s = Ke[tt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ke = null, tt = 0;
  }
}
const At = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function gi(e) {
  try {
    for (ve = 0; ve < te.length; ve++) {
      const t = te[ve];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), It(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ve < te.length; ve++) {
      const t = te[ve];
      t && (t.flags &= -2);
    }
    ve = -1, te.length = 0, pi(), Jt = null, (te.length || rt.length) && gi();
  }
}
let fe = null, mi = null;
function Yt(e) {
  const t = fe;
  return fe = e, mi = e && e.type.__scopeId || null, t;
}
function Kr(e, t = fe, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Sn(-1);
    const r = Yt(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Yt(r), n._d && Sn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Vt(e, t) {
  if (fe === null)
    return e;
  const s = cs(fe), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, c = U] = t[i];
    r && (F(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Re(o), n.push({
      dir: r,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function ke(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let c = l.dir[n];
    c && (De(), Ae(c, s, 8, [
      e.el,
      l,
      e,
      t
    ]), je());
  }
}
function Vr(e, t) {
  if (se) {
    let s = se.provides;
    const n = se.parent && se.parent.provides;
    n === s && (s = se.provides = Object.create(n)), s[e] = t;
  }
}
function Wt(e, t, s = !1) {
  const n = ko();
  if (n || ot) {
    let i = ot ? ot._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && F(t) ? t.call(n && n.proxy) : t;
  }
}
const Ur = /* @__PURE__ */ Symbol.for("v-scx"), Br = () => Wt(Ur);
function ms(e, t, s) {
  return _i(e, t, s);
}
function _i(e, t, s = U) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = z({}, s), c = t && n || !t && r !== "post";
  let d;
  if (Pt) {
    if (r === "sync") {
      const T = Br();
      d = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!c) {
      const T = () => {
      };
      return T.stop = Te, T.resume = Te, T.pause = Te, T;
    }
  }
  const a = se;
  l.call = (T, H, M) => Ae(T, a, H, M);
  let p = !1;
  r === "post" ? l.scheduler = (T) => {
    re(T, a && a.suspense);
  } : r !== "sync" && (p = !0, l.scheduler = (T, H) => {
    H ? T() : zs(T);
  }), l.augmentJob = (T) => {
    t && (T.flags |= 4), p && (T.flags |= 2, a && (T.id = a.uid, T.i = a));
  };
  const S = jr(e, t, l);
  return Pt && (d ? d.push(S) : c && S()), S;
}
function Wr(e, t, s) {
  const n = this.proxy, i = J(e) ? e.includes(".") ? bi(n, e) : () => n[e] : e.bind(n, n);
  let r;
  F(t) ? r = t : (r = t.handler, s = t);
  const o = Rt(this), l = _i(i, r.bind(n), s);
  return o(), l;
}
function bi(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const kr = /* @__PURE__ */ Symbol("_vte"), qr = (e) => e.__isTeleport, Gr = /* @__PURE__ */ Symbol("_leaveCb");
function Qs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Qs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Jr(e, t) {
  return F(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    z({ name: e.name }, t, { setup: e })
  ) : e;
}
function yi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function hn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const zt = /* @__PURE__ */ new WeakMap();
function vt(e, t, s, n, i = !1) {
  if (R(e)) {
    e.forEach(
      (M, $) => vt(
        M,
        t && (R(t) ? t[$] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (xt(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && vt(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? cs(n.component) : n.el, o = i ? null : r, { i: l, r: c } = e, d = t && t.r, a = l.refs === U ? l.refs = {} : l.refs, p = l.setupState, S = /* @__PURE__ */ N(p), T = p === U ? Vn : (M) => hn(a, M) ? !1 : L(S, M), H = (M, $) => !($ && hn(a, $));
  if (d != null && d !== c) {
    if (pn(t), J(d))
      a[d] = null, T(d) && (p[d] = null);
    else if (/* @__PURE__ */ Z(d)) {
      const M = t;
      H(d, M.k) && (d.value = null), M.k && (a[M.k] = null);
    }
  }
  if (F(c))
    It(c, l, 12, [o, a]);
  else {
    const M = J(c), $ = /* @__PURE__ */ Z(c);
    if (M || $) {
      const C = () => {
        if (e.f) {
          const E = M ? T(c) ? p[c] : a[c] : H() || !e.k ? c.value : a[e.k];
          if (i)
            R(E) && Ns(E, r);
          else if (R(E))
            E.includes(r) || E.push(r);
          else if (M)
            a[c] = [r], T(c) && (p[c] = a[c]);
          else {
            const D = [r];
            H(c, e.k) && (c.value = D), e.k && (a[e.k] = D);
          }
        } else M ? (a[c] = o, T(c) && (p[c] = o)) : $ && (H(c, e.k) && (c.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const E = () => {
          C(), zt.delete(e);
        };
        E.id = -1, zt.set(e, E), re(E, s);
      } else
        pn(e), C();
    }
  }
}
function pn(e) {
  const t = zt.get(e);
  t && (t.flags |= 8, zt.delete(e));
}
ts().requestIdleCallback;
ts().cancelIdleCallback;
const xt = (e) => !!e.type.__asyncLoader, vi = (e) => e.type.__isKeepAlive;
function Yr(e, t) {
  xi(e, "a", t);
}
function zr(e, t) {
  xi(e, "da", t);
}
function xi(e, t, s = se) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (rs(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      vi(i.parent.vnode) && Qr(n, t, s, i), i = i.parent;
  }
}
function Qr(e, t, s, n) {
  const i = rs(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  wi(() => {
    Ns(n[t], i);
  }, s);
}
function rs(e, t, s = se, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      De();
      const l = Rt(s), c = Ae(t, s, e, o);
      return l(), je(), c;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const He = (e) => (t, s = se) => {
  (!Pt || e === "sp") && rs(e, (...n) => t(...n), s);
}, Zr = He("bm"), Xr = He("m"), eo = He(
  "bu"
), to = He("u"), so = He(
  "bum"
), wi = He("um"), no = He(
  "sp"
), io = He("rtg"), ro = He("rtc");
function oo(e, t = se) {
  rs("ec", e, t);
}
const lo = /* @__PURE__ */ Symbol.for("v-ndc");
function co(e, t, s, n) {
  let i;
  const r = s, o = R(e);
  if (o || J(e)) {
    const l = o && /* @__PURE__ */ Qe(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ ue(e), d = /* @__PURE__ */ $e(e), e = ss(e)), i = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      i[a] = t(
        c ? d ? lt(he(e[a])) : he(e[a]) : e[a],
        a,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (V(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, c) => t(l, c, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, d = l.length; c < d; c++) {
        const a = l[c];
        i[c] = t(e[a], a, c, r);
      }
    }
  else
    i = [];
  return i;
}
const Ms = (e) => e ? Bi(e) ? cs(e) : Ms(e.parent) : null, wt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ms(e.parent),
    $root: (e) => Ms(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ci(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      zs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Hr.bind(e.proxy)),
    $watch: (e) => Wr.bind(e)
  })
), _s = (e, t) => e !== U && !e.__isScriptSetup && L(e, t), fo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: r, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const S = o[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return s[t];
          case 3:
            return r[t];
        }
      else {
        if (_s(n, t))
          return o[t] = 1, n[t];
        if (i !== U && L(i, t))
          return o[t] = 2, i[t];
        if (L(r, t))
          return o[t] = 3, r[t];
        if (s !== U && L(s, t))
          return o[t] = 4, s[t];
        Is && (o[t] = 0);
      }
    }
    const d = wt[t];
    let a, p;
    if (d)
      return t === "$attrs" && Q(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (s !== U && L(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      p = c.config.globalProperties, L(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return _s(i, t) ? (i[t] = s, !0) : n !== U && L(n, t) ? (n[t] = s, !0) : L(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(s[l] || e !== U && l[0] !== "$" && L(e, l) || _s(t, l) || L(r, l) || L(n, l) || L(wt, l) || L(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : L(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function gn(e) {
  return R(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Is = !0;
function uo(e) {
  const t = Ci(e), s = e.proxy, n = e.ctx;
  Is = !1, t.beforeCreate && mn(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: c,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: S,
    beforeUpdate: T,
    updated: H,
    activated: M,
    deactivated: $,
    beforeDestroy: C,
    beforeUnmount: E,
    destroyed: D,
    unmounted: O,
    render: Y,
    renderTracked: Ne,
    renderTriggered: pe,
    errorCaptured: Le,
    serverPrefetch: Ft,
    // public API
    expose: Ue,
    inheritAttrs: ft,
    // assets
    components: Dt,
    directives: jt,
    filters: fs
  } = t;
  if (d && ao(d, n, null), o)
    for (const G in o) {
      const B = o[G];
      F(B) && (n[G] = B.bind(s));
    }
  if (i) {
    const G = i.call(s, s);
    V(G) && (e.data = /* @__PURE__ */ ns(G));
  }
  if (Is = !0, r)
    for (const G in r) {
      const B = r[G], Be = F(B) ? B.bind(s, s) : F(B.get) ? B.get.bind(s, s) : Te, $t = !F(B) && F(B.set) ? B.set.bind(s) : Te, We = ki({
        get: Be,
        set: $t
      });
      Object.defineProperty(n, G, {
        enumerable: !0,
        configurable: !0,
        get: () => We.value,
        set: (ge) => We.value = ge
      });
    }
  if (l)
    for (const G in l)
      Si(l[G], n, s, G);
  if (c) {
    const G = F(c) ? c.call(s) : c;
    Reflect.ownKeys(G).forEach((B) => {
      Vr(B, G[B]);
    });
  }
  a && mn(a, e, "c");
  function X(G, B) {
    R(B) ? B.forEach((Be) => G(Be.bind(s))) : B && G(B.bind(s));
  }
  if (X(Zr, p), X(Xr, S), X(eo, T), X(to, H), X(Yr, M), X(zr, $), X(oo, Le), X(ro, Ne), X(io, pe), X(so, E), X(wi, O), X(no, Ft), R(Ue))
    if (Ue.length) {
      const G = e.exposed || (e.exposed = {});
      Ue.forEach((B) => {
        Object.defineProperty(G, B, {
          get: () => s[B],
          set: (Be) => s[B] = Be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Y && e.render === Te && (e.render = Y), ft != null && (e.inheritAttrs = ft), Dt && (e.components = Dt), jt && (e.directives = jt), Ft && yi(e);
}
function ao(e, t, s = Te) {
  R(e) && (e = Rs(e));
  for (const n in e) {
    const i = e[n];
    let r;
    V(i) ? "default" in i ? r = Wt(
      i.from || n,
      i.default,
      !0
    ) : r = Wt(i.from || n) : r = Wt(i), /* @__PURE__ */ Z(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function mn(e, t, s) {
  Ae(
    R(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Si(e, t, s, n) {
  let i = n.includes(".") ? bi(s, n) : () => s[n];
  if (J(e)) {
    const r = t[e];
    F(r) && ms(i, r);
  } else if (F(e))
    ms(i, e.bind(s));
  else if (V(e))
    if (R(e))
      e.forEach((r) => Si(r, t, s, n));
    else {
      const r = F(e.handler) ? e.handler.bind(s) : t[e.handler];
      F(r) && ms(i, r, e);
    }
}
function Ci(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !i.length && !s && !n ? c = t : (c = {}, i.length && i.forEach(
    (d) => Qt(c, d, o, !0)
  ), Qt(c, t, o)), V(t) && r.set(t, c), c;
}
function Qt(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && Qt(e, r, s, !0), i && i.forEach(
    (o) => Qt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = ho[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const ho = {
  data: _n,
  props: bn,
  emits: bn,
  // objects
  methods: mt,
  computed: mt,
  // lifecycle
  beforeCreate: ee,
  created: ee,
  beforeMount: ee,
  mounted: ee,
  beforeUpdate: ee,
  updated: ee,
  beforeDestroy: ee,
  beforeUnmount: ee,
  destroyed: ee,
  unmounted: ee,
  activated: ee,
  deactivated: ee,
  errorCaptured: ee,
  serverPrefetch: ee,
  // assets
  components: mt,
  directives: mt,
  // watch
  watch: go,
  // provide / inject
  provide: _n,
  inject: po
};
function _n(e, t) {
  return t ? e ? function() {
    return z(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function po(e, t) {
  return mt(Rs(e), Rs(t));
}
function Rs(e) {
  if (R(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function ee(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function mt(e, t) {
  return e ? z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bn(e, t) {
  return e ? R(e) && R(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : z(
    /* @__PURE__ */ Object.create(null),
    gn(e),
    gn(t ?? {})
  ) : t;
}
function go(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = z(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ee(e[n], t[n]);
  return s;
}
function Ti() {
  return {
    app: null,
    config: {
      isNativeTag: Vn,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let mo = 0;
function _o(e, t) {
  return function(n, i = null) {
    F(n) || (n = z({}, n)), i != null && !V(i) && (i = null);
    const r = Ti(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = r.app = {
      _uid: mo++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Qo,
      get config() {
        return r.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && F(a.install) ? (o.add(a), a.install(d, ...p)) : F(a) && (o.add(a), a(d, ...p))), d;
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), d;
      },
      component(a, p) {
        return p ? (r.components[a] = p, d) : r.components[a];
      },
      directive(a, p) {
        return p ? (r.directives[a] = p, d) : r.directives[a];
      },
      mount(a, p, S) {
        if (!c) {
          const T = d._ceVNode || Fe(n, i);
          return T.appContext = r, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(T, a, S), c = !0, d._container = a, a.__vue_app__ = d, cs(T.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        c && (Ae(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, p) {
        return r.provides[a] = p, d;
      },
      runWithContext(a) {
        const p = ot;
        ot = d;
        try {
          return a();
        } finally {
          ot = p;
        }
      }
    };
    return d;
  };
}
let ot = null;
const bo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ae(t)}Modifiers`] || e[`${Ze(t)}Modifiers`];
function yo(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || U;
  let i = s;
  const r = t.startsWith("update:"), o = r && bo(n, t.slice(7));
  o && (o.trim && (i = s.map((a) => J(a) ? a.trim() : a)), o.number && (i = s.map(Ks)));
  let l, c = n[l = as(t)] || // also try camelCase event handler (#2249)
  n[l = as(ae(t))];
  !c && r && (c = n[l = as(Ze(t))]), c && Ae(
    c,
    e,
    6,
    i
  );
  const d = n[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ae(
      d,
      e,
      6,
      i
    );
  }
}
const vo = /* @__PURE__ */ new WeakMap();
function Ei(e, t, s = !1) {
  const n = s ? vo : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!F(e)) {
    const c = (d) => {
      const a = Ei(d, t, !0);
      a && (l = !0, z(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (V(e) && n.set(e, null), null) : (R(r) ? r.forEach((c) => o[c] = null) : z(o, r), V(e) && n.set(e, o), o);
}
function os(e, t) {
  return !e || !Xt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), L(e, t[0].toLowerCase() + t.slice(1)) || L(e, Ze(t)) || L(e, t));
}
function yn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: c,
    render: d,
    renderCache: a,
    props: p,
    data: S,
    setupState: T,
    ctx: H,
    inheritAttrs: M
  } = e, $ = Yt(e);
  let C, E;
  try {
    if (s.shapeFlag & 4) {
      const O = i || n, Y = O;
      C = Se(
        d.call(
          Y,
          O,
          a,
          p,
          T,
          S,
          H
        )
      ), E = l;
    } else {
      const O = t;
      C = Se(
        O.length > 1 ? O(
          p,
          { attrs: l, slots: o, emit: c }
        ) : O(
          p,
          null
        )
      ), E = t.props ? l : xo(l);
    }
  } catch (O) {
    St.length = 0, is(O, e, 1), C = Fe(Ve);
  }
  let D = C;
  if (E && M !== !1) {
    const O = Object.keys(E), { shapeFlag: Y } = D;
    O.length && Y & 7 && (r && O.some(Hs) && (E = wo(
      E,
      r
    )), D = ct(D, E, !1, !0));
  }
  return s.dirs && (D = ct(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(s.dirs) : s.dirs), s.transition && Qs(D, s.transition), C = D, Yt($), C;
}
const xo = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Xt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, wo = (e, t) => {
  const s = {};
  for (const n in e)
    (!Hs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function So(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: l, patchFlag: c } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? vn(n, o, d) : !!o;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const S = a[p];
        if (Ai(o, n, S) && !os(d, S))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? vn(n, o, d) : !0 : !!o;
  return !1;
}
function vn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (Ai(t, e, r) && !os(s, r))
      return !0;
  }
  return !1;
}
function Ai(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && V(n) && V(i) ? !Us(n, i) : n !== i;
}
function Co({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Oi = {}, Pi = () => Object.create(Oi), Mi = (e) => Object.getPrototypeOf(e) === Oi;
function To(e, t, s, n = !1) {
  const i = {}, r = Pi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ii(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ Er(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Eo(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ N(i), [c] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let S = a[p];
        if (os(e.emitsOptions, S))
          continue;
        const T = t[S];
        if (c)
          if (L(r, S))
            T !== r[S] && (r[S] = T, d = !0);
          else {
            const H = ae(S);
            i[H] = Fs(
              c,
              l,
              H,
              T,
              e,
              !1
            );
          }
        else
          T !== r[S] && (r[S] = T, d = !0);
      }
    }
  } else {
    Ii(e, t, i, r) && (d = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !L(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Ze(p)) === p || !L(t, a))) && (c ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (i[p] = Fs(
        c,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (r !== l)
      for (const p in r)
        (!t || !L(t, p)) && (delete r[p], d = !0);
  }
  d && Ie(e.attrs, "set", "");
}
function Ii(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (_t(c))
        continue;
      const d = t[c];
      let a;
      i && L(i, a = ae(c)) ? !r || !r.includes(a) ? s[a] = d : (l || (l = {}))[a] = d : os(e.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, o = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ N(s), d = l || U;
    for (let a = 0; a < r.length; a++) {
      const p = r[a];
      s[p] = Fs(
        i,
        c,
        p,
        d[p],
        e,
        !L(d, p)
      );
    }
  }
  return o;
}
function Fs(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = L(o, "default");
    if (l && n === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && F(c)) {
        const { propsDefaults: d } = i;
        if (s in d)
          n = d[s];
        else {
          const a = Rt(i);
          n = d[s] = c.call(
            null,
            t
          ), a();
        }
      } else
        n = c;
      i.ce && i.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ze(s)) && (n = !0));
  }
  return n;
}
const Ao = /* @__PURE__ */ new WeakMap();
function Ri(e, t, s = !1) {
  const n = s ? Ao : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let c = !1;
  if (!F(e)) {
    const a = (p) => {
      c = !0;
      const [S, T] = Ri(p, t, !0);
      z(o, S), T && l.push(...T);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !c)
    return V(e) && n.set(e, nt), nt;
  if (R(r))
    for (let a = 0; a < r.length; a++) {
      const p = ae(r[a]);
      xn(p) && (o[p] = U);
    }
  else if (r)
    for (const a in r) {
      const p = ae(a);
      if (xn(p)) {
        const S = r[a], T = o[p] = R(S) || F(S) ? { type: S } : z({}, S), H = T.type;
        let M = !1, $ = !0;
        if (R(H))
          for (let C = 0; C < H.length; ++C) {
            const E = H[C], D = F(E) && E.name;
            if (D === "Boolean") {
              M = !0;
              break;
            } else D === "String" && ($ = !1);
          }
        else
          M = F(H) && H.name === "Boolean";
        T[
          0
          /* shouldCast */
        ] = M, T[
          1
          /* shouldCastTrue */
        ] = $, (M || L(T, "default")) && l.push(p);
      }
    }
  const d = [o, l];
  return V(e) && n.set(e, d), d;
}
function xn(e) {
  return e[0] !== "$" && !_t(e);
}
const Zs = (e) => e === "_" || e === "_ctx" || e === "$stable", Xs = (e) => R(e) ? e.map(Se) : [Se(e)], Oo = (e, t, s) => {
  if (t._n)
    return t;
  const n = Kr((...i) => Xs(t(...i)), s);
  return n._c = !1, n;
}, Fi = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (Zs(i)) continue;
    const r = e[i];
    if (F(r))
      t[i] = Oo(i, r, n);
    else if (r != null) {
      const o = Xs(r);
      t[i] = () => o;
    }
  }
}, Di = (e, t) => {
  const s = Xs(t);
  e.slots.default = () => s;
}, ji = (e, t, s) => {
  for (const n in t)
    (s || !Zs(n)) && (e[n] = t[n]);
}, Po = (e, t, s) => {
  const n = e.slots = Pi();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ji(n, t, s), s && Gn(n, "_", i, !0)) : Fi(t, n);
  } else t && Di(e, t);
}, Mo = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = U;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : ji(i, t, s) : (r = !t.$stable, Fi(t, i)), o = t;
  } else t && (Di(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Zs(l) && o[l] == null && delete i[l];
}, re = jo;
function Io(e) {
  return Ro(e);
}
function Ro(e, t) {
  const s = ts();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: c,
    setText: d,
    setElementText: a,
    parentNode: p,
    nextSibling: S,
    setScopeId: T = Te,
    insertStaticContent: H
  } = e, M = (f, u, h, b = null, g = null, m = null, x = void 0, v = null, y = !!u.dynamicChildren) => {
    if (f === u)
      return;
    f && !gt(f, u) && (b = Ht(f), ge(f, g, m, !0), f = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: _, ref: P, shapeFlag: w } = u;
    switch (_) {
      case ls:
        $(f, u, h, b);
        break;
      case Ve:
        C(f, u, h, b);
        break;
      case ys:
        f == null && E(u, h, b, x);
        break;
      case we:
        Dt(
          f,
          u,
          h,
          b,
          g,
          m,
          x,
          v,
          y
        );
        break;
      default:
        w & 1 ? Y(
          f,
          u,
          h,
          b,
          g,
          m,
          x,
          v,
          y
        ) : w & 6 ? jt(
          f,
          u,
          h,
          b,
          g,
          m,
          x,
          v,
          y
        ) : (w & 64 || w & 128) && _.process(
          f,
          u,
          h,
          b,
          g,
          m,
          x,
          v,
          y,
          at
        );
    }
    P != null && g ? vt(P, f && f.ref, m, u || f, !u) : P == null && f && f.ref != null && vt(f.ref, null, m, f, !0);
  }, $ = (f, u, h, b) => {
    if (f == null)
      n(
        u.el = l(u.children),
        h,
        b
      );
    else {
      const g = u.el = f.el;
      u.children !== f.children && d(g, u.children);
    }
  }, C = (f, u, h, b) => {
    f == null ? n(
      u.el = c(u.children || ""),
      h,
      b
    ) : u.el = f.el;
  }, E = (f, u, h, b) => {
    [f.el, f.anchor] = H(
      f.children,
      u,
      h,
      b,
      f.el,
      f.anchor
    );
  }, D = ({ el: f, anchor: u }, h, b) => {
    let g;
    for (; f && f !== u; )
      g = S(f), n(f, h, b), f = g;
    n(u, h, b);
  }, O = ({ el: f, anchor: u }) => {
    let h;
    for (; f && f !== u; )
      h = S(f), i(f), f = h;
    i(u);
  }, Y = (f, u, h, b, g, m, x, v, y) => {
    if (u.type === "svg" ? x = "svg" : u.type === "math" && (x = "mathml"), f == null)
      Ne(
        u,
        h,
        b,
        g,
        m,
        x,
        v,
        y
      );
    else {
      const _ = f.el && f.el._isVueCE ? f.el : null;
      try {
        _ && _._beginPatch(), Ft(
          f,
          u,
          g,
          m,
          x,
          v,
          y
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, Ne = (f, u, h, b, g, m, x, v) => {
    let y, _;
    const { props: P, shapeFlag: w, transition: A, dirs: I } = f;
    if (y = f.el = o(
      f.type,
      m,
      P && P.is,
      P
    ), w & 8 ? a(y, f.children) : w & 16 && Le(
      f.children,
      y,
      null,
      b,
      g,
      bs(f, m),
      x,
      v
    ), I && ke(f, null, b, "created"), pe(y, f, f.scopeId, x, b), P) {
      for (const W in P)
        W !== "value" && !_t(W) && r(y, W, null, P[W], m, b);
      "value" in P && r(y, "value", null, P.value, m), (_ = P.onVnodeBeforeMount) && ye(_, b, f);
    }
    I && ke(f, null, b, "beforeMount");
    const j = Fo(g, A);
    j && A.beforeEnter(y), n(y, u, h), ((_ = P && P.onVnodeMounted) || j || I) && re(() => {
      _ && ye(_, b, f), j && A.enter(y), I && ke(f, null, b, "mounted");
    }, g);
  }, pe = (f, u, h, b, g) => {
    if (h && T(f, h), b)
      for (let m = 0; m < b.length; m++)
        T(f, b[m]);
    if (g) {
      let m = g.subTree;
      if (u === m || Li(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const x = g.vnode;
        pe(
          f,
          x,
          x.scopeId,
          x.slotScopeIds,
          g.parent
        );
      }
    }
  }, Le = (f, u, h, b, g, m, x, v, y = 0) => {
    for (let _ = y; _ < f.length; _++) {
      const P = f[_] = v ? Me(f[_]) : Se(f[_]);
      M(
        null,
        P,
        u,
        h,
        b,
        g,
        m,
        x,
        v
      );
    }
  }, Ft = (f, u, h, b, g, m, x) => {
    const v = u.el = f.el;
    let { patchFlag: y, dynamicChildren: _, dirs: P } = u;
    y |= f.patchFlag & 16;
    const w = f.props || U, A = u.props || U;
    let I;
    if (h && qe(h, !1), (I = A.onVnodeBeforeUpdate) && ye(I, h, u, f), P && ke(u, f, h, "beforeUpdate"), h && qe(h, !0), (w.innerHTML && A.innerHTML == null || w.textContent && A.textContent == null) && a(v, ""), _ ? Ue(
      f.dynamicChildren,
      _,
      v,
      h,
      b,
      bs(u, g),
      m
    ) : x || B(
      f,
      u,
      v,
      null,
      h,
      b,
      bs(u, g),
      m,
      !1
    ), y > 0) {
      if (y & 16)
        ft(v, w, A, h, g);
      else if (y & 2 && w.class !== A.class && r(v, "class", null, A.class, g), y & 4 && r(v, "style", w.style, A.style, g), y & 8) {
        const j = u.dynamicProps;
        for (let W = 0; W < j.length; W++) {
          const K = j[W], ne = w[K], ie = A[K];
          (ie !== ne || K === "value") && r(v, K, ne, ie, g, h);
        }
      }
      y & 1 && f.children !== u.children && a(v, u.children);
    } else !x && _ == null && ft(v, w, A, h, g);
    ((I = A.onVnodeUpdated) || P) && re(() => {
      I && ye(I, h, u, f), P && ke(u, f, h, "updated");
    }, b);
  }, Ue = (f, u, h, b, g, m, x) => {
    for (let v = 0; v < u.length; v++) {
      const y = f[v], _ = u[v], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gt(y, _) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? p(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      M(
        y,
        _,
        P,
        null,
        b,
        g,
        m,
        x,
        !0
      );
    }
  }, ft = (f, u, h, b, g) => {
    if (u !== h) {
      if (u !== U)
        for (const m in u)
          !_t(m) && !(m in h) && r(
            f,
            m,
            u[m],
            null,
            g,
            b
          );
      for (const m in h) {
        if (_t(m)) continue;
        const x = h[m], v = u[m];
        x !== v && m !== "value" && r(f, m, v, x, g, b);
      }
      "value" in h && r(f, "value", u.value, h.value, g);
    }
  }, Dt = (f, u, h, b, g, m, x, v, y) => {
    const _ = u.el = f ? f.el : l(""), P = u.anchor = f ? f.anchor : l("");
    let { patchFlag: w, dynamicChildren: A, slotScopeIds: I } = u;
    I && (v = v ? v.concat(I) : I), f == null ? (n(_, h, b), n(P, h, b), Le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      P,
      g,
      m,
      x,
      v,
      y
    )) : w > 0 && w & 64 && A && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === A.length ? (Ue(
      f.dynamicChildren,
      A,
      h,
      g,
      m,
      x,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || g && u === g.subTree) && $i(
      f,
      u,
      !0
      /* shallow */
    )) : B(
      f,
      u,
      h,
      P,
      g,
      m,
      x,
      v,
      y
    );
  }, jt = (f, u, h, b, g, m, x, v, y) => {
    u.slotScopeIds = v, f == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      h,
      b,
      x,
      y
    ) : fs(
      u,
      h,
      b,
      g,
      m,
      x,
      y
    ) : tn(f, u, y);
  }, fs = (f, u, h, b, g, m, x) => {
    const v = f.component = Wo(
      f,
      b,
      g
    );
    if (vi(f) && (v.ctx.renderer = at), qo(v, !1, x), v.asyncDep) {
      if (g && g.registerDep(v, X, x), !f.el) {
        const y = v.subTree = Fe(Ve);
        C(null, y, u, h), f.placeholder = y.el;
      }
    } else
      X(
        v,
        f,
        u,
        h,
        g,
        m,
        x
      );
  }, tn = (f, u, h) => {
    const b = u.component = f.component;
    if (So(f, u, h))
      if (b.asyncDep && !b.asyncResolved) {
        G(b, u, h);
        return;
      } else
        b.next = u, b.update();
    else
      u.el = f.el, b.vnode = u;
  }, X = (f, u, h, b, g, m, x) => {
    const v = () => {
      if (f.isMounted) {
        let { next: w, bu: A, u: I, parent: j, vnode: W } = f;
        {
          const _e = Hi(f);
          if (_e) {
            w && (w.el = W.el, G(f, w, x)), _e.asyncDep.then(() => {
              re(() => {
                f.isUnmounted || _();
              }, g);
            });
            return;
          }
        }
        let K = w, ne;
        qe(f, !1), w ? (w.el = W.el, G(f, w, x)) : w = W, A && Bt(A), (ne = w.props && w.props.onVnodeBeforeUpdate) && ye(ne, j, w, W), qe(f, !0);
        const ie = yn(f), me = f.subTree;
        f.subTree = ie, M(
          me,
          ie,
          // parent may have changed if it's in a teleport
          p(me.el),
          // anchor may have changed if it's in a fragment
          Ht(me),
          f,
          g,
          m
        ), w.el = ie.el, K === null && Co(f, ie.el), I && re(I, g), (ne = w.props && w.props.onVnodeUpdated) && re(
          () => ye(ne, j, w, W),
          g
        );
      } else {
        let w;
        const { el: A, props: I } = u, { bm: j, m: W, parent: K, root: ne, type: ie } = f, me = xt(u);
        qe(f, !1), j && Bt(j), !me && (w = I && I.onVnodeBeforeMount) && ye(w, K, u), qe(f, !0);
        {
          ne.ce && ne.ce._hasShadowRoot() && ne.ce._injectChildStyle(
            ie,
            f.parent ? f.parent.type : void 0
          );
          const _e = f.subTree = yn(f);
          M(
            null,
            _e,
            h,
            b,
            f,
            g,
            m
          ), u.el = _e.el;
        }
        if (W && re(W, g), !me && (w = I && I.onVnodeMounted)) {
          const _e = u;
          re(
            () => ye(w, K, _e),
            g
          );
        }
        (u.shapeFlag & 256 || K && xt(K.vnode) && K.vnode.shapeFlag & 256) && f.a && re(f.a, g), f.isMounted = !0, u = h = b = null;
      }
    };
    f.scope.on();
    const y = f.effect = new Qn(v);
    f.scope.off();
    const _ = f.update = y.run.bind(y), P = f.job = y.runIfDirty.bind(y);
    P.i = f, P.id = f.uid, y.scheduler = () => zs(P), qe(f, !0), _();
  }, G = (f, u, h) => {
    u.component = f;
    const b = f.vnode.props;
    f.vnode = u, f.next = null, Eo(f, u.props, b, h), Mo(f, u.children, h), De(), dn(f), je();
  }, B = (f, u, h, b, g, m, x, v, y = !1) => {
    const _ = f && f.children, P = f ? f.shapeFlag : 0, w = u.children, { patchFlag: A, shapeFlag: I } = u;
    if (A > 0) {
      if (A & 128) {
        $t(
          _,
          w,
          h,
          b,
          g,
          m,
          x,
          v,
          y
        );
        return;
      } else if (A & 256) {
        Be(
          _,
          w,
          h,
          b,
          g,
          m,
          x,
          v,
          y
        );
        return;
      }
    }
    I & 8 ? (P & 16 && ut(_, g, m), w !== _ && a(h, w)) : P & 16 ? I & 16 ? $t(
      _,
      w,
      h,
      b,
      g,
      m,
      x,
      v,
      y
    ) : ut(_, g, m, !0) : (P & 8 && a(h, ""), I & 16 && Le(
      w,
      h,
      b,
      g,
      m,
      x,
      v,
      y
    ));
  }, Be = (f, u, h, b, g, m, x, v, y) => {
    f = f || nt, u = u || nt;
    const _ = f.length, P = u.length, w = Math.min(_, P);
    let A;
    for (A = 0; A < w; A++) {
      const I = u[A] = y ? Me(u[A]) : Se(u[A]);
      M(
        f[A],
        I,
        h,
        null,
        g,
        m,
        x,
        v,
        y
      );
    }
    _ > P ? ut(
      f,
      g,
      m,
      !0,
      !1,
      w
    ) : Le(
      u,
      h,
      b,
      g,
      m,
      x,
      v,
      y,
      w
    );
  }, $t = (f, u, h, b, g, m, x, v, y) => {
    let _ = 0;
    const P = u.length;
    let w = f.length - 1, A = P - 1;
    for (; _ <= w && _ <= A; ) {
      const I = f[_], j = u[_] = y ? Me(u[_]) : Se(u[_]);
      if (gt(I, j))
        M(
          I,
          j,
          h,
          null,
          g,
          m,
          x,
          v,
          y
        );
      else
        break;
      _++;
    }
    for (; _ <= w && _ <= A; ) {
      const I = f[w], j = u[A] = y ? Me(u[A]) : Se(u[A]);
      if (gt(I, j))
        M(
          I,
          j,
          h,
          null,
          g,
          m,
          x,
          v,
          y
        );
      else
        break;
      w--, A--;
    }
    if (_ > w) {
      if (_ <= A) {
        const I = A + 1, j = I < P ? u[I].el : b;
        for (; _ <= A; )
          M(
            null,
            u[_] = y ? Me(u[_]) : Se(u[_]),
            h,
            j,
            g,
            m,
            x,
            v,
            y
          ), _++;
      }
    } else if (_ > A)
      for (; _ <= w; )
        ge(f[_], g, m, !0), _++;
    else {
      const I = _, j = _, W = /* @__PURE__ */ new Map();
      for (_ = j; _ <= A; _++) {
        const le = u[_] = y ? Me(u[_]) : Se(u[_]);
        le.key != null && W.set(le.key, _);
      }
      let K, ne = 0;
      const ie = A - j + 1;
      let me = !1, _e = 0;
      const dt = new Array(ie);
      for (_ = 0; _ < ie; _++) dt[_] = 0;
      for (_ = I; _ <= w; _++) {
        const le = f[_];
        if (ne >= ie) {
          ge(le, g, m, !0);
          continue;
        }
        let be;
        if (le.key != null)
          be = W.get(le.key);
        else
          for (K = j; K <= A; K++)
            if (dt[K - j] === 0 && gt(le, u[K])) {
              be = K;
              break;
            }
        be === void 0 ? ge(le, g, m, !0) : (dt[be - j] = _ + 1, be >= _e ? _e = be : me = !0, M(
          le,
          u[be],
          h,
          null,
          g,
          m,
          x,
          v,
          y
        ), ne++);
      }
      const rn = me ? Do(dt) : nt;
      for (K = rn.length - 1, _ = ie - 1; _ >= 0; _--) {
        const le = j + _, be = u[le], on = u[le + 1], ln = le + 1 < P ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          on.el || Ni(on)
        ) : b;
        dt[_] === 0 ? M(
          null,
          be,
          h,
          ln,
          g,
          m,
          x,
          v,
          y
        ) : me && (K < 0 || _ !== rn[K] ? We(be, h, ln, 2) : K--);
      }
    }
  }, We = (f, u, h, b, g = null) => {
    const { el: m, type: x, transition: v, children: y, shapeFlag: _ } = f;
    if (_ & 6) {
      We(f.component.subTree, u, h, b);
      return;
    }
    if (_ & 128) {
      f.suspense.move(u, h, b);
      return;
    }
    if (_ & 64) {
      x.move(f, u, h, at);
      return;
    }
    if (x === we) {
      n(m, u, h);
      for (let w = 0; w < y.length; w++)
        We(y[w], u, h, b);
      n(f.anchor, u, h);
      return;
    }
    if (x === ys) {
      D(f, u, h);
      return;
    }
    if (b !== 2 && _ & 1 && v)
      if (b === 0)
        v.beforeEnter(m), n(m, u, h), re(() => v.enter(m), g);
      else {
        const { leave: w, delayLeave: A, afterLeave: I } = v, j = () => {
          f.ctx.isUnmounted ? i(m) : n(m, u, h);
        }, W = () => {
          m._isLeaving && m[Gr](
            !0
            /* cancelled */
          ), w(m, () => {
            j(), I && I();
          });
        };
        A ? A(m, j, W) : W();
      }
    else
      n(m, u, h);
  }, ge = (f, u, h, b = !1, g = !1) => {
    const {
      type: m,
      props: x,
      ref: v,
      children: y,
      dynamicChildren: _,
      shapeFlag: P,
      patchFlag: w,
      dirs: A,
      cacheIndex: I
    } = f;
    if (w === -2 && (g = !1), v != null && (De(), vt(v, null, h, f, !0), je()), I != null && (u.renderCache[I] = void 0), P & 256) {
      u.ctx.deactivate(f);
      return;
    }
    const j = P & 1 && A, W = !xt(f);
    let K;
    if (W && (K = x && x.onVnodeBeforeUnmount) && ye(K, u, f), P & 6)
      Ji(f.component, h, b);
    else {
      if (P & 128) {
        f.suspense.unmount(h, b);
        return;
      }
      j && ke(f, null, u, "beforeUnmount"), P & 64 ? f.type.remove(
        f,
        u,
        h,
        at,
        b
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== we || w > 0 && w & 64) ? ut(
        _,
        u,
        h,
        !1,
        !0
      ) : (m === we && w & 384 || !g && P & 16) && ut(y, u, h), b && sn(f);
    }
    (W && (K = x && x.onVnodeUnmounted) || j) && re(() => {
      K && ye(K, u, f), j && ke(f, null, u, "unmounted");
    }, h);
  }, sn = (f) => {
    const { type: u, el: h, anchor: b, transition: g } = f;
    if (u === we) {
      Gi(h, b);
      return;
    }
    if (u === ys) {
      O(f);
      return;
    }
    const m = () => {
      i(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (f.shapeFlag & 1 && g && !g.persisted) {
      const { leave: x, delayLeave: v } = g, y = () => x(h, m);
      v ? v(f.el, m, y) : y();
    } else
      m();
  }, Gi = (f, u) => {
    let h;
    for (; f !== u; )
      h = S(f), i(f), f = h;
    i(u);
  }, Ji = (f, u, h) => {
    const { bum: b, scope: g, job: m, subTree: x, um: v, m: y, a: _ } = f;
    wn(y), wn(_), b && Bt(b), g.stop(), m && (m.flags |= 8, ge(x, f, u, h)), v && re(v, u), re(() => {
      f.isUnmounted = !0;
    }, u);
  }, ut = (f, u, h, b = !1, g = !1, m = 0) => {
    for (let x = m; x < f.length; x++)
      ge(f[x], u, h, b, g);
  }, Ht = (f) => {
    if (f.shapeFlag & 6)
      return Ht(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const u = S(f.anchor || f.el), h = u && u[kr];
    return h ? S(h) : u;
  };
  let us = !1;
  const nn = (f, u, h) => {
    let b;
    f == null ? u._vnode && (ge(u._vnode, null, null, !0), b = u._vnode.component) : M(
      u._vnode || null,
      f,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = f, us || (us = !0, dn(b), pi(), us = !1);
  }, at = {
    p: M,
    um: ge,
    m: We,
    r: sn,
    mt: fs,
    mc: Le,
    pc: B,
    pbc: Ue,
    n: Ht,
    o: e
  };
  return {
    render: nn,
    hydrate: void 0,
    createApp: _o(nn)
  };
}
function bs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function qe({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Fo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $i(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (R(n) && R(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Me(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && $i(o, l)), l.type === ls && (l.patchFlag === -1 && (l = i[r] = Me(l)), l.el = o.el), l.type === Ve && !l.el && (l.el = o.el);
    }
}
function Do(e) {
  const t = e.slice(), s = [0];
  let n, i, r, o, l;
  const c = e.length;
  for (n = 0; n < c; n++) {
    const d = e[n];
    if (d !== 0) {
      if (i = s[s.length - 1], e[i] < d) {
        t[n] = i, s.push(n);
        continue;
      }
      for (r = 0, o = s.length - 1; r < o; )
        l = r + o >> 1, e[s[l]] < d ? r = l + 1 : o = l;
      d < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), s[r] = n);
    }
  }
  for (r = s.length, o = s[r - 1]; r-- > 0; )
    s[r] = o, o = t[o];
  return s;
}
function Hi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Hi(t);
}
function wn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ni(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ni(t.subTree) : null;
}
const Li = (e) => e.__isSuspense;
function jo(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : Lr(e);
}
const we = /* @__PURE__ */ Symbol.for("v-fgt"), ls = /* @__PURE__ */ Symbol.for("v-txt"), Ve = /* @__PURE__ */ Symbol.for("v-cmt"), ys = /* @__PURE__ */ Symbol.for("v-stc"), St = [];
let ce = null;
function Ye(e = !1) {
  St.push(ce = e ? null : []);
}
function $o() {
  St.pop(), ce = St[St.length - 1] || null;
}
let Ot = 1;
function Sn(e, t = !1) {
  Ot += e, e < 0 && ce && t && (ce.hasOnce = !0);
}
function Ki(e) {
  return e.dynamicChildren = Ot > 0 ? ce || nt : null, $o(), Ot > 0 && ce && ce.push(e), e;
}
function et(e, t, s, n, i, r) {
  return Ki(
    q(
      e,
      t,
      s,
      n,
      i,
      r,
      !0
    )
  );
}
function Ho(e, t, s, n, i) {
  return Ki(
    Fe(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function Vi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ui = ({ key: e }) => e ?? null, kt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || /* @__PURE__ */ Z(e) || F(e) ? { i: fe, r: e, k: t, f: !!s } : e : null);
function q(e, t = null, s = null, n = 0, i = null, r = e === we ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ui(t),
    ref: t && kt(t),
    scopeId: mi,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: fe
  };
  return l ? (en(c, s), r & 128 && e.normalize(c)) : s && (c.shapeFlag |= J(s) ? 8 : 16), Ot > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ce.push(c), c;
}
const Fe = No;
function No(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === lo) && (e = Ve), Vi(e)) {
    const l = ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && en(l, s), Ot > 0 && !r && ce && (l.shapeFlag & 6 ? ce[ce.indexOf(e)] = l : ce.push(l)), l.patchFlag = -2, l;
  }
  if (zo(e) && (e = e.__vccOpts), t) {
    t = Lo(t);
    let { class: l, style: c } = t;
    l && !J(l) && (t.class = Ct(l)), V(c) && (/* @__PURE__ */ Ys(c) && !R(c) && (c = z({}, c)), t.style = Vs(c));
  }
  const o = J(e) ? 1 : Li(e) ? 128 : qr(e) ? 64 : V(e) ? 4 : F(e) ? 2 : 0;
  return q(
    e,
    t,
    s,
    n,
    i,
    o,
    r,
    !0
  );
}
function Lo(e) {
  return e ? /* @__PURE__ */ Ys(e) || Mi(e) ? z({}, e) : e : null;
}
function ct(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: c } = e, d = t ? Vo(i || {}, t) : i, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ui(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? R(r) ? r.concat(kt(t)) : [r, kt(t)] : kt(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ct(e.ssContent),
    ssFallback: e.ssFallback && ct(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && n && Qs(
    a,
    c.clone(a)
  ), a;
}
function Ko(e = " ", t = 0) {
  return Fe(ls, null, e, t);
}
function vs(e = "", t = !1) {
  return t ? (Ye(), Ho(Ve, null, e)) : Fe(Ve, null, e);
}
function Se(e) {
  return e == null || typeof e == "boolean" ? Fe(Ve) : R(e) ? Fe(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vi(e) ? Me(e) : Fe(ls, null, String(e));
}
function Me(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ct(e);
}
function en(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (R(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), en(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !Mi(t) ? t._ctx = fe : i === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else F(t) ? (t = { default: t, _ctx: fe }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Ko(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Vo(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Ct([t.class, n.class]));
      else if (i === "style")
        t.style = Vs([t.style, n.style]);
      else if (Xt(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(R(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ye(e, t, s, n = null) {
  Ae(e, t, 7, [
    s,
    n
  ]);
}
const Uo = Ti();
let Bo = 0;
function Wo(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Uo, r = {
    uid: Bo++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new or(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ri(n, i),
    emitsOptions: Ei(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: U,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = yo.bind(null, r), e.ce && e.ce(r), r;
}
let se = null;
const ko = () => se || fe;
let Zt, Ds;
{
  const e = ts(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Zt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => se = s
  ), Ds = t(
    "__VUE_SSR_SETTERS__",
    (s) => Pt = s
  );
}
const Rt = (e) => {
  const t = se;
  return Zt(e), e.scope.on(), () => {
    e.scope.off(), Zt(t);
  };
}, Cn = () => {
  se && se.scope.off(), Zt(null);
};
function Bi(e) {
  return e.vnode.shapeFlag & 4;
}
let Pt = !1;
function qo(e, t = !1, s = !1) {
  t && Ds(t);
  const { props: n, children: i } = e.vnode, r = Bi(e);
  To(e, n, r, t), Po(e, i, s || t);
  const o = r ? Go(e, t) : void 0;
  return t && Ds(!1), o;
}
function Go(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fo);
  const { setup: n } = s;
  if (n) {
    De();
    const i = e.setupContext = n.length > 1 ? Yo(e) : null, r = Rt(e), o = It(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Bn(o);
    if (je(), r(), (l || e.sp) && !xt(e) && yi(e), l) {
      if (o.then(Cn, Cn), t)
        return o.then((c) => {
          Tn(e, c);
        }).catch((c) => {
          is(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Tn(e, o);
  } else
    Wi(e);
}
function Tn(e, t, s) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : V(t) && (e.setupState = ai(t)), Wi(e);
}
function Wi(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Te);
  {
    const i = Rt(e);
    De();
    try {
      uo(e);
    } finally {
      je(), i();
    }
  }
}
const Jo = {
  get(e, t) {
    return Q(e, "get", ""), e[t];
  }
};
function Yo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Jo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function cs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ai(Ar(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in wt)
        return wt[s](e);
    },
    has(t, s) {
      return s in t || s in wt;
    }
  })) : e.proxy;
}
function zo(e) {
  return F(e) && "__vccOpts" in e;
}
const ki = (e, t) => /* @__PURE__ */ Fr(e, t, Pt), Qo = "3.5.30";
/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let js;
const En = typeof window < "u" && window.trustedTypes;
if (En)
  try {
    js = /* @__PURE__ */ En.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const qi = js ? (e) => js.createHTML(e) : (e) => e, Zo = "http://www.w3.org/2000/svg", Xo = "http://www.w3.org/1998/Math/MathML", Pe = typeof document < "u" ? document : null, An = Pe && /* @__PURE__ */ Pe.createElement("template"), el = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Pe.createElementNS(Zo, e) : t === "mathml" ? Pe.createElementNS(Xo, e) : s ? Pe.createElement(e, { is: s }) : Pe.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Pe.createTextNode(e),
  createComment: (e) => Pe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Pe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, i, r) {
    const o = s ? s.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      An.innerHTML = qi(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = An.content;
      if (n === "svg" || n === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, tl = /* @__PURE__ */ Symbol("_vtc");
function sl(e, t, s) {
  const n = e[tl];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const On = /* @__PURE__ */ Symbol("_vod"), nl = /* @__PURE__ */ Symbol("_vsh"), il = /* @__PURE__ */ Symbol(""), rl = /(?:^|;)\s*display\s*:/;
function ol(e, t, s) {
  const n = e.style, i = J(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (J(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && qt(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && qt(n, o, "");
    for (const o in s)
      o === "display" && (r = !0), qt(n, o, s[o]);
  } else if (i) {
    if (t !== s) {
      const o = n[il];
      o && (s += ";" + o), n.cssText = s, r = rl.test(s);
    }
  } else t && e.removeAttribute("style");
  On in e && (e[On] = r ? n.display : "", e[nl] && (n.display = "none"));
}
const Pn = /\s*!important$/;
function qt(e, t, s) {
  if (R(s))
    s.forEach((n) => qt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = ll(e, t);
    Pn.test(s) ? e.setProperty(
      Ze(n),
      s.replace(Pn, ""),
      "important"
    ) : e[n] = s;
  }
}
const Mn = ["Webkit", "Moz", "ms"], xs = {};
function ll(e, t) {
  const s = xs[t];
  if (s)
    return s;
  let n = ae(t);
  if (n !== "filter" && n in e)
    return xs[t] = n;
  n = qn(n);
  for (let i = 0; i < Mn.length; i++) {
    const r = Mn[i] + n;
    if (r in e)
      return xs[t] = r;
  }
  return t;
}
const In = "http://www.w3.org/1999/xlink";
function Rn(e, t, s, n, i, r = ir(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(In, t.slice(6, t.length)) : e.setAttributeNS(In, t, s) : s == null || r && !Jn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ee(s) ? String(s) : s
  );
}
function Fn(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? qi(s) : s);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, c = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== c || !("_value" in e)) && (e.value = c), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = Jn(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function st(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function cl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Dn = /* @__PURE__ */ Symbol("_vei");
function fl(e, t, s, n, i = null) {
  const r = e[Dn] || (e[Dn] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [l, c] = ul(t);
    if (n) {
      const d = r[t] = hl(
        n,
        i
      );
      st(e, l, d, c);
    } else o && (cl(e, l, o, c), r[t] = void 0);
  }
}
const jn = /(?:Once|Passive|Capture)$/;
function ul(e) {
  let t;
  if (jn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(jn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ze(e.slice(2)), t];
}
let ws = 0;
const al = /* @__PURE__ */ Promise.resolve(), dl = () => ws || (al.then(() => ws = 0), ws = Date.now());
function hl(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Ae(
      pl(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = dl(), s;
}
function pl(e, t) {
  if (R(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const $n = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, gl = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? sl(e, n, o) : t === "style" ? ol(e, s, n) : Xt(t) ? Hs(t) || fl(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ml(e, t, n, o)) ? (Fn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rn(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (_l(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !J(n))) ? Fn(e, ae(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Rn(e, t, n, o));
};
function ml(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $n(t) && F(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return $n(t) && J(s) ? !1 : t in e;
}
function _l(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = ae(t);
  return Array.isArray(s) ? s.some((i) => ae(i) === n) : Object.keys(s).some((i) => ae(i) === n);
}
const Hn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return R(t) ? (s) => Bt(t, s) : t;
};
function bl(e) {
  e.target.composing = !0;
}
function Nn(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ss = /* @__PURE__ */ Symbol("_assign");
function Ln(e, t, s) {
  return t && (e = e.trim()), s && (e = Ks(e)), e;
}
const Ut = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[Ss] = Hn(i);
    const r = n || i.props && i.props.type === "number";
    st(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ss](Ln(e.value, s, r));
    }), (s || r) && st(e, "change", () => {
      e.value = Ln(e.value, s, r);
    }), t || (st(e, "compositionstart", bl), st(e, "compositionend", Nn), st(e, "change", Nn));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } }, o) {
    if (e[Ss] = Hn(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Ks(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === c) || (e.value = c));
  }
}, yl = ["ctrl", "shift", "alt", "meta"], vl = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => yl.some((s) => e[`${s}Key`] && !t.includes(s))
}, xl = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = vl[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  });
}, wl = /* @__PURE__ */ z({ patchProp: gl }, el);
let Kn;
function Sl() {
  return Kn || (Kn = Io(wl));
}
const Cl = (...e) => {
  const t = Sl().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = El(n);
    if (!i) return;
    const r = t._component;
    !F(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, Tl(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function Tl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function El(e) {
  return J(e) ? document.querySelector(e) : e;
}
const Al = {
  key: 0,
  class: "feedback-widget__panel",
  "aria-label": "Submit a question"
}, Ol = { class: "feedback-widget__upload" }, Pl = { class: "feedback-widget__upload-button" }, Ml = { class: "feedback-widget__upload-meta" }, Il = {
  key: 0,
  class: "feedback-widget__file-list",
  "aria-label": "Selected images"
}, Rl = { class: "feedback-widget__file-name" }, Fl = { class: "feedback-widget__file-size" }, Dl = ["aria-label", "onClick"], jl = ["disabled"], $l = ["aria-expanded"], Cs = 3, Hl = 5 * 1024 * 1024, Nl = /* @__PURE__ */ Jr({
  __name: "FeedbackWidget",
  setup(e) {
    const t = "https://www.hiwonder.net/english-course-feedback", s = ["image/jpeg", "image/png", "image/webp"], n = /* @__PURE__ */ pt(!1), i = /* @__PURE__ */ pt("idle"), r = /* @__PURE__ */ pt(""), o = /* @__PURE__ */ pt(null), l = /* @__PURE__ */ pt([]), c = /* @__PURE__ */ ns({
      name: "",
      email: "",
      message: "",
      website: ""
    }), d = ki(() => c.name.trim() && c.email.trim() && c.message.trim() && i.value !== "submitting");
    function a() {
      c.name = "", c.email = "", c.message = "", c.website = "", l.value = [], o.value && (o.value.value = "");
    }
    function p() {
      n.value = !n.value, n.value && i.value !== "submitting" && (i.value = "idle", r.value = "");
    }
    function S($) {
      const C = $.target, E = Array.from(C.files || []);
      if (!E.length)
        return;
      const D = [...l.value];
      for (const O of E) {
        if (D.length >= Cs) {
          i.value = "error", r.value = `You can upload up to ${Cs} images.`;
          break;
        }
        if (!s.includes(O.type)) {
          i.value = "error", r.value = "Please upload JPG, PNG, or WEBP images only.";
          continue;
        }
        if (O.size > Hl) {
          i.value = "error", r.value = "Each image must be 5MB or smaller.";
          continue;
        }
        D.push(O);
      }
      l.value = D, C.value = "";
    }
    function T($) {
      l.value = l.value.filter((C, E) => E !== $), i.value !== "submitting" && (i.value = "idle", r.value = "");
    }
    function H($) {
      return $ >= 1024 * 1024 ? `${($ / 1024 / 1024).toFixed(1)}MB` : `${Math.ceil($ / 1024)}KB`;
    }
    async function M() {
      var $;
      if (!d.value) {
        i.value = "error", r.value = "Please complete all fields.";
        return;
      }
      i.value = "submitting", r.value = "";
      try {
        const C = new FormData();
        C.append("name", c.name.trim()), C.append("email", c.email.trim()), C.append("message", c.message.trim()), C.append("website", c.website), C.append("source", "AIVisionKit docs"), C.append("pageTitle", document.title), C.append("pageUrl", window.location.href), C.append("version", decodeURIComponent((($ = window.location.pathname.match(/\/projects\/[^/]+\/[^/]+\/([^/]+)/)) == null ? void 0 : $[1]) || "latest")), l.value.forEach((O) => {
          C.append("images[]", O);
        });
        const E = await fetch(t, {
          method: "POST",
          body: C
        }), D = await E.json().catch(() => null);
        if (!E.ok || !D || ![1, 200].includes(Number(D.code)))
          throw new Error((D == null ? void 0 : D.msg) || "Submit failed. Please try again later.");
        i.value = "success", r.value = "Thanks for reaching out. We've received your question and will get back to you as soon as possible.", a();
      } catch (C) {
        i.value = "error", r.value = C instanceof Error ? C.message : "Submit failed. Please try again later.";
      }
    }
    return ($, C) => (Ye(), et(
      "div",
      {
        class: Ct(["feedback-widget", { "is-open": n.value }])
      },
      [
        n.value ? (Ye(), et("section", Al, [
          q("div", { class: "feedback-widget__header" }, [
            C[4] || (C[4] = q(
              "h2",
              { class: "feedback-widget__title" },
              "Ask a Question",
              -1
              /* CACHED */
            )),
            q("button", {
              class: "feedback-widget__close",
              type: "button",
              "aria-label": "Close feedback form",
              onClick: p
            }, " x ")
          ]),
          q(
            "form",
            {
              class: "feedback-widget__form",
              onSubmit: xl(M, ["prevent"])
            },
            [
              Vt(q(
                "input",
                {
                  "onUpdate:modelValue": C[0] || (C[0] = (E) => c.name = E),
                  class: "feedback-widget__input",
                  type: "text",
                  name: "name",
                  placeholder: "Your Name",
                  autocomplete: "name",
                  maxlength: "100",
                  required: ""
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [Ut, c.name]
              ]),
              Vt(q(
                "input",
                {
                  "onUpdate:modelValue": C[1] || (C[1] = (E) => c.email = E),
                  class: "feedback-widget__input",
                  type: "email",
                  name: "email",
                  placeholder: "Your Email",
                  autocomplete: "email",
                  maxlength: "160",
                  required: ""
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [Ut, c.email]
              ]),
              Vt(q(
                "textarea",
                {
                  "onUpdate:modelValue": C[2] || (C[2] = (E) => c.message = E),
                  class: "feedback-widget__textarea",
                  name: "message",
                  placeholder: "Your Question",
                  maxlength: "2000",
                  required: ""
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [Ut, c.message]
              ]),
              q("div", Ol, [
                q("label", Pl, [
                  q(
                    "input",
                    {
                      ref_key: "imageInput",
                      ref: o,
                      class: "feedback-widget__file-input",
                      type: "file",
                      name: "images",
                      accept: "image/jpeg,image/png,image/webp",
                      multiple: "",
                      onChange: S
                    },
                    null,
                    544
                    /* NEED_HYDRATION, NEED_PATCH */
                  ),
                  C[5] || (C[5] = q(
                    "span",
                    null,
                    "Attach Images",
                    -1
                    /* CACHED */
                  ))
                ]),
                q(
                  "span",
                  Ml,
                  Ge(l.value.length) + "/" + Ge(Cs),
                  1
                  /* TEXT */
                )
              ]),
              l.value.length ? (Ye(), et("ul", Il, [
                (Ye(!0), et(
                  we,
                  null,
                  co(l.value, (E, D) => (Ye(), et("li", {
                    key: `${E.name}-${E.size}-${D}`,
                    class: "feedback-widget__file-item"
                  }, [
                    q(
                      "span",
                      Rl,
                      Ge(E.name),
                      1
                      /* TEXT */
                    ),
                    q(
                      "span",
                      Fl,
                      Ge(H(E.size)),
                      1
                      /* TEXT */
                    ),
                    q("button", {
                      class: "feedback-widget__file-remove",
                      type: "button",
                      "aria-label": `Remove ${E.name}`,
                      onClick: (O) => T(D)
                    }, " x ", 8, Dl)
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vs("v-if", !0),
              Vt(q(
                "input",
                {
                  "onUpdate:modelValue": C[3] || (C[3] = (E) => c.website = E),
                  class: "feedback-widget__honeypot",
                  type: "text",
                  name: "website",
                  tabindex: "-1",
                  autocomplete: "off"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [Ut, c.website]
              ]),
              r.value ? (Ye(), et(
                "p",
                {
                  key: 1,
                  class: Ct(["feedback-widget__message", `is-${i.value}`]),
                  role: "status"
                },
                Ge(r.value),
                3
                /* TEXT, CLASS */
              )) : vs("v-if", !0),
              q("button", {
                class: "feedback-widget__submit",
                type: "submit",
                disabled: !d.value
              }, Ge(i.value === "submitting" ? "Submitting..." : "Submit"), 9, jl)
            ],
            32
            /* NEED_HYDRATION */
          )
        ])) : vs("v-if", !0),
        q("button", {
          class: "feedback-widget__trigger",
          type: "button",
          "aria-expanded": n.value,
          "aria-label": "Open feedback form",
          onClick: p
        }, [...C[6] || (C[6] = [
          q(
            "span",
            {
              class: "feedback-widget__icon",
              "aria-hidden": "true"
            },
            [
              q("svg", {
                viewBox: "0 0 24 24",
                focusable: "false"
              }, [
                q("path", { d: "M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5Z" })
              ])
            ],
            -1
            /* CACHED */
          ),
          q(
            "span",
            null,
            "Chat",
            -1
            /* CACHED */
          )
        ])], 8, $l)
      ],
      2
      /* CLASS */
    ));
  }
});
if (!document.getElementById("course-feedback-root")) {
  const e = document.createElement("div");
  e.id = "course-feedback-root", document.body.appendChild(e), Cl(Nl).mount(e);
}
