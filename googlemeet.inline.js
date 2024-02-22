"use strict";
(() => {
  var Fo = Object.create;
  var wn = Object.defineProperty;
  var Ho = Object.getOwnPropertyDescriptor;
  var Vo = Object.getOwnPropertyNames;
  var Jo = Object.getPrototypeOf,
    Wo = Object.prototype.hasOwnProperty;
  var yn = ((e) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(e, { get: (o, n) => (typeof require < "u" ? require : o)[n] })
      : e)(function (e) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  });
  var j = (e, o) => () => (o || e((o = { exports: {} }).exports, o), o.exports);
  var Ko = (e, o, n, r) => {
    if ((o && typeof o == "object") || typeof o == "function")
      for (let t of Vo(o))
        !Wo.call(e, t) &&
          t !== n &&
          wn(e, t, {
            get: () => o[t],
            enumerable: !(r = Ho(o, t)) || r.enumerable,
          });
    return e;
  };
  var Xo = (e, o, n) => (
    (n = e != null ? Fo(Jo(e)) : {}),
    Ko(
      o || !e || !e.__esModule
        ? wn(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  );
  var Pi = j((lc, Gi) => {
    "use strict";
    Gi.exports = Va;
    function Va(e, o) {
      for (
        var n = new Array(arguments.length - 1), r = 0, t = 2, i = !0;
        t < arguments.length;

      )
        n[r++] = arguments[t++];
      return new Promise(function (a, f) {
        n[r] = function (u) {
          if (i)
            if (((i = !1), u)) f(u);
            else {
              for (
                var k = new Array(arguments.length - 1), _ = 0;
                _ < k.length;

              )
                k[_++] = arguments[_];
              a.apply(null, k);
            }
        };
        try {
          e.apply(o || null, n);
        } catch (c) {
          i && ((i = !1), f(c));
        }
      });
    }
  });
  var Fi = j((Ui) => {
    "use strict";
    var xt = Ui;
    xt.length = function (o) {
      var n = o.length;
      if (!n) return 0;
      for (var r = 0; --n % 4 > 1 && o.charAt(n) === "="; ) ++r;
      return Math.ceil(o.length * 3) / 4 - r;
    };
    var Pe = new Array(64),
      Zi = new Array(123);
    for (ne = 0; ne < 64; )
      Zi[
        (Pe[ne] =
          ne < 26
            ? ne + 65
            : ne < 52
            ? ne + 71
            : ne < 62
            ? ne - 4
            : (ne - 59) | 43)
      ] = ne++;
    var ne;
    xt.encode = function (o, n, r) {
      for (var t = null, i = [], l = 0, a = 0, f; n < r; ) {
        var c = o[n++];
        switch (a) {
          case 0:
            (i[l++] = Pe[c >> 2]), (f = (c & 3) << 4), (a = 1);
            break;
          case 1:
            (i[l++] = Pe[f | (c >> 4)]), (f = (c & 15) << 2), (a = 2);
            break;
          case 2:
            (i[l++] = Pe[f | (c >> 6)]), (i[l++] = Pe[c & 63]), (a = 0);
            break;
        }
        l > 8191 &&
          ((t || (t = [])).push(String.fromCharCode.apply(String, i)), (l = 0));
      }
      return (
        a && ((i[l++] = Pe[f]), (i[l++] = 61), a === 1 && (i[l++] = 61)),
        t
          ? (l && t.push(String.fromCharCode.apply(String, i.slice(0, l))),
            t.join(""))
          : String.fromCharCode.apply(String, i.slice(0, l))
      );
    };
    var $i = "invalid encoding";
    xt.decode = function (o, n, r) {
      for (var t = r, i = 0, l, a = 0; a < o.length; ) {
        var f = o.charCodeAt(a++);
        if (f === 61 && i > 1) break;
        if ((f = Zi[f]) === void 0) throw Error($i);
        switch (i) {
          case 0:
            (l = f), (i = 1);
            break;
          case 1:
            (n[r++] = (l << 2) | ((f & 48) >> 4)), (l = f), (i = 2);
            break;
          case 2:
            (n[r++] = ((l & 15) << 4) | ((f & 60) >> 2)), (l = f), (i = 3);
            break;
          case 3:
            (n[r++] = ((l & 3) << 6) | f), (i = 0);
            break;
        }
      }
      if (i === 1) throw Error($i);
      return r - t;
    };
    xt.test = function (o) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
        o
      );
    };
  });
  var Vi = j((cc, Hi) => {
    "use strict";
    Hi.exports = St;
    function St() {
      this._listeners = {};
    }
    St.prototype.on = function (o, n, r) {
      return (
        (this._listeners[o] || (this._listeners[o] = [])).push({
          fn: n,
          ctx: r || this,
        }),
        this
      );
    };
    St.prototype.off = function (o, n) {
      if (o === void 0) this._listeners = {};
      else if (n === void 0) this._listeners[o] = [];
      else
        for (var r = this._listeners[o], t = 0; t < r.length; )
          r[t].fn === n ? r.splice(t, 1) : ++t;
      return this;
    };
    St.prototype.emit = function (o) {
      var n = this._listeners[o];
      if (n) {
        for (var r = [], t = 1; t < arguments.length; ) r.push(arguments[t++]);
        for (t = 0; t < n.length; ) n[t].fn.apply(n[t++].ctx, r);
      }
      return this;
    };
  });
  var eo = j((fc, Qi) => {
    "use strict";
    Qi.exports = Ji(Ji);
    function Ji(e) {
      return (
        typeof Float32Array < "u"
          ? (function () {
              var o = new Float32Array([-0]),
                n = new Uint8Array(o.buffer),
                r = n[3] === 128;
              function t(f, c, u) {
                (o[0] = f),
                  (c[u] = n[0]),
                  (c[u + 1] = n[1]),
                  (c[u + 2] = n[2]),
                  (c[u + 3] = n[3]);
              }
              function i(f, c, u) {
                (o[0] = f),
                  (c[u] = n[3]),
                  (c[u + 1] = n[2]),
                  (c[u + 2] = n[1]),
                  (c[u + 3] = n[0]);
              }
              (e.writeFloatLE = r ? t : i), (e.writeFloatBE = r ? i : t);
              function l(f, c) {
                return (
                  (n[0] = f[c]),
                  (n[1] = f[c + 1]),
                  (n[2] = f[c + 2]),
                  (n[3] = f[c + 3]),
                  o[0]
                );
              }
              function a(f, c) {
                return (
                  (n[3] = f[c]),
                  (n[2] = f[c + 1]),
                  (n[1] = f[c + 2]),
                  (n[0] = f[c + 3]),
                  o[0]
                );
              }
              (e.readFloatLE = r ? l : a), (e.readFloatBE = r ? a : l);
            })()
          : (function () {
              function o(r, t, i, l) {
                var a = t < 0 ? 1 : 0;
                if ((a && (t = -t), t === 0))
                  r(1 / t > 0 ? 0 : 2147483648, i, l);
                else if (isNaN(t)) r(2143289344, i, l);
                else if (t > 34028234663852886e22)
                  r(((a << 31) | 2139095040) >>> 0, i, l);
                else if (t < 11754943508222875e-54)
                  r(
                    ((a << 31) | Math.round(t / 1401298464324817e-60)) >>> 0,
                    i,
                    l
                  );
                else {
                  var f = Math.floor(Math.log(t) / Math.LN2),
                    c = Math.round(t * Math.pow(2, -f) * 8388608) & 8388607;
                  r(((a << 31) | ((f + 127) << 23) | c) >>> 0, i, l);
                }
              }
              (e.writeFloatLE = o.bind(null, Wi)),
                (e.writeFloatBE = o.bind(null, Ki));
              function n(r, t, i) {
                var l = r(t, i),
                  a = (l >> 31) * 2 + 1,
                  f = (l >>> 23) & 255,
                  c = l & 8388607;
                return f === 255
                  ? c
                    ? NaN
                    : a * (1 / 0)
                  : f === 0
                  ? a * 1401298464324817e-60 * c
                  : a * Math.pow(2, f - 150) * (c + 8388608);
              }
              (e.readFloatLE = n.bind(null, Xi)),
                (e.readFloatBE = n.bind(null, Yi));
            })(),
        typeof Float64Array < "u"
          ? (function () {
              var o = new Float64Array([-0]),
                n = new Uint8Array(o.buffer),
                r = n[7] === 128;
              function t(f, c, u) {
                (o[0] = f),
                  (c[u] = n[0]),
                  (c[u + 1] = n[1]),
                  (c[u + 2] = n[2]),
                  (c[u + 3] = n[3]),
                  (c[u + 4] = n[4]),
                  (c[u + 5] = n[5]),
                  (c[u + 6] = n[6]),
                  (c[u + 7] = n[7]);
              }
              function i(f, c, u) {
                (o[0] = f),
                  (c[u] = n[7]),
                  (c[u + 1] = n[6]),
                  (c[u + 2] = n[5]),
                  (c[u + 3] = n[4]),
                  (c[u + 4] = n[3]),
                  (c[u + 5] = n[2]),
                  (c[u + 6] = n[1]),
                  (c[u + 7] = n[0]);
              }
              (e.writeDoubleLE = r ? t : i), (e.writeDoubleBE = r ? i : t);
              function l(f, c) {
                return (
                  (n[0] = f[c]),
                  (n[1] = f[c + 1]),
                  (n[2] = f[c + 2]),
                  (n[3] = f[c + 3]),
                  (n[4] = f[c + 4]),
                  (n[5] = f[c + 5]),
                  (n[6] = f[c + 6]),
                  (n[7] = f[c + 7]),
                  o[0]
                );
              }
              function a(f, c) {
                return (
                  (n[7] = f[c]),
                  (n[6] = f[c + 1]),
                  (n[5] = f[c + 2]),
                  (n[4] = f[c + 3]),
                  (n[3] = f[c + 4]),
                  (n[2] = f[c + 5]),
                  (n[1] = f[c + 6]),
                  (n[0] = f[c + 7]),
                  o[0]
                );
              }
              (e.readDoubleLE = r ? l : a), (e.readDoubleBE = r ? a : l);
            })()
          : (function () {
              function o(r, t, i, l, a, f) {
                var c = l < 0 ? 1 : 0;
                if ((c && (l = -l), l === 0))
                  r(0, a, f + t), r(1 / l > 0 ? 0 : 2147483648, a, f + i);
                else if (isNaN(l)) r(0, a, f + t), r(2146959360, a, f + i);
                else if (l > 17976931348623157e292)
                  r(0, a, f + t), r(((c << 31) | 2146435072) >>> 0, a, f + i);
                else {
                  var u;
                  if (l < 22250738585072014e-324)
                    (u = l / 5e-324),
                      r(u >>> 0, a, f + t),
                      r(((c << 31) | (u / 4294967296)) >>> 0, a, f + i);
                  else {
                    var k = Math.floor(Math.log(l) / Math.LN2);
                    k === 1024 && (k = 1023),
                      (u = l * Math.pow(2, -k)),
                      r((u * 4503599627370496) >>> 0, a, f + t),
                      r(
                        ((c << 31) |
                          ((k + 1023) << 20) |
                          ((u * 1048576) & 1048575)) >>>
                          0,
                        a,
                        f + i
                      );
                  }
                }
              }
              (e.writeDoubleLE = o.bind(null, Wi, 0, 4)),
                (e.writeDoubleBE = o.bind(null, Ki, 4, 0));
              function n(r, t, i, l, a) {
                var f = r(l, a + t),
                  c = r(l, a + i),
                  u = (c >> 31) * 2 + 1,
                  k = (c >>> 20) & 2047,
                  _ = 4294967296 * (c & 1048575) + f;
                return k === 2047
                  ? _
                    ? NaN
                    : u * (1 / 0)
                  : k === 0
                  ? u * 5e-324 * _
                  : u * Math.pow(2, k - 1075) * (_ + 4503599627370496);
              }
              (e.readDoubleLE = n.bind(null, Xi, 0, 4)),
                (e.readDoubleBE = n.bind(null, Yi, 4, 0));
            })(),
        e
      );
    }
    function Wi(e, o, n) {
      (o[n] = e & 255),
        (o[n + 1] = (e >>> 8) & 255),
        (o[n + 2] = (e >>> 16) & 255),
        (o[n + 3] = e >>> 24);
    }
    function Ki(e, o, n) {
      (o[n] = e >>> 24),
        (o[n + 1] = (e >>> 16) & 255),
        (o[n + 2] = (e >>> 8) & 255),
        (o[n + 3] = e & 255);
    }
    function Xi(e, o) {
      return (
        (e[o] | (e[o + 1] << 8) | (e[o + 2] << 16) | (e[o + 3] << 24)) >>> 0
      );
    }
    function Yi(e, o) {
      return (
        ((e[o] << 24) | (e[o + 1] << 16) | (e[o + 2] << 8) | e[o + 3]) >>> 0
      );
    }
  });
  var no = j((uc, to) => {
    "use strict";
    to.exports = Ja;
    function Ja(e) {
      try {
        var o = yn(e);
        if (o && (o.length || Object.keys(o).length)) return o;
      } catch {}
      return null;
    }
  });
  var oo = j((io) => {
    "use strict";
    var on = io;
    on.length = function (o) {
      for (var n = 0, r = 0, t = 0; t < o.length; ++t)
        (r = o.charCodeAt(t)),
          r < 128
            ? (n += 1)
            : r < 2048
            ? (n += 2)
            : (r & 64512) === 55296 && (o.charCodeAt(t + 1) & 64512) === 56320
            ? (++t, (n += 4))
            : (n += 3);
      return n;
    };
    on.read = function (o, n, r) {
      var t = r - n;
      if (t < 1) return "";
      for (var i = null, l = [], a = 0, f; n < r; )
        (f = o[n++]),
          f < 128
            ? (l[a++] = f)
            : f > 191 && f < 224
            ? (l[a++] = ((f & 31) << 6) | (o[n++] & 63))
            : f > 239 && f < 365
            ? ((f =
                (((f & 7) << 18) |
                  ((o[n++] & 63) << 12) |
                  ((o[n++] & 63) << 6) |
                  (o[n++] & 63)) -
                65536),
              (l[a++] = 55296 + (f >> 10)),
              (l[a++] = 56320 + (f & 1023)))
            : (l[a++] =
                ((f & 15) << 12) | ((o[n++] & 63) << 6) | (o[n++] & 63)),
          a > 8191 &&
            ((i || (i = [])).push(String.fromCharCode.apply(String, l)),
            (a = 0));
      return i
        ? (a && i.push(String.fromCharCode.apply(String, l.slice(0, a))),
          i.join(""))
        : String.fromCharCode.apply(String, l.slice(0, a));
    };
    on.write = function (o, n, r) {
      for (var t = r, i, l, a = 0; a < o.length; ++a)
        (i = o.charCodeAt(a)),
          i < 128
            ? (n[r++] = i)
            : i < 2048
            ? ((n[r++] = (i >> 6) | 192), (n[r++] = (i & 63) | 128))
            : (i & 64512) === 55296 &&
              ((l = o.charCodeAt(a + 1)) & 64512) === 56320
            ? ((i = 65536 + ((i & 1023) << 10) + (l & 1023)),
              ++a,
              (n[r++] = (i >> 18) | 240),
              (n[r++] = ((i >> 12) & 63) | 128),
              (n[r++] = ((i >> 6) & 63) | 128),
              (n[r++] = (i & 63) | 128))
            : ((n[r++] = (i >> 12) | 224),
              (n[r++] = ((i >> 6) & 63) | 128),
              (n[r++] = (i & 63) | 128));
      return r - t;
    };
  });
  var lo = j((hc, ro) => {
    "use strict";
    ro.exports = Wa;
    function Wa(e, o, n) {
      var r = n || 8192,
        t = r >>> 1,
        i = null,
        l = r;
      return function (f) {
        if (f < 1 || f > t) return e(f);
        l + f > r && ((i = e(r)), (l = 0));
        var c = o.call(i, l, (l += f));
        return l & 7 && (l = (l | 7) + 1), c;
      };
    }
  });
  var co = j((_c, ao) => {
    "use strict";
    ao.exports = P;
    var at = me();
    function P(e, o) {
      (this.lo = e >>> 0), (this.hi = o >>> 0);
    }
    var De = (P.zero = new P(0, 0));
    De.toNumber = function () {
      return 0;
    };
    De.zzEncode = De.zzDecode = function () {
      return this;
    };
    De.length = function () {
      return 1;
    };
    var Ka = (P.zeroHash = "\0\0\0\0\0\0\0\0");
    P.fromNumber = function (o) {
      if (o === 0) return De;
      var n = o < 0;
      n && (o = -o);
      var r = o >>> 0,
        t = ((o - r) / 4294967296) >>> 0;
      return (
        n &&
          ((t = ~t >>> 0),
          (r = ~r >>> 0),
          ++r > 4294967295 && ((r = 0), ++t > 4294967295 && (t = 0))),
        new P(r, t)
      );
    };
    P.from = function (o) {
      if (typeof o == "number") return P.fromNumber(o);
      if (at.isString(o))
        if (at.Long) o = at.Long.fromString(o);
        else return P.fromNumber(parseInt(o, 10));
      return o.low || o.high ? new P(o.low >>> 0, o.high >>> 0) : De;
    };
    P.prototype.toNumber = function (o) {
      if (!o && this.hi >>> 31) {
        var n = (~this.lo + 1) >>> 0,
          r = ~this.hi >>> 0;
        return n || (r = (r + 1) >>> 0), -(n + r * 4294967296);
      }
      return this.lo + this.hi * 4294967296;
    };
    P.prototype.toLong = function (o) {
      return at.Long
        ? new at.Long(this.lo | 0, this.hi | 0, !!o)
        : { low: this.lo | 0, high: this.hi | 0, unsigned: !!o };
    };
    var ye = String.prototype.charCodeAt;
    P.fromHash = function (o) {
      return o === Ka
        ? De
        : new P(
            (ye.call(o, 0) |
              (ye.call(o, 1) << 8) |
              (ye.call(o, 2) << 16) |
              (ye.call(o, 3) << 24)) >>>
              0,
            (ye.call(o, 4) |
              (ye.call(o, 5) << 8) |
              (ye.call(o, 6) << 16) |
              (ye.call(o, 7) << 24)) >>>
              0
          );
    };
    P.prototype.toHash = function () {
      return String.fromCharCode(
        this.lo & 255,
        (this.lo >>> 8) & 255,
        (this.lo >>> 16) & 255,
        this.lo >>> 24,
        this.hi & 255,
        (this.hi >>> 8) & 255,
        (this.hi >>> 16) & 255,
        this.hi >>> 24
      );
    };
    P.prototype.zzEncode = function () {
      var o = this.hi >> 31;
      return (
        (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ o) >>> 0),
        (this.lo = ((this.lo << 1) ^ o) >>> 0),
        this
      );
    };
    P.prototype.zzDecode = function () {
      var o = -(this.lo & 1);
      return (
        (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ o) >>> 0),
        (this.hi = ((this.hi >>> 1) ^ o) >>> 0),
        this
      );
    };
    P.prototype.length = function () {
      var o = this.lo,
        n = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
        r = this.hi >>> 24;
      return r === 0
        ? n === 0
          ? o < 16384
            ? o < 128
              ? 1
              : 2
            : o < 2097152
            ? 3
            : 4
          : n < 16384
          ? n < 128
            ? 5
            : 6
          : n < 2097152
          ? 7
          : 8
        : r < 128
        ? 9
        : 10;
    };
  });
  var me = j((rn) => {
    "use strict";
    var v = rn;
    v.asPromise = Pi();
    v.base64 = Fi();
    v.EventEmitter = Vi();
    v.float = eo();
    v.inquire = no();
    v.utf8 = oo();
    v.pool = lo();
    v.LongBits = co();
    v.global =
      (typeof window < "u" && window) ||
      (typeof globalThis < "u" && globalThis) ||
      (typeof self < "u" && self) ||
      rn;
    v.emptyArray = Object.freeze ? Object.freeze([]) : [];
    v.emptyObject = Object.freeze ? Object.freeze({}) : {};
    v.isNode = !!(
      v.global.process &&
      v.global.process.versions &&
      v.global.process.versions.node
    );
    v.isInteger =
      Number.isInteger ||
      function (o) {
        return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
      };
    v.isString = function (o) {
      return typeof o == "string" || o instanceof String;
    };
    v.isObject = function (o) {
      return o && typeof o == "object";
    };
    v.isset = v.isSet = function (o, n) {
      var r = o[n];
      return r != null && o.hasOwnProperty(n)
        ? typeof r != "object" ||
            (Array.isArray(r) ? r.length : Object.keys(r).length) > 0
        : !1;
    };
    v.Buffer = (function () {
      try {
        var e = v.inquire("buffer").Buffer;
        return e.prototype.utf8Write ? e : null;
      } catch {
        return null;
      }
    })();
    v._Buffer_from = null;
    v._Buffer_allocUnsafe = null;
    v.newBuffer = function (o) {
      return typeof o == "number"
        ? v.Buffer
          ? v._Buffer_allocUnsafe(o)
          : new v.Array(o)
        : v.Buffer
        ? v._Buffer_from(o)
        : typeof Uint8Array > "u"
        ? o
        : new Uint8Array(o);
    };
    v.Array = typeof Uint8Array < "u" ? Uint8Array : Array;
    v.Long =
      (v.global.dcodeIO && v.global.dcodeIO.Long) ||
      v.global.Long ||
      v.inquire("long");
    v.key2Re = /^true|false|0|1$/;
    v.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
    v.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
    v.longToHash = function (o) {
      return o ? v.LongBits.from(o).toHash() : v.LongBits.zeroHash;
    };
    v.longFromHash = function (o, n) {
      var r = v.LongBits.fromHash(o);
      return v.Long ? v.Long.fromBits(r.lo, r.hi, n) : r.toNumber(!!n);
    };
    function fo(e, o, n) {
      for (var r = Object.keys(o), t = 0; t < r.length; ++t)
        (e[r[t]] === void 0 || !n) && (e[r[t]] = o[r[t]]);
      return e;
    }
    v.merge = fo;
    v.lcFirst = function (o) {
      return o.charAt(0).toLowerCase() + o.substring(1);
    };
    function uo(e) {
      function o(n, r) {
        if (!(this instanceof o)) return new o(n, r);
        Object.defineProperty(this, "message", {
          get: function () {
            return n;
          },
        }),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, o)
            : Object.defineProperty(this, "stack", {
                value: new Error().stack || "",
              }),
          r && fo(this, r);
      }
      return (
        ((o.prototype = Object.create(Error.prototype)).constructor = o),
        Object.defineProperty(o.prototype, "name", {
          get: function () {
            return e;
          },
        }),
        (o.prototype.toString = function () {
          return this.name + ": " + this.message;
        }),
        o
      );
    }
    v.newError = uo;
    v.ProtocolError = uo("ProtocolError");
    v.oneOfGetter = function (o) {
      for (var n = {}, r = 0; r < o.length; ++r) n[o[r]] = 1;
      return function () {
        for (var t = Object.keys(this), i = t.length - 1; i > -1; --i)
          if (n[t[i]] === 1 && this[t[i]] !== void 0 && this[t[i]] !== null)
            return t[i];
      };
    };
    v.oneOfSetter = function (o) {
      return function (n) {
        for (var r = 0; r < o.length; ++r) o[r] !== n && delete this[o[r]];
      };
    };
    v.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 };
    v._configure = function () {
      var e = v.Buffer;
      if (!e) {
        v._Buffer_from = v._Buffer_allocUnsafe = null;
        return;
      }
      (v._Buffer_from =
        (e.from !== Uint8Array.from && e.from) ||
        function (n, r) {
          return new e(n, r);
        }),
        (v._Buffer_allocUnsafe =
          e.allocUnsafe ||
          function (n) {
            return new e(n);
          });
    };
  });
  var dn = j((pc, go) => {
    "use strict";
    go.exports = I;
    var te = me(),
      ln,
      kt = te.LongBits,
      so = te.base64,
      ho = te.utf8;
    function ct(e, o, n) {
      (this.fn = e), (this.len = o), (this.next = void 0), (this.val = n);
    }
    function cn() {}
    function Xa(e) {
      (this.head = e.head),
        (this.tail = e.tail),
        (this.len = e.len),
        (this.next = e.states);
    }
    function I() {
      (this.len = 0),
        (this.head = new ct(cn, 0, 0)),
        (this.tail = this.head),
        (this.states = null);
    }
    var _o = function () {
      return te.Buffer
        ? function () {
            return (I.create = function () {
              return new ln();
            })();
          }
        : function () {
            return new I();
          };
    };
    I.create = _o();
    I.alloc = function (o) {
      return new te.Array(o);
    };
    te.Array !== Array &&
      (I.alloc = te.pool(I.alloc, te.Array.prototype.subarray));
    I.prototype._push = function (o, n, r) {
      return (
        (this.tail = this.tail.next = new ct(o, n, r)), (this.len += n), this
      );
    };
    function fn(e, o, n) {
      o[n] = e & 255;
    }
    function Ya(e, o, n) {
      for (; e > 127; ) (o[n++] = (e & 127) | 128), (e >>>= 7);
      o[n] = e;
    }
    function un(e, o) {
      (this.len = e), (this.next = void 0), (this.val = o);
    }
    un.prototype = Object.create(ct.prototype);
    un.prototype.fn = Ya;
    I.prototype.uint32 = function (o) {
      return (
        (this.len += (this.tail = this.tail.next =
          new un(
            (o = o >>> 0) < 128
              ? 1
              : o < 16384
              ? 2
              : o < 2097152
              ? 3
              : o < 268435456
              ? 4
              : 5,
            o
          )).len),
        this
      );
    };
    I.prototype.int32 = function (o) {
      return o < 0 ? this._push(sn, 10, kt.fromNumber(o)) : this.uint32(o);
    };
    I.prototype.sint32 = function (o) {
      return this.uint32(((o << 1) ^ (o >> 31)) >>> 0);
    };
    function sn(e, o, n) {
      for (; e.hi; )
        (o[n++] = (e.lo & 127) | 128),
          (e.lo = ((e.lo >>> 7) | (e.hi << 25)) >>> 0),
          (e.hi >>>= 7);
      for (; e.lo > 127; ) (o[n++] = (e.lo & 127) | 128), (e.lo = e.lo >>> 7);
      o[n++] = e.lo;
    }
    I.prototype.uint64 = function (o) {
      var n = kt.from(o);
      return this._push(sn, n.length(), n);
    };
    I.prototype.int64 = I.prototype.uint64;
    I.prototype.sint64 = function (o) {
      var n = kt.from(o).zzEncode();
      return this._push(sn, n.length(), n);
    };
    I.prototype.bool = function (o) {
      return this._push(fn, 1, o ? 1 : 0);
    };
    function an(e, o, n) {
      (o[n] = e & 255),
        (o[n + 1] = (e >>> 8) & 255),
        (o[n + 2] = (e >>> 16) & 255),
        (o[n + 3] = e >>> 24);
    }
    I.prototype.fixed32 = function (o) {
      return this._push(an, 4, o >>> 0);
    };
    I.prototype.sfixed32 = I.prototype.fixed32;
    I.prototype.fixed64 = function (o) {
      var n = kt.from(o);
      return this._push(an, 4, n.lo)._push(an, 4, n.hi);
    };
    I.prototype.sfixed64 = I.prototype.fixed64;
    I.prototype.float = function (o) {
      return this._push(te.float.writeFloatLE, 4, o);
    };
    I.prototype.double = function (o) {
      return this._push(te.float.writeDoubleLE, 8, o);
    };
    var Qa = te.Array.prototype.set
      ? function (o, n, r) {
          n.set(o, r);
        }
      : function (o, n, r) {
          for (var t = 0; t < o.length; ++t) n[r + t] = o[t];
        };
    I.prototype.bytes = function (o) {
      var n = o.length >>> 0;
      if (!n) return this._push(fn, 1, 0);
      if (te.isString(o)) {
        var r = I.alloc((n = so.length(o)));
        so.decode(o, r, 0), (o = r);
      }
      return this.uint32(n)._push(Qa, n, o);
    };
    I.prototype.string = function (o) {
      var n = ho.length(o);
      return n ? this.uint32(n)._push(ho.write, n, o) : this._push(fn, 1, 0);
    };
    I.prototype.fork = function () {
      return (
        (this.states = new Xa(this)),
        (this.head = this.tail = new ct(cn, 0, 0)),
        (this.len = 0),
        this
      );
    };
    I.prototype.reset = function () {
      return (
        this.states
          ? ((this.head = this.states.head),
            (this.tail = this.states.tail),
            (this.len = this.states.len),
            (this.states = this.states.next))
          : ((this.head = this.tail = new ct(cn, 0, 0)), (this.len = 0)),
        this
      );
    };
    I.prototype.ldelim = function () {
      var o = this.head,
        n = this.tail,
        r = this.len;
      return (
        this.reset().uint32(r),
        r && ((this.tail.next = o.next), (this.tail = n), (this.len += r)),
        this
      );
    };
    I.prototype.finish = function () {
      for (
        var o = this.head.next, n = this.constructor.alloc(this.len), r = 0;
        o;

      )
        o.fn(o.val, n, r), (r += o.len), (o = o.next);
      return n;
    };
    I._configure = function (e) {
      (ln = e), (I.create = _o()), ln._configure();
    };
  });
  var wo = j((bc, bo) => {
    "use strict";
    bo.exports = ce;
    var po = dn();
    (ce.prototype = Object.create(po.prototype)).constructor = ce;
    var ve = me();
    function ce() {
      po.call(this);
    }
    ce._configure = function () {
      (ce.alloc = ve._Buffer_allocUnsafe),
        (ce.writeBytesBuffer =
          ve.Buffer &&
          ve.Buffer.prototype instanceof Uint8Array &&
          ve.Buffer.prototype.set.name === "set"
            ? function (o, n, r) {
                n.set(o, r);
              }
            : function (o, n, r) {
                if (o.copy) o.copy(n, r, 0, o.length);
                else for (var t = 0; t < o.length; ) n[r++] = o[t++];
              });
    };
    ce.prototype.bytes = function (o) {
      ve.isString(o) && (o = ve._Buffer_from(o, "base64"));
      var n = o.length >>> 0;
      return this.uint32(n), n && this._push(ce.writeBytesBuffer, n, o), this;
    };
    function ec(e, o, n) {
      e.length < 40
        ? ve.utf8.write(e, o, n)
        : o.utf8Write
        ? o.utf8Write(e, n)
        : o.write(e, n);
    }
    ce.prototype.string = function (o) {
      var n = ve.Buffer.byteLength(o);
      return this.uint32(n), n && this._push(ec, n, o), this;
    };
    ce._configure();
  });
  var gn = j((wc, So) => {
    "use strict";
    So.exports = q;
    var fe = me(),
      _n,
      vo = fe.LongBits,
      tc = fe.utf8;
    function ie(e, o) {
      return RangeError(
        "index out of range: " + e.pos + " + " + (o || 1) + " > " + e.len
      );
    }
    function q(e) {
      (this.buf = e), (this.pos = 0), (this.len = e.length);
    }
    var yo =
        typeof Uint8Array < "u"
          ? function (o) {
              if (o instanceof Uint8Array || Array.isArray(o)) return new q(o);
              throw Error("illegal buffer");
            }
          : function (o) {
              if (Array.isArray(o)) return new q(o);
              throw Error("illegal buffer");
            },
      xo = function () {
        return fe.Buffer
          ? function (n) {
              return (q.create = function (t) {
                return fe.Buffer.isBuffer(t) ? new _n(t) : yo(t);
              })(n);
            }
          : yo;
      };
    q.create = xo();
    q.prototype._slice =
      fe.Array.prototype.subarray || fe.Array.prototype.slice;
    q.prototype.uint32 = (function () {
      var o = 4294967295;
      return function () {
        if (
          ((o = (this.buf[this.pos] & 127) >>> 0),
          this.buf[this.pos++] < 128 ||
            ((o = (o | ((this.buf[this.pos] & 127) << 7)) >>> 0),
            this.buf[this.pos++] < 128) ||
            ((o = (o | ((this.buf[this.pos] & 127) << 14)) >>> 0),
            this.buf[this.pos++] < 128) ||
            ((o = (o | ((this.buf[this.pos] & 127) << 21)) >>> 0),
            this.buf[this.pos++] < 128) ||
            ((o = (o | ((this.buf[this.pos] & 15) << 28)) >>> 0),
            this.buf[this.pos++] < 128))
        )
          return o;
        if ((this.pos += 5) > this.len)
          throw ((this.pos = this.len), ie(this, 10));
        return o;
      };
    })();
    q.prototype.int32 = function () {
      return this.uint32() | 0;
    };
    q.prototype.sint32 = function () {
      var o = this.uint32();
      return ((o >>> 1) ^ -(o & 1)) | 0;
    };
    function hn() {
      var e = new vo(0, 0),
        o = 0;
      if (this.len - this.pos > 4) {
        for (; o < 4; ++o)
          if (
            ((e.lo = (e.lo | ((this.buf[this.pos] & 127) << (o * 7))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return e;
        if (
          ((e.lo = (e.lo | ((this.buf[this.pos] & 127) << 28)) >>> 0),
          (e.hi = (e.hi | ((this.buf[this.pos] & 127) >> 4)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return e;
        o = 0;
      } else {
        for (; o < 3; ++o) {
          if (this.pos >= this.len) throw ie(this);
          if (
            ((e.lo = (e.lo | ((this.buf[this.pos] & 127) << (o * 7))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return e;
        }
        return (
          (e.lo = (e.lo | ((this.buf[this.pos++] & 127) << (o * 7))) >>> 0), e
        );
      }
      if (this.len - this.pos > 4) {
        for (; o < 5; ++o)
          if (
            ((e.hi =
              (e.hi | ((this.buf[this.pos] & 127) << (o * 7 + 3))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return e;
      } else
        for (; o < 5; ++o) {
          if (this.pos >= this.len) throw ie(this);
          if (
            ((e.hi =
              (e.hi | ((this.buf[this.pos] & 127) << (o * 7 + 3))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return e;
        }
      throw Error("invalid varint encoding");
    }
    q.prototype.bool = function () {
      return this.uint32() !== 0;
    };
    function Ot(e, o) {
      return (
        (e[o - 4] | (e[o - 3] << 8) | (e[o - 2] << 16) | (e[o - 1] << 24)) >>> 0
      );
    }
    q.prototype.fixed32 = function () {
      if (this.pos + 4 > this.len) throw ie(this, 4);
      return Ot(this.buf, (this.pos += 4));
    };
    q.prototype.sfixed32 = function () {
      if (this.pos + 4 > this.len) throw ie(this, 4);
      return Ot(this.buf, (this.pos += 4)) | 0;
    };
    function mo() {
      if (this.pos + 8 > this.len) throw ie(this, 8);
      return new vo(
        Ot(this.buf, (this.pos += 4)),
        Ot(this.buf, (this.pos += 4))
      );
    }
    q.prototype.float = function () {
      if (this.pos + 4 > this.len) throw ie(this, 4);
      var o = fe.float.readFloatLE(this.buf, this.pos);
      return (this.pos += 4), o;
    };
    q.prototype.double = function () {
      if (this.pos + 8 > this.len) throw ie(this, 4);
      var o = fe.float.readDoubleLE(this.buf, this.pos);
      return (this.pos += 8), o;
    };
    q.prototype.bytes = function () {
      var o = this.uint32(),
        n = this.pos,
        r = this.pos + o;
      if (r > this.len) throw ie(this, o);
      return (
        (this.pos += o),
        Array.isArray(this.buf)
          ? this.buf.slice(n, r)
          : n === r
          ? new this.buf.constructor(0)
          : this._slice.call(this.buf, n, r)
      );
    };
    q.prototype.string = function () {
      var o = this.bytes();
      return tc.read(o, 0, o.length);
    };
    q.prototype.skip = function (o) {
      if (typeof o == "number") {
        if (this.pos + o > this.len) throw ie(this, o);
        this.pos += o;
      } else
        do if (this.pos >= this.len) throw ie(this);
        while (this.buf[this.pos++] & 128);
      return this;
    };
    q.prototype.skipType = function (e) {
      switch (e) {
        case 0:
          this.skip();
          break;
        case 1:
          this.skip(8);
          break;
        case 2:
          this.skip(this.uint32());
          break;
        case 3:
          for (; (e = this.uint32() & 7) !== 4; ) this.skipType(e);
          break;
        case 5:
          this.skip(4);
          break;
        default:
          throw Error("invalid wire type " + e + " at offset " + this.pos);
      }
      return this;
    };
    q._configure = function (e) {
      (_n = e), (q.create = xo()), _n._configure();
      var o = fe.Long ? "toLong" : "toNumber";
      fe.merge(q.prototype, {
        int64: function () {
          return hn.call(this)[o](!1);
        },
        uint64: function () {
          return hn.call(this)[o](!0);
        },
        sint64: function () {
          return hn.call(this).zzDecode()[o](!1);
        },
        fixed64: function () {
          return mo.call(this)[o](!0);
        },
        sfixed64: function () {
          return mo.call(this)[o](!1);
        },
      });
    };
  });
  var To = j((yc, Mo) => {
    "use strict";
    Mo.exports = Ie;
    var Oo = gn();
    (Ie.prototype = Object.create(Oo.prototype)).constructor = Ie;
    var ko = me();
    function Ie(e) {
      Oo.call(this, e);
    }
    Ie._configure = function () {
      ko.Buffer && (Ie.prototype._slice = ko.Buffer.prototype.slice);
    };
    Ie.prototype.string = function () {
      var o = this.uint32();
      return this.buf.utf8Slice
        ? this.buf.utf8Slice(
            this.pos,
            (this.pos = Math.min(this.pos + o, this.len))
          )
        : this.buf.toString(
            "utf-8",
            this.pos,
            (this.pos = Math.min(this.pos + o, this.len))
          );
    };
    Ie._configure();
  });
  var Eo = j((mc, Bo) => {
    "use strict";
    Bo.exports = ft;
    var pn = me();
    (ft.prototype = Object.create(pn.EventEmitter.prototype)).constructor = ft;
    function ft(e, o, n) {
      if (typeof e != "function") throw TypeError("rpcImpl must be a function");
      pn.EventEmitter.call(this),
        (this.rpcImpl = e),
        (this.requestDelimited = !!o),
        (this.responseDelimited = !!n);
    }
    ft.prototype.rpcCall = function e(o, n, r, t, i) {
      if (!t) throw TypeError("request must be specified");
      var l = this;
      if (!i) return pn.asPromise(e, l, o, n, r, t);
      if (!l.rpcImpl) {
        setTimeout(function () {
          i(Error("already ended"));
        }, 0);
        return;
      }
      try {
        return l.rpcImpl(
          o,
          n[l.requestDelimited ? "encodeDelimited" : "encode"](t).finish(),
          function (f, c) {
            if (f) return l.emit("error", f, o), i(f);
            if (c === null) {
              l.end(!0);
              return;
            }
            if (!(c instanceof r))
              try {
                c = r[l.responseDelimited ? "decodeDelimited" : "decode"](c);
              } catch (u) {
                return l.emit("error", u, o), i(u);
              }
            return l.emit("data", c, o), i(null, c);
          }
        );
      } catch (a) {
        l.emit("error", a, o),
          setTimeout(function () {
            i(a);
          }, 0);
        return;
      }
    };
    ft.prototype.end = function (o) {
      return (
        this.rpcImpl &&
          (o || this.rpcImpl(null, null, null),
          (this.rpcImpl = null),
          this.emit("end").off()),
        this
      );
    };
  });
  var Io = j((Do) => {
    "use strict";
    var nc = Do;
    nc.Service = Eo();
  });
  var Ao = j((xc, Co) => {
    "use strict";
    Co.exports = {};
  });
  var Lo = j((Ro) => {
    "use strict";
    var V = Ro;
    V.build = "minimal";
    V.Writer = dn();
    V.BufferWriter = wo();
    V.Reader = gn();
    V.BufferReader = To();
    V.util = me();
    V.rpc = Io();
    V.roots = Ao();
    V.configure = No;
    function No() {
      V.util._configure(),
        V.Writer._configure(V.BufferWriter),
        V.Reader._configure(V.BufferReader);
    }
    No();
  });
  var qo = j((kc, zo) => {
    "use strict";
    zo.exports = Lo();
  });
  function qe(e) {
    let o = e.length;
    for (; --o >= 0; ) e[o] = 0;
  }
  var Yo = 0,
    oi = 1,
    Qo = 2,
    er = 3,
    tr = 258,
    Wt = 29,
    it = 256,
    We = it + 1 + Wt,
    Re = 30,
    Kt = 19,
    ri = 2 * We + 1,
    xe = 15,
    Mt = 16,
    nr = 7,
    Xt = 256,
    li = 16,
    ai = 17,
    ci = 18,
    Gt = new Uint8Array([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0,
    ]),
    gt = new Uint8Array([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13,
    ]),
    ir = new Uint8Array([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
    ]),
    fi = new Uint8Array([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    or = 512,
    de = new Array((We + 2) * 2);
  qe(de);
  var He = new Array(Re * 2);
  qe(He);
  var Ke = new Array(or);
  qe(Ke);
  var Xe = new Array(tr - er + 1);
  qe(Xe);
  var Yt = new Array(Wt);
  qe(Yt);
  var pt = new Array(Re);
  qe(pt);
  function Tt(e, o, n, r, t) {
    (this.static_tree = e),
      (this.extra_bits = o),
      (this.extra_base = n),
      (this.elems = r),
      (this.max_length = t),
      (this.has_stree = e && e.length);
  }
  var ui, si, di;
  function Bt(e, o) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = o);
  }
  var hi = (e) => (e < 256 ? Ke[e] : Ke[256 + (e >>> 7)]),
    Ye = (e, o) => {
      (e.pending_buf[e.pending++] = o & 255),
        (e.pending_buf[e.pending++] = (o >>> 8) & 255);
    },
    H = (e, o, n) => {
      e.bi_valid > Mt - n
        ? ((e.bi_buf |= (o << e.bi_valid) & 65535),
          Ye(e, e.bi_buf),
          (e.bi_buf = o >> (Mt - e.bi_valid)),
          (e.bi_valid += n - Mt))
        : ((e.bi_buf |= (o << e.bi_valid) & 65535), (e.bi_valid += n));
    },
    re = (e, o, n) => {
      H(e, n[o * 2], n[o * 2 + 1]);
    },
    _i = (e, o) => {
      let n = 0;
      do (n |= e & 1), (e >>>= 1), (n <<= 1);
      while (--o > 0);
      return n >>> 1;
    },
    rr = (e) => {
      e.bi_valid === 16
        ? (Ye(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
        : e.bi_valid >= 8 &&
          ((e.pending_buf[e.pending++] = e.bi_buf & 255),
          (e.bi_buf >>= 8),
          (e.bi_valid -= 8));
    },
    lr = (e, o) => {
      let n = o.dyn_tree,
        r = o.max_code,
        t = o.stat_desc.static_tree,
        i = o.stat_desc.has_stree,
        l = o.stat_desc.extra_bits,
        a = o.stat_desc.extra_base,
        f = o.stat_desc.max_length,
        c,
        u,
        k,
        _,
        h,
        O,
        R = 0;
      for (_ = 0; _ <= xe; _++) e.bl_count[_] = 0;
      for (n[e.heap[e.heap_max] * 2 + 1] = 0, c = e.heap_max + 1; c < ri; c++)
        (u = e.heap[c]),
          (_ = n[n[u * 2 + 1] * 2 + 1] + 1),
          _ > f && ((_ = f), R++),
          (n[u * 2 + 1] = _),
          !(u > r) &&
            (e.bl_count[_]++,
            (h = 0),
            u >= a && (h = l[u - a]),
            (O = n[u * 2]),
            (e.opt_len += O * (_ + h)),
            i && (e.static_len += O * (t[u * 2 + 1] + h)));
      if (R !== 0) {
        do {
          for (_ = f - 1; e.bl_count[_] === 0; ) _--;
          e.bl_count[_]--, (e.bl_count[_ + 1] += 2), e.bl_count[f]--, (R -= 2);
        } while (R > 0);
        for (_ = f; _ !== 0; _--)
          for (u = e.bl_count[_]; u !== 0; )
            (k = e.heap[--c]),
              !(k > r) &&
                (n[k * 2 + 1] !== _ &&
                  ((e.opt_len += (_ - n[k * 2 + 1]) * n[k * 2]),
                  (n[k * 2 + 1] = _)),
                u--);
      }
    },
    gi = (e, o, n) => {
      let r = new Array(xe + 1),
        t = 0,
        i,
        l;
      for (i = 1; i <= xe; i++) (t = (t + n[i - 1]) << 1), (r[i] = t);
      for (l = 0; l <= o; l++) {
        let a = e[l * 2 + 1];
        a !== 0 && (e[l * 2] = _i(r[a]++, a));
      }
    },
    ar = () => {
      let e,
        o,
        n,
        r,
        t,
        i = new Array(xe + 1);
      for (n = 0, r = 0; r < Wt - 1; r++)
        for (Yt[r] = n, e = 0; e < 1 << Gt[r]; e++) Xe[n++] = r;
      for (Xe[n - 1] = r, t = 0, r = 0; r < 16; r++)
        for (pt[r] = t, e = 0; e < 1 << gt[r]; e++) Ke[t++] = r;
      for (t >>= 7; r < Re; r++)
        for (pt[r] = t << 7, e = 0; e < 1 << (gt[r] - 7); e++)
          Ke[256 + t++] = r;
      for (o = 0; o <= xe; o++) i[o] = 0;
      for (e = 0; e <= 143; ) (de[e * 2 + 1] = 8), e++, i[8]++;
      for (; e <= 255; ) (de[e * 2 + 1] = 9), e++, i[9]++;
      for (; e <= 279; ) (de[e * 2 + 1] = 7), e++, i[7]++;
      for (; e <= 287; ) (de[e * 2 + 1] = 8), e++, i[8]++;
      for (gi(de, We + 1, i), e = 0; e < Re; e++)
        (He[e * 2 + 1] = 5), (He[e * 2] = _i(e, 5));
      (ui = new Tt(de, Gt, it + 1, We, xe)),
        (si = new Tt(He, gt, 0, Re, xe)),
        (di = new Tt(new Array(0), ir, 0, Kt, nr));
    },
    pi = (e) => {
      let o;
      for (o = 0; o < We; o++) e.dyn_ltree[o * 2] = 0;
      for (o = 0; o < Re; o++) e.dyn_dtree[o * 2] = 0;
      for (o = 0; o < Kt; o++) e.bl_tree[o * 2] = 0;
      (e.dyn_ltree[Xt * 2] = 1),
        (e.opt_len = e.static_len = 0),
        (e.sym_next = e.matches = 0);
    },
    bi = (e) => {
      e.bi_valid > 8
        ? Ye(e, e.bi_buf)
        : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
        (e.bi_buf = 0),
        (e.bi_valid = 0);
    },
    mn = (e, o, n, r) => {
      let t = o * 2,
        i = n * 2;
      return e[t] < e[i] || (e[t] === e[i] && r[o] <= r[n]);
    },
    Et = (e, o, n) => {
      let r = e.heap[n],
        t = n << 1;
      for (
        ;
        t <= e.heap_len &&
        (t < e.heap_len && mn(o, e.heap[t + 1], e.heap[t], e.depth) && t++,
        !mn(o, r, e.heap[t], e.depth));

      )
        (e.heap[n] = e.heap[t]), (n = t), (t <<= 1);
      e.heap[n] = r;
    },
    vn = (e, o, n) => {
      let r,
        t,
        i = 0,
        l,
        a;
      if (e.sym_next !== 0)
        do
          (r = e.pending_buf[e.sym_buf + i++] & 255),
            (r += (e.pending_buf[e.sym_buf + i++] & 255) << 8),
            (t = e.pending_buf[e.sym_buf + i++]),
            r === 0
              ? re(e, t, o)
              : ((l = Xe[t]),
                re(e, l + it + 1, o),
                (a = Gt[l]),
                a !== 0 && ((t -= Yt[l]), H(e, t, a)),
                r--,
                (l = hi(r)),
                re(e, l, n),
                (a = gt[l]),
                a !== 0 && ((r -= pt[l]), H(e, r, a)));
        while (i < e.sym_next);
      re(e, Xt, o);
    },
    Pt = (e, o) => {
      let n = o.dyn_tree,
        r = o.stat_desc.static_tree,
        t = o.stat_desc.has_stree,
        i = o.stat_desc.elems,
        l,
        a,
        f = -1,
        c;
      for (e.heap_len = 0, e.heap_max = ri, l = 0; l < i; l++)
        n[l * 2] !== 0
          ? ((e.heap[++e.heap_len] = f = l), (e.depth[l] = 0))
          : (n[l * 2 + 1] = 0);
      for (; e.heap_len < 2; )
        (c = e.heap[++e.heap_len] = f < 2 ? ++f : 0),
          (n[c * 2] = 1),
          (e.depth[c] = 0),
          e.opt_len--,
          t && (e.static_len -= r[c * 2 + 1]);
      for (o.max_code = f, l = e.heap_len >> 1; l >= 1; l--) Et(e, n, l);
      c = i;
      do
        (l = e.heap[1]),
          (e.heap[1] = e.heap[e.heap_len--]),
          Et(e, n, 1),
          (a = e.heap[1]),
          (e.heap[--e.heap_max] = l),
          (e.heap[--e.heap_max] = a),
          (n[c * 2] = n[l * 2] + n[a * 2]),
          (e.depth[c] =
            (e.depth[l] >= e.depth[a] ? e.depth[l] : e.depth[a]) + 1),
          (n[l * 2 + 1] = n[a * 2 + 1] = c),
          (e.heap[1] = c++),
          Et(e, n, 1);
      while (e.heap_len >= 2);
      (e.heap[--e.heap_max] = e.heap[1]), lr(e, o), gi(n, f, e.bl_count);
    },
    xn = (e, o, n) => {
      let r,
        t = -1,
        i,
        l = o[0 * 2 + 1],
        a = 0,
        f = 7,
        c = 4;
      for (
        l === 0 && ((f = 138), (c = 3)), o[(n + 1) * 2 + 1] = 65535, r = 0;
        r <= n;
        r++
      )
        (i = l),
          (l = o[(r + 1) * 2 + 1]),
          !(++a < f && i === l) &&
            (a < c
              ? (e.bl_tree[i * 2] += a)
              : i !== 0
              ? (i !== t && e.bl_tree[i * 2]++, e.bl_tree[li * 2]++)
              : a <= 10
              ? e.bl_tree[ai * 2]++
              : e.bl_tree[ci * 2]++,
            (a = 0),
            (t = i),
            l === 0
              ? ((f = 138), (c = 3))
              : i === l
              ? ((f = 6), (c = 3))
              : ((f = 7), (c = 4)));
    },
    Sn = (e, o, n) => {
      let r,
        t = -1,
        i,
        l = o[0 * 2 + 1],
        a = 0,
        f = 7,
        c = 4;
      for (l === 0 && ((f = 138), (c = 3)), r = 0; r <= n; r++)
        if (((i = l), (l = o[(r + 1) * 2 + 1]), !(++a < f && i === l))) {
          if (a < c)
            do re(e, i, e.bl_tree);
            while (--a !== 0);
          else
            i !== 0
              ? (i !== t && (re(e, i, e.bl_tree), a--),
                re(e, li, e.bl_tree),
                H(e, a - 3, 2))
              : a <= 10
              ? (re(e, ai, e.bl_tree), H(e, a - 3, 3))
              : (re(e, ci, e.bl_tree), H(e, a - 11, 7));
          (a = 0),
            (t = i),
            l === 0
              ? ((f = 138), (c = 3))
              : i === l
              ? ((f = 6), (c = 3))
              : ((f = 7), (c = 4));
        }
    },
    cr = (e) => {
      let o;
      for (
        xn(e, e.dyn_ltree, e.l_desc.max_code),
          xn(e, e.dyn_dtree, e.d_desc.max_code),
          Pt(e, e.bl_desc),
          o = Kt - 1;
        o >= 3 && e.bl_tree[fi[o] * 2 + 1] === 0;
        o--
      );
      return (e.opt_len += 3 * (o + 1) + 5 + 5 + 4), o;
    },
    fr = (e, o, n, r) => {
      let t;
      for (H(e, o - 257, 5), H(e, n - 1, 5), H(e, r - 4, 4), t = 0; t < r; t++)
        H(e, e.bl_tree[fi[t] * 2 + 1], 3);
      Sn(e, e.dyn_ltree, o - 1), Sn(e, e.dyn_dtree, n - 1);
    },
    ur = (e) => {
      let o = 4093624447,
        n;
      for (n = 0; n <= 31; n++, o >>>= 1)
        if (o & 1 && e.dyn_ltree[n * 2] !== 0) return 0;
      if (
        e.dyn_ltree[9 * 2] !== 0 ||
        e.dyn_ltree[10 * 2] !== 0 ||
        e.dyn_ltree[13 * 2] !== 0
      )
        return 1;
      for (n = 32; n < it; n++) if (e.dyn_ltree[n * 2] !== 0) return 1;
      return 0;
    },
    kn = !1,
    sr = (e) => {
      kn || (ar(), (kn = !0)),
        (e.l_desc = new Bt(e.dyn_ltree, ui)),
        (e.d_desc = new Bt(e.dyn_dtree, si)),
        (e.bl_desc = new Bt(e.bl_tree, di)),
        (e.bi_buf = 0),
        (e.bi_valid = 0),
        pi(e);
    },
    wi = (e, o, n, r) => {
      H(e, (Yo << 1) + (r ? 1 : 0), 3),
        bi(e),
        Ye(e, n),
        Ye(e, ~n),
        n && e.pending_buf.set(e.window.subarray(o, o + n), e.pending),
        (e.pending += n);
    },
    dr = (e) => {
      H(e, oi << 1, 3), re(e, Xt, de), rr(e);
    },
    hr = (e, o, n, r) => {
      let t,
        i,
        l = 0;
      e.level > 0
        ? (e.strm.data_type === 2 && (e.strm.data_type = ur(e)),
          Pt(e, e.l_desc),
          Pt(e, e.d_desc),
          (l = cr(e)),
          (t = (e.opt_len + 3 + 7) >>> 3),
          (i = (e.static_len + 3 + 7) >>> 3),
          i <= t && (t = i))
        : (t = i = n + 5),
        n + 4 <= t && o !== -1
          ? wi(e, o, n, r)
          : e.strategy === 4 || i === t
          ? (H(e, (oi << 1) + (r ? 1 : 0), 3), vn(e, de, He))
          : (H(e, (Qo << 1) + (r ? 1 : 0), 3),
            fr(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, l + 1),
            vn(e, e.dyn_ltree, e.dyn_dtree)),
        pi(e),
        r && bi(e);
    },
    _r = (e, o, n) => (
      (e.pending_buf[e.sym_buf + e.sym_next++] = o),
      (e.pending_buf[e.sym_buf + e.sym_next++] = o >> 8),
      (e.pending_buf[e.sym_buf + e.sym_next++] = n),
      o === 0
        ? e.dyn_ltree[n * 2]++
        : (e.matches++,
          o--,
          e.dyn_ltree[(Xe[n] + it + 1) * 2]++,
          e.dyn_dtree[hi(o) * 2]++),
      e.sym_next === e.sym_end
    ),
    gr = sr,
    pr = wi,
    br = hr,
    wr = _r,
    yr = dr,
    mr = {
      _tr_init: gr,
      _tr_stored_block: pr,
      _tr_flush_block: br,
      _tr_tally: wr,
      _tr_align: yr,
    },
    vr = (e, o, n, r) => {
      let t = (e & 65535) | 0,
        i = ((e >>> 16) & 65535) | 0,
        l = 0;
      for (; n !== 0; ) {
        (l = n > 2e3 ? 2e3 : n), (n -= l);
        do (t = (t + o[r++]) | 0), (i = (i + t) | 0);
        while (--l);
        (t %= 65521), (i %= 65521);
      }
      return t | (i << 16) | 0;
    },
    Qe = vr,
    xr = () => {
      let e,
        o = [];
      for (var n = 0; n < 256; n++) {
        e = n;
        for (var r = 0; r < 8; r++)
          e = e & 1 ? 3988292384 ^ (e >>> 1) : e >>> 1;
        o[n] = e;
      }
      return o;
    },
    Sr = new Uint32Array(xr()),
    kr = (e, o, n, r) => {
      let t = Sr,
        i = r + n;
      e ^= -1;
      for (let l = r; l < i; l++) e = (e >>> 8) ^ t[(e ^ o[l]) & 255];
      return e ^ -1;
    },
    G = kr,
    Oe = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version",
    },
    Be = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8,
    },
    {
      _tr_init: Or,
      _tr_stored_block: $t,
      _tr_flush_block: Mr,
      _tr_tally: pe,
      _tr_align: Tr,
    } = mr,
    {
      Z_NO_FLUSH: be,
      Z_PARTIAL_FLUSH: Br,
      Z_FULL_FLUSH: Er,
      Z_FINISH: Q,
      Z_BLOCK: On,
      Z_OK: Z,
      Z_STREAM_END: Mn,
      Z_STREAM_ERROR: le,
      Z_DATA_ERROR: Dr,
      Z_BUF_ERROR: Dt,
      Z_DEFAULT_COMPRESSION: Ir,
      Z_FILTERED: Cr,
      Z_HUFFMAN_ONLY: ut,
      Z_RLE: Ar,
      Z_FIXED: Nr,
      Z_DEFAULT_STRATEGY: Rr,
      Z_UNKNOWN: Lr,
      Z_DEFLATED: yt,
    } = Be,
    zr = 9,
    qr = 15,
    jr = 8,
    Gr = 29,
    Pr = 256,
    Zt = Pr + 1 + Gr,
    $r = 30,
    Zr = 19,
    Ur = 2 * Zt + 1,
    Fr = 15,
    D = 3,
    ge = 258,
    ae = ge + D + 1,
    Hr = 32,
    Le = 42,
    Qt = 57,
    Ut = 69,
    Ft = 73,
    Ht = 91,
    Vt = 103,
    Se = 113,
    Ue = 666,
    U = 1,
    je = 2,
    Me = 3,
    Ge = 4,
    Vr = 3,
    ke = (e, o) => ((e.msg = Oe[o]), o),
    Tn = (e) => e * 2 - (e > 4 ? 9 : 0),
    _e = (e) => {
      let o = e.length;
      for (; --o >= 0; ) e[o] = 0;
    },
    Jr = (e) => {
      let o,
        n,
        r,
        t = e.w_size;
      (o = e.hash_size), (r = o);
      do (n = e.head[--r]), (e.head[r] = n >= t ? n - t : 0);
      while (--o);
      (o = t), (r = o);
      do (n = e.prev[--r]), (e.prev[r] = n >= t ? n - t : 0);
      while (--o);
    },
    Wr = (e, o, n) => ((o << e.hash_shift) ^ n) & e.hash_mask,
    we = Wr,
    K = (e) => {
      let o = e.state,
        n = o.pending;
      n > e.avail_out && (n = e.avail_out),
        n !== 0 &&
          (e.output.set(
            o.pending_buf.subarray(o.pending_out, o.pending_out + n),
            e.next_out
          ),
          (e.next_out += n),
          (o.pending_out += n),
          (e.total_out += n),
          (e.avail_out -= n),
          (o.pending -= n),
          o.pending === 0 && (o.pending_out = 0));
    },
    X = (e, o) => {
      Mr(
        e,
        e.block_start >= 0 ? e.block_start : -1,
        e.strstart - e.block_start,
        o
      ),
        (e.block_start = e.strstart),
        K(e.strm);
    },
    A = (e, o) => {
      e.pending_buf[e.pending++] = o;
    },
    Ze = (e, o) => {
      (e.pending_buf[e.pending++] = (o >>> 8) & 255),
        (e.pending_buf[e.pending++] = o & 255);
    },
    Jt = (e, o, n, r) => {
      let t = e.avail_in;
      return (
        t > r && (t = r),
        t === 0
          ? 0
          : ((e.avail_in -= t),
            o.set(e.input.subarray(e.next_in, e.next_in + t), n),
            e.state.wrap === 1
              ? (e.adler = Qe(e.adler, o, t, n))
              : e.state.wrap === 2 && (e.adler = G(e.adler, o, t, n)),
            (e.next_in += t),
            (e.total_in += t),
            t)
      );
    },
    yi = (e, o) => {
      let n = e.max_chain_length,
        r = e.strstart,
        t,
        i,
        l = e.prev_length,
        a = e.nice_match,
        f = e.strstart > e.w_size - ae ? e.strstart - (e.w_size - ae) : 0,
        c = e.window,
        u = e.w_mask,
        k = e.prev,
        _ = e.strstart + ge,
        h = c[r + l - 1],
        O = c[r + l];
      e.prev_length >= e.good_match && (n >>= 2),
        a > e.lookahead && (a = e.lookahead);
      do
        if (
          ((t = o),
          !(
            c[t + l] !== O ||
            c[t + l - 1] !== h ||
            c[t] !== c[r] ||
            c[++t] !== c[r + 1]
          ))
        ) {
          (r += 2), t++;
          do;
          while (
            c[++r] === c[++t] &&
            c[++r] === c[++t] &&
            c[++r] === c[++t] &&
            c[++r] === c[++t] &&
            c[++r] === c[++t] &&
            c[++r] === c[++t] &&
            c[++r] === c[++t] &&
            c[++r] === c[++t] &&
            r < _
          );
          if (((i = ge - (_ - r)), (r = _ - ge), i > l)) {
            if (((e.match_start = o), (l = i), i >= a)) break;
            (h = c[r + l - 1]), (O = c[r + l]);
          }
        }
      while ((o = k[o & u]) > f && --n !== 0);
      return l <= e.lookahead ? l : e.lookahead;
    },
    ze = (e) => {
      let o = e.w_size,
        n,
        r,
        t;
      do {
        if (
          ((r = e.window_size - e.lookahead - e.strstart),
          e.strstart >= o + (o - ae) &&
            (e.window.set(e.window.subarray(o, o + o - r), 0),
            (e.match_start -= o),
            (e.strstart -= o),
            (e.block_start -= o),
            e.insert > e.strstart && (e.insert = e.strstart),
            Jr(e),
            (r += o)),
          e.strm.avail_in === 0)
        )
          break;
        if (
          ((n = Jt(e.strm, e.window, e.strstart + e.lookahead, r)),
          (e.lookahead += n),
          e.lookahead + e.insert >= D)
        )
          for (
            t = e.strstart - e.insert,
              e.ins_h = e.window[t],
              e.ins_h = we(e, e.ins_h, e.window[t + 1]);
            e.insert &&
            ((e.ins_h = we(e, e.ins_h, e.window[t + D - 1])),
            (e.prev[t & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = t),
            t++,
            e.insert--,
            !(e.lookahead + e.insert < D));

          );
      } while (e.lookahead < ae && e.strm.avail_in !== 0);
    },
    mi = (e, o) => {
      let n =
          e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5,
        r,
        t,
        i,
        l = 0,
        a = e.strm.avail_in;
      do {
        if (
          ((r = 65535),
          (i = (e.bi_valid + 42) >> 3),
          e.strm.avail_out < i ||
            ((i = e.strm.avail_out - i),
            (t = e.strstart - e.block_start),
            r > t + e.strm.avail_in && (r = t + e.strm.avail_in),
            r > i && (r = i),
            r < n &&
              ((r === 0 && o !== Q) || o === be || r !== t + e.strm.avail_in)))
        )
          break;
        (l = o === Q && r === t + e.strm.avail_in ? 1 : 0),
          $t(e, 0, 0, l),
          (e.pending_buf[e.pending - 4] = r),
          (e.pending_buf[e.pending - 3] = r >> 8),
          (e.pending_buf[e.pending - 2] = ~r),
          (e.pending_buf[e.pending - 1] = ~r >> 8),
          K(e.strm),
          t &&
            (t > r && (t = r),
            e.strm.output.set(
              e.window.subarray(e.block_start, e.block_start + t),
              e.strm.next_out
            ),
            (e.strm.next_out += t),
            (e.strm.avail_out -= t),
            (e.strm.total_out += t),
            (e.block_start += t),
            (r -= t)),
          r &&
            (Jt(e.strm, e.strm.output, e.strm.next_out, r),
            (e.strm.next_out += r),
            (e.strm.avail_out -= r),
            (e.strm.total_out += r));
      } while (l === 0);
      return (
        (a -= e.strm.avail_in),
        a &&
          (a >= e.w_size
            ? ((e.matches = 2),
              e.window.set(
                e.strm.input.subarray(
                  e.strm.next_in - e.w_size,
                  e.strm.next_in
                ),
                0
              ),
              (e.strstart = e.w_size),
              (e.insert = e.strstart))
            : (e.window_size - e.strstart <= a &&
                ((e.strstart -= e.w_size),
                e.window.set(
                  e.window.subarray(e.w_size, e.w_size + e.strstart),
                  0
                ),
                e.matches < 2 && e.matches++,
                e.insert > e.strstart && (e.insert = e.strstart)),
              e.window.set(
                e.strm.input.subarray(e.strm.next_in - a, e.strm.next_in),
                e.strstart
              ),
              (e.strstart += a),
              (e.insert += a > e.w_size - e.insert ? e.w_size - e.insert : a)),
          (e.block_start = e.strstart)),
        e.high_water < e.strstart && (e.high_water = e.strstart),
        l
          ? Ge
          : o !== be &&
            o !== Q &&
            e.strm.avail_in === 0 &&
            e.strstart === e.block_start
          ? je
          : ((i = e.window_size - e.strstart),
            e.strm.avail_in > i &&
              e.block_start >= e.w_size &&
              ((e.block_start -= e.w_size),
              (e.strstart -= e.w_size),
              e.window.set(
                e.window.subarray(e.w_size, e.w_size + e.strstart),
                0
              ),
              e.matches < 2 && e.matches++,
              (i += e.w_size),
              e.insert > e.strstart && (e.insert = e.strstart)),
            i > e.strm.avail_in && (i = e.strm.avail_in),
            i &&
              (Jt(e.strm, e.window, e.strstart, i),
              (e.strstart += i),
              (e.insert += i > e.w_size - e.insert ? e.w_size - e.insert : i)),
            e.high_water < e.strstart && (e.high_water = e.strstart),
            (i = (e.bi_valid + 42) >> 3),
            (i =
              e.pending_buf_size - i > 65535 ? 65535 : e.pending_buf_size - i),
            (n = i > e.w_size ? e.w_size : i),
            (t = e.strstart - e.block_start),
            (t >= n ||
              ((t || o === Q) &&
                o !== be &&
                e.strm.avail_in === 0 &&
                t <= i)) &&
              ((r = t > i ? i : t),
              (l = o === Q && e.strm.avail_in === 0 && r === t ? 1 : 0),
              $t(e, e.block_start, r, l),
              (e.block_start += r),
              K(e.strm)),
            l ? Me : U)
      );
    },
    It = (e, o) => {
      let n, r;
      for (;;) {
        if (e.lookahead < ae) {
          if ((ze(e), e.lookahead < ae && o === be)) return U;
          if (e.lookahead === 0) break;
        }
        if (
          ((n = 0),
          e.lookahead >= D &&
            ((e.ins_h = we(e, e.ins_h, e.window[e.strstart + D - 1])),
            (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = e.strstart)),
          n !== 0 &&
            e.strstart - n <= e.w_size - ae &&
            (e.match_length = yi(e, n)),
          e.match_length >= D)
        )
          if (
            ((r = pe(e, e.strstart - e.match_start, e.match_length - D)),
            (e.lookahead -= e.match_length),
            e.match_length <= e.max_lazy_match && e.lookahead >= D)
          ) {
            e.match_length--;
            do
              e.strstart++,
                (e.ins_h = we(e, e.ins_h, e.window[e.strstart + D - 1])),
                (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = e.strstart);
            while (--e.match_length !== 0);
            e.strstart++;
          } else
            (e.strstart += e.match_length),
              (e.match_length = 0),
              (e.ins_h = e.window[e.strstart]),
              (e.ins_h = we(e, e.ins_h, e.window[e.strstart + 1]));
        else (r = pe(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++;
        if (r && (X(e, !1), e.strm.avail_out === 0)) return U;
      }
      return (
        (e.insert = e.strstart < D - 1 ? e.strstart : D - 1),
        o === Q
          ? (X(e, !0), e.strm.avail_out === 0 ? Me : Ge)
          : e.sym_next && (X(e, !1), e.strm.avail_out === 0)
          ? U
          : je
      );
    },
    Ae = (e, o) => {
      let n, r, t;
      for (;;) {
        if (e.lookahead < ae) {
          if ((ze(e), e.lookahead < ae && o === be)) return U;
          if (e.lookahead === 0) break;
        }
        if (
          ((n = 0),
          e.lookahead >= D &&
            ((e.ins_h = we(e, e.ins_h, e.window[e.strstart + D - 1])),
            (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = e.strstart)),
          (e.prev_length = e.match_length),
          (e.prev_match = e.match_start),
          (e.match_length = D - 1),
          n !== 0 &&
            e.prev_length < e.max_lazy_match &&
            e.strstart - n <= e.w_size - ae &&
            ((e.match_length = yi(e, n)),
            e.match_length <= 5 &&
              (e.strategy === Cr ||
                (e.match_length === D && e.strstart - e.match_start > 4096)) &&
              (e.match_length = D - 1)),
          e.prev_length >= D && e.match_length <= e.prev_length)
        ) {
          (t = e.strstart + e.lookahead - D),
            (r = pe(e, e.strstart - 1 - e.prev_match, e.prev_length - D)),
            (e.lookahead -= e.prev_length - 1),
            (e.prev_length -= 2);
          do
            ++e.strstart <= t &&
              ((e.ins_h = we(e, e.ins_h, e.window[e.strstart + D - 1])),
              (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart));
          while (--e.prev_length !== 0);
          if (
            ((e.match_available = 0),
            (e.match_length = D - 1),
            e.strstart++,
            r && (X(e, !1), e.strm.avail_out === 0))
          )
            return U;
        } else if (e.match_available) {
          if (
            ((r = pe(e, 0, e.window[e.strstart - 1])),
            r && X(e, !1),
            e.strstart++,
            e.lookahead--,
            e.strm.avail_out === 0)
          )
            return U;
        } else (e.match_available = 1), e.strstart++, e.lookahead--;
      }
      return (
        e.match_available &&
          ((r = pe(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)),
        (e.insert = e.strstart < D - 1 ? e.strstart : D - 1),
        o === Q
          ? (X(e, !0), e.strm.avail_out === 0 ? Me : Ge)
          : e.sym_next && (X(e, !1), e.strm.avail_out === 0)
          ? U
          : je
      );
    },
    Kr = (e, o) => {
      let n,
        r,
        t,
        i,
        l = e.window;
      for (;;) {
        if (e.lookahead <= ge) {
          if ((ze(e), e.lookahead <= ge && o === be)) return U;
          if (e.lookahead === 0) break;
        }
        if (
          ((e.match_length = 0),
          e.lookahead >= D &&
            e.strstart > 0 &&
            ((t = e.strstart - 1),
            (r = l[t]),
            r === l[++t] && r === l[++t] && r === l[++t]))
        ) {
          i = e.strstart + ge;
          do;
          while (
            r === l[++t] &&
            r === l[++t] &&
            r === l[++t] &&
            r === l[++t] &&
            r === l[++t] &&
            r === l[++t] &&
            r === l[++t] &&
            r === l[++t] &&
            t < i
          );
          (e.match_length = ge - (i - t)),
            e.match_length > e.lookahead && (e.match_length = e.lookahead);
        }
        if (
          (e.match_length >= D
            ? ((n = pe(e, 1, e.match_length - D)),
              (e.lookahead -= e.match_length),
              (e.strstart += e.match_length),
              (e.match_length = 0))
            : ((n = pe(e, 0, e.window[e.strstart])),
              e.lookahead--,
              e.strstart++),
          n && (X(e, !1), e.strm.avail_out === 0))
        )
          return U;
      }
      return (
        (e.insert = 0),
        o === Q
          ? (X(e, !0), e.strm.avail_out === 0 ? Me : Ge)
          : e.sym_next && (X(e, !1), e.strm.avail_out === 0)
          ? U
          : je
      );
    },
    Xr = (e, o) => {
      let n;
      for (;;) {
        if (e.lookahead === 0 && (ze(e), e.lookahead === 0)) {
          if (o === be) return U;
          break;
        }
        if (
          ((e.match_length = 0),
          (n = pe(e, 0, e.window[e.strstart])),
          e.lookahead--,
          e.strstart++,
          n && (X(e, !1), e.strm.avail_out === 0))
        )
          return U;
      }
      return (
        (e.insert = 0),
        o === Q
          ? (X(e, !0), e.strm.avail_out === 0 ? Me : Ge)
          : e.sym_next && (X(e, !1), e.strm.avail_out === 0)
          ? U
          : je
      );
    };
  function oe(e, o, n, r, t) {
    (this.good_length = e),
      (this.max_lazy = o),
      (this.nice_length = n),
      (this.max_chain = r),
      (this.func = t);
  }
  var Fe = [
      new oe(0, 0, 0, 0, mi),
      new oe(4, 4, 8, 4, It),
      new oe(4, 5, 16, 8, It),
      new oe(4, 6, 32, 32, It),
      new oe(4, 4, 16, 16, Ae),
      new oe(8, 16, 32, 32, Ae),
      new oe(8, 16, 128, 128, Ae),
      new oe(8, 32, 128, 256, Ae),
      new oe(32, 128, 258, 1024, Ae),
      new oe(32, 258, 258, 4096, Ae),
    ],
    Yr = (e) => {
      (e.window_size = 2 * e.w_size),
        _e(e.head),
        (e.max_lazy_match = Fe[e.level].max_lazy),
        (e.good_match = Fe[e.level].good_length),
        (e.nice_match = Fe[e.level].nice_length),
        (e.max_chain_length = Fe[e.level].max_chain),
        (e.strstart = 0),
        (e.block_start = 0),
        (e.lookahead = 0),
        (e.insert = 0),
        (e.match_length = e.prev_length = D - 1),
        (e.match_available = 0),
        (e.ins_h = 0);
    };
  function Qr() {
    (this.strm = null),
      (this.status = 0),
      (this.pending_buf = null),
      (this.pending_buf_size = 0),
      (this.pending_out = 0),
      (this.pending = 0),
      (this.wrap = 0),
      (this.gzhead = null),
      (this.gzindex = 0),
      (this.method = yt),
      (this.last_flush = -1),
      (this.w_size = 0),
      (this.w_bits = 0),
      (this.w_mask = 0),
      (this.window = null),
      (this.window_size = 0),
      (this.prev = null),
      (this.head = null),
      (this.ins_h = 0),
      (this.hash_size = 0),
      (this.hash_bits = 0),
      (this.hash_mask = 0),
      (this.hash_shift = 0),
      (this.block_start = 0),
      (this.match_length = 0),
      (this.prev_match = 0),
      (this.match_available = 0),
      (this.strstart = 0),
      (this.match_start = 0),
      (this.lookahead = 0),
      (this.prev_length = 0),
      (this.max_chain_length = 0),
      (this.max_lazy_match = 0),
      (this.level = 0),
      (this.strategy = 0),
      (this.good_match = 0),
      (this.nice_match = 0),
      (this.dyn_ltree = new Uint16Array(Ur * 2)),
      (this.dyn_dtree = new Uint16Array((2 * $r + 1) * 2)),
      (this.bl_tree = new Uint16Array((2 * Zr + 1) * 2)),
      _e(this.dyn_ltree),
      _e(this.dyn_dtree),
      _e(this.bl_tree),
      (this.l_desc = null),
      (this.d_desc = null),
      (this.bl_desc = null),
      (this.bl_count = new Uint16Array(Fr + 1)),
      (this.heap = new Uint16Array(2 * Zt + 1)),
      _e(this.heap),
      (this.heap_len = 0),
      (this.heap_max = 0),
      (this.depth = new Uint16Array(2 * Zt + 1)),
      _e(this.depth),
      (this.sym_buf = 0),
      (this.lit_bufsize = 0),
      (this.sym_next = 0),
      (this.sym_end = 0),
      (this.opt_len = 0),
      (this.static_len = 0),
      (this.matches = 0),
      (this.insert = 0),
      (this.bi_buf = 0),
      (this.bi_valid = 0);
  }
  var ot = (e) => {
      if (!e) return 1;
      let o = e.state;
      return !o ||
        o.strm !== e ||
        (o.status !== Le &&
          o.status !== Qt &&
          o.status !== Ut &&
          o.status !== Ft &&
          o.status !== Ht &&
          o.status !== Vt &&
          o.status !== Se &&
          o.status !== Ue)
        ? 1
        : 0;
    },
    vi = (e) => {
      if (ot(e)) return ke(e, le);
      (e.total_in = e.total_out = 0), (e.data_type = Lr);
      let o = e.state;
      return (
        (o.pending = 0),
        (o.pending_out = 0),
        o.wrap < 0 && (o.wrap = -o.wrap),
        (o.status = o.wrap === 2 ? Qt : o.wrap ? Le : Se),
        (e.adler = o.wrap === 2 ? 0 : 1),
        (o.last_flush = -2),
        Or(o),
        Z
      );
    },
    xi = (e) => {
      let o = vi(e);
      return o === Z && Yr(e.state), o;
    },
    el = (e, o) =>
      ot(e) || e.state.wrap !== 2 ? le : ((e.state.gzhead = o), Z),
    Si = (e, o, n, r, t, i) => {
      if (!e) return le;
      let l = 1;
      if (
        (o === Ir && (o = 6),
        r < 0 ? ((l = 0), (r = -r)) : r > 15 && ((l = 2), (r -= 16)),
        t < 1 ||
          t > zr ||
          n !== yt ||
          r < 8 ||
          r > 15 ||
          o < 0 ||
          o > 9 ||
          i < 0 ||
          i > Nr ||
          (r === 8 && l !== 1))
      )
        return ke(e, le);
      r === 8 && (r = 9);
      let a = new Qr();
      return (
        (e.state = a),
        (a.strm = e),
        (a.status = Le),
        (a.wrap = l),
        (a.gzhead = null),
        (a.w_bits = r),
        (a.w_size = 1 << a.w_bits),
        (a.w_mask = a.w_size - 1),
        (a.hash_bits = t + 7),
        (a.hash_size = 1 << a.hash_bits),
        (a.hash_mask = a.hash_size - 1),
        (a.hash_shift = ~~((a.hash_bits + D - 1) / D)),
        (a.window = new Uint8Array(a.w_size * 2)),
        (a.head = new Uint16Array(a.hash_size)),
        (a.prev = new Uint16Array(a.w_size)),
        (a.lit_bufsize = 1 << (t + 6)),
        (a.pending_buf_size = a.lit_bufsize * 4),
        (a.pending_buf = new Uint8Array(a.pending_buf_size)),
        (a.sym_buf = a.lit_bufsize),
        (a.sym_end = (a.lit_bufsize - 1) * 3),
        (a.level = o),
        (a.strategy = i),
        (a.method = n),
        xi(e)
      );
    },
    tl = (e, o) => Si(e, o, yt, qr, jr, Rr),
    nl = (e, o) => {
      if (ot(e) || o > On || o < 0) return e ? ke(e, le) : le;
      let n = e.state;
      if (
        !e.output ||
        (e.avail_in !== 0 && !e.input) ||
        (n.status === Ue && o !== Q)
      )
        return ke(e, e.avail_out === 0 ? Dt : le);
      let r = n.last_flush;
      if (((n.last_flush = o), n.pending !== 0)) {
        if ((K(e), e.avail_out === 0)) return (n.last_flush = -1), Z;
      } else if (e.avail_in === 0 && Tn(o) <= Tn(r) && o !== Q)
        return ke(e, Dt);
      if (n.status === Ue && e.avail_in !== 0) return ke(e, Dt);
      if (
        (n.status === Le && n.wrap === 0 && (n.status = Se), n.status === Le)
      ) {
        let t = (yt + ((n.w_bits - 8) << 4)) << 8,
          i = -1;
        if (
          (n.strategy >= ut || n.level < 2
            ? (i = 0)
            : n.level < 6
            ? (i = 1)
            : n.level === 6
            ? (i = 2)
            : (i = 3),
          (t |= i << 6),
          n.strstart !== 0 && (t |= Hr),
          (t += 31 - (t % 31)),
          Ze(n, t),
          n.strstart !== 0 && (Ze(n, e.adler >>> 16), Ze(n, e.adler & 65535)),
          (e.adler = 1),
          (n.status = Se),
          K(e),
          n.pending !== 0)
        )
          return (n.last_flush = -1), Z;
      }
      if (n.status === Qt) {
        if (((e.adler = 0), A(n, 31), A(n, 139), A(n, 8), n.gzhead))
          A(
            n,
            (n.gzhead.text ? 1 : 0) +
              (n.gzhead.hcrc ? 2 : 0) +
              (n.gzhead.extra ? 4 : 0) +
              (n.gzhead.name ? 8 : 0) +
              (n.gzhead.comment ? 16 : 0)
          ),
            A(n, n.gzhead.time & 255),
            A(n, (n.gzhead.time >> 8) & 255),
            A(n, (n.gzhead.time >> 16) & 255),
            A(n, (n.gzhead.time >> 24) & 255),
            A(n, n.level === 9 ? 2 : n.strategy >= ut || n.level < 2 ? 4 : 0),
            A(n, n.gzhead.os & 255),
            n.gzhead.extra &&
              n.gzhead.extra.length &&
              (A(n, n.gzhead.extra.length & 255),
              A(n, (n.gzhead.extra.length >> 8) & 255)),
            n.gzhead.hcrc &&
              (e.adler = G(e.adler, n.pending_buf, n.pending, 0)),
            (n.gzindex = 0),
            (n.status = Ut);
        else if (
          (A(n, 0),
          A(n, 0),
          A(n, 0),
          A(n, 0),
          A(n, 0),
          A(n, n.level === 9 ? 2 : n.strategy >= ut || n.level < 2 ? 4 : 0),
          A(n, Vr),
          (n.status = Se),
          K(e),
          n.pending !== 0)
        )
          return (n.last_flush = -1), Z;
      }
      if (n.status === Ut) {
        if (n.gzhead.extra) {
          let t = n.pending,
            i = (n.gzhead.extra.length & 65535) - n.gzindex;
          for (; n.pending + i > n.pending_buf_size; ) {
            let a = n.pending_buf_size - n.pending;
            if (
              (n.pending_buf.set(
                n.gzhead.extra.subarray(n.gzindex, n.gzindex + a),
                n.pending
              ),
              (n.pending = n.pending_buf_size),
              n.gzhead.hcrc &&
                n.pending > t &&
                (e.adler = G(e.adler, n.pending_buf, n.pending - t, t)),
              (n.gzindex += a),
              K(e),
              n.pending !== 0)
            )
              return (n.last_flush = -1), Z;
            (t = 0), (i -= a);
          }
          let l = new Uint8Array(n.gzhead.extra);
          n.pending_buf.set(l.subarray(n.gzindex, n.gzindex + i), n.pending),
            (n.pending += i),
            n.gzhead.hcrc &&
              n.pending > t &&
              (e.adler = G(e.adler, n.pending_buf, n.pending - t, t)),
            (n.gzindex = 0);
        }
        n.status = Ft;
      }
      if (n.status === Ft) {
        if (n.gzhead.name) {
          let t = n.pending,
            i;
          do {
            if (n.pending === n.pending_buf_size) {
              if (
                (n.gzhead.hcrc &&
                  n.pending > t &&
                  (e.adler = G(e.adler, n.pending_buf, n.pending - t, t)),
                K(e),
                n.pending !== 0)
              )
                return (n.last_flush = -1), Z;
              t = 0;
            }
            n.gzindex < n.gzhead.name.length
              ? (i = n.gzhead.name.charCodeAt(n.gzindex++) & 255)
              : (i = 0),
              A(n, i);
          } while (i !== 0);
          n.gzhead.hcrc &&
            n.pending > t &&
            (e.adler = G(e.adler, n.pending_buf, n.pending - t, t)),
            (n.gzindex = 0);
        }
        n.status = Ht;
      }
      if (n.status === Ht) {
        if (n.gzhead.comment) {
          let t = n.pending,
            i;
          do {
            if (n.pending === n.pending_buf_size) {
              if (
                (n.gzhead.hcrc &&
                  n.pending > t &&
                  (e.adler = G(e.adler, n.pending_buf, n.pending - t, t)),
                K(e),
                n.pending !== 0)
              )
                return (n.last_flush = -1), Z;
              t = 0;
            }
            n.gzindex < n.gzhead.comment.length
              ? (i = n.gzhead.comment.charCodeAt(n.gzindex++) & 255)
              : (i = 0),
              A(n, i);
          } while (i !== 0);
          n.gzhead.hcrc &&
            n.pending > t &&
            (e.adler = G(e.adler, n.pending_buf, n.pending - t, t));
        }
        n.status = Vt;
      }
      if (n.status === Vt) {
        if (n.gzhead.hcrc) {
          if (n.pending + 2 > n.pending_buf_size && (K(e), n.pending !== 0))
            return (n.last_flush = -1), Z;
          A(n, e.adler & 255), A(n, (e.adler >> 8) & 255), (e.adler = 0);
        }
        if (((n.status = Se), K(e), n.pending !== 0))
          return (n.last_flush = -1), Z;
      }
      if (
        e.avail_in !== 0 ||
        n.lookahead !== 0 ||
        (o !== be && n.status !== Ue)
      ) {
        let t =
          n.level === 0
            ? mi(n, o)
            : n.strategy === ut
            ? Xr(n, o)
            : n.strategy === Ar
            ? Kr(n, o)
            : Fe[n.level].func(n, o);
        if (((t === Me || t === Ge) && (n.status = Ue), t === U || t === Me))
          return e.avail_out === 0 && (n.last_flush = -1), Z;
        if (
          t === je &&
          (o === Br
            ? Tr(n)
            : o !== On &&
              ($t(n, 0, 0, !1),
              o === Er &&
                (_e(n.head),
                n.lookahead === 0 &&
                  ((n.strstart = 0), (n.block_start = 0), (n.insert = 0)))),
          K(e),
          e.avail_out === 0)
        )
          return (n.last_flush = -1), Z;
      }
      return o !== Q
        ? Z
        : n.wrap <= 0
        ? Mn
        : (n.wrap === 2
            ? (A(n, e.adler & 255),
              A(n, (e.adler >> 8) & 255),
              A(n, (e.adler >> 16) & 255),
              A(n, (e.adler >> 24) & 255),
              A(n, e.total_in & 255),
              A(n, (e.total_in >> 8) & 255),
              A(n, (e.total_in >> 16) & 255),
              A(n, (e.total_in >> 24) & 255))
            : (Ze(n, e.adler >>> 16), Ze(n, e.adler & 65535)),
          K(e),
          n.wrap > 0 && (n.wrap = -n.wrap),
          n.pending !== 0 ? Z : Mn);
    },
    il = (e) => {
      if (ot(e)) return le;
      let o = e.state.status;
      return (e.state = null), o === Se ? ke(e, Dr) : Z;
    },
    ol = (e, o) => {
      let n = o.length;
      if (ot(e)) return le;
      let r = e.state,
        t = r.wrap;
      if (t === 2 || (t === 1 && r.status !== Le) || r.lookahead) return le;
      if (
        (t === 1 && (e.adler = Qe(e.adler, o, n, 0)),
        (r.wrap = 0),
        n >= r.w_size)
      ) {
        t === 0 &&
          (_e(r.head), (r.strstart = 0), (r.block_start = 0), (r.insert = 0));
        let f = new Uint8Array(r.w_size);
        f.set(o.subarray(n - r.w_size, n), 0), (o = f), (n = r.w_size);
      }
      let i = e.avail_in,
        l = e.next_in,
        a = e.input;
      for (
        e.avail_in = n, e.next_in = 0, e.input = o, ze(r);
        r.lookahead >= D;

      ) {
        let f = r.strstart,
          c = r.lookahead - (D - 1);
        do
          (r.ins_h = we(r, r.ins_h, r.window[f + D - 1])),
            (r.prev[f & r.w_mask] = r.head[r.ins_h]),
            (r.head[r.ins_h] = f),
            f++;
        while (--c);
        (r.strstart = f), (r.lookahead = D - 1), ze(r);
      }
      return (
        (r.strstart += r.lookahead),
        (r.block_start = r.strstart),
        (r.insert = r.lookahead),
        (r.lookahead = 0),
        (r.match_length = r.prev_length = D - 1),
        (r.match_available = 0),
        (e.next_in = l),
        (e.input = a),
        (e.avail_in = i),
        (r.wrap = t),
        Z
      );
    },
    rl = tl,
    ll = Si,
    al = xi,
    cl = vi,
    fl = el,
    ul = nl,
    sl = il,
    dl = ol,
    hl = "pako deflate (from Nodeca project)",
    Ve = {
      deflateInit: rl,
      deflateInit2: ll,
      deflateReset: al,
      deflateResetKeep: cl,
      deflateSetHeader: fl,
      deflate: ul,
      deflateEnd: sl,
      deflateSetDictionary: dl,
      deflateInfo: hl,
    },
    _l = (e, o) => Object.prototype.hasOwnProperty.call(e, o),
    gl = function (e) {
      let o = Array.prototype.slice.call(arguments, 1);
      for (; o.length; ) {
        let n = o.shift();
        if (n) {
          if (typeof n != "object")
            throw new TypeError(n + "must be non-object");
          for (let r in n) _l(n, r) && (e[r] = n[r]);
        }
      }
      return e;
    },
    pl = (e) => {
      let o = 0;
      for (let r = 0, t = e.length; r < t; r++) o += e[r].length;
      let n = new Uint8Array(o);
      for (let r = 0, t = 0, i = e.length; r < i; r++) {
        let l = e[r];
        n.set(l, t), (t += l.length);
      }
      return n;
    },
    mt = { assign: gl, flattenChunks: pl },
    ki = !0;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    ki = !1;
  }
  var et = new Uint8Array(256);
  for (let e = 0; e < 256; e++)
    et[e] =
      e >= 252
        ? 6
        : e >= 248
        ? 5
        : e >= 240
        ? 4
        : e >= 224
        ? 3
        : e >= 192
        ? 2
        : 1;
  et[254] = et[254] = 1;
  var bl = (e) => {
      if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
        return new TextEncoder().encode(e);
      let o,
        n,
        r,
        t,
        i,
        l = e.length,
        a = 0;
      for (t = 0; t < l; t++)
        (n = e.charCodeAt(t)),
          (n & 64512) === 55296 &&
            t + 1 < l &&
            ((r = e.charCodeAt(t + 1)),
            (r & 64512) === 56320 &&
              ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), t++)),
          (a += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
      for (o = new Uint8Array(a), i = 0, t = 0; i < a; t++)
        (n = e.charCodeAt(t)),
          (n & 64512) === 55296 &&
            t + 1 < l &&
            ((r = e.charCodeAt(t + 1)),
            (r & 64512) === 56320 &&
              ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), t++)),
          n < 128
            ? (o[i++] = n)
            : n < 2048
            ? ((o[i++] = 192 | (n >>> 6)), (o[i++] = 128 | (n & 63)))
            : n < 65536
            ? ((o[i++] = 224 | (n >>> 12)),
              (o[i++] = 128 | ((n >>> 6) & 63)),
              (o[i++] = 128 | (n & 63)))
            : ((o[i++] = 240 | (n >>> 18)),
              (o[i++] = 128 | ((n >>> 12) & 63)),
              (o[i++] = 128 | ((n >>> 6) & 63)),
              (o[i++] = 128 | (n & 63)));
      return o;
    },
    wl = (e, o) => {
      if (o < 65534 && e.subarray && ki)
        return String.fromCharCode.apply(
          null,
          e.length === o ? e : e.subarray(0, o)
        );
      let n = "";
      for (let r = 0; r < o; r++) n += String.fromCharCode(e[r]);
      return n;
    },
    yl = (e, o) => {
      let n = o || e.length;
      if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
        return new TextDecoder().decode(e.subarray(0, o));
      let r,
        t,
        i = new Array(n * 2);
      for (t = 0, r = 0; r < n; ) {
        let l = e[r++];
        if (l < 128) {
          i[t++] = l;
          continue;
        }
        let a = et[l];
        if (a > 4) {
          (i[t++] = 65533), (r += a - 1);
          continue;
        }
        for (l &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && r < n; )
          (l = (l << 6) | (e[r++] & 63)), a--;
        if (a > 1) {
          i[t++] = 65533;
          continue;
        }
        l < 65536
          ? (i[t++] = l)
          : ((l -= 65536),
            (i[t++] = 55296 | ((l >> 10) & 1023)),
            (i[t++] = 56320 | (l & 1023)));
      }
      return wl(i, t);
    },
    ml = (e, o) => {
      (o = o || e.length), o > e.length && (o = e.length);
      let n = o - 1;
      for (; n >= 0 && (e[n] & 192) === 128; ) n--;
      return n < 0 || n === 0 ? o : n + et[e[n]] > o ? n : o;
    },
    tt = { string2buf: bl, buf2string: yl, utf8border: ml };
  function vl() {
    (this.input = null),
      (this.next_in = 0),
      (this.avail_in = 0),
      (this.total_in = 0),
      (this.output = null),
      (this.next_out = 0),
      (this.avail_out = 0),
      (this.total_out = 0),
      (this.msg = ""),
      (this.state = null),
      (this.data_type = 2),
      (this.adler = 0);
  }
  var Oi = vl,
    Mi = Object.prototype.toString,
    {
      Z_NO_FLUSH: xl,
      Z_SYNC_FLUSH: Sl,
      Z_FULL_FLUSH: kl,
      Z_FINISH: Ol,
      Z_OK: bt,
      Z_STREAM_END: Ml,
      Z_DEFAULT_COMPRESSION: Tl,
      Z_DEFAULT_STRATEGY: Bl,
      Z_DEFLATED: El,
    } = Be;
  function rt(e) {
    this.options = mt.assign(
      {
        level: Tl,
        method: El,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Bl,
      },
      e || {}
    );
    let o = this.options;
    o.raw && o.windowBits > 0
      ? (o.windowBits = -o.windowBits)
      : o.gzip && o.windowBits > 0 && o.windowBits < 16 && (o.windowBits += 16),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Oi()),
      (this.strm.avail_out = 0);
    let n = Ve.deflateInit2(
      this.strm,
      o.level,
      o.method,
      o.windowBits,
      o.memLevel,
      o.strategy
    );
    if (n !== bt) throw new Error(Oe[n]);
    if ((o.header && Ve.deflateSetHeader(this.strm, o.header), o.dictionary)) {
      let r;
      if (
        (typeof o.dictionary == "string"
          ? (r = tt.string2buf(o.dictionary))
          : Mi.call(o.dictionary) === "[object ArrayBuffer]"
          ? (r = new Uint8Array(o.dictionary))
          : (r = o.dictionary),
        (n = Ve.deflateSetDictionary(this.strm, r)),
        n !== bt)
      )
        throw new Error(Oe[n]);
      this._dict_set = !0;
    }
  }
  rt.prototype.push = function (e, o) {
    let n = this.strm,
      r = this.options.chunkSize,
      t,
      i;
    if (this.ended) return !1;
    for (
      o === ~~o ? (i = o) : (i = o === !0 ? Ol : xl),
        typeof e == "string"
          ? (n.input = tt.string2buf(e))
          : Mi.call(e) === "[object ArrayBuffer]"
          ? (n.input = new Uint8Array(e))
          : (n.input = e),
        n.next_in = 0,
        n.avail_in = n.input.length;
      ;

    ) {
      if (
        (n.avail_out === 0 &&
          ((n.output = new Uint8Array(r)), (n.next_out = 0), (n.avail_out = r)),
        (i === Sl || i === kl) && n.avail_out <= 6)
      ) {
        this.onData(n.output.subarray(0, n.next_out)), (n.avail_out = 0);
        continue;
      }
      if (((t = Ve.deflate(n, i)), t === Ml))
        return (
          n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)),
          (t = Ve.deflateEnd(this.strm)),
          this.onEnd(t),
          (this.ended = !0),
          t === bt
        );
      if (n.avail_out === 0) {
        this.onData(n.output);
        continue;
      }
      if (i > 0 && n.next_out > 0) {
        this.onData(n.output.subarray(0, n.next_out)), (n.avail_out = 0);
        continue;
      }
      if (n.avail_in === 0) break;
    }
    return !0;
  };
  rt.prototype.onData = function (e) {
    this.chunks.push(e);
  };
  rt.prototype.onEnd = function (e) {
    e === bt && (this.result = mt.flattenChunks(this.chunks)),
      (this.chunks = []),
      (this.err = e),
      (this.msg = this.strm.msg);
  };
  function en(e, o) {
    let n = new rt(o);
    if ((n.push(e, !0), n.err)) throw n.msg || Oe[n.err];
    return n.result;
  }
  function Dl(e, o) {
    return (o = o || {}), (o.raw = !0), en(e, o);
  }
  function Il(e, o) {
    return (o = o || {}), (o.gzip = !0), en(e, o);
  }
  var Cl = rt,
    Al = en,
    Nl = Dl,
    Rl = Il,
    Ll = Be,
    zl = { Deflate: Cl, deflate: Al, deflateRaw: Nl, gzip: Rl, constants: Ll },
    st = 16209,
    ql = 16191,
    jl = function (o, n) {
      let r,
        t,
        i,
        l,
        a,
        f,
        c,
        u,
        k,
        _,
        h,
        O,
        R,
        E,
        T,
        C,
        B,
        s,
        b,
        S,
        g,
        m,
        w,
        y,
        M = o.state;
      (r = o.next_in),
        (w = o.input),
        (t = r + (o.avail_in - 5)),
        (i = o.next_out),
        (y = o.output),
        (l = i - (n - o.avail_out)),
        (a = i + (o.avail_out - 257)),
        (f = M.dmax),
        (c = M.wsize),
        (u = M.whave),
        (k = M.wnext),
        (_ = M.window),
        (h = M.hold),
        (O = M.bits),
        (R = M.lencode),
        (E = M.distcode),
        (T = (1 << M.lenbits) - 1),
        (C = (1 << M.distbits) - 1);
      e: do {
        O < 15 && ((h += w[r++] << O), (O += 8), (h += w[r++] << O), (O += 8)),
          (B = R[h & T]);
        t: for (;;) {
          if (
            ((s = B >>> 24),
            (h >>>= s),
            (O -= s),
            (s = (B >>> 16) & 255),
            s === 0)
          )
            y[i++] = B & 65535;
          else if (s & 16) {
            (b = B & 65535),
              (s &= 15),
              s &&
                (O < s && ((h += w[r++] << O), (O += 8)),
                (b += h & ((1 << s) - 1)),
                (h >>>= s),
                (O -= s)),
              O < 15 &&
                ((h += w[r++] << O), (O += 8), (h += w[r++] << O), (O += 8)),
              (B = E[h & C]);
            n: for (;;) {
              if (
                ((s = B >>> 24),
                (h >>>= s),
                (O -= s),
                (s = (B >>> 16) & 255),
                s & 16)
              ) {
                if (
                  ((S = B & 65535),
                  (s &= 15),
                  O < s &&
                    ((h += w[r++] << O),
                    (O += 8),
                    O < s && ((h += w[r++] << O), (O += 8))),
                  (S += h & ((1 << s) - 1)),
                  S > f)
                ) {
                  (o.msg = "invalid distance too far back"), (M.mode = st);
                  break e;
                }
                if (((h >>>= s), (O -= s), (s = i - l), S > s)) {
                  if (((s = S - s), s > u && M.sane)) {
                    (o.msg = "invalid distance too far back"), (M.mode = st);
                    break e;
                  }
                  if (((g = 0), (m = _), k === 0)) {
                    if (((g += c - s), s < b)) {
                      b -= s;
                      do y[i++] = _[g++];
                      while (--s);
                      (g = i - S), (m = y);
                    }
                  } else if (k < s) {
                    if (((g += c + k - s), (s -= k), s < b)) {
                      b -= s;
                      do y[i++] = _[g++];
                      while (--s);
                      if (((g = 0), k < b)) {
                        (s = k), (b -= s);
                        do y[i++] = _[g++];
                        while (--s);
                        (g = i - S), (m = y);
                      }
                    }
                  } else if (((g += k - s), s < b)) {
                    b -= s;
                    do y[i++] = _[g++];
                    while (--s);
                    (g = i - S), (m = y);
                  }
                  for (; b > 2; )
                    (y[i++] = m[g++]),
                      (y[i++] = m[g++]),
                      (y[i++] = m[g++]),
                      (b -= 3);
                  b && ((y[i++] = m[g++]), b > 1 && (y[i++] = m[g++]));
                } else {
                  g = i - S;
                  do
                    (y[i++] = y[g++]),
                      (y[i++] = y[g++]),
                      (y[i++] = y[g++]),
                      (b -= 3);
                  while (b > 2);
                  b && ((y[i++] = y[g++]), b > 1 && (y[i++] = y[g++]));
                }
              } else if (s & 64) {
                (o.msg = "invalid distance code"), (M.mode = st);
                break e;
              } else {
                B = E[(B & 65535) + (h & ((1 << s) - 1))];
                continue n;
              }
              break;
            }
          } else if (s & 64)
            if (s & 32) {
              M.mode = ql;
              break e;
            } else {
              (o.msg = "invalid literal/length code"), (M.mode = st);
              break e;
            }
          else {
            B = R[(B & 65535) + (h & ((1 << s) - 1))];
            continue t;
          }
          break;
        }
      } while (r < t && i < a);
      (b = O >> 3),
        (r -= b),
        (O -= b << 3),
        (h &= (1 << O) - 1),
        (o.next_in = r),
        (o.next_out = i),
        (o.avail_in = r < t ? 5 + (t - r) : 5 - (r - t)),
        (o.avail_out = i < a ? 257 + (a - i) : 257 - (i - a)),
        (M.hold = h),
        (M.bits = O);
    },
    Ne = 15,
    Bn = 852,
    En = 592,
    Dn = 0,
    Ct = 1,
    In = 2,
    Gl = new Uint16Array([
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
      67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
    ]),
    Pl = new Uint8Array([
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
      19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
    ]),
    $l = new Uint16Array([
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
      769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
    ]),
    Zl = new Uint8Array([
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
      24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
    ]),
    Ul = (e, o, n, r, t, i, l, a) => {
      let f = a.bits,
        c = 0,
        u = 0,
        k = 0,
        _ = 0,
        h = 0,
        O = 0,
        R = 0,
        E = 0,
        T = 0,
        C = 0,
        B,
        s,
        b,
        S,
        g,
        m = null,
        w,
        y = new Uint16Array(Ne + 1),
        M = new Uint16Array(Ne + 1),
        z = null,
        Y,
        F,
        J;
      for (c = 0; c <= Ne; c++) y[c] = 0;
      for (u = 0; u < r; u++) y[o[n + u]]++;
      for (h = f, _ = Ne; _ >= 1 && y[_] === 0; _--);
      if ((h > _ && (h = _), _ === 0))
        return (
          (t[i++] = (1 << 24) | (64 << 16) | 0),
          (t[i++] = (1 << 24) | (64 << 16) | 0),
          (a.bits = 1),
          0
        );
      for (k = 1; k < _ && y[k] === 0; k++);
      for (h < k && (h = k), E = 1, c = 1; c <= Ne; c++)
        if (((E <<= 1), (E -= y[c]), E < 0)) return -1;
      if (E > 0 && (e === Dn || _ !== 1)) return -1;
      for (M[1] = 0, c = 1; c < Ne; c++) M[c + 1] = M[c] + y[c];
      for (u = 0; u < r; u++) o[n + u] !== 0 && (l[M[o[n + u]]++] = u);
      if (
        (e === Dn
          ? ((m = z = l), (w = 20))
          : e === Ct
          ? ((m = Gl), (z = Pl), (w = 257))
          : ((m = $l), (z = Zl), (w = 0)),
        (C = 0),
        (u = 0),
        (c = k),
        (g = i),
        (O = h),
        (R = 0),
        (b = -1),
        (T = 1 << h),
        (S = T - 1),
        (e === Ct && T > Bn) || (e === In && T > En))
      )
        return 1;
      for (;;) {
        (Y = c - R),
          l[u] + 1 < w
            ? ((F = 0), (J = l[u]))
            : l[u] >= w
            ? ((F = z[l[u] - w]), (J = m[l[u] - w]))
            : ((F = 96), (J = 0)),
          (B = 1 << (c - R)),
          (s = 1 << O),
          (k = s);
        do (s -= B), (t[g + (C >> R) + s] = (Y << 24) | (F << 16) | J | 0);
        while (s !== 0);
        for (B = 1 << (c - 1); C & B; ) B >>= 1;
        if ((B !== 0 ? ((C &= B - 1), (C += B)) : (C = 0), u++, --y[c] === 0)) {
          if (c === _) break;
          c = o[n + l[u]];
        }
        if (c > h && (C & S) !== b) {
          for (
            R === 0 && (R = h), g += k, O = c - R, E = 1 << O;
            O + R < _ && ((E -= y[O + R]), !(E <= 0));

          )
            O++, (E <<= 1);
          if (((T += 1 << O), (e === Ct && T > Bn) || (e === In && T > En)))
            return 1;
          (b = C & S), (t[b] = (h << 24) | (O << 16) | (g - i) | 0);
        }
      }
      return (
        C !== 0 && (t[g + C] = ((c - R) << 24) | (64 << 16) | 0),
        (a.bits = h),
        0
      );
    },
    Je = Ul,
    Fl = 0,
    Ti = 1,
    Bi = 2,
    {
      Z_FINISH: Cn,
      Z_BLOCK: Hl,
      Z_TREES: dt,
      Z_OK: Te,
      Z_STREAM_END: Vl,
      Z_NEED_DICT: Jl,
      Z_STREAM_ERROR: ee,
      Z_DATA_ERROR: Ei,
      Z_MEM_ERROR: Di,
      Z_BUF_ERROR: Wl,
      Z_DEFLATED: An,
    } = Be,
    vt = 16180,
    Nn = 16181,
    Rn = 16182,
    Ln = 16183,
    zn = 16184,
    qn = 16185,
    jn = 16186,
    Gn = 16187,
    Pn = 16188,
    $n = 16189,
    wt = 16190,
    se = 16191,
    At = 16192,
    Zn = 16193,
    Nt = 16194,
    Un = 16195,
    Fn = 16196,
    Hn = 16197,
    Vn = 16198,
    ht = 16199,
    _t = 16200,
    Jn = 16201,
    Wn = 16202,
    Kn = 16203,
    Xn = 16204,
    Yn = 16205,
    Rt = 16206,
    Qn = 16207,
    ei = 16208,
    L = 16209,
    Ii = 16210,
    Ci = 16211,
    Kl = 852,
    Xl = 592,
    Yl = 15,
    Ql = Yl,
    ti = (e) =>
      ((e >>> 24) & 255) +
      ((e >>> 8) & 65280) +
      ((e & 65280) << 8) +
      ((e & 255) << 24);
  function ea() {
    (this.strm = null),
      (this.mode = 0),
      (this.last = !1),
      (this.wrap = 0),
      (this.havedict = !1),
      (this.flags = 0),
      (this.dmax = 0),
      (this.check = 0),
      (this.total = 0),
      (this.head = null),
      (this.wbits = 0),
      (this.wsize = 0),
      (this.whave = 0),
      (this.wnext = 0),
      (this.window = null),
      (this.hold = 0),
      (this.bits = 0),
      (this.length = 0),
      (this.offset = 0),
      (this.extra = 0),
      (this.lencode = null),
      (this.distcode = null),
      (this.lenbits = 0),
      (this.distbits = 0),
      (this.ncode = 0),
      (this.nlen = 0),
      (this.ndist = 0),
      (this.have = 0),
      (this.next = null),
      (this.lens = new Uint16Array(320)),
      (this.work = new Uint16Array(288)),
      (this.lendyn = null),
      (this.distdyn = null),
      (this.sane = 0),
      (this.back = 0),
      (this.was = 0);
  }
  var Ee = (e) => {
      if (!e) return 1;
      let o = e.state;
      return !o || o.strm !== e || o.mode < vt || o.mode > Ci ? 1 : 0;
    },
    Ai = (e) => {
      if (Ee(e)) return ee;
      let o = e.state;
      return (
        (e.total_in = e.total_out = o.total = 0),
        (e.msg = ""),
        o.wrap && (e.adler = o.wrap & 1),
        (o.mode = vt),
        (o.last = 0),
        (o.havedict = 0),
        (o.flags = -1),
        (o.dmax = 32768),
        (o.head = null),
        (o.hold = 0),
        (o.bits = 0),
        (o.lencode = o.lendyn = new Int32Array(Kl)),
        (o.distcode = o.distdyn = new Int32Array(Xl)),
        (o.sane = 1),
        (o.back = -1),
        Te
      );
    },
    Ni = (e) => {
      if (Ee(e)) return ee;
      let o = e.state;
      return (o.wsize = 0), (o.whave = 0), (o.wnext = 0), Ai(e);
    },
    Ri = (e, o) => {
      let n;
      if (Ee(e)) return ee;
      let r = e.state;
      return (
        o < 0 ? ((n = 0), (o = -o)) : ((n = (o >> 4) + 5), o < 48 && (o &= 15)),
        o && (o < 8 || o > 15)
          ? ee
          : (r.window !== null && r.wbits !== o && (r.window = null),
            (r.wrap = n),
            (r.wbits = o),
            Ni(e))
      );
    },
    Li = (e, o) => {
      if (!e) return ee;
      let n = new ea();
      (e.state = n), (n.strm = e), (n.window = null), (n.mode = vt);
      let r = Ri(e, o);
      return r !== Te && (e.state = null), r;
    },
    ta = (e) => Li(e, Ql),
    ni = !0,
    Lt,
    zt,
    na = (e) => {
      if (ni) {
        (Lt = new Int32Array(512)), (zt = new Int32Array(32));
        let o = 0;
        for (; o < 144; ) e.lens[o++] = 8;
        for (; o < 256; ) e.lens[o++] = 9;
        for (; o < 280; ) e.lens[o++] = 7;
        for (; o < 288; ) e.lens[o++] = 8;
        for (
          Je(Ti, e.lens, 0, 288, Lt, 0, e.work, { bits: 9 }), o = 0;
          o < 32;

        )
          e.lens[o++] = 5;
        Je(Bi, e.lens, 0, 32, zt, 0, e.work, { bits: 5 }), (ni = !1);
      }
      (e.lencode = Lt), (e.lenbits = 9), (e.distcode = zt), (e.distbits = 5);
    },
    zi = (e, o, n, r) => {
      let t,
        i = e.state;
      return (
        i.window === null &&
          ((i.wsize = 1 << i.wbits),
          (i.wnext = 0),
          (i.whave = 0),
          (i.window = new Uint8Array(i.wsize))),
        r >= i.wsize
          ? (i.window.set(o.subarray(n - i.wsize, n), 0),
            (i.wnext = 0),
            (i.whave = i.wsize))
          : ((t = i.wsize - i.wnext),
            t > r && (t = r),
            i.window.set(o.subarray(n - r, n - r + t), i.wnext),
            (r -= t),
            r
              ? (i.window.set(o.subarray(n - r, n), 0),
                (i.wnext = r),
                (i.whave = i.wsize))
              : ((i.wnext += t),
                i.wnext === i.wsize && (i.wnext = 0),
                i.whave < i.wsize && (i.whave += t))),
        0
      );
    },
    ia = (e, o) => {
      let n,
        r,
        t,
        i,
        l,
        a,
        f,
        c,
        u,
        k,
        _,
        h,
        O,
        R,
        E = 0,
        T,
        C,
        B,
        s,
        b,
        S,
        g,
        m,
        w = new Uint8Array(4),
        y,
        M,
        z = new Uint8Array([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]);
      if (Ee(e) || !e.output || (!e.input && e.avail_in !== 0)) return ee;
      (n = e.state),
        n.mode === se && (n.mode = At),
        (l = e.next_out),
        (t = e.output),
        (f = e.avail_out),
        (i = e.next_in),
        (r = e.input),
        (a = e.avail_in),
        (c = n.hold),
        (u = n.bits),
        (k = a),
        (_ = f),
        (m = Te);
      e: for (;;)
        switch (n.mode) {
          case vt:
            if (n.wrap === 0) {
              n.mode = At;
              break;
            }
            for (; u < 16; ) {
              if (a === 0) break e;
              a--, (c += r[i++] << u), (u += 8);
            }
            if (n.wrap & 2 && c === 35615) {
              n.wbits === 0 && (n.wbits = 15),
                (n.check = 0),
                (w[0] = c & 255),
                (w[1] = (c >>> 8) & 255),
                (n.check = G(n.check, w, 2, 0)),
                (c = 0),
                (u = 0),
                (n.mode = Nn);
              break;
            }
            if (
              (n.head && (n.head.done = !1),
              !(n.wrap & 1) || (((c & 255) << 8) + (c >> 8)) % 31)
            ) {
              (e.msg = "incorrect header check"), (n.mode = L);
              break;
            }
            if ((c & 15) !== An) {
              (e.msg = "unknown compression method"), (n.mode = L);
              break;
            }
            if (
              ((c >>>= 4),
              (u -= 4),
              (g = (c & 15) + 8),
              n.wbits === 0 && (n.wbits = g),
              g > 15 || g > n.wbits)
            ) {
              (e.msg = "invalid window size"), (n.mode = L);
              break;
            }
            (n.dmax = 1 << n.wbits),
              (n.flags = 0),
              (e.adler = n.check = 1),
              (n.mode = c & 512 ? $n : se),
              (c = 0),
              (u = 0);
            break;
          case Nn:
            for (; u < 16; ) {
              if (a === 0) break e;
              a--, (c += r[i++] << u), (u += 8);
            }
            if (((n.flags = c), (n.flags & 255) !== An)) {
              (e.msg = "unknown compression method"), (n.mode = L);
              break;
            }
            if (n.flags & 57344) {
              (e.msg = "unknown header flags set"), (n.mode = L);
              break;
            }
            n.head && (n.head.text = (c >> 8) & 1),
              n.flags & 512 &&
                n.wrap & 4 &&
                ((w[0] = c & 255),
                (w[1] = (c >>> 8) & 255),
                (n.check = G(n.check, w, 2, 0))),
              (c = 0),
              (u = 0),
              (n.mode = Rn);
          case Rn:
            for (; u < 32; ) {
              if (a === 0) break e;
              a--, (c += r[i++] << u), (u += 8);
            }
            n.head && (n.head.time = c),
              n.flags & 512 &&
                n.wrap & 4 &&
                ((w[0] = c & 255),
                (w[1] = (c >>> 8) & 255),
                (w[2] = (c >>> 16) & 255),
                (w[3] = (c >>> 24) & 255),
                (n.check = G(n.check, w, 4, 0))),
              (c = 0),
              (u = 0),
              (n.mode = Ln);
          case Ln:
            for (; u < 16; ) {
              if (a === 0) break e;
              a--, (c += r[i++] << u), (u += 8);
            }
            n.head && ((n.head.xflags = c & 255), (n.head.os = c >> 8)),
              n.flags & 512 &&
                n.wrap & 4 &&
                ((w[0] = c & 255),
                (w[1] = (c >>> 8) & 255),
                (n.check = G(n.check, w, 2, 0))),
              (c = 0),
              (u = 0),
              (n.mode = zn);
          case zn:
            if (n.flags & 1024) {
              for (; u < 16; ) {
                if (a === 0) break e;
                a--, (c += r[i++] << u), (u += 8);
              }
              (n.length = c),
                n.head && (n.head.extra_len = c),
                n.flags & 512 &&
                  n.wrap & 4 &&
                  ((w[0] = c & 255),
                  (w[1] = (c >>> 8) & 255),
                  (n.check = G(n.check, w, 2, 0))),
                (c = 0),
                (u = 0);
            } else n.head && (n.head.extra = null);
            n.mode = qn;
          case qn:
            if (
              n.flags & 1024 &&
              ((h = n.length),
              h > a && (h = a),
              h &&
                (n.head &&
                  ((g = n.head.extra_len - n.length),
                  n.head.extra ||
                    (n.head.extra = new Uint8Array(n.head.extra_len)),
                  n.head.extra.set(r.subarray(i, i + h), g)),
                n.flags & 512 && n.wrap & 4 && (n.check = G(n.check, r, h, i)),
                (a -= h),
                (i += h),
                (n.length -= h)),
              n.length)
            )
              break e;
            (n.length = 0), (n.mode = jn);
          case jn:
            if (n.flags & 2048) {
              if (a === 0) break e;
              h = 0;
              do
                (g = r[i + h++]),
                  n.head &&
                    g &&
                    n.length < 65536 &&
                    (n.head.name += String.fromCharCode(g));
              while (g && h < a);
              if (
                (n.flags & 512 && n.wrap & 4 && (n.check = G(n.check, r, h, i)),
                (a -= h),
                (i += h),
                g)
              )
                break e;
            } else n.head && (n.head.name = null);
            (n.length = 0), (n.mode = Gn);
          case Gn:
            if (n.flags & 4096) {
              if (a === 0) break e;
              h = 0;
              do
                (g = r[i + h++]),
                  n.head &&
                    g &&
                    n.length < 65536 &&
                    (n.head.comment += String.fromCharCode(g));
              while (g && h < a);
              if (
                (n.flags & 512 && n.wrap & 4 && (n.check = G(n.check, r, h, i)),
                (a -= h),
                (i += h),
                g)
              )
                break e;
            } else n.head && (n.head.comment = null);
            n.mode = Pn;
          case Pn:
            if (n.flags & 512) {
              for (; u < 16; ) {
                if (a === 0) break e;
                a--, (c += r[i++] << u), (u += 8);
              }
              if (n.wrap & 4 && c !== (n.check & 65535)) {
                (e.msg = "header crc mismatch"), (n.mode = L);
                break;
              }
              (c = 0), (u = 0);
            }
            n.head && ((n.head.hcrc = (n.flags >> 9) & 1), (n.head.done = !0)),
              (e.adler = n.check = 0),
              (n.mode = se);
            break;
          case $n:
            for (; u < 32; ) {
              if (a === 0) break e;
              a--, (c += r[i++] << u), (u += 8);
            }
            (e.adler = n.check = ti(c)), (c = 0), (u = 0), (n.mode = wt);
          case wt:
            if (n.havedict === 0)
              return (
                (e.next_out = l),
                (e.avail_out = f),
                (e.next_in = i),
                (e.avail_in = a),
                (n.hold = c),
                (n.bits = u),
                Jl
              );
            (e.adler = n.check = 1), (n.mode = se);
          case se:
            if (o === Hl || o === dt) break e;
          case At:
            if (n.last) {
              (c >>>= u & 7), (u -= u & 7), (n.mode = Rt);
              break;
            }
            for (; u < 3; ) {
              if (a === 0) break e;
              a--, (c += r[i++] << u), (u += 8);
            }
            switch (((n.last = c & 1), (c >>>= 1), (u -= 1), c & 3)) {
              case 0:
                n.mode = Zn;
                break;
              case 1:
                if ((na(n), (n.mode = ht), o === dt)) {
                  (c >>>= 2), (u -= 2);
                  break e;
                }
                break;
              case 2:
                n.mode = Fn;
                break;
              case 3:
                (e.msg = "invalid block type"), (n.mode = L);
            }
            (c >>>= 2), (u -= 2);
            break;
          case Zn:
            for (c >>>= u & 7, u -= u & 7; u < 32; ) {
              if (a === 0) break e;
              a--, (c += r[i++] << u), (u += 8);
            }
            if ((c & 65535) !== ((c >>> 16) ^ 65535)) {
              (e.msg = "invalid stored block lengths"), (n.mode = L);
              break;
            }
            if (
              ((n.length = c & 65535),
              (c = 0),
              (u = 0),
              (n.mode = Nt),
              o === dt)
            )
              break e;
          case Nt:
            n.mode = Un;
          case Un:
            if (((h = n.length), h)) {
              if ((h > a && (h = a), h > f && (h = f), h === 0)) break e;
              t.set(r.subarray(i, i + h), l),
                (a -= h),
                (i += h),
                (f -= h),
                (l += h),
                (n.length -= h);
              break;
            }
            n.mode = se;
            break;
          case Fn:
            for (; u < 14; ) {
              if (a === 0) break e;
              a--, (c += r[i++] << u), (u += 8);
            }
            if (
              ((n.nlen = (c & 31) + 257),
              (c >>>= 5),
              (u -= 5),
              (n.ndist = (c & 31) + 1),
              (c >>>= 5),
              (u -= 5),
              (n.ncode = (c & 15) + 4),
              (c >>>= 4),
              (u -= 4),
              n.nlen > 286 || n.ndist > 30)
            ) {
              (e.msg = "too many length or distance symbols"), (n.mode = L);
              break;
            }
            (n.have = 0), (n.mode = Hn);
          case Hn:
            for (; n.have < n.ncode; ) {
              for (; u < 3; ) {
                if (a === 0) break e;
                a--, (c += r[i++] << u), (u += 8);
              }
              (n.lens[z[n.have++]] = c & 7), (c >>>= 3), (u -= 3);
            }
            for (; n.have < 19; ) n.lens[z[n.have++]] = 0;
            if (
              ((n.lencode = n.lendyn),
              (n.lenbits = 7),
              (y = { bits: n.lenbits }),
              (m = Je(Fl, n.lens, 0, 19, n.lencode, 0, n.work, y)),
              (n.lenbits = y.bits),
              m)
            ) {
              (e.msg = "invalid code lengths set"), (n.mode = L);
              break;
            }
            (n.have = 0), (n.mode = Vn);
          case Vn:
            for (; n.have < n.nlen + n.ndist; ) {
              for (
                ;
                (E = n.lencode[c & ((1 << n.lenbits) - 1)]),
                  (T = E >>> 24),
                  (C = (E >>> 16) & 255),
                  (B = E & 65535),
                  !(T <= u);

              ) {
                if (a === 0) break e;
                a--, (c += r[i++] << u), (u += 8);
              }
              if (B < 16) (c >>>= T), (u -= T), (n.lens[n.have++] = B);
              else {
                if (B === 16) {
                  for (M = T + 2; u < M; ) {
                    if (a === 0) break e;
                    a--, (c += r[i++] << u), (u += 8);
                  }
                  if (((c >>>= T), (u -= T), n.have === 0)) {
                    (e.msg = "invalid bit length repeat"), (n.mode = L);
                    break;
                  }
                  (g = n.lens[n.have - 1]),
                    (h = 3 + (c & 3)),
                    (c >>>= 2),
                    (u -= 2);
                } else if (B === 17) {
                  for (M = T + 3; u < M; ) {
                    if (a === 0) break e;
                    a--, (c += r[i++] << u), (u += 8);
                  }
                  (c >>>= T),
                    (u -= T),
                    (g = 0),
                    (h = 3 + (c & 7)),
                    (c >>>= 3),
                    (u -= 3);
                } else {
                  for (M = T + 7; u < M; ) {
                    if (a === 0) break e;
                    a--, (c += r[i++] << u), (u += 8);
                  }
                  (c >>>= T),
                    (u -= T),
                    (g = 0),
                    (h = 11 + (c & 127)),
                    (c >>>= 7),
                    (u -= 7);
                }
                if (n.have + h > n.nlen + n.ndist) {
                  (e.msg = "invalid bit length repeat"), (n.mode = L);
                  break;
                }
                for (; h--; ) n.lens[n.have++] = g;
              }
            }
            if (n.mode === L) break;
            if (n.lens[256] === 0) {
              (e.msg = "invalid code -- missing end-of-block"), (n.mode = L);
              break;
            }
            if (
              ((n.lenbits = 9),
              (y = { bits: n.lenbits }),
              (m = Je(Ti, n.lens, 0, n.nlen, n.lencode, 0, n.work, y)),
              (n.lenbits = y.bits),
              m)
            ) {
              (e.msg = "invalid literal/lengths set"), (n.mode = L);
              break;
            }
            if (
              ((n.distbits = 6),
              (n.distcode = n.distdyn),
              (y = { bits: n.distbits }),
              (m = Je(Bi, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, y)),
              (n.distbits = y.bits),
              m)
            ) {
              (e.msg = "invalid distances set"), (n.mode = L);
              break;
            }
            if (((n.mode = ht), o === dt)) break e;
          case ht:
            n.mode = _t;
          case _t:
            if (a >= 6 && f >= 258) {
              (e.next_out = l),
                (e.avail_out = f),
                (e.next_in = i),
                (e.avail_in = a),
                (n.hold = c),
                (n.bits = u),
                jl(e, _),
                (l = e.next_out),
                (t = e.output),
                (f = e.avail_out),
                (i = e.next_in),
                (r = e.input),
                (a = e.avail_in),
                (c = n.hold),
                (u = n.bits),
                n.mode === se && (n.back = -1);
              break;
            }
            for (
              n.back = 0;
              (E = n.lencode[c & ((1 << n.lenbits) - 1)]),
                (T = E >>> 24),
                (C = (E >>> 16) & 255),
                (B = E & 65535),
                !(T <= u);

            ) {
              if (a === 0) break e;
              a--, (c += r[i++] << u), (u += 8);
            }
            if (C && !(C & 240)) {
              for (
                s = T, b = C, S = B;
                (E = n.lencode[S + ((c & ((1 << (s + b)) - 1)) >> s)]),
                  (T = E >>> 24),
                  (C = (E >>> 16) & 255),
                  (B = E & 65535),
                  !(s + T <= u);

              ) {
                if (a === 0) break e;
                a--, (c += r[i++] << u), (u += 8);
              }
              (c >>>= s), (u -= s), (n.back += s);
            }
            if (
              ((c >>>= T), (u -= T), (n.back += T), (n.length = B), C === 0)
            ) {
              n.mode = Yn;
              break;
            }
            if (C & 32) {
              (n.back = -1), (n.mode = se);
              break;
            }
            if (C & 64) {
              (e.msg = "invalid literal/length code"), (n.mode = L);
              break;
            }
            (n.extra = C & 15), (n.mode = Jn);
          case Jn:
            if (n.extra) {
              for (M = n.extra; u < M; ) {
                if (a === 0) break e;
                a--, (c += r[i++] << u), (u += 8);
              }
              (n.length += c & ((1 << n.extra) - 1)),
                (c >>>= n.extra),
                (u -= n.extra),
                (n.back += n.extra);
            }
            (n.was = n.length), (n.mode = Wn);
          case Wn:
            for (
              ;
              (E = n.distcode[c & ((1 << n.distbits) - 1)]),
                (T = E >>> 24),
                (C = (E >>> 16) & 255),
                (B = E & 65535),
                !(T <= u);

            ) {
              if (a === 0) break e;
              a--, (c += r[i++] << u), (u += 8);
            }
            if (!(C & 240)) {
              for (
                s = T, b = C, S = B;
                (E = n.distcode[S + ((c & ((1 << (s + b)) - 1)) >> s)]),
                  (T = E >>> 24),
                  (C = (E >>> 16) & 255),
                  (B = E & 65535),
                  !(s + T <= u);

              ) {
                if (a === 0) break e;
                a--, (c += r[i++] << u), (u += 8);
              }
              (c >>>= s), (u -= s), (n.back += s);
            }
            if (((c >>>= T), (u -= T), (n.back += T), C & 64)) {
              (e.msg = "invalid distance code"), (n.mode = L);
              break;
            }
            (n.offset = B), (n.extra = C & 15), (n.mode = Kn);
          case Kn:
            if (n.extra) {
              for (M = n.extra; u < M; ) {
                if (a === 0) break e;
                a--, (c += r[i++] << u), (u += 8);
              }
              (n.offset += c & ((1 << n.extra) - 1)),
                (c >>>= n.extra),
                (u -= n.extra),
                (n.back += n.extra);
            }
            if (n.offset > n.dmax) {
              (e.msg = "invalid distance too far back"), (n.mode = L);
              break;
            }
            n.mode = Xn;
          case Xn:
            if (f === 0) break e;
            if (((h = _ - f), n.offset > h)) {
              if (((h = n.offset - h), h > n.whave && n.sane)) {
                (e.msg = "invalid distance too far back"), (n.mode = L);
                break;
              }
              h > n.wnext
                ? ((h -= n.wnext), (O = n.wsize - h))
                : (O = n.wnext - h),
                h > n.length && (h = n.length),
                (R = n.window);
            } else (R = t), (O = l - n.offset), (h = n.length);
            h > f && (h = f), (f -= h), (n.length -= h);
            do t[l++] = R[O++];
            while (--h);
            n.length === 0 && (n.mode = _t);
            break;
          case Yn:
            if (f === 0) break e;
            (t[l++] = n.length), f--, (n.mode = _t);
            break;
          case Rt:
            if (n.wrap) {
              for (; u < 32; ) {
                if (a === 0) break e;
                a--, (c |= r[i++] << u), (u += 8);
              }
              if (
                ((_ -= f),
                (e.total_out += _),
                (n.total += _),
                n.wrap & 4 &&
                  _ &&
                  (e.adler = n.check =
                    n.flags
                      ? G(n.check, t, _, l - _)
                      : Qe(n.check, t, _, l - _)),
                (_ = f),
                n.wrap & 4 && (n.flags ? c : ti(c)) !== n.check)
              ) {
                (e.msg = "incorrect data check"), (n.mode = L);
                break;
              }
              (c = 0), (u = 0);
            }
            n.mode = Qn;
          case Qn:
            if (n.wrap && n.flags) {
              for (; u < 32; ) {
                if (a === 0) break e;
                a--, (c += r[i++] << u), (u += 8);
              }
              if (n.wrap & 4 && c !== (n.total & 4294967295)) {
                (e.msg = "incorrect length check"), (n.mode = L);
                break;
              }
              (c = 0), (u = 0);
            }
            n.mode = ei;
          case ei:
            m = Vl;
            break e;
          case L:
            m = Ei;
            break e;
          case Ii:
            return Di;
          case Ci:
          default:
            return ee;
        }
      return (
        (e.next_out = l),
        (e.avail_out = f),
        (e.next_in = i),
        (e.avail_in = a),
        (n.hold = c),
        (n.bits = u),
        (n.wsize ||
          (_ !== e.avail_out && n.mode < L && (n.mode < Rt || o !== Cn))) &&
          zi(e, e.output, e.next_out, _ - e.avail_out),
        (k -= e.avail_in),
        (_ -= e.avail_out),
        (e.total_in += k),
        (e.total_out += _),
        (n.total += _),
        n.wrap & 4 &&
          _ &&
          (e.adler = n.check =
            n.flags
              ? G(n.check, t, _, e.next_out - _)
              : Qe(n.check, t, _, e.next_out - _)),
        (e.data_type =
          n.bits +
          (n.last ? 64 : 0) +
          (n.mode === se ? 128 : 0) +
          (n.mode === ht || n.mode === Nt ? 256 : 0)),
        ((k === 0 && _ === 0) || o === Cn) && m === Te && (m = Wl),
        m
      );
    },
    oa = (e) => {
      if (Ee(e)) return ee;
      let o = e.state;
      return o.window && (o.window = null), (e.state = null), Te;
    },
    ra = (e, o) => {
      if (Ee(e)) return ee;
      let n = e.state;
      return n.wrap & 2 ? ((n.head = o), (o.done = !1), Te) : ee;
    },
    la = (e, o) => {
      let n = o.length,
        r,
        t,
        i;
      return Ee(e) || ((r = e.state), r.wrap !== 0 && r.mode !== wt)
        ? ee
        : r.mode === wt && ((t = 1), (t = Qe(t, o, n, 0)), t !== r.check)
        ? Ei
        : ((i = zi(e, o, n, n)),
          i ? ((r.mode = Ii), Di) : ((r.havedict = 1), Te));
    },
    aa = Ni,
    ca = Ri,
    fa = Ai,
    ua = ta,
    sa = Li,
    da = ia,
    ha = oa,
    _a = ra,
    ga = la,
    pa = "pako inflate (from Nodeca project)",
    he = {
      inflateReset: aa,
      inflateReset2: ca,
      inflateResetKeep: fa,
      inflateInit: ua,
      inflateInit2: sa,
      inflate: da,
      inflateEnd: ha,
      inflateGetHeader: _a,
      inflateSetDictionary: ga,
      inflateInfo: pa,
    };
  function ba() {
    (this.text = 0),
      (this.time = 0),
      (this.xflags = 0),
      (this.os = 0),
      (this.extra = null),
      (this.extra_len = 0),
      (this.name = ""),
      (this.comment = ""),
      (this.hcrc = 0),
      (this.done = !1);
  }
  var wa = ba,
    qi = Object.prototype.toString,
    {
      Z_NO_FLUSH: ya,
      Z_FINISH: ma,
      Z_OK: nt,
      Z_STREAM_END: qt,
      Z_NEED_DICT: jt,
      Z_STREAM_ERROR: va,
      Z_DATA_ERROR: ii,
      Z_MEM_ERROR: xa,
    } = Be;
  function lt(e) {
    this.options = mt.assign(
      { chunkSize: 1024 * 64, windowBits: 15, to: "" },
      e || {}
    );
    let o = this.options;
    o.raw &&
      o.windowBits >= 0 &&
      o.windowBits < 16 &&
      ((o.windowBits = -o.windowBits),
      o.windowBits === 0 && (o.windowBits = -15)),
      o.windowBits >= 0 &&
        o.windowBits < 16 &&
        !(e && e.windowBits) &&
        (o.windowBits += 32),
      o.windowBits > 15 &&
        o.windowBits < 48 &&
        (o.windowBits & 15 || (o.windowBits |= 15)),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Oi()),
      (this.strm.avail_out = 0);
    let n = he.inflateInit2(this.strm, o.windowBits);
    if (n !== nt) throw new Error(Oe[n]);
    if (
      ((this.header = new wa()),
      he.inflateGetHeader(this.strm, this.header),
      o.dictionary &&
        (typeof o.dictionary == "string"
          ? (o.dictionary = tt.string2buf(o.dictionary))
          : qi.call(o.dictionary) === "[object ArrayBuffer]" &&
            (o.dictionary = new Uint8Array(o.dictionary)),
        o.raw &&
          ((n = he.inflateSetDictionary(this.strm, o.dictionary)), n !== nt)))
    )
      throw new Error(Oe[n]);
  }
  lt.prototype.push = function (e, o) {
    let n = this.strm,
      r = this.options.chunkSize,
      t = this.options.dictionary,
      i,
      l,
      a;
    if (this.ended) return !1;
    for (
      o === ~~o ? (l = o) : (l = o === !0 ? ma : ya),
        qi.call(e) === "[object ArrayBuffer]"
          ? (n.input = new Uint8Array(e))
          : (n.input = e),
        n.next_in = 0,
        n.avail_in = n.input.length;
      ;

    ) {
      for (
        n.avail_out === 0 &&
          ((n.output = new Uint8Array(r)), (n.next_out = 0), (n.avail_out = r)),
          i = he.inflate(n, l),
          i === jt &&
            t &&
            ((i = he.inflateSetDictionary(n, t)),
            i === nt ? (i = he.inflate(n, l)) : i === ii && (i = jt));
        n.avail_in > 0 && i === qt && n.state.wrap > 0 && e[n.next_in] !== 0;

      )
        he.inflateReset(n), (i = he.inflate(n, l));
      switch (i) {
        case va:
        case ii:
        case jt:
        case xa:
          return this.onEnd(i), (this.ended = !0), !1;
      }
      if (((a = n.avail_out), n.next_out && (n.avail_out === 0 || i === qt)))
        if (this.options.to === "string") {
          let f = tt.utf8border(n.output, n.next_out),
            c = n.next_out - f,
            u = tt.buf2string(n.output, f);
          (n.next_out = c),
            (n.avail_out = r - c),
            c && n.output.set(n.output.subarray(f, f + c), 0),
            this.onData(u);
        } else
          this.onData(
            n.output.length === n.next_out
              ? n.output
              : n.output.subarray(0, n.next_out)
          );
      if (!(i === nt && a === 0)) {
        if (i === qt)
          return (
            (i = he.inflateEnd(this.strm)), this.onEnd(i), (this.ended = !0), !0
          );
        if (n.avail_in === 0) break;
      }
    }
    return !0;
  };
  lt.prototype.onData = function (e) {
    this.chunks.push(e);
  };
  lt.prototype.onEnd = function (e) {
    e === nt &&
      (this.options.to === "string"
        ? (this.result = this.chunks.join(""))
        : (this.result = mt.flattenChunks(this.chunks))),
      (this.chunks = []),
      (this.err = e),
      (this.msg = this.strm.msg);
  };
  function tn(e, o) {
    let n = new lt(o);
    if ((n.push(e), n.err)) throw n.msg || Oe[n.err];
    return n.result;
  }
  function Sa(e, o) {
    return (o = o || {}), (o.raw = !0), tn(e, o);
  }
  var ka = lt,
    Oa = tn,
    Ma = Sa,
    Ta = tn,
    Ba = Be,
    Ea = {
      Inflate: ka,
      inflate: Oa,
      inflateRaw: Ma,
      ungzip: Ta,
      constants: Ba,
    },
    { Deflate: Da, deflate: Ia, deflateRaw: Ca, gzip: Aa } = zl,
    { Inflate: Na, inflate: Ra, inflateRaw: La, ungzip: za } = Ea,
    qa = Da,
    ja = Ia,
    Ga = Ca,
    Pa = Aa,
    $a = Na,
    Za = Ra,
    Ua = La,
    Fa = za,
    Ha = Be,
    ji = {
      Deflate: qa,
      deflate: ja,
      deflateRaw: Ga,
      gzip: Pa,
      Inflate: $a,
      inflate: Za,
      inflateRaw: Ua,
      ungzip: Fa,
      constants: Ha,
    };
  function nn(e, ...o) {
    console.log(`[Tactiq] ${e}`, ...o);
  }
  var N = Xo(qo()),
    p = N.Reader,
    $ = N.Writer,
    x = N.util,
    d = N.roots.default || (N.roots.default = {}),
    $e = (d.TactiqGoogleMeet = ((e) => (
      (e.BChatMessageText = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.value = ""),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.value != null &&
                Object.hasOwnProperty.call(t, "value") &&
                i.uint32(10).string(t.value),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BChatMessageText();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 1:
                  a.value = t.string();
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            return typeof t != "object" || t === null
              ? "object expected"
              : t.value != null &&
                t.hasOwnProperty("value") &&
                !x.isString(t.value)
              ? "value: string expected"
              : null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BChatMessageText) return t;
            let i = new d.TactiqGoogleMeet.BChatMessageText();
            return t.value != null && (i.value = String(t.value)), i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && (l.value = ""),
              t.value != null &&
                t.hasOwnProperty("value") &&
                (l.value = t.value),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BChatMessageText || {})),
      (e.BChatMessage = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.deviceId = ""),
          (n.prototype.timestamp = x.Long ? x.Long.fromBits(0, 0, !1) : 0),
          (n.prototype.text = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.deviceId != null &&
                Object.hasOwnProperty.call(t, "deviceId") &&
                i.uint32(18).string(t.deviceId),
              t.timestamp != null &&
                Object.hasOwnProperty.call(t, "timestamp") &&
                i.uint32(24).int64(t.timestamp),
              t.text != null &&
                Object.hasOwnProperty.call(t, "text") &&
                d.TactiqGoogleMeet.BChatMessageText.encode(
                  t.text,
                  i.uint32(42).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BChatMessage();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 2:
                  a.deviceId = t.string();
                  break;
                case 3:
                  a.timestamp = t.int64();
                  break;
                case 5:
                  a.text = d.TactiqGoogleMeet.BChatMessageText.decode(
                    t,
                    t.uint32()
                  );
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (
              t.deviceId != null &&
              t.hasOwnProperty("deviceId") &&
              !x.isString(t.deviceId)
            )
              return "deviceId: string expected";
            if (
              t.timestamp != null &&
              t.hasOwnProperty("timestamp") &&
              !x.isInteger(t.timestamp) &&
              !(
                t.timestamp &&
                x.isInteger(t.timestamp.low) &&
                x.isInteger(t.timestamp.high)
              )
            )
              return "timestamp: integer|Long expected";
            if (t.text != null && t.hasOwnProperty("text")) {
              let i = d.TactiqGoogleMeet.BChatMessageText.verify(t.text);
              if (i) return "text." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BChatMessage) return t;
            let i = new d.TactiqGoogleMeet.BChatMessage();
            if (
              (t.deviceId != null && (i.deviceId = String(t.deviceId)),
              t.timestamp != null &&
                (x.Long
                  ? ((i.timestamp = x.Long.fromValue(t.timestamp)).unsigned =
                      !1)
                  : typeof t.timestamp == "string"
                  ? (i.timestamp = parseInt(t.timestamp, 10))
                  : typeof t.timestamp == "number"
                  ? (i.timestamp = t.timestamp)
                  : typeof t.timestamp == "object" &&
                    (i.timestamp = new x.LongBits(
                      t.timestamp.low >>> 0,
                      t.timestamp.high >>> 0
                    ).toNumber())),
              t.text != null)
            ) {
              if (typeof t.text != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BChatMessage.text: object expected"
                );
              i.text = d.TactiqGoogleMeet.BChatMessageText.fromObject(t.text);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            if (i.defaults) {
              if (((l.deviceId = ""), x.Long)) {
                let a = new x.Long(0, 0, !1);
                l.timestamp =
                  i.longs === String
                    ? a.toString()
                    : i.longs === Number
                    ? a.toNumber()
                    : a;
              } else l.timestamp = i.longs === String ? "0" : 0;
              l.text = null;
            }
            return (
              t.deviceId != null &&
                t.hasOwnProperty("deviceId") &&
                (l.deviceId = t.deviceId),
              t.timestamp != null &&
                t.hasOwnProperty("timestamp") &&
                (typeof t.timestamp == "number"
                  ? (l.timestamp =
                      i.longs === String ? String(t.timestamp) : t.timestamp)
                  : (l.timestamp =
                      i.longs === String
                        ? x.Long.prototype.toString.call(t.timestamp)
                        : i.longs === Number
                        ? new x.LongBits(
                            t.timestamp.low >>> 0,
                            t.timestamp.high >>> 0
                          ).toNumber()
                        : t.timestamp)),
              t.text != null &&
                t.hasOwnProperty("text") &&
                (l.text = d.TactiqGoogleMeet.BChatMessageText.toObject(
                  t.text,
                  i
                )),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BChatMessage || {})),
      (e.BChatMessageSub4 = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.someoneElsesChatMessageMarker = ""),
          (n.prototype.message = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.someoneElsesChatMessageMarker != null &&
                Object.hasOwnProperty.call(
                  t,
                  "someoneElsesChatMessageMarker"
                ) &&
                i.uint32(10).string(t.someoneElsesChatMessageMarker),
              t.message != null &&
                Object.hasOwnProperty.call(t, "message") &&
                d.TactiqGoogleMeet.BChatMessage.encode(
                  t.message,
                  i.uint32(18).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BChatMessageSub4();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 1:
                  a.someoneElsesChatMessageMarker = t.string();
                  break;
                case 2:
                  a.message = d.TactiqGoogleMeet.BChatMessage.decode(
                    t,
                    t.uint32()
                  );
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (
              t.someoneElsesChatMessageMarker != null &&
              t.hasOwnProperty("someoneElsesChatMessageMarker") &&
              !x.isString(t.someoneElsesChatMessageMarker)
            )
              return "someoneElsesChatMessageMarker: string expected";
            if (t.message != null && t.hasOwnProperty("message")) {
              let i = d.TactiqGoogleMeet.BChatMessage.verify(t.message);
              if (i) return "message." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BChatMessageSub4) return t;
            let i = new d.TactiqGoogleMeet.BChatMessageSub4();
            if (
              (t.someoneElsesChatMessageMarker != null &&
                (i.someoneElsesChatMessageMarker = String(
                  t.someoneElsesChatMessageMarker
                )),
              t.message != null)
            ) {
              if (typeof t.message != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BChatMessageSub4.message: object expected"
                );
              i.message = d.TactiqGoogleMeet.BChatMessage.fromObject(t.message);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults &&
                ((l.someoneElsesChatMessageMarker = ""), (l.message = null)),
              t.someoneElsesChatMessageMarker != null &&
                t.hasOwnProperty("someoneElsesChatMessageMarker") &&
                (l.someoneElsesChatMessageMarker =
                  t.someoneElsesChatMessageMarker),
              t.message != null &&
                t.hasOwnProperty("message") &&
                (l.message = d.TactiqGoogleMeet.BChatMessage.toObject(
                  t.message,
                  i
                )),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BChatMessageSub4 || {})),
      (e.BChatMessageSub3 = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.l4 = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.l4 != null &&
                Object.hasOwnProperty.call(t, "l4") &&
                d.TactiqGoogleMeet.BChatMessageSub4.encode(
                  t.l4,
                  i.uint32(34).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BChatMessageSub3();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 4:
                  a.l4 = d.TactiqGoogleMeet.BChatMessageSub4.decode(
                    t,
                    t.uint32()
                  );
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.l4 != null && t.hasOwnProperty("l4")) {
              let i = d.TactiqGoogleMeet.BChatMessageSub4.verify(t.l4);
              if (i) return "l4." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BChatMessageSub3) return t;
            let i = new d.TactiqGoogleMeet.BChatMessageSub3();
            if (t.l4 != null) {
              if (typeof t.l4 != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BChatMessageSub3.l4: object expected"
                );
              i.l4 = d.TactiqGoogleMeet.BChatMessageSub4.fromObject(t.l4);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && (l.l4 = null),
              t.l4 != null &&
                t.hasOwnProperty("l4") &&
                (l.l4 = d.TactiqGoogleMeet.BChatMessageSub4.toObject(t.l4, i)),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BChatMessageSub3 || {})),
      (e.BChatMessageSub2 = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.l3 = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.l3 != null &&
                Object.hasOwnProperty.call(t, "l3") &&
                d.TactiqGoogleMeet.BChatMessageSub3.encode(
                  t.l3,
                  i.uint32(106).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BChatMessageSub2();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 13:
                  a.l3 = d.TactiqGoogleMeet.BChatMessageSub3.decode(
                    t,
                    t.uint32()
                  );
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.l3 != null && t.hasOwnProperty("l3")) {
              let i = d.TactiqGoogleMeet.BChatMessageSub3.verify(t.l3);
              if (i) return "l3." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BChatMessageSub2) return t;
            let i = new d.TactiqGoogleMeet.BChatMessageSub2();
            if (t.l3 != null) {
              if (typeof t.l3 != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BChatMessageSub2.l3: object expected"
                );
              i.l3 = d.TactiqGoogleMeet.BChatMessageSub3.fromObject(t.l3);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && (l.l3 = null),
              t.l3 != null &&
                t.hasOwnProperty("l3") &&
                (l.l3 = d.TactiqGoogleMeet.BChatMessageSub3.toObject(t.l3, i)),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BChatMessageSub2 || {})),
      (e.BChatMessageSub1 = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.l2 = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.l2 != null &&
                Object.hasOwnProperty.call(t, "l2") &&
                d.TactiqGoogleMeet.BChatMessageSub2.encode(
                  t.l2,
                  i.uint32(18).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BChatMessageSub1();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 2:
                  a.l2 = d.TactiqGoogleMeet.BChatMessageSub2.decode(
                    t,
                    t.uint32()
                  );
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.l2 != null && t.hasOwnProperty("l2")) {
              let i = d.TactiqGoogleMeet.BChatMessageSub2.verify(t.l2);
              if (i) return "l2." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BChatMessageSub1) return t;
            let i = new d.TactiqGoogleMeet.BChatMessageSub1();
            if (t.l2 != null) {
              if (typeof t.l2 != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BChatMessageSub1.l2: object expected"
                );
              i.l2 = d.TactiqGoogleMeet.BChatMessageSub2.fromObject(t.l2);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && (l.l2 = null),
              t.l2 != null &&
                t.hasOwnProperty("l2") &&
                (l.l2 = d.TactiqGoogleMeet.BChatMessageSub2.toObject(t.l2, i)),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BChatMessageSub1 || {})),
      (e.BChatMessageWrapper = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.l1 = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.l1 != null &&
                Object.hasOwnProperty.call(t, "l1") &&
                d.TactiqGoogleMeet.BChatMessageSub1.encode(
                  t.l1,
                  i.uint32(10).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BChatMessageWrapper();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 1:
                  a.l1 = d.TactiqGoogleMeet.BChatMessageSub1.decode(
                    t,
                    t.uint32()
                  );
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.l1 != null && t.hasOwnProperty("l1")) {
              let i = d.TactiqGoogleMeet.BChatMessageSub1.verify(t.l1);
              if (i) return "l1." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BChatMessageWrapper) return t;
            let i = new d.TactiqGoogleMeet.BChatMessageWrapper();
            if (t.l1 != null) {
              if (typeof t.l1 != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BChatMessageWrapper.l1: object expected"
                );
              i.l1 = d.TactiqGoogleMeet.BChatMessageSub1.fromObject(t.l1);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && (l.l1 = null),
              t.l1 != null &&
                t.hasOwnProperty("l1") &&
                (l.l1 = d.TactiqGoogleMeet.BChatMessageSub1.toObject(t.l1, i)),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BChatMessageWrapper || {})),
      (e.BTranscriptMessage = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.deviceId = ""),
          (n.prototype.messageId = x.Long ? x.Long.fromBits(0, 0, !1) : 0),
          (n.prototype.messageVersion = x.Long ? x.Long.fromBits(0, 0, !1) : 0),
          (n.prototype.text = ""),
          (n.prototype.langId = x.Long ? x.Long.fromBits(0, 0, !1) : 0),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.deviceId != null &&
                Object.hasOwnProperty.call(t, "deviceId") &&
                i.uint32(10).string(t.deviceId),
              t.messageId != null &&
                Object.hasOwnProperty.call(t, "messageId") &&
                i.uint32(16).int64(t.messageId),
              t.messageVersion != null &&
                Object.hasOwnProperty.call(t, "messageVersion") &&
                i.uint32(24).int64(t.messageVersion),
              t.text != null &&
                Object.hasOwnProperty.call(t, "text") &&
                i.uint32(50).string(t.text),
              t.langId != null &&
                Object.hasOwnProperty.call(t, "langId") &&
                i.uint32(64).int64(t.langId),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BTranscriptMessage();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 1:
                  a.deviceId = t.string();
                  break;
                case 2:
                  a.messageId = t.int64();
                  break;
                case 3:
                  a.messageVersion = t.int64();
                  break;
                case 6:
                  a.text = t.string();
                  break;
                case 8:
                  a.langId = t.int64();
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            return typeof t != "object" || t === null
              ? "object expected"
              : t.deviceId != null &&
                t.hasOwnProperty("deviceId") &&
                !x.isString(t.deviceId)
              ? "deviceId: string expected"
              : t.messageId != null &&
                t.hasOwnProperty("messageId") &&
                !x.isInteger(t.messageId) &&
                !(
                  t.messageId &&
                  x.isInteger(t.messageId.low) &&
                  x.isInteger(t.messageId.high)
                )
              ? "messageId: integer|Long expected"
              : t.messageVersion != null &&
                t.hasOwnProperty("messageVersion") &&
                !x.isInteger(t.messageVersion) &&
                !(
                  t.messageVersion &&
                  x.isInteger(t.messageVersion.low) &&
                  x.isInteger(t.messageVersion.high)
                )
              ? "messageVersion: integer|Long expected"
              : t.text != null &&
                t.hasOwnProperty("text") &&
                !x.isString(t.text)
              ? "text: string expected"
              : t.langId != null &&
                t.hasOwnProperty("langId") &&
                !x.isInteger(t.langId) &&
                !(
                  t.langId &&
                  x.isInteger(t.langId.low) &&
                  x.isInteger(t.langId.high)
                )
              ? "langId: integer|Long expected"
              : null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BTranscriptMessage) return t;
            let i = new d.TactiqGoogleMeet.BTranscriptMessage();
            return (
              t.deviceId != null && (i.deviceId = String(t.deviceId)),
              t.messageId != null &&
                (x.Long
                  ? ((i.messageId = x.Long.fromValue(t.messageId)).unsigned =
                      !1)
                  : typeof t.messageId == "string"
                  ? (i.messageId = parseInt(t.messageId, 10))
                  : typeof t.messageId == "number"
                  ? (i.messageId = t.messageId)
                  : typeof t.messageId == "object" &&
                    (i.messageId = new x.LongBits(
                      t.messageId.low >>> 0,
                      t.messageId.high >>> 0
                    ).toNumber())),
              t.messageVersion != null &&
                (x.Long
                  ? ((i.messageVersion = x.Long.fromValue(
                      t.messageVersion
                    )).unsigned = !1)
                  : typeof t.messageVersion == "string"
                  ? (i.messageVersion = parseInt(t.messageVersion, 10))
                  : typeof t.messageVersion == "number"
                  ? (i.messageVersion = t.messageVersion)
                  : typeof t.messageVersion == "object" &&
                    (i.messageVersion = new x.LongBits(
                      t.messageVersion.low >>> 0,
                      t.messageVersion.high >>> 0
                    ).toNumber())),
              t.text != null && (i.text = String(t.text)),
              t.langId != null &&
                (x.Long
                  ? ((i.langId = x.Long.fromValue(t.langId)).unsigned = !1)
                  : typeof t.langId == "string"
                  ? (i.langId = parseInt(t.langId, 10))
                  : typeof t.langId == "number"
                  ? (i.langId = t.langId)
                  : typeof t.langId == "object" &&
                    (i.langId = new x.LongBits(
                      t.langId.low >>> 0,
                      t.langId.high >>> 0
                    ).toNumber())),
              i
            );
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            if (i.defaults) {
              if (((l.deviceId = ""), x.Long)) {
                let a = new x.Long(0, 0, !1);
                l.messageId =
                  i.longs === String
                    ? a.toString()
                    : i.longs === Number
                    ? a.toNumber()
                    : a;
              } else l.messageId = i.longs === String ? "0" : 0;
              if (x.Long) {
                let a = new x.Long(0, 0, !1);
                l.messageVersion =
                  i.longs === String
                    ? a.toString()
                    : i.longs === Number
                    ? a.toNumber()
                    : a;
              } else l.messageVersion = i.longs === String ? "0" : 0;
              if (((l.text = ""), x.Long)) {
                let a = new x.Long(0, 0, !1);
                l.langId =
                  i.longs === String
                    ? a.toString()
                    : i.longs === Number
                    ? a.toNumber()
                    : a;
              } else l.langId = i.longs === String ? "0" : 0;
            }
            return (
              t.deviceId != null &&
                t.hasOwnProperty("deviceId") &&
                (l.deviceId = t.deviceId),
              t.messageId != null &&
                t.hasOwnProperty("messageId") &&
                (typeof t.messageId == "number"
                  ? (l.messageId =
                      i.longs === String ? String(t.messageId) : t.messageId)
                  : (l.messageId =
                      i.longs === String
                        ? x.Long.prototype.toString.call(t.messageId)
                        : i.longs === Number
                        ? new x.LongBits(
                            t.messageId.low >>> 0,
                            t.messageId.high >>> 0
                          ).toNumber()
                        : t.messageId)),
              t.messageVersion != null &&
                t.hasOwnProperty("messageVersion") &&
                (typeof t.messageVersion == "number"
                  ? (l.messageVersion =
                      i.longs === String
                        ? String(t.messageVersion)
                        : t.messageVersion)
                  : (l.messageVersion =
                      i.longs === String
                        ? x.Long.prototype.toString.call(t.messageVersion)
                        : i.longs === Number
                        ? new x.LongBits(
                            t.messageVersion.low >>> 0,
                            t.messageVersion.high >>> 0
                          ).toNumber()
                        : t.messageVersion)),
              t.text != null && t.hasOwnProperty("text") && (l.text = t.text),
              t.langId != null &&
                t.hasOwnProperty("langId") &&
                (typeof t.langId == "number"
                  ? (l.langId =
                      i.longs === String ? String(t.langId) : t.langId)
                  : (l.langId =
                      i.longs === String
                        ? x.Long.prototype.toString.call(t.langId)
                        : i.longs === Number
                        ? new x.LongBits(
                            t.langId.low >>> 0,
                            t.langId.high >>> 0
                          ).toNumber()
                        : t.langId)),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BTranscriptMessage || {})),
      (e.BTranscriptMessageWrapper = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.message = null),
          (n.prototype.unknown2 = ""),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.message != null &&
                Object.hasOwnProperty.call(t, "message") &&
                d.TactiqGoogleMeet.BTranscriptMessage.encode(
                  t.message,
                  i.uint32(10).fork()
                ).ldelim(),
              t.unknown2 != null &&
                Object.hasOwnProperty.call(t, "unknown2") &&
                i.uint32(18).string(t.unknown2),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BTranscriptMessageWrapper();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 1:
                  a.message = d.TactiqGoogleMeet.BTranscriptMessage.decode(
                    t,
                    t.uint32()
                  );
                  break;
                case 2:
                  a.unknown2 = t.string();
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.message != null && t.hasOwnProperty("message")) {
              let i = d.TactiqGoogleMeet.BTranscriptMessage.verify(t.message);
              if (i) return "message." + i;
            }
            return t.unknown2 != null &&
              t.hasOwnProperty("unknown2") &&
              !x.isString(t.unknown2)
              ? "unknown2: string expected"
              : null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BTranscriptMessageWrapper)
              return t;
            let i = new d.TactiqGoogleMeet.BTranscriptMessageWrapper();
            if (t.message != null) {
              if (typeof t.message != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BTranscriptMessageWrapper.message: object expected"
                );
              i.message = d.TactiqGoogleMeet.BTranscriptMessage.fromObject(
                t.message
              );
            }
            return t.unknown2 != null && (i.unknown2 = String(t.unknown2)), i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && ((l.message = null), (l.unknown2 = "")),
              t.message != null &&
                t.hasOwnProperty("message") &&
                (l.message = d.TactiqGoogleMeet.BTranscriptMessage.toObject(
                  t.message,
                  i
                )),
              t.unknown2 != null &&
                t.hasOwnProperty("unknown2") &&
                (l.unknown2 = t.unknown2),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BTranscriptMessageWrapper || {})),
      (e.BDevice = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.l1 = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.l1 != null &&
                Object.hasOwnProperty.call(t, "l1") &&
                d.TactiqGoogleMeet.BDeviceSub1.encode(
                  t.l1,
                  i.uint32(10).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BDevice();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 1:
                  a.l1 = d.TactiqGoogleMeet.BDeviceSub1.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.l1 != null && t.hasOwnProperty("l1")) {
              let i = d.TactiqGoogleMeet.BDeviceSub1.verify(t.l1);
              if (i) return "l1." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BDevice) return t;
            let i = new d.TactiqGoogleMeet.BDevice();
            if (t.l1 != null) {
              if (typeof t.l1 != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BDevice.l1: object expected"
                );
              i.l1 = d.TactiqGoogleMeet.BDeviceSub1.fromObject(t.l1);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && (l.l1 = null),
              t.l1 != null &&
                t.hasOwnProperty("l1") &&
                (l.l1 = d.TactiqGoogleMeet.BDeviceSub1.toObject(t.l1, i)),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BDevice || {})),
      (e.BDeviceSub1 = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.l2 = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.l2 != null &&
                Object.hasOwnProperty.call(t, "l2") &&
                d.TactiqGoogleMeet.BDeviceSub2.encode(
                  t.l2,
                  i.uint32(18).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BDeviceSub1();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 2:
                  a.l2 = d.TactiqGoogleMeet.BDeviceSub2.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.l2 != null && t.hasOwnProperty("l2")) {
              let i = d.TactiqGoogleMeet.BDeviceSub2.verify(t.l2);
              if (i) return "l2." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BDeviceSub1) return t;
            let i = new d.TactiqGoogleMeet.BDeviceSub1();
            if (t.l2 != null) {
              if (typeof t.l2 != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BDeviceSub1.l2: object expected"
                );
              i.l2 = d.TactiqGoogleMeet.BDeviceSub2.fromObject(t.l2);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && (l.l2 = null),
              t.l2 != null &&
                t.hasOwnProperty("l2") &&
                (l.l2 = d.TactiqGoogleMeet.BDeviceSub2.toObject(t.l2, i)),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BDeviceSub1 || {})),
      (e.BDeviceSub2 = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.l3 = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.l3 != null &&
                Object.hasOwnProperty.call(t, "l3") &&
                d.TactiqGoogleMeet.BDeviceSub3.encode(
                  t.l3,
                  i.uint32(106).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BDeviceSub2();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 13:
                  a.l3 = d.TactiqGoogleMeet.BDeviceSub3.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.l3 != null && t.hasOwnProperty("l3")) {
              let i = d.TactiqGoogleMeet.BDeviceSub3.verify(t.l3);
              if (i) return "l3." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BDeviceSub2) return t;
            let i = new d.TactiqGoogleMeet.BDeviceSub2();
            if (t.l3 != null) {
              if (typeof t.l3 != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BDeviceSub2.l3: object expected"
                );
              i.l3 = d.TactiqGoogleMeet.BDeviceSub3.fromObject(t.l3);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && (l.l3 = null),
              t.l3 != null &&
                t.hasOwnProperty("l3") &&
                (l.l3 = d.TactiqGoogleMeet.BDeviceSub3.toObject(t.l3, i)),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BDeviceSub2 || {})),
      (e.BDeviceSub3 = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.l4 = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.l4 != null &&
                Object.hasOwnProperty.call(t, "l4") &&
                d.TactiqGoogleMeet.BDeviceSub4.encode(
                  t.l4,
                  i.uint32(10).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BDeviceSub3();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 1:
                  a.l4 = d.TactiqGoogleMeet.BDeviceSub4.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.l4 != null && t.hasOwnProperty("l4")) {
              let i = d.TactiqGoogleMeet.BDeviceSub4.verify(t.l4);
              if (i) return "l4." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BDeviceSub3) return t;
            let i = new d.TactiqGoogleMeet.BDeviceSub3();
            if (t.l4 != null) {
              if (typeof t.l4 != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BDeviceSub3.l4: object expected"
                );
              i.l4 = d.TactiqGoogleMeet.BDeviceSub4.fromObject(t.l4);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && (l.l4 = null),
              t.l4 != null &&
                t.hasOwnProperty("l4") &&
                (l.l4 = d.TactiqGoogleMeet.BDeviceSub4.toObject(t.l4, i)),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BDeviceSub3 || {})),
      (e.BDeviceSub5 = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.deviceId = ""),
          (n.prototype.deviceName = ""),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.deviceId != null &&
                Object.hasOwnProperty.call(t, "deviceId") &&
                i.uint32(10).string(t.deviceId),
              t.deviceName != null &&
                Object.hasOwnProperty.call(t, "deviceName") &&
                i.uint32(18).string(t.deviceName),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BDeviceSub5();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 1:
                  a.deviceId = t.string();
                  break;
                case 2:
                  a.deviceName = t.string();
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            return typeof t != "object" || t === null
              ? "object expected"
              : t.deviceId != null &&
                t.hasOwnProperty("deviceId") &&
                !x.isString(t.deviceId)
              ? "deviceId: string expected"
              : t.deviceName != null &&
                t.hasOwnProperty("deviceName") &&
                !x.isString(t.deviceName)
              ? "deviceName: string expected"
              : null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BDeviceSub5) return t;
            let i = new d.TactiqGoogleMeet.BDeviceSub5();
            return (
              t.deviceId != null && (i.deviceId = String(t.deviceId)),
              t.deviceName != null && (i.deviceName = String(t.deviceName)),
              i
            );
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && ((l.deviceId = ""), (l.deviceName = "")),
              t.deviceId != null &&
                t.hasOwnProperty("deviceId") &&
                (l.deviceId = t.deviceId),
              t.deviceName != null &&
                t.hasOwnProperty("deviceName") &&
                (l.deviceName = t.deviceName),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BDeviceSub5 || {})),
      (e.BDeviceSub4 = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.l5 = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.l5 != null &&
                Object.hasOwnProperty.call(t, "l5") &&
                d.TactiqGoogleMeet.BDeviceSub5.encode(
                  t.l5,
                  i.uint32(18).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BDeviceSub4();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 2:
                  a.l5 = d.TactiqGoogleMeet.BDeviceSub5.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.l5 != null && t.hasOwnProperty("l5")) {
              let i = d.TactiqGoogleMeet.BDeviceSub5.verify(t.l5);
              if (i) return "l5." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BDeviceSub4) return t;
            let i = new d.TactiqGoogleMeet.BDeviceSub4();
            if (t.l5 != null) {
              if (typeof t.l5 != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BDeviceSub4.l5: object expected"
                );
              i.l5 = d.TactiqGoogleMeet.BDeviceSub5.fromObject(t.l5);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && (l.l5 = null),
              t.l5 != null &&
                t.hasOwnProperty("l5") &&
                (l.l5 = d.TactiqGoogleMeet.BDeviceSub5.toObject(t.l5, i)),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BDeviceSub4 || {})),
      (e.BMeetingCollection = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.l1 = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.l1 != null &&
                Object.hasOwnProperty.call(t, "l1") &&
                d.TactiqGoogleMeet.BMeetingCollectionSub1.encode(
                  t.l1,
                  i.uint32(18).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BMeetingCollection();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 2:
                  a.l1 = d.TactiqGoogleMeet.BMeetingCollectionSub1.decode(
                    t,
                    t.uint32()
                  );
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.l1 != null && t.hasOwnProperty("l1")) {
              let i = d.TactiqGoogleMeet.BMeetingCollectionSub1.verify(t.l1);
              if (i) return "l1." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BMeetingCollection) return t;
            let i = new d.TactiqGoogleMeet.BMeetingCollection();
            if (t.l1 != null) {
              if (typeof t.l1 != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BMeetingCollection.l1: object expected"
                );
              i.l1 = d.TactiqGoogleMeet.BMeetingCollectionSub1.fromObject(t.l1);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && (l.l1 = null),
              t.l1 != null &&
                t.hasOwnProperty("l1") &&
                (l.l1 = d.TactiqGoogleMeet.BMeetingCollectionSub1.toObject(
                  t.l1,
                  i
                )),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BMeetingCollection || {})),
      (e.BMeetingCollectionSub1 = (function (n) {
        function n(r) {
          if (r)
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.l2 = null),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            return (
              i || (i = $.create()),
              t.l2 != null &&
                Object.hasOwnProperty.call(t, "l2") &&
                d.TactiqGoogleMeet.BMeetingCollectionSub2.encode(
                  t.l2,
                  i.uint32(18).fork()
                ).ldelim(),
              i
            );
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BMeetingCollectionSub1();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 2:
                  a.l2 = d.TactiqGoogleMeet.BMeetingCollectionSub2.decode(
                    t,
                    t.uint32()
                  );
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.l2 != null && t.hasOwnProperty("l2")) {
              let i = d.TactiqGoogleMeet.BMeetingCollectionSub2.verify(t.l2);
              if (i) return "l2." + i;
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BMeetingCollectionSub1)
              return t;
            let i = new d.TactiqGoogleMeet.BMeetingCollectionSub1();
            if (t.l2 != null) {
              if (typeof t.l2 != "object")
                throw TypeError(
                  ".TactiqGoogleMeet.BMeetingCollectionSub1.l2: object expected"
                );
              i.l2 = d.TactiqGoogleMeet.BMeetingCollectionSub2.fromObject(t.l2);
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            return (
              i.defaults && (l.l2 = null),
              t.l2 != null &&
                t.hasOwnProperty("l2") &&
                (l.l2 = d.TactiqGoogleMeet.BMeetingCollectionSub2.toObject(
                  t.l2,
                  i
                )),
              l
            );
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BMeetingCollectionSub1 || {})),
      (e.BMeetingCollectionSub2 = (function (n) {
        function n(r) {
          if (((this.l3 = []), r))
            for (let t = Object.keys(r), i = 0; i < t.length; ++i)
              r[t[i]] != null && (this[t[i]] = r[t[i]]);
        }
        return (
          (n.prototype.l3 = x.emptyArray),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.encode = function (t, i) {
            if ((i || (i = $.create()), t.l3 != null && t.l3.length))
              for (let l = 0; l < t.l3.length; ++l)
                d.TactiqGoogleMeet.BDeviceSub5.encode(
                  t.l3[l],
                  i.uint32(18).fork()
                ).ldelim();
            return i;
          }),
          (n.encodeDelimited = function (t, i) {
            return this.encode(t, i).ldelim();
          }),
          (n.decode = function (t, i) {
            t instanceof p || (t = p.create(t));
            let l = i === void 0 ? t.len : t.pos + i,
              a = new d.TactiqGoogleMeet.BMeetingCollectionSub2();
            for (; t.pos < l; ) {
              let f = t.uint32();
              switch (f >>> 3) {
                case 2:
                  (a.l3 && a.l3.length) || (a.l3 = []),
                    a.l3.push(
                      d.TactiqGoogleMeet.BDeviceSub5.decode(t, t.uint32())
                    );
                  break;
                default:
                  t.skipType(f & 7);
                  break;
              }
            }
            return a;
          }),
          (n.decodeDelimited = function (t) {
            return t instanceof p || (t = new p(t)), this.decode(t, t.uint32());
          }),
          (n.verify = function (t) {
            if (typeof t != "object" || t === null) return "object expected";
            if (t.l3 != null && t.hasOwnProperty("l3")) {
              if (!Array.isArray(t.l3)) return "l3: array expected";
              for (let i = 0; i < t.l3.length; ++i) {
                let l = d.TactiqGoogleMeet.BDeviceSub5.verify(t.l3[i]);
                if (l) return "l3." + l;
              }
            }
            return null;
          }),
          (n.fromObject = function (t) {
            if (t instanceof d.TactiqGoogleMeet.BMeetingCollectionSub2)
              return t;
            let i = new d.TactiqGoogleMeet.BMeetingCollectionSub2();
            if (t.l3) {
              if (!Array.isArray(t.l3))
                throw TypeError(
                  ".TactiqGoogleMeet.BMeetingCollectionSub2.l3: array expected"
                );
              i.l3 = [];
              for (let l = 0; l < t.l3.length; ++l) {
                if (typeof t.l3[l] != "object")
                  throw TypeError(
                    ".TactiqGoogleMeet.BMeetingCollectionSub2.l3: object expected"
                  );
                i.l3[l] = d.TactiqGoogleMeet.BDeviceSub5.fromObject(t.l3[l]);
              }
            }
            return i;
          }),
          (n.toObject = function (t, i) {
            i || (i = {});
            let l = {};
            if (
              ((i.arrays || i.defaults) && (l.l3 = []), t.l3 && t.l3.length)
            ) {
              l.l3 = [];
              for (let a = 0; a < t.l3.length; ++a)
                l.l3[a] = d.TactiqGoogleMeet.BDeviceSub5.toObject(t.l3[a], i);
            }
            return l;
          }),
          (n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions);
          }),
          n
        );
      })(e.BMeetingCollectionSub2 || {})),
      e
    ))(d.TactiqGoogleMeet || {}));
  function jo(e) {
    let o;
    try {
      o = $e.BChatMessageWrapper.decode(new Uint8Array(e)).l1?.l2?.l3?.l4
        ?.message;
    } catch {
      try {
        o = $e.BChatMessage.decode(new Uint8Array(e));
      } catch {
        return;
      }
    }
    if (o)
      return {
        type: "chat",
        deviceId: `@${o.deviceId}`,
        messageId: `${o.timestamp}/@${o.deviceId}`,
        messageVersion: 0,
        text: o.text?.value || "",
      };
  }
  function Go(e) {
    let o;
    try {
      let n = $e.BTranscriptMessageWrapper.decode(e);
      if (n.unknown2) return {};
      o = n.message;
    } catch {
      return;
    }
    if (o && !(!o.deviceId || !o.messageId || !o.messageVersion || !o.langId))
      return {
        message: {
          deviceId: `@${o.deviceId}`,
          messageId: `${o.messageId}/@${o.deviceId}`,
          messageVersion:
            typeof o.messageVersion == "number"
              ? o.messageVersion
              : o.messageVersion.low,
          langId: typeof o.langId == "number" ? o.langId : o.langId.low,
          text: o.text || "",
        },
      };
  }
  function Po(e) {
    let o;
    try {
      o = $e.BDevice.decode(new Uint8Array(e)).l1?.l2?.l3?.l4?.l5;
    } catch {
      return;
    }
    if (!(!o || !o.deviceId || !o.deviceName))
      return { deviceId: `@${o.deviceId}`, deviceName: o.deviceName };
  }
  function $o(e) {
    let o;
    try {
      o = $e.BMeetingCollection.decode(new Uint8Array(e)).l1?.l2?.l3;
    } catch {
      return;
    }
    if (!(!o || !o.length))
      return o
        .filter((n) => n.deviceId && n.deviceName)
        .map((n) => ({
          deviceId: `@${n.deviceId}`,
          deviceName: n.deviceName ?? "",
        }));
  }
  (function () {
    let e = !1;
    function o(s) {
      return new Promise(function (b) {
        setTimeout(b, s);
      });
    }
    function n(s, b, S = 0, g = -1) {
      e: for (let m = S; m <= s.length - b.length; ++m) {
        for (let w = 0; w < b.length; ++w)
          if ((g === -1 || g !== w) && s[m + w] !== b[w]) continue e;
        return m;
      }
      return -1;
    }
    function r(s, b, S = 0, g = -1) {
      let m = n(s, b, S, g);
      return m === -1 ? null : { index: m, length: b.length };
    }
    function t(s) {
      return !s || s.length < 3
        ? !1
        : s[0] === 31 && s[1] === 139 && s[2] === 8;
    }
    function i(s) {
      let b = new Uint8Array(s);
      return t(b) ? ji.inflate(b) : b;
    }
    function l(s) {
      let b = Go(new Uint8Array(s.buffer));
      if (b?.message) return b.message;
      if (b) return;
      e &&
        document.documentElement.dispatchEvent(
          new window.CustomEvent("tactiq-message", {
            detail: { type: "debug", data: s.join(", ") },
          })
        );
      let S = s.indexOf(16) + 1,
        g =
          [
            n(s, [24, 0, 32, 1, 45, 0], S, 1),
            n(s, [24, 0, 1, 32, 1, 45, 0], S, 1),
            n(s, [24, 0, 45, 0], S, 1),
            n(s, [24, 0, 1, 45, 0], S, 1),
          ].find((W) => W > -1) ?? -1,
        m = null;
      if (g === -1)
        if (
          ((m =
            [
              r(s, [24, 0, 32, 1, 50], S, 1),
              r(s, [24, 0, 1, 32, 1, 50], S, 1),
              r(s, [24, 0, 50], S, 1),
              r(s, [24, 0, 1, 50], S, 1),
            ].find((W) => W) ?? null),
          m)
        )
          g = m.index;
        else return null;
      let w = g > -1 ? g : S + 2,
        y = s.slice(S, w),
        M = 0;
      for (let W = 0; W < y.length; W++) M = M + y[W] * Math.pow(256, W);
      let z = m
          ? s.slice(m.index + m.length + 1)
          : s.slice(n(s, [128, 63]) + 4),
        Y =
          [n(z, [64, 0, 72], 0, 1), n(z, [64, 0, 80], 0, 1)].find(
            (W) => W > -1
          ) ?? -1;
      if (Y === -1) return null;
      let F = z[Y + 1];
      z = z.slice(0, Y);
      let J = new window.TextDecoder()
          .decode(s.slice(3, s.indexOf(16, 4)).buffer)
          .trim(),
        ue = {
          deviceId: J,
          messageId: `${M}/${J}`,
          messageVersion: s[w + 1],
          langId: F,
          text: new window.TextDecoder().decode(z.buffer),
        };
      return (
        ue.deviceId &&
          ue.text &&
          s[w] !== 24 &&
          console.debug("Unexpected Boundary", s),
        ue.deviceId && ue.text ? ue : null
      );
    }
    function a(s, b = !1) {
      return Po(new Uint8Array(s.buffer)) ?? null;
    }
    function f(s, b = !1) {
      try {
        let S = jo(new Uint8Array(s.buffer));
        if (S) return S;
        e &&
          !b &&
          document.documentElement.dispatchEvent(
            new window.CustomEvent("tactiq-message", {
              detail: { type: "debug", data: s.join(", ") },
            })
          );
        let g = [47, 109, 101, 115, 115, 97, 103, 101, 115, 47],
          m = n(s, g);
        if (m === -1) return;
        let w = n(s, [18], m);
        if (w === -1) return;
        let y = new window.TextDecoder().decode(s.slice(m + g.length, w)),
          M = w + 1,
          z = n(s, [24], M),
          Y = new window.TextDecoder().decode(s.slice(M, z)),
          F = n(s, [10], M) + 1,
          J = s[F + 1] < 32 ? F + 2 : F + 1,
          ue = s.slice(F, J),
          W = 0;
        for (let Ce = 0; Ce < ue.length; Ce++)
          W += Math.pow(128, Ce) * (Ce ? ue[Ce] - 1 : ue[Ce]);
        let bn = J,
          Zo = bn + W,
          Uo = new window.TextDecoder().decode(s.slice(bn, Zo));
        return {
          type: "chat",
          deviceId: Y,
          messageId: `${y}/${Y}`,
          messageVersion: 0,
          text: Uo,
        };
      } catch (S) {
        return b || console.debug(S), null;
      }
    }
    let c = 5e4;
    function u() {
      return ++c;
    }
    let k = [];
    setInterval(() => {
      if (k.length) {
        let s = [...k];
        (k = []),
          document.documentElement.dispatchEvent(
            new window.CustomEvent("tactiq-message", {
              detail: { type: "speech", messages: s },
            })
          );
      }
    }, 500);
    function _(s) {
      let b = k.findIndex((S) => S.messageId === s.messageId);
      b > -1
        ? k[b].messageVersion <= s.messageVersion && k.splice(b, 1, s)
        : k.push(s);
    }
    function h() {
      if (!window.RTCPeerConnection) return !1;
      let s = window.RTCPeerConnection,
        b = function (m, w) {
          let y = new s(m, w);
          return (
            y.addEventListener("datachannel", function (M) {
              M.channel.label === "collections" &&
                ((window.tactiqRtc.RTCPeerConnection = y),
                M.channel.addEventListener("message", (z) => {
                  let Y = i(z.data),
                    F = a(Y, !0);
                  F &&
                    document.documentElement.dispatchEvent(
                      new window.CustomEvent("tactiq-message", {
                        detail: { type: "deviceinfo", ...F },
                      })
                    );
                  let J = f(Y, !0);
                  J &&
                    document.documentElement.dispatchEvent(
                      new window.CustomEvent("tactiq-message", {
                        detail: { type: "speech", messages: [J] },
                      })
                    );
                }));
            }),
            y
          );
        };
      document.documentElement.addEventListener("tactiq-rtc", async (m) => {
        for (; !window.tactiqRtc.RTCPeerConnection; ) await o(100);
        let w = m.detail;
        switch (w.type) {
          case "con":
            window.tactiqRtc.RTCDataChannel_cc =
              window.tactiqRtc.RTCPeerConnection.createDataChannel("captions", {
                ordered: !0,
                maxRetransmits: 10,
                id: u(),
              });
            break;
          case "debug":
            !e && w.enabled
              ? nn("Debug mode enabled")
              : e && !w.enabled && nn("Debug mode disabled"),
              (e = w.enabled);
            break;
          default:
            console.debug(w);
            break;
        }
      });
      let S = s.prototype.createDataChannel;
      S &&
        (s.prototype.createDataChannel = function () {
          let m = this,
            w = S.apply(this, arguments);
          if (w && w.label === "captions") {
            w.addEventListener("message", (M) => {
              let z = l(i(M.data));
              z && _(z);
            });
            let y = () => {
              w.readyState === "closing" || w.readyState === "closed"
                ? (window.tactiqRtc.RTCDataChannel_cc = m.createDataChannel(
                    "captions",
                    { ordered: !0, maxRetransmits: 10, id: u() }
                  ))
                : setTimeout(y, 1e3);
            };
            y();
          }
          return w;
        }),
        (window.RTCPeerConnection = b),
        (window.RTCPeerConnection.prototype = s.prototype);
      let g = document.createElement("meta");
      return (
        g.setAttribute("id", "tactiq-rtc"),
        g.setAttribute("name", "tactiq-rtc"),
        (document.head || document.documentElement).prepend(g),
        !0
      );
    }
    window.tactiq || (window.tactiqRtc = {}),
      (window.tactiqRtc.gotRTC = h()),
      console.debug("RTC Connection", window.tactiqRtc.gotRTC);
    function O(s) {
      let b = $o(new Uint8Array(s.buffer));
      return b?.length ? b : null;
    }
    let R = window.XMLHttpRequest.prototype.open,
      E = window.XMLHttpRequest.prototype.send,
      T = {
        modify:
          "https://meet.google.com/hangouts/v1_meetings/media_sessions/modify",
      };
    (window.XMLHttpRequest.prototype.open = function (s, b) {
      b.toString().indexOf(T.modify) === 0 &&
        (this.__tactiqRequestUrl = T.modify),
        R.apply(this, arguments);
    }),
      (window.XMLHttpRequest.prototype.send = function (s) {
        if (this.__tactiqRequestUrl)
          try {
            switch (this.__tactiqRequestUrl) {
              case T.modify: {
                let b = JSON.parse(s?.toString() || "[]"),
                  [, , S, g] = b[3][0][17];
                document.documentElement.dispatchEvent(
                  new window.CustomEvent("tactiq-message", {
                    detail: {
                      type: "language-changed",
                      payload: { translationLangId: S, transcriptLangId: g },
                    },
                  })
                );
              }
            }
          } catch (b) {
            console.error(b);
          }
        E.apply(this, arguments);
      });
    let C = window.fetch;
    window.fetch = function () {
      return new Promise((s, b) => {
        C.apply(this, arguments)
          .then((S) => {
            try {
              S.url ===
              "https://meet.google.com/$rpc/google.rtc.meetings.v1.MeetingSpaceService/SyncMeetingSpaceCollections"
                ? S.clone()
                    .text()
                    .then((m) => {
                      let w = Uint8Array.from(window.atob(m), (M) =>
                          M.charCodeAt(0)
                        ),
                        y = O(w);
                      y &&
                        document.documentElement.dispatchEvent(
                          new window.CustomEvent("tactiq-message", {
                            detail: { type: "premeeting-devices", devices: y },
                          })
                        );
                    })
                    .catch((m) => console.log(m))
                : S.url ===
                  "https://meet.google.com/$rpc/google.rtc.meetings.v1.MeetingMessageService/CreateMeetingMessage"
                ? S.clone()
                    .text()
                    .then((m) => {
                      let w = Uint8Array.from(window.atob(m), (M) =>
                          M.charCodeAt(0)
                        ),
                        y = f(w);
                      y &&
                        document.documentElement.dispatchEvent(
                          new window.CustomEvent("tactiq-message", {
                            detail: { type: "speech", messages: [y] },
                          })
                        );
                    })
                    .catch((m) => console.log(m))
                : S.url ===
                    "https://meet.google.com/$rpc/google.rtc.meetings.v1.MeetingRecordingService/CreateMeetingRecording" &&
                  document.documentElement.dispatchEvent(
                    new window.CustomEvent("tactiq-message", {
                      detail: { type: "created-recording" },
                    })
                  );
            } catch {}
            s(S);
          })
          .catch((S) => {
            b(S);
          });
      });
    };
    let B = Object.getOwnPropertyDescriptor(window, "innerWidth")?.get;
    window.__defineGetter__("innerWidth", function () {
      let s = B && B();
      return document.body.classList.contains("tactiq-sidebar-on")
        ? s - 320
        : s;
    }),
      document.documentElement?.__defineGetter__("clientWidth", function () {
        return window.innerWidth;
      }),
      document.body?.__defineGetter__("clientWidth", function () {
        return window.innerWidth;
      });
  })();
})();
