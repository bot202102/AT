"use strict";
(() => {
  var XC = Object.create;
  var jl = Object.defineProperty;
  var ZC = Object.getOwnPropertyDescriptor;
  var eM = Object.getOwnPropertyNames;
  var tM = Object.getPrototypeOf,
    rM = Object.prototype.hasOwnProperty;
  var T = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
    nM = (t, e) => {
      for (var r in e) jl(t, r, { get: e[r], enumerable: !0 });
    },
    iM = (t, e, r, n) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let i of eM(e))
          !rM.call(t, i) &&
            i !== r &&
            jl(t, i, {
              get: () => e[i],
              enumerable: !(n = ZC(e, i)) || n.enumerable,
            });
      return t;
    };
  var Fe = (t, e, r) => (
    (r = t != null ? XC(tM(t)) : {}),
    iM(
      e || !t || !t.__esModule
        ? jl(r, "default", { value: t, enumerable: !0 })
        : r,
      t
    )
  );
  var Wl = T((r9, Rm) => {
    var oM =
      typeof globalThis == "object" &&
      globalThis &&
      globalThis.Object === Object &&
      globalThis;
    Rm.exports = oM;
  });
  var $t = T((n9, Fm) => {
    var sM = Wl(),
      cM = typeof self == "object" && self && self.Object === Object && self,
      uM = sM || cM || Function("return this")();
    Fm.exports = uM;
  });
  var Nn = T((i9, Pm) => {
    var lM = $t(),
      pM = lM.Symbol;
    Pm.exports = pM;
  });
  var Bm = T((a9, qm) => {
    var Lm = Nn(),
      Um = Object.prototype,
      fM = Um.hasOwnProperty,
      dM = Um.toString,
      Ta = Lm ? Lm.toStringTag : void 0;
    function hM(t) {
      var e = fM.call(t, Ta),
        r = t[Ta];
      try {
        t[Ta] = void 0;
        var n = !0;
      } catch {}
      var i = dM.call(t);
      return n && (e ? (t[Ta] = r) : delete t[Ta]), i;
    }
    qm.exports = hM;
  });
  var Vm = T((o9, jm) => {
    var gM = Object.prototype,
      mM = gM.toString;
    function yM(t) {
      return mM.call(t);
    }
    jm.exports = yM;
  });
  var Dn = T((s9, Gm) => {
    var Wm = Nn(),
      vM = Bm(),
      _M = Vm(),
      bM = "[object Null]",
      SM = "[object Undefined]",
      Hm = Wm ? Wm.toStringTag : void 0;
    function TM(t) {
      return t == null
        ? t === void 0
          ? SM
          : bM
        : Hm && Hm in Object(t)
        ? vM(t)
        : _M(t);
    }
    Gm.exports = TM;
  });
  var rn = T((c9, zm) => {
    function EM(t) {
      var e = typeof t;
      return t != null && (e == "object" || e == "function");
    }
    zm.exports = EM;
  });
  var Hl = T((u9, $m) => {
    var IM = Dn(),
      xM = rn(),
      wM = "[object AsyncFunction]",
      AM = "[object Function]",
      OM = "[object GeneratorFunction]",
      kM = "[object Proxy]";
    function CM(t) {
      if (!xM(t)) return !1;
      var e = IM(t);
      return e == AM || e == OM || e == wM || e == kM;
    }
    $m.exports = CM;
  });
  var Qm = T((l9, Km) => {
    var MM = $t(),
      NM = MM["__core-js_shared__"];
    Km.exports = NM;
  });
  var Xm = T((p9, Jm) => {
    var Gl = Qm(),
      Ym = (function () {
        var t = /[^.]+$/.exec((Gl && Gl.keys && Gl.keys.IE_PROTO) || "");
        return t ? "Symbol(src)_1." + t : "";
      })();
    function DM(t) {
      return !!Ym && Ym in t;
    }
    Jm.exports = DM;
  });
  var zl = T((f9, Zm) => {
    var RM = Function.prototype,
      FM = RM.toString;
    function PM(t) {
      if (t != null) {
        try {
          return FM.call(t);
        } catch {}
        try {
          return t + "";
        } catch {}
      }
      return "";
    }
    Zm.exports = PM;
  });
  var ty = T((d9, ey) => {
    var LM = Hl(),
      UM = Xm(),
      qM = rn(),
      BM = zl(),
      jM = /[\\^$.*+?()[\]{}|]/g,
      VM = /^\[object .+?Constructor\]$/,
      WM = Function.prototype,
      HM = Object.prototype,
      GM = WM.toString,
      zM = HM.hasOwnProperty,
      $M = RegExp(
        "^" +
          GM.call(zM)
            .replace(jM, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function KM(t) {
      if (!qM(t) || UM(t)) return !1;
      var e = LM(t) ? $M : VM;
      return e.test(BM(t));
    }
    ey.exports = KM;
  });
  var ny = T((h9, ry) => {
    function QM(t, e) {
      return t?.[e];
    }
    ry.exports = QM;
  });
  var nn = T((g9, iy) => {
    var YM = ty(),
      JM = ny();
    function XM(t, e) {
      var r = JM(t, e);
      return YM(r) ? r : void 0;
    }
    iy.exports = XM;
  });
  var Ea = T((m9, ay) => {
    var ZM = nn(),
      eN = ZM(Object, "create");
    ay.exports = eN;
  });
  var cy = T((y9, sy) => {
    var oy = Ea();
    function tN() {
      (this.__data__ = oy ? oy(null) : {}), (this.size = 0);
    }
    sy.exports = tN;
  });
  var ly = T((v9, uy) => {
    function rN(t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    }
    uy.exports = rN;
  });
  var fy = T((_9, py) => {
    var nN = Ea(),
      iN = "__lodash_hash_undefined__",
      aN = Object.prototype,
      oN = aN.hasOwnProperty;
    function sN(t) {
      var e = this.__data__;
      if (nN) {
        var r = e[t];
        return r === iN ? void 0 : r;
      }
      return oN.call(e, t) ? e[t] : void 0;
    }
    py.exports = sN;
  });
  var hy = T((b9, dy) => {
    var cN = Ea(),
      uN = Object.prototype,
      lN = uN.hasOwnProperty;
    function pN(t) {
      var e = this.__data__;
      return cN ? e[t] !== void 0 : lN.call(e, t);
    }
    dy.exports = pN;
  });
  var my = T((S9, gy) => {
    var fN = Ea(),
      dN = "__lodash_hash_undefined__";
    function hN(t, e) {
      var r = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (r[t] = fN && e === void 0 ? dN : e),
        this
      );
    }
    gy.exports = hN;
  });
  var vy = T((T9, yy) => {
    var gN = cy(),
      mN = ly(),
      yN = fy(),
      vN = hy(),
      _N = my();
    function mi(t) {
      var e = -1,
        r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    mi.prototype.clear = gN;
    mi.prototype.delete = mN;
    mi.prototype.get = yN;
    mi.prototype.has = vN;
    mi.prototype.set = _N;
    yy.exports = mi;
  });
  var by = T((E9, _y) => {
    function bN() {
      (this.__data__ = []), (this.size = 0);
    }
    _y.exports = bN;
  });
  var Ia = T((I9, Sy) => {
    function SN(t, e) {
      return t === e || (t !== t && e !== e);
    }
    Sy.exports = SN;
  });
  var xa = T((x9, Ty) => {
    var TN = Ia();
    function EN(t, e) {
      for (var r = t.length; r--; ) if (TN(t[r][0], e)) return r;
      return -1;
    }
    Ty.exports = EN;
  });
  var Iy = T((w9, Ey) => {
    var IN = xa(),
      xN = Array.prototype,
      wN = xN.splice;
    function AN(t) {
      var e = this.__data__,
        r = IN(e, t);
      if (r < 0) return !1;
      var n = e.length - 1;
      return r == n ? e.pop() : wN.call(e, r, 1), --this.size, !0;
    }
    Ey.exports = AN;
  });
  var wy = T((A9, xy) => {
    var ON = xa();
    function kN(t) {
      var e = this.__data__,
        r = ON(e, t);
      return r < 0 ? void 0 : e[r][1];
    }
    xy.exports = kN;
  });
  var Oy = T((O9, Ay) => {
    var CN = xa();
    function MN(t) {
      return CN(this.__data__, t) > -1;
    }
    Ay.exports = MN;
  });
  var Cy = T((k9, ky) => {
    var NN = xa();
    function DN(t, e) {
      var r = this.__data__,
        n = NN(r, t);
      return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
    }
    ky.exports = DN;
  });
  var wa = T((C9, My) => {
    var RN = by(),
      FN = Iy(),
      PN = wy(),
      LN = Oy(),
      UN = Cy();
    function yi(t) {
      var e = -1,
        r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    yi.prototype.clear = RN;
    yi.prototype.delete = FN;
    yi.prototype.get = PN;
    yi.prototype.has = LN;
    yi.prototype.set = UN;
    My.exports = yi;
  });
  var gs = T((M9, Ny) => {
    var qN = nn(),
      BN = $t(),
      jN = qN(BN, "Map");
    Ny.exports = jN;
  });
  var Fy = T((N9, Ry) => {
    var Dy = vy(),
      VN = wa(),
      WN = gs();
    function HN() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Dy(),
          map: new (WN || VN)(),
          string: new Dy(),
        });
    }
    Ry.exports = HN;
  });
  var Ly = T((D9, Py) => {
    function GN(t) {
      var e = typeof t;
      return e == "string" || e == "number" || e == "symbol" || e == "boolean"
        ? t !== "__proto__"
        : t === null;
    }
    Py.exports = GN;
  });
  var Aa = T((R9, Uy) => {
    var zN = Ly();
    function $N(t, e) {
      var r = t.__data__;
      return zN(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
    }
    Uy.exports = $N;
  });
  var By = T((F9, qy) => {
    var KN = Aa();
    function QN(t) {
      var e = KN(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    }
    qy.exports = QN;
  });
  var Vy = T((P9, jy) => {
    var YN = Aa();
    function JN(t) {
      return YN(this, t).get(t);
    }
    jy.exports = JN;
  });
  var Hy = T((L9, Wy) => {
    var XN = Aa();
    function ZN(t) {
      return XN(this, t).has(t);
    }
    Wy.exports = ZN;
  });
  var zy = T((U9, Gy) => {
    var eD = Aa();
    function tD(t, e) {
      var r = eD(this, t),
        n = r.size;
      return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
    }
    Gy.exports = tD;
  });
  var ms = T((q9, $y) => {
    var rD = Fy(),
      nD = By(),
      iD = Vy(),
      aD = Hy(),
      oD = zy();
    function vi(t) {
      var e = -1,
        r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    vi.prototype.clear = rD;
    vi.prototype.delete = nD;
    vi.prototype.get = iD;
    vi.prototype.has = aD;
    vi.prototype.set = oD;
    $y.exports = vi;
  });
  var Qy = T((B9, Ky) => {
    var sD = "__lodash_hash_undefined__";
    function cD(t) {
      return this.__data__.set(t, sD), this;
    }
    Ky.exports = cD;
  });
  var Jy = T((j9, Yy) => {
    function uD(t) {
      return this.__data__.has(t);
    }
    Yy.exports = uD;
  });
  var vs = T((V9, Xy) => {
    var lD = ms(),
      pD = Qy(),
      fD = Jy();
    function ys(t) {
      var e = -1,
        r = t == null ? 0 : t.length;
      for (this.__data__ = new lD(); ++e < r; ) this.add(t[e]);
    }
    ys.prototype.add = ys.prototype.push = pD;
    ys.prototype.has = fD;
    Xy.exports = ys;
  });
  var ev = T((W9, Zy) => {
    function dD(t, e, r, n) {
      for (var i = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
        if (e(t[a], a, t)) return a;
      return -1;
    }
    Zy.exports = dD;
  });
  var rv = T((H9, tv) => {
    function hD(t) {
      return t !== t;
    }
    tv.exports = hD;
  });
  var iv = T((G9, nv) => {
    function gD(t, e, r) {
      for (var n = r - 1, i = t.length; ++n < i; ) if (t[n] === e) return n;
      return -1;
    }
    nv.exports = gD;
  });
  var ov = T((z9, av) => {
    var mD = ev(),
      yD = rv(),
      vD = iv();
    function _D(t, e, r) {
      return e === e ? vD(t, e, r) : mD(t, yD, r);
    }
    av.exports = _D;
  });
  var $l = T(($9, sv) => {
    var bD = ov();
    function SD(t, e) {
      var r = t == null ? 0 : t.length;
      return !!r && bD(t, e, 0) > -1;
    }
    sv.exports = SD;
  });
  var Kl = T((K9, cv) => {
    function TD(t, e, r) {
      for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
        if (r(e, t[n])) return !0;
      return !1;
    }
    cv.exports = TD;
  });
  var _s = T((Q9, uv) => {
    function ED(t, e) {
      return t.has(e);
    }
    uv.exports = ED;
  });
  var Ql = T((Y9, lv) => {
    var ID = nn(),
      xD = $t(),
      wD = ID(xD, "Set");
    lv.exports = wD;
  });
  var fv = T((J9, pv) => {
    function AD() {}
    pv.exports = AD;
  });
  var bs = T((X9, dv) => {
    function OD(t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (n) {
          r[++e] = n;
        }),
        r
      );
    }
    dv.exports = OD;
  });
  var gv = T((Z9, hv) => {
    var Yl = Ql(),
      kD = fv(),
      CD = bs(),
      MD = 1 / 0,
      ND =
        Yl && 1 / CD(new Yl([, -0]))[1] == MD
          ? function (t) {
              return new Yl(t);
            }
          : kD;
    hv.exports = ND;
  });
  var Jl = T((e7, mv) => {
    var DD = vs(),
      RD = $l(),
      FD = Kl(),
      PD = _s(),
      LD = gv(),
      UD = bs(),
      qD = 200;
    function BD(t, e, r) {
      var n = -1,
        i = RD,
        a = t.length,
        o = !0,
        s = [],
        c = s;
      if (r) (o = !1), (i = FD);
      else if (a >= qD) {
        var u = e ? null : LD(t);
        if (u) return UD(u);
        (o = !1), (i = PD), (c = new DD());
      } else c = e ? [] : s;
      e: for (; ++n < a; ) {
        var l = t[n],
          f = e ? e(l) : l;
        if (((l = r || l !== 0 ? l : 0), o && f === f)) {
          for (var p = c.length; p--; ) if (c[p] === f) continue e;
          e && c.push(f), s.push(l);
        } else i(c, f, r) || (c !== s && c.push(f), s.push(l));
      }
      return s;
    }
    mv.exports = BD;
  });
  var Ss = T((t7, yv) => {
    var jD = Jl();
    function VD(t) {
      return t && t.length ? jD(t) : [];
    }
    yv.exports = VD;
  });
  var Oa = T((i7, vv) => {
    function HD(t) {
      var e = t == null ? 0 : t.length;
      return e ? t[e - 1] : void 0;
    }
    vv.exports = HD;
  });
  var Xl = T((a7, _v) => {
    var GD = nn(),
      zD = (function () {
        try {
          var t = GD(Object, "defineProperty");
          return t({}, "", {}), t;
        } catch {}
      })();
    _v.exports = zD;
  });
  var Ts = T((o7, Sv) => {
    var bv = Xl();
    function $D(t, e, r) {
      e == "__proto__" && bv
        ? bv(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (t[e] = r);
    }
    Sv.exports = $D;
  });
  var Ev = T((s7, Tv) => {
    function KD(t, e, r, n) {
      for (var i = -1, a = t == null ? 0 : t.length; ++i < a; ) {
        var o = t[i];
        e(n, o, r(o), t);
      }
      return n;
    }
    Tv.exports = KD;
  });
  var xv = T((c7, Iv) => {
    function QD(t) {
      return function (e, r, n) {
        for (var i = -1, a = Object(e), o = n(e), s = o.length; s--; ) {
          var c = o[t ? s : ++i];
          if (r(a[c], c, a) === !1) break;
        }
        return e;
      };
    }
    Iv.exports = QD;
  });
  var Av = T((u7, wv) => {
    var YD = xv(),
      JD = YD();
    wv.exports = JD;
  });
  var kv = T((l7, Ov) => {
    function XD(t, e) {
      for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
      return n;
    }
    Ov.exports = XD;
  });
  var fr = T((p7, Cv) => {
    function ZD(t) {
      return t != null && typeof t == "object";
    }
    Cv.exports = ZD;
  });
  var Nv = T((f7, Mv) => {
    var eR = Dn(),
      tR = fr(),
      rR = "[object Arguments]";
    function nR(t) {
      return tR(t) && eR(t) == rR;
    }
    Mv.exports = nR;
  });
  var Es = T((d7, Fv) => {
    var Dv = Nv(),
      iR = fr(),
      Rv = Object.prototype,
      aR = Rv.hasOwnProperty,
      oR = Rv.propertyIsEnumerable,
      sR = Dv(
        (function () {
          return arguments;
        })()
      )
        ? Dv
        : function (t) {
            return iR(t) && aR.call(t, "callee") && !oR.call(t, "callee");
          };
    Fv.exports = sR;
  });
  var Rt = T((h7, Pv) => {
    var cR = Array.isArray;
    Pv.exports = cR;
  });
  var Uv = T((g7, Lv) => {
    function uR() {
      return !1;
    }
    Lv.exports = uR;
  });
  var Is = T((ka, _i) => {
    var lR = $t(),
      pR = Uv(),
      jv = typeof ka == "object" && ka && !ka.nodeType && ka,
      qv = jv && typeof _i == "object" && _i && !_i.nodeType && _i,
      fR = qv && qv.exports === jv,
      Bv = fR ? lR.Buffer : void 0,
      dR = Bv ? Bv.isBuffer : void 0,
      hR = dR || pR;
    _i.exports = hR;
  });
  var xs = T((m7, Vv) => {
    var gR = 9007199254740991,
      mR = /^(?:0|[1-9]\d*)$/;
    function yR(t, e) {
      var r = typeof t;
      return (
        (e = e ?? gR),
        !!e &&
          (r == "number" || (r != "symbol" && mR.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
      );
    }
    Vv.exports = yR;
  });
  var ws = T((y7, Wv) => {
    var vR = 9007199254740991;
    function _R(t) {
      return typeof t == "number" && t > -1 && t % 1 == 0 && t <= vR;
    }
    Wv.exports = _R;
  });
  var Gv = T((v7, Hv) => {
    var bR = Dn(),
      SR = ws(),
      TR = fr(),
      ER = "[object Arguments]",
      IR = "[object Array]",
      xR = "[object Boolean]",
      wR = "[object Date]",
      AR = "[object Error]",
      OR = "[object Function]",
      kR = "[object Map]",
      CR = "[object Number]",
      MR = "[object Object]",
      NR = "[object RegExp]",
      DR = "[object Set]",
      RR = "[object String]",
      FR = "[object WeakMap]",
      PR = "[object ArrayBuffer]",
      LR = "[object DataView]",
      UR = "[object Float32Array]",
      qR = "[object Float64Array]",
      BR = "[object Int8Array]",
      jR = "[object Int16Array]",
      VR = "[object Int32Array]",
      WR = "[object Uint8Array]",
      HR = "[object Uint8ClampedArray]",
      GR = "[object Uint16Array]",
      zR = "[object Uint32Array]",
      Ae = {};
    Ae[UR] =
      Ae[qR] =
      Ae[BR] =
      Ae[jR] =
      Ae[VR] =
      Ae[WR] =
      Ae[HR] =
      Ae[GR] =
      Ae[zR] =
        !0;
    Ae[ER] =
      Ae[IR] =
      Ae[PR] =
      Ae[xR] =
      Ae[LR] =
      Ae[wR] =
      Ae[AR] =
      Ae[OR] =
      Ae[kR] =
      Ae[CR] =
      Ae[MR] =
      Ae[NR] =
      Ae[DR] =
      Ae[RR] =
      Ae[FR] =
        !1;
    function $R(t) {
      return TR(t) && SR(t.length) && !!Ae[bR(t)];
    }
    Hv.exports = $R;
  });
  var bi = T((_7, zv) => {
    function KR(t) {
      return function (e) {
        return t(e);
      };
    }
    zv.exports = KR;
  });
  var As = T((Ca, Si) => {
    var QR = Wl(),
      $v = typeof Ca == "object" && Ca && !Ca.nodeType && Ca,
      Ma = $v && typeof Si == "object" && Si && !Si.nodeType && Si,
      YR = Ma && Ma.exports === $v,
      Zl = YR && QR.process,
      JR = (function () {
        try {
          var t = Ma && Ma.require && Ma.require("util").types;
          return t || (Zl && Zl.binding && Zl.binding("util"));
        } catch {}
      })();
    Si.exports = JR;
  });
  var ep = T((b7, Yv) => {
    var XR = Gv(),
      ZR = bi(),
      Kv = As(),
      Qv = Kv && Kv.isTypedArray,
      eF = Qv ? ZR(Qv) : XR;
    Yv.exports = eF;
  });
  var tp = T((S7, Jv) => {
    var tF = kv(),
      rF = Es(),
      nF = Rt(),
      iF = Is(),
      aF = xs(),
      oF = ep(),
      sF = Object.prototype,
      cF = sF.hasOwnProperty;
    function uF(t, e) {
      var r = nF(t),
        n = !r && rF(t),
        i = !r && !n && iF(t),
        a = !r && !n && !i && oF(t),
        o = r || n || i || a,
        s = o ? tF(t.length, String) : [],
        c = s.length;
      for (var u in t)
        (e || cF.call(t, u)) &&
          !(
            o &&
            (u == "length" ||
              (i && (u == "offset" || u == "parent")) ||
              (a &&
                (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
              aF(u, c))
          ) &&
          s.push(u);
      return s;
    }
    Jv.exports = uF;
  });
  var Os = T((T7, Xv) => {
    var lF = Object.prototype;
    function pF(t) {
      var e = t && t.constructor,
        r = (typeof e == "function" && e.prototype) || lF;
      return t === r;
    }
    Xv.exports = pF;
  });
  var rp = T((E7, Zv) => {
    function fF(t, e) {
      return function (r) {
        return t(e(r));
      };
    }
    Zv.exports = fF;
  });
  var t_ = T((I7, e_) => {
    var dF = rp(),
      hF = dF(Object.keys, Object);
    e_.exports = hF;
  });
  var n_ = T((x7, r_) => {
    var gF = Os(),
      mF = t_(),
      yF = Object.prototype,
      vF = yF.hasOwnProperty;
    function _F(t) {
      if (!gF(t)) return mF(t);
      var e = [];
      for (var r in Object(t)) vF.call(t, r) && r != "constructor" && e.push(r);
      return e;
    }
    r_.exports = _F;
  });
  var Rn = T((w7, i_) => {
    var bF = Hl(),
      SF = ws();
    function TF(t) {
      return t != null && SF(t.length) && !bF(t);
    }
    i_.exports = TF;
  });
  var Ti = T((A7, a_) => {
    var EF = tp(),
      IF = n_(),
      xF = Rn();
    function wF(t) {
      return xF(t) ? EF(t) : IF(t);
    }
    a_.exports = wF;
  });
  var s_ = T((O7, o_) => {
    var AF = Av(),
      OF = Ti();
    function kF(t, e) {
      return t && AF(t, e, OF);
    }
    o_.exports = kF;
  });
  var u_ = T((k7, c_) => {
    var CF = Rn();
    function MF(t, e) {
      return function (r, n) {
        if (r == null) return r;
        if (!CF(r)) return t(r, n);
        for (
          var i = r.length, a = e ? i : -1, o = Object(r);
          (e ? a-- : ++a < i) && n(o[a], a, o) !== !1;

        );
        return r;
      };
    }
    c_.exports = MF;
  });
  var np = T((C7, l_) => {
    var NF = s_(),
      DF = u_(),
      RF = DF(NF);
    l_.exports = RF;
  });
  var f_ = T((M7, p_) => {
    var FF = np();
    function PF(t, e, r, n) {
      return (
        FF(t, function (i, a, o) {
          e(n, i, r(i), o);
        }),
        n
      );
    }
    p_.exports = PF;
  });
  var h_ = T((N7, d_) => {
    var LF = wa();
    function UF() {
      (this.__data__ = new LF()), (this.size = 0);
    }
    d_.exports = UF;
  });
  var m_ = T((D7, g_) => {
    function qF(t) {
      var e = this.__data__,
        r = e.delete(t);
      return (this.size = e.size), r;
    }
    g_.exports = qF;
  });
  var v_ = T((R7, y_) => {
    function BF(t) {
      return this.__data__.get(t);
    }
    y_.exports = BF;
  });
  var b_ = T((F7, __) => {
    function jF(t) {
      return this.__data__.has(t);
    }
    __.exports = jF;
  });
  var T_ = T((P7, S_) => {
    var VF = wa(),
      WF = gs(),
      HF = ms(),
      GF = 200;
    function zF(t, e) {
      var r = this.__data__;
      if (r instanceof VF) {
        var n = r.__data__;
        if (!WF || n.length < GF - 1)
          return n.push([t, e]), (this.size = ++r.size), this;
        r = this.__data__ = new HF(n);
      }
      return r.set(t, e), (this.size = r.size), this;
    }
    S_.exports = zF;
  });
  var ks = T((L7, E_) => {
    var $F = wa(),
      KF = h_(),
      QF = m_(),
      YF = v_(),
      JF = b_(),
      XF = T_();
    function Ei(t) {
      var e = (this.__data__ = new $F(t));
      this.size = e.size;
    }
    Ei.prototype.clear = KF;
    Ei.prototype.delete = QF;
    Ei.prototype.get = YF;
    Ei.prototype.has = JF;
    Ei.prototype.set = XF;
    E_.exports = Ei;
  });
  var x_ = T((U7, I_) => {
    function ZF(t, e) {
      for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
        if (e(t[r], r, t)) return !0;
      return !1;
    }
    I_.exports = ZF;
  });
  var ip = T((q7, w_) => {
    var eP = vs(),
      tP = x_(),
      rP = _s(),
      nP = 1,
      iP = 2;
    function aP(t, e, r, n, i, a) {
      var o = r & nP,
        s = t.length,
        c = e.length;
      if (s != c && !(o && c > s)) return !1;
      var u = a.get(t),
        l = a.get(e);
      if (u && l) return u == e && l == t;
      var f = -1,
        p = !0,
        d = r & iP ? new eP() : void 0;
      for (a.set(t, e), a.set(e, t); ++f < s; ) {
        var g = t[f],
          v = e[f];
        if (n) var y = o ? n(v, g, f, e, t, a) : n(g, v, f, t, e, a);
        if (y !== void 0) {
          if (y) continue;
          p = !1;
          break;
        }
        if (d) {
          if (
            !tP(e, function (m, I) {
              if (!rP(d, I) && (g === m || i(g, m, r, n, a))) return d.push(I);
            })
          ) {
            p = !1;
            break;
          }
        } else if (!(g === v || i(g, v, r, n, a))) {
          p = !1;
          break;
        }
      }
      return a.delete(t), a.delete(e), p;
    }
    w_.exports = aP;
  });
  var ap = T((B7, A_) => {
    var oP = $t(),
      sP = oP.Uint8Array;
    A_.exports = sP;
  });
  var k_ = T((j7, O_) => {
    function cP(t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (n, i) {
          r[++e] = [i, n];
        }),
        r
      );
    }
    O_.exports = cP;
  });
  var R_ = T((V7, D_) => {
    var C_ = Nn(),
      M_ = ap(),
      uP = Ia(),
      lP = ip(),
      pP = k_(),
      fP = bs(),
      dP = 1,
      hP = 2,
      gP = "[object Boolean]",
      mP = "[object Date]",
      yP = "[object Error]",
      vP = "[object Map]",
      _P = "[object Number]",
      bP = "[object RegExp]",
      SP = "[object Set]",
      TP = "[object String]",
      EP = "[object Symbol]",
      IP = "[object ArrayBuffer]",
      xP = "[object DataView]",
      N_ = C_ ? C_.prototype : void 0,
      op = N_ ? N_.valueOf : void 0;
    function wP(t, e, r, n, i, a, o) {
      switch (r) {
        case xP:
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
            return !1;
          (t = t.buffer), (e = e.buffer);
        case IP:
          return !(t.byteLength != e.byteLength || !a(new M_(t), new M_(e)));
        case gP:
        case mP:
        case _P:
          return uP(+t, +e);
        case yP:
          return t.name == e.name && t.message == e.message;
        case bP:
        case TP:
          return t == e + "";
        case vP:
          var s = pP;
        case SP:
          var c = n & dP;
          if ((s || (s = fP), t.size != e.size && !c)) return !1;
          var u = o.get(t);
          if (u) return u == e;
          (n |= hP), o.set(t, e);
          var l = lP(s(t), s(e), n, i, a, o);
          return o.delete(t), l;
        case EP:
          if (op) return op.call(t) == op.call(e);
      }
      return !1;
    }
    D_.exports = wP;
  });
  var Cs = T((W7, F_) => {
    function AP(t, e) {
      for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r];
      return t;
    }
    F_.exports = AP;
  });
  var sp = T((H7, P_) => {
    var OP = Cs(),
      kP = Rt();
    function CP(t, e, r) {
      var n = e(t);
      return kP(t) ? n : OP(n, r(t));
    }
    P_.exports = CP;
  });
  var U_ = T((G7, L_) => {
    function MP(t, e) {
      for (var r = -1, n = t == null ? 0 : t.length, i = 0, a = []; ++r < n; ) {
        var o = t[r];
        e(o, r, t) && (a[i++] = o);
      }
      return a;
    }
    L_.exports = MP;
  });
  var cp = T((z7, q_) => {
    function NP() {
      return [];
    }
    q_.exports = NP;
  });
  var Ms = T(($7, j_) => {
    var DP = U_(),
      RP = cp(),
      FP = Object.prototype,
      PP = FP.propertyIsEnumerable,
      B_ = Object.getOwnPropertySymbols,
      LP = B_
        ? function (t) {
            return t == null
              ? []
              : ((t = Object(t)),
                DP(B_(t), function (e) {
                  return PP.call(t, e);
                }));
          }
        : RP;
    j_.exports = LP;
  });
  var up = T((K7, V_) => {
    var UP = sp(),
      qP = Ms(),
      BP = Ti();
    function jP(t) {
      return UP(t, BP, qP);
    }
    V_.exports = jP;
  });
  var G_ = T((Q7, H_) => {
    var W_ = up(),
      VP = 1,
      WP = Object.prototype,
      HP = WP.hasOwnProperty;
    function GP(t, e, r, n, i, a) {
      var o = r & VP,
        s = W_(t),
        c = s.length,
        u = W_(e),
        l = u.length;
      if (c != l && !o) return !1;
      for (var f = c; f--; ) {
        var p = s[f];
        if (!(o ? p in e : HP.call(e, p))) return !1;
      }
      var d = a.get(t),
        g = a.get(e);
      if (d && g) return d == e && g == t;
      var v = !0;
      a.set(t, e), a.set(e, t);
      for (var y = o; ++f < c; ) {
        p = s[f];
        var m = t[p],
          I = e[p];
        if (n) var b = o ? n(I, m, p, e, t, a) : n(m, I, p, t, e, a);
        if (!(b === void 0 ? m === I || i(m, I, r, n, a) : b)) {
          v = !1;
          break;
        }
        y || (y = p == "constructor");
      }
      if (v && !y) {
        var w = t.constructor,
          k = e.constructor;
        w != k &&
          "constructor" in t &&
          "constructor" in e &&
          !(
            typeof w == "function" &&
            w instanceof w &&
            typeof k == "function" &&
            k instanceof k
          ) &&
          (v = !1);
      }
      return a.delete(t), a.delete(e), v;
    }
    H_.exports = GP;
  });
  var $_ = T((Y7, z_) => {
    var zP = nn(),
      $P = $t(),
      KP = zP($P, "DataView");
    z_.exports = KP;
  });
  var Q_ = T((J7, K_) => {
    var QP = nn(),
      YP = $t(),
      JP = QP(YP, "Promise");
    K_.exports = JP;
  });
  var J_ = T((X7, Y_) => {
    var XP = nn(),
      ZP = $t(),
      eL = XP(ZP, "WeakMap");
    Y_.exports = eL;
  });
  var Na = T((Z7, ib) => {
    var lp = $_(),
      pp = gs(),
      fp = Q_(),
      dp = Ql(),
      hp = J_(),
      nb = Dn(),
      Ii = zl(),
      X_ = "[object Map]",
      tL = "[object Object]",
      Z_ = "[object Promise]",
      eb = "[object Set]",
      tb = "[object WeakMap]",
      rb = "[object DataView]",
      rL = Ii(lp),
      nL = Ii(pp),
      iL = Ii(fp),
      aL = Ii(dp),
      oL = Ii(hp),
      Fn = nb;
    ((lp && Fn(new lp(new ArrayBuffer(1))) != rb) ||
      (pp && Fn(new pp()) != X_) ||
      (fp && Fn(fp.resolve()) != Z_) ||
      (dp && Fn(new dp()) != eb) ||
      (hp && Fn(new hp()) != tb)) &&
      (Fn = function (t) {
        var e = nb(t),
          r = e == tL ? t.constructor : void 0,
          n = r ? Ii(r) : "";
        if (n)
          switch (n) {
            case rL:
              return rb;
            case nL:
              return X_;
            case iL:
              return Z_;
            case aL:
              return eb;
            case oL:
              return tb;
          }
        return e;
      });
    ib.exports = Fn;
  });
  var fb = T((eY, pb) => {
    var gp = ks(),
      sL = ip(),
      cL = R_(),
      uL = G_(),
      ab = Na(),
      ob = Rt(),
      sb = Is(),
      lL = ep(),
      pL = 1,
      cb = "[object Arguments]",
      ub = "[object Array]",
      Ns = "[object Object]",
      fL = Object.prototype,
      lb = fL.hasOwnProperty;
    function dL(t, e, r, n, i, a) {
      var o = ob(t),
        s = ob(e),
        c = o ? ub : ab(t),
        u = s ? ub : ab(e);
      (c = c == cb ? Ns : c), (u = u == cb ? Ns : u);
      var l = c == Ns,
        f = u == Ns,
        p = c == u;
      if (p && sb(t)) {
        if (!sb(e)) return !1;
        (o = !0), (l = !1);
      }
      if (p && !l)
        return (
          a || (a = new gp()),
          o || lL(t) ? sL(t, e, r, n, i, a) : cL(t, e, c, r, n, i, a)
        );
      if (!(r & pL)) {
        var d = l && lb.call(t, "__wrapped__"),
          g = f && lb.call(e, "__wrapped__");
        if (d || g) {
          var v = d ? t.value() : t,
            y = g ? e.value() : e;
          return a || (a = new gp()), i(v, y, r, n, a);
        }
      }
      return p ? (a || (a = new gp()), uL(t, e, r, n, i, a)) : !1;
    }
    pb.exports = dL;
  });
  var Ds = T((tY, gb) => {
    var hL = fb(),
      db = fr();
    function hb(t, e, r, n, i) {
      return t === e
        ? !0
        : t == null || e == null || (!db(t) && !db(e))
        ? t !== t && e !== e
        : hL(t, e, r, n, hb, i);
    }
    gb.exports = hb;
  });
  var yb = T((rY, mb) => {
    var gL = ks(),
      mL = Ds(),
      yL = 1,
      vL = 2;
    function _L(t, e, r, n) {
      var i = r.length,
        a = i,
        o = !n;
      if (t == null) return !a;
      for (t = Object(t); i--; ) {
        var s = r[i];
        if (o && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
      }
      for (; ++i < a; ) {
        s = r[i];
        var c = s[0],
          u = t[c],
          l = s[1];
        if (o && s[2]) {
          if (u === void 0 && !(c in t)) return !1;
        } else {
          var f = new gL();
          if (n) var p = n(u, l, c, t, e, f);
          if (!(p === void 0 ? mL(l, u, yL | vL, n, f) : p)) return !1;
        }
      }
      return !0;
    }
    mb.exports = _L;
  });
  var mp = T((nY, vb) => {
    var bL = rn();
    function SL(t) {
      return t === t && !bL(t);
    }
    vb.exports = SL;
  });
  var bb = T((iY, _b) => {
    var TL = mp(),
      EL = Ti();
    function IL(t) {
      for (var e = EL(t), r = e.length; r--; ) {
        var n = e[r],
          i = t[n];
        e[r] = [n, i, TL(i)];
      }
      return e;
    }
    _b.exports = IL;
  });
  var yp = T((aY, Sb) => {
    function xL(t, e) {
      return function (r) {
        return r == null ? !1 : r[t] === e && (e !== void 0 || t in Object(r));
      };
    }
    Sb.exports = xL;
  });
  var Eb = T((oY, Tb) => {
    var wL = yb(),
      AL = bb(),
      OL = yp();
    function kL(t) {
      var e = AL(t);
      return e.length == 1 && e[0][2]
        ? OL(e[0][0], e[0][1])
        : function (r) {
            return r === t || wL(r, t, e);
          };
    }
    Tb.exports = kL;
  });
  var Da = T((sY, Ib) => {
    var CL = Dn(),
      ML = fr(),
      NL = "[object Symbol]";
    function DL(t) {
      return typeof t == "symbol" || (ML(t) && CL(t) == NL);
    }
    Ib.exports = DL;
  });
  var Rs = T((cY, xb) => {
    var RL = Rt(),
      FL = Da(),
      PL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      LL = /^\w*$/;
    function UL(t, e) {
      if (RL(t)) return !1;
      var r = typeof t;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        t == null ||
        FL(t)
        ? !0
        : LL.test(t) || !PL.test(t) || (e != null && t in Object(e));
    }
    xb.exports = UL;
  });
  var Ob = T((uY, Ab) => {
    var wb = ms(),
      qL = "Expected a function";
    function vp(t, e) {
      if (typeof t != "function" || (e != null && typeof e != "function"))
        throw new TypeError(qL);
      var r = function () {
        var n = arguments,
          i = e ? e.apply(this, n) : n[0],
          a = r.cache;
        if (a.has(i)) return a.get(i);
        var o = t.apply(this, n);
        return (r.cache = a.set(i, o) || a), o;
      };
      return (r.cache = new (vp.Cache || wb)()), r;
    }
    vp.Cache = wb;
    Ab.exports = vp;
  });
  var Cb = T((lY, kb) => {
    var BL = Ob(),
      jL = 500;
    function VL(t) {
      var e = BL(t, function (n) {
          return r.size === jL && r.clear(), n;
        }),
        r = e.cache;
      return e;
    }
    kb.exports = VL;
  });
  var Nb = T((pY, Mb) => {
    var WL = Cb(),
      HL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      GL = /\\(\\)?/g,
      zL = WL(function (t) {
        var e = [];
        return (
          t.charCodeAt(0) === 46 && e.push(""),
          t.replace(HL, function (r, n, i, a) {
            e.push(i ? a.replace(GL, "$1") : n || r);
          }),
          e
        );
      });
    Mb.exports = zL;
  });
  var Ra = T((fY, Db) => {
    function $L(t, e) {
      for (var r = -1, n = t == null ? 0 : t.length, i = Array(n); ++r < n; )
        i[r] = e(t[r], r, t);
      return i;
    }
    Db.exports = $L;
  });
  var qb = T((dY, Ub) => {
    var Rb = Nn(),
      KL = Ra(),
      QL = Rt(),
      YL = Da(),
      JL = 1 / 0,
      Fb = Rb ? Rb.prototype : void 0,
      Pb = Fb ? Fb.toString : void 0;
    function Lb(t) {
      if (typeof t == "string") return t;
      if (QL(t)) return KL(t, Lb) + "";
      if (YL(t)) return Pb ? Pb.call(t) : "";
      var e = t + "";
      return e == "0" && 1 / t == -JL ? "-0" : e;
    }
    Ub.exports = Lb;
  });
  var jb = T((hY, Bb) => {
    var XL = qb();
    function ZL(t) {
      return t == null ? "" : XL(t);
    }
    Bb.exports = ZL;
  });
  var Fa = T((gY, Vb) => {
    var e1 = Rt(),
      t1 = Rs(),
      r1 = Nb(),
      n1 = jb();
    function i1(t, e) {
      return e1(t) ? t : t1(t, e) ? [t] : r1(n1(t));
    }
    Vb.exports = i1;
  });
  var xi = T((mY, Wb) => {
    var a1 = Da(),
      o1 = 1 / 0;
    function s1(t) {
      if (typeof t == "string" || a1(t)) return t;
      var e = t + "";
      return e == "0" && 1 / t == -o1 ? "-0" : e;
    }
    Wb.exports = s1;
  });
  var Pa = T((yY, Hb) => {
    var c1 = Fa(),
      u1 = xi();
    function l1(t, e) {
      e = c1(e, t);
      for (var r = 0, n = e.length; t != null && r < n; ) t = t[u1(e[r++])];
      return r && r == n ? t : void 0;
    }
    Hb.exports = l1;
  });
  var zb = T((vY, Gb) => {
    var p1 = Pa();
    function f1(t, e, r) {
      var n = t == null ? void 0 : p1(t, e);
      return n === void 0 ? r : n;
    }
    Gb.exports = f1;
  });
  var Kb = T((_Y, $b) => {
    function d1(t, e) {
      return t != null && e in Object(t);
    }
    $b.exports = d1;
  });
  var Yb = T((bY, Qb) => {
    var h1 = Fa(),
      g1 = Es(),
      m1 = Rt(),
      y1 = xs(),
      v1 = ws(),
      _1 = xi();
    function b1(t, e, r) {
      e = h1(e, t);
      for (var n = -1, i = e.length, a = !1; ++n < i; ) {
        var o = _1(e[n]);
        if (!(a = t != null && r(t, o))) break;
        t = t[o];
      }
      return a || ++n != i
        ? a
        : ((i = t == null ? 0 : t.length),
          !!i && v1(i) && y1(o, i) && (m1(t) || g1(t)));
    }
    Qb.exports = b1;
  });
  var Xb = T((SY, Jb) => {
    var S1 = Kb(),
      T1 = Yb();
    function E1(t, e) {
      return t != null && T1(t, e, S1);
    }
    Jb.exports = E1;
  });
  var eS = T((TY, Zb) => {
    var I1 = Ds(),
      x1 = zb(),
      w1 = Xb(),
      A1 = Rs(),
      O1 = mp(),
      k1 = yp(),
      C1 = xi(),
      M1 = 1,
      N1 = 2;
    function D1(t, e) {
      return A1(t) && O1(e)
        ? k1(C1(t), e)
        : function (r) {
            var n = x1(r, t);
            return n === void 0 && n === e ? w1(r, t) : I1(e, n, M1 | N1);
          };
    }
    Zb.exports = D1;
  });
  var La = T((EY, tS) => {
    function R1(t) {
      return t;
    }
    tS.exports = R1;
  });
  var nS = T((IY, rS) => {
    function F1(t) {
      return function (e) {
        return e?.[t];
      };
    }
    rS.exports = F1;
  });
  var aS = T((xY, iS) => {
    var P1 = Pa();
    function L1(t) {
      return function (e) {
        return P1(e, t);
      };
    }
    iS.exports = L1;
  });
  var sS = T((wY, oS) => {
    var U1 = nS(),
      q1 = aS(),
      B1 = Rs(),
      j1 = xi();
    function V1(t) {
      return B1(t) ? U1(j1(t)) : q1(t);
    }
    oS.exports = V1;
  });
  var Fs = T((AY, cS) => {
    var W1 = Eb(),
      H1 = eS(),
      G1 = La(),
      z1 = Rt(),
      $1 = sS();
    function K1(t) {
      return typeof t == "function"
        ? t
        : t == null
        ? G1
        : typeof t == "object"
        ? z1(t)
          ? H1(t[0], t[1])
          : W1(t)
        : $1(t);
    }
    cS.exports = K1;
  });
  var lS = T((OY, uS) => {
    var Q1 = Ev(),
      Y1 = f_(),
      J1 = Fs(),
      X1 = Rt();
    function Z1(t, e) {
      return function (r, n) {
        var i = X1(r) ? Q1 : Y1,
          a = e ? e() : {};
        return i(r, t, J1(n, 2), a);
      };
    }
    uS.exports = Z1;
  });
  var fS = T((kY, pS) => {
    var eU = Ts(),
      tU = lS(),
      rU = tU(function (t, e, r) {
        eU(t, r, e);
      });
    pS.exports = rU;
  });
  var hS = T((CY, dS) => {
    var nU = Fs(),
      iU = Jl();
    function aU(t, e) {
      return t && t.length ? iU(t, nU(e, 2)) : [];
    }
    dS.exports = aU;
  });
  var mS = T((MY, gS) => {
    var oU = vs(),
      sU = $l(),
      cU = Kl(),
      uU = Ra(),
      lU = bi(),
      pU = _s(),
      fU = 200;
    function dU(t, e, r, n) {
      var i = -1,
        a = sU,
        o = !0,
        s = t.length,
        c = [],
        u = e.length;
      if (!s) return c;
      r && (e = uU(e, lU(r))),
        n
          ? ((a = cU), (o = !1))
          : e.length >= fU && ((a = pU), (o = !1), (e = new oU(e)));
      e: for (; ++i < s; ) {
        var l = t[i],
          f = r == null ? l : r(l);
        if (((l = n || l !== 0 ? l : 0), o && f === f)) {
          for (var p = u; p--; ) if (e[p] === f) continue e;
          c.push(l);
        } else a(e, f, n) || c.push(l);
      }
      return c;
    }
    gS.exports = dU;
  });
  var bS = T((NY, _S) => {
    var yS = Nn(),
      hU = Es(),
      gU = Rt(),
      vS = yS ? yS.isConcatSpreadable : void 0;
    function mU(t) {
      return gU(t) || hU(t) || !!(vS && t && t[vS]);
    }
    _S.exports = mU;
  });
  var Ps = T((DY, TS) => {
    var yU = Cs(),
      vU = bS();
    function SS(t, e, r, n, i) {
      var a = -1,
        o = t.length;
      for (r || (r = vU), i || (i = []); ++a < o; ) {
        var s = t[a];
        e > 0 && r(s)
          ? e > 1
            ? SS(s, e - 1, r, n, i)
            : yU(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    TS.exports = SS;
  });
  var IS = T((RY, ES) => {
    function _U(t, e, r) {
      switch (r.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, r[0]);
        case 2:
          return t.call(e, r[0], r[1]);
        case 3:
          return t.call(e, r[0], r[1], r[2]);
      }
      return t.apply(e, r);
    }
    ES.exports = _U;
  });
  var _p = T((FY, wS) => {
    var bU = IS(),
      xS = Math.max;
    function SU(t, e, r) {
      return (
        (e = xS(e === void 0 ? t.length - 1 : e, 0)),
        function () {
          for (
            var n = arguments, i = -1, a = xS(n.length - e, 0), o = Array(a);
            ++i < a;

          )
            o[i] = n[e + i];
          i = -1;
          for (var s = Array(e + 1); ++i < e; ) s[i] = n[i];
          return (s[e] = r(o)), bU(t, this, s);
        }
      );
    }
    wS.exports = SU;
  });
  var OS = T((PY, AS) => {
    function TU(t) {
      return function () {
        return t;
      };
    }
    AS.exports = TU;
  });
  var MS = T((LY, CS) => {
    var EU = OS(),
      kS = Xl(),
      IU = La(),
      xU = kS
        ? function (t, e) {
            return kS(t, "toString", {
              configurable: !0,
              enumerable: !1,
              value: EU(e),
              writable: !0,
            });
          }
        : IU;
    CS.exports = xU;
  });
  var DS = T((UY, NS) => {
    var wU = 800,
      AU = 16,
      OU = Date.now;
    function kU(t) {
      var e = 0,
        r = 0;
      return function () {
        var n = OU(),
          i = AU - (n - r);
        if (((r = n), i > 0)) {
          if (++e >= wU) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    }
    NS.exports = kU;
  });
  var bp = T((qY, RS) => {
    var CU = MS(),
      MU = DS(),
      NU = MU(CU);
    RS.exports = NU;
  });
  var Sp = T((BY, FS) => {
    var DU = La(),
      RU = _p(),
      FU = bp();
    function PU(t, e) {
      return FU(RU(t, e, DU), t + "");
    }
    FS.exports = PU;
  });
  var LS = T((jY, PS) => {
    var LU = Rn(),
      UU = fr();
    function qU(t) {
      return UU(t) && LU(t);
    }
    PS.exports = qU;
  });
  var BS = T((VY, qS) => {
    var BU = mS(),
      jU = Ps(),
      VU = Sp(),
      US = LS(),
      WU = VU(function (t, e) {
        return US(t) ? BU(t, jU(e, 1, US, !0)) : [];
      });
    qS.exports = WU;
  });
  var VS = T((WY, jS) => {
    var HU = np(),
      GU = Rn();
    function zU(t, e) {
      var r = -1,
        n = GU(t) ? Array(t.length) : [];
      return (
        HU(t, function (i, a, o) {
          n[++r] = e(i, a, o);
        }),
        n
      );
    }
    jS.exports = zU;
  });
  var HS = T((HY, WS) => {
    function $U(t, e) {
      var r = t.length;
      for (t.sort(e); r--; ) t[r] = t[r].value;
      return t;
    }
    WS.exports = $U;
  });
  var $S = T((GY, zS) => {
    var GS = Da();
    function KU(t, e) {
      if (t !== e) {
        var r = t !== void 0,
          n = t === null,
          i = t === t,
          a = GS(t),
          o = e !== void 0,
          s = e === null,
          c = e === e,
          u = GS(e);
        if (
          (!s && !u && !a && t > e) ||
          (a && o && c && !s && !u) ||
          (n && o && c) ||
          (!r && c) ||
          !i
        )
          return 1;
        if (
          (!n && !a && !u && t < e) ||
          (u && r && i && !n && !a) ||
          (s && r && i) ||
          (!o && i) ||
          !c
        )
          return -1;
      }
      return 0;
    }
    zS.exports = KU;
  });
  var QS = T((zY, KS) => {
    var QU = $S();
    function YU(t, e, r) {
      for (
        var n = -1, i = t.criteria, a = e.criteria, o = i.length, s = r.length;
        ++n < o;

      ) {
        var c = QU(i[n], a[n]);
        if (c) {
          if (n >= s) return c;
          var u = r[n];
          return c * (u == "desc" ? -1 : 1);
        }
      }
      return t.index - e.index;
    }
    KS.exports = YU;
  });
  var JS = T(($Y, YS) => {
    var Tp = Ra(),
      JU = Pa(),
      XU = Fs(),
      ZU = VS(),
      eq = HS(),
      tq = bi(),
      rq = QS(),
      nq = La(),
      iq = Rt();
    function aq(t, e, r) {
      e.length
        ? (e = Tp(e, function (a) {
            return iq(a)
              ? function (o) {
                  return JU(o, a.length === 1 ? a[0] : a);
                }
              : a;
          }))
        : (e = [nq]);
      var n = -1;
      e = Tp(e, tq(XU));
      var i = ZU(t, function (a, o, s) {
        var c = Tp(e, function (u) {
          return u(a);
        });
        return { criteria: c, index: ++n, value: a };
      });
      return eq(i, function (a, o) {
        return rq(a, o, r);
      });
    }
    YS.exports = aq;
  });
  var ZS = T((KY, XS) => {
    var oq = Ia(),
      sq = Rn(),
      cq = xs(),
      uq = rn();
    function lq(t, e, r) {
      if (!uq(r)) return !1;
      var n = typeof e;
      return (
        n == "number" ? sq(r) && cq(e, r.length) : n == "string" && e in r
      )
        ? oq(r[e], t)
        : !1;
    }
    XS.exports = lq;
  });
  var rT = T((QY, tT) => {
    var pq = Ps(),
      fq = JS(),
      dq = Sp(),
      eT = ZS(),
      hq = dq(function (t, e) {
        if (t == null) return [];
        var r = e.length;
        return (
          r > 1 && eT(t, e[0], e[1])
            ? (e = [])
            : r > 2 && eT(e[0], e[1], e[2]) && (e = [e[0]]),
          fq(t, pq(e, 1), [])
        );
      });
    tT.exports = hq;
  });
  var eI = T((CZ, ZE) => {
    "use strict";
    var Pr = { DEBUG: !1, LIB_VERSION: "2.48.1" },
      Pe;
    typeof window > "u"
      ? ((xf = { hostname: "" }),
        (Pe = {
          navigator: { userAgent: "" },
          document: { location: xf, referrer: "" },
          screen: { width: 0, height: 0 },
          location: xf,
        }))
      : (Pe = window);
    var xf,
      Cc = Array.prototype,
      Xj = Function.prototype,
      jE = Object.prototype,
      un = Cc.slice,
      no = jE.toString,
      Mc = jE.hasOwnProperty,
      je = Pe.console,
      ln = Pe.navigator,
      Oe = Pe.document,
      Ec = Pe.opera,
      Ic = Pe.screen,
      br = ln.userAgent,
      wf = Xj.bind,
      NE = Cc.forEach,
      DE = Cc.indexOf,
      RE = Cc.map,
      Zj = Array.isArray,
      kf = {},
      h = {
        trim: function (t) {
          return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        },
      },
      _e = {
        log: function () {
          if (Pr.DEBUG && !h.isUndefined(je) && je)
            try {
              je.log.apply(je, arguments);
            } catch {
              h.each(arguments, function (e) {
                je.log(e);
              });
            }
        },
        warn: function () {
          if (Pr.DEBUG && !h.isUndefined(je) && je) {
            var t = ["Mixpanel warning:"].concat(h.toArray(arguments));
            try {
              je.warn.apply(je, t);
            } catch {
              h.each(t, function (r) {
                je.warn(r);
              });
            }
          }
        },
        error: function () {
          if (Pr.DEBUG && !h.isUndefined(je) && je) {
            var t = ["Mixpanel error:"].concat(h.toArray(arguments));
            try {
              je.error.apply(je, t);
            } catch {
              h.each(t, function (r) {
                je.error(r);
              });
            }
          }
        },
        critical: function () {
          if (!h.isUndefined(je) && je) {
            var t = ["Mixpanel error:"].concat(h.toArray(arguments));
            try {
              je.error.apply(je, t);
            } catch {
              h.each(t, function (r) {
                je.error(r);
              });
            }
          }
        },
      },
      Af = function (t, e) {
        return function () {
          return (
            (arguments[0] = "[" + e + "] " + arguments[0]),
            t.apply(_e, arguments)
          );
        };
      },
      Mf = function (t) {
        return {
          log: Af(_e.log, t),
          error: Af(_e.error, t),
          critical: Af(_e.critical, t),
        };
      };
    h.bind = function (t, e) {
      var r, n;
      if (wf && t.bind === wf) return wf.apply(t, un.call(arguments, 1));
      if (!h.isFunction(t)) throw new TypeError();
      return (
        (r = un.call(arguments, 2)),
        (n = function () {
          if (!(this instanceof n))
            return t.apply(e, r.concat(un.call(arguments)));
          var i = {};
          i.prototype = t.prototype;
          var a = new i();
          i.prototype = null;
          var o = t.apply(a, r.concat(un.call(arguments)));
          return Object(o) === o ? o : a;
        }),
        n
      );
    };
    h.each = function (t, e, r) {
      if (t != null) {
        if (NE && t.forEach === NE) t.forEach(e, r);
        else if (t.length === +t.length) {
          for (var n = 0, i = t.length; n < i; n++)
            if (n in t && e.call(r, t[n], n, t) === kf) return;
        } else
          for (var a in t)
            if (Mc.call(t, a) && e.call(r, t[a], a, t) === kf) return;
      }
    };
    h.extend = function (t) {
      return (
        h.each(un.call(arguments, 1), function (e) {
          for (var r in e) e[r] !== void 0 && (t[r] = e[r]);
        }),
        t
      );
    };
    h.isArray =
      Zj ||
      function (t) {
        return no.call(t) === "[object Array]";
      };
    h.isFunction = function (t) {
      try {
        return /^\s*\bfunction\b/.test(t);
      } catch {
        return !1;
      }
    };
    h.isArguments = function (t) {
      return !!(t && Mc.call(t, "callee"));
    };
    h.toArray = function (t) {
      return t
        ? t.toArray
          ? t.toArray()
          : h.isArray(t) || h.isArguments(t)
          ? un.call(t)
          : h.values(t)
        : [];
    };
    h.map = function (t, e, r) {
      if (RE && t.map === RE) return t.map(e, r);
      var n = [];
      return (
        h.each(t, function (i) {
          n.push(e.call(r, i));
        }),
        n
      );
    };
    h.keys = function (t) {
      var e = [];
      return (
        t === null ||
          h.each(t, function (r, n) {
            e[e.length] = n;
          }),
        e
      );
    };
    h.values = function (t) {
      var e = [];
      return (
        t === null ||
          h.each(t, function (r) {
            e[e.length] = r;
          }),
        e
      );
    };
    h.include = function (t, e) {
      var r = !1;
      return t === null
        ? r
        : DE && t.indexOf === DE
        ? t.indexOf(e) != -1
        : (h.each(t, function (n) {
            if (r || (r = n === e)) return kf;
          }),
          r);
    };
    h.includes = function (t, e) {
      return t.indexOf(e) !== -1;
    };
    h.inherit = function (t, e) {
      return (
        (t.prototype = new e()),
        (t.prototype.constructor = t),
        (t.superclass = e.prototype),
        t
      );
    };
    h.isObject = function (t) {
      return t === Object(t) && !h.isArray(t);
    };
    h.isEmptyObject = function (t) {
      if (h.isObject(t)) {
        for (var e in t) if (Mc.call(t, e)) return !1;
        return !0;
      }
      return !1;
    };
    h.isUndefined = function (t) {
      return t === void 0;
    };
    h.isString = function (t) {
      return no.call(t) == "[object String]";
    };
    h.isDate = function (t) {
      return no.call(t) == "[object Date]";
    };
    h.isNumber = function (t) {
      return no.call(t) == "[object Number]";
    };
    h.isElement = function (t) {
      return !!(t && t.nodeType === 1);
    };
    h.encodeDates = function (t) {
      return (
        h.each(t, function (e, r) {
          h.isDate(e)
            ? (t[r] = h.formatDate(e))
            : h.isObject(e) && (t[r] = h.encodeDates(e));
        }),
        t
      );
    };
    h.timestamp = function () {
      return (
        (Date.now =
          Date.now ||
          function () {
            return +new Date();
          }),
        Date.now()
      );
    };
    h.formatDate = function (t) {
      function e(r) {
        return r < 10 ? "0" + r : r;
      }
      return (
        t.getUTCFullYear() +
        "-" +
        e(t.getUTCMonth() + 1) +
        "-" +
        e(t.getUTCDate()) +
        "T" +
        e(t.getUTCHours()) +
        ":" +
        e(t.getUTCMinutes()) +
        ":" +
        e(t.getUTCSeconds())
      );
    };
    h.strip_empty_properties = function (t) {
      var e = {};
      return (
        h.each(t, function (r, n) {
          h.isString(r) && r.length > 0 && (e[n] = r);
        }),
        e
      );
    };
    h.truncate = function (t, e) {
      var r;
      return (
        typeof t == "string"
          ? (r = t.slice(0, e))
          : h.isArray(t)
          ? ((r = []),
            h.each(t, function (n) {
              r.push(h.truncate(n, e));
            }))
          : h.isObject(t)
          ? ((r = {}),
            h.each(t, function (n, i) {
              r[i] = h.truncate(n, e);
            }))
          : (r = t),
        r
      );
    };
    h.JSONEncode = (function () {
      return function (t) {
        var e = t,
          r = function (i) {
            var a =
                /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
              o = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\",
              };
            return (
              (a.lastIndex = 0),
              a.test(i)
                ? '"' +
                  i.replace(a, function (s) {
                    var c = o[s];
                    return typeof c == "string"
                      ? c
                      : "\\u" +
                          ("0000" + s.charCodeAt(0).toString(16)).slice(-4);
                  }) +
                  '"'
                : '"' + i + '"'
            );
          },
          n = function (i, a) {
            var o = "",
              s = "    ",
              c = 0,
              u = "",
              l = "",
              f = 0,
              p = o,
              d = [],
              g = a[i];
            switch (
              (g &&
                typeof g == "object" &&
                typeof g.toJSON == "function" &&
                (g = g.toJSON(i)),
              typeof g)
            ) {
              case "string":
                return r(g);
              case "number":
                return isFinite(g) ? String(g) : "null";
              case "boolean":
              case "null":
                return String(g);
              case "object":
                if (!g) return "null";
                if (((o += s), (d = []), no.apply(g) === "[object Array]")) {
                  for (f = g.length, c = 0; c < f; c += 1)
                    d[c] = n(c, g) || "null";
                  return (
                    (l =
                      d.length === 0
                        ? "[]"
                        : o
                        ? `[
` +
                          o +
                          d.join(
                            `,
` + o
                          ) +
                          `
` +
                          p +
                          "]"
                        : "[" + d.join(",") + "]"),
                    (o = p),
                    l
                  );
                }
                for (u in g)
                  Mc.call(g, u) &&
                    ((l = n(u, g)), l && d.push(r(u) + (o ? ": " : ":") + l));
                return (
                  (l =
                    d.length === 0
                      ? "{}"
                      : o
                      ? "{" + d.join(",") + p + "}"
                      : "{" + d.join(",") + "}"),
                  (o = p),
                  l
                );
            }
          };
        return n("", { "": e });
      };
    })();
    h.JSONDecode = (function () {
      var t,
        e,
        r = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\b",
          f: "\f",
          n: `
`,
          r: "\r",
          t: "	",
        },
        n,
        i = function (d) {
          var g = new SyntaxError(d);
          throw ((g.at = t), (g.text = n), g);
        },
        a = function (d) {
          return (
            d && d !== e && i("Expected '" + d + "' instead of '" + e + "'"),
            (e = n.charAt(t)),
            (t += 1),
            e
          );
        },
        o = function () {
          var d,
            g = "";
          for (e === "-" && ((g = "-"), a("-")); e >= "0" && e <= "9"; )
            (g += e), a();
          if (e === ".") for (g += "."; a() && e >= "0" && e <= "9"; ) g += e;
          if (e === "e" || e === "E")
            for (
              g += e, a(), (e === "-" || e === "+") && ((g += e), a());
              e >= "0" && e <= "9";

            )
              (g += e), a();
          if (((d = +g), !isFinite(d))) i("Bad number");
          else return d;
        },
        s = function () {
          var d,
            g,
            v = "",
            y;
          if (e === '"')
            for (; a(); ) {
              if (e === '"') return a(), v;
              if (e === "\\")
                if ((a(), e === "u")) {
                  for (
                    y = 0, g = 0;
                    g < 4 && ((d = parseInt(a(), 16)), !!isFinite(d));
                    g += 1
                  )
                    y = y * 16 + d;
                  v += String.fromCharCode(y);
                } else if (typeof r[e] == "string") v += r[e];
                else break;
              else v += e;
            }
          i("Bad string");
        },
        c = function () {
          for (; e && e <= " "; ) a();
        },
        u = function () {
          switch (e) {
            case "t":
              return a("t"), a("r"), a("u"), a("e"), !0;
            case "f":
              return a("f"), a("a"), a("l"), a("s"), a("e"), !1;
            case "n":
              return a("n"), a("u"), a("l"), a("l"), null;
          }
          i('Unexpected "' + e + '"');
        },
        l,
        f = function () {
          var d = [];
          if (e === "[") {
            if ((a("["), c(), e === "]")) return a("]"), d;
            for (; e; ) {
              if ((d.push(l()), c(), e === "]")) return a("]"), d;
              a(","), c();
            }
          }
          i("Bad array");
        },
        p = function () {
          var d,
            g = {};
          if (e === "{") {
            if ((a("{"), c(), e === "}")) return a("}"), g;
            for (; e; ) {
              if (
                ((d = s()),
                c(),
                a(":"),
                Object.hasOwnProperty.call(g, d) &&
                  i('Duplicate key "' + d + '"'),
                (g[d] = l()),
                c(),
                e === "}")
              )
                return a("}"), g;
              a(","), c();
            }
          }
          i("Bad object");
        };
      return (
        (l = function () {
          switch ((c(), e)) {
            case "{":
              return p();
            case "[":
              return f();
            case '"':
              return s();
            case "-":
              return o();
            default:
              return e >= "0" && e <= "9" ? o() : u();
          }
        }),
        function (d) {
          var g;
          return (
            (n = d),
            (t = 0),
            (e = " "),
            (g = l()),
            c(),
            e && i("Syntax error"),
            g
          );
        }
      );
    })();
    h.base64Encode = function (t) {
      var e =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        r,
        n,
        i,
        a,
        o,
        s,
        c,
        u,
        l = 0,
        f = 0,
        p = "",
        d = [];
      if (!t) return t;
      t = h.utf8Encode(t);
      do
        (r = t.charCodeAt(l++)),
          (n = t.charCodeAt(l++)),
          (i = t.charCodeAt(l++)),
          (u = (r << 16) | (n << 8) | i),
          (a = (u >> 18) & 63),
          (o = (u >> 12) & 63),
          (s = (u >> 6) & 63),
          (c = u & 63),
          (d[f++] = e.charAt(a) + e.charAt(o) + e.charAt(s) + e.charAt(c));
      while (l < t.length);
      switch (((p = d.join("")), t.length % 3)) {
        case 1:
          p = p.slice(0, -2) + "==";
          break;
        case 2:
          p = p.slice(0, -1) + "=";
          break;
      }
      return p;
    };
    h.utf8Encode = function (t) {
      t = (t + "")
        .replace(
          /\r\n/g,
          `
`
        )
        .replace(
          /\r/g,
          `
`
        );
      var e = "",
        r,
        n,
        i = 0,
        a;
      for (r = n = 0, i = t.length, a = 0; a < i; a++) {
        var o = t.charCodeAt(a),
          s = null;
        o < 128
          ? n++
          : o > 127 && o < 2048
          ? (s = String.fromCharCode((o >> 6) | 192, (o & 63) | 128))
          : (s = String.fromCharCode(
              (o >> 12) | 224,
              ((o >> 6) & 63) | 128,
              (o & 63) | 128
            )),
          s !== null &&
            (n > r && (e += t.substring(r, n)), (e += s), (r = n = a + 1));
      }
      return n > r && (e += t.substring(r, t.length)), e;
    };
    h.UUID = (function () {
      var t = function () {
          var n = 1 * new Date(),
            i;
          if (Pe.performance && Pe.performance.now) i = Pe.performance.now();
          else for (i = 0; n == 1 * new Date(); ) i++;
          return n.toString(16) + Math.floor(i).toString(16);
        },
        e = function () {
          return Math.random().toString(16).replace(".", "");
        },
        r = function () {
          var n = br,
            i,
            a,
            o = [],
            s = 0;
          function c(u, l) {
            var f,
              p = 0;
            for (f = 0; f < l.length; f++) p |= o[f] << (f * 8);
            return u ^ p;
          }
          for (i = 0; i < n.length; i++)
            (a = n.charCodeAt(i)),
              o.unshift(a & 255),
              o.length >= 4 && ((s = c(s, o)), (o = []));
          return o.length > 0 && (s = c(s, o)), s.toString(16);
        };
      return function () {
        var n = (Ic.height * Ic.width).toString(16);
        return t() + "-" + e() + "-" + r() + "-" + n + "-" + t();
      };
    })();
    var FE = [
      "ahrefsbot",
      "baiduspider",
      "bingbot",
      "bingpreview",
      "chrome-lighthouse",
      "facebookexternal",
      "petalbot",
      "pinterest",
      "screaming frog",
      "yahoo! slurp",
      "yandexbot",
      "adsbot-google",
      "apis-google",
      "duplexweb-google",
      "feedfetcher-google",
      "google favicon",
      "google web preview",
      "google-read-aloud",
      "googlebot",
      "googleweblight",
      "mediapartners-google",
      "storebot-google",
    ];
    h.isBlockedUA = function (t) {
      var e;
      for (t = t.toLowerCase(), e = 0; e < FE.length; e++)
        if (t.indexOf(FE[e]) !== -1) return !0;
      return !1;
    };
    h.HTTPBuildQuery = function (t, e) {
      var r,
        n,
        i = [];
      return (
        h.isUndefined(e) && (e = "&"),
        h.each(t, function (a, o) {
          (r = encodeURIComponent(a.toString())),
            (n = encodeURIComponent(o)),
            (i[i.length] = n + "=" + r);
        }),
        i.join(e)
      );
    };
    h.getQueryParam = function (t, e) {
      e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
      var r = "[\\?&]" + e + "=([^&#]*)",
        n = new RegExp(r),
        i = n.exec(t);
      if (i === null || (i && typeof i[1] != "string" && i[1].length))
        return "";
      var a = i[1];
      try {
        a = decodeURIComponent(a);
      } catch {
        _e.error("Skipping decoding for malformed query param: " + a);
      }
      return a.replace(/\+/g, " ");
    };
    h.cookie = {
      get: function (t) {
        for (
          var e = t + "=", r = Oe.cookie.split(";"), n = 0;
          n < r.length;
          n++
        ) {
          for (var i = r[n]; i.charAt(0) == " "; ) i = i.substring(1, i.length);
          if (i.indexOf(e) === 0)
            return decodeURIComponent(i.substring(e.length, i.length));
        }
        return null;
      },
      parse: function (t) {
        var e;
        try {
          e = h.JSONDecode(h.cookie.get(t)) || {};
        } catch {}
        return e;
      },
      set_seconds: function (t, e, r, n, i, a, o) {
        var s = "",
          c = "",
          u = "";
        if (o) s = "; domain=" + o;
        else if (n) {
          var l = PE(Oe.location.hostname);
          s = l ? "; domain=." + l : "";
        }
        if (r) {
          var f = new Date();
          f.setTime(f.getTime() + r * 1e3),
            (c = "; expires=" + f.toGMTString());
        }
        a && ((i = !0), (u = "; SameSite=None")),
          i && (u += "; secure"),
          (Oe.cookie =
            t + "=" + encodeURIComponent(e) + c + "; path=/" + s + u);
      },
      set: function (t, e, r, n, i, a, o) {
        var s = "",
          c = "",
          u = "";
        if (o) s = "; domain=" + o;
        else if (n) {
          var l = PE(Oe.location.hostname);
          s = l ? "; domain=." + l : "";
        }
        if (r) {
          var f = new Date();
          f.setTime(f.getTime() + r * 24 * 60 * 60 * 1e3),
            (c = "; expires=" + f.toGMTString());
        }
        a && ((i = !0), (u = "; SameSite=None")), i && (u += "; secure");
        var p = t + "=" + encodeURIComponent(e) + c + "; path=/" + s + u;
        return (Oe.cookie = p), p;
      },
      remove: function (t, e, r) {
        h.cookie.set(t, "", -1, e, !1, !1, r);
      },
    };
    var Of = null,
      xc = function (t, e) {
        if (Of !== null && !e) return Of;
        var r = !0;
        try {
          t = t || window.localStorage;
          var n = "__mplss_" + Nf(8),
            i = "xyz";
          t.setItem(n, i), t.getItem(n) !== i && (r = !1), t.removeItem(n);
        } catch {
          r = !1;
        }
        return (Of = r), r;
      };
    h.localStorage = {
      is_supported: function (t) {
        var e = xc(null, t);
        return (
          e ||
            _e.error("localStorage unsupported; falling back to cookie store"),
          e
        );
      },
      error: function (t) {
        _e.error("localStorage error: " + t);
      },
      get: function (t) {
        try {
          return window.localStorage.getItem(t);
        } catch (e) {
          h.localStorage.error(e);
        }
        return null;
      },
      parse: function (t) {
        try {
          return h.JSONDecode(h.localStorage.get(t)) || {};
        } catch {}
        return null;
      },
      set: function (t, e) {
        try {
          window.localStorage.setItem(t, e);
        } catch (r) {
          h.localStorage.error(r);
        }
      },
      remove: function (t) {
        try {
          window.localStorage.removeItem(t);
        } catch (e) {
          h.localStorage.error(e);
        }
      },
    };
    h.register_event = (function () {
      var t = function (n, i, a, o, s) {
        if (!n) {
          _e.error("No valid element provided to register_event");
          return;
        }
        if (n.addEventListener && !o) n.addEventListener(i, a, !!s);
        else {
          var c = "on" + i,
            u = n[c];
          n[c] = e(n, a, u);
        }
      };
      function e(n, i, a) {
        var o = function (s) {
          if (((s = s || r(window.event)), !!s)) {
            var c = !0,
              u,
              l;
            return (
              h.isFunction(a) && (u = a(s)),
              (l = i.call(n, s)),
              (u === !1 || l === !1) && (c = !1),
              c
            );
          }
        };
        return o;
      }
      function r(n) {
        return (
          n &&
            ((n.preventDefault = r.preventDefault),
            (n.stopPropagation = r.stopPropagation)),
          n
        );
      }
      return (
        (r.preventDefault = function () {
          this.returnValue = !1;
        }),
        (r.stopPropagation = function () {
          this.cancelBubble = !0;
        }),
        t
      );
    })();
    var eV = new RegExp(
      '^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$'
    );
    h.dom_query = (function () {
      function t(i) {
        return i.all ? i.all : i.getElementsByTagName("*");
      }
      var e = /[\t\r\n]/g;
      function r(i, a) {
        var o = " " + a + " ";
        return (" " + i.className + " ").replace(e, " ").indexOf(o) >= 0;
      }
      function n(i) {
        if (!Oe.getElementsByTagName) return [];
        var a = i.split(" "),
          o,
          s,
          c,
          u,
          l,
          f,
          p,
          d,
          g,
          v,
          y = [Oe];
        for (f = 0; f < a.length; f++) {
          if (
            ((o = a[f].replace(/^\s+/, "").replace(/\s+$/, "")),
            o.indexOf("#") > -1)
          ) {
            (s = o.split("#")), (c = s[0]);
            var m = s[1],
              I = Oe.getElementById(m);
            if (!I || (c && I.nodeName.toLowerCase() != c)) return [];
            y = [I];
            continue;
          }
          if (o.indexOf(".") > -1) {
            (s = o.split(".")), (c = s[0]);
            var b = s[1];
            for (c || (c = "*"), u = [], l = 0, p = 0; p < y.length; p++)
              for (
                c == "*" ? (g = t(y[p])) : (g = y[p].getElementsByTagName(c)),
                  d = 0;
                d < g.length;
                d++
              )
                u[l++] = g[d];
            for (y = [], v = 0, p = 0; p < u.length; p++)
              u[p].className &&
                h.isString(u[p].className) &&
                r(u[p], b) &&
                (y[v++] = u[p]);
            continue;
          }
          var w = o.match(eV);
          if (w) {
            c = w[1];
            var k = w[2],
              _ = w[3],
              A = w[4];
            for (c || (c = "*"), u = [], l = 0, p = 0; p < y.length; p++)
              for (
                c == "*" ? (g = t(y[p])) : (g = y[p].getElementsByTagName(c)),
                  d = 0;
                d < g.length;
                d++
              )
                u[l++] = g[d];
            (y = []), (v = 0);
            var C;
            switch (_) {
              case "=":
                C = function (F) {
                  return F.getAttribute(k) == A;
                };
                break;
              case "~":
                C = function (F) {
                  return F.getAttribute(k).match(new RegExp("\\b" + A + "\\b"));
                };
                break;
              case "|":
                C = function (F) {
                  return F.getAttribute(k).match(new RegExp("^" + A + "-?"));
                };
                break;
              case "^":
                C = function (F) {
                  return F.getAttribute(k).indexOf(A) === 0;
                };
                break;
              case "$":
                C = function (F) {
                  return (
                    F.getAttribute(k).lastIndexOf(A) ==
                    F.getAttribute(k).length - A.length
                  );
                };
                break;
              case "*":
                C = function (F) {
                  return F.getAttribute(k).indexOf(A) > -1;
                };
                break;
              default:
                C = function (F) {
                  return F.getAttribute(k);
                };
            }
            for (y = [], v = 0, p = 0; p < u.length; p++)
              C(u[p]) && (y[v++] = u[p]);
            continue;
          }
          for (c = o, u = [], l = 0, p = 0; p < y.length; p++)
            for (g = y[p].getElementsByTagName(c), d = 0; d < g.length; d++)
              u[l++] = g[d];
          y = u;
        }
        return y;
      }
      return function (i) {
        return h.isElement(i)
          ? [i]
          : h.isObject(i) && !h.isUndefined(i.length)
          ? i
          : n.call(this, i);
      };
    })();
    var tV = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
      ],
      rV = [
        "dclid",
        "fbclid",
        "gclid",
        "ko_click_id",
        "li_fat_id",
        "msclkid",
        "ttclid",
        "twclid",
        "wbraid",
      ];
    h.info = {
      campaignParams: function (t) {
        var e = "",
          r = {};
        return (
          h.each(tV, function (n) {
            (e = h.getQueryParam(Oe.URL, n)),
              e.length ? (r[n] = e) : t !== void 0 && (r[n] = t);
          }),
          r
        );
      },
      clickParams: function () {
        var t = "",
          e = {};
        return (
          h.each(rV, function (r) {
            (t = h.getQueryParam(Oe.URL, r)), t.length && (e[r] = t);
          }),
          e
        );
      },
      marketingParams: function () {
        return h.extend(h.info.campaignParams(), h.info.clickParams());
      },
      searchEngine: function (t) {
        return t.search("https?://(.*)google.([^/?]*)") === 0
          ? "google"
          : t.search("https?://(.*)bing.com") === 0
          ? "bing"
          : t.search("https?://(.*)yahoo.com") === 0
          ? "yahoo"
          : t.search("https?://(.*)duckduckgo.com") === 0
          ? "duckduckgo"
          : null;
      },
      searchInfo: function (t) {
        var e = h.info.searchEngine(t),
          r = e != "yahoo" ? "q" : "p",
          n = {};
        if (e !== null) {
          n.$search_engine = e;
          var i = h.getQueryParam(t, r);
          i.length && (n.mp_keyword = i);
        }
        return n;
      },
      browser: function (t, e, r) {
        return (
          (e = e || ""),
          r || h.includes(t, " OPR/")
            ? h.includes(t, "Mini")
              ? "Opera Mini"
              : "Opera"
            : /(BlackBerry|PlayBook|BB10)/i.test(t)
            ? "BlackBerry"
            : h.includes(t, "IEMobile") || h.includes(t, "WPDesktop")
            ? "Internet Explorer Mobile"
            : h.includes(t, "SamsungBrowser/")
            ? "Samsung Internet"
            : h.includes(t, "Edge") || h.includes(t, "Edg/")
            ? "Microsoft Edge"
            : h.includes(t, "FBIOS")
            ? "Facebook Mobile"
            : h.includes(t, "Chrome")
            ? "Chrome"
            : h.includes(t, "CriOS")
            ? "Chrome iOS"
            : h.includes(t, "UCWEB") || h.includes(t, "UCBrowser")
            ? "UC Browser"
            : h.includes(t, "FxiOS")
            ? "Firefox iOS"
            : h.includes(e, "Apple")
            ? h.includes(t, "Mobile")
              ? "Mobile Safari"
              : "Safari"
            : h.includes(t, "Android")
            ? "Android Mobile"
            : h.includes(t, "Konqueror")
            ? "Konqueror"
            : h.includes(t, "Firefox")
            ? "Firefox"
            : h.includes(t, "MSIE") || h.includes(t, "Trident/")
            ? "Internet Explorer"
            : h.includes(t, "Gecko")
            ? "Mozilla"
            : ""
        );
      },
      browserVersion: function (t, e, r) {
        var n = h.info.browser(t, e, r),
          i = {
            "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
            "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
            Chrome: /Chrome\/(\d+(\.\d+)?)/,
            "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
            "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
            Safari: /Version\/(\d+(\.\d+)?)/,
            "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
            Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
            Firefox: /Firefox\/(\d+(\.\d+)?)/,
            "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
            Konqueror: /Konqueror:(\d+(\.\d+)?)/,
            BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
            "Android Mobile": /android\s(\d+(\.\d+)?)/,
            "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
            "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
            Mozilla: /rv:(\d+(\.\d+)?)/,
          },
          a = i[n];
        if (a === void 0) return null;
        var o = t.match(a);
        return o ? parseFloat(o[o.length - 2]) : null;
      },
      os: function () {
        var t = br;
        return /Windows/i.test(t)
          ? /Phone/.test(t) || /WPDesktop/.test(t)
            ? "Windows Phone"
            : "Windows"
          : /(iPhone|iPad|iPod)/.test(t)
          ? "iOS"
          : /Android/.test(t)
          ? "Android"
          : /(BlackBerry|PlayBook|BB10)/i.test(t)
          ? "BlackBerry"
          : /Mac/i.test(t)
          ? "Mac OS X"
          : /Linux/.test(t)
          ? "Linux"
          : /CrOS/.test(t)
          ? "Chrome OS"
          : "";
      },
      device: function (t) {
        return /Windows Phone/i.test(t) || /WPDesktop/.test(t)
          ? "Windows Phone"
          : /iPad/.test(t)
          ? "iPad"
          : /iPod/.test(t)
          ? "iPod Touch"
          : /iPhone/.test(t)
          ? "iPhone"
          : /(BlackBerry|PlayBook|BB10)/i.test(t)
          ? "BlackBerry"
          : /Android/.test(t)
          ? "Android"
          : "";
      },
      referringDomain: function (t) {
        var e = t.split("/");
        return e.length >= 3 ? e[2] : "";
      },
      properties: function () {
        return h.extend(
          h.strip_empty_properties({
            $os: h.info.os(),
            $browser: h.info.browser(br, ln.vendor, Ec),
            $referrer: Oe.referrer,
            $referring_domain: h.info.referringDomain(Oe.referrer),
            $device: h.info.device(br),
          }),
          {
            $current_url: Pe.location.href,
            $browser_version: h.info.browserVersion(br, ln.vendor, Ec),
            $screen_height: Ic.height,
            $screen_width: Ic.width,
            mp_lib: "web",
            $lib_version: Pr.LIB_VERSION,
            $insert_id: Nf(),
            time: h.timestamp() / 1e3,
          }
        );
      },
      people_properties: function () {
        return h.extend(
          h.strip_empty_properties({
            $os: h.info.os(),
            $browser: h.info.browser(br, ln.vendor, Ec),
          }),
          { $browser_version: h.info.browserVersion(br, ln.vendor, Ec) }
        );
      },
      mpPageViewProperties: function () {
        return h.strip_empty_properties({
          current_page_title: Oe.title,
          current_domain: Pe.location.hostname,
          current_url_path: Pe.location.pathname,
          current_url_protocol: Pe.location.protocol,
          current_url_search: Pe.location.search,
        });
      },
    };
    var Nf = function (t) {
        var e =
          Math.random().toString(36).substring(2, 10) +
          Math.random().toString(36).substring(2, 10);
        return t ? e.substring(0, t) : e;
      },
      nV = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
      iV = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
      PE = function (t) {
        var e = iV,
          r = t.split("."),
          n = r[r.length - 1];
        (n.length > 4 || n === "com" || n === "org") && (e = nV);
        var i = t.match(e);
        return i ? i[0] : "";
      },
      wc = null,
      Ac = null;
    typeof JSON < "u" && ((wc = JSON.stringify), (Ac = JSON.parse));
    wc = wc || h.JSONEncode;
    Ac = Ac || h.JSONDecode;
    h.toArray = h.toArray;
    h.isObject = h.isObject;
    h.JSONEncode = h.JSONEncode;
    h.JSONDecode = h.JSONDecode;
    h.isBlockedUA = h.isBlockedUA;
    h.isEmptyObject = h.isEmptyObject;
    h.info = h.info;
    h.info.device = h.info.device;
    h.info.browser = h.info.browser;
    h.info.browserVersion = h.info.browserVersion;
    h.info.properties = h.info.properties;
    var Ur = function () {};
    Ur.prototype.create_properties = function () {};
    Ur.prototype.event_handler = function () {};
    Ur.prototype.after_track_handler = function () {};
    Ur.prototype.init = function (t) {
      return (this.mp = t), this;
    };
    Ur.prototype.track = function (t, e, r, n) {
      var i = this,
        a = h.dom_query(t);
      if (a.length === 0) {
        _e.error("The DOM query (" + t + ") returned 0 elements");
        return;
      }
      return (
        h.each(
          a,
          function (o) {
            h.register_event(o, this.override_event, function (s) {
              var c = {},
                u = i.create_properties(r, this),
                l = i.mp.get_config("track_links_timeout");
              i.event_handler(s, this, c),
                window.setTimeout(i.track_callback(n, u, c, !0), l),
                i.mp.track(e, u, i.track_callback(n, u, c));
            });
          },
          this
        ),
        !0
      );
    };
    Ur.prototype.track_callback = function (t, e, r, n) {
      n = n || !1;
      var i = this;
      return function () {
        r.callback_fired ||
          ((r.callback_fired = !0),
          !(t && t(n, e) === !1) && i.after_track_handler(e, r, n));
      };
    };
    Ur.prototype.create_properties = function (t, e) {
      var r;
      return typeof t == "function" ? (r = t(e)) : (r = h.extend({}, t)), r;
    };
    var qi = function () {
      this.override_event = "click";
    };
    h.inherit(qi, Ur);
    qi.prototype.create_properties = function (t, e) {
      var r = qi.superclass.create_properties.apply(this, arguments);
      return e.href && (r.url = e.href), r;
    };
    qi.prototype.event_handler = function (t, e, r) {
      (r.new_tab =
        t.which === 2 || t.metaKey || t.ctrlKey || e.target === "_blank"),
        (r.href = e.href),
        r.new_tab || t.preventDefault();
    };
    qi.prototype.after_track_handler = function (t, e) {
      e.new_tab ||
        setTimeout(function () {
          window.location = e.href;
        }, 0);
    };
    var Nc = function () {
      this.override_event = "submit";
    };
    h.inherit(Nc, Ur);
    Nc.prototype.event_handler = function (t, e, r) {
      (r.element = e), t.preventDefault();
    };
    Nc.prototype.after_track_handler = function (t, e) {
      setTimeout(function () {
        e.element.submit();
      }, 0);
    };
    var aV = Mf("lock"),
      VE = function (t, e) {
        (e = e || {}),
          (this.storageKey = t),
          (this.storage = e.storage || window.localStorage),
          (this.pollIntervalMS = e.pollIntervalMS || 100),
          (this.timeoutMS = e.timeoutMS || 2e3);
      };
    VE.prototype.withLock = function (t, e, r) {
      !r && typeof e != "function" && ((r = e), (e = null));
      var n = r || new Date().getTime() + "|" + Math.random(),
        i = new Date().getTime(),
        a = this.storageKey,
        o = this.pollIntervalMS,
        s = this.timeoutMS,
        c = this.storage,
        u = a + ":X",
        l = a + ":Y",
        f = a + ":Z",
        p = function (I) {
          e && e(I);
        },
        d = function (I) {
          if (new Date().getTime() - i > s) {
            aV.error(
              "Timeout waiting for mutex on " +
                a +
                "; clearing lock. [" +
                n +
                "]"
            ),
              c.removeItem(f),
              c.removeItem(l),
              y();
            return;
          }
          setTimeout(function () {
            try {
              I();
            } catch (b) {
              p(b);
            }
          }, o * (Math.random() + 0.1));
        },
        g = function (I, b) {
          I()
            ? b()
            : d(function () {
                g(I, b);
              });
        },
        v = function () {
          var I = c.getItem(l);
          if (I && I !== n) return !1;
          if ((c.setItem(l, n), c.getItem(l) === n)) return !0;
          if (!xc(c, !0))
            throw new Error(
              "localStorage support dropped while acquiring lock"
            );
          return !1;
        },
        y = function () {
          c.setItem(u, n),
            g(v, function () {
              if (c.getItem(u) === n) {
                m();
                return;
              }
              d(function () {
                if (c.getItem(l) !== n) {
                  y();
                  return;
                }
                g(function () {
                  return !c.getItem(f);
                }, m);
              });
            });
        },
        m = function () {
          c.setItem(f, "1");
          try {
            t();
          } finally {
            c.removeItem(f),
              c.getItem(l) === n && c.removeItem(l),
              c.getItem(u) === n && c.removeItem(u);
          }
        };
      try {
        if (xc(c, !0)) y();
        else throw new Error("localStorage support check failed");
      } catch (I) {
        p(I);
      }
    };
    var LE = Mf("batch"),
      fn = function (t, e) {
        (e = e || {}),
          (this.storageKey = t),
          (this.storage = e.storage || window.localStorage),
          (this.reportError = e.errorReporter || h.bind(LE.error, LE)),
          (this.lock = new VE(t, { storage: this.storage })),
          (this.pid = e.pid || null),
          (this.memQueue = []);
      };
    fn.prototype.enqueue = function (t, e, r) {
      var n = {
        id: Nf(),
        flushAfter: new Date().getTime() + e * 2,
        payload: t,
      };
      this.lock.withLock(
        h.bind(function () {
          var a;
          try {
            var o = this.readFromStorage();
            o.push(n), (a = this.saveToStorage(o)), a && this.memQueue.push(n);
          } catch {
            this.reportError("Error enqueueing item", t), (a = !1);
          }
          r && r(a);
        }, this),
        h.bind(function (a) {
          this.reportError("Error acquiring storage lock", a), r && r(!1);
        }, this),
        this.pid
      );
    };
    fn.prototype.fillBatch = function (t) {
      var e = this.memQueue.slice(0, t);
      if (e.length < t) {
        var r = this.readFromStorage();
        if (r.length) {
          var n = {};
          h.each(e, function (o) {
            n[o.id] = !0;
          });
          for (var i = 0; i < r.length; i++) {
            var a = r[i];
            if (
              new Date().getTime() > a.flushAfter &&
              !n[a.id] &&
              ((a.orphaned = !0), e.push(a), e.length >= t)
            )
              break;
          }
        }
      }
      return e;
    };
    var UE = function (t, e) {
      var r = [];
      return (
        h.each(t, function (n) {
          n.id && !e[n.id] && r.push(n);
        }),
        r
      );
    };
    fn.prototype.removeItemsByID = function (t, e) {
      var r = {};
      h.each(t, function (i) {
        r[i] = !0;
      }),
        (this.memQueue = UE(this.memQueue, r));
      var n = h.bind(function () {
        var i;
        try {
          var a = this.readFromStorage();
          if (((a = UE(a, r)), (i = this.saveToStorage(a)), i)) {
            a = this.readFromStorage();
            for (var o = 0; o < a.length; o++) {
              var s = a[o];
              if (s.id && r[s.id])
                return this.reportError("Item not removed from storage"), !1;
            }
          }
        } catch {
          this.reportError("Error removing items", t), (i = !1);
        }
        return i;
      }, this);
      this.lock.withLock(
        function () {
          var a = n();
          e && e(a);
        },
        h.bind(function (a) {
          var o = !1;
          if (
            (this.reportError("Error acquiring storage lock", a),
            !xc(this.storage, !0) && ((o = n()), !o))
          )
            try {
              this.storage.removeItem(this.storageKey);
            } catch (s) {
              this.reportError("Error clearing queue", s);
            }
          e && e(o);
        }, this),
        this.pid
      );
    };
    var qE = function (t, e) {
      var r = [];
      return (
        h.each(t, function (n) {
          var i = n.id;
          if (i in e) {
            var a = e[i];
            a !== null && ((n.payload = a), r.push(n));
          } else r.push(n);
        }),
        r
      );
    };
    fn.prototype.updatePayloads = function (t, e) {
      (this.memQueue = qE(this.memQueue, t)),
        this.lock.withLock(
          h.bind(function () {
            var n;
            try {
              var i = this.readFromStorage();
              (i = qE(i, t)), (n = this.saveToStorage(i));
            } catch {
              this.reportError("Error updating items", t), (n = !1);
            }
            e && e(n);
          }, this),
          h.bind(function (n) {
            this.reportError("Error acquiring storage lock", n), e && e(!1);
          }, this),
          this.pid
        );
    };
    fn.prototype.readFromStorage = function () {
      var t;
      try {
        (t = this.storage.getItem(this.storageKey)),
          t &&
            ((t = Ac(t)),
            h.isArray(t) ||
              (this.reportError("Invalid storage entry:", t), (t = null)));
      } catch (e) {
        this.reportError("Error retrieving queue", e), (t = null);
      }
      return t || [];
    };
    fn.prototype.saveToStorage = function (t) {
      try {
        return this.storage.setItem(this.storageKey, wc(t)), !0;
      } catch (e) {
        return this.reportError("Error saving queue", e), !1;
      }
    };
    fn.prototype.clear = function () {
      (this.memQueue = []), this.storage.removeItem(this.storageKey);
    };
    var oV = 10 * 60 * 1e3,
      Za = Mf("batch"),
      Tr = function (t, e) {
        (this.errorReporter = e.errorReporter),
          (this.queue = new fn(t, {
            errorReporter: h.bind(this.reportError, this),
            storage: e.storage,
          })),
          (this.libConfig = e.libConfig),
          (this.sendRequest = e.sendRequestFunc),
          (this.beforeSendHook = e.beforeSendHook),
          (this.stopAllBatching = e.stopAllBatchingFunc),
          (this.batchSize = this.libConfig.batch_size),
          (this.flushInterval = this.libConfig.batch_flush_interval_ms),
          (this.stopped = !this.libConfig.batch_autostart),
          (this.consecutiveRemovalFailures = 0),
          (this.itemIdsSentSuccessfully = {});
      };
    Tr.prototype.enqueue = function (t, e) {
      this.queue.enqueue(t, this.flushInterval, e);
    };
    Tr.prototype.start = function () {
      (this.stopped = !1), (this.consecutiveRemovalFailures = 0), this.flush();
    };
    Tr.prototype.stop = function () {
      (this.stopped = !0),
        this.timeoutID &&
          (clearTimeout(this.timeoutID), (this.timeoutID = null));
    };
    Tr.prototype.clear = function () {
      this.queue.clear();
    };
    Tr.prototype.resetBatchSize = function () {
      this.batchSize = this.libConfig.batch_size;
    };
    Tr.prototype.resetFlush = function () {
      this.scheduleFlush(this.libConfig.batch_flush_interval_ms);
    };
    Tr.prototype.scheduleFlush = function (t) {
      (this.flushInterval = t),
        this.stopped ||
          (this.timeoutID = setTimeout(
            h.bind(this.flush, this),
            this.flushInterval
          ));
    };
    Tr.prototype.flush = function (t) {
      try {
        if (this.requestInProgress) {
          Za.log("Flush: Request already in progress");
          return;
        }
        t = t || {};
        var e = this.libConfig.batch_request_timeout_ms,
          r = new Date().getTime(),
          n = this.batchSize,
          i = this.queue.fillBatch(n),
          a = [],
          o = {};
        if (
          (h.each(
            i,
            function (u) {
              var l = u.payload;
              if (
                (this.beforeSendHook &&
                  !u.orphaned &&
                  (l = this.beforeSendHook(l)),
                l)
              ) {
                l.event &&
                  l.properties &&
                  (l.properties = h.extend({}, l.properties, {
                    mp_sent_by_lib_version: Pr.LIB_VERSION,
                  }));
                var f = !0,
                  p = u.id;
                p
                  ? (this.itemIdsSentSuccessfully[p] || 0) > 5 &&
                    (this.reportError(
                      "[dupe] item ID sent too many times, not sending",
                      {
                        item: u,
                        batchSize: i.length,
                        timesSent: this.itemIdsSentSuccessfully[p],
                      }
                    ),
                    (f = !1))
                  : this.reportError("[dupe] found item with no ID", {
                      item: u,
                    }),
                  f && a.push(l);
              }
              o[u.id] = l;
            },
            this
          ),
          a.length < 1)
        ) {
          this.resetFlush();
          return;
        }
        this.requestInProgress = !0;
        var s = h.bind(function (u) {
            this.requestInProgress = !1;
            try {
              var l = !1;
              if (t.unloading) this.queue.updatePayloads(o);
              else if (
                h.isObject(u) &&
                u.error === "timeout" &&
                new Date().getTime() - r >= e
              )
                this.reportError("Network timeout; retrying"), this.flush();
              else if (
                h.isObject(u) &&
                u.xhr_req &&
                (u.xhr_req.status >= 500 ||
                  u.xhr_req.status === 429 ||
                  u.error === "timeout")
              ) {
                var f = this.flushInterval * 2,
                  p = u.xhr_req.responseHeaders;
                if (p) {
                  var d = p["Retry-After"];
                  d && (f = parseInt(d, 10) * 1e3 || f);
                }
                (f = Math.min(oV, f)),
                  this.reportError("Error; retry in " + f + " ms"),
                  this.scheduleFlush(f);
              } else if (h.isObject(u) && u.xhr_req && u.xhr_req.status === 413)
                if (i.length > 1) {
                  var g = Math.max(1, Math.floor(n / 2));
                  (this.batchSize = Math.min(this.batchSize, g, i.length - 1)),
                    this.reportError(
                      "413 response; reducing batch size to " + this.batchSize
                    ),
                    this.resetFlush();
                } else
                  this.reportError(
                    "Single-event request too large; dropping",
                    i
                  ),
                    this.resetBatchSize(),
                    (l = !0);
              else l = !0;
              l &&
                (this.queue.removeItemsByID(
                  h.map(i, function (v) {
                    return v.id;
                  }),
                  h.bind(function (v) {
                    v
                      ? ((this.consecutiveRemovalFailures = 0), this.flush())
                      : (this.reportError("Failed to remove items from queue"),
                        ++this.consecutiveRemovalFailures > 5
                          ? (this.reportError(
                              "Too many queue failures; disabling batching system."
                            ),
                            this.stopAllBatching())
                          : this.resetFlush());
                  }, this)
                ),
                h.each(
                  i,
                  h.bind(function (v) {
                    var y = v.id;
                    y
                      ? ((this.itemIdsSentSuccessfully[y] =
                          this.itemIdsSentSuccessfully[y] || 0),
                        this.itemIdsSentSuccessfully[y]++,
                        this.itemIdsSentSuccessfully[y] > 5 &&
                          this.reportError(
                            "[dupe] item ID sent too many times",
                            {
                              item: v,
                              batchSize: i.length,
                              timesSent: this.itemIdsSentSuccessfully[y],
                            }
                          ))
                      : this.reportError(
                          "[dupe] found item with no ID while removing",
                          { item: v }
                        );
                  }, this)
                ));
            } catch (v) {
              this.reportError("Error handling API response", v),
                this.resetFlush();
            }
          }, this),
          c = {
            method: "POST",
            verbose: !0,
            ignore_json_errors: !0,
            timeout_ms: e,
          };
        t.unloading && (c.transport = "sendBeacon"),
          Za.log("MIXPANEL REQUEST:", a),
          this.sendRequest(a, c, s);
      } catch (u) {
        this.reportError("Error flushing request queue", u), this.resetFlush();
      }
    };
    Tr.prototype.reportError = function (t, e) {
      if ((Za.error.apply(Za.error, arguments), this.errorReporter))
        try {
          e instanceof Error || (e = new Error(t)), this.errorReporter(t, e);
        } catch (r) {
          Za.error(r);
        }
    };
    var sV = "__mp_opt_in_out_";
    function cV(t, e) {
      GE(!0, t, e);
    }
    function uV(t, e) {
      GE(!1, t, e);
    }
    function lV(t, e) {
      return HE(t, e) === "1";
    }
    function WE(t, e) {
      if (fV(e))
        return (
          _e.warn(
            'This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'
          ),
          !0
        );
      var r = HE(t, e) === "0";
      return (
        r &&
          _e.warn(
            "You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."
          ),
        r
      );
    }
    function ji(t) {
      return Ff(t, function (e) {
        return this.get_config(e);
      });
    }
    function dn(t) {
      return Ff(t, function (e) {
        return this._get_config(e);
      });
    }
    function Vi(t) {
      return Ff(t, function (e) {
        return this._get_config(e);
      });
    }
    function pV(t, e) {
      (e = e || {}),
        Df(e).remove(Rf(t, e), !!e.crossSubdomainCookie, e.cookieDomain);
    }
    function Df(t) {
      return (
        (t = t || {}),
        t.persistenceType === "localStorage" ? h.localStorage : h.cookie
      );
    }
    function Rf(t, e) {
      return (e = e || {}), (e.persistencePrefix || sV) + t;
    }
    function HE(t, e) {
      return Df(e).get(Rf(t, e));
    }
    function fV(t) {
      if (t && t.ignoreDnt) return !1;
      var e = (t && t.window) || Pe,
        r = e.navigator || {},
        n = !1;
      return (
        h.each([r.doNotTrack, r.msDoNotTrack, e.doNotTrack], function (i) {
          h.includes([!0, 1, "1", "yes"], i) && (n = !0);
        }),
        n
      );
    }
    function GE(t, e, r) {
      if (!h.isString(e) || !e.length) {
        _e.error(
          "gdpr." + (t ? "optIn" : "optOut") + " called with an invalid token"
        );
        return;
      }
      (r = r || {}),
        Df(r).set(
          Rf(e, r),
          t ? 1 : 0,
          h.isNumber(r.cookieExpiration) ? r.cookieExpiration : null,
          !!r.crossSubdomainCookie,
          !!r.secureCookie,
          !!r.crossSiteCookie,
          r.cookieDomain
        ),
        r.track &&
          t &&
          r.track(r.trackEventName || "$opt_in", r.trackProperties, {
            send_immediately: !0,
          });
    }
    function Ff(t, e) {
      return function () {
        var r = !1;
        try {
          var n = e.call(this, "token"),
            i = e.call(this, "ignore_dnt"),
            a = e.call(this, "opt_out_tracking_persistence_type"),
            o = e.call(this, "opt_out_tracking_cookie_prefix"),
            s = e.call(this, "window");
          n &&
            (r = WE(n, {
              ignoreDnt: i,
              persistenceType: a,
              persistencePrefix: o,
              window: s,
            }));
        } catch (u) {
          _e.error(
            "Unexpected error when checking tracking opt-out status: " + u
          );
        }
        if (!r) return t.apply(this, arguments);
        var c = arguments[arguments.length - 1];
        typeof c == "function" && c(0);
      };
    }
    var pn = "$set",
      Bi = "$set_once",
      Xt = "$unset",
      Wn = "$add",
      Sr = "$append",
      Hn = "$union",
      Lr = "$remove",
      dV = "$delete",
      zE = {
        set_action: function (t, e) {
          var r = {},
            n = {};
          return (
            h.isObject(t)
              ? h.each(
                  t,
                  function (i, a) {
                    this._is_reserved_property(a) || (n[a] = i);
                  },
                  this
                )
              : (n[t] = e),
            (r[pn] = n),
            r
          );
        },
        unset_action: function (t) {
          var e = {},
            r = [];
          return (
            h.isArray(t) || (t = [t]),
            h.each(
              t,
              function (n) {
                this._is_reserved_property(n) || r.push(n);
              },
              this
            ),
            (e[Xt] = r),
            e
          );
        },
        set_once_action: function (t, e) {
          var r = {},
            n = {};
          return (
            h.isObject(t)
              ? h.each(
                  t,
                  function (i, a) {
                    this._is_reserved_property(a) || (n[a] = i);
                  },
                  this
                )
              : (n[t] = e),
            (r[Bi] = n),
            r
          );
        },
        union_action: function (t, e) {
          var r = {},
            n = {};
          return (
            h.isObject(t)
              ? h.each(
                  t,
                  function (i, a) {
                    this._is_reserved_property(a) ||
                      (n[a] = h.isArray(i) ? i : [i]);
                  },
                  this
                )
              : (n[t] = h.isArray(e) ? e : [e]),
            (r[Hn] = n),
            r
          );
        },
        append_action: function (t, e) {
          var r = {},
            n = {};
          return (
            h.isObject(t)
              ? h.each(
                  t,
                  function (i, a) {
                    this._is_reserved_property(a) || (n[a] = i);
                  },
                  this
                )
              : (n[t] = e),
            (r[Sr] = n),
            r
          );
        },
        remove_action: function (t, e) {
          var r = {},
            n = {};
          return (
            h.isObject(t)
              ? h.each(
                  t,
                  function (i, a) {
                    this._is_reserved_property(a) || (n[a] = i);
                  },
                  this
                )
              : (n[t] = e),
            (r[Lr] = n),
            r
          );
        },
        delete_action: function () {
          var t = {};
          return (t[dV] = ""), t;
        },
      },
      ke = function () {};
    h.extend(ke.prototype, zE);
    ke.prototype._init = function (t, e, r) {
      (this._mixpanel = t), (this._group_key = e), (this._group_id = r);
    };
    ke.prototype.set = Vi(function (t, e, r) {
      var n = this.set_action(t, e);
      return h.isObject(t) && (r = e), this._send_request(n, r);
    });
    ke.prototype.set_once = Vi(function (t, e, r) {
      var n = this.set_once_action(t, e);
      return h.isObject(t) && (r = e), this._send_request(n, r);
    });
    ke.prototype.unset = Vi(function (t, e) {
      var r = this.unset_action(t);
      return this._send_request(r, e);
    });
    ke.prototype.union = Vi(function (t, e, r) {
      h.isObject(t) && (r = e);
      var n = this.union_action(t, e);
      return this._send_request(n, r);
    });
    ke.prototype.delete = Vi(function (t) {
      var e = this.delete_action();
      return this._send_request(e, t);
    });
    ke.prototype.remove = Vi(function (t, e, r) {
      var n = this.remove_action(t, e);
      return this._send_request(n, r);
    });
    ke.prototype._send_request = function (t, e) {
      (t.$group_key = this._group_key),
        (t.$group_id = this._group_id),
        (t.$token = this._get_config("token"));
      var r = h.encodeDates(t);
      return this._mixpanel._track_or_batch(
        {
          type: "groups",
          data: r,
          endpoint:
            this._get_config("api_host") +
            "/" +
            this._get_config("api_routes").groups,
          batcher: this._mixpanel.request_batchers.groups,
        },
        e
      );
    };
    ke.prototype._is_reserved_property = function (t) {
      return t === "$group_key" || t === "$group_id";
    };
    ke.prototype._get_config = function (t) {
      return this._mixpanel.get_config(t);
    };
    ke.prototype.toString = function () {
      return (
        this._mixpanel.toString() +
        ".group." +
        this._group_key +
        "." +
        this._group_id
      );
    };
    ke.prototype.remove = ke.prototype.remove;
    ke.prototype.set = ke.prototype.set;
    ke.prototype.set_once = ke.prototype.set_once;
    ke.prototype.union = ke.prototype.union;
    ke.prototype.unset = ke.prototype.unset;
    ke.prototype.toString = ke.prototype.toString;
    var oe = function () {};
    h.extend(oe.prototype, zE);
    oe.prototype._init = function (t) {
      this._mixpanel = t;
    };
    oe.prototype.set = dn(function (t, e, r) {
      var n = this.set_action(t, e);
      return (
        h.isObject(t) && (r = e),
        this._get_config("save_referrer") &&
          typeof document < "u" &&
          this._mixpanel.persistence.update_referrer_info(document.referrer),
        (n[pn] = h.extend(
          {},
          h.info.people_properties(),
          this._mixpanel.persistence.get_referrer_info(),
          n[pn]
        )),
        this._send_request(n, r)
      );
    });
    oe.prototype.set_once = dn(function (t, e, r) {
      var n = this.set_once_action(t, e);
      return h.isObject(t) && (r = e), this._send_request(n, r);
    });
    oe.prototype.unset = dn(function (t, e) {
      var r = this.unset_action(t);
      return this._send_request(r, e);
    });
    oe.prototype.increment = dn(function (t, e, r) {
      var n = {},
        i = {};
      return (
        h.isObject(t)
          ? (h.each(
              t,
              function (a, o) {
                if (!this._is_reserved_property(o))
                  if (isNaN(parseFloat(a))) {
                    _e.error(
                      "Invalid increment value passed to mixpanel.people.increment - must be a number"
                    );
                    return;
                  } else i[o] = a;
              },
              this
            ),
            (r = e))
          : (h.isUndefined(e) && (e = 1), (i[t] = e)),
        (n[Wn] = i),
        this._send_request(n, r)
      );
    });
    oe.prototype.append = dn(function (t, e, r) {
      h.isObject(t) && (r = e);
      var n = this.append_action(t, e);
      return this._send_request(n, r);
    });
    oe.prototype.remove = dn(function (t, e, r) {
      h.isObject(t) && (r = e);
      var n = this.remove_action(t, e);
      return this._send_request(n, r);
    });
    oe.prototype.union = dn(function (t, e, r) {
      h.isObject(t) && (r = e);
      var n = this.union_action(t, e);
      return this._send_request(n, r);
    });
    oe.prototype.track_charge = dn(function (t, e, r) {
      if (!h.isNumber(t) && ((t = parseFloat(t)), isNaN(t))) {
        _e.error(
          "Invalid value passed to mixpanel.people.track_charge - must be a number"
        );
        return;
      }
      return this.append("$transactions", h.extend({ $amount: t }, e), r);
    });
    oe.prototype.clear_charges = function (t) {
      return this.set("$transactions", [], t);
    };
    oe.prototype.delete_user = function () {
      if (!this._identify_called()) {
        _e.error(
          "mixpanel.people.delete_user() requires you to call identify() first"
        );
        return;
      }
      var t = { $delete: this._mixpanel.get_distinct_id() };
      return this._send_request(t);
    };
    oe.prototype.toString = function () {
      return this._mixpanel.toString() + ".people";
    };
    oe.prototype._send_request = function (t, e) {
      (t.$token = this._get_config("token")),
        (t.$distinct_id = this._mixpanel.get_distinct_id());
      var r = this._mixpanel.get_property("$device_id"),
        n = this._mixpanel.get_property("$user_id"),
        i = this._mixpanel.get_property("$had_persisted_distinct_id");
      r && (t.$device_id = r),
        n && (t.$user_id = n),
        i && (t.$had_persisted_distinct_id = i);
      var a = h.encodeDates(t);
      return this._identify_called()
        ? this._mixpanel._track_or_batch(
            {
              type: "people",
              data: a,
              endpoint:
                this._get_config("api_host") +
                "/" +
                this._get_config("api_routes").engage,
              batcher: this._mixpanel.request_batchers.people,
            },
            e
          )
        : (this._enqueue(t),
          h.isUndefined(e) ||
            (this._get_config("verbose")
              ? e({ status: -1, error: null })
              : e(-1)),
          h.truncate(a, 255));
    };
    oe.prototype._get_config = function (t) {
      return this._mixpanel.get_config(t);
    };
    oe.prototype._identify_called = function () {
      return this._mixpanel._flags.identify_called === !0;
    };
    oe.prototype._enqueue = function (t) {
      pn in t
        ? this._mixpanel.persistence._add_to_people_queue(pn, t)
        : Bi in t
        ? this._mixpanel.persistence._add_to_people_queue(Bi, t)
        : Xt in t
        ? this._mixpanel.persistence._add_to_people_queue(Xt, t)
        : Wn in t
        ? this._mixpanel.persistence._add_to_people_queue(Wn, t)
        : Sr in t
        ? this._mixpanel.persistence._add_to_people_queue(Sr, t)
        : Lr in t
        ? this._mixpanel.persistence._add_to_people_queue(Lr, t)
        : Hn in t
        ? this._mixpanel.persistence._add_to_people_queue(Hn, t)
        : _e.error("Invalid call to _enqueue():", t);
    };
    oe.prototype._flush_one_queue = function (t, e, r, n) {
      var i = this,
        a = h.extend({}, this._mixpanel.persistence.load_queue(t)),
        o = a;
      !h.isUndefined(a) &&
        h.isObject(a) &&
        !h.isEmptyObject(a) &&
        (i._mixpanel.persistence._pop_from_people_queue(t, a),
        i._mixpanel.persistence.save(),
        n && (o = n(a)),
        e.call(i, o, function (s, c) {
          s === 0 && i._mixpanel.persistence._add_to_people_queue(t, a),
            h.isUndefined(r) || r(s, c);
        }));
    };
    oe.prototype._flush = function (t, e, r, n, i, a, o) {
      var s = this;
      this._flush_one_queue(pn, this.set, t),
        this._flush_one_queue(Bi, this.set_once, n),
        this._flush_one_queue(Xt, this.unset, a, function (y) {
          return h.keys(y);
        }),
        this._flush_one_queue(Wn, this.increment, e),
        this._flush_one_queue(Hn, this.union, i);
      var c = this._mixpanel.persistence.load_queue(Sr);
      if (!h.isUndefined(c) && h.isArray(c) && c.length)
        for (
          var u,
            l = function (y, m) {
              y === 0 && s._mixpanel.persistence._add_to_people_queue(Sr, u),
                h.isUndefined(r) || r(y, m);
            },
            f = c.length - 1;
          f >= 0;
          f--
        )
          (c = this._mixpanel.persistence.load_queue(Sr)),
            (u = c.pop()),
            s._mixpanel.persistence.save(),
            h.isEmptyObject(u) || s.append(u, l);
      var p = this._mixpanel.persistence.load_queue(Lr);
      if (!h.isUndefined(p) && h.isArray(p) && p.length)
        for (
          var d,
            g = function (y, m) {
              y === 0 && s._mixpanel.persistence._add_to_people_queue(Lr, d),
                h.isUndefined(o) || o(y, m);
            },
            v = p.length - 1;
          v >= 0;
          v--
        )
          (p = this._mixpanel.persistence.load_queue(Lr)),
            (d = p.pop()),
            s._mixpanel.persistence.save(),
            h.isEmptyObject(d) || s.remove(d, g);
    };
    oe.prototype._is_reserved_property = function (t) {
      return (
        t === "$distinct_id" ||
        t === "$token" ||
        t === "$device_id" ||
        t === "$user_id" ||
        t === "$had_persisted_distinct_id"
      );
    };
    oe.prototype.set = oe.prototype.set;
    oe.prototype.set_once = oe.prototype.set_once;
    oe.prototype.unset = oe.prototype.unset;
    oe.prototype.increment = oe.prototype.increment;
    oe.prototype.append = oe.prototype.append;
    oe.prototype.remove = oe.prototype.remove;
    oe.prototype.union = oe.prototype.union;
    oe.prototype.track_charge = oe.prototype.track_charge;
    oe.prototype.clear_charges = oe.prototype.clear_charges;
    oe.prototype.delete_user = oe.prototype.delete_user;
    oe.prototype.toString = oe.prototype.toString;
    var Pf = "__mps",
      Lf = "__mpso",
      Uf = "__mpus",
      qf = "__mpa",
      Bf = "__mpap",
      jf = "__mpr",
      Vf = "__mpu",
      $E = "$people_distinct_id",
      Oc = "__alias",
      to = "__timers",
      hV = [Pf, Lf, Uf, qf, Bf, jf, Vf, $E, Oc, to],
      ue = function (t) {
        (this.props = {}),
          (this.campaign_params_saved = !1),
          t.persistence_name
            ? (this.name = "mp_" + t.persistence_name)
            : (this.name = "mp_" + t.token + "_mixpanel");
        var e = t.persistence;
        e !== "cookie" &&
          e !== "localStorage" &&
          (_e.critical(
            "Unknown persistence type " + e + "; falling back to cookie"
          ),
          (e = t.persistence = "cookie")),
          e === "localStorage" && h.localStorage.is_supported()
            ? (this.storage = h.localStorage)
            : (this.storage = h.cookie),
          this.load(),
          this.update_config(t),
          this.upgrade(t),
          this.save();
      };
    ue.prototype.properties = function () {
      var t = {};
      return (
        this.load(),
        h.each(this.props, function (e, r) {
          h.include(hV, r) || (t[r] = e);
        }),
        t
      );
    };
    ue.prototype.load = function () {
      if (!this.disabled) {
        var t = this.storage.parse(this.name);
        t && (this.props = h.extend({}, t));
      }
    };
    ue.prototype.upgrade = function (t) {
      var e = t.upgrade,
        r,
        n;
      e &&
        ((r = "mp_super_properties"),
        typeof e == "string" && (r = e),
        (n = this.storage.parse(r)),
        this.storage.remove(r),
        this.storage.remove(r, !0),
        n && (this.props = h.extend(this.props, n.all, n.events))),
        !t.cookie_name &&
          t.name !== "mixpanel" &&
          ((r = "mp_" + t.token + "_" + t.name),
          (n = this.storage.parse(r)),
          n &&
            (this.storage.remove(r),
            this.storage.remove(r, !0),
            this.register_once(n))),
        this.storage === h.localStorage &&
          ((n = h.cookie.parse(this.name)),
          h.cookie.remove(this.name),
          h.cookie.remove(this.name, !0),
          n && this.register_once(n));
    };
    ue.prototype.save = function () {
      this.disabled ||
        this.storage.set(
          this.name,
          h.JSONEncode(this.props),
          this.expire_days,
          this.cross_subdomain,
          this.secure,
          this.cross_site,
          this.cookie_domain
        );
    };
    ue.prototype.load_prop = function (t) {
      return this.load(), this.props[t];
    };
    ue.prototype.remove = function () {
      this.storage.remove(this.name, !1, this.cookie_domain),
        this.storage.remove(this.name, !0, this.cookie_domain);
    };
    ue.prototype.clear = function () {
      this.remove(), (this.props = {});
    };
    ue.prototype.register_once = function (t, e, r) {
      return h.isObject(t)
        ? (typeof e > "u" && (e = "None"),
          (this.expire_days = typeof r > "u" ? this.default_expiry : r),
          this.load(),
          h.each(
            t,
            function (n, i) {
              (!this.props.hasOwnProperty(i) || this.props[i] === e) &&
                (this.props[i] = n);
            },
            this
          ),
          this.save(),
          !0)
        : !1;
    };
    ue.prototype.register = function (t, e) {
      return h.isObject(t)
        ? ((this.expire_days = typeof e > "u" ? this.default_expiry : e),
          this.load(),
          h.extend(this.props, t),
          this.save(),
          !0)
        : !1;
    };
    ue.prototype.unregister = function (t) {
      this.load(), t in this.props && (delete this.props[t], this.save());
    };
    ue.prototype.update_search_keyword = function (t) {
      this.register(h.info.searchInfo(t));
    };
    ue.prototype.update_referrer_info = function (t) {
      this.register_once(
        {
          $initial_referrer: t || "$direct",
          $initial_referring_domain: h.info.referringDomain(t) || "$direct",
        },
        ""
      );
    };
    ue.prototype.get_referrer_info = function () {
      return h.strip_empty_properties({
        $initial_referrer: this.props.$initial_referrer,
        $initial_referring_domain: this.props.$initial_referring_domain,
      });
    };
    ue.prototype.update_config = function (t) {
      (this.default_expiry = this.expire_days = t.cookie_expiration),
        this.set_disabled(t.disable_persistence),
        this.set_cookie_domain(t.cookie_domain),
        this.set_cross_site(t.cross_site_cookie),
        this.set_cross_subdomain(t.cross_subdomain_cookie),
        this.set_secure(t.secure_cookie);
    };
    ue.prototype.set_disabled = function (t) {
      (this.disabled = t), this.disabled ? this.remove() : this.save();
    };
    ue.prototype.set_cookie_domain = function (t) {
      t !== this.cookie_domain &&
        (this.remove(), (this.cookie_domain = t), this.save());
    };
    ue.prototype.set_cross_site = function (t) {
      t !== this.cross_site &&
        ((this.cross_site = t), this.remove(), this.save());
    };
    ue.prototype.set_cross_subdomain = function (t) {
      t !== this.cross_subdomain &&
        ((this.cross_subdomain = t), this.remove(), this.save());
    };
    ue.prototype.get_cross_subdomain = function () {
      return this.cross_subdomain;
    };
    ue.prototype.set_secure = function (t) {
      t !== this.secure && ((this.secure = !!t), this.remove(), this.save());
    };
    ue.prototype._add_to_people_queue = function (t, e) {
      var r = this._get_queue_key(t),
        n = e[t],
        i = this._get_or_create_queue(pn),
        a = this._get_or_create_queue(Bi),
        o = this._get_or_create_queue(Xt),
        s = this._get_or_create_queue(Wn),
        c = this._get_or_create_queue(Hn),
        u = this._get_or_create_queue(Lr, []),
        l = this._get_or_create_queue(Sr, []);
      r === Pf
        ? (h.extend(i, n),
          this._pop_from_people_queue(Wn, n),
          this._pop_from_people_queue(Hn, n),
          this._pop_from_people_queue(Xt, n))
        : r === Lf
        ? (h.each(n, function (f, p) {
            p in a || (a[p] = f);
          }),
          this._pop_from_people_queue(Xt, n))
        : r === Uf
        ? h.each(n, function (f) {
            h.each([i, a, s, c], function (p) {
              f in p && delete p[f];
            }),
              h.each(l, function (p) {
                f in p && delete p[f];
              }),
              (o[f] = !0);
          })
        : r === qf
        ? (h.each(
            n,
            function (f, p) {
              p in i ? (i[p] += f) : (p in s || (s[p] = 0), (s[p] += f));
            },
            this
          ),
          this._pop_from_people_queue(Xt, n))
        : r === Vf
        ? (h.each(n, function (f, p) {
            h.isArray(f) && (p in c || (c[p] = []), (c[p] = c[p].concat(f)));
          }),
          this._pop_from_people_queue(Xt, n))
        : r === jf
        ? (u.push(n), this._pop_from_people_queue(Sr, n))
        : r === Bf && (l.push(n), this._pop_from_people_queue(Xt, n)),
        _e.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"),
        _e.log(e),
        this.save();
    };
    ue.prototype._pop_from_people_queue = function (t, e) {
      var r = this.props[this._get_queue_key(t)];
      h.isUndefined(r) ||
        h.each(
          e,
          function (n, i) {
            t === Sr || t === Lr
              ? h.each(r, function (a) {
                  a[i] === n && delete a[i];
                })
              : delete r[i];
          },
          this
        );
    };
    ue.prototype.load_queue = function (t) {
      return this.load_prop(this._get_queue_key(t));
    };
    ue.prototype._get_queue_key = function (t) {
      if (t === pn) return Pf;
      if (t === Bi) return Lf;
      if (t === Xt) return Uf;
      if (t === Wn) return qf;
      if (t === Sr) return Bf;
      if (t === Lr) return jf;
      if (t === Hn) return Vf;
      _e.error("Invalid queue:", t);
    };
    ue.prototype._get_or_create_queue = function (t, e) {
      var r = this._get_queue_key(t);
      return (
        (e = h.isUndefined(e) ? {} : e), this.props[r] || (this.props[r] = e)
      );
    };
    ue.prototype.set_event_timer = function (t, e) {
      var r = this.load_prop(to) || {};
      (r[t] = e), (this.props[to] = r), this.save();
    };
    ue.prototype.remove_event_timer = function (t) {
      var e = this.load_prop(to) || {},
        r = e[t];
      return h.isUndefined(r) || (delete this.props[to][t], this.save()), r;
    };
    var Wf,
      ft,
      KE = 0,
      gV = 1,
      mV = function (t) {
        return t;
      },
      ro = function () {},
      Gt = "mixpanel",
      QE = "base64",
      yV = "json",
      Hf = "$device:",
      Ui = Pe.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
      eo = !h.isUndefined(fetch) && typeof fetch == "function",
      YE =
        !Ui && !eo && br.indexOf("MSIE") === -1 && br.indexOf("Mozilla") === -1,
      kc = null;
    ln.sendBeacon &&
      (kc = function () {
        return ln.sendBeacon.apply(ln, arguments);
      });
    var JE = { track: "track/", engage: "engage/", groups: "groups/" },
      BE = {
        api_host: "https://api-js.mixpanel.com",
        api_routes: JE,
        api_method: "POST",
        api_transport: "XHR",
        api_payload_format: QE,
        app_host: "https://mixpanel.com",
        cdn: "https://cdn.mxpnl.com",
        cross_site_cookie: !1,
        cross_subdomain_cookie: !0,
        error_reporter: ro,
        persistence: "cookie",
        persistence_name: "",
        cookie_domain: "",
        cookie_name: "",
        loaded: ro,
        track_marketing: !0,
        track_pageview: !1,
        skip_first_touch_marketing: !1,
        store_google: !0,
        save_referrer: !0,
        test: !1,
        verbose: !1,
        img: !1,
        debug: !1,
        track_links_timeout: 300,
        cookie_expiration: 365,
        upgrade: !1,
        disable_persistence: !1,
        disable_cookie: !1,
        secure_cookie: !1,
        ip: !0,
        opt_out_tracking_by_default: !1,
        opt_out_persistence_by_default: !1,
        opt_out_tracking_persistence_type: "localStorage",
        opt_out_tracking_cookie_prefix: null,
        property_blacklist: [],
        xhr_headers: {},
        ignore_dnt: !1,
        batch_requests: !0,
        batch_size: 50,
        batch_flush_interval_ms: 5e3,
        batch_request_timeout_ms: 9e4,
        batch_autostart: !0,
        hooks: {},
      },
      XE = !1,
      M = function () {},
      Cf = function (t, e, r) {
        var n,
          i = r === Gt ? ft : ft[r];
        if (i && Wf === KE) n = i;
        else {
          if (i && !h.isArray(i)) {
            _e.error("You have already initialized " + r);
            return;
          }
          n = new M();
        }
        if (
          ((n._cached_groups = {}),
          n._init(t, e, r),
          (n.people = new oe()),
          n.people._init(n),
          !n.get_config("skip_first_touch_marketing"))
        ) {
          var a = h.info.campaignParams(null),
            o = {},
            s = !1;
          h.each(a, function (c, u) {
            (o["initial_" + u] = c), c && (s = !0);
          }),
            s && n.people.set_once(o);
        }
        return (
          (Pr.DEBUG = Pr.DEBUG || n.get_config("debug")),
          !h.isUndefined(i) &&
            h.isArray(i) &&
            (n._execute_array.call(n.people, i.people), n._execute_array(i)),
          n
        );
      };
    M.prototype.init = function (t, e, r) {
      if (h.isUndefined(r)) {
        this.report_error(
          "You must name your new library: init(token, config, name)"
        );
        return;
      }
      if (r === Gt) {
        this.report_error(
          "You must initialize the main mixpanel object right after you include the Mixpanel js snippet"
        );
        return;
      }
      var n = Cf(t, e, r);
      return (ft[r] = n), n._loaded(), n;
    };
    M.prototype._init = function (t, e, r) {
      (e = e || {}), (this.__loaded = !0), (this.config = {});
      var n = {};
      if (!("api_payload_format" in e)) {
        var i = e.api_host || BE.api_host;
        i.match(/\.mixpanel\.com/) && (n.api_payload_format = yV);
      }
      if (
        (this.set_config(
          h.extend({}, BE, n, e, {
            name: r,
            token: t,
            callback_fn: (r === Gt ? r : Gt + "." + r) + "._jsc",
          })
        ),
        (this._jsc = ro),
        (this.__dom_loaded_queue = []),
        (this.__request_queue = []),
        (this.__disabled_events = []),
        (this._flags = { disable_all_events: !1, identify_called: !1 }),
        (this.request_batchers = {}),
        (this._batch_requests = this.get_config("batch_requests")),
        this._batch_requests)
      ) {
        if (!h.localStorage.is_supported(!0) || !Ui)
          (this._batch_requests = !1),
            _e.log(
              "Turning off Mixpanel request-queueing; needs XHR and localStorage support"
            ),
            h.each(this.get_batcher_configs(), function (s) {
              _e.log("Clearing batch queue " + s.queue_key),
                h.localStorage.remove(s.queue_key);
            });
        else if ((this.init_batchers(), kc && Pe.addEventListener)) {
          var a = h.bind(function () {
            this.request_batchers.events.stopped ||
              this.request_batchers.events.flush({ unloading: !0 });
          }, this);
          Pe.addEventListener("pagehide", function (s) {
            s.persisted && a();
          }),
            Pe.addEventListener("visibilitychange", function () {
              Oe.visibilityState === "hidden" && a();
            });
        }
      }
      (this.persistence = this.cookie = new ue(this.config)),
        (this.unpersisted_superprops = {}),
        this._gdpr_init();
      var o = e.device_id || h.UUID();
      this.get_distinct_id() ||
        this.register_once({ distinct_id: Hf + o, $device_id: o }, ""),
        this.get_config("track_pageview") && this.track_pageview();
    };
    M.prototype._loaded = function () {
      this.get_config("loaded")(this), this._set_default_superprops();
    };
    M.prototype._set_default_superprops = function () {
      this.persistence.update_search_keyword(Oe.referrer),
        this.get_config("store_google") &&
          this.register(h.info.campaignParams()),
        this.get_config("save_referrer") &&
          this.persistence.update_referrer_info(Oe.referrer);
    };
    M.prototype._dom_loaded = function () {
      h.each(
        this.__dom_loaded_queue,
        function (t) {
          this._track_dom.apply(this, t);
        },
        this
      ),
        this.has_opted_out_tracking() ||
          h.each(
            this.__request_queue,
            function (t) {
              this._send_request.apply(this, t);
            },
            this
          ),
        delete this.__dom_loaded_queue,
        delete this.__request_queue;
    };
    M.prototype._track_dom = function (t, e) {
      if (this.get_config("img"))
        return (
          this.report_error(
            "You can't use DOM tracking functions with img = true."
          ),
          !1
        );
      if (!XE) return this.__dom_loaded_queue.push([t, e]), !1;
      var r = new t().init(this);
      return r.track.apply(r, e);
    };
    M.prototype._prepare_callback = function (t, e) {
      if (h.isUndefined(t)) return null;
      if (Ui || eo) {
        var r = function (o) {
          t(o, e);
        };
        return r;
      } else {
        var n = this._jsc,
          i = "" + Math.floor(Math.random() * 1e8),
          a = this.get_config("callback_fn") + "[" + i + "]";
        return (
          (n[i] = function (o) {
            delete n[i], t(o, e);
          }),
          a
        );
      }
    };
    M.prototype._send_request = function (t, e, r, n) {
      var i = !0;
      if (YE) return this.__request_queue.push(arguments), i;
      var a = {
          method: this.get_config("api_method"),
          transport: this.get_config("api_transport"),
          verbose: this.get_config("verbose"),
        },
        o = null;
      !n && (h.isFunction(r) || typeof r == "string") && ((n = r), (r = null)),
        (r = h.extend(a, r || {})),
        !Ui && !eo && (r.method = "GET");
      var s = r.method === "POST",
        c = kc && s && r.transport.toLowerCase() === "sendbeacon",
        u = r.verbose;
      e.verbose && (u = !0),
        this.get_config("test") && (e.test = 1),
        u && (e.verbose = 1),
        this.get_config("img") && (e.img = 1),
        !Ui &&
          !eo &&
          (n
            ? (e.callback = n)
            : (u || this.get_config("test")) &&
              (e.callback = "(function(){})")),
        (e.ip = this.get_config("ip") ? 1 : 0),
        (e._ = new Date().getTime().toString()),
        s && ((o = "data=" + encodeURIComponent(e.data)), delete e.data),
        (t += "?" + h.HTTPBuildQuery(e));
      var l = this;
      if ("img" in e) {
        var f = Oe.createElement("img");
        (f.src = t), Oe.body.appendChild(f);
      } else if (c) {
        try {
          i = kc(t, o);
        } catch (m) {
          l.report_error(m), (i = !1);
        }
        try {
          n && n(i ? 1 : 0);
        } catch (m) {
          l.report_error(m);
        }
      } else if (Ui)
        try {
          var p = new XMLHttpRequest();
          p.open(r.method, t, !0);
          var d = this.get_config("xhr_headers");
          if (
            (s && (d["Content-Type"] = "application/x-www-form-urlencoded"),
            h.each(d, function (m, I) {
              p.setRequestHeader(I, m);
            }),
            r.timeout_ms && typeof p.timeout < "u")
          ) {
            p.timeout = r.timeout_ms;
            var g = new Date().getTime();
          }
          (p.withCredentials = !0),
            (p.onreadystatechange = function () {
              if (p.readyState === 4)
                if (p.status === 200) {
                  if (n)
                    if (u) {
                      var m;
                      try {
                        m = h.JSONDecode(p.responseText);
                      } catch (b) {
                        if ((l.report_error(b), r.ignore_json_errors))
                          m = p.responseText;
                        else return;
                      }
                      n(m);
                    } else n(Number(p.responseText));
                } else {
                  var I;
                  p.timeout &&
                  !p.status &&
                  new Date().getTime() - g >= p.timeout
                    ? (I = "timeout")
                    : (I = "Bad HTTP status: " + p.status + " " + p.statusText),
                    l.report_error(I),
                    n && n(u ? { status: 0, error: I, xhr_req: p } : 0);
                }
            }),
            p.send(o);
        } catch (m) {
          l.report_error(m), (i = !1);
        }
      else if (eo)
        try {
          var v = this.get_config("xhr_headers");
          s && (v["Content-Type"] = "application/x-www-form-urlencoded");
          var y = {
            method: r.method,
            mode: "cors",
            credentials: "include",
            headers: v,
            body: o,
          };
          fetch(t, y)
            .then(function (m) {
              return m.text().then(function (I) {
                return {
                  status: m.status,
                  statusText: m.statusText,
                  headers: m.headers,
                  body: I,
                };
              });
            })
            .then(function (m) {
              if (m.status === 200) {
                if (n) {
                  var I = m.body;
                  if (u) {
                    var b;
                    try {
                      b = h.JSONDecode(I);
                    } catch (_) {
                      if ((l.report_error(_), r.ignore_json_errors)) b = I;
                      else return;
                    }
                    n(b);
                  } else n(Number(I));
                }
              } else {
                var w = "Bad HTTP status: " + m.status + " " + m.statusText;
                if ((l.report_error(w), n))
                  if (u) {
                    var k = { status: m.status, responseHeaders: m.headers };
                    n({ status: 0, error: w, xhr_req: k });
                  } else n(0);
              }
            });
        } catch (m) {
          l.report_error(m), (i = !1);
        }
      return i;
    };
    M.prototype._execute_array = function (t) {
      var e,
        r = [],
        n = [],
        i = [];
      h.each(
        t,
        function (o) {
          o &&
            ((e = o[0]),
            h.isArray(e)
              ? i.push(o)
              : typeof o == "function"
              ? o.call(this)
              : h.isArray(o) && e === "alias"
              ? r.push(o)
              : h.isArray(o) &&
                e.indexOf("track") !== -1 &&
                typeof this[e] == "function"
              ? i.push(o)
              : n.push(o));
        },
        this
      );
      var a = function (o, s) {
        h.each(
          o,
          function (c) {
            if (h.isArray(c[0])) {
              var u = s;
              h.each(c, function (l) {
                u = u[l[0]].apply(u, l.slice(1));
              });
            } else this[c[0]].apply(this, c.slice(1));
          },
          s
        );
      };
      a(r, this), a(n, this), a(i, this);
    };
    M.prototype.are_batchers_initialized = function () {
      return !!this.request_batchers.events;
    };
    M.prototype.get_batcher_configs = function () {
      var t = "__mpq_" + this.get_config("token"),
        e = this.get_config("api_routes");
      return (
        (this._batcher_configs = this._batcher_configs || {
          events: {
            type: "events",
            endpoint: "/" + e.track,
            queue_key: t + "_ev",
          },
          people: {
            type: "people",
            endpoint: "/" + e.engage,
            queue_key: t + "_pp",
          },
          groups: {
            type: "groups",
            endpoint: "/" + e.groups,
            queue_key: t + "_gr",
          },
        }),
        this._batcher_configs
      );
    };
    M.prototype.init_batchers = function () {
      if (!this.are_batchers_initialized()) {
        var t = h.bind(function (r) {
            return new Tr(r.queue_key, {
              libConfig: this.config,
              sendRequestFunc: h.bind(function (n, i, a) {
                this._send_request(
                  this.get_config("api_host") + r.endpoint,
                  this._encode_data_for_request(n),
                  i,
                  this._prepare_callback(a, n)
                );
              }, this),
              beforeSendHook: h.bind(function (n) {
                return this._run_hook("before_send_" + r.type, n);
              }, this),
              errorReporter: this.get_config("error_reporter"),
              stopAllBatchingFunc: h.bind(this.stop_batch_senders, this),
            });
          }, this),
          e = this.get_batcher_configs();
        this.request_batchers = {
          events: t(e.events),
          people: t(e.people),
          groups: t(e.groups),
        };
      }
      this.get_config("batch_autostart") && this.start_batch_senders();
    };
    M.prototype.start_batch_senders = function () {
      (this._batchers_were_started = !0),
        this.are_batchers_initialized() &&
          ((this._batch_requests = !0),
          h.each(this.request_batchers, function (t) {
            t.start();
          }));
    };
    M.prototype.stop_batch_senders = function () {
      (this._batch_requests = !1),
        h.each(this.request_batchers, function (t) {
          t.stop(), t.clear();
        });
    };
    M.prototype.push = function (t) {
      this._execute_array([t]);
    };
    M.prototype.disable = function (t) {
      typeof t > "u"
        ? (this._flags.disable_all_events = !0)
        : (this.__disabled_events = this.__disabled_events.concat(t));
    };
    M.prototype._encode_data_for_request = function (t) {
      var e = h.JSONEncode(t);
      return (
        this.get_config("api_payload_format") === QE && (e = h.base64Encode(e)),
        { data: e }
      );
    };
    M.prototype._track_or_batch = function (t, e) {
      var r = h.truncate(t.data, 255),
        n = t.endpoint,
        i = t.batcher,
        a = t.should_send_immediately,
        o = t.send_request_options || {};
      e = e || ro;
      var s = !0,
        c = h.bind(function () {
          return (
            o.skip_hooks || (r = this._run_hook("before_send_" + t.type, r)),
            r
              ? (_e.log("MIXPANEL REQUEST:"),
                _e.log(r),
                this._send_request(
                  n,
                  this._encode_data_for_request(r),
                  o,
                  this._prepare_callback(e, r)
                ))
              : null
          );
        }, this);
      return (
        this._batch_requests && !a
          ? i.enqueue(r, function (u) {
              u ? e(1, r) : c();
            })
          : (s = c()),
        s && r
      );
    };
    M.prototype.track = ji(function (t, e, r, n) {
      !n && typeof r == "function" && ((n = r), (r = null)), (r = r || {});
      var i = r.transport;
      i && (r.transport = i);
      var a = r.send_immediately;
      if ((typeof n != "function" && (n = ro), h.isUndefined(t))) {
        this.report_error("No event name provided to mixpanel.track");
        return;
      }
      if (this._event_is_disabled(t)) {
        n(0);
        return;
      }
      (e = h.extend({}, e)), (e.token = this.get_config("token"));
      var o = this.persistence.remove_event_timer(t);
      if (!h.isUndefined(o)) {
        var s = new Date().getTime() - o;
        e.$duration = parseFloat((s / 1e3).toFixed(3));
      }
      this._set_default_superprops();
      var c = this.get_config("track_marketing")
        ? h.info.marketingParams()
        : {};
      e = h.extend(
        {},
        h.info.properties(),
        c,
        this.persistence.properties(),
        this.unpersisted_superprops,
        e
      );
      var u = this.get_config("property_blacklist");
      h.isArray(u)
        ? h.each(u, function (p) {
            delete e[p];
          })
        : this.report_error(
            "Invalid value for property_blacklist config: " + u
          );
      var l = { event: t, properties: e },
        f = this._track_or_batch(
          {
            type: "events",
            data: l,
            endpoint:
              this.get_config("api_host") +
              "/" +
              this.get_config("api_routes").track,
            batcher: this.request_batchers.events,
            should_send_immediately: a,
            send_request_options: r,
          },
          n
        );
      return f;
    });
    M.prototype.set_group = ji(function (t, e, r) {
      h.isArray(e) || (e = [e]);
      var n = {};
      return (n[t] = e), this.register(n), this.people.set(t, e, r);
    });
    M.prototype.add_group = ji(function (t, e, r) {
      var n = this.get_property(t),
        i = {};
      return (
        n === void 0
          ? ((i[t] = [e]), this.register(i))
          : n.indexOf(e) === -1 && (n.push(e), (i[t] = n), this.register(i)),
        this.people.union(t, e, r)
      );
    });
    M.prototype.remove_group = ji(function (t, e, r) {
      var n = this.get_property(t);
      if (n !== void 0) {
        var i = n.indexOf(e);
        i > -1 && (n.splice(i, 1), this.register({ group_key: n })),
          n.length === 0 && this.unregister(t);
      }
      return this.people.remove(t, e, r);
    });
    M.prototype.track_with_groups = ji(function (t, e, r, n) {
      var i = h.extend({}, e || {});
      return (
        h.each(r, function (a, o) {
          a != null && (i[o] = a);
        }),
        this.track(t, i, n)
      );
    });
    M.prototype._create_map_key = function (t, e) {
      return t + "_" + JSON.stringify(e);
    };
    M.prototype._remove_group_from_cache = function (t, e) {
      delete this._cached_groups[this._create_map_key(t, e)];
    };
    M.prototype.get_group = function (t, e) {
      var r = this._create_map_key(t, e),
        n = this._cached_groups[r];
      return (
        (n === void 0 || n._group_key !== t || n._group_id !== e) &&
          ((n = new ke()), n._init(this, t, e), (this._cached_groups[r] = n)),
        n
      );
    };
    M.prototype.track_pageview = ji(function (t, e) {
      typeof t != "object" && (t = {}), (e = e || {});
      var r = e.event_name || "$mp_web_page_view",
        n = h.extend(
          h.info.mpPageViewProperties(),
          h.info.campaignParams(),
          h.info.clickParams()
        ),
        i = h.extend({}, n, t);
      return this.track(r, i);
    });
    M.prototype.track_links = function () {
      return this._track_dom.call(this, qi, arguments);
    };
    M.prototype.track_forms = function () {
      return this._track_dom.call(this, Nc, arguments);
    };
    M.prototype.time_event = function (t) {
      if (h.isUndefined(t)) {
        this.report_error("No event name provided to mixpanel.time_event");
        return;
      }
      this._event_is_disabled(t) ||
        this.persistence.set_event_timer(t, new Date().getTime());
    };
    var vV = { persistent: !0 },
      Gf = function (t) {
        var e;
        return (
          h.isObject(t)
            ? (e = t)
            : h.isUndefined(t)
            ? (e = {})
            : (e = { days: t }),
          h.extend({}, vV, e)
        );
      };
    M.prototype.register = function (t, e) {
      var r = Gf(e);
      r.persistent
        ? this.persistence.register(t, r.days)
        : h.extend(this.unpersisted_superprops, t);
    };
    M.prototype.register_once = function (t, e, r) {
      this.config.device_id && delete t.$device_id;
      var n = Gf(r);
      n.persistent
        ? this.persistence.register_once(t, e, n.days)
        : (typeof e > "u" && (e = "None"),
          h.each(
            t,
            function (i, a) {
              (!this.unpersisted_superprops.hasOwnProperty(a) ||
                this.unpersisted_superprops[a] === e) &&
                (this.unpersisted_superprops[a] = i);
            },
            this
          ));
    };
    M.prototype.unregister = function (t, e) {
      (e = Gf(e)),
        e.persistent
          ? this.persistence.unregister(t)
          : delete this.unpersisted_superprops[t];
    };
    M.prototype._register_single = function (t, e) {
      var r = {};
      (r[t] = e), this.register(r);
    };
    M.prototype.identify = function (t, e, r, n, i, a, o, s) {
      var c = this.get_distinct_id();
      if (t && c !== t) {
        if (typeof t == "string" && t.indexOf(Hf) === 0)
          return (
            this.report_error("distinct_id cannot have $device: prefix"), -1
          );
        this.register({ $user_id: t });
      }
      if (!this.get_property("$device_id")) {
        var u = c;
        this.register_once(
          { $had_persisted_distinct_id: !0, $device_id: u },
          ""
        );
      }
      t !== c &&
        t !== this.get_property(Oc) &&
        (this.unregister(Oc), this.register({ distinct_id: t })),
        (this._flags.identify_called = !0),
        this.people._flush(e, r, n, i, a, o, s),
        t !== c &&
          this.track(
            "$identify",
            { distinct_id: t, $anon_distinct_id: c },
            { skip_hooks: !0 }
          );
    };
    M.prototype.reset = function () {
      this.persistence.clear(), (this._flags.identify_called = !1);
      var t = h.UUID();
      this.register_once({ distinct_id: Hf + t, $device_id: t }, "");
    };
    M.prototype.get_distinct_id = function () {
      return this.get_property("distinct_id");
    };
    M.prototype.alias = function (t, e) {
      if (t === this.get_property($E))
        return (
          this.report_error(
            "Attempting to create alias for existing People user - aborting."
          ),
          -2
        );
      var r = this;
      return (
        h.isUndefined(e) && (e = this.get_distinct_id()),
        t !== e
          ? (this._register_single(Oc, t),
            this.track(
              "$create_alias",
              { alias: t, distinct_id: e },
              { skip_hooks: !0 },
              function () {
                r.identify(t);
              }
            ))
          : (this.report_error(
              "alias matches current distinct_id - skipping api call."
            ),
            this.identify(t),
            -1)
      );
    };
    M.prototype.name_tag = function (t) {
      this._register_single("mp_name_tag", t);
    };
    M.prototype.set_config = function (t) {
      if (h.isObject(t)) {
        h.extend(this.config, t);
        var e = t.batch_size;
        e &&
          h.each(this.request_batchers, function (r) {
            r.resetBatchSize();
          }),
          this.get_config("persistence_name") ||
            (this.config.persistence_name = this.config.cookie_name),
          this.get_config("disable_persistence") ||
            (this.config.disable_persistence = this.config.disable_cookie),
          this.persistence && this.persistence.update_config(this.config),
          (Pr.DEBUG = Pr.DEBUG || this.get_config("debug"));
      }
    };
    M.prototype.get_config = function (t) {
      return this.config[t];
    };
    M.prototype._run_hook = function (t) {
      var e = (this.config.hooks[t] || mV).apply(this, un.call(arguments, 1));
      return (
        typeof e > "u" &&
          (this.report_error(t + " hook did not return a value"), (e = null)),
        e
      );
    };
    M.prototype.get_property = function (t) {
      return t === "$device_id" && this.get_config("device_id")
        ? this.get_config("device_id")
        : this.persistence.props[t];
    };
    M.prototype.toString = function () {
      var t = this.get_config("name");
      return t !== Gt && (t = Gt + "." + t), t;
    };
    M.prototype._event_is_disabled = function (t) {
      return (
        h.isBlockedUA(br) ||
        this._flags.disable_all_events ||
        h.include(this.__disabled_events, t)
      );
    };
    M.prototype._gdpr_init = function () {
      var t =
        this.get_config("opt_out_tracking_persistence_type") === "localStorage";
      t &&
        h.localStorage.is_supported() &&
        (!this.has_opted_in_tracking() &&
          this.has_opted_in_tracking({ persistence_type: "cookie" }) &&
          this.opt_in_tracking({ enable_persistence: !1 }),
        !this.has_opted_out_tracking() &&
          this.has_opted_out_tracking({ persistence_type: "cookie" }) &&
          this.opt_out_tracking({ clear_persistence: !1 }),
        this.clear_opt_in_out_tracking({
          persistence_type: "cookie",
          enable_persistence: !1,
        })),
        this.has_opted_out_tracking()
          ? this._gdpr_update_persistence({ clear_persistence: !0 })
          : !this.has_opted_in_tracking() &&
            (this.get_config("opt_out_tracking_by_default") ||
              h.cookie.get("mp_optout")) &&
            (h.cookie.remove("mp_optout"),
            this.opt_out_tracking({
              clear_persistence: this.get_config(
                "opt_out_persistence_by_default"
              ),
            }));
    };
    M.prototype._gdpr_update_persistence = function (t) {
      var e;
      if (t && t.clear_persistence) e = !0;
      else if (t && t.enable_persistence) e = !1;
      else return;
      !this.get_config("disable_persistence") &&
        this.persistence.disabled !== e &&
        this.persistence.set_disabled(e),
        e
          ? this.stop_batch_senders()
          : this._batchers_were_started && this.start_batch_senders();
    };
    M.prototype._gdpr_call_func = function (t, e) {
      return (
        (e = h.extend(
          {
            track: h.bind(this.track, this),
            persistence_type: this.get_config(
              "opt_out_tracking_persistence_type"
            ),
            cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
            cookie_expiration: this.get_config("cookie_expiration"),
            cross_site_cookie: this.get_config("cross_site_cookie"),
            cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
            cookie_domain: this.get_config("cookie_domain"),
            secure_cookie: this.get_config("secure_cookie"),
            ignore_dnt: this.get_config("ignore_dnt"),
          },
          e
        )),
        h.localStorage.is_supported() || (e.persistence_type = "cookie"),
        t(this.get_config("token"), {
          track: e.track,
          trackEventName: e.track_event_name,
          trackProperties: e.track_properties,
          persistenceType: e.persistence_type,
          persistencePrefix: e.cookie_prefix,
          cookieDomain: e.cookie_domain,
          cookieExpiration: e.cookie_expiration,
          crossSiteCookie: e.cross_site_cookie,
          crossSubdomainCookie: e.cross_subdomain_cookie,
          secureCookie: e.secure_cookie,
          ignoreDnt: e.ignore_dnt,
        })
      );
    };
    M.prototype.opt_in_tracking = function (t) {
      (t = h.extend({ enable_persistence: !0 }, t)),
        this._gdpr_call_func(cV, t),
        this._gdpr_update_persistence(t);
    };
    M.prototype.opt_out_tracking = function (t) {
      (t = h.extend({ clear_persistence: !0, delete_user: !0 }, t)),
        t.delete_user &&
          this.people &&
          this.people._identify_called() &&
          (this.people.delete_user(), this.people.clear_charges()),
        this._gdpr_call_func(uV, t),
        this._gdpr_update_persistence(t);
    };
    M.prototype.has_opted_in_tracking = function (t) {
      return this._gdpr_call_func(lV, t);
    };
    M.prototype.has_opted_out_tracking = function (t) {
      return this._gdpr_call_func(WE, t);
    };
    M.prototype.clear_opt_in_out_tracking = function (t) {
      (t = h.extend({ enable_persistence: !0 }, t)),
        this._gdpr_call_func(pV, t),
        this._gdpr_update_persistence(t);
    };
    M.prototype.report_error = function (t, e) {
      _e.error.apply(_e.error, arguments);
      try {
        !e && !(t instanceof Error) && (t = new Error(t)),
          this.get_config("error_reporter")(t, e);
      } catch (r) {
        _e.error(r);
      }
    };
    M.prototype.init = M.prototype.init;
    M.prototype.reset = M.prototype.reset;
    M.prototype.disable = M.prototype.disable;
    M.prototype.time_event = M.prototype.time_event;
    M.prototype.track = M.prototype.track;
    M.prototype.track_links = M.prototype.track_links;
    M.prototype.track_forms = M.prototype.track_forms;
    M.prototype.track_pageview = M.prototype.track_pageview;
    M.prototype.register = M.prototype.register;
    M.prototype.register_once = M.prototype.register_once;
    M.prototype.unregister = M.prototype.unregister;
    M.prototype.identify = M.prototype.identify;
    M.prototype.alias = M.prototype.alias;
    M.prototype.name_tag = M.prototype.name_tag;
    M.prototype.set_config = M.prototype.set_config;
    M.prototype.get_config = M.prototype.get_config;
    M.prototype.get_property = M.prototype.get_property;
    M.prototype.get_distinct_id = M.prototype.get_distinct_id;
    M.prototype.toString = M.prototype.toString;
    M.prototype.opt_out_tracking = M.prototype.opt_out_tracking;
    M.prototype.opt_in_tracking = M.prototype.opt_in_tracking;
    M.prototype.has_opted_out_tracking = M.prototype.has_opted_out_tracking;
    M.prototype.has_opted_in_tracking = M.prototype.has_opted_in_tracking;
    M.prototype.clear_opt_in_out_tracking =
      M.prototype.clear_opt_in_out_tracking;
    M.prototype.get_group = M.prototype.get_group;
    M.prototype.set_group = M.prototype.set_group;
    M.prototype.add_group = M.prototype.add_group;
    M.prototype.remove_group = M.prototype.remove_group;
    M.prototype.track_with_groups = M.prototype.track_with_groups;
    M.prototype.start_batch_senders = M.prototype.start_batch_senders;
    M.prototype.stop_batch_senders = M.prototype.stop_batch_senders;
    M.prototype.DEFAULT_API_ROUTES = JE;
    ue.prototype.properties = ue.prototype.properties;
    ue.prototype.update_search_keyword = ue.prototype.update_search_keyword;
    ue.prototype.update_referrer_info = ue.prototype.update_referrer_info;
    ue.prototype.get_cross_subdomain = ue.prototype.get_cross_subdomain;
    ue.prototype.clear = ue.prototype.clear;
    var Li = {},
      _V = function () {
        h.each(Li, function (t, e) {
          e !== Gt && (ft[e] = t);
        }),
          (ft._ = h);
      },
      bV = function () {
        ft.init = function (t, e, r) {
          if (r)
            return (
              ft[r] || ((ft[r] = Li[r] = Cf(t, e, r)), ft[r]._loaded()), ft[r]
            );
          var n = ft;
          Li[Gt]
            ? (n = Li[Gt])
            : t && ((n = Cf(t, e, Gt)), n._loaded(), (Li[Gt] = n)),
            (ft = n),
            Wf === gV && (Pe[Gt] = ft),
            _V();
        };
      },
      SV = function () {
        function t() {
          t.done ||
            ((t.done = !0),
            (XE = !0),
            (YE = !1),
            h.each(Li, function (n) {
              n._dom_loaded();
            }));
        }
        function e() {
          try {
            Oe.documentElement.doScroll("left");
          } catch {
            setTimeout(e, 1);
            return;
          }
          t();
        }
        if (Oe.addEventListener)
          Oe.readyState === "complete"
            ? t()
            : Oe.addEventListener("DOMContentLoaded", t, !1);
        else if (Oe.attachEvent) {
          Oe.attachEvent("onreadystatechange", t);
          var r = !1;
          try {
            r = Pe.frameElement === null;
          } catch {}
          Oe.documentElement.doScroll && r && e();
        }
        h.register_event(Pe, "load", t, !0);
      };
    function TV() {
      return (Wf = KE), (ft = new M()), bV(), ft.init(), SV(), ft;
    }
    var EV = TV();
    ZE.exports = EV;
  });
  var zf = T((MZ, Dc) => {
    (function () {
      "use strict";
      var t = "input is invalid type",
        e = "finalize already called",
        r = typeof window == "object",
        n = r ? window : {};
      n.JS_SHA512_NO_WINDOW && (r = !1);
      var i = !r && typeof self == "object",
        a =
          !n.JS_SHA512_NO_NODE_JS &&
          typeof process == "object" &&
          process.versions &&
          process.versions.node;
      a ? (n = globalThis) : i && (n = self);
      var o = !n.JS_SHA512_NO_COMMON_JS && typeof Dc == "object" && Dc.exports,
        s = typeof define == "function" && define.amd,
        c = !n.JS_SHA512_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
        u = "0123456789abcdef".split(""),
        l = [-2147483648, 8388608, 32768, 128],
        f = [24, 16, 8, 0],
        p = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ],
        d = ["hex", "array", "digest", "arrayBuffer"],
        g = [];
      (n.JS_SHA512_NO_NODE_JS || !Array.isArray) &&
        (Array.isArray = function (_) {
          return Object.prototype.toString.call(_) === "[object Array]";
        }),
        c &&
          (n.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
          (ArrayBuffer.isView = function (_) {
            return (
              typeof _ == "object" &&
              _.buffer &&
              _.buffer.constructor === ArrayBuffer
            );
          });
      var v = function (_, A) {
          return function (C) {
            return new b(A, !0).update(C)[_]();
          };
        },
        y = function (_) {
          var A = v("hex", _);
          (A.create = function () {
            return new b(_);
          }),
            (A.update = function (W) {
              return A.create().update(W);
            });
          for (var C = 0; C < d.length; ++C) {
            var F = d[C];
            A[F] = v(F, _);
          }
          return A;
        },
        m = function (_, A) {
          return function (C, F) {
            return new w(C, A, !0).update(F)[_]();
          };
        },
        I = function (_) {
          var A = m("hex", _);
          (A.create = function (W) {
            return new w(W, _);
          }),
            (A.update = function (W, j) {
              return A.create(W).update(j);
            });
          for (var C = 0; C < d.length; ++C) {
            var F = d[C];
            A[F] = m(F, _);
          }
          return A;
        };
      function b(_, A) {
        A
          ? ((g[0] =
              g[1] =
              g[2] =
              g[3] =
              g[4] =
              g[5] =
              g[6] =
              g[7] =
              g[8] =
              g[9] =
              g[10] =
              g[11] =
              g[12] =
              g[13] =
              g[14] =
              g[15] =
              g[16] =
              g[17] =
              g[18] =
              g[19] =
              g[20] =
              g[21] =
              g[22] =
              g[23] =
              g[24] =
              g[25] =
              g[26] =
              g[27] =
              g[28] =
              g[29] =
              g[30] =
              g[31] =
              g[32] =
                0),
            (this.blocks = g))
          : (this.blocks = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]),
          _ == 384
            ? ((this.h0h = 3418070365),
              (this.h0l = 3238371032),
              (this.h1h = 1654270250),
              (this.h1l = 914150663),
              (this.h2h = 2438529370),
              (this.h2l = 812702999),
              (this.h3h = 355462360),
              (this.h3l = 4144912697),
              (this.h4h = 1731405415),
              (this.h4l = 4290775857),
              (this.h5h = 2394180231),
              (this.h5l = 1750603025),
              (this.h6h = 3675008525),
              (this.h6l = 1694076839),
              (this.h7h = 1203062813),
              (this.h7l = 3204075428))
            : _ == 256
            ? ((this.h0h = 573645204),
              (this.h0l = 4230739756),
              (this.h1h = 2673172387),
              (this.h1l = 3360449730),
              (this.h2h = 596883563),
              (this.h2l = 1867755857),
              (this.h3h = 2520282905),
              (this.h3l = 1497426621),
              (this.h4h = 2519219938),
              (this.h4l = 2827943907),
              (this.h5h = 3193839141),
              (this.h5l = 1401305490),
              (this.h6h = 721525244),
              (this.h6l = 746961066),
              (this.h7h = 246885852),
              (this.h7l = 2177182882))
            : _ == 224
            ? ((this.h0h = 2352822216),
              (this.h0l = 424955298),
              (this.h1h = 1944164710),
              (this.h1l = 2312950998),
              (this.h2h = 502970286),
              (this.h2l = 855612546),
              (this.h3h = 1738396948),
              (this.h3l = 1479516111),
              (this.h4h = 258812777),
              (this.h4l = 2077511080),
              (this.h5h = 2011393907),
              (this.h5l = 79989058),
              (this.h6h = 1067287976),
              (this.h6l = 1780299464),
              (this.h7h = 286451373),
              (this.h7l = 2446758561))
            : ((this.h0h = 1779033703),
              (this.h0l = 4089235720),
              (this.h1h = 3144134277),
              (this.h1l = 2227873595),
              (this.h2h = 1013904242),
              (this.h2l = 4271175723),
              (this.h3h = 2773480762),
              (this.h3l = 1595750129),
              (this.h4h = 1359893119),
              (this.h4l = 2917565137),
              (this.h5h = 2600822924),
              (this.h5l = 725511199),
              (this.h6h = 528734635),
              (this.h6l = 4215389547),
              (this.h7h = 1541459225),
              (this.h7l = 327033209)),
          (this.bits = _),
          (this.block = this.start = this.bytes = this.hBytes = 0),
          (this.finalized = this.hashed = !1);
      }
      (b.prototype.update = function (_) {
        if (this.finalized) throw new Error(e);
        var A,
          C = typeof _;
        if (C !== "string") {
          if (C === "object") {
            if (_ === null) throw new Error(t);
            if (c && _.constructor === ArrayBuffer) _ = new Uint8Array(_);
            else if (!Array.isArray(_) && (!c || !ArrayBuffer.isView(_)))
              throw new Error(t);
          } else throw new Error(t);
          A = !0;
        }
        for (var F, W = 0, j, X = _.length, P = this.blocks; W < X; ) {
          if (
            (this.hashed &&
              ((this.hashed = !1),
              (P[0] = this.block),
              (P[1] =
                P[2] =
                P[3] =
                P[4] =
                P[5] =
                P[6] =
                P[7] =
                P[8] =
                P[9] =
                P[10] =
                P[11] =
                P[12] =
                P[13] =
                P[14] =
                P[15] =
                P[16] =
                P[17] =
                P[18] =
                P[19] =
                P[20] =
                P[21] =
                P[22] =
                P[23] =
                P[24] =
                P[25] =
                P[26] =
                P[27] =
                P[28] =
                P[29] =
                P[30] =
                P[31] =
                P[32] =
                  0)),
            A)
          )
            for (j = this.start; W < X && j < 128; ++W)
              P[j >> 2] |= _[W] << f[j++ & 3];
          else
            for (j = this.start; W < X && j < 128; ++W)
              (F = _.charCodeAt(W)),
                F < 128
                  ? (P[j >> 2] |= F << f[j++ & 3])
                  : F < 2048
                  ? ((P[j >> 2] |= (192 | (F >> 6)) << f[j++ & 3]),
                    (P[j >> 2] |= (128 | (F & 63)) << f[j++ & 3]))
                  : F < 55296 || F >= 57344
                  ? ((P[j >> 2] |= (224 | (F >> 12)) << f[j++ & 3]),
                    (P[j >> 2] |= (128 | ((F >> 6) & 63)) << f[j++ & 3]),
                    (P[j >> 2] |= (128 | (F & 63)) << f[j++ & 3]))
                  : ((F =
                      65536 +
                      (((F & 1023) << 10) | (_.charCodeAt(++W) & 1023))),
                    (P[j >> 2] |= (240 | (F >> 18)) << f[j++ & 3]),
                    (P[j >> 2] |= (128 | ((F >> 12) & 63)) << f[j++ & 3]),
                    (P[j >> 2] |= (128 | ((F >> 6) & 63)) << f[j++ & 3]),
                    (P[j >> 2] |= (128 | (F & 63)) << f[j++ & 3]));
          (this.lastByteIndex = j),
            (this.bytes += j - this.start),
            j >= 128
              ? ((this.block = P[32]),
                (this.start = j - 128),
                this.hash(),
                (this.hashed = !0))
              : (this.start = j);
        }
        return (
          this.bytes > 4294967295 &&
            ((this.hBytes += (this.bytes / 4294967296) << 0),
            (this.bytes = this.bytes % 4294967296)),
          this
        );
      }),
        (b.prototype.finalize = function () {
          if (!this.finalized) {
            this.finalized = !0;
            var _ = this.blocks,
              A = this.lastByteIndex;
            (_[32] = this.block),
              (_[A >> 2] |= l[A & 3]),
              (this.block = _[32]),
              A >= 112 &&
                (this.hashed || this.hash(),
                (_[0] = this.block),
                (_[1] =
                  _[2] =
                  _[3] =
                  _[4] =
                  _[5] =
                  _[6] =
                  _[7] =
                  _[8] =
                  _[9] =
                  _[10] =
                  _[11] =
                  _[12] =
                  _[13] =
                  _[14] =
                  _[15] =
                  _[16] =
                  _[17] =
                  _[18] =
                  _[19] =
                  _[20] =
                  _[21] =
                  _[22] =
                  _[23] =
                  _[24] =
                  _[25] =
                  _[26] =
                  _[27] =
                  _[28] =
                  _[29] =
                  _[30] =
                  _[31] =
                  _[32] =
                    0)),
              (_[30] = (this.hBytes << 3) | (this.bytes >>> 29)),
              (_[31] = this.bytes << 3),
              this.hash();
          }
        }),
        (b.prototype.hash = function () {
          var _ = this.h0h,
            A = this.h0l,
            C = this.h1h,
            F = this.h1l,
            W = this.h2h,
            j = this.h2l,
            X = this.h3h,
            P = this.h3l,
            ie = this.h4h,
            V = this.h4l,
            ee = this.h5h,
            R = this.h5l,
            G = this.h6h,
            S = this.h6l,
            O = this.h7h,
            E = this.h7l,
            N = this.blocks,
            D,
            Q,
            Y,
            H,
            ae,
            q,
            L,
            U,
            K,
            ye,
            zt,
            Dt,
            we,
            pr,
            Mr,
            Wt,
            tn,
            Re,
            yt,
            te,
            ne,
            de,
            he,
            ut,
            lt;
          for (D = 32; D < 160; D += 2)
            (te = N[D - 30]),
              (ne = N[D - 29]),
              (Q =
                ((te >>> 1) | (ne << 31)) ^
                ((te >>> 8) | (ne << 24)) ^
                (te >>> 7)),
              (Y =
                ((ne >>> 1) | (te << 31)) ^
                ((ne >>> 8) | (te << 24)) ^
                ((ne >>> 7) | (te << 25))),
              (te = N[D - 4]),
              (ne = N[D - 3]),
              (H =
                ((te >>> 19) | (ne << 13)) ^
                ((ne >>> 29) | (te << 3)) ^
                (te >>> 6)),
              (ae =
                ((ne >>> 19) | (te << 13)) ^
                ((te >>> 29) | (ne << 3)) ^
                ((ne >>> 6) | (te << 26))),
              (te = N[D - 32]),
              (ne = N[D - 31]),
              (de = N[D - 14]),
              (he = N[D - 13]),
              (q = (he & 65535) + (ne & 65535) + (Y & 65535) + (ae & 65535)),
              (L =
                (he >>> 16) +
                (ne >>> 16) +
                (Y >>> 16) +
                (ae >>> 16) +
                (q >>> 16)),
              (U =
                (de & 65535) +
                (te & 65535) +
                (Q & 65535) +
                (H & 65535) +
                (L >>> 16)),
              (K =
                (de >>> 16) +
                (te >>> 16) +
                (Q >>> 16) +
                (H >>> 16) +
                (U >>> 16)),
              (N[D] = (K << 16) | (U & 65535)),
              (N[D + 1] = (L << 16) | (q & 65535));
          var Ve = _,
            We = A,
            $e = C,
            Ke = F,
            Qe = W,
            Ye = j,
            Xe = X,
            vt = P,
            _t = ie,
            bt = V,
            St = ee,
            Tt = R,
            Et = G,
            It = S,
            xt = O,
            wt = E;
          for (Wt = $e & Qe, tn = Ke & Ye, D = 0; D < 160; D += 8)
            (Q =
              ((Ve >>> 28) | (We << 4)) ^
              ((We >>> 2) | (Ve << 30)) ^
              ((We >>> 7) | (Ve << 25))),
              (Y =
                ((We >>> 28) | (Ve << 4)) ^
                ((Ve >>> 2) | (We << 30)) ^
                ((Ve >>> 7) | (We << 25))),
              (H =
                ((_t >>> 14) | (bt << 18)) ^
                ((_t >>> 18) | (bt << 14)) ^
                ((bt >>> 9) | (_t << 23))),
              (ae =
                ((bt >>> 14) | (_t << 18)) ^
                ((bt >>> 18) | (_t << 14)) ^
                ((_t >>> 9) | (bt << 23))),
              (ye = Ve & $e),
              (zt = We & Ke),
              (Re = ye ^ (Ve & Qe) ^ Wt),
              (yt = zt ^ (We & Ye) ^ tn),
              (ut = (_t & St) ^ (~_t & Et)),
              (lt = (bt & Tt) ^ (~bt & It)),
              (te = N[D]),
              (ne = N[D + 1]),
              (de = p[D]),
              (he = p[D + 1]),
              (q =
                (he & 65535) +
                (ne & 65535) +
                (lt & 65535) +
                (ae & 65535) +
                (wt & 65535)),
              (L =
                (he >>> 16) +
                (ne >>> 16) +
                (lt >>> 16) +
                (ae >>> 16) +
                (wt >>> 16) +
                (q >>> 16)),
              (U =
                (de & 65535) +
                (te & 65535) +
                (ut & 65535) +
                (H & 65535) +
                (xt & 65535) +
                (L >>> 16)),
              (K =
                (de >>> 16) +
                (te >>> 16) +
                (ut >>> 16) +
                (H >>> 16) +
                (xt >>> 16) +
                (U >>> 16)),
              (te = (K << 16) | (U & 65535)),
              (ne = (L << 16) | (q & 65535)),
              (q = (yt & 65535) + (Y & 65535)),
              (L = (yt >>> 16) + (Y >>> 16) + (q >>> 16)),
              (U = (Re & 65535) + (Q & 65535) + (L >>> 16)),
              (K = (Re >>> 16) + (Q >>> 16) + (U >>> 16)),
              (de = (K << 16) | (U & 65535)),
              (he = (L << 16) | (q & 65535)),
              (q = (vt & 65535) + (ne & 65535)),
              (L = (vt >>> 16) + (ne >>> 16) + (q >>> 16)),
              (U = (Xe & 65535) + (te & 65535) + (L >>> 16)),
              (K = (Xe >>> 16) + (te >>> 16) + (U >>> 16)),
              (xt = (K << 16) | (U & 65535)),
              (wt = (L << 16) | (q & 65535)),
              (q = (he & 65535) + (ne & 65535)),
              (L = (he >>> 16) + (ne >>> 16) + (q >>> 16)),
              (U = (de & 65535) + (te & 65535) + (L >>> 16)),
              (K = (de >>> 16) + (te >>> 16) + (U >>> 16)),
              (Xe = (K << 16) | (U & 65535)),
              (vt = (L << 16) | (q & 65535)),
              (Q =
                ((Xe >>> 28) | (vt << 4)) ^
                ((vt >>> 2) | (Xe << 30)) ^
                ((vt >>> 7) | (Xe << 25))),
              (Y =
                ((vt >>> 28) | (Xe << 4)) ^
                ((Xe >>> 2) | (vt << 30)) ^
                ((Xe >>> 7) | (vt << 25))),
              (H =
                ((xt >>> 14) | (wt << 18)) ^
                ((xt >>> 18) | (wt << 14)) ^
                ((wt >>> 9) | (xt << 23))),
              (ae =
                ((wt >>> 14) | (xt << 18)) ^
                ((wt >>> 18) | (xt << 14)) ^
                ((xt >>> 9) | (wt << 23))),
              (Dt = Xe & Ve),
              (we = vt & We),
              (Re = Dt ^ (Xe & $e) ^ ye),
              (yt = we ^ (vt & Ke) ^ zt),
              (ut = (xt & _t) ^ (~xt & St)),
              (lt = (wt & bt) ^ (~wt & Tt)),
              (te = N[D + 2]),
              (ne = N[D + 3]),
              (de = p[D + 2]),
              (he = p[D + 3]),
              (q =
                (he & 65535) +
                (ne & 65535) +
                (lt & 65535) +
                (ae & 65535) +
                (It & 65535)),
              (L =
                (he >>> 16) +
                (ne >>> 16) +
                (lt >>> 16) +
                (ae >>> 16) +
                (It >>> 16) +
                (q >>> 16)),
              (U =
                (de & 65535) +
                (te & 65535) +
                (ut & 65535) +
                (H & 65535) +
                (Et & 65535) +
                (L >>> 16)),
              (K =
                (de >>> 16) +
                (te >>> 16) +
                (ut >>> 16) +
                (H >>> 16) +
                (Et >>> 16) +
                (U >>> 16)),
              (te = (K << 16) | (U & 65535)),
              (ne = (L << 16) | (q & 65535)),
              (q = (yt & 65535) + (Y & 65535)),
              (L = (yt >>> 16) + (Y >>> 16) + (q >>> 16)),
              (U = (Re & 65535) + (Q & 65535) + (L >>> 16)),
              (K = (Re >>> 16) + (Q >>> 16) + (U >>> 16)),
              (de = (K << 16) | (U & 65535)),
              (he = (L << 16) | (q & 65535)),
              (q = (Ye & 65535) + (ne & 65535)),
              (L = (Ye >>> 16) + (ne >>> 16) + (q >>> 16)),
              (U = (Qe & 65535) + (te & 65535) + (L >>> 16)),
              (K = (Qe >>> 16) + (te >>> 16) + (U >>> 16)),
              (Et = (K << 16) | (U & 65535)),
              (It = (L << 16) | (q & 65535)),
              (q = (he & 65535) + (ne & 65535)),
              (L = (he >>> 16) + (ne >>> 16) + (q >>> 16)),
              (U = (de & 65535) + (te & 65535) + (L >>> 16)),
              (K = (de >>> 16) + (te >>> 16) + (U >>> 16)),
              (Qe = (K << 16) | (U & 65535)),
              (Ye = (L << 16) | (q & 65535)),
              (Q =
                ((Qe >>> 28) | (Ye << 4)) ^
                ((Ye >>> 2) | (Qe << 30)) ^
                ((Ye >>> 7) | (Qe << 25))),
              (Y =
                ((Ye >>> 28) | (Qe << 4)) ^
                ((Qe >>> 2) | (Ye << 30)) ^
                ((Qe >>> 7) | (Ye << 25))),
              (H =
                ((Et >>> 14) | (It << 18)) ^
                ((Et >>> 18) | (It << 14)) ^
                ((It >>> 9) | (Et << 23))),
              (ae =
                ((It >>> 14) | (Et << 18)) ^
                ((It >>> 18) | (Et << 14)) ^
                ((Et >>> 9) | (It << 23))),
              (pr = Qe & Xe),
              (Mr = Ye & vt),
              (Re = pr ^ (Qe & Ve) ^ Dt),
              (yt = Mr ^ (Ye & We) ^ we),
              (ut = (Et & xt) ^ (~Et & _t)),
              (lt = (It & wt) ^ (~It & bt)),
              (te = N[D + 4]),
              (ne = N[D + 5]),
              (de = p[D + 4]),
              (he = p[D + 5]),
              (q =
                (he & 65535) +
                (ne & 65535) +
                (lt & 65535) +
                (ae & 65535) +
                (Tt & 65535)),
              (L =
                (he >>> 16) +
                (ne >>> 16) +
                (lt >>> 16) +
                (ae >>> 16) +
                (Tt >>> 16) +
                (q >>> 16)),
              (U =
                (de & 65535) +
                (te & 65535) +
                (ut & 65535) +
                (H & 65535) +
                (St & 65535) +
                (L >>> 16)),
              (K =
                (de >>> 16) +
                (te >>> 16) +
                (ut >>> 16) +
                (H >>> 16) +
                (St >>> 16) +
                (U >>> 16)),
              (te = (K << 16) | (U & 65535)),
              (ne = (L << 16) | (q & 65535)),
              (q = (yt & 65535) + (Y & 65535)),
              (L = (yt >>> 16) + (Y >>> 16) + (q >>> 16)),
              (U = (Re & 65535) + (Q & 65535) + (L >>> 16)),
              (K = (Re >>> 16) + (Q >>> 16) + (U >>> 16)),
              (de = (K << 16) | (U & 65535)),
              (he = (L << 16) | (q & 65535)),
              (q = (Ke & 65535) + (ne & 65535)),
              (L = (Ke >>> 16) + (ne >>> 16) + (q >>> 16)),
              (U = ($e & 65535) + (te & 65535) + (L >>> 16)),
              (K = ($e >>> 16) + (te >>> 16) + (U >>> 16)),
              (St = (K << 16) | (U & 65535)),
              (Tt = (L << 16) | (q & 65535)),
              (q = (he & 65535) + (ne & 65535)),
              (L = (he >>> 16) + (ne >>> 16) + (q >>> 16)),
              (U = (de & 65535) + (te & 65535) + (L >>> 16)),
              (K = (de >>> 16) + (te >>> 16) + (U >>> 16)),
              ($e = (K << 16) | (U & 65535)),
              (Ke = (L << 16) | (q & 65535)),
              (Q =
                (($e >>> 28) | (Ke << 4)) ^
                ((Ke >>> 2) | ($e << 30)) ^
                ((Ke >>> 7) | ($e << 25))),
              (Y =
                ((Ke >>> 28) | ($e << 4)) ^
                (($e >>> 2) | (Ke << 30)) ^
                (($e >>> 7) | (Ke << 25))),
              (H =
                ((St >>> 14) | (Tt << 18)) ^
                ((St >>> 18) | (Tt << 14)) ^
                ((Tt >>> 9) | (St << 23))),
              (ae =
                ((Tt >>> 14) | (St << 18)) ^
                ((Tt >>> 18) | (St << 14)) ^
                ((St >>> 9) | (Tt << 23))),
              (Wt = $e & Qe),
              (tn = Ke & Ye),
              (Re = Wt ^ ($e & Xe) ^ pr),
              (yt = tn ^ (Ke & vt) ^ Mr),
              (ut = (St & Et) ^ (~St & xt)),
              (lt = (Tt & It) ^ (~Tt & wt)),
              (te = N[D + 6]),
              (ne = N[D + 7]),
              (de = p[D + 6]),
              (he = p[D + 7]),
              (q =
                (he & 65535) +
                (ne & 65535) +
                (lt & 65535) +
                (ae & 65535) +
                (bt & 65535)),
              (L =
                (he >>> 16) +
                (ne >>> 16) +
                (lt >>> 16) +
                (ae >>> 16) +
                (bt >>> 16) +
                (q >>> 16)),
              (U =
                (de & 65535) +
                (te & 65535) +
                (ut & 65535) +
                (H & 65535) +
                (_t & 65535) +
                (L >>> 16)),
              (K =
                (de >>> 16) +
                (te >>> 16) +
                (ut >>> 16) +
                (H >>> 16) +
                (_t >>> 16) +
                (U >>> 16)),
              (te = (K << 16) | (U & 65535)),
              (ne = (L << 16) | (q & 65535)),
              (q = (yt & 65535) + (Y & 65535)),
              (L = (yt >>> 16) + (Y >>> 16) + (q >>> 16)),
              (U = (Re & 65535) + (Q & 65535) + (L >>> 16)),
              (K = (Re >>> 16) + (Q >>> 16) + (U >>> 16)),
              (de = (K << 16) | (U & 65535)),
              (he = (L << 16) | (q & 65535)),
              (q = (We & 65535) + (ne & 65535)),
              (L = (We >>> 16) + (ne >>> 16) + (q >>> 16)),
              (U = (Ve & 65535) + (te & 65535) + (L >>> 16)),
              (K = (Ve >>> 16) + (te >>> 16) + (U >>> 16)),
              (_t = (K << 16) | (U & 65535)),
              (bt = (L << 16) | (q & 65535)),
              (q = (he & 65535) + (ne & 65535)),
              (L = (he >>> 16) + (ne >>> 16) + (q >>> 16)),
              (U = (de & 65535) + (te & 65535) + (L >>> 16)),
              (K = (de >>> 16) + (te >>> 16) + (U >>> 16)),
              (Ve = (K << 16) | (U & 65535)),
              (We = (L << 16) | (q & 65535));
          (q = (A & 65535) + (We & 65535)),
            (L = (A >>> 16) + (We >>> 16) + (q >>> 16)),
            (U = (_ & 65535) + (Ve & 65535) + (L >>> 16)),
            (K = (_ >>> 16) + (Ve >>> 16) + (U >>> 16)),
            (this.h0h = (K << 16) | (U & 65535)),
            (this.h0l = (L << 16) | (q & 65535)),
            (q = (F & 65535) + (Ke & 65535)),
            (L = (F >>> 16) + (Ke >>> 16) + (q >>> 16)),
            (U = (C & 65535) + ($e & 65535) + (L >>> 16)),
            (K = (C >>> 16) + ($e >>> 16) + (U >>> 16)),
            (this.h1h = (K << 16) | (U & 65535)),
            (this.h1l = (L << 16) | (q & 65535)),
            (q = (j & 65535) + (Ye & 65535)),
            (L = (j >>> 16) + (Ye >>> 16) + (q >>> 16)),
            (U = (W & 65535) + (Qe & 65535) + (L >>> 16)),
            (K = (W >>> 16) + (Qe >>> 16) + (U >>> 16)),
            (this.h2h = (K << 16) | (U & 65535)),
            (this.h2l = (L << 16) | (q & 65535)),
            (q = (P & 65535) + (vt & 65535)),
            (L = (P >>> 16) + (vt >>> 16) + (q >>> 16)),
            (U = (X & 65535) + (Xe & 65535) + (L >>> 16)),
            (K = (X >>> 16) + (Xe >>> 16) + (U >>> 16)),
            (this.h3h = (K << 16) | (U & 65535)),
            (this.h3l = (L << 16) | (q & 65535)),
            (q = (V & 65535) + (bt & 65535)),
            (L = (V >>> 16) + (bt >>> 16) + (q >>> 16)),
            (U = (ie & 65535) + (_t & 65535) + (L >>> 16)),
            (K = (ie >>> 16) + (_t >>> 16) + (U >>> 16)),
            (this.h4h = (K << 16) | (U & 65535)),
            (this.h4l = (L << 16) | (q & 65535)),
            (q = (R & 65535) + (Tt & 65535)),
            (L = (R >>> 16) + (Tt >>> 16) + (q >>> 16)),
            (U = (ee & 65535) + (St & 65535) + (L >>> 16)),
            (K = (ee >>> 16) + (St >>> 16) + (U >>> 16)),
            (this.h5h = (K << 16) | (U & 65535)),
            (this.h5l = (L << 16) | (q & 65535)),
            (q = (S & 65535) + (It & 65535)),
            (L = (S >>> 16) + (It >>> 16) + (q >>> 16)),
            (U = (G & 65535) + (Et & 65535) + (L >>> 16)),
            (K = (G >>> 16) + (Et >>> 16) + (U >>> 16)),
            (this.h6h = (K << 16) | (U & 65535)),
            (this.h6l = (L << 16) | (q & 65535)),
            (q = (E & 65535) + (wt & 65535)),
            (L = (E >>> 16) + (wt >>> 16) + (q >>> 16)),
            (U = (O & 65535) + (xt & 65535) + (L >>> 16)),
            (K = (O >>> 16) + (xt >>> 16) + (U >>> 16)),
            (this.h7h = (K << 16) | (U & 65535)),
            (this.h7l = (L << 16) | (q & 65535));
        }),
        (b.prototype.hex = function () {
          this.finalize();
          var _ = this.h0h,
            A = this.h0l,
            C = this.h1h,
            F = this.h1l,
            W = this.h2h,
            j = this.h2l,
            X = this.h3h,
            P = this.h3l,
            ie = this.h4h,
            V = this.h4l,
            ee = this.h5h,
            R = this.h5l,
            G = this.h6h,
            S = this.h6l,
            O = this.h7h,
            E = this.h7l,
            N = this.bits,
            D =
              u[(_ >> 28) & 15] +
              u[(_ >> 24) & 15] +
              u[(_ >> 20) & 15] +
              u[(_ >> 16) & 15] +
              u[(_ >> 12) & 15] +
              u[(_ >> 8) & 15] +
              u[(_ >> 4) & 15] +
              u[_ & 15] +
              u[(A >> 28) & 15] +
              u[(A >> 24) & 15] +
              u[(A >> 20) & 15] +
              u[(A >> 16) & 15] +
              u[(A >> 12) & 15] +
              u[(A >> 8) & 15] +
              u[(A >> 4) & 15] +
              u[A & 15] +
              u[(C >> 28) & 15] +
              u[(C >> 24) & 15] +
              u[(C >> 20) & 15] +
              u[(C >> 16) & 15] +
              u[(C >> 12) & 15] +
              u[(C >> 8) & 15] +
              u[(C >> 4) & 15] +
              u[C & 15] +
              u[(F >> 28) & 15] +
              u[(F >> 24) & 15] +
              u[(F >> 20) & 15] +
              u[(F >> 16) & 15] +
              u[(F >> 12) & 15] +
              u[(F >> 8) & 15] +
              u[(F >> 4) & 15] +
              u[F & 15] +
              u[(W >> 28) & 15] +
              u[(W >> 24) & 15] +
              u[(W >> 20) & 15] +
              u[(W >> 16) & 15] +
              u[(W >> 12) & 15] +
              u[(W >> 8) & 15] +
              u[(W >> 4) & 15] +
              u[W & 15] +
              u[(j >> 28) & 15] +
              u[(j >> 24) & 15] +
              u[(j >> 20) & 15] +
              u[(j >> 16) & 15] +
              u[(j >> 12) & 15] +
              u[(j >> 8) & 15] +
              u[(j >> 4) & 15] +
              u[j & 15] +
              u[(X >> 28) & 15] +
              u[(X >> 24) & 15] +
              u[(X >> 20) & 15] +
              u[(X >> 16) & 15] +
              u[(X >> 12) & 15] +
              u[(X >> 8) & 15] +
              u[(X >> 4) & 15] +
              u[X & 15];
          return (
            N >= 256 &&
              (D +=
                u[(P >> 28) & 15] +
                u[(P >> 24) & 15] +
                u[(P >> 20) & 15] +
                u[(P >> 16) & 15] +
                u[(P >> 12) & 15] +
                u[(P >> 8) & 15] +
                u[(P >> 4) & 15] +
                u[P & 15]),
            N >= 384 &&
              (D +=
                u[(ie >> 28) & 15] +
                u[(ie >> 24) & 15] +
                u[(ie >> 20) & 15] +
                u[(ie >> 16) & 15] +
                u[(ie >> 12) & 15] +
                u[(ie >> 8) & 15] +
                u[(ie >> 4) & 15] +
                u[ie & 15] +
                u[(V >> 28) & 15] +
                u[(V >> 24) & 15] +
                u[(V >> 20) & 15] +
                u[(V >> 16) & 15] +
                u[(V >> 12) & 15] +
                u[(V >> 8) & 15] +
                u[(V >> 4) & 15] +
                u[V & 15] +
                u[(ee >> 28) & 15] +
                u[(ee >> 24) & 15] +
                u[(ee >> 20) & 15] +
                u[(ee >> 16) & 15] +
                u[(ee >> 12) & 15] +
                u[(ee >> 8) & 15] +
                u[(ee >> 4) & 15] +
                u[ee & 15] +
                u[(R >> 28) & 15] +
                u[(R >> 24) & 15] +
                u[(R >> 20) & 15] +
                u[(R >> 16) & 15] +
                u[(R >> 12) & 15] +
                u[(R >> 8) & 15] +
                u[(R >> 4) & 15] +
                u[R & 15]),
            N == 512 &&
              (D +=
                u[(G >> 28) & 15] +
                u[(G >> 24) & 15] +
                u[(G >> 20) & 15] +
                u[(G >> 16) & 15] +
                u[(G >> 12) & 15] +
                u[(G >> 8) & 15] +
                u[(G >> 4) & 15] +
                u[G & 15] +
                u[(S >> 28) & 15] +
                u[(S >> 24) & 15] +
                u[(S >> 20) & 15] +
                u[(S >> 16) & 15] +
                u[(S >> 12) & 15] +
                u[(S >> 8) & 15] +
                u[(S >> 4) & 15] +
                u[S & 15] +
                u[(O >> 28) & 15] +
                u[(O >> 24) & 15] +
                u[(O >> 20) & 15] +
                u[(O >> 16) & 15] +
                u[(O >> 12) & 15] +
                u[(O >> 8) & 15] +
                u[(O >> 4) & 15] +
                u[O & 15] +
                u[(E >> 28) & 15] +
                u[(E >> 24) & 15] +
                u[(E >> 20) & 15] +
                u[(E >> 16) & 15] +
                u[(E >> 12) & 15] +
                u[(E >> 8) & 15] +
                u[(E >> 4) & 15] +
                u[E & 15]),
            D
          );
        }),
        (b.prototype.toString = b.prototype.hex),
        (b.prototype.digest = function () {
          this.finalize();
          var _ = this.h0h,
            A = this.h0l,
            C = this.h1h,
            F = this.h1l,
            W = this.h2h,
            j = this.h2l,
            X = this.h3h,
            P = this.h3l,
            ie = this.h4h,
            V = this.h4l,
            ee = this.h5h,
            R = this.h5l,
            G = this.h6h,
            S = this.h6l,
            O = this.h7h,
            E = this.h7l,
            N = this.bits,
            D = [
              (_ >> 24) & 255,
              (_ >> 16) & 255,
              (_ >> 8) & 255,
              _ & 255,
              (A >> 24) & 255,
              (A >> 16) & 255,
              (A >> 8) & 255,
              A & 255,
              (C >> 24) & 255,
              (C >> 16) & 255,
              (C >> 8) & 255,
              C & 255,
              (F >> 24) & 255,
              (F >> 16) & 255,
              (F >> 8) & 255,
              F & 255,
              (W >> 24) & 255,
              (W >> 16) & 255,
              (W >> 8) & 255,
              W & 255,
              (j >> 24) & 255,
              (j >> 16) & 255,
              (j >> 8) & 255,
              j & 255,
              (X >> 24) & 255,
              (X >> 16) & 255,
              (X >> 8) & 255,
              X & 255,
            ];
          return (
            N >= 256 &&
              D.push((P >> 24) & 255, (P >> 16) & 255, (P >> 8) & 255, P & 255),
            N >= 384 &&
              D.push(
                (ie >> 24) & 255,
                (ie >> 16) & 255,
                (ie >> 8) & 255,
                ie & 255,
                (V >> 24) & 255,
                (V >> 16) & 255,
                (V >> 8) & 255,
                V & 255,
                (ee >> 24) & 255,
                (ee >> 16) & 255,
                (ee >> 8) & 255,
                ee & 255,
                (R >> 24) & 255,
                (R >> 16) & 255,
                (R >> 8) & 255,
                R & 255
              ),
            N == 512 &&
              D.push(
                (G >> 24) & 255,
                (G >> 16) & 255,
                (G >> 8) & 255,
                G & 255,
                (S >> 24) & 255,
                (S >> 16) & 255,
                (S >> 8) & 255,
                S & 255,
                (O >> 24) & 255,
                (O >> 16) & 255,
                (O >> 8) & 255,
                O & 255,
                (E >> 24) & 255,
                (E >> 16) & 255,
                (E >> 8) & 255,
                E & 255
              ),
            D
          );
        }),
        (b.prototype.array = b.prototype.digest),
        (b.prototype.arrayBuffer = function () {
          this.finalize();
          var _ = this.bits,
            A = new ArrayBuffer(_ / 8),
            C = new DataView(A);
          return (
            C.setUint32(0, this.h0h),
            C.setUint32(4, this.h0l),
            C.setUint32(8, this.h1h),
            C.setUint32(12, this.h1l),
            C.setUint32(16, this.h2h),
            C.setUint32(20, this.h2l),
            C.setUint32(24, this.h3h),
            _ >= 256 && C.setUint32(28, this.h3l),
            _ >= 384 &&
              (C.setUint32(32, this.h4h),
              C.setUint32(36, this.h4l),
              C.setUint32(40, this.h5h),
              C.setUint32(44, this.h5l)),
            _ == 512 &&
              (C.setUint32(48, this.h6h),
              C.setUint32(52, this.h6l),
              C.setUint32(56, this.h7h),
              C.setUint32(60, this.h7l)),
            A
          );
        }),
        (b.prototype.clone = function () {
          var _ = new b(this.bits, !1);
          return this.copyTo(_), _;
        }),
        (b.prototype.copyTo = function (_) {
          var A = 0,
            C = [
              "h0h",
              "h0l",
              "h1h",
              "h1l",
              "h2h",
              "h2l",
              "h3h",
              "h3l",
              "h4h",
              "h4l",
              "h5h",
              "h5l",
              "h6h",
              "h6l",
              "h7h",
              "h7l",
              "start",
              "bytes",
              "hBytes",
              "finalized",
              "hashed",
              "lastByteIndex",
            ];
          for (A = 0; A < C.length; ++A) _[C[A]] = this[C[A]];
          for (A = 0; A < this.blocks.length; ++A) _.blocks[A] = this.blocks[A];
        });
      function w(_, A, C) {
        var F,
          W = typeof _;
        if (W !== "string") {
          if (W === "object") {
            if (_ === null) throw new Error(t);
            if (c && _.constructor === ArrayBuffer) _ = new Uint8Array(_);
            else if (!Array.isArray(_) && (!c || !ArrayBuffer.isView(_)))
              throw new Error(t);
          } else throw new Error(t);
          F = !0;
        }
        var j = _.length;
        if (!F) {
          for (var X = [], j = _.length, P = 0, ie, V = 0; V < j; ++V)
            (ie = _.charCodeAt(V)),
              ie < 128
                ? (X[P++] = ie)
                : ie < 2048
                ? ((X[P++] = 192 | (ie >> 6)), (X[P++] = 128 | (ie & 63)))
                : ie < 55296 || ie >= 57344
                ? ((X[P++] = 224 | (ie >> 12)),
                  (X[P++] = 128 | ((ie >> 6) & 63)),
                  (X[P++] = 128 | (ie & 63)))
                : ((ie =
                    65536 + (((ie & 1023) << 10) | (_.charCodeAt(++V) & 1023))),
                  (X[P++] = 240 | (ie >> 18)),
                  (X[P++] = 128 | ((ie >> 12) & 63)),
                  (X[P++] = 128 | ((ie >> 6) & 63)),
                  (X[P++] = 128 | (ie & 63)));
          _ = X;
        }
        _.length > 128 && (_ = new b(A, !0).update(_).array());
        for (var ee = [], R = [], V = 0; V < 128; ++V) {
          var G = _[V] || 0;
          (ee[V] = 92 ^ G), (R[V] = 54 ^ G);
        }
        b.call(this, A, C),
          this.update(R),
          (this.oKeyPad = ee),
          (this.inner = !0),
          (this.sharedMemory = C);
      }
      (w.prototype = new b()),
        (w.prototype.finalize = function () {
          if ((b.prototype.finalize.call(this), this.inner)) {
            this.inner = !1;
            var _ = this.array();
            b.call(this, this.bits, this.sharedMemory),
              this.update(this.oKeyPad),
              this.update(_),
              b.prototype.finalize.call(this);
          }
        }),
        (w.prototype.clone = function () {
          var _ = new w([], this.bits, !1);
          this.copyTo(_), (_.inner = this.inner);
          for (var A = 0; A < this.oKeyPad.length; ++A)
            _.oKeyPad[A] = this.oKeyPad[A];
          return _;
        });
      var k = y(512);
      (k.sha512 = k),
        (k.sha384 = y(384)),
        (k.sha512_256 = y(256)),
        (k.sha512_224 = y(224)),
        (k.sha512.hmac = I(512)),
        (k.sha384.hmac = I(384)),
        (k.sha512_256.hmac = I(256)),
        (k.sha512_224.hmac = I(224)),
        o
          ? (Dc.exports = k)
          : ((n.sha512 = k.sha512),
            (n.sha384 = k.sha384),
            (n.sha512_256 = k.sha512_256),
            (n.sha512_224 = k.sha512_224),
            s &&
              define(function () {
                return k;
              }));
    })();
  });
  var NI = T(($c, MI) => {
    (function (t, e) {
      typeof $c == "object" && typeof MI < "u"
        ? e($c)
        : typeof define == "function" && define.amd
        ? define(["exports"], e)
        : e((t.reduxLogger = t.reduxLogger || {}));
    })($c, function (t) {
      "use strict";
      function e(S, O) {
        (S.super_ = O),
          (S.prototype = Object.create(O.prototype, {
            constructor: {
              value: S,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          }));
      }
      function r(S, O) {
        Object.defineProperty(this, "kind", { value: S, enumerable: !0 }),
          O &&
            O.length &&
            Object.defineProperty(this, "path", { value: O, enumerable: !0 });
      }
      function n(S, O, E) {
        n.super_.call(this, "E", S),
          Object.defineProperty(this, "lhs", { value: O, enumerable: !0 }),
          Object.defineProperty(this, "rhs", { value: E, enumerable: !0 });
      }
      function i(S, O) {
        i.super_.call(this, "N", S),
          Object.defineProperty(this, "rhs", { value: O, enumerable: !0 });
      }
      function a(S, O) {
        a.super_.call(this, "D", S),
          Object.defineProperty(this, "lhs", { value: O, enumerable: !0 });
      }
      function o(S, O, E) {
        o.super_.call(this, "A", S),
          Object.defineProperty(this, "index", { value: O, enumerable: !0 }),
          Object.defineProperty(this, "item", { value: E, enumerable: !0 });
      }
      function s(S, O, E) {
        var N = S.slice((E || O) + 1 || S.length);
        return (S.length = O < 0 ? S.length + O : O), S.push.apply(S, N), S;
      }
      function c(S) {
        var O = typeof S > "u" ? "undefined" : P(S);
        return O !== "object"
          ? O
          : S === Math
          ? "math"
          : S === null
          ? "null"
          : Array.isArray(S)
          ? "array"
          : Object.prototype.toString.call(S) === "[object Date]"
          ? "date"
          : typeof S.toString == "function" && /^\/.*\//.test(S.toString())
          ? "regexp"
          : "object";
      }
      function u(S, O, E, N, D, Q, Y) {
        (D = D || []), (Y = Y || []);
        var H = D.slice(0);
        if (typeof Q < "u") {
          if (N) {
            if (typeof N == "function" && N(H, Q)) return;
            if ((typeof N > "u" ? "undefined" : P(N)) === "object") {
              if (N.prefilter && N.prefilter(H, Q)) return;
              if (N.normalize) {
                var ae = N.normalize(H, Q, S, O);
                ae && ((S = ae[0]), (O = ae[1]));
              }
            }
          }
          H.push(Q);
        }
        c(S) === "regexp" &&
          c(O) === "regexp" &&
          ((S = S.toString()), (O = O.toString()));
        var q = typeof S > "u" ? "undefined" : P(S),
          L = typeof O > "u" ? "undefined" : P(O),
          U =
            q !== "undefined" ||
            (Y && Y[Y.length - 1].lhs && Y[Y.length - 1].lhs.hasOwnProperty(Q)),
          K =
            L !== "undefined" ||
            (Y && Y[Y.length - 1].rhs && Y[Y.length - 1].rhs.hasOwnProperty(Q));
        if (!U && K) E(new i(H, O));
        else if (!K && U) E(new a(H, S));
        else if (c(S) !== c(O)) E(new n(H, S, O));
        else if (c(S) === "date" && S - O !== 0) E(new n(H, S, O));
        else if (q === "object" && S !== null && O !== null)
          if (
            Y.filter(function (we) {
              return we.lhs === S;
            }).length
          )
            S !== O && E(new n(H, S, O));
          else {
            if ((Y.push({ lhs: S, rhs: O }), Array.isArray(S))) {
              var ye;
              for (S.length, ye = 0; ye < S.length; ye++)
                ye >= O.length
                  ? E(new o(H, ye, new a(void 0, S[ye])))
                  : u(S[ye], O[ye], E, N, H, ye, Y);
              for (; ye < O.length; ) E(new o(H, ye, new i(void 0, O[ye++])));
            } else {
              var zt = Object.keys(S),
                Dt = Object.keys(O);
              zt.forEach(function (we, pr) {
                var Mr = Dt.indexOf(we);
                Mr >= 0
                  ? (u(S[we], O[we], E, N, H, we, Y), (Dt = s(Dt, Mr)))
                  : u(S[we], void 0, E, N, H, we, Y);
              }),
                Dt.forEach(function (we) {
                  u(void 0, O[we], E, N, H, we, Y);
                });
            }
            Y.length = Y.length - 1;
          }
        else
          S !== O &&
            ((q === "number" && isNaN(S) && isNaN(O)) || E(new n(H, S, O)));
      }
      function l(S, O, E, N) {
        return (
          (N = N || []),
          u(
            S,
            O,
            function (D) {
              D && N.push(D);
            },
            E
          ),
          N.length ? N : void 0
        );
      }
      function f(S, O, E) {
        if (E.path && E.path.length) {
          var N,
            D = S[O],
            Q = E.path.length - 1;
          for (N = 0; N < Q; N++) D = D[E.path[N]];
          switch (E.kind) {
            case "A":
              f(D[E.path[N]], E.index, E.item);
              break;
            case "D":
              delete D[E.path[N]];
              break;
            case "E":
            case "N":
              D[E.path[N]] = E.rhs;
          }
        } else
          switch (E.kind) {
            case "A":
              f(S[O], E.index, E.item);
              break;
            case "D":
              S = s(S, O);
              break;
            case "E":
            case "N":
              S[O] = E.rhs;
          }
        return S;
      }
      function p(S, O, E) {
        if (S && O && E && E.kind) {
          for (var N = S, D = -1, Q = E.path ? E.path.length - 1 : 0; ++D < Q; )
            typeof N[E.path[D]] > "u" &&
              (N[E.path[D]] = typeof E.path[D] == "number" ? [] : {}),
              (N = N[E.path[D]]);
          switch (E.kind) {
            case "A":
              f(E.path ? N[E.path[D]] : N, E.index, E.item);
              break;
            case "D":
              delete N[E.path[D]];
              break;
            case "E":
            case "N":
              N[E.path[D]] = E.rhs;
          }
        }
      }
      function d(S, O, E) {
        if (E.path && E.path.length) {
          var N,
            D = S[O],
            Q = E.path.length - 1;
          for (N = 0; N < Q; N++) D = D[E.path[N]];
          switch (E.kind) {
            case "A":
              d(D[E.path[N]], E.index, E.item);
              break;
            case "D":
              D[E.path[N]] = E.lhs;
              break;
            case "E":
              D[E.path[N]] = E.lhs;
              break;
            case "N":
              delete D[E.path[N]];
          }
        } else
          switch (E.kind) {
            case "A":
              d(S[O], E.index, E.item);
              break;
            case "D":
              S[O] = E.lhs;
              break;
            case "E":
              S[O] = E.lhs;
              break;
            case "N":
              S = s(S, O);
          }
        return S;
      }
      function g(S, O, E) {
        if (S && O && E && E.kind) {
          var N,
            D,
            Q = S;
          for (D = E.path.length - 1, N = 0; N < D; N++)
            typeof Q[E.path[N]] > "u" && (Q[E.path[N]] = {}),
              (Q = Q[E.path[N]]);
          switch (E.kind) {
            case "A":
              d(Q[E.path[N]], E.index, E.item);
              break;
            case "D":
              Q[E.path[N]] = E.lhs;
              break;
            case "E":
              Q[E.path[N]] = E.lhs;
              break;
            case "N":
              delete Q[E.path[N]];
          }
        }
      }
      function v(S, O, E) {
        if (S && O) {
          var N = function (D) {
            (E && !E(S, O, D)) || p(S, O, D);
          };
          u(S, O, N);
        }
      }
      function y(S) {
        return "color: " + ee[S].color + "; font-weight: bold";
      }
      function m(S) {
        var O = S.kind,
          E = S.path,
          N = S.lhs,
          D = S.rhs,
          Q = S.index,
          Y = S.item;
        switch (O) {
          case "E":
            return [E.join("."), N, "\u2192", D];
          case "N":
            return [E.join("."), D];
          case "D":
            return [E.join(".")];
          case "A":
            return [E.join(".") + "[" + Q + "]", Y];
          default:
            return [];
        }
      }
      function I(S, O, E, N) {
        var D = l(S, O);
        try {
          N ? E.groupCollapsed("diff") : E.group("diff");
        } catch {
          E.log("diff");
        }
        D
          ? D.forEach(function (Q) {
              var Y = Q.kind,
                H = m(Q);
              E.log.apply(E, ["%c " + ee[Y].text, y(Y)].concat(ie(H)));
            })
          : E.log("\u2014\u2014 no diff \u2014\u2014");
        try {
          E.groupEnd();
        } catch {
          E.log("\u2014\u2014 diff end \u2014\u2014 ");
        }
      }
      function b(S, O, E, N) {
        switch (typeof S > "u" ? "undefined" : P(S)) {
          case "object":
            return typeof S[N] == "function" ? S[N].apply(S, ie(E)) : S[N];
          case "function":
            return S(O);
          default:
            return S;
        }
      }
      function w(S) {
        var O = S.timestamp,
          E = S.duration;
        return function (N, D, Q) {
          var Y = ["action"];
          return (
            Y.push("%c" + String(N.type)),
            O && Y.push("%c@ " + D),
            E && Y.push("%c(in " + Q.toFixed(2) + " ms)"),
            Y.join(" ")
          );
        };
      }
      function k(S, O) {
        var E = O.logger,
          N = O.actionTransformer,
          D = O.titleFormatter,
          Q = D === void 0 ? w(O) : D,
          Y = O.collapsed,
          H = O.colors,
          ae = O.level,
          q = O.diff,
          L = typeof O.titleFormatter > "u";
        S.forEach(function (U, K) {
          var ye = U.started,
            zt = U.startedTime,
            Dt = U.action,
            we = U.prevState,
            pr = U.error,
            Mr = U.took,
            Wt = U.nextState,
            tn = S[K + 1];
          tn && ((Wt = tn.prevState), (Mr = tn.started - ye));
          var Re = N(Dt),
            yt =
              typeof Y == "function"
                ? Y(
                    function () {
                      return Wt;
                    },
                    Dt,
                    U
                  )
                : Y,
            te = j(zt),
            ne = H.title ? "color: " + H.title(Re) + ";" : "",
            de = ["color: gray; font-weight: lighter;"];
          de.push(ne),
            O.timestamp && de.push("color: gray; font-weight: lighter;"),
            O.duration && de.push("color: gray; font-weight: lighter;");
          var he = Q(Re, te, Mr);
          try {
            yt
              ? H.title && L
                ? E.groupCollapsed.apply(E, ["%c " + he].concat(de))
                : E.groupCollapsed(he)
              : H.title && L
              ? E.group.apply(E, ["%c " + he].concat(de))
              : E.group(he);
          } catch {
            E.log(he);
          }
          var ut = b(ae, Re, [we], "prevState"),
            lt = b(ae, Re, [Re], "action"),
            Ve = b(ae, Re, [pr, we], "error"),
            We = b(ae, Re, [Wt], "nextState");
          if (ut)
            if (H.prevState) {
              var $e = "color: " + H.prevState(we) + "; font-weight: bold";
              E[ut]("%c prev state", $e, we);
            } else E[ut]("prev state", we);
          if (lt)
            if (H.action) {
              var Ke = "color: " + H.action(Re) + "; font-weight: bold";
              E[lt]("%c action    ", Ke, Re);
            } else E[lt]("action    ", Re);
          if (pr && Ve)
            if (H.error) {
              var Qe = "color: " + H.error(pr, we) + "; font-weight: bold;";
              E[Ve]("%c error     ", Qe, pr);
            } else E[Ve]("error     ", pr);
          if (We)
            if (H.nextState) {
              var Ye = "color: " + H.nextState(Wt) + "; font-weight: bold";
              E[We]("%c next state", Ye, Wt);
            } else E[We]("next state", Wt);
          q && I(we, Wt, E, yt);
          try {
            E.groupEnd();
          } catch {
            E.log("\u2014\u2014 log end \u2014\u2014");
          }
        });
      }
      function _() {
        var S =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          O = Object.assign({}, R, S),
          E = O.logger,
          N = O.stateTransformer,
          D = O.errorTransformer,
          Q = O.predicate,
          Y = O.logErrors,
          H = O.diffPredicate;
        if (typeof E > "u")
          return function () {
            return function (q) {
              return function (L) {
                return q(L);
              };
            };
          };
        if (S.getState && S.dispatch)
          return (
            console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),
            function () {
              return function (q) {
                return function (L) {
                  return q(L);
                };
              };
            }
          );
        var ae = [];
        return function (q) {
          var L = q.getState;
          return function (U) {
            return function (K) {
              if (typeof Q == "function" && !Q(L, K)) return U(K);
              var ye = {};
              ae.push(ye),
                (ye.started = X.now()),
                (ye.startedTime = new Date()),
                (ye.prevState = N(L())),
                (ye.action = K);
              var zt = void 0;
              if (Y)
                try {
                  zt = U(K);
                } catch (we) {
                  ye.error = D(we);
                }
              else zt = U(K);
              (ye.took = X.now() - ye.started), (ye.nextState = N(L()));
              var Dt = O.diff && typeof H == "function" ? H(L, K) : O.diff;
              if (
                (k(ae, Object.assign({}, O, { diff: Dt })),
                (ae.length = 0),
                ye.error)
              )
                throw ye.error;
              return zt;
            };
          };
        };
      }
      var A,
        C,
        F = function (S, O) {
          return new Array(O + 1).join(S);
        },
        W = function (S, O) {
          return F("0", O - S.toString().length) + S;
        },
        j = function (S) {
          return (
            W(S.getHours(), 2) +
            ":" +
            W(S.getMinutes(), 2) +
            ":" +
            W(S.getSeconds(), 2) +
            "." +
            W(S.getMilliseconds(), 3)
          );
        },
        X =
          typeof performance < "u" &&
          performance !== null &&
          typeof performance.now == "function"
            ? performance
            : Date,
        P =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (S) {
                return typeof S;
              }
            : function (S) {
                return S &&
                  typeof Symbol == "function" &&
                  S.constructor === Symbol &&
                  S !== Symbol.prototype
                  ? "symbol"
                  : typeof S;
              },
        ie = function (S) {
          if (Array.isArray(S)) {
            for (var O = 0, E = Array(S.length); O < S.length; O++) E[O] = S[O];
            return E;
          }
          return Array.from(S);
        },
        V = [];
      (A =
        (typeof globalThis > "u" ? "undefined" : P(globalThis)) === "object" &&
        globalThis
          ? globalThis
          : typeof window < "u"
          ? window
          : {}),
        (C = A.DeepDiff),
        C &&
          V.push(function () {
            typeof C < "u" &&
              A.DeepDiff === l &&
              ((A.DeepDiff = C), (C = void 0));
          }),
        e(n, r),
        e(i, r),
        e(a, r),
        e(o, r),
        Object.defineProperties(l, {
          diff: { value: l, enumerable: !0 },
          observableDiff: { value: u, enumerable: !0 },
          applyDiff: { value: v, enumerable: !0 },
          applyChange: { value: p, enumerable: !0 },
          revertChange: { value: g, enumerable: !0 },
          isConflict: {
            value: function () {
              return typeof C < "u";
            },
            enumerable: !0,
          },
          noConflict: {
            value: function () {
              return (
                V &&
                  (V.forEach(function (S) {
                    S();
                  }),
                  (V = null)),
                l
              );
            },
            enumerable: !0,
          },
        });
      var ee = {
          E: { color: "#2196F3", text: "CHANGED:" },
          N: { color: "#4CAF50", text: "ADDED:" },
          D: { color: "#F44336", text: "DELETED:" },
          A: { color: "#2196F3", text: "ARRAY:" },
        },
        R = {
          level: "log",
          logger: console,
          logErrors: !0,
          collapsed: void 0,
          predicate: void 0,
          duration: !1,
          timestamp: !0,
          stateTransformer: function (S) {
            return S;
          },
          actionTransformer: function (S) {
            return S;
          },
          errorTransformer: function (S) {
            return S;
          },
          colors: {
            title: function () {
              return "inherit";
            },
            prevState: function () {
              return "#9E9E9E";
            },
            action: function () {
              return "#03A9F4";
            },
            nextState: function () {
              return "#4CAF50";
            },
            error: function () {
              return "#F20404";
            },
          },
          diff: !1,
          diffPredicate: void 0,
          transformer: void 0,
        },
        G = function () {
          var S =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            O = S.dispatch,
            E = S.getState;
          return typeof O == "function" || typeof E == "function"
            ? _()({ dispatch: O, getState: E })
            : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
        };
      (t.defaults = R),
        (t.createLogger = _),
        (t.logger = G),
        (t.default = G),
        Object.defineProperty(t, "__esModule", { value: !0 });
    });
  });
  var vx = T((ite, yx) => {
    "use strict";
    function uu(t) {
      return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    uu.proto = function () {
      return (RegExp.escape = uu), uu;
    };
    yx.exports = uu;
  });
  var Oh = T((Mre, sw) => {
    function ZH(t) {
      return t == null;
    }
    sw.exports = ZH;
  });
  var kh = T((Nre, lw) => {
    var eG = "[object Object]";
    function tG(t) {
      var e = !1;
      if (t != null && typeof t.toString != "function")
        try {
          e = !!(t + "");
        } catch {}
      return e;
    }
    function rG(t, e) {
      return function (r) {
        return t(e(r));
      };
    }
    var nG = Function.prototype,
      cw = Object.prototype,
      uw = nG.toString,
      iG = cw.hasOwnProperty,
      aG = uw.call(Object),
      oG = cw.toString,
      sG = rG(Object.getPrototypeOf, Object);
    function cG(t) {
      return !!t && typeof t == "object";
    }
    function uG(t) {
      if (!cG(t) || oG.call(t) != eG || tG(t)) return !1;
      var e = sG(t);
      if (e === null) return !0;
      var r = iG.call(e, "constructor") && e.constructor;
      return typeof r == "function" && r instanceof r && uw.call(r) == aG;
    }
    lw.exports = uG;
  });
  var Uh = T((Dre, ww) => {
    var lG = 200,
      Nh = "__lodash_hash_undefined__",
      pG = 1 / 0,
      gw = 9007199254740991,
      fG = "[object Arguments]",
      dG = "[object Function]",
      hG = "[object GeneratorFunction]",
      gG = "[object Symbol]",
      mG = /[\\^$.*+?()[\]{}|]/g,
      yG = /^\[object .+?Constructor\]$/,
      vG = /^(?:0|[1-9]\d*)$/,
      _G =
        typeof globalThis == "object" &&
        globalThis &&
        globalThis.Object === Object &&
        globalThis,
      bG = typeof self == "object" && self && self.Object === Object && self,
      Dh = _G || bG || Function("return this")();
    function SG(t, e, r) {
      switch (r.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, r[0]);
        case 2:
          return t.call(e, r[0], r[1]);
        case 3:
          return t.call(e, r[0], r[1], r[2]);
      }
      return t.apply(e, r);
    }
    function TG(t, e) {
      var r = t ? t.length : 0;
      return !!r && xG(t, e, 0) > -1;
    }
    function EG(t, e, r) {
      for (var n = -1, i = t ? t.length : 0; ++n < i; )
        if (r(e, t[n])) return !0;
      return !1;
    }
    function mw(t, e) {
      for (var r = -1, n = t ? t.length : 0, i = Array(n); ++r < n; )
        i[r] = e(t[r], r, t);
      return i;
    }
    function Rh(t, e) {
      for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r];
      return t;
    }
    function IG(t, e, r, n) {
      for (var i = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
        if (e(t[a], a, t)) return a;
      return -1;
    }
    function xG(t, e, r) {
      if (e !== e) return IG(t, wG, r);
      for (var n = r - 1, i = t.length; ++n < i; ) if (t[n] === e) return n;
      return -1;
    }
    function wG(t) {
      return t !== t;
    }
    function AG(t, e) {
      for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
      return n;
    }
    function OG(t) {
      return function (e) {
        return t(e);
      };
    }
    function kG(t, e) {
      return t.has(e);
    }
    function CG(t, e) {
      return t?.[e];
    }
    function MG(t) {
      var e = !1;
      if (t != null && typeof t.toString != "function")
        try {
          e = !!(t + "");
        } catch {}
      return e;
    }
    function yw(t, e) {
      return function (r) {
        return t(e(r));
      };
    }
    var NG = Array.prototype,
      DG = Function.prototype,
      Ou = Object.prototype,
      Ch = Dh["__core-js_shared__"],
      pw = (function () {
        var t = /[^.]+$/.exec((Ch && Ch.keys && Ch.keys.IE_PROTO) || "");
        return t ? "Symbol(src)_1." + t : "";
      })(),
      vw = DG.toString,
      Qi = Ou.hasOwnProperty,
      Fh = Ou.toString,
      RG = RegExp(
        "^" +
          vw
            .call(Qi)
            .replace(mG, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      ),
      fw = Dh.Symbol,
      FG = yw(Object.getPrototypeOf, Object),
      PG = Ou.propertyIsEnumerable,
      LG = NG.splice,
      dw = fw ? fw.isConcatSpreadable : void 0,
      Mh = Object.getOwnPropertySymbols,
      hw = Math.max,
      UG = bw(Dh, "Map"),
      Do = bw(Object, "create");
    function ri(t) {
      var e = -1,
        r = t ? t.length : 0;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function qG() {
      this.__data__ = Do ? Do(null) : {};
    }
    function BG(t) {
      return this.has(t) && delete this.__data__[t];
    }
    function jG(t) {
      var e = this.__data__;
      if (Do) {
        var r = e[t];
        return r === Nh ? void 0 : r;
      }
      return Qi.call(e, t) ? e[t] : void 0;
    }
    function VG(t) {
      var e = this.__data__;
      return Do ? e[t] !== void 0 : Qi.call(e, t);
    }
    function WG(t, e) {
      var r = this.__data__;
      return (r[t] = Do && e === void 0 ? Nh : e), this;
    }
    ri.prototype.clear = qG;
    ri.prototype.delete = BG;
    ri.prototype.get = jG;
    ri.prototype.has = VG;
    ri.prototype.set = WG;
    function Yi(t) {
      var e = -1,
        r = t ? t.length : 0;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function HG() {
      this.__data__ = [];
    }
    function GG(t) {
      var e = this.__data__,
        r = ku(e, t);
      if (r < 0) return !1;
      var n = e.length - 1;
      return r == n ? e.pop() : LG.call(e, r, 1), !0;
    }
    function zG(t) {
      var e = this.__data__,
        r = ku(e, t);
      return r < 0 ? void 0 : e[r][1];
    }
    function $G(t) {
      return ku(this.__data__, t) > -1;
    }
    function KG(t, e) {
      var r = this.__data__,
        n = ku(r, t);
      return n < 0 ? r.push([t, e]) : (r[n][1] = e), this;
    }
    Yi.prototype.clear = HG;
    Yi.prototype.delete = GG;
    Yi.prototype.get = zG;
    Yi.prototype.has = $G;
    Yi.prototype.set = KG;
    function Ji(t) {
      var e = -1,
        r = t ? t.length : 0;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function QG() {
      this.__data__ = {
        hash: new ri(),
        map: new (UG || Yi)(),
        string: new ri(),
      };
    }
    function YG(t) {
      return Cu(this, t).delete(t);
    }
    function JG(t) {
      return Cu(this, t).get(t);
    }
    function XG(t) {
      return Cu(this, t).has(t);
    }
    function ZG(t, e) {
      return Cu(this, t).set(t, e), this;
    }
    Ji.prototype.clear = QG;
    Ji.prototype.delete = YG;
    Ji.prototype.get = JG;
    Ji.prototype.has = XG;
    Ji.prototype.set = ZG;
    function Au(t) {
      var e = -1,
        r = t ? t.length : 0;
      for (this.__data__ = new Ji(); ++e < r; ) this.add(t[e]);
    }
    function e6(t) {
      return this.__data__.set(t, Nh), this;
    }
    function t6(t) {
      return this.__data__.has(t);
    }
    Au.prototype.add = Au.prototype.push = e6;
    Au.prototype.has = t6;
    function r6(t, e) {
      var r = Ph(t) || Sw(t) ? AG(t.length, String) : [],
        n = r.length,
        i = !!n;
      for (var a in t)
        (e || Qi.call(t, a)) &&
          !(i && (a == "length" || h6(a, n))) &&
          r.push(a);
      return r;
    }
    function ku(t, e) {
      for (var r = t.length; r--; ) if (S6(t[r][0], e)) return r;
      return -1;
    }
    function n6(t, e, r, n) {
      var i = -1,
        a = TG,
        o = !0,
        s = t.length,
        c = [],
        u = e.length;
      if (!s) return c;
      r && (e = mw(e, OG(r))),
        n
          ? ((a = EG), (o = !1))
          : e.length >= lG && ((a = kG), (o = !1), (e = new Au(e)));
      e: for (; ++i < s; ) {
        var l = t[i],
          f = r ? r(l) : l;
        if (((l = n || l !== 0 ? l : 0), o && f === f)) {
          for (var p = u; p--; ) if (e[p] === f) continue e;
          c.push(l);
        } else a(e, f, n) || c.push(l);
      }
      return c;
    }
    function _w(t, e, r, n, i) {
      var a = -1,
        o = t.length;
      for (r || (r = d6), i || (i = []); ++a < o; ) {
        var s = t[a];
        e > 0 && r(s)
          ? e > 1
            ? _w(s, e - 1, r, n, i)
            : Rh(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    function i6(t, e, r) {
      var n = e(t);
      return Ph(t) ? n : Rh(n, r(t));
    }
    function a6(t) {
      if (!Lh(t) || m6(t)) return !1;
      var e = Ew(t) || MG(t) ? RG : yG;
      return e.test(b6(t));
    }
    function o6(t) {
      if (!Lh(t)) return v6(t);
      var e = y6(t),
        r = [];
      for (var n in t)
        (n == "constructor" && (e || !Qi.call(t, n))) || r.push(n);
      return r;
    }
    function s6(t, e) {
      return (
        (t = Object(t)),
        c6(t, e, function (r, n) {
          return n in t;
        })
      );
    }
    function c6(t, e, r) {
      for (var n = -1, i = e.length, a = {}; ++n < i; ) {
        var o = e[n],
          s = t[o];
        r(s, o) && (a[o] = s);
      }
      return a;
    }
    function u6(t, e) {
      return (
        (e = hw(e === void 0 ? t.length - 1 : e, 0)),
        function () {
          for (
            var r = arguments, n = -1, i = hw(r.length - e, 0), a = Array(i);
            ++n < i;

          )
            a[n] = r[e + n];
          n = -1;
          for (var o = Array(e + 1); ++n < e; ) o[n] = r[n];
          return (o[e] = a), SG(t, this, o);
        }
      );
    }
    function l6(t) {
      return i6(t, x6, f6);
    }
    function Cu(t, e) {
      var r = t.__data__;
      return g6(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
    }
    function bw(t, e) {
      var r = CG(t, e);
      return a6(r) ? r : void 0;
    }
    var p6 = Mh ? yw(Mh, Object) : xw,
      f6 = Mh
        ? function (t) {
            for (var e = []; t; ) Rh(e, p6(t)), (t = FG(t));
            return e;
          }
        : xw;
    function d6(t) {
      return Ph(t) || Sw(t) || !!(dw && t && t[dw]);
    }
    function h6(t, e) {
      return (
        (e = e ?? gw),
        !!e &&
          (typeof t == "number" || vG.test(t)) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
      );
    }
    function g6(t) {
      var e = typeof t;
      return e == "string" || e == "number" || e == "symbol" || e == "boolean"
        ? t !== "__proto__"
        : t === null;
    }
    function m6(t) {
      return !!pw && pw in t;
    }
    function y6(t) {
      var e = t && t.constructor,
        r = (typeof e == "function" && e.prototype) || Ou;
      return t === r;
    }
    function v6(t) {
      var e = [];
      if (t != null) for (var r in Object(t)) e.push(r);
      return e;
    }
    function _6(t) {
      if (typeof t == "string" || I6(t)) return t;
      var e = t + "";
      return e == "0" && 1 / t == -pG ? "-0" : e;
    }
    function b6(t) {
      if (t != null) {
        try {
          return vw.call(t);
        } catch {}
        try {
          return t + "";
        } catch {}
      }
      return "";
    }
    function S6(t, e) {
      return t === e || (t !== t && e !== e);
    }
    function Sw(t) {
      return (
        T6(t) &&
        Qi.call(t, "callee") &&
        (!PG.call(t, "callee") || Fh.call(t) == fG)
      );
    }
    var Ph = Array.isArray;
    function Tw(t) {
      return t != null && E6(t.length) && !Ew(t);
    }
    function T6(t) {
      return Iw(t) && Tw(t);
    }
    function Ew(t) {
      var e = Lh(t) ? Fh.call(t) : "";
      return e == dG || e == hG;
    }
    function E6(t) {
      return typeof t == "number" && t > -1 && t % 1 == 0 && t <= gw;
    }
    function Lh(t) {
      var e = typeof t;
      return !!t && (e == "object" || e == "function");
    }
    function Iw(t) {
      return !!t && typeof t == "object";
    }
    function I6(t) {
      return typeof t == "symbol" || (Iw(t) && Fh.call(t) == gG);
    }
    function x6(t) {
      return Tw(t) ? r6(t, !0) : o6(t);
    }
    var w6 = u6(function (t, e) {
      return t == null ? {} : ((e = mw(_w(e, 1), _6)), s6(t, n6(l6(t), e)));
    });
    function xw() {
      return [];
    }
    ww.exports = w6;
  });
  var h0 = T((Ro, Zi) => {
    var A6 = 200,
      qw = "Expected a function",
      Xh = "__lodash_hash_undefined__",
      Lu = 1,
      ea = 2,
      Bw = 1 / 0,
      jw = 9007199254740991,
      Mu = "[object Arguments]",
      Wh = "[object Array]",
      Vw = "[object Boolean]",
      Ww = "[object Date]",
      Hw = "[object Error]",
      Gw = "[object Function]",
      O6 = "[object GeneratorFunction]",
      Nu = "[object Map]",
      zw = "[object Number]",
      Xi = "[object Object]",
      Cw = "[object Promise]",
      $w = "[object RegExp]",
      Du = "[object Set]",
      Kw = "[object String]",
      Qw = "[object Symbol]",
      Hh = "[object WeakMap]",
      Yw = "[object ArrayBuffer]",
      Ru = "[object DataView]",
      k6 = "[object Float32Array]",
      C6 = "[object Float64Array]",
      M6 = "[object Int8Array]",
      N6 = "[object Int16Array]",
      D6 = "[object Int32Array]",
      R6 = "[object Uint8Array]",
      F6 = "[object Uint8ClampedArray]",
      P6 = "[object Uint16Array]",
      L6 = "[object Uint32Array]",
      U6 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      q6 = /^\w*$/,
      B6 = /^\./,
      j6 =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      V6 = /[\\^$.*+?()[\]{}|]/g,
      W6 = /\\(\\)?/g,
      H6 = /^\[object .+?Constructor\]$/,
      G6 = /^(?:0|[1-9]\d*)$/,
      Me = {};
    Me[k6] =
      Me[C6] =
      Me[M6] =
      Me[N6] =
      Me[D6] =
      Me[R6] =
      Me[F6] =
      Me[P6] =
      Me[L6] =
        !0;
    Me[Mu] =
      Me[Wh] =
      Me[Yw] =
      Me[Vw] =
      Me[Ru] =
      Me[Ww] =
      Me[Hw] =
      Me[Gw] =
      Me[Nu] =
      Me[zw] =
      Me[Xi] =
      Me[$w] =
      Me[Du] =
      Me[Kw] =
      Me[Hh] =
        !1;
    var Jw =
        typeof globalThis == "object" &&
        globalThis &&
        globalThis.Object === Object &&
        globalThis,
      z6 = typeof self == "object" && self && self.Object === Object && self,
      bn = Jw || z6 || Function("return this")(),
      Xw = typeof Ro == "object" && Ro && !Ro.nodeType && Ro,
      Mw = Xw && typeof Zi == "object" && Zi && !Zi.nodeType && Zi,
      $6 = Mw && Mw.exports === Xw,
      Nw = $6 && Jw.process,
      Dw = (function () {
        try {
          return Nw && Nw.binding("util");
        } catch {}
      })(),
      Rw = Dw && Dw.isTypedArray;
    function Zw(t, e) {
      for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r];
      return t;
    }
    function K6(t, e) {
      for (var r = -1, n = t ? t.length : 0; ++r < n; )
        if (e(t[r], r, t)) return !0;
      return !1;
    }
    function Q6(t) {
      return function (e) {
        return e?.[t];
      };
    }
    function Y6(t, e) {
      for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
      return n;
    }
    function J6(t) {
      return function (e) {
        return t(e);
      };
    }
    function X6(t, e) {
      return t?.[e];
    }
    function Gh(t) {
      var e = !1;
      if (t != null && typeof t.toString != "function")
        try {
          e = !!(t + "");
        } catch {}
      return e;
    }
    function Z6(t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (n, i) {
          r[++e] = [i, n];
        }),
        r
      );
    }
    function Zh(t, e) {
      return function (r) {
        return t(e(r));
      };
    }
    function ez(t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (n) {
          r[++e] = n;
        }),
        r
      );
    }
    var tz = Array.prototype,
      rz = Function.prototype,
      Uu = Object.prototype,
      jh = bn["__core-js_shared__"],
      Fw = (function () {
        var t = /[^.]+$/.exec((jh && jh.keys && jh.keys.IE_PROTO) || "");
        return t ? "Symbol(src)_1." + t : "";
      })(),
      e0 = rz.toString,
      wr = Uu.hasOwnProperty,
      ta = Uu.toString,
      nz = RegExp(
        "^" +
          e0
            .call(wr)
            .replace(V6, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      ),
      Pw = bn.Symbol,
      Lw = bn.Uint8Array,
      iz = Zh(Object.getPrototypeOf, Object),
      az = Uu.propertyIsEnumerable,
      oz = tz.splice,
      zh = Object.getOwnPropertySymbols,
      sz = Zh(Object.keys, Object),
      $h = ra(bn, "DataView"),
      Fo = ra(bn, "Map"),
      Kh = ra(bn, "Promise"),
      Qh = ra(bn, "Set"),
      Yh = ra(bn, "WeakMap"),
      Po = ra(Object, "create"),
      cz = ii($h),
      uz = ii(Fo),
      lz = ii(Kh),
      pz = ii(Qh),
      fz = ii(Yh),
      Fu = Pw ? Pw.prototype : void 0,
      Vh = Fu ? Fu.valueOf : void 0,
      Uw = Fu ? Fu.toString : void 0;
    function ni(t) {
      var e = -1,
        r = t ? t.length : 0;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function dz() {
      this.__data__ = Po ? Po(null) : {};
    }
    function hz(t) {
      return this.has(t) && delete this.__data__[t];
    }
    function gz(t) {
      var e = this.__data__;
      if (Po) {
        var r = e[t];
        return r === Xh ? void 0 : r;
      }
      return wr.call(e, t) ? e[t] : void 0;
    }
    function mz(t) {
      var e = this.__data__;
      return Po ? e[t] !== void 0 : wr.call(e, t);
    }
    function yz(t, e) {
      var r = this.__data__;
      return (r[t] = Po && e === void 0 ? Xh : e), this;
    }
    ni.prototype.clear = dz;
    ni.prototype.delete = hz;
    ni.prototype.get = gz;
    ni.prototype.has = mz;
    ni.prototype.set = yz;
    function Gr(t) {
      var e = -1,
        r = t ? t.length : 0;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function vz() {
      this.__data__ = [];
    }
    function _z(t) {
      var e = this.__data__,
        r = qu(e, t);
      if (r < 0) return !1;
      var n = e.length - 1;
      return r == n ? e.pop() : oz.call(e, r, 1), !0;
    }
    function bz(t) {
      var e = this.__data__,
        r = qu(e, t);
      return r < 0 ? void 0 : e[r][1];
    }
    function Sz(t) {
      return qu(this.__data__, t) > -1;
    }
    function Tz(t, e) {
      var r = this.__data__,
        n = qu(r, t);
      return n < 0 ? r.push([t, e]) : (r[n][1] = e), this;
    }
    Gr.prototype.clear = vz;
    Gr.prototype.delete = _z;
    Gr.prototype.get = bz;
    Gr.prototype.has = Sz;
    Gr.prototype.set = Tz;
    function zr(t) {
      var e = -1,
        r = t ? t.length : 0;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function Ez() {
      this.__data__ = {
        hash: new ni(),
        map: new (Fo || Gr)(),
        string: new ni(),
      };
    }
    function Iz(t) {
      return Bu(this, t).delete(t);
    }
    function xz(t) {
      return Bu(this, t).get(t);
    }
    function wz(t) {
      return Bu(this, t).has(t);
    }
    function Az(t, e) {
      return Bu(this, t).set(t, e), this;
    }
    zr.prototype.clear = Ez;
    zr.prototype.delete = Iz;
    zr.prototype.get = xz;
    zr.prototype.has = wz;
    zr.prototype.set = Az;
    function Pu(t) {
      var e = -1,
        r = t ? t.length : 0;
      for (this.__data__ = new zr(); ++e < r; ) this.add(t[e]);
    }
    function Oz(t) {
      return this.__data__.set(t, Xh), this;
    }
    function kz(t) {
      return this.__data__.has(t);
    }
    Pu.prototype.add = Pu.prototype.push = Oz;
    Pu.prototype.has = kz;
    function Hr(t) {
      this.__data__ = new Gr(t);
    }
    function Cz() {
      this.__data__ = new Gr();
    }
    function Mz(t) {
      return this.__data__.delete(t);
    }
    function Nz(t) {
      return this.__data__.get(t);
    }
    function Dz(t) {
      return this.__data__.has(t);
    }
    function Rz(t, e) {
      var r = this.__data__;
      if (r instanceof Gr) {
        var n = r.__data__;
        if (!Fo || n.length < A6 - 1) return n.push([t, e]), this;
        r = this.__data__ = new zr(n);
      }
      return r.set(t, e), this;
    }
    Hr.prototype.clear = Cz;
    Hr.prototype.delete = Mz;
    Hr.prototype.get = Nz;
    Hr.prototype.has = Dz;
    Hr.prototype.set = Rz;
    function t0(t, e) {
      var r = _n(t) || p0(t) ? Y6(t.length, String) : [],
        n = r.length,
        i = !!n;
      for (var a in t)
        (e || wr.call(t, a)) &&
          !(i && (a == "length" || o0(a, n))) &&
          r.push(a);
      return r;
    }
    function qu(t, e) {
      for (var r = t.length; r--; ) if (l0(t[r][0], e)) return r;
      return -1;
    }
    function r0(t, e) {
      e = ju(e, t) ? [e] : i0(e);
      for (var r = 0, n = e.length; t != null && r < n; ) t = t[Vu(e[r++])];
      return r && r == n ? t : void 0;
    }
    function Fz(t, e, r) {
      var n = e(t);
      return _n(t) ? n : Zw(n, r(t));
    }
    function Pz(t) {
      return ta.call(t);
    }
    function Lz(t, e) {
      return t != null && e in Object(t);
    }
    function eg(t, e, r, n, i) {
      return t === e
        ? !0
        : t == null || e == null || (!Lo(t) && !Wu(e))
        ? t !== t && e !== e
        : Uz(t, e, eg, r, n, i);
    }
    function Uz(t, e, r, n, i, a) {
      var o = _n(t),
        s = _n(e),
        c = Wh,
        u = Wh;
      o || ((c = vn(t)), (c = c == Mu ? Xi : c)),
        s || ((u = vn(e)), (u = u == Mu ? Xi : u));
      var l = c == Xi && !Gh(t),
        f = u == Xi && !Gh(e),
        p = c == u;
      if (p && !l)
        return (
          a || (a = new Hr()),
          o || c3(t) ? a0(t, e, r, n, i, a) : Qz(t, e, c, r, n, i, a)
        );
      if (!(i & ea)) {
        var d = l && wr.call(t, "__wrapped__"),
          g = f && wr.call(e, "__wrapped__");
        if (d || g) {
          var v = d ? t.value() : t,
            y = g ? e.value() : e;
          return a || (a = new Hr()), r(v, y, n, i, a);
        }
      }
      return p ? (a || (a = new Hr()), Yz(t, e, r, n, i, a)) : !1;
    }
    function qz(t, e, r, n) {
      var i = r.length,
        a = i,
        o = !n;
      if (t == null) return !a;
      for (t = Object(t); i--; ) {
        var s = r[i];
        if (o && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
      }
      for (; ++i < a; ) {
        s = r[i];
        var c = s[0],
          u = t[c],
          l = s[1];
        if (o && s[2]) {
          if (u === void 0 && !(c in t)) return !1;
        } else {
          var f = new Hr();
          if (n) var p = n(u, l, c, t, e, f);
          if (!(p === void 0 ? eg(l, u, n, Lu | ea, f) : p)) return !1;
        }
      }
      return !0;
    }
    function Bz(t) {
      if (!Lo(t) || n3(t)) return !1;
      var e = f0(t) || Gh(t) ? nz : H6;
      return e.test(ii(t));
    }
    function jz(t) {
      return Wu(t) && ng(t.length) && !!Me[ta.call(t)];
    }
    function n0(t) {
      return typeof t == "function"
        ? t
        : t == null
        ? g3
        : typeof t == "object"
        ? _n(t)
          ? Gz(t[0], t[1])
          : Hz(t)
        : m3(t);
    }
    function Vz(t) {
      if (!s0(t)) return sz(t);
      var e = [];
      for (var r in Object(t)) wr.call(t, r) && r != "constructor" && e.push(r);
      return e;
    }
    function Wz(t) {
      if (!Lo(t)) return i3(t);
      var e = s0(t),
        r = [];
      for (var n in t)
        (n == "constructor" && (e || !wr.call(t, n))) || r.push(n);
      return r;
    }
    function Hz(t) {
      var e = Xz(t);
      return e.length == 1 && e[0][2]
        ? u0(e[0][0], e[0][1])
        : function (r) {
            return r === t || qz(r, t, e);
          };
    }
    function Gz(t, e) {
      return ju(t) && c0(e)
        ? u0(Vu(t), e)
        : function (r) {
            var n = l3(r, t);
            return n === void 0 && n === e
              ? p3(r, t)
              : eg(e, n, void 0, Lu | ea);
          };
    }
    function zz(t, e, r) {
      for (var n = -1, i = e.length, a = {}; ++n < i; ) {
        var o = e[n],
          s = t[o];
        r(s, o) && (a[o] = s);
      }
      return a;
    }
    function $z(t) {
      return function (e) {
        return r0(e, t);
      };
    }
    function Kz(t) {
      if (typeof t == "string") return t;
      if (ig(t)) return Uw ? Uw.call(t) : "";
      var e = t + "";
      return e == "0" && 1 / t == -Bw ? "-0" : e;
    }
    function i0(t) {
      return _n(t) ? t : a3(t);
    }
    function a0(t, e, r, n, i, a) {
      var o = i & ea,
        s = t.length,
        c = e.length;
      if (s != c && !(o && c > s)) return !1;
      var u = a.get(t);
      if (u && a.get(e)) return u == e;
      var l = -1,
        f = !0,
        p = i & Lu ? new Pu() : void 0;
      for (a.set(t, e), a.set(e, t); ++l < s; ) {
        var d = t[l],
          g = e[l];
        if (n) var v = o ? n(g, d, l, e, t, a) : n(d, g, l, t, e, a);
        if (v !== void 0) {
          if (v) continue;
          f = !1;
          break;
        }
        if (p) {
          if (
            !K6(e, function (y, m) {
              if (!p.has(m) && (d === y || r(d, y, n, i, a))) return p.add(m);
            })
          ) {
            f = !1;
            break;
          }
        } else if (!(d === g || r(d, g, n, i, a))) {
          f = !1;
          break;
        }
      }
      return a.delete(t), a.delete(e), f;
    }
    function Qz(t, e, r, n, i, a, o) {
      switch (r) {
        case Ru:
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
            return !1;
          (t = t.buffer), (e = e.buffer);
        case Yw:
          return !(t.byteLength != e.byteLength || !n(new Lw(t), new Lw(e)));
        case Vw:
        case Ww:
        case zw:
          return l0(+t, +e);
        case Hw:
          return t.name == e.name && t.message == e.message;
        case $w:
        case Kw:
          return t == e + "";
        case Nu:
          var s = Z6;
        case Du:
          var c = a & ea;
          if ((s || (s = ez), t.size != e.size && !c)) return !1;
          var u = o.get(t);
          if (u) return u == e;
          (a |= Lu), o.set(t, e);
          var l = a0(s(t), s(e), n, i, a, o);
          return o.delete(t), l;
        case Qw:
          if (Vh) return Vh.call(t) == Vh.call(e);
      }
      return !1;
    }
    function Yz(t, e, r, n, i, a) {
      var o = i & ea,
        s = Jh(t),
        c = s.length,
        u = Jh(e),
        l = u.length;
      if (c != l && !o) return !1;
      for (var f = c; f--; ) {
        var p = s[f];
        if (!(o ? p in e : wr.call(e, p))) return !1;
      }
      var d = a.get(t);
      if (d && a.get(e)) return d == e;
      var g = !0;
      a.set(t, e), a.set(e, t);
      for (var v = o; ++f < c; ) {
        p = s[f];
        var y = t[p],
          m = e[p];
        if (n) var I = o ? n(m, y, p, e, t, a) : n(y, m, p, t, e, a);
        if (!(I === void 0 ? y === m || r(y, m, n, i, a) : I)) {
          g = !1;
          break;
        }
        v || (v = p == "constructor");
      }
      if (g && !v) {
        var b = t.constructor,
          w = e.constructor;
        b != w &&
          "constructor" in t &&
          "constructor" in e &&
          !(
            typeof b == "function" &&
            b instanceof b &&
            typeof w == "function" &&
            w instanceof w
          ) &&
          (g = !1);
      }
      return a.delete(t), a.delete(e), g;
    }
    function Jz(t) {
      return Fz(t, f3, e3);
    }
    function Bu(t, e) {
      var r = t.__data__;
      return r3(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
    }
    function Xz(t) {
      for (var e = Jh(t), r = e.length; r--; ) {
        var n = e[r],
          i = t[n];
        e[r] = [n, i, c0(i)];
      }
      return e;
    }
    function ra(t, e) {
      var r = X6(t, e);
      return Bz(r) ? r : void 0;
    }
    var Zz = zh ? Zh(zh, Object) : d0,
      e3 = zh
        ? function (t) {
            for (var e = []; t; ) Zw(e, Zz(t)), (t = iz(t));
            return e;
          }
        : d0,
      vn = Pz;
    (($h && vn(new $h(new ArrayBuffer(1))) != Ru) ||
      (Fo && vn(new Fo()) != Nu) ||
      (Kh && vn(Kh.resolve()) != Cw) ||
      (Qh && vn(new Qh()) != Du) ||
      (Yh && vn(new Yh()) != Hh)) &&
      (vn = function (t) {
        var e = ta.call(t),
          r = e == Xi ? t.constructor : void 0,
          n = r ? ii(r) : void 0;
        if (n)
          switch (n) {
            case cz:
              return Ru;
            case uz:
              return Nu;
            case lz:
              return Cw;
            case pz:
              return Du;
            case fz:
              return Hh;
          }
        return e;
      });
    function t3(t, e, r) {
      e = ju(e, t) ? [e] : i0(e);
      for (var n, i = -1, o = e.length; ++i < o; ) {
        var a = Vu(e[i]);
        if (!(n = t != null && r(t, a))) break;
        t = t[a];
      }
      if (n) return n;
      var o = t ? t.length : 0;
      return !!o && ng(o) && o0(a, o) && (_n(t) || p0(t));
    }
    function o0(t, e) {
      return (
        (e = e ?? jw),
        !!e &&
          (typeof t == "number" || G6.test(t)) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
      );
    }
    function ju(t, e) {
      if (_n(t)) return !1;
      var r = typeof t;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        t == null ||
        ig(t)
        ? !0
        : q6.test(t) || !U6.test(t) || (e != null && t in Object(e));
    }
    function r3(t) {
      var e = typeof t;
      return e == "string" || e == "number" || e == "symbol" || e == "boolean"
        ? t !== "__proto__"
        : t === null;
    }
    function n3(t) {
      return !!Fw && Fw in t;
    }
    function s0(t) {
      var e = t && t.constructor,
        r = (typeof e == "function" && e.prototype) || Uu;
      return t === r;
    }
    function c0(t) {
      return t === t && !Lo(t);
    }
    function u0(t, e) {
      return function (r) {
        return r == null ? !1 : r[t] === e && (e !== void 0 || t in Object(r));
      };
    }
    function i3(t) {
      var e = [];
      if (t != null) for (var r in Object(t)) e.push(r);
      return e;
    }
    var a3 = tg(function (t) {
      t = u3(t);
      var e = [];
      return (
        B6.test(t) && e.push(""),
        t.replace(j6, function (r, n, i, a) {
          e.push(i ? a.replace(W6, "$1") : n || r);
        }),
        e
      );
    });
    function Vu(t) {
      if (typeof t == "string" || ig(t)) return t;
      var e = t + "";
      return e == "0" && 1 / t == -Bw ? "-0" : e;
    }
    function ii(t) {
      if (t != null) {
        try {
          return e0.call(t);
        } catch {}
        try {
          return t + "";
        } catch {}
      }
      return "";
    }
    function tg(t, e) {
      if (typeof t != "function" || (e && typeof e != "function"))
        throw new TypeError(qw);
      var r = function () {
        var n = arguments,
          i = e ? e.apply(this, n) : n[0],
          a = r.cache;
        if (a.has(i)) return a.get(i);
        var o = t.apply(this, n);
        return (r.cache = a.set(i, o)), o;
      };
      return (r.cache = new (tg.Cache || zr)()), r;
    }
    tg.Cache = zr;
    function o3(t) {
      if (typeof t != "function") throw new TypeError(qw);
      return function () {
        var e = arguments;
        switch (e.length) {
          case 0:
            return !t.call(this);
          case 1:
            return !t.call(this, e[0]);
          case 2:
            return !t.call(this, e[0], e[1]);
          case 3:
            return !t.call(this, e[0], e[1], e[2]);
        }
        return !t.apply(this, e);
      };
    }
    function l0(t, e) {
      return t === e || (t !== t && e !== e);
    }
    function p0(t) {
      return (
        s3(t) &&
        wr.call(t, "callee") &&
        (!az.call(t, "callee") || ta.call(t) == Mu)
      );
    }
    var _n = Array.isArray;
    function rg(t) {
      return t != null && ng(t.length) && !f0(t);
    }
    function s3(t) {
      return Wu(t) && rg(t);
    }
    function f0(t) {
      var e = Lo(t) ? ta.call(t) : "";
      return e == Gw || e == O6;
    }
    function ng(t) {
      return typeof t == "number" && t > -1 && t % 1 == 0 && t <= jw;
    }
    function Lo(t) {
      var e = typeof t;
      return !!t && (e == "object" || e == "function");
    }
    function Wu(t) {
      return !!t && typeof t == "object";
    }
    function ig(t) {
      return typeof t == "symbol" || (Wu(t) && ta.call(t) == Qw);
    }
    var c3 = Rw ? J6(Rw) : jz;
    function u3(t) {
      return t == null ? "" : Kz(t);
    }
    function l3(t, e, r) {
      var n = t == null ? void 0 : r0(t, e);
      return n === void 0 ? r : n;
    }
    function p3(t, e) {
      return t != null && t3(t, e, Lz);
    }
    function Jh(t) {
      return rg(t) ? t0(t) : Vz(t);
    }
    function f3(t) {
      return rg(t) ? t0(t, !0) : Wz(t);
    }
    function d3(t, e) {
      return h3(t, o3(n0(e)));
    }
    function h3(t, e) {
      return t == null ? {} : zz(t, Jz(t), n0(e));
    }
    function g3(t) {
      return t;
    }
    function m3(t) {
      return ju(t) ? Q6(Vu(t)) : $z(t);
    }
    function d0() {
      return [];
    }
    Zi.exports = d3;
  });
  var sk = T((Zde, ok) => {
    var HK = Ds();
    function GK(t, e) {
      return HK(t, e);
    }
    ok.exports = GK;
  });
  var pk = T((yhe, lk) => {
    function n4(t, e) {
      for (
        var r = -1, n = t == null ? 0 : t.length;
        ++r < n && e(t[r], r, t) !== !1;

      );
      return t;
    }
    lk.exports = n4;
  });
  var Am = T((vhe, fk) => {
    var i4 = Ts(),
      a4 = Ia(),
      o4 = Object.prototype,
      s4 = o4.hasOwnProperty;
    function c4(t, e, r) {
      var n = t[e];
      (!(s4.call(t, e) && a4(n, r)) || (r === void 0 && !(e in t))) &&
        i4(t, e, r);
    }
    fk.exports = c4;
  });
  var ba = T((_he, dk) => {
    var u4 = Am(),
      l4 = Ts();
    function p4(t, e, r, n) {
      var i = !r;
      r || (r = {});
      for (var a = -1, o = e.length; ++a < o; ) {
        var s = e[a],
          c = n ? n(r[s], t[s], s, r, t) : void 0;
        c === void 0 && (c = t[s]), i ? l4(r, s, c) : u4(r, s, c);
      }
      return r;
    }
    dk.exports = p4;
  });
  var gk = T((bhe, hk) => {
    var f4 = ba(),
      d4 = Ti();
    function h4(t, e) {
      return t && f4(e, d4(e), t);
    }
    hk.exports = h4;
  });
  var yk = T((She, mk) => {
    function g4(t) {
      var e = [];
      if (t != null) for (var r in Object(t)) e.push(r);
      return e;
    }
    mk.exports = g4;
  });
  var _k = T((The, vk) => {
    var m4 = rn(),
      y4 = Os(),
      v4 = yk(),
      _4 = Object.prototype,
      b4 = _4.hasOwnProperty;
    function S4(t) {
      if (!m4(t)) return v4(t);
      var e = y4(t),
        r = [];
      for (var n in t)
        (n == "constructor" && (e || !b4.call(t, n))) || r.push(n);
      return r;
    }
    vk.exports = S4;
  });
  var Pl = T((Ehe, bk) => {
    var T4 = tp(),
      E4 = _k(),
      I4 = Rn();
    function x4(t) {
      return I4(t) ? T4(t, !0) : E4(t);
    }
    bk.exports = x4;
  });
  var Tk = T((Ihe, Sk) => {
    var w4 = ba(),
      A4 = Pl();
    function O4(t, e) {
      return t && w4(e, A4(e), t);
    }
    Sk.exports = O4;
  });
  var Ak = T((hs, Sa) => {
    var k4 = $t(),
      wk = typeof hs == "object" && hs && !hs.nodeType && hs,
      Ek = wk && typeof Sa == "object" && Sa && !Sa.nodeType && Sa,
      C4 = Ek && Ek.exports === wk,
      Ik = C4 ? k4.Buffer : void 0,
      xk = Ik ? Ik.allocUnsafe : void 0;
    function M4(t, e) {
      if (e) return t.slice();
      var r = t.length,
        n = xk ? xk(r) : new t.constructor(r);
      return t.copy(n), n;
    }
    Sa.exports = M4;
  });
  var kk = T((xhe, Ok) => {
    function N4(t, e) {
      var r = -1,
        n = t.length;
      for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
      return e;
    }
    Ok.exports = N4;
  });
  var Mk = T((whe, Ck) => {
    var D4 = ba(),
      R4 = Ms();
    function F4(t, e) {
      return D4(t, R4(t), e);
    }
    Ck.exports = F4;
  });
  var Ll = T((Ahe, Nk) => {
    var P4 = rp(),
      L4 = P4(Object.getPrototypeOf, Object);
    Nk.exports = L4;
  });
  var Om = T((Ohe, Dk) => {
    var U4 = Cs(),
      q4 = Ll(),
      B4 = Ms(),
      j4 = cp(),
      V4 = Object.getOwnPropertySymbols,
      W4 = V4
        ? function (t) {
            for (var e = []; t; ) U4(e, B4(t)), (t = q4(t));
            return e;
          }
        : j4;
    Dk.exports = W4;
  });
  var Fk = T((khe, Rk) => {
    var H4 = ba(),
      G4 = Om();
    function z4(t, e) {
      return H4(t, G4(t), e);
    }
    Rk.exports = z4;
  });
  var km = T((Che, Pk) => {
    var $4 = sp(),
      K4 = Om(),
      Q4 = Pl();
    function Y4(t) {
      return $4(t, Q4, K4);
    }
    Pk.exports = Y4;
  });
  var Uk = T((Mhe, Lk) => {
    var J4 = Object.prototype,
      X4 = J4.hasOwnProperty;
    function Z4(t) {
      var e = t.length,
        r = new t.constructor(e);
      return (
        e &&
          typeof t[0] == "string" &&
          X4.call(t, "index") &&
          ((r.index = t.index), (r.input = t.input)),
        r
      );
    }
    Lk.exports = Z4;
  });
  var Ul = T((Nhe, Bk) => {
    var qk = ap();
    function e8(t) {
      var e = new t.constructor(t.byteLength);
      return new qk(e).set(new qk(t)), e;
    }
    Bk.exports = e8;
  });
  var Vk = T((Dhe, jk) => {
    var t8 = Ul();
    function r8(t, e) {
      var r = e ? t8(t.buffer) : t.buffer;
      return new t.constructor(r, t.byteOffset, t.byteLength);
    }
    jk.exports = r8;
  });
  var Hk = T((Rhe, Wk) => {
    var n8 = /\w*$/;
    function i8(t) {
      var e = new t.constructor(t.source, n8.exec(t));
      return (e.lastIndex = t.lastIndex), e;
    }
    Wk.exports = i8;
  });
  var Qk = T((Fhe, Kk) => {
    var Gk = Nn(),
      zk = Gk ? Gk.prototype : void 0,
      $k = zk ? zk.valueOf : void 0;
    function a8(t) {
      return $k ? Object($k.call(t)) : {};
    }
    Kk.exports = a8;
  });
  var Jk = T((Phe, Yk) => {
    var o8 = Ul();
    function s8(t, e) {
      var r = e ? o8(t.buffer) : t.buffer;
      return new t.constructor(r, t.byteOffset, t.length);
    }
    Yk.exports = s8;
  });
  var Zk = T((Lhe, Xk) => {
    var c8 = Ul(),
      u8 = Vk(),
      l8 = Hk(),
      p8 = Qk(),
      f8 = Jk(),
      d8 = "[object Boolean]",
      h8 = "[object Date]",
      g8 = "[object Map]",
      m8 = "[object Number]",
      y8 = "[object RegExp]",
      v8 = "[object Set]",
      _8 = "[object String]",
      b8 = "[object Symbol]",
      S8 = "[object ArrayBuffer]",
      T8 = "[object DataView]",
      E8 = "[object Float32Array]",
      I8 = "[object Float64Array]",
      x8 = "[object Int8Array]",
      w8 = "[object Int16Array]",
      A8 = "[object Int32Array]",
      O8 = "[object Uint8Array]",
      k8 = "[object Uint8ClampedArray]",
      C8 = "[object Uint16Array]",
      M8 = "[object Uint32Array]";
    function N8(t, e, r) {
      var n = t.constructor;
      switch (e) {
        case S8:
          return c8(t);
        case d8:
        case h8:
          return new n(+t);
        case T8:
          return u8(t, r);
        case E8:
        case I8:
        case x8:
        case w8:
        case A8:
        case O8:
        case k8:
        case C8:
        case M8:
          return f8(t, r);
        case g8:
          return new n();
        case m8:
        case _8:
          return new n(t);
        case y8:
          return l8(t);
        case v8:
          return new n();
        case b8:
          return p8(t);
      }
    }
    Xk.exports = N8;
  });
  var rC = T((Uhe, tC) => {
    var D8 = rn(),
      eC = Object.create,
      R8 = (function () {
        function t() {}
        return function (e) {
          if (!D8(e)) return {};
          if (eC) return eC(e);
          t.prototype = e;
          var r = new t();
          return (t.prototype = void 0), r;
        };
      })();
    tC.exports = R8;
  });
  var iC = T((qhe, nC) => {
    var F8 = rC(),
      P8 = Ll(),
      L8 = Os();
    function U8(t) {
      return typeof t.constructor == "function" && !L8(t) ? F8(P8(t)) : {};
    }
    nC.exports = U8;
  });
  var oC = T((Bhe, aC) => {
    var q8 = Na(),
      B8 = fr(),
      j8 = "[object Map]";
    function V8(t) {
      return B8(t) && q8(t) == j8;
    }
    aC.exports = V8;
  });
  var lC = T((jhe, uC) => {
    var W8 = oC(),
      H8 = bi(),
      sC = As(),
      cC = sC && sC.isMap,
      G8 = cC ? H8(cC) : W8;
    uC.exports = G8;
  });
  var fC = T((Vhe, pC) => {
    var z8 = Na(),
      $8 = fr(),
      K8 = "[object Set]";
    function Q8(t) {
      return $8(t) && z8(t) == K8;
    }
    pC.exports = Q8;
  });
  var mC = T((Whe, gC) => {
    var Y8 = fC(),
      J8 = bi(),
      dC = As(),
      hC = dC && dC.isSet,
      X8 = hC ? J8(hC) : Y8;
    gC.exports = X8;
  });
  var SC = T((Hhe, bC) => {
    var Z8 = ks(),
      e5 = pk(),
      t5 = Am(),
      r5 = gk(),
      n5 = Tk(),
      i5 = Ak(),
      a5 = kk(),
      o5 = Mk(),
      s5 = Fk(),
      c5 = up(),
      u5 = km(),
      l5 = Na(),
      p5 = Uk(),
      f5 = Zk(),
      d5 = iC(),
      h5 = Rt(),
      g5 = Is(),
      m5 = lC(),
      y5 = rn(),
      v5 = mC(),
      _5 = Ti(),
      b5 = Pl(),
      S5 = 1,
      T5 = 2,
      E5 = 4,
      yC = "[object Arguments]",
      I5 = "[object Array]",
      x5 = "[object Boolean]",
      w5 = "[object Date]",
      A5 = "[object Error]",
      vC = "[object Function]",
      O5 = "[object GeneratorFunction]",
      k5 = "[object Map]",
      C5 = "[object Number]",
      _C = "[object Object]",
      M5 = "[object RegExp]",
      N5 = "[object Set]",
      D5 = "[object String]",
      R5 = "[object Symbol]",
      F5 = "[object WeakMap]",
      P5 = "[object ArrayBuffer]",
      L5 = "[object DataView]",
      U5 = "[object Float32Array]",
      q5 = "[object Float64Array]",
      B5 = "[object Int8Array]",
      j5 = "[object Int16Array]",
      V5 = "[object Int32Array]",
      W5 = "[object Uint8Array]",
      H5 = "[object Uint8ClampedArray]",
      G5 = "[object Uint16Array]",
      z5 = "[object Uint32Array]",
      xe = {};
    xe[yC] =
      xe[I5] =
      xe[P5] =
      xe[L5] =
      xe[x5] =
      xe[w5] =
      xe[U5] =
      xe[q5] =
      xe[B5] =
      xe[j5] =
      xe[V5] =
      xe[k5] =
      xe[C5] =
      xe[_C] =
      xe[M5] =
      xe[N5] =
      xe[D5] =
      xe[R5] =
      xe[W5] =
      xe[H5] =
      xe[G5] =
      xe[z5] =
        !0;
    xe[A5] = xe[vC] = xe[F5] = !1;
    function ql(t, e, r, n, i, a) {
      var o,
        s = e & S5,
        c = e & T5,
        u = e & E5;
      if ((r && (o = i ? r(t, n, i, a) : r(t)), o !== void 0)) return o;
      if (!y5(t)) return t;
      var l = h5(t);
      if (l) {
        if (((o = p5(t)), !s)) return a5(t, o);
      } else {
        var f = l5(t),
          p = f == vC || f == O5;
        if (g5(t)) return i5(t, s);
        if (f == _C || f == yC || (p && !i)) {
          if (((o = c || p ? {} : d5(t)), !s))
            return c ? s5(t, n5(o, t)) : o5(t, r5(o, t));
        } else {
          if (!xe[f]) return i ? t : {};
          o = f5(t, f, s);
        }
      }
      a || (a = new Z8());
      var d = a.get(t);
      if (d) return d;
      a.set(t, o),
        v5(t)
          ? t.forEach(function (y) {
              o.add(ql(y, e, r, y, t, a));
            })
          : m5(t) &&
            t.forEach(function (y, m) {
              o.set(m, ql(y, e, r, m, t, a));
            });
      var g = u ? (c ? u5 : c5) : c ? b5 : _5,
        v = l ? void 0 : g(t);
      return (
        e5(v || t, function (y, m) {
          v && ((m = y), (y = t[m])), t5(o, m, ql(y, e, r, m, t, a));
        }),
        o
      );
    }
    bC.exports = ql;
  });
  var EC = T((Ghe, TC) => {
    function $5(t, e, r) {
      var n = -1,
        i = t.length;
      e < 0 && (e = -e > i ? 0 : i + e),
        (r = r > i ? i : r),
        r < 0 && (r += i),
        (i = e > r ? 0 : (r - e) >>> 0),
        (e >>>= 0);
      for (var a = Array(i); ++n < i; ) a[n] = t[n + e];
      return a;
    }
    TC.exports = $5;
  });
  var xC = T((zhe, IC) => {
    var K5 = Pa(),
      Q5 = EC();
    function Y5(t, e) {
      return e.length < 2 ? t : K5(t, Q5(e, 0, -1));
    }
    IC.exports = Y5;
  });
  var AC = T(($he, wC) => {
    var J5 = Fa(),
      X5 = Oa(),
      Z5 = xC(),
      eQ = xi();
    function tQ(t, e) {
      return (e = J5(e, t)), (t = Z5(t, e)), t == null || delete t[eQ(X5(e))];
    }
    wC.exports = tQ;
  });
  var CC = T((Khe, kC) => {
    var rQ = Dn(),
      nQ = Ll(),
      iQ = fr(),
      aQ = "[object Object]",
      oQ = Function.prototype,
      sQ = Object.prototype,
      OC = oQ.toString,
      cQ = sQ.hasOwnProperty,
      uQ = OC.call(Object);
    function lQ(t) {
      if (!iQ(t) || rQ(t) != aQ) return !1;
      var e = nQ(t);
      if (e === null) return !0;
      var r = cQ.call(e, "constructor") && e.constructor;
      return typeof r == "function" && r instanceof r && OC.call(r) == uQ;
    }
    kC.exports = lQ;
  });
  var NC = T((Qhe, MC) => {
    var pQ = CC();
    function fQ(t) {
      return pQ(t) ? void 0 : t;
    }
    MC.exports = fQ;
  });
  var RC = T((Yhe, DC) => {
    var dQ = Ps();
    function hQ(t) {
      var e = t == null ? 0 : t.length;
      return e ? dQ(t, 1) : [];
    }
    DC.exports = hQ;
  });
  var PC = T((Jhe, FC) => {
    var gQ = RC(),
      mQ = _p(),
      yQ = bp();
    function vQ(t) {
      return yQ(mQ(t, void 0, gQ), t + "");
    }
    FC.exports = vQ;
  });
  var UC = T((Xhe, LC) => {
    var _Q = Ra(),
      bQ = SC(),
      SQ = AC(),
      TQ = Fa(),
      EQ = ba(),
      IQ = NC(),
      xQ = PC(),
      wQ = km(),
      AQ = 1,
      OQ = 2,
      kQ = 4,
      CQ = xQ(function (t, e) {
        var r = {};
        if (t == null) return r;
        var n = !1;
        (e = _Q(e, function (a) {
          return (a = TQ(a, t)), n || (n = a.length > 1), a;
        })),
          EQ(t, wQ(t), r),
          n && (r = bQ(r, AQ | OQ | kQ, IQ));
        for (var i = e.length; i--; ) SQ(r, e[i]);
        return r;
      });
    LC.exports = CQ;
  });
  var Vl = class {
      constructor() {
        this.config = {
          serviceName: "tactiq-prod-au-web",
          logLevel: 1,
          parameters: { uid: "anonymous" },
        };
        this.error = (e, r) => {
          console.error("[Tactiq]: ", e, this.config.useApi);
          let n = {
            service: this.config.serviceName,
            user: { id: this.config.parameters.uid },
            ...(r ?? {}),
          };
          if (this.config.useApi)
            fetch("https://log-api.newrelic.com/log/v1", {
              method: "POST",
              headers: {
                "Api-Key": "e6a059051ed2be070ffd6a69509de99cFFFFNRAL",
                "Content-Type": "application/json",
              },
              body: JSON.stringify([
                {
                  logs: [{ message: e.message, level: "error", attributes: n }],
                },
              ]),
            }).catch((i) => {
              console.debug(i);
            });
          else {
            let i = this.getNR();
            i && i.noticeError(e, n);
          }
        };
        try {
          let e = this.getNR();
          e && e.setErrorHandler((r) => r.message?.includes("ResizeObserver"));
        } catch (e) {
          console.debug(e);
        }
      }
      getNR() {
        if (
          !(typeof self < "u" && "registration" in self) &&
          typeof window < "u" &&
          "newrelic" in window
        )
          return window.newrelic;
      }
      configure(e) {
        this.config = {
          ...this.config,
          ...e,
          parameters: { ...this.config.parameters, ...e.parameters },
        };
        let r = this.getNR();
        r &&
          (r.setUserId(this.config.parameters.uid ?? null),
          this.config.parameters.anonymousId &&
            r.setCustomAttribute(
              "anonymousId",
              this.config.parameters.anonymousId
            ));
      }
      info(...e) {
        this.write(1, ...e);
      }
      debug(...e) {
        this.write(0, ...e);
      }
      warn(...e) {
        this.write(2, ...e);
      }
      write(e, ...r) {
        e >= this.config.logLevel && console.log("[Tactiq]: ", ...r);
      }
    },
    aM = new Vl(),
    Dm = aM;
  var WD = Fe(Ss());
  var oT = Fe(Oa()),
    gq = Fe(fS()),
    mq = Fe(Ss()),
    sT = Fe(hS()),
    cT = Fe(BS()),
    yq = Fe(rT());
  var nT = (t) => ({
      messageId: t.messageId,
      messageIds: new Set([t.messageId]),
      speakerName: t.speakerName,
      blocks: [t],
      isPinned: t.isPinned ?? !1,
      type: t.type,
      timestamp: t.timestamp,
      transcript: t.transcript,
      tags: t.tags ?? [],
    }),
    vq = (t, e, r = !1) => {
      e.messageIds.add(t.messageId),
        e.blocks.push(t),
        (e.transcript += Ls + t.transcript),
        r ||
          ((e.tags = (0, sT.default)([...e.tags, ...(t.tags ?? [])], "icon")),
          (e.isPinned = (e.isPinned || t.isPinned) ?? !1));
    },
    uT = (t, e = !0) => {
      let r = t.filter((a) => !a.isDeleted);
      if (!r.length) return [];
      let n = nT(r[0]),
        i = [n];
      for (let a = 1; a < r.length; a++) {
        let o = r[a];
        _q(n, o, e) ? vq(o, n) : ((n = nT(o)), i.push(n));
      }
      return i;
    };
  function _q(t, e, r) {
    return (
      t.speakerName === e.speakerName &&
      t.type === e.type &&
      e.type !== "screenshot" &&
      e.timestamp - ((0, oT.default)(t.blocks)?.timestamp ?? 0) <
        (r ? Tq : Sq) &&
      Iq(t.transcript, e.transcript, r ? Eq : lT) &&
      (r ? bq(t, e) : !0)
    );
  }
  var iT = (t) => (typeof t == "string" ? t : t.icon);
  function bq(t, e) {
    let r = t.tags?.map(iT) ?? [],
      n = e.tags?.map(iT) ?? [];
    return (
      t.isPinned === (e.isPinned ?? !1) && (0, cT.default)(r, n).length === 0
    );
  }
  var Sq = 5e3,
    Tq = 2e4,
    aT = ".",
    Ls = " ",
    lT = 35,
    Eq = 140;
  function Iq(t, e, r = lT) {
    let n = t.endsWith(aT),
      i = e.endsWith(aT),
      a = t + Ls + e;
    return n ? (i ? a.split(Ls).length < r : t.split(Ls).length < r / 2) : !0;
  }
  var Ep = {
      icon: String.fromCodePoint(10067),
      name: "Question",
      isSystem: !0,
    },
    oJ = [
      { icon: String.fromCodePoint(127919), name: "Decision", isSystem: !0 },
      { icon: String.fromCodePoint(9989), name: "Action Item", isSystem: !0 },
      Ep,
    ];
  function xq(t) {
    return function (e) {
      let r = {};
      for (let n of Object.keys(t)) r[n] = e[n];
      return r;
    };
  }
  var wq = {
      id: "",
      devices: {},
      createdAt: 0,
      updatedAt: 0,
      tzOffset: 0,
      blocks: [],
      translation: void 0,
      notes: void 0,
      detectedLanguage: void 0,
      meetingId: "",
      meetingTitle: "",
      platform: "",
    },
    pT = xq(wq);
  var xp = function (t, e) {
      return (
        (xp =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (r, n) {
              r.__proto__ = n;
            }) ||
          function (r, n) {
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
          }),
        xp(t, e)
      );
    },
    He = function () {
      return (
        (He =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in (e = arguments[r]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }),
        He.apply(this, arguments)
      );
    };
  function dr(t, e, r, n) {
    return new (r || (r = Promise))(function (i, a) {
      function o(u) {
        try {
          c(n.next(u));
        } catch (l) {
          a(l);
        }
      }
      function s(u) {
        try {
          c(n.throw(u));
        } catch (l) {
          a(l);
        }
      }
      function c(u) {
        var l;
        u.done
          ? i(u.value)
          : ((l = u.value),
            l instanceof r
              ? l
              : new r(function (f) {
                  f(l);
                })).then(o, s);
      }
      c((n = n.apply(t, e || [])).next());
    });
  }
  function hr(t, e) {
    var r,
      n,
      i,
      a,
      o = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(c) {
      return function (u) {
        return (function (l) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; a && ((a = 0), l[0] && (o = 0)), o; )
            try {
              if (
                ((r = 1),
                n &&
                  (i =
                    2 & l[0]
                      ? n.return
                      : l[0]
                      ? n.throw || ((i = n.return) && i.call(n), 0)
                      : n.next) &&
                  !(i = i.call(n, l[1])).done)
              )
                return i;
              switch (((n = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                case 0:
                case 1:
                  i = l;
                  break;
                case 4:
                  return o.label++, { value: l[1], done: !1 };
                case 5:
                  o.label++, (n = l[1]), (l = [0]);
                  continue;
                case 7:
                  (l = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    ((i = o.trys),
                    !(
                      (i = i.length > 0 && i[i.length - 1]) ||
                      (l[0] !== 6 && l[0] !== 2)
                    ))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (l[0] === 3 && (!i || (l[1] > i[0] && l[1] < i[3]))) {
                    o.label = l[1];
                    break;
                  }
                  if (l[0] === 6 && o.label < i[1]) {
                    (o.label = i[1]), (i = l);
                    break;
                  }
                  if (i && o.label < i[2]) {
                    (o.label = i[2]), o.ops.push(l);
                    break;
                  }
                  i[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              l = e.call(t, o);
            } catch (f) {
              (l = [6, f]), (n = 0);
            } finally {
              r = i = 0;
            }
          if (5 & l[0]) throw l[1];
          return { value: l[0] ? l[1] : void 0, done: !0 };
        })([c, u]);
      };
    }
  }
  var dT = { exports: {} };
  function wp() {}
  (wp.prototype = {
    on: function (t, e, r) {
      var n = this.e || (this.e = {});
      return (n[t] || (n[t] = [])).push({ fn: e, ctx: r }), this;
    },
    once: function (t, e, r) {
      var n = this;
      function i() {
        n.off(t, i), e.apply(r, arguments);
      }
      return (i._ = e), this.on(t, i, r);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          r = ((this.e || (this.e = {}))[t] || []).slice(),
          n = 0,
          i = r.length;
        n < i;
        n++
      )
        r[n].fn.apply(r[n].ctx, e);
      return this;
    },
    off: function (t, e) {
      var r = this.e || (this.e = {}),
        n = r[t],
        i = [];
      if (n && e)
        for (var a = 0, o = n.length; a < o; a++)
          n[a].fn !== e && n[a].fn._ !== e && i.push(n[a]);
      return i.length ? (r[t] = i) : delete r[t], this;
    },
  }),
    (dT.exports = wp);
  var Aq = (dT.exports.TinyEmitter = wp),
    qs = function (t) {
      var e = t[1];
      return e != null;
    },
    Oq = function () {},
    kq = (function () {
      function t(e) {
        var r = e.onError,
          n = e.onSent,
          i = e.appName,
          a = e.metricsInterval,
          o = e.disableMetrics,
          s = o !== void 0 && o,
          c = e.url,
          u = e.clientKey,
          l = e.fetch,
          f = e.headerName,
          p = e.customHeaders,
          d = p === void 0 ? {} : p;
        (this.onError = r),
          (this.onSent = n || Oq),
          (this.disabled = s),
          (this.metricsInterval = 1e3 * a),
          (this.appName = i),
          (this.url = c instanceof URL ? c : new URL(c)),
          (this.clientKey = u),
          (this.bucket = this.createEmptyBucket()),
          (this.fetch = l),
          (this.headerName = f),
          (this.customHeaders = d);
      }
      return (
        (t.prototype.start = function () {
          var e = this;
          if (this.disabled) return !1;
          typeof this.metricsInterval == "number" &&
            this.metricsInterval > 0 &&
            setTimeout(function () {
              e.startTimer(), e.sendMetrics();
            }, 2e3);
        }),
        (t.prototype.stop = function () {
          this.timer && (clearTimeout(this.timer), delete this.timer);
        }),
        (t.prototype.createEmptyBucket = function () {
          return { start: new Date(), stop: null, toggles: {} };
        }),
        (t.prototype.getHeaders = function () {
          var e,
            r =
              (((e = {})[this.headerName] = this.clientKey),
              (e.Accept = "application/json"),
              (e["Content-Type"] = "application/json"),
              e);
          return (
            Object.entries(this.customHeaders)
              .filter(qs)
              .forEach(function (n) {
                var i = n[0],
                  a = n[1];
                return (r[i] = a);
              }),
            r
          );
        }),
        (t.prototype.sendMetrics = function () {
          return dr(this, void 0, void 0, function () {
            var e, r, n;
            return hr(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    ((e = "".concat(this.url, "/client/metrics")),
                    (r = this.getPayload()),
                    this.bucketIsEmpty(r))
                  )
                    return [2];
                  i.label = 1;
                case 1:
                  return (
                    i.trys.push([1, 3, , 4]),
                    [
                      4,
                      this.fetch(e, {
                        cache: "no-cache",
                        method: "POST",
                        headers: this.getHeaders(),
                        body: JSON.stringify(r),
                      }),
                    ]
                  );
                case 2:
                  return i.sent(), this.onSent(r), [3, 4];
                case 3:
                  return (
                    (n = i.sent()),
                    console.error("Unleash: unable to send feature metrics", n),
                    this.onError(n),
                    [3, 4]
                  );
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.count = function (e, r) {
          return (
            !(this.disabled || !this.bucket) &&
            (this.assertBucket(e),
            this.bucket.toggles[e][r ? "yes" : "no"]++,
            !0)
          );
        }),
        (t.prototype.countVariant = function (e, r) {
          return (
            !(this.disabled || !this.bucket) &&
            (this.assertBucket(e),
            this.bucket.toggles[e].variants[r]
              ? (this.bucket.toggles[e].variants[r] += 1)
              : (this.bucket.toggles[e].variants[r] = 1),
            !0)
          );
        }),
        (t.prototype.assertBucket = function (e) {
          if (this.disabled || !this.bucket) return !1;
          this.bucket.toggles[e] ||
            (this.bucket.toggles[e] = { yes: 0, no: 0, variants: {} });
        }),
        (t.prototype.startTimer = function () {
          var e = this;
          this.timer = setInterval(function () {
            e.sendMetrics();
          }, this.metricsInterval);
        }),
        (t.prototype.bucketIsEmpty = function (e) {
          return Object.keys(e.bucket.toggles).length === 0;
        }),
        (t.prototype.getPayload = function () {
          var e = He(He({}, this.bucket), { stop: new Date() });
          return (
            (this.bucket = this.createEmptyBucket()),
            { bucket: e, appName: this.appName, instanceId: "browser" }
          );
        }),
        t
      );
    })(),
    Cq = (function () {
      function t() {
        this.store = new Map();
      }
      return (
        (t.prototype.save = function (e, r) {
          return dr(this, void 0, void 0, function () {
            return hr(this, function (n) {
              return this.store.set(e, r), [2];
            });
          });
        }),
        (t.prototype.get = function (e) {
          return dr(this, void 0, void 0, function () {
            return hr(this, function (r) {
              return [2, this.store.get(e)];
            });
          });
        }),
        t
      );
    })(),
    Mq = (function () {
      function t() {
        this.prefix = "unleash:repository";
      }
      return (
        (t.prototype.save = function (e, r) {
          return dr(this, void 0, void 0, function () {
            var n, i;
            return hr(this, function (a) {
              (n = JSON.stringify(r)),
                (i = "".concat(this.prefix, ":").concat(e));
              try {
                window.localStorage.setItem(i, n);
              } catch (o) {
                console.error(o);
              }
              return [2];
            });
          });
        }),
        (t.prototype.get = function (e) {
          try {
            var r = "".concat(this.prefix, ":").concat(e),
              n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : void 0;
          } catch (i) {
            console.error(i);
          }
        }),
        t
      );
    })(),
    Us,
    Nq = new Uint8Array(16);
  function Dq() {
    if (
      !Us &&
      ((Us =
        typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)),
      !Us)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    return Us(Nq);
  }
  var Ze = [];
  for (let t = 0; t < 256; ++t) Ze.push((t + 256).toString(16).slice(1));
  var fT = {
    randomUUID:
      typeof crypto < "u" &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
  };
  function Rq(t, e, r) {
    if (fT.randomUUID && !e && !t) return fT.randomUUID();
    let n = (t = t || {}).random || (t.rng || Dq)();
    if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
      r = r || 0;
      for (let i = 0; i < 16; ++i) e[r + i] = n[i];
      return e;
    }
    return (function (i, a = 0) {
      return (
        Ze[i[a + 0]] +
        Ze[i[a + 1]] +
        Ze[i[a + 2]] +
        Ze[i[a + 3]] +
        "-" +
        Ze[i[a + 4]] +
        Ze[i[a + 5]] +
        "-" +
        Ze[i[a + 6]] +
        Ze[i[a + 7]] +
        "-" +
        Ze[i[a + 8]] +
        Ze[i[a + 9]] +
        "-" +
        Ze[i[a + 10]] +
        Ze[i[a + 11]] +
        Ze[i[a + 12]] +
        Ze[i[a + 13]] +
        Ze[i[a + 14]] +
        Ze[i[a + 15]]
      );
    })(n);
  }
  var Fq = (function () {
      function t() {}
      return (
        (t.prototype.generateEventId = function () {
          return Rq();
        }),
        (t.prototype.createImpressionEvent = function (e, r, n, i, a, o) {
          var s = this.createBaseEvent(e, r, n, i, a);
          return o ? He(He({}, s), { variant: o }) : s;
        }),
        (t.prototype.createBaseEvent = function (e, r, n, i, a) {
          return {
            eventType: i,
            eventId: this.generateEventId(),
            context: e,
            enabled: r,
            featureName: n,
            impressionData: a,
          };
        }),
        t
      );
    })(),
    Pq = ["userId", "sessionId", "remoteAddress", "currentTime"],
    kt = {
      INIT: "initialized",
      ERROR: "error",
      READY: "ready",
      UPDATE: "update",
      IMPRESSION: "impression",
      SENT: "sent",
      RECOVERED: "recovered",
    },
    Lq = "isEnabled",
    Uq = "getVariant",
    qq = { name: "disabled", enabled: !1, feature_enabled: !1 },
    Ip = "repo",
    Bq = function () {
      try {
        if (typeof window < "u" && "fetch" in window) return fetch.bind(window);
        if ("fetch" in globalThis) return fetch.bind(globalThis);
      } catch (t) {
        console.error('Unleash failed to resolve "fetch"', t);
      }
    },
    hT = (function (t) {
      function e(r) {
        var n = r.storageProvider,
          i = r.url,
          a = r.clientKey,
          o = r.disableRefresh,
          s = o !== void 0 && o,
          c = r.refreshInterval,
          u = c === void 0 ? 30 : c,
          l = r.metricsInterval,
          f = l === void 0 ? 30 : l,
          p = r.disableMetrics,
          d = p !== void 0 && p,
          g = r.appName,
          v = r.environment,
          y = v === void 0 ? "default" : v,
          m = r.context,
          I = r.fetch,
          b = I === void 0 ? Bq() : I,
          w = r.createAbortController,
          k =
            w === void 0
              ? (function () {
                  try {
                    if (typeof window < "u" && "AbortController" in window)
                      return function () {
                        return new window.AbortController();
                      };
                    if ("fetch" in globalThis)
                      return function () {
                        return new globalThis.AbortController();
                      };
                  } catch (G) {
                    console.error(
                      'Unleash failed to resolve "AbortController" factory',
                      G
                    );
                  }
                })()
              : w,
          _ = r.bootstrap,
          A = r.bootstrapOverride,
          C = A === void 0 || A,
          F = r.headerName,
          W = F === void 0 ? "Authorization" : F,
          j = r.customHeaders,
          X = j === void 0 ? {} : j,
          P = r.impressionDataAll,
          ie = P !== void 0 && P,
          V = r.usePOSTrequests,
          ee = V !== void 0 && V,
          R = t.call(this) || this;
        if (
          ((R.toggles = []),
          (R.etag = ""),
          (R.readyEventEmitted = !1),
          (R.usePOSTrequests = !1),
          (R.started = !1),
          !i)
        )
          throw new Error("url is required");
        if (!a) throw new Error("clientKey is required");
        if (!g) throw new Error("appName is required.");
        return (
          (R.eventsHandler = new Fq()),
          (R.impressionDataAll = ie),
          (R.toggles = _ && _.length > 0 ? _ : []),
          (R.url = i instanceof URL ? i : new URL(i)),
          (R.clientKey = a),
          (R.headerName = W),
          (R.customHeaders = X),
          (R.storage = n || (typeof window < "u" ? new Mq() : new Cq())),
          (R.refreshInterval = s ? 0 : 1e3 * u),
          (R.context = He({ appName: g, environment: y }, m)),
          (R.usePOSTrequests = ee),
          (R.sdkState = "initializing"),
          (R.ready = new Promise(function (G) {
            R.init()
              .then(G)
              .catch(function (S) {
                console.error(S),
                  (R.sdkState = "error"),
                  R.emit(kt.ERROR, S),
                  G();
              });
          })),
          b ||
            console.error(
              'Unleash: You must either provide your own "fetch" implementation or run in an environment where "fetch" is available.'
            ),
          k ||
            console.error(
              'Unleash: You must either provide your own "AbortController" implementation or run in an environment where "AbortController" is available.'
            ),
          (R.fetch = b),
          (R.createAbortController = k),
          (R.bootstrap = _ && _.length > 0 ? _ : void 0),
          (R.bootstrapOverride = C),
          (R.metrics = new kq({
            onError: R.emit.bind(R, kt.ERROR),
            onSent: R.emit.bind(R, kt.SENT),
            appName: g,
            metricsInterval: f,
            disableMetrics: d,
            url: R.url,
            clientKey: a,
            fetch: b,
            headerName: W,
            customHeaders: X,
          })),
          R
        );
      }
      return (
        (function (r, n) {
          if (typeof n != "function" && n !== null)
            throw new TypeError(
              "Class extends value " +
                String(n) +
                " is not a constructor or null"
            );
          function i() {
            this.constructor = r;
          }
          xp(r, n),
            (r.prototype =
              n === null
                ? Object.create(n)
                : ((i.prototype = n.prototype), new i()));
        })(e, t),
        (e.prototype.getAllToggles = function () {
          return (function (r, n, i) {
            if (i || arguments.length === 2)
              for (var a, o = 0, s = n.length; o < s; o++)
                (!a && o in n) ||
                  (a || (a = Array.prototype.slice.call(n, 0, o)),
                  (a[o] = n[o]));
            return r.concat(a || Array.prototype.slice.call(n));
          })([], this.toggles, !0);
        }),
        (e.prototype.isEnabled = function (r) {
          var n,
            i = this.toggles.find(function (s) {
              return s.name === r;
            }),
            a = !!i && i.enabled;
          if (
            (this.metrics.count(r, a),
            i?.impressionData || this.impressionDataAll)
          ) {
            var o = this.eventsHandler.createImpressionEvent(
              this.context,
              a,
              r,
              Lq,
              (n = i?.impressionData) !== null && n !== void 0 ? n : void 0
            );
            this.emit(kt.IMPRESSION, o);
          }
          return a;
        }),
        (e.prototype.getVariant = function (r) {
          var n,
            i = this.toggles.find(function (c) {
              return c.name === r;
            }),
            a = i?.enabled || !1,
            o = i ? i.variant : qq;
          if (
            (o.name && this.metrics.countVariant(r, o.name),
            this.metrics.count(r, a),
            i?.impressionData || this.impressionDataAll)
          ) {
            var s = this.eventsHandler.createImpressionEvent(
              this.context,
              a,
              r,
              Uq,
              (n = i?.impressionData) !== null && n !== void 0 ? n : void 0,
              o.name
            );
            this.emit(kt.IMPRESSION, s);
          }
          return He(He({}, o), { feature_enabled: a });
        }),
        (e.prototype.updateContext = function (r) {
          return dr(this, void 0, void 0, function () {
            var n,
              i = this;
            return hr(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (r.appName || r.environment) &&
                      console.warn(
                        "appName and environment are static. They can't be updated with updateContext."
                      ),
                    (n = {
                      environment: this.context.environment,
                      appName: this.context.appName,
                      sessionId: this.context.sessionId,
                    }),
                    (this.context = He(He({}, n), r)),
                    this.timerRef || this.readyEventEmitted
                      ? [4, this.fetchToggles()]
                      : [3, 2]
                  );
                case 1:
                  return a.sent(), [3, 4];
                case 2:
                  return this.started
                    ? [
                        4,
                        new Promise(function (o) {
                          var s = function () {
                            i.fetchToggles().then(function () {
                              i.off(kt.READY, s), o();
                            });
                          };
                          i.once(kt.READY, s);
                        }),
                      ]
                    : [3, 4];
                case 3:
                  a.sent(), (a.label = 4);
                case 4:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.getContext = function () {
          return He({}, this.context);
        }),
        (e.prototype.setContextField = function (r, n) {
          var i, a;
          if (Pq.includes(r))
            this.context = He(He({}, this.context), (((i = {})[r] = n), i));
          else {
            var o = He(He({}, this.context.properties), (((a = {})[r] = n), a));
            this.context = He(He({}, this.context), { properties: o });
          }
          this.timerRef && this.fetchToggles();
        }),
        (e.prototype.init = function () {
          return dr(this, void 0, void 0, function () {
            var r, n;
            return hr(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, this.resolveSessionId()];
                case 1:
                  return (
                    (r = i.sent()),
                    (this.context = He({ sessionId: r }, this.context)),
                    (n = this),
                    [4, this.storage.get(Ip)]
                  );
                case 2:
                  return (
                    (n.toggles = i.sent() || []),
                    !this.bootstrap ||
                    (!this.bootstrapOverride && this.toggles.length !== 0)
                      ? [3, 4]
                      : [4, this.storage.save(Ip, this.bootstrap)]
                  );
                case 3:
                  i.sent(),
                    (this.toggles = this.bootstrap),
                    this.emit(kt.READY),
                    (i.label = 4);
                case 4:
                  return (this.sdkState = "healthy"), this.emit(kt.INIT), [2];
              }
            });
          });
        }),
        (e.prototype.start = function () {
          return dr(this, void 0, void 0, function () {
            var r,
              n = this;
            return hr(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (this.started = !0),
                    this.timerRef
                      ? (console.error(
                          "Unleash SDK has already started, if you want to restart the SDK you should call client.stop() before starting again."
                        ),
                        [2])
                      : [4, this.ready]
                  );
                case 1:
                  return (
                    i.sent(),
                    this.metrics.start(),
                    (r = this.refreshInterval),
                    [4, this.fetchToggles()]
                  );
                case 2:
                  return (
                    i.sent(),
                    r > 0 &&
                      (this.timerRef = setInterval(function () {
                        return n.fetchToggles();
                      }, r)),
                    [2]
                  );
              }
            });
          });
        }),
        (e.prototype.stop = function () {
          this.timerRef &&
            (clearInterval(this.timerRef), (this.timerRef = void 0)),
            this.metrics.stop();
        }),
        (e.prototype.resolveSessionId = function () {
          return dr(this, void 0, void 0, function () {
            var r;
            return hr(this, function (n) {
              switch (n.label) {
                case 0:
                  return this.context.sessionId
                    ? [2, this.context.sessionId]
                    : [4, this.storage.get("sessionId")];
                case 1:
                  return (r = n.sent())
                    ? [3, 3]
                    : ((r = Math.floor(1e9 * Math.random())),
                      [4, this.storage.save("sessionId", r)]);
                case 2:
                  n.sent(), (n.label = 3);
                case 3:
                  return [2, r];
              }
            });
          });
        }),
        (e.prototype.getHeaders = function () {
          var r,
            n =
              (((r = {})[this.headerName] = this.clientKey),
              (r.Accept = "application/json"),
              (r["Content-Type"] = "application/json"),
              r);
          return (
            this.etag && (n["If-None-Match"] = this.etag),
            Object.entries(this.customHeaders)
              .filter(qs)
              .forEach(function (i) {
                var a = i[0],
                  o = i[1];
                return (n[a] = o);
              }),
            n
          );
        }),
        (e.prototype.storeToggles = function (r) {
          return dr(this, void 0, void 0, function () {
            return hr(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (this.toggles = r),
                    this.emit(kt.UPDATE),
                    [4, this.storage.save(Ip, r)]
                  );
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.fetchToggles = function () {
          return dr(this, void 0, void 0, function () {
            var r, n, i, a, o, s, c, u;
            return hr(this, function (l) {
              switch (l.label) {
                case 0:
                  if (!this.fetch) return [3, 9];
                  this.abortController && this.abortController.abort(),
                    (this.abortController =
                      this.createAbortController &&
                      this.createAbortController()),
                    (r = this.abortController
                      ? this.abortController.signal
                      : void 0),
                    (l.label = 1);
                case 1:
                  return (
                    l.trys.push([1, 7, 8, 9]),
                    (n = this.usePOSTrequests),
                    (i = n
                      ? this.url
                      : (function (f, p) {
                          var d = new URL(f.toString());
                          return (
                            Object.entries(p)
                              .filter(qs)
                              .forEach(function (g) {
                                var v = g[0],
                                  y = g[1];
                                v === "properties" && y
                                  ? Object.entries(y)
                                      .filter(qs)
                                      .forEach(function (m) {
                                        var I = m[0],
                                          b = m[1];
                                        return d.searchParams.append(
                                          "properties[".concat(I, "]"),
                                          b
                                        );
                                      })
                                  : d.searchParams.append(v, y);
                              }),
                            d
                          );
                        })(this.url, this.context)),
                    (a = n ? "POST" : "GET"),
                    (o = n
                      ? JSON.stringify({ context: this.context })
                      : void 0),
                    [
                      4,
                      this.fetch(i.toString(), {
                        method: a,
                        cache: "no-cache",
                        headers: this.getHeaders(),
                        body: o,
                        signal: r,
                      }),
                    ]
                  );
                case 2:
                  return (
                    (s = l.sent()),
                    this.sdkState === "error" &&
                      s.status < 400 &&
                      ((this.sdkState = "healthy"), this.emit(kt.RECOVERED)),
                    s.ok && s.status !== 304
                      ? ((this.etag = s.headers.get("ETag") || ""),
                        [4, s.json()])
                      : [3, 5]
                  );
                case 3:
                  return (c = l.sent()), [4, this.storeToggles(c.toggles)];
                case 4:
                  return (
                    l.sent(),
                    this.sdkState !== "healthy" && (this.sdkState = "healthy"),
                    this.bootstrap ||
                      this.readyEventEmitted ||
                      (this.emit(kt.READY), (this.readyEventEmitted = !0)),
                    [3, 6]
                  );
                case 5:
                  s.ok ||
                    s.status === 304 ||
                    (console.error(
                      "Unleash: Fetching feature toggles did not have an ok response"
                    ),
                    (this.sdkState = "error"),
                    this.emit(kt.ERROR, { type: "HttpError", code: s.status })),
                    (l.label = 6);
                case 6:
                  return [3, 9];
                case 7:
                  return (
                    (u = l.sent()),
                    console.error(
                      "Unleash: unable to fetch feature toggles",
                      u
                    ),
                    (this.sdkState = "error"),
                    this.emit(kt.ERROR, u),
                    [3, 9]
                  );
                case 8:
                  return (this.abortController = null), [7];
                case 9:
                  return [2];
              }
            });
          });
        }),
        e
      );
    })(Aq);
  var Bs = class {
    constructor(e) {
      let r = e.environment === "production";
      (this.unleash = new hT({
        url: `https://ff${r ? "p" : "d"}.tactiq.io/proxy`,
        clientKey: r
          ? "bnDc9wd9wnJbznRBdhrUB3M7Uy42Xwt4fpXEi2daQspEQapPkkCAfNByHXk8FkXp"
          : "bhUTqmJMbFeZFuEfEegCTwTCyGAcpY7oTFuvWfrgtMWxKhRvGfcj4X86xi3hR6Ct",
        appName: e.appName,
        storageProvider: e.storageProvider,
        fetch: e.fetch,
        refreshInterval: 12e4,
      })),
        (this.started = !1);
    }
    async start() {
      this.started ||
        this.unleash
          .start()
          .then(() => {
            this.started = !0;
          })
          .catch(() => {});
    }
    isEnabled(e) {
      return this.unleash.isEnabled(e);
    }
    onUpdate(e) {
      return (
        this.unleash.on("update", () => e(this)),
        () => this.unleash.off("update", e)
      );
    }
    async updateContext({ userId: e, email: r, ...n }) {
      this.unleash
        .updateContext({
          userId: e,
          properties: { ...n, ...(r ? { email: r } : {}) },
        })
        .catch(() => {});
    }
  };
  var re = Dm;
  var mT = function (t) {
      let e = [],
        r = 0;
      for (let n = 0; n < t.length; n++) {
        let i = t.charCodeAt(n);
        i < 128
          ? (e[r++] = i)
          : i < 2048
          ? ((e[r++] = (i >> 6) | 192), (e[r++] = (i & 63) | 128))
          : (i & 64512) === 55296 &&
            n + 1 < t.length &&
            (t.charCodeAt(n + 1) & 64512) === 56320
          ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++n) & 1023)),
            (e[r++] = (i >> 18) | 240),
            (e[r++] = ((i >> 12) & 63) | 128),
            (e[r++] = ((i >> 6) & 63) | 128),
            (e[r++] = (i & 63) | 128))
          : ((e[r++] = (i >> 12) | 224),
            (e[r++] = ((i >> 6) & 63) | 128),
            (e[r++] = (i & 63) | 128));
      }
      return e;
    },
    jq = function (t) {
      let e = [],
        r = 0,
        n = 0;
      for (; r < t.length; ) {
        let i = t[r++];
        if (i < 128) e[n++] = String.fromCharCode(i);
        else if (i > 191 && i < 224) {
          let a = t[r++];
          e[n++] = String.fromCharCode(((i & 31) << 6) | (a & 63));
        } else if (i > 239 && i < 365) {
          let a = t[r++],
            o = t[r++],
            s = t[r++],
            c =
              (((i & 7) << 18) |
                ((a & 63) << 12) |
                ((o & 63) << 6) |
                (s & 63)) -
              65536;
          (e[n++] = String.fromCharCode(55296 + (c >> 10))),
            (e[n++] = String.fromCharCode(56320 + (c & 1023)));
        } else {
          let a = t[r++],
            o = t[r++];
          e[n++] = String.fromCharCode(
            ((i & 15) << 12) | ((a & 63) << 6) | (o & 63)
          );
        }
      }
      return e.join("");
    },
    yT = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      },
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      },
      HAS_NATIVE_SUPPORT: typeof atob == "function",
      encodeByteArray(t, e) {
        if (!Array.isArray(t))
          throw Error("encodeByteArray takes an array as a parameter");
        this.init_();
        let r = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
          n = [];
        for (let i = 0; i < t.length; i += 3) {
          let a = t[i],
            o = i + 1 < t.length,
            s = o ? t[i + 1] : 0,
            c = i + 2 < t.length,
            u = c ? t[i + 2] : 0,
            l = a >> 2,
            f = ((a & 3) << 4) | (s >> 4),
            p = ((s & 15) << 2) | (u >> 6),
            d = u & 63;
          c || ((d = 64), o || (p = 64)), n.push(r[l], r[f], r[p], r[d]);
        }
        return n.join("");
      },
      encodeString(t, e) {
        return this.HAS_NATIVE_SUPPORT && !e
          ? btoa(t)
          : this.encodeByteArray(mT(t), e);
      },
      decodeString(t, e) {
        return this.HAS_NATIVE_SUPPORT && !e
          ? atob(t)
          : jq(this.decodeStringToByteArray(t, e));
      },
      decodeStringToByteArray(t, e) {
        this.init_();
        let r = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
          n = [];
        for (let i = 0; i < t.length; ) {
          let a = r[t.charAt(i++)],
            s = i < t.length ? r[t.charAt(i)] : 0;
          ++i;
          let u = i < t.length ? r[t.charAt(i)] : 64;
          ++i;
          let f = i < t.length ? r[t.charAt(i)] : 64;
          if ((++i, a == null || s == null || u == null || f == null))
            throw new Op();
          let p = (a << 2) | (s >> 4);
          if ((n.push(p), u !== 64)) {
            let d = ((s << 4) & 240) | (u >> 2);
            if ((n.push(d), f !== 64)) {
              let g = ((u << 6) & 192) | f;
              n.push(g);
            }
          }
        }
        return n;
      },
      init_() {
        if (!this.byteToCharMap_) {
          (this.byteToCharMap_ = {}),
            (this.charToByteMap_ = {}),
            (this.byteToCharMapWebSafe_ = {}),
            (this.charToByteMapWebSafe_ = {});
          for (let t = 0; t < this.ENCODED_VALS.length; t++)
            (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
              (this.charToByteMap_[this.byteToCharMap_[t]] = t),
              (this.byteToCharMapWebSafe_[t] =
                this.ENCODED_VALS_WEBSAFE.charAt(t)),
              (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
              t >= this.ENCODED_VALS_BASE.length &&
                ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
                (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
        }
      },
    },
    Op = class extends Error {
      constructor() {
        super(...arguments), (this.name = "DecodeBase64StringError");
      }
    },
    Vq = function (t) {
      let e = mT(t);
      return yT.encodeByteArray(e, !0);
    },
    Cp = function (t) {
      return Vq(t).replace(/\./g, "");
    },
    Mp = function (t) {
      try {
        return yT.decodeString(t, !0);
      } catch (e) {
        console.error("base64Decode failed: ", e);
      }
      return null;
    };
  function Wq() {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof globalThis < "u") return globalThis;
    throw new Error("Unable to locate global object.");
  }
  var Hq = () => Wq().__FIREBASE_DEFAULTS__,
    Gq = () => {
      if (typeof process > "u" || typeof process.env > "u") return;
      let t = process.env.__FIREBASE_DEFAULTS__;
      if (t) return JSON.parse(t);
    },
    zq = () => {
      if (typeof document > "u") return;
      let t;
      try {
        t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
      } catch {
        return;
      }
      let e = t && Mp(t[1]);
      return e && JSON.parse(e);
    },
    Np = () => {
      try {
        return Hq() || Gq() || zq();
      } catch (t) {
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
        return;
      }
    },
    vT = (t) => {
      var e, r;
      return (r =
        (e = Np()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
        null || r === void 0
        ? void 0
        : r[t];
    };
  var Dp = () => {
      var t;
      return (t = Np()) === null || t === void 0 ? void 0 : t.config;
    },
    Rp = (t) => {
      var e;
      return (e = Np()) === null || e === void 0 ? void 0 : e[`_${t}`];
    };
  var js = class {
    constructor() {
      (this.reject = () => {}),
        (this.resolve = () => {}),
        (this.promise = new Promise((e, r) => {
          (this.resolve = e), (this.reject = r);
        }));
    }
    wrapCallback(e) {
      return (r, n) => {
        r ? this.reject(r) : this.resolve(n),
          typeof e == "function" &&
            (this.promise.catch(() => {}), e.length === 1 ? e(r) : e(r, n));
      };
    }
  };
  function et() {
    return typeof navigator < "u" && typeof navigator.userAgent == "string"
      ? navigator.userAgent
      : "";
  }
  function _T() {
    return (
      typeof window < "u" &&
      !!(window.cordova || window.phonegap || window.PhoneGap) &&
      /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())
    );
  }
  function bT() {
    let t =
      typeof chrome == "object"
        ? chrome.runtime
        : typeof browser == "object"
        ? browser.runtime
        : void 0;
    return typeof t == "object" && t.id !== void 0;
  }
  function ST() {
    return typeof navigator == "object" && navigator.product === "ReactNative";
  }
  function TT() {
    let t = et();
    return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
  }
  function ET() {
    try {
      return typeof indexedDB == "object";
    } catch {
      return !1;
    }
  }
  function IT() {
    return new Promise((t, e) => {
      try {
        let r = !0,
          n = "validate-browser-context-for-indexeddb-analytics-module",
          i = self.indexedDB.open(n);
        (i.onsuccess = () => {
          i.result.close(), r || self.indexedDB.deleteDatabase(n), t(!0);
        }),
          (i.onupgradeneeded = () => {
            r = !1;
          }),
          (i.onerror = () => {
            var a;
            e(
              ((a = i.error) === null || a === void 0 ? void 0 : a.message) ||
                ""
            );
          });
      } catch (r) {
        e(r);
      }
    });
  }
  var $q = "FirebaseError",
    Kt = class t extends Error {
      constructor(e, r, n) {
        super(r),
          (this.code = e),
          (this.customData = n),
          (this.name = $q),
          Object.setPrototypeOf(this, t.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(this, Nr.prototype.create);
      }
    },
    Nr = class {
      constructor(e, r, n) {
        (this.service = e), (this.serviceName = r), (this.errors = n);
      }
      create(e, ...r) {
        let n = r[0] || {},
          i = `${this.service}/${e}`,
          a = this.errors[e],
          o = a ? Kq(a, n) : "Error",
          s = `${this.serviceName}: ${o} (${i}).`;
        return new Kt(i, s, n);
      }
    };
  function Kq(t, e) {
    return t.replace(Qq, (r, n) => {
      let i = e[n];
      return i != null ? String(i) : `<${n}?>`;
    });
  }
  var Qq = /\{\$([^}]+)}/g;
  function xT(t) {
    for (let e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
  }
  function wi(t, e) {
    if (t === e) return !0;
    let r = Object.keys(t),
      n = Object.keys(e);
    for (let i of r) {
      if (!n.includes(i)) return !1;
      let a = t[i],
        o = e[i];
      if (gT(a) && gT(o)) {
        if (!wi(a, o)) return !1;
      } else if (a !== o) return !1;
    }
    for (let i of n) if (!r.includes(i)) return !1;
    return !0;
  }
  function gT(t) {
    return t !== null && typeof t == "object";
  }
  function Ai(t) {
    let e = [];
    for (let [r, n] of Object.entries(t))
      Array.isArray(n)
        ? n.forEach((i) => {
            e.push(encodeURIComponent(r) + "=" + encodeURIComponent(i));
          })
        : e.push(encodeURIComponent(r) + "=" + encodeURIComponent(n));
    return e.length ? "&" + e.join("&") : "";
  }
  function Oi(t) {
    let e = {};
    return (
      t
        .replace(/^\?/, "")
        .split("&")
        .forEach((n) => {
          if (n) {
            let [i, a] = n.split("=");
            e[decodeURIComponent(i)] = decodeURIComponent(a);
          }
        }),
      e
    );
  }
  function ki(t) {
    let e = t.indexOf("?");
    if (!e) return "";
    let r = t.indexOf("#", e);
    return t.substring(e, r > 0 ? r : void 0);
  }
  function wT(t, e) {
    let r = new kp(t, e);
    return r.subscribe.bind(r);
  }
  var kp = class {
    constructor(e, r) {
      (this.observers = []),
        (this.unsubscribes = []),
        (this.observerCount = 0),
        (this.task = Promise.resolve()),
        (this.finalized = !1),
        (this.onNoObservers = r),
        this.task
          .then(() => {
            e(this);
          })
          .catch((n) => {
            this.error(n);
          });
    }
    next(e) {
      this.forEachObserver((r) => {
        r.next(e);
      });
    }
    error(e) {
      this.forEachObserver((r) => {
        r.error(e);
      }),
        this.close(e);
    }
    complete() {
      this.forEachObserver((e) => {
        e.complete();
      }),
        this.close();
    }
    subscribe(e, r, n) {
      let i;
      if (e === void 0 && r === void 0 && n === void 0)
        throw new Error("Missing Observer.");
      Yq(e, ["next", "error", "complete"])
        ? (i = e)
        : (i = { next: e, error: r, complete: n }),
        i.next === void 0 && (i.next = Ap),
        i.error === void 0 && (i.error = Ap),
        i.complete === void 0 && (i.complete = Ap);
      let a = this.unsubscribeOne.bind(this, this.observers.length);
      return (
        this.finalized &&
          this.task.then(() => {
            try {
              this.finalError ? i.error(this.finalError) : i.complete();
            } catch {}
          }),
        this.observers.push(i),
        a
      );
    }
    unsubscribeOne(e) {
      this.observers === void 0 ||
        this.observers[e] === void 0 ||
        (delete this.observers[e],
        (this.observerCount -= 1),
        this.observerCount === 0 &&
          this.onNoObservers !== void 0 &&
          this.onNoObservers(this));
    }
    forEachObserver(e) {
      if (!this.finalized)
        for (let r = 0; r < this.observers.length; r++) this.sendOne(r, e);
    }
    sendOne(e, r) {
      this.task.then(() => {
        if (this.observers !== void 0 && this.observers[e] !== void 0)
          try {
            r(this.observers[e]);
          } catch (n) {
            typeof console < "u" && console.error && console.error(n);
          }
      });
    }
    close(e) {
      this.finalized ||
        ((this.finalized = !0),
        e !== void 0 && (this.finalError = e),
        this.task.then(() => {
          (this.observers = void 0), (this.onNoObservers = void 0);
        }));
    }
  };
  function Yq(t, e) {
    if (typeof t != "object" || t === null) return !1;
    for (let r of e) if (r in t && typeof t[r] == "function") return !0;
    return !1;
  }
  function Ap() {}
  var $J = 4 * 60 * 60 * 1e3;
  function gr(t) {
    return t && t._delegate ? t._delegate : t;
  }
  var mr = class {
    constructor(e, r, n) {
      (this.name = e),
        (this.instanceFactory = r),
        (this.type = n),
        (this.multipleInstances = !1),
        (this.serviceProps = {}),
        (this.instantiationMode = "LAZY"),
        (this.onInstanceCreated = null);
    }
    setInstantiationMode(e) {
      return (this.instantiationMode = e), this;
    }
    setMultipleInstances(e) {
      return (this.multipleInstances = e), this;
    }
    setServiceProps(e) {
      return (this.serviceProps = e), this;
    }
    setInstanceCreatedCallback(e) {
      return (this.onInstanceCreated = e), this;
    }
  };
  var Pn = "[DEFAULT]";
  var Fp = class {
    constructor(e, r) {
      (this.name = e),
        (this.container = r),
        (this.component = null),
        (this.instances = new Map()),
        (this.instancesDeferred = new Map()),
        (this.instancesOptions = new Map()),
        (this.onInitCallbacks = new Map());
    }
    get(e) {
      let r = this.normalizeInstanceIdentifier(e);
      if (!this.instancesDeferred.has(r)) {
        let n = new js();
        if (
          (this.instancesDeferred.set(r, n),
          this.isInitialized(r) || this.shouldAutoInitialize())
        )
          try {
            let i = this.getOrInitializeService({ instanceIdentifier: r });
            i && n.resolve(i);
          } catch {}
      }
      return this.instancesDeferred.get(r).promise;
    }
    getImmediate(e) {
      var r;
      let n = this.normalizeInstanceIdentifier(e?.identifier),
        i = (r = e?.optional) !== null && r !== void 0 ? r : !1;
      if (this.isInitialized(n) || this.shouldAutoInitialize())
        try {
          return this.getOrInitializeService({ instanceIdentifier: n });
        } catch (a) {
          if (i) return null;
          throw a;
        }
      else {
        if (i) return null;
        throw Error(`Service ${this.name} is not available`);
      }
    }
    getComponent() {
      return this.component;
    }
    setComponent(e) {
      if (e.name !== this.name)
        throw Error(
          `Mismatching Component ${e.name} for Provider ${this.name}.`
        );
      if (this.component)
        throw Error(`Component for ${this.name} has already been provided`);
      if (((this.component = e), !!this.shouldAutoInitialize())) {
        if (Xq(e))
          try {
            this.getOrInitializeService({ instanceIdentifier: Pn });
          } catch {}
        for (let [r, n] of this.instancesDeferred.entries()) {
          let i = this.normalizeInstanceIdentifier(r);
          try {
            let a = this.getOrInitializeService({ instanceIdentifier: i });
            n.resolve(a);
          } catch {}
        }
      }
    }
    clearInstance(e = Pn) {
      this.instancesDeferred.delete(e),
        this.instancesOptions.delete(e),
        this.instances.delete(e);
    }
    async delete() {
      let e = Array.from(this.instances.values());
      await Promise.all([
        ...e.filter((r) => "INTERNAL" in r).map((r) => r.INTERNAL.delete()),
        ...e.filter((r) => "_delete" in r).map((r) => r._delete()),
      ]);
    }
    isComponentSet() {
      return this.component != null;
    }
    isInitialized(e = Pn) {
      return this.instances.has(e);
    }
    getOptions(e = Pn) {
      return this.instancesOptions.get(e) || {};
    }
    initialize(e = {}) {
      let { options: r = {} } = e,
        n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
      if (this.isInitialized(n))
        throw Error(`${this.name}(${n}) has already been initialized`);
      if (!this.isComponentSet())
        throw Error(`Component ${this.name} has not been registered yet`);
      let i = this.getOrInitializeService({
        instanceIdentifier: n,
        options: r,
      });
      for (let [a, o] of this.instancesDeferred.entries()) {
        let s = this.normalizeInstanceIdentifier(a);
        n === s && o.resolve(i);
      }
      return i;
    }
    onInit(e, r) {
      var n;
      let i = this.normalizeInstanceIdentifier(r),
        a =
          (n = this.onInitCallbacks.get(i)) !== null && n !== void 0
            ? n
            : new Set();
      a.add(e), this.onInitCallbacks.set(i, a);
      let o = this.instances.get(i);
      return (
        o && e(o, i),
        () => {
          a.delete(e);
        }
      );
    }
    invokeOnInitCallbacks(e, r) {
      let n = this.onInitCallbacks.get(r);
      if (n)
        for (let i of n)
          try {
            i(e, r);
          } catch {}
    }
    getOrInitializeService({ instanceIdentifier: e, options: r = {} }) {
      let n = this.instances.get(e);
      if (
        !n &&
        this.component &&
        ((n = this.component.instanceFactory(this.container, {
          instanceIdentifier: Jq(e),
          options: r,
        })),
        this.instances.set(e, n),
        this.instancesOptions.set(e, r),
        this.invokeOnInitCallbacks(n, e),
        this.component.onInstanceCreated)
      )
        try {
          this.component.onInstanceCreated(this.container, e, n);
        } catch {}
      return n || null;
    }
    normalizeInstanceIdentifier(e = Pn) {
      return this.component ? (this.component.multipleInstances ? e : Pn) : e;
    }
    shouldAutoInitialize() {
      return (
        !!this.component && this.component.instantiationMode !== "EXPLICIT"
      );
    }
  };
  function Jq(t) {
    return t === Pn ? void 0 : t;
  }
  function Xq(t) {
    return t.instantiationMode === "EAGER";
  }
  var Vs = class {
    constructor(e) {
      (this.name = e), (this.providers = new Map());
    }
    addComponent(e) {
      let r = this.getProvider(e.name);
      if (r.isComponentSet())
        throw new Error(
          `Component ${e.name} has already been registered with ${this.name}`
        );
      r.setComponent(e);
    }
    addOrOverwriteComponent(e) {
      this.getProvider(e.name).isComponentSet() &&
        this.providers.delete(e.name),
        this.addComponent(e);
    }
    getProvider(e) {
      if (this.providers.has(e)) return this.providers.get(e);
      let r = new Fp(e, this);
      return this.providers.set(e, r), r;
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  };
  var Zq = [],
    Se;
  (function (t) {
    (t[(t.DEBUG = 0)] = "DEBUG"),
      (t[(t.VERBOSE = 1)] = "VERBOSE"),
      (t[(t.INFO = 2)] = "INFO"),
      (t[(t.WARN = 3)] = "WARN"),
      (t[(t.ERROR = 4)] = "ERROR"),
      (t[(t.SILENT = 5)] = "SILENT");
  })(Se || (Se = {}));
  var eB = {
      debug: Se.DEBUG,
      verbose: Se.VERBOSE,
      info: Se.INFO,
      warn: Se.WARN,
      error: Se.ERROR,
      silent: Se.SILENT,
    },
    tB = Se.INFO,
    rB = {
      [Se.DEBUG]: "log",
      [Se.VERBOSE]: "log",
      [Se.INFO]: "info",
      [Se.WARN]: "warn",
      [Se.ERROR]: "error",
    },
    nB = (t, e, ...r) => {
      if (e < t.logLevel) return;
      let n = new Date().toISOString(),
        i = rB[e];
      if (i) console[i](`[${n}]  ${t.name}:`, ...r);
      else
        throw new Error(
          `Attempted to log a message with an invalid logType (value: ${e})`
        );
    },
    Ci = class {
      constructor(e) {
        (this.name = e),
          (this._logLevel = tB),
          (this._logHandler = nB),
          (this._userLogHandler = null),
          Zq.push(this);
      }
      get logLevel() {
        return this._logLevel;
      }
      set logLevel(e) {
        if (!(e in Se))
          throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
        this._logLevel = e;
      }
      setLogLevel(e) {
        this._logLevel = typeof e == "string" ? eB[e] : e;
      }
      get logHandler() {
        return this._logHandler;
      }
      set logHandler(e) {
        if (typeof e != "function")
          throw new TypeError(
            "Value assigned to `logHandler` must be a function"
          );
        this._logHandler = e;
      }
      get userLogHandler() {
        return this._userLogHandler;
      }
      set userLogHandler(e) {
        this._userLogHandler = e;
      }
      debug(...e) {
        this._userLogHandler && this._userLogHandler(this, Se.DEBUG, ...e),
          this._logHandler(this, Se.DEBUG, ...e);
      }
      log(...e) {
        this._userLogHandler && this._userLogHandler(this, Se.VERBOSE, ...e),
          this._logHandler(this, Se.VERBOSE, ...e);
      }
      info(...e) {
        this._userLogHandler && this._userLogHandler(this, Se.INFO, ...e),
          this._logHandler(this, Se.INFO, ...e);
      }
      warn(...e) {
        this._userLogHandler && this._userLogHandler(this, Se.WARN, ...e),
          this._logHandler(this, Se.WARN, ...e);
      }
      error(...e) {
        this._userLogHandler && this._userLogHandler(this, Se.ERROR, ...e),
          this._logHandler(this, Se.ERROR, ...e);
      }
    };
  var iB = (t, e) => e.some((r) => t instanceof r),
    AT,
    OT;
  function aB() {
    return (
      AT ||
      (AT = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
    );
  }
  function oB() {
    return (
      OT ||
      (OT = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey,
      ])
    );
  }
  var kT = new WeakMap(),
    Lp = new WeakMap(),
    CT = new WeakMap(),
    Pp = new WeakMap(),
    qp = new WeakMap();
  function sB(t) {
    let e = new Promise((r, n) => {
      let i = () => {
          t.removeEventListener("success", a),
            t.removeEventListener("error", o);
        },
        a = () => {
          r(yr(t.result)), i();
        },
        o = () => {
          n(t.error), i();
        };
      t.addEventListener("success", a), t.addEventListener("error", o);
    });
    return (
      e
        .then((r) => {
          r instanceof IDBCursor && kT.set(r, t);
        })
        .catch(() => {}),
      qp.set(e, t),
      e
    );
  }
  function cB(t) {
    if (Lp.has(t)) return;
    let e = new Promise((r, n) => {
      let i = () => {
          t.removeEventListener("complete", a),
            t.removeEventListener("error", o),
            t.removeEventListener("abort", o);
        },
        a = () => {
          r(), i();
        },
        o = () => {
          n(t.error || new DOMException("AbortError", "AbortError")), i();
        };
      t.addEventListener("complete", a),
        t.addEventListener("error", o),
        t.addEventListener("abort", o);
    });
    Lp.set(t, e);
  }
  var Up = {
    get(t, e, r) {
      if (t instanceof IDBTransaction) {
        if (e === "done") return Lp.get(t);
        if (e === "objectStoreNames") return t.objectStoreNames || CT.get(t);
        if (e === "store")
          return r.objectStoreNames[1]
            ? void 0
            : r.objectStore(r.objectStoreNames[0]);
      }
      return yr(t[e]);
    },
    set(t, e, r) {
      return (t[e] = r), !0;
    },
    has(t, e) {
      return t instanceof IDBTransaction && (e === "done" || e === "store")
        ? !0
        : e in t;
    },
  };
  function MT(t) {
    Up = t(Up);
  }
  function uB(t) {
    return t === IDBDatabase.prototype.transaction &&
      !("objectStoreNames" in IDBTransaction.prototype)
      ? function (e, ...r) {
          let n = t.call(Ws(this), e, ...r);
          return CT.set(n, e.sort ? e.sort() : [e]), yr(n);
        }
      : oB().includes(t)
      ? function (...e) {
          return t.apply(Ws(this), e), yr(kT.get(this));
        }
      : function (...e) {
          return yr(t.apply(Ws(this), e));
        };
  }
  function lB(t) {
    return typeof t == "function"
      ? uB(t)
      : (t instanceof IDBTransaction && cB(t),
        iB(t, aB()) ? new Proxy(t, Up) : t);
  }
  function yr(t) {
    if (t instanceof IDBRequest) return sB(t);
    if (Pp.has(t)) return Pp.get(t);
    let e = lB(t);
    return e !== t && (Pp.set(t, e), qp.set(e, t)), e;
  }
  var Ws = (t) => qp.get(t);
  function DT(
    t,
    e,
    { blocked: r, upgrade: n, blocking: i, terminated: a } = {}
  ) {
    let o = indexedDB.open(t, e),
      s = yr(o);
    return (
      n &&
        o.addEventListener("upgradeneeded", (c) => {
          n(yr(o.result), c.oldVersion, c.newVersion, yr(o.transaction), c);
        }),
      r &&
        o.addEventListener("blocked", (c) => r(c.oldVersion, c.newVersion, c)),
      s
        .then((c) => {
          a && c.addEventListener("close", () => a()),
            i &&
              c.addEventListener("versionchange", (u) =>
                i(u.oldVersion, u.newVersion, u)
              );
        })
        .catch(() => {}),
      s
    );
  }
  var pB = ["get", "getKey", "getAll", "getAllKeys", "count"],
    fB = ["put", "add", "delete", "clear"],
    Bp = new Map();
  function NT(t, e) {
    if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
      return;
    if (Bp.get(e)) return Bp.get(e);
    let r = e.replace(/FromIndex$/, ""),
      n = e !== r,
      i = fB.includes(r);
    if (
      !(r in (n ? IDBIndex : IDBObjectStore).prototype) ||
      !(i || pB.includes(r))
    )
      return;
    let a = async function (o, ...s) {
      let c = this.transaction(o, i ? "readwrite" : "readonly"),
        u = c.store;
      return (
        n && (u = u.index(s.shift())),
        (await Promise.all([u[r](...s), i && c.done]))[0]
      );
    };
    return Bp.set(e, a), a;
  }
  MT((t) => ({
    ...t,
    get: (e, r, n) => NT(e, r) || t.get(e, r, n),
    has: (e, r) => !!NT(e, r) || t.has(e, r),
  }));
  var Vp = class {
    constructor(e) {
      this.container = e;
    }
    getPlatformInfoString() {
      return this.container
        .getProviders()
        .map((r) => {
          if (dB(r)) {
            let n = r.getImmediate();
            return `${n.library}/${n.version}`;
          } else return null;
        })
        .filter((r) => r)
        .join(" ");
    }
  };
  function dB(t) {
    let e = t.getComponent();
    return e?.type === "VERSION";
  }
  var Wp = "@firebase/app",
    RT = "0.9.26";
  var Ln = new Ci("@firebase/app"),
    hB = "@firebase/app-compat",
    gB = "@firebase/analytics-compat",
    mB = "@firebase/analytics",
    yB = "@firebase/app-check-compat",
    vB = "@firebase/app-check",
    _B = "@firebase/auth",
    bB = "@firebase/auth-compat",
    SB = "@firebase/database",
    TB = "@firebase/database-compat",
    EB = "@firebase/functions",
    IB = "@firebase/functions-compat",
    xB = "@firebase/installations",
    wB = "@firebase/installations-compat",
    AB = "@firebase/messaging",
    OB = "@firebase/messaging-compat",
    kB = "@firebase/performance",
    CB = "@firebase/performance-compat",
    MB = "@firebase/remote-config",
    NB = "@firebase/remote-config-compat",
    DB = "@firebase/storage",
    RB = "@firebase/storage-compat",
    FB = "@firebase/firestore",
    PB = "@firebase/firestore-compat",
    LB = "firebase",
    UB = "10.7.2";
  var Hp = "[DEFAULT]",
    qB = {
      [Wp]: "fire-core",
      [hB]: "fire-core-compat",
      [mB]: "fire-analytics",
      [gB]: "fire-analytics-compat",
      [vB]: "fire-app-check",
      [yB]: "fire-app-check-compat",
      [_B]: "fire-auth",
      [bB]: "fire-auth-compat",
      [SB]: "fire-rtdb",
      [TB]: "fire-rtdb-compat",
      [EB]: "fire-fn",
      [IB]: "fire-fn-compat",
      [xB]: "fire-iid",
      [wB]: "fire-iid-compat",
      [AB]: "fire-fcm",
      [OB]: "fire-fcm-compat",
      [kB]: "fire-perf",
      [CB]: "fire-perf-compat",
      [MB]: "fire-rc",
      [NB]: "fire-rc-compat",
      [DB]: "fire-gcs",
      [RB]: "fire-gcs-compat",
      [FB]: "fire-fst",
      [PB]: "fire-fst-compat",
      "fire-js": "fire-js",
      [LB]: "fire-js-all",
    };
  var Hs = new Map(),
    Gp = new Map();
  function BB(t, e) {
    try {
      t.container.addComponent(e);
    } catch (r) {
      Ln.debug(
        `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
        r
      );
    }
  }
  function Mi(t) {
    let e = t.name;
    if (Gp.has(e))
      return (
        Ln.debug(`There were multiple attempts to register component ${e}.`), !1
      );
    Gp.set(e, t);
    for (let r of Hs.values()) BB(r, t);
    return !0;
  }
  function Qp(t, e) {
    let r = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
    return r && r.triggerHeartbeat(), t.container.getProvider(e);
  }
  var jB = {
      "no-app":
        "No Firebase App '{$appName}' has been created - call initializeApp() first",
      "bad-app-name": "Illegal App name: '{$appName}",
      "duplicate-app":
        "Firebase App named '{$appName}' already exists with different options or config",
      "app-deleted": "Firebase App named '{$appName}' already deleted",
      "no-options":
        "Need to provide options, when not being deployed to hosting via source.",
      "invalid-app-argument":
        "firebase.{$appName}() takes either no argument or a Firebase App instance.",
      "invalid-log-argument":
        "First argument to `onLog` must be null or a function.",
      "idb-open":
        "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-get":
        "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-set":
        "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-delete":
        "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    },
    an = new Nr("app", "Firebase", jB);
  var zp = class {
    constructor(e, r, n) {
      (this._isDeleted = !1),
        (this._options = Object.assign({}, e)),
        (this._config = Object.assign({}, r)),
        (this._name = r.name),
        (this._automaticDataCollectionEnabled =
          r.automaticDataCollectionEnabled),
        (this._container = n),
        this.container.addComponent(new mr("app", () => this, "PUBLIC"));
    }
    get automaticDataCollectionEnabled() {
      return this.checkDestroyed(), this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(e) {
      this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
    }
    get name() {
      return this.checkDestroyed(), this._name;
    }
    get options() {
      return this.checkDestroyed(), this._options;
    }
    get config() {
      return this.checkDestroyed(), this._config;
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(e) {
      this._isDeleted = e;
    }
    checkDestroyed() {
      if (this.isDeleted)
        throw an.create("app-deleted", { appName: this._name });
    }
  };
  var Ni = UB;
  function Yp(t, e = {}) {
    let r = t;
    typeof e != "object" && (e = { name: e });
    let n = Object.assign({ name: Hp, automaticDataCollectionEnabled: !1 }, e),
      i = n.name;
    if (typeof i != "string" || !i)
      throw an.create("bad-app-name", { appName: String(i) });
    if ((r || (r = Dp()), !r)) throw an.create("no-options");
    let a = Hs.get(i);
    if (a) {
      if (wi(r, a.options) && wi(n, a.config)) return a;
      throw an.create("duplicate-app", { appName: i });
    }
    let o = new Vs(i);
    for (let c of Gp.values()) o.addComponent(c);
    let s = new zp(r, n, o);
    return Hs.set(i, s), s;
  }
  function UT(t = Hp) {
    let e = Hs.get(t);
    if (!e && t === Hp && Dp()) return Yp();
    if (!e) throw an.create("no-app", { appName: t });
    return e;
  }
  function on(t, e, r) {
    var n;
    let i = (n = qB[t]) !== null && n !== void 0 ? n : t;
    r && (i += `-${r}`);
    let a = i.match(/\s|\//),
      o = e.match(/\s|\//);
    if (a || o) {
      let s = [`Unable to register library "${i}" with version "${e}":`];
      a &&
        s.push(
          `library name "${i}" contains illegal characters (whitespace or "/")`
        ),
        a && o && s.push("and"),
        o &&
          s.push(
            `version name "${e}" contains illegal characters (whitespace or "/")`
          ),
        Ln.warn(s.join(" "));
      return;
    }
    Mi(new mr(`${i}-version`, () => ({ library: i, version: e }), "VERSION"));
  }
  var VB = "firebase-heartbeat-database",
    WB = 1,
    Ua = "firebase-heartbeat-store",
    jp = null;
  function qT() {
    return (
      jp ||
        (jp = DT(VB, WB, {
          upgrade: (t, e) => {
            switch (e) {
              case 0:
                try {
                  t.createObjectStore(Ua);
                } catch (r) {
                  console.warn(r);
                }
            }
          },
        }).catch((t) => {
          throw an.create("idb-open", { originalErrorMessage: t.message });
        })),
      jp
    );
  }
  async function HB(t) {
    try {
      return await (await qT()).transaction(Ua).objectStore(Ua).get(BT(t));
    } catch (e) {
      if (e instanceof Kt) Ln.warn(e.message);
      else {
        let r = an.create("idb-get", { originalErrorMessage: e?.message });
        Ln.warn(r.message);
      }
    }
  }
  async function FT(t, e) {
    try {
      let n = (await qT()).transaction(Ua, "readwrite");
      await n.objectStore(Ua).put(e, BT(t)), await n.done;
    } catch (r) {
      if (r instanceof Kt) Ln.warn(r.message);
      else {
        let n = an.create("idb-set", { originalErrorMessage: r?.message });
        Ln.warn(n.message);
      }
    }
  }
  function BT(t) {
    return `${t.name}!${t.options.appId}`;
  }
  var GB = 1024,
    zB = 30 * 24 * 60 * 60 * 1e3,
    $p = class {
      constructor(e) {
        (this.container = e), (this._heartbeatsCache = null);
        let r = this.container.getProvider("app").getImmediate();
        (this._storage = new Kp(r)),
          (this._heartbeatsCachePromise = this._storage
            .read()
            .then((n) => ((this._heartbeatsCache = n), n)));
      }
      async triggerHeartbeat() {
        var e, r;
        let i = this.container
            .getProvider("platform-logger")
            .getImmediate()
            .getPlatformInfoString(),
          a = PT();
        if (
          !(
            ((e = this._heartbeatsCache) === null || e === void 0
              ? void 0
              : e.heartbeats) == null &&
            ((this._heartbeatsCache = await this._heartbeatsCachePromise),
            ((r = this._heartbeatsCache) === null || r === void 0
              ? void 0
              : r.heartbeats) == null)
          ) &&
          !(
            this._heartbeatsCache.lastSentHeartbeatDate === a ||
            this._heartbeatsCache.heartbeats.some((o) => o.date === a)
          )
        )
          return (
            this._heartbeatsCache.heartbeats.push({ date: a, agent: i }),
            (this._heartbeatsCache.heartbeats =
              this._heartbeatsCache.heartbeats.filter((o) => {
                let s = new Date(o.date).valueOf();
                return Date.now() - s <= zB;
              })),
            this._storage.overwrite(this._heartbeatsCache)
          );
      }
      async getHeartbeatsHeader() {
        var e;
        if (
          (this._heartbeatsCache === null &&
            (await this._heartbeatsCachePromise),
          ((e = this._heartbeatsCache) === null || e === void 0
            ? void 0
            : e.heartbeats) == null ||
            this._heartbeatsCache.heartbeats.length === 0)
        )
          return "";
        let r = PT(),
          { heartbeatsToSend: n, unsentEntries: i } = $B(
            this._heartbeatsCache.heartbeats
          ),
          a = Cp(JSON.stringify({ version: 2, heartbeats: n }));
        return (
          (this._heartbeatsCache.lastSentHeartbeatDate = r),
          i.length > 0
            ? ((this._heartbeatsCache.heartbeats = i),
              await this._storage.overwrite(this._heartbeatsCache))
            : ((this._heartbeatsCache.heartbeats = []),
              this._storage.overwrite(this._heartbeatsCache)),
          a
        );
      }
    };
  function PT() {
    return new Date().toISOString().substring(0, 10);
  }
  function $B(t, e = GB) {
    let r = [],
      n = t.slice();
    for (let i of t) {
      let a = r.find((o) => o.agent === i.agent);
      if (a) {
        if ((a.dates.push(i.date), LT(r) > e)) {
          a.dates.pop();
          break;
        }
      } else if ((r.push({ agent: i.agent, dates: [i.date] }), LT(r) > e)) {
        r.pop();
        break;
      }
      n = n.slice(1);
    }
    return { heartbeatsToSend: r, unsentEntries: n };
  }
  var Kp = class {
    constructor(e) {
      (this.app = e),
        (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
    }
    async runIndexedDBEnvironmentCheck() {
      return ET()
        ? IT()
            .then(() => !0)
            .catch(() => !1)
        : !1;
    }
    async read() {
      if (await this._canUseIndexedDBPromise) {
        let r = await HB(this.app);
        return r?.heartbeats ? r : { heartbeats: [] };
      } else return { heartbeats: [] };
    }
    async overwrite(e) {
      var r;
      if (await this._canUseIndexedDBPromise) {
        let i = await this.read();
        return FT(this.app, {
          lastSentHeartbeatDate:
            (r = e.lastSentHeartbeatDate) !== null && r !== void 0
              ? r
              : i.lastSentHeartbeatDate,
          heartbeats: e.heartbeats,
        });
      } else return;
    }
    async add(e) {
      var r;
      if (await this._canUseIndexedDBPromise) {
        let i = await this.read();
        return FT(this.app, {
          lastSentHeartbeatDate:
            (r = e.lastSentHeartbeatDate) !== null && r !== void 0
              ? r
              : i.lastSentHeartbeatDate,
          heartbeats: [...i.heartbeats, ...e.heartbeats],
        });
      } else return;
    }
  };
  function LT(t) {
    return Cp(JSON.stringify({ version: 2, heartbeats: t })).length;
  }
  function KB(t) {
    Mi(new mr("platform-logger", (e) => new Vp(e), "PRIVATE")),
      Mi(new mr("heartbeat", (e) => new $p(e), "PRIVATE")),
      on(Wp, RT, t),
      on(Wp, RT, "esm2017"),
      on("fire-js", "");
  }
  KB("");
  var QB = "firebase",
    YB = "10.7.2";
  on(QB, YB, "app");
  var Jp = function (t, e) {
    return (
      (Jp =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
        }),
      Jp(t, e)
    );
  };
  function Le(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError(
        "Class extends value " + String(e) + " is not a constructor or null"
      );
    Jp(t, e);
    function r() {
      this.constructor = t;
    }
    t.prototype =
      e === null ? Object.create(e) : ((r.prototype = e.prototype), new r());
  }
  var x = function () {
    return (
      (x =
        Object.assign ||
        function (e) {
          for (var r, n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
      x.apply(this, arguments)
    );
  };
  function Ge(t, e) {
    var r = {};
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        e.indexOf(n) < 0 &&
        (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
        e.indexOf(n[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
          (r[n[i]] = t[n[i]]);
    return r;
  }
  function Qt(t, e, r, n) {
    function i(a) {
      return a instanceof r
        ? a
        : new r(function (o) {
            o(a);
          });
    }
    return new (r || (r = Promise))(function (a, o) {
      function s(l) {
        try {
          u(n.next(l));
        } catch (f) {
          o(f);
        }
      }
      function c(l) {
        try {
          u(n.throw(l));
        } catch (f) {
          o(f);
        }
      }
      function u(l) {
        l.done ? a(l.value) : i(l.value).then(s, c);
      }
      u((n = n.apply(t, e || [])).next());
    });
  }
  function Yt(t, e) {
    var r = {
        label: 0,
        sent: function () {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      },
      n,
      i,
      a,
      o;
    return (
      (o = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function s(u) {
      return function (l) {
        return c([u, l]);
      };
    }
    function c(u) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; o && ((o = 0), u[0] && (r = 0)), r; )
        try {
          if (
            ((n = 1),
            i &&
              (a =
                u[0] & 2
                  ? i.return
                  : u[0]
                  ? i.throw || ((a = i.return) && a.call(i), 0)
                  : i.next) &&
              !(a = a.call(i, u[1])).done)
          )
            return a;
          switch (((i = 0), a && (u = [u[0] & 2, a.value]), u[0])) {
            case 0:
            case 1:
              a = u;
              break;
            case 4:
              return r.label++, { value: u[1], done: !1 };
            case 5:
              r.label++, (i = u[1]), (u = [0]);
              continue;
            case 7:
              (u = r.ops.pop()), r.trys.pop();
              continue;
            default:
              if (
                ((a = r.trys),
                !(a = a.length > 0 && a[a.length - 1]) &&
                  (u[0] === 6 || u[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (u[0] === 3 && (!a || (u[1] > a[0] && u[1] < a[3]))) {
                r.label = u[1];
                break;
              }
              if (u[0] === 6 && r.label < a[1]) {
                (r.label = a[1]), (a = u);
                break;
              }
              if (a && r.label < a[2]) {
                (r.label = a[2]), r.ops.push(u);
                break;
              }
              a[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          u = e.call(t, r);
        } catch (l) {
          (u = [6, l]), (i = 0);
        } finally {
          n = a = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  }
  function Ht(t, e, r) {
    if (r || arguments.length === 2)
      for (var n = 0, i = e.length, a; n < i; n++)
        (a || !(n in e)) &&
          (a || (a = Array.prototype.slice.call(e, 0, n)), (a[n] = e[n]));
    return t.concat(a || Array.prototype.slice.call(e));
  }
  function nE() {
    return {
      "dependent-sdk-initialized-before-auth":
        "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    };
  }
  var iE = nE,
    aE = new Nr("auth", "Firebase", nE());
  var Ys = new Ci("@firebase/auth");
  function JB(t, ...e) {
    Ys.logLevel <= Se.WARN && Ys.warn(`Auth (${Ni}): ${t}`, ...e);
  }
  function zs(t, ...e) {
    Ys.logLevel <= Se.ERROR && Ys.error(`Auth (${Ni}): ${t}`, ...e);
  }
  function Jt(t, ...e) {
    throw _f(t, ...e);
  }
  function Rr(t, ...e) {
    return _f(t, ...e);
  }
  function XB(t, e, r) {
    let n = Object.assign(Object.assign({}, iE()), { [e]: r });
    return new Nr("auth", "Firebase", n).create(e, { appName: t.name });
  }
  function _f(t, ...e) {
    if (typeof t != "string") {
      let r = e[0],
        n = [...e.slice(1)];
      return n[0] && (n[0].appName = t.name), t._errorFactory.create(r, ...n);
    }
    return aE.create(t, ...e);
  }
  function Z(t, e, ...r) {
    if (!t) throw _f(e, ...r);
  }
  function vr(t) {
    let e = "INTERNAL ASSERTION FAILED: " + t;
    throw (zs(e), new Error(e));
  }
  function Fr(t, e) {
    t || vr(e);
  }
  function ef() {
    var t;
    return (
      (typeof self < "u" &&
        ((t = self.location) === null || t === void 0 ? void 0 : t.href)) ||
      ""
    );
  }
  function ZB() {
    return jT() === "http:" || jT() === "https:";
  }
  function jT() {
    var t;
    return (
      (typeof self < "u" &&
        ((t = self.location) === null || t === void 0 ? void 0 : t.protocol)) ||
      null
    );
  }
  function e2() {
    return typeof navigator < "u" &&
      navigator &&
      "onLine" in navigator &&
      typeof navigator.onLine == "boolean" &&
      (ZB() || bT() || "connection" in navigator)
      ? navigator.onLine
      : !0;
  }
  function t2() {
    if (typeof navigator > "u") return null;
    let t = navigator;
    return (t.languages && t.languages[0]) || t.language || null;
  }
  var Un = class {
    constructor(e, r) {
      (this.shortDelay = e),
        (this.longDelay = r),
        Fr(r > e, "Short delay should be less than long delay!"),
        (this.isMobile = _T() || ST());
    }
    get() {
      return e2()
        ? this.isMobile
          ? this.longDelay
          : this.shortDelay
        : Math.min(5e3, this.shortDelay);
    }
  };
  function bf(t, e) {
    Fr(t.emulator, "Emulator should always be set here");
    let { url: r } = t.emulator;
    return e ? `${r}${e.startsWith("/") ? e.slice(1) : e}` : r;
  }
  var Js = class {
    static initialize(e, r, n) {
      (this.fetchImpl = e),
        r && (this.headersImpl = r),
        n && (this.responseImpl = n);
    }
    static fetch() {
      if (this.fetchImpl) return this.fetchImpl;
      if (typeof self < "u" && "fetch" in self) return self.fetch;
      if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
      if (typeof fetch < "u") return fetch;
      vr(
        "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
      );
    }
    static headers() {
      if (this.headersImpl) return this.headersImpl;
      if (typeof self < "u" && "Headers" in self) return self.Headers;
      if (typeof globalThis < "u" && globalThis.Headers)
        return globalThis.Headers;
      if (typeof Headers < "u") return Headers;
      vr(
        "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
      );
    }
    static response() {
      if (this.responseImpl) return this.responseImpl;
      if (typeof self < "u" && "Response" in self) return self.Response;
      if (typeof globalThis < "u" && globalThis.Response)
        return globalThis.Response;
      if (typeof Response < "u") return Response;
      vr(
        "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
      );
    }
  };
  var r2 = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "missing-password",
    INVALID_LOGIN_CREDENTIALS: "invalid-credential",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
    RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
    MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
    INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
    INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
    MISSING_CLIENT_TYPE: "missing-client-type",
    MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
    INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
    INVALID_REQ_TYPE: "invalid-req-type",
  };
  var n2 = new Un(3e4, 6e4);
  function ze(t, e) {
    return t.tenantId && !e.tenantId
      ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
      : e;
  }
  async function pt(t, e, r, n, i = {}) {
    return oE(t, i, async () => {
      let a = {},
        o = {};
      n && (e === "GET" ? (o = n) : (a = { body: JSON.stringify(n) }));
      let s = Ai(Object.assign({ key: t.config.apiKey }, o)).slice(1),
        c = await t._getAdditionalHeaders();
      return (
        (c["Content-Type"] = "application/json"),
        t.languageCode && (c["X-Firebase-Locale"] = t.languageCode),
        Js.fetch()(
          sE(t, t.config.apiHost, r, s),
          Object.assign(
            { method: e, headers: c, referrerPolicy: "no-referrer" },
            a
          )
        )
      );
    });
  }
  async function oE(t, e, r) {
    t._canInitEmulator = !1;
    let n = Object.assign(Object.assign({}, r2), e);
    try {
      let i = new tf(t),
        a = await Promise.race([r(), i.promise]);
      i.clearNetworkTimeout();
      let o = await a.json();
      if ("needConfirmation" in o)
        throw qa(t, "account-exists-with-different-credential", o);
      if (a.ok && !("errorMessage" in o)) return o;
      {
        let s = a.ok ? o.errorMessage : o.error.message,
          [c, u] = s.split(" : ");
        if (c === "FEDERATED_USER_ID_ALREADY_LINKED")
          throw qa(t, "credential-already-in-use", o);
        if (c === "EMAIL_EXISTS") throw qa(t, "email-already-in-use", o);
        if (c === "USER_DISABLED") throw qa(t, "user-disabled", o);
        let l = n[c] || c.toLowerCase().replace(/[_\s]+/g, "-");
        if (u) throw XB(t, l, u);
        Jt(t, l);
      }
    } catch (i) {
      if (i instanceof Kt) throw i;
      Jt(t, "network-request-failed", { message: String(i) });
    }
  }
  async function cn(t, e, r, n, i = {}) {
    let a = await pt(t, e, r, n, i);
    return (
      "mfaPendingCredential" in a &&
        Jt(t, "multi-factor-auth-required", { _serverResponse: a }),
      a
    );
  }
  function sE(t, e, r, n) {
    let i = `${e}${r}?${n}`;
    return t.config.emulator ? bf(t.config, i) : `${t.config.apiScheme}://${i}`;
  }
  function i2(t) {
    switch (t) {
      case "ENFORCE":
        return "ENFORCE";
      case "AUDIT":
        return "AUDIT";
      case "OFF":
        return "OFF";
      default:
        return "ENFORCEMENT_STATE_UNSPECIFIED";
    }
  }
  var tf = class {
    constructor(e) {
      (this.auth = e),
        (this.timer = null),
        (this.promise = new Promise((r, n) => {
          this.timer = setTimeout(
            () => n(Rr(this.auth, "network-request-failed")),
            n2.get()
          );
        }));
    }
    clearNetworkTimeout() {
      clearTimeout(this.timer);
    }
  };
  function qa(t, e, r) {
    let n = { appName: t.name };
    r.email && (n.email = r.email),
      r.phoneNumber && (n.phoneNumber = r.phoneNumber);
    let i = Rr(t, e, n);
    return (i.customData._tokenResponse = r), i;
  }
  function VT(t) {
    return t !== void 0 && t.enterprise !== void 0;
  }
  var rf = class {
    constructor(e) {
      if (
        ((this.siteKey = ""),
        (this.recaptchaEnforcementState = []),
        e.recaptchaKey === void 0)
      )
        throw new Error("recaptchaKey undefined");
      (this.siteKey = e.recaptchaKey.split("/")[3]),
        (this.recaptchaEnforcementState = e.recaptchaEnforcementState);
    }
    getProviderEnforcementState(e) {
      if (
        !this.recaptchaEnforcementState ||
        this.recaptchaEnforcementState.length === 0
      )
        return null;
      for (let r of this.recaptchaEnforcementState)
        if (r.provider && r.provider === e) return i2(r.enforcementState);
      return null;
    }
    isProviderEnabled(e) {
      return (
        this.getProviderEnforcementState(e) === "ENFORCE" ||
        this.getProviderEnforcementState(e) === "AUDIT"
      );
    }
  };
  async function a2(t, e) {
    return pt(t, "GET", "/v2/recaptchaConfig", ze(t, e));
  }
  async function o2(t, e) {
    return pt(t, "POST", "/v1/accounts:delete", e);
  }
  async function s2(t, e) {
    return pt(t, "POST", "/v1/accounts:lookup", e);
  }
  function Ba(t) {
    if (t)
      try {
        let e = new Date(Number(t));
        if (!isNaN(e.getTime())) return e.toUTCString();
      } catch {}
  }
  async function cE(t, e = !1) {
    let r = gr(t),
      n = await r.getIdToken(e),
      i = Sf(n);
    Z(i && i.exp && i.auth_time && i.iat, r.auth, "internal-error");
    let a = typeof i.firebase == "object" ? i.firebase : void 0,
      o = a?.sign_in_provider;
    return {
      claims: i,
      token: n,
      authTime: Ba(Xp(i.auth_time)),
      issuedAtTime: Ba(Xp(i.iat)),
      expirationTime: Ba(Xp(i.exp)),
      signInProvider: o || null,
      signInSecondFactor: a?.sign_in_second_factor || null,
    };
  }
  function Xp(t) {
    return Number(t) * 1e3;
  }
  function Sf(t) {
    let [e, r, n] = t.split(".");
    if (e === void 0 || r === void 0 || n === void 0)
      return zs("JWT malformed, contained fewer than 3 sections"), null;
    try {
      let i = Mp(r);
      return i
        ? JSON.parse(i)
        : (zs("Failed to decode base64 JWT payload"), null);
    } catch (i) {
      return (
        zs("Caught error parsing JWT payload as JSON", i?.toString()), null
      );
    }
  }
  function c2(t) {
    let e = Sf(t);
    return (
      Z(e, "internal-error"),
      Z(typeof e.exp < "u", "internal-error"),
      Z(typeof e.iat < "u", "internal-error"),
      Number(e.exp) - Number(e.iat)
    );
  }
  async function ja(t, e, r = !1) {
    if (r) return e;
    try {
      return await e;
    } catch (n) {
      throw (
        (n instanceof Kt &&
          u2(n) &&
          t.auth.currentUser === t &&
          (await t.auth.signOut()),
        n)
      );
    }
  }
  function u2({ code: t }) {
    return t === "auth/user-disabled" || t === "auth/user-token-expired";
  }
  var nf = class {
    constructor(e) {
      (this.user = e),
        (this.isRunning = !1),
        (this.timerId = null),
        (this.errorBackoff = 3e4);
    }
    _start() {
      this.isRunning || ((this.isRunning = !0), this.schedule());
    }
    _stop() {
      this.isRunning &&
        ((this.isRunning = !1),
        this.timerId !== null && clearTimeout(this.timerId));
    }
    getInterval(e) {
      var r;
      if (e) {
        let n = this.errorBackoff;
        return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), n;
      } else {
        this.errorBackoff = 3e4;
        let i =
          ((r = this.user.stsTokenManager.expirationTime) !== null &&
          r !== void 0
            ? r
            : 0) -
          Date.now() -
          3e5;
        return Math.max(0, i);
      }
    }
    schedule(e = !1) {
      if (!this.isRunning) return;
      let r = this.getInterval(e);
      this.timerId = setTimeout(async () => {
        await this.iteration();
      }, r);
    }
    async iteration() {
      try {
        await this.user.getIdToken(!0);
      } catch (e) {
        e?.code === "auth/network-request-failed" && this.schedule(!0);
        return;
      }
      this.schedule();
    }
  };
  var Xs = class {
    constructor(e, r) {
      (this.createdAt = e), (this.lastLoginAt = r), this._initializeTime();
    }
    _initializeTime() {
      (this.lastSignInTime = Ba(this.lastLoginAt)),
        (this.creationTime = Ba(this.createdAt));
    }
    _copy(e) {
      (this.createdAt = e.createdAt),
        (this.lastLoginAt = e.lastLoginAt),
        this._initializeTime();
    }
    toJSON() {
      return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
    }
  };
  async function Zs(t) {
    var e;
    let r = t.auth,
      n = await t.getIdToken(),
      i = await ja(t, s2(r, { idToken: n }));
    Z(i?.users.length, r, "internal-error");
    let a = i.users[0];
    t._notifyReloadListener(a);
    let o =
        !((e = a.providerUserInfo) === null || e === void 0) && e.length
          ? p2(a.providerUserInfo)
          : [],
      s = l2(t.providerData, o),
      c = t.isAnonymous,
      u = !(t.email && a.passwordHash) && !s?.length,
      l = c ? u : !1,
      f = {
        uid: a.localId,
        displayName: a.displayName || null,
        photoURL: a.photoUrl || null,
        email: a.email || null,
        emailVerified: a.emailVerified || !1,
        phoneNumber: a.phoneNumber || null,
        tenantId: a.tenantId || null,
        providerData: s,
        metadata: new Xs(a.createdAt, a.lastLoginAt),
        isAnonymous: l,
      };
    Object.assign(t, f);
  }
  async function uE(t) {
    let e = gr(t);
    await Zs(e),
      await e.auth._persistUserIfCurrent(e),
      e.auth._notifyListenersIfCurrent(e);
  }
  function l2(t, e) {
    return [
      ...t.filter((n) => !e.some((i) => i.providerId === n.providerId)),
      ...e,
    ];
  }
  function p2(t) {
    return t.map((e) => {
      var { providerId: r } = e,
        n = Ge(e, ["providerId"]);
      return {
        providerId: r,
        uid: n.rawId || "",
        displayName: n.displayName || null,
        email: n.email || null,
        phoneNumber: n.phoneNumber || null,
        photoURL: n.photoUrl || null,
      };
    });
  }
  async function f2(t, e) {
    let r = await oE(t, {}, async () => {
      let n = Ai({ grant_type: "refresh_token", refresh_token: e }).slice(1),
        { tokenApiHost: i, apiKey: a } = t.config,
        o = sE(t, i, "/v1/token", `key=${a}`),
        s = await t._getAdditionalHeaders();
      return (
        (s["Content-Type"] = "application/x-www-form-urlencoded"),
        Js.fetch()(o, { method: "POST", headers: s, body: n })
      );
    });
    return {
      accessToken: r.access_token,
      expiresIn: r.expires_in,
      refreshToken: r.refresh_token,
    };
  }
  async function d2(t, e) {
    return pt(t, "POST", "/v2/accounts:revokeToken", ze(t, e));
  }
  var ec = class t {
    constructor() {
      (this.refreshToken = null),
        (this.accessToken = null),
        (this.expirationTime = null);
    }
    get isExpired() {
      return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
    }
    updateFromServerResponse(e) {
      Z(e.idToken, "internal-error"),
        Z(typeof e.idToken < "u", "internal-error"),
        Z(typeof e.refreshToken < "u", "internal-error");
      let r =
        "expiresIn" in e && typeof e.expiresIn < "u"
          ? Number(e.expiresIn)
          : c2(e.idToken);
      this.updateTokensAndExpiration(e.idToken, e.refreshToken, r);
    }
    async getToken(e, r = !1) {
      return (
        Z(!this.accessToken || this.refreshToken, e, "user-token-expired"),
        !r && this.accessToken && !this.isExpired
          ? this.accessToken
          : this.refreshToken
          ? (await this.refresh(e, this.refreshToken), this.accessToken)
          : null
      );
    }
    clearRefreshToken() {
      this.refreshToken = null;
    }
    async refresh(e, r) {
      let { accessToken: n, refreshToken: i, expiresIn: a } = await f2(e, r);
      this.updateTokensAndExpiration(n, i, Number(a));
    }
    updateTokensAndExpiration(e, r, n) {
      (this.refreshToken = r || null),
        (this.accessToken = e || null),
        (this.expirationTime = Date.now() + n * 1e3);
    }
    static fromJSON(e, r) {
      let { refreshToken: n, accessToken: i, expirationTime: a } = r,
        o = new t();
      return (
        n &&
          (Z(typeof n == "string", "internal-error", { appName: e }),
          (o.refreshToken = n)),
        i &&
          (Z(typeof i == "string", "internal-error", { appName: e }),
          (o.accessToken = i)),
        a &&
          (Z(typeof a == "number", "internal-error", { appName: e }),
          (o.expirationTime = a)),
        o
      );
    }
    toJSON() {
      return {
        refreshToken: this.refreshToken,
        accessToken: this.accessToken,
        expirationTime: this.expirationTime,
      };
    }
    _assign(e) {
      (this.accessToken = e.accessToken),
        (this.refreshToken = e.refreshToken),
        (this.expirationTime = e.expirationTime);
    }
    _clone() {
      return Object.assign(new t(), this.toJSON());
    }
    _performRefresh() {
      return vr("not implemented");
    }
  };
  function sn(t, e) {
    Z(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
  }
  var Va = class t {
    constructor(e) {
      var { uid: r, auth: n, stsTokenManager: i } = e,
        a = Ge(e, ["uid", "auth", "stsTokenManager"]);
      (this.providerId = "firebase"),
        (this.proactiveRefresh = new nf(this)),
        (this.reloadUserInfo = null),
        (this.reloadListener = null),
        (this.uid = r),
        (this.auth = n),
        (this.stsTokenManager = i),
        (this.accessToken = i.accessToken),
        (this.displayName = a.displayName || null),
        (this.email = a.email || null),
        (this.emailVerified = a.emailVerified || !1),
        (this.phoneNumber = a.phoneNumber || null),
        (this.photoURL = a.photoURL || null),
        (this.isAnonymous = a.isAnonymous || !1),
        (this.tenantId = a.tenantId || null),
        (this.providerData = a.providerData ? [...a.providerData] : []),
        (this.metadata = new Xs(
          a.createdAt || void 0,
          a.lastLoginAt || void 0
        ));
    }
    async getIdToken(e) {
      let r = await ja(this, this.stsTokenManager.getToken(this.auth, e));
      return (
        Z(r, this.auth, "internal-error"),
        this.accessToken !== r &&
          ((this.accessToken = r),
          await this.auth._persistUserIfCurrent(this),
          this.auth._notifyListenersIfCurrent(this)),
        r
      );
    }
    getIdTokenResult(e) {
      return cE(this, e);
    }
    reload() {
      return uE(this);
    }
    _assign(e) {
      this !== e &&
        (Z(this.uid === e.uid, this.auth, "internal-error"),
        (this.displayName = e.displayName),
        (this.photoURL = e.photoURL),
        (this.email = e.email),
        (this.emailVerified = e.emailVerified),
        (this.phoneNumber = e.phoneNumber),
        (this.isAnonymous = e.isAnonymous),
        (this.tenantId = e.tenantId),
        (this.providerData = e.providerData.map((r) => Object.assign({}, r))),
        this.metadata._copy(e.metadata),
        this.stsTokenManager._assign(e.stsTokenManager));
    }
    _clone(e) {
      let r = new t(
        Object.assign(Object.assign({}, this), {
          auth: e,
          stsTokenManager: this.stsTokenManager._clone(),
        })
      );
      return r.metadata._copy(this.metadata), r;
    }
    _onReload(e) {
      Z(!this.reloadListener, this.auth, "internal-error"),
        (this.reloadListener = e),
        this.reloadUserInfo &&
          (this._notifyReloadListener(this.reloadUserInfo),
          (this.reloadUserInfo = null));
    }
    _notifyReloadListener(e) {
      this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
    }
    _startProactiveRefresh() {
      this.proactiveRefresh._start();
    }
    _stopProactiveRefresh() {
      this.proactiveRefresh._stop();
    }
    async _updateTokensIfNecessary(e, r = !1) {
      let n = !1;
      e.idToken &&
        e.idToken !== this.stsTokenManager.accessToken &&
        (this.stsTokenManager.updateFromServerResponse(e), (n = !0)),
        r && (await Zs(this)),
        await this.auth._persistUserIfCurrent(this),
        n && this.auth._notifyListenersIfCurrent(this);
    }
    async delete() {
      let e = await this.getIdToken();
      return (
        await ja(this, o2(this.auth, { idToken: e })),
        this.stsTokenManager.clearRefreshToken(),
        this.auth.signOut()
      );
    }
    toJSON() {
      return Object.assign(
        Object.assign(
          {
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map((e) => Object.assign({}, e)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId,
          },
          this.metadata.toJSON()
        ),
        { apiKey: this.auth.config.apiKey, appName: this.auth.name }
      );
    }
    get refreshToken() {
      return this.stsTokenManager.refreshToken || "";
    }
    static _fromJSON(e, r) {
      var n, i, a, o, s, c, u, l;
      let f = (n = r.displayName) !== null && n !== void 0 ? n : void 0,
        p = (i = r.email) !== null && i !== void 0 ? i : void 0,
        d = (a = r.phoneNumber) !== null && a !== void 0 ? a : void 0,
        g = (o = r.photoURL) !== null && o !== void 0 ? o : void 0,
        v = (s = r.tenantId) !== null && s !== void 0 ? s : void 0,
        y = (c = r._redirectEventId) !== null && c !== void 0 ? c : void 0,
        m = (u = r.createdAt) !== null && u !== void 0 ? u : void 0,
        I = (l = r.lastLoginAt) !== null && l !== void 0 ? l : void 0,
        {
          uid: b,
          emailVerified: w,
          isAnonymous: k,
          providerData: _,
          stsTokenManager: A,
        } = r;
      Z(b && A, e, "internal-error");
      let C = ec.fromJSON(this.name, A);
      Z(typeof b == "string", e, "internal-error"),
        sn(f, e.name),
        sn(p, e.name),
        Z(typeof w == "boolean", e, "internal-error"),
        Z(typeof k == "boolean", e, "internal-error"),
        sn(d, e.name),
        sn(g, e.name),
        sn(v, e.name),
        sn(y, e.name),
        sn(m, e.name),
        sn(I, e.name);
      let F = new t({
        uid: b,
        auth: e,
        email: p,
        emailVerified: w,
        displayName: f,
        isAnonymous: k,
        photoURL: g,
        phoneNumber: d,
        tenantId: v,
        stsTokenManager: C,
        createdAt: m,
        lastLoginAt: I,
      });
      return (
        _ &&
          Array.isArray(_) &&
          (F.providerData = _.map((W) => Object.assign({}, W))),
        y && (F._redirectEventId = y),
        F
      );
    }
    static async _fromIdTokenResponse(e, r, n = !1) {
      let i = new ec();
      i.updateFromServerResponse(r);
      let a = new t({
        uid: r.localId,
        auth: e,
        stsTokenManager: i,
        isAnonymous: n,
      });
      return await Zs(a), a;
    }
  };
  var WT = new Map();
  function Dr(t) {
    Fr(t instanceof Function, "Expected a class definition");
    let e = WT.get(t);
    return e
      ? (Fr(e instanceof t, "Instance stored in cache mismatched with class"),
        e)
      : ((e = new t()), WT.set(t, e), e);
  }
  var tc = class {
    constructor() {
      (this.type = "NONE"), (this.storage = {});
    }
    async _isAvailable() {
      return !0;
    }
    async _set(e, r) {
      this.storage[e] = r;
    }
    async _get(e) {
      let r = this.storage[e];
      return r === void 0 ? null : r;
    }
    async _remove(e) {
      delete this.storage[e];
    }
    _addListener(e, r) {}
    _removeListener(e, r) {}
  };
  tc.type = "NONE";
  var af = tc;
  function $s(t, e, r) {
    return `firebase:${t}:${e}:${r}`;
  }
  var rc = class t {
    constructor(e, r, n) {
      (this.persistence = e), (this.auth = r), (this.userKey = n);
      let { config: i, name: a } = this.auth;
      (this.fullUserKey = $s(this.userKey, i.apiKey, a)),
        (this.fullPersistenceKey = $s("persistence", i.apiKey, a)),
        (this.boundEventHandler = r._onStorageEvent.bind(r)),
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
    }
    setCurrentUser(e) {
      return this.persistence._set(this.fullUserKey, e.toJSON());
    }
    async getCurrentUser() {
      let e = await this.persistence._get(this.fullUserKey);
      return e ? Va._fromJSON(this.auth, e) : null;
    }
    removeCurrentUser() {
      return this.persistence._remove(this.fullUserKey);
    }
    savePersistenceForRedirect() {
      return this.persistence._set(
        this.fullPersistenceKey,
        this.persistence.type
      );
    }
    async setPersistence(e) {
      if (this.persistence === e) return;
      let r = await this.getCurrentUser();
      if ((await this.removeCurrentUser(), (this.persistence = e), r))
        return this.setCurrentUser(r);
    }
    delete() {
      this.persistence._removeListener(
        this.fullUserKey,
        this.boundEventHandler
      );
    }
    static async create(e, r, n = "authUser") {
      if (!r.length) return new t(Dr(af), e, n);
      let i = (
          await Promise.all(
            r.map(async (u) => {
              if (await u._isAvailable()) return u;
            })
          )
        ).filter((u) => u),
        a = i[0] || Dr(af),
        o = $s(n, e.config.apiKey, e.name),
        s = null;
      for (let u of r)
        try {
          let l = await u._get(o);
          if (l) {
            let f = Va._fromJSON(e, l);
            u !== a && (s = f), (a = u);
            break;
          }
        } catch {}
      let c = i.filter((u) => u._shouldAllowMigration);
      return !a._shouldAllowMigration || !c.length
        ? new t(a, e, n)
        : ((a = c[0]),
          s && (await a._set(o, s.toJSON())),
          await Promise.all(
            r.map(async (u) => {
              if (u !== a)
                try {
                  await u._remove(o);
                } catch {}
            })
          ),
          new t(a, e, n));
    }
  };
  function HT(t) {
    let e = t.toLowerCase();
    if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
      return "Opera";
    if (fE(e)) return "IEMobile";
    if (e.includes("msie") || e.includes("trident/")) return "IE";
    if (e.includes("edge/")) return "Edge";
    if (lE(e)) return "Firefox";
    if (e.includes("silk/")) return "Silk";
    if (hE(e)) return "Blackberry";
    if (gE(e)) return "Webos";
    if (Tf(e)) return "Safari";
    if ((e.includes("chrome/") || pE(e)) && !e.includes("edge/"))
      return "Chrome";
    if (dE(e)) return "Android";
    {
      let r = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
        n = t.match(r);
      if (n?.length === 2) return n[1];
    }
    return "Other";
  }
  function lE(t = et()) {
    return /firefox\//i.test(t);
  }
  function Tf(t = et()) {
    let e = t.toLowerCase();
    return (
      e.includes("safari/") &&
      !e.includes("chrome/") &&
      !e.includes("crios/") &&
      !e.includes("android")
    );
  }
  function pE(t = et()) {
    return /crios\//i.test(t);
  }
  function fE(t = et()) {
    return /iemobile/i.test(t);
  }
  function dE(t = et()) {
    return /android/i.test(t);
  }
  function hE(t = et()) {
    return /blackberry/i.test(t);
  }
  function gE(t = et()) {
    return /webos/i.test(t);
  }
  function bc(t = et()) {
    return (
      /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t))
    );
  }
  function h2(t = et()) {
    var e;
    return (
      bc(t) &&
      !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
    );
  }
  function g2() {
    return TT() && document.documentMode === 10;
  }
  function mE(t = et()) {
    return (
      bc(t) || dE(t) || gE(t) || hE(t) || /windows phone/i.test(t) || fE(t)
    );
  }
  function m2() {
    try {
      return !!(window && window !== window.top);
    } catch {
      return !1;
    }
  }
  function yE(t, e = []) {
    let r;
    switch (t) {
      case "Browser":
        r = HT(et());
        break;
      case "Worker":
        r = `${HT(et())}-${t}`;
        break;
      default:
        r = t;
    }
    let n = e.length ? e.join(",") : "FirebaseCore-web";
    return `${r}/JsCore/${Ni}/${n}`;
  }
  var of = class {
    constructor(e) {
      (this.auth = e), (this.queue = []);
    }
    pushCallback(e, r) {
      let n = (a) =>
        new Promise((o, s) => {
          try {
            let c = e(a);
            o(c);
          } catch (c) {
            s(c);
          }
        });
      (n.onAbort = r), this.queue.push(n);
      let i = this.queue.length - 1;
      return () => {
        this.queue[i] = () => Promise.resolve();
      };
    }
    async runMiddleware(e) {
      if (this.auth.currentUser === e) return;
      let r = [];
      try {
        for (let n of this.queue) await n(e), n.onAbort && r.push(n.onAbort);
      } catch (n) {
        r.reverse();
        for (let i of r)
          try {
            i();
          } catch {}
        throw this.auth._errorFactory.create("login-blocked", {
          originalMessage: n?.message,
        });
      }
    }
  };
  async function y2(t, e = {}) {
    return pt(t, "GET", "/v2/passwordPolicy", ze(t, e));
  }
  var v2 = 6,
    sf = class {
      constructor(e) {
        var r, n, i, a;
        let o = e.customStrengthOptions;
        (this.customStrengthOptions = {}),
          (this.customStrengthOptions.minPasswordLength =
            (r = o.minPasswordLength) !== null && r !== void 0 ? r : v2),
          o.maxPasswordLength &&
            (this.customStrengthOptions.maxPasswordLength =
              o.maxPasswordLength),
          o.containsLowercaseCharacter !== void 0 &&
            (this.customStrengthOptions.containsLowercaseLetter =
              o.containsLowercaseCharacter),
          o.containsUppercaseCharacter !== void 0 &&
            (this.customStrengthOptions.containsUppercaseLetter =
              o.containsUppercaseCharacter),
          o.containsNumericCharacter !== void 0 &&
            (this.customStrengthOptions.containsNumericCharacter =
              o.containsNumericCharacter),
          o.containsNonAlphanumericCharacter !== void 0 &&
            (this.customStrengthOptions.containsNonAlphanumericCharacter =
              o.containsNonAlphanumericCharacter),
          (this.enforcementState = e.enforcementState),
          this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
            (this.enforcementState = "OFF"),
          (this.allowedNonAlphanumericCharacters =
            (i =
              (n = e.allowedNonAlphanumericCharacters) === null || n === void 0
                ? void 0
                : n.join("")) !== null && i !== void 0
              ? i
              : ""),
          (this.forceUpgradeOnSignin =
            (a = e.forceUpgradeOnSignin) !== null && a !== void 0 ? a : !1),
          (this.schemaVersion = e.schemaVersion);
      }
      validatePassword(e) {
        var r, n, i, a, o, s;
        let c = { isValid: !0, passwordPolicy: this };
        return (
          this.validatePasswordLengthOptions(e, c),
          this.validatePasswordCharacterOptions(e, c),
          c.isValid &&
            (c.isValid =
              (r = c.meetsMinPasswordLength) !== null && r !== void 0 ? r : !0),
          c.isValid &&
            (c.isValid =
              (n = c.meetsMaxPasswordLength) !== null && n !== void 0 ? n : !0),
          c.isValid &&
            (c.isValid =
              (i = c.containsLowercaseLetter) !== null && i !== void 0
                ? i
                : !0),
          c.isValid &&
            (c.isValid =
              (a = c.containsUppercaseLetter) !== null && a !== void 0
                ? a
                : !0),
          c.isValid &&
            (c.isValid =
              (o = c.containsNumericCharacter) !== null && o !== void 0
                ? o
                : !0),
          c.isValid &&
            (c.isValid =
              (s = c.containsNonAlphanumericCharacter) !== null && s !== void 0
                ? s
                : !0),
          c
        );
      }
      validatePasswordLengthOptions(e, r) {
        let n = this.customStrengthOptions.minPasswordLength,
          i = this.customStrengthOptions.maxPasswordLength;
        n && (r.meetsMinPasswordLength = e.length >= n),
          i && (r.meetsMaxPasswordLength = e.length <= i);
      }
      validatePasswordCharacterOptions(e, r) {
        this.updatePasswordCharacterOptionsStatuses(r, !1, !1, !1, !1);
        let n;
        for (let i = 0; i < e.length; i++)
          (n = e.charAt(i)),
            this.updatePasswordCharacterOptionsStatuses(
              r,
              n >= "a" && n <= "z",
              n >= "A" && n <= "Z",
              n >= "0" && n <= "9",
              this.allowedNonAlphanumericCharacters.includes(n)
            );
      }
      updatePasswordCharacterOptionsStatuses(e, r, n, i, a) {
        this.customStrengthOptions.containsLowercaseLetter &&
          (e.containsLowercaseLetter || (e.containsLowercaseLetter = r)),
          this.customStrengthOptions.containsUppercaseLetter &&
            (e.containsUppercaseLetter || (e.containsUppercaseLetter = n)),
          this.customStrengthOptions.containsNumericCharacter &&
            (e.containsNumericCharacter || (e.containsNumericCharacter = i)),
          this.customStrengthOptions.containsNonAlphanumericCharacter &&
            (e.containsNonAlphanumericCharacter ||
              (e.containsNonAlphanumericCharacter = a));
      }
    };
  var cf = class {
    constructor(e, r, n, i) {
      (this.app = e),
        (this.heartbeatServiceProvider = r),
        (this.appCheckServiceProvider = n),
        (this.config = i),
        (this.currentUser = null),
        (this.emulatorConfig = null),
        (this.operations = Promise.resolve()),
        (this.authStateSubscription = new nc(this)),
        (this.idTokenSubscription = new nc(this)),
        (this.beforeStateQueue = new of(this)),
        (this.redirectUser = null),
        (this.isProactiveRefreshEnabled = !1),
        (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
        (this._canInitEmulator = !0),
        (this._isInitialized = !1),
        (this._deleted = !1),
        (this._initializationPromise = null),
        (this._popupRedirectResolver = null),
        (this._errorFactory = aE),
        (this._agentRecaptchaConfig = null),
        (this._tenantRecaptchaConfigs = {}),
        (this._projectPasswordPolicy = null),
        (this._tenantPasswordPolicies = {}),
        (this.lastNotifiedUid = void 0),
        (this.languageCode = null),
        (this.tenantId = null),
        (this.settings = { appVerificationDisabledForTesting: !1 }),
        (this.frameworks = []),
        (this.name = e.name),
        (this.clientVersion = i.sdkClientVersion);
    }
    _initializeWithPersistence(e, r) {
      return (
        r && (this._popupRedirectResolver = Dr(r)),
        (this._initializationPromise = this.queue(async () => {
          var n, i;
          if (
            !this._deleted &&
            ((this.persistenceManager = await rc.create(this, e)),
            !this._deleted)
          ) {
            if (
              !((n = this._popupRedirectResolver) === null || n === void 0) &&
              n._shouldInitProactively
            )
              try {
                await this._popupRedirectResolver._initialize(this);
              } catch {}
            await this.initializeCurrentUser(r),
              (this.lastNotifiedUid =
                ((i = this.currentUser) === null || i === void 0
                  ? void 0
                  : i.uid) || null),
              !this._deleted && (this._isInitialized = !0);
          }
        })),
        this._initializationPromise
      );
    }
    async _onStorageEvent() {
      if (this._deleted) return;
      let e = await this.assertedPersistence.getCurrentUser();
      if (!(!this.currentUser && !e)) {
        if (this.currentUser && e && this.currentUser.uid === e.uid) {
          this._currentUser._assign(e), await this.currentUser.getIdToken();
          return;
        }
        await this._updateCurrentUser(e, !0);
      }
    }
    async initializeCurrentUser(e) {
      var r;
      let n = await this.assertedPersistence.getCurrentUser(),
        i = n,
        a = !1;
      if (e && this.config.authDomain) {
        await this.getOrInitRedirectPersistenceManager();
        let o =
            (r = this.redirectUser) === null || r === void 0
              ? void 0
              : r._redirectEventId,
          s = i?._redirectEventId,
          c = await this.tryRedirectSignIn(e);
        (!o || o === s) && c?.user && ((i = c.user), (a = !0));
      }
      if (!i) return this.directlySetCurrentUser(null);
      if (!i._redirectEventId) {
        if (a)
          try {
            await this.beforeStateQueue.runMiddleware(i);
          } catch (o) {
            (i = n),
              this._popupRedirectResolver._overrideRedirectResult(this, () =>
                Promise.reject(o)
              );
          }
        return i
          ? this.reloadAndSetCurrentUserOrClear(i)
          : this.directlySetCurrentUser(null);
      }
      return (
        Z(this._popupRedirectResolver, this, "argument-error"),
        await this.getOrInitRedirectPersistenceManager(),
        this.redirectUser &&
        this.redirectUser._redirectEventId === i._redirectEventId
          ? this.directlySetCurrentUser(i)
          : this.reloadAndSetCurrentUserOrClear(i)
      );
    }
    async tryRedirectSignIn(e) {
      let r = null;
      try {
        r = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
      } catch {
        await this._setRedirectUser(null);
      }
      return r;
    }
    async reloadAndSetCurrentUserOrClear(e) {
      try {
        await Zs(e);
      } catch (r) {
        if (r?.code !== "auth/network-request-failed")
          return this.directlySetCurrentUser(null);
      }
      return this.directlySetCurrentUser(e);
    }
    useDeviceLanguage() {
      this.languageCode = t2();
    }
    async _delete() {
      this._deleted = !0;
    }
    async updateCurrentUser(e) {
      let r = e ? gr(e) : null;
      return (
        r &&
          Z(
            r.auth.config.apiKey === this.config.apiKey,
            this,
            "invalid-user-token"
          ),
        this._updateCurrentUser(r && r._clone(this))
      );
    }
    async _updateCurrentUser(e, r = !1) {
      if (!this._deleted)
        return (
          e && Z(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
          r || (await this.beforeStateQueue.runMiddleware(e)),
          this.queue(async () => {
            await this.directlySetCurrentUser(e), this.notifyAuthListeners();
          })
        );
    }
    async signOut() {
      return (
        await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0)
      );
    }
    setPersistence(e) {
      return this.queue(async () => {
        await this.assertedPersistence.setPersistence(Dr(e));
      });
    }
    _getRecaptchaConfig() {
      return this.tenantId == null
        ? this._agentRecaptchaConfig
        : this._tenantRecaptchaConfigs[this.tenantId];
    }
    async validatePassword(e) {
      this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
      let r = this._getPasswordPolicyInternal();
      return r.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
        ? Promise.reject(
            this._errorFactory.create(
              "unsupported-password-policy-schema-version",
              {}
            )
          )
        : r.validatePassword(e);
    }
    _getPasswordPolicyInternal() {
      return this.tenantId === null
        ? this._projectPasswordPolicy
        : this._tenantPasswordPolicies[this.tenantId];
    }
    async _updatePasswordPolicy() {
      let e = await y2(this),
        r = new sf(e);
      this.tenantId === null
        ? (this._projectPasswordPolicy = r)
        : (this._tenantPasswordPolicies[this.tenantId] = r);
    }
    _getPersistence() {
      return this.assertedPersistence.persistence.type;
    }
    _updateErrorMap(e) {
      this._errorFactory = new Nr("auth", "Firebase", e());
    }
    onAuthStateChanged(e, r, n) {
      return this.registerStateListener(this.authStateSubscription, e, r, n);
    }
    beforeAuthStateChanged(e, r) {
      return this.beforeStateQueue.pushCallback(e, r);
    }
    onIdTokenChanged(e, r, n) {
      return this.registerStateListener(this.idTokenSubscription, e, r, n);
    }
    authStateReady() {
      return new Promise((e, r) => {
        if (this.currentUser) e();
        else {
          let n = this.onAuthStateChanged(() => {
            n(), e();
          }, r);
        }
      });
    }
    async revokeAccessToken(e) {
      if (this.currentUser) {
        let r = await this.currentUser.getIdToken(),
          n = {
            providerId: "apple.com",
            tokenType: "ACCESS_TOKEN",
            token: e,
            idToken: r,
          };
        this.tenantId != null && (n.tenantId = this.tenantId),
          await d2(this, n);
      }
    }
    toJSON() {
      var e;
      return {
        apiKey: this.config.apiKey,
        authDomain: this.config.authDomain,
        appName: this.name,
        currentUser:
          (e = this._currentUser) === null || e === void 0
            ? void 0
            : e.toJSON(),
      };
    }
    async _setRedirectUser(e, r) {
      let n = await this.getOrInitRedirectPersistenceManager(r);
      return e === null ? n.removeCurrentUser() : n.setCurrentUser(e);
    }
    async getOrInitRedirectPersistenceManager(e) {
      if (!this.redirectPersistenceManager) {
        let r = (e && Dr(e)) || this._popupRedirectResolver;
        Z(r, this, "argument-error"),
          (this.redirectPersistenceManager = await rc.create(
            this,
            [Dr(r._redirectPersistence)],
            "redirectUser"
          )),
          (this.redirectUser =
            await this.redirectPersistenceManager.getCurrentUser());
      }
      return this.redirectPersistenceManager;
    }
    async _redirectUserForId(e) {
      var r, n;
      return (
        this._isInitialized && (await this.queue(async () => {})),
        ((r = this._currentUser) === null || r === void 0
          ? void 0
          : r._redirectEventId) === e
          ? this._currentUser
          : ((n = this.redirectUser) === null || n === void 0
              ? void 0
              : n._redirectEventId) === e
          ? this.redirectUser
          : null
      );
    }
    async _persistUserIfCurrent(e) {
      if (e === this.currentUser)
        return this.queue(async () => this.directlySetCurrentUser(e));
    }
    _notifyListenersIfCurrent(e) {
      e === this.currentUser && this.notifyAuthListeners();
    }
    _key() {
      return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
    }
    _startProactiveRefresh() {
      (this.isProactiveRefreshEnabled = !0),
        this.currentUser && this._currentUser._startProactiveRefresh();
    }
    _stopProactiveRefresh() {
      (this.isProactiveRefreshEnabled = !1),
        this.currentUser && this._currentUser._stopProactiveRefresh();
    }
    get _currentUser() {
      return this.currentUser;
    }
    notifyAuthListeners() {
      var e, r;
      if (!this._isInitialized) return;
      this.idTokenSubscription.next(this.currentUser);
      let n =
        (r =
          (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !==
          null && r !== void 0
          ? r
          : null;
      this.lastNotifiedUid !== n &&
        ((this.lastNotifiedUid = n),
        this.authStateSubscription.next(this.currentUser));
    }
    registerStateListener(e, r, n, i) {
      if (this._deleted) return () => {};
      let a = typeof r == "function" ? r : r.next.bind(r),
        o = !1,
        s = this._isInitialized
          ? Promise.resolve()
          : this._initializationPromise;
      if (
        (Z(s, this, "internal-error"),
        s.then(() => {
          o || a(this.currentUser);
        }),
        typeof r == "function")
      ) {
        let c = e.addObserver(r, n, i);
        return () => {
          (o = !0), c();
        };
      } else {
        let c = e.addObserver(r);
        return () => {
          (o = !0), c();
        };
      }
    }
    async directlySetCurrentUser(e) {
      this.currentUser &&
        this.currentUser !== e &&
        this._currentUser._stopProactiveRefresh(),
        e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
        (this.currentUser = e),
        e
          ? await this.assertedPersistence.setCurrentUser(e)
          : await this.assertedPersistence.removeCurrentUser();
    }
    queue(e) {
      return (this.operations = this.operations.then(e, e)), this.operations;
    }
    get assertedPersistence() {
      return (
        Z(this.persistenceManager, this, "internal-error"),
        this.persistenceManager
      );
    }
    _logFramework(e) {
      !e ||
        this.frameworks.includes(e) ||
        (this.frameworks.push(e),
        this.frameworks.sort(),
        (this.clientVersion = yE(
          this.config.clientPlatform,
          this._getFrameworks()
        )));
    }
    _getFrameworks() {
      return this.frameworks;
    }
    async _getAdditionalHeaders() {
      var e;
      let r = { "X-Client-Version": this.clientVersion };
      this.app.options.appId &&
        (r["X-Firebase-gmpid"] = this.app.options.appId);
      let n = await ((e = this.heartbeatServiceProvider.getImmediate({
        optional: !0,
      })) === null || e === void 0
        ? void 0
        : e.getHeartbeatsHeader());
      n && (r["X-Firebase-Client"] = n);
      let i = await this._getAppCheckToken();
      return i && (r["X-Firebase-AppCheck"] = i), r;
    }
    async _getAppCheckToken() {
      var e;
      let r = await ((e = this.appCheckServiceProvider.getImmediate({
        optional: !0,
      })) === null || e === void 0
        ? void 0
        : e.getToken());
      return (
        r?.error && JB(`Error while retrieving App Check token: ${r.error}`),
        r?.token
      );
    }
  };
  function Pi(t) {
    return gr(t);
  }
  var nc = class {
    constructor(e) {
      (this.auth = e),
        (this.observer = null),
        (this.addObserver = wT((r) => (this.observer = r)));
    }
    get next() {
      return (
        Z(this.observer, this.auth, "internal-error"),
        this.observer.next.bind(this.observer)
      );
    }
  };
  function vE(t) {
    return `__${t}${Math.floor(Math.random() * 1e6)}`;
  }
  var _2 = "recaptcha-enterprise",
    b2 = "NO_RECAPTCHA",
    uf = class {
      constructor(e) {
        (this.type = _2), (this.auth = Pi(e));
      }
      async verify(e = "verify", r = !1) {
        async function n(a) {
          if (!r) {
            if (a.tenantId == null && a._agentRecaptchaConfig != null)
              return a._agentRecaptchaConfig.siteKey;
            if (
              a.tenantId != null &&
              a._tenantRecaptchaConfigs[a.tenantId] !== void 0
            )
              return a._tenantRecaptchaConfigs[a.tenantId].siteKey;
          }
          return new Promise(async (o, s) => {
            a2(a, {
              clientType: "CLIENT_TYPE_WEB",
              version: "RECAPTCHA_ENTERPRISE",
            })
              .then((c) => {
                if (c.recaptchaKey === void 0)
                  s(new Error("recaptcha Enterprise site key undefined"));
                else {
                  let u = new rf(c);
                  return (
                    a.tenantId == null
                      ? (a._agentRecaptchaConfig = u)
                      : (a._tenantRecaptchaConfigs[a.tenantId] = u),
                    o(u.siteKey)
                  );
                }
              })
              .catch((c) => {
                s(c);
              });
          });
        }
        function i(a, o, s) {
          let c = window.grecaptcha;
          VT(c)
            ? c.enterprise.ready(() => {
                c.enterprise
                  .execute(a, { action: e })
                  .then((u) => {
                    o(u);
                  })
                  .catch(() => {
                    o(b2);
                  });
              })
            : s(Error("No reCAPTCHA enterprise script loaded."));
        }
        return new Promise((a, o) => {
          n(this.auth)
            .then((s) => {
              if (!r && VT(window.grecaptcha)) i(s, a, o);
              else {
                if (typeof window > "u") {
                  o(
                    new Error("RecaptchaVerifier is only supported in browser")
                  );
                  return;
                }
                Promise.resolve()
                  .then(() => {
                    i(s, a, o);
                  })
                  .catch((c) => {
                    o(c);
                  });
              }
            })
            .catch((s) => {
              o(s);
            });
        });
      }
    };
  async function GT(t, e, r, n = !1) {
    let i = new uf(t),
      a;
    try {
      a = await i.verify(r);
    } catch {
      a = await i.verify(r, !0);
    }
    let o = Object.assign({}, e);
    return (
      n
        ? Object.assign(o, { captchaResp: a })
        : Object.assign(o, { captchaResponse: a }),
      Object.assign(o, { clientType: "CLIENT_TYPE_WEB" }),
      Object.assign(o, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
      o
    );
  }
  async function zT(t, e, r, n) {
    var i;
    if (
      !((i = t._getRecaptchaConfig()) === null || i === void 0) &&
      i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
    ) {
      let a = await GT(t, e, r, r === "getOobCode");
      return n(t, a);
    } else
      return n(t, e).catch(async (a) => {
        if (a.code === "auth/missing-recaptcha-token") {
          console.log(
            `${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
          );
          let o = await GT(t, e, r, r === "getOobCode");
          return n(t, o);
        } else return Promise.reject(a);
      });
  }
  function _E(t, e) {
    let r = Qp(t, "auth");
    if (r.isInitialized()) {
      let i = r.getImmediate(),
        a = r.getOptions();
      if (wi(a, e ?? {})) return i;
      Jt(i, "already-initialized");
    }
    return r.initialize({ options: e });
  }
  function S2(t, e) {
    let r = e?.persistence || [],
      n = (Array.isArray(r) ? r : [r]).map(Dr);
    e?.errorMap && t._updateErrorMap(e.errorMap),
      t._initializeWithPersistence(n, e?.popupRedirectResolver);
  }
  function bE(t, e, r) {
    let n = Pi(t);
    Z(n._canInitEmulator, n, "emulator-config-failed"),
      Z(/^https?:\/\//.test(e), n, "invalid-emulator-scheme");
    let i = !!r?.disableWarnings,
      a = SE(e),
      { host: o, port: s } = T2(e),
      c = s === null ? "" : `:${s}`;
    (n.config.emulator = { url: `${a}//${o}${c}/` }),
      (n.settings.appVerificationDisabledForTesting = !0),
      (n.emulatorConfig = Object.freeze({
        host: o,
        port: s,
        protocol: a.replace(":", ""),
        options: Object.freeze({ disableWarnings: i }),
      })),
      i || E2();
  }
  function SE(t) {
    let e = t.indexOf(":");
    return e < 0 ? "" : t.substr(0, e + 1);
  }
  function T2(t) {
    let e = SE(t),
      r = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
    if (!r) return { host: "", port: null };
    let n = r[2].split("@").pop() || "",
      i = /^(\[[^\]]+\])(:|$)/.exec(n);
    if (i) {
      let a = i[1];
      return { host: a, port: $T(n.substr(a.length + 1)) };
    } else {
      let [a, o] = n.split(":");
      return { host: a, port: $T(o) };
    }
  }
  function $T(t) {
    if (!t) return null;
    let e = Number(t);
    return isNaN(e) ? null : e;
  }
  function E2() {
    function t() {
      let e = document.createElement("p"),
        r = e.style;
      (e.innerText =
        "Running in emulator mode. Do not use with production credentials."),
        (r.position = "fixed"),
        (r.width = "100%"),
        (r.backgroundColor = "#ffffff"),
        (r.border = ".1em solid #000000"),
        (r.color = "#b50000"),
        (r.bottom = "0px"),
        (r.left = "0px"),
        (r.margin = "0px"),
        (r.zIndex = "10000"),
        (r.textAlign = "center"),
        e.classList.add("firebase-emulator-warning"),
        document.body.appendChild(e);
    }
    typeof console < "u" &&
      typeof console.info == "function" &&
      console.info(
        "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
      ),
      typeof window < "u" &&
        typeof document < "u" &&
        (document.readyState === "loading"
          ? window.addEventListener("DOMContentLoaded", t)
          : t());
  }
  var qn = class {
    constructor(e, r) {
      (this.providerId = e), (this.signInMethod = r);
    }
    toJSON() {
      return vr("not implemented");
    }
    _getIdTokenResponse(e) {
      return vr("not implemented");
    }
    _linkToIdToken(e, r) {
      return vr("not implemented");
    }
    _getReauthenticationResolver(e) {
      return vr("not implemented");
    }
  };
  async function I2(t, e) {
    return pt(t, "POST", "/v1/accounts:signUp", e);
  }
  async function x2(t, e) {
    return cn(t, "POST", "/v1/accounts:signInWithPassword", ze(t, e));
  }
  async function w2(t, e) {
    return cn(t, "POST", "/v1/accounts:signInWithEmailLink", ze(t, e));
  }
  async function A2(t, e) {
    return cn(t, "POST", "/v1/accounts:signInWithEmailLink", ze(t, e));
  }
  var Wa = class t extends qn {
    constructor(e, r, n, i = null) {
      super("password", n),
        (this._email = e),
        (this._password = r),
        (this._tenantId = i);
    }
    static _fromEmailAndPassword(e, r) {
      return new t(e, r, "password");
    }
    static _fromEmailAndCode(e, r, n = null) {
      return new t(e, r, "emailLink", n);
    }
    toJSON() {
      return {
        email: this._email,
        password: this._password,
        signInMethod: this.signInMethod,
        tenantId: this._tenantId,
      };
    }
    static fromJSON(e) {
      let r = typeof e == "string" ? JSON.parse(e) : e;
      if (r?.email && r?.password) {
        if (r.signInMethod === "password")
          return this._fromEmailAndPassword(r.email, r.password);
        if (r.signInMethod === "emailLink")
          return this._fromEmailAndCode(r.email, r.password, r.tenantId);
      }
      return null;
    }
    async _getIdTokenResponse(e) {
      switch (this.signInMethod) {
        case "password":
          let r = {
            returnSecureToken: !0,
            email: this._email,
            password: this._password,
            clientType: "CLIENT_TYPE_WEB",
          };
          return zT(e, r, "signInWithPassword", x2);
        case "emailLink":
          return w2(e, { email: this._email, oobCode: this._password });
        default:
          Jt(e, "internal-error");
      }
    }
    async _linkToIdToken(e, r) {
      switch (this.signInMethod) {
        case "password":
          let n = {
            idToken: r,
            returnSecureToken: !0,
            email: this._email,
            password: this._password,
            clientType: "CLIENT_TYPE_WEB",
          };
          return zT(e, n, "signUpPassword", I2);
        case "emailLink":
          return A2(e, {
            idToken: r,
            email: this._email,
            oobCode: this._password,
          });
        default:
          Jt(e, "internal-error");
      }
    }
    _getReauthenticationResolver(e) {
      return this._getIdTokenResponse(e);
    }
  };
  async function Di(t, e) {
    return cn(t, "POST", "/v1/accounts:signInWithIdp", ze(t, e));
  }
  var O2 = "http://localhost",
    Bn = class t extends qn {
      constructor() {
        super(...arguments), (this.pendingToken = null);
      }
      static _fromParams(e) {
        let r = new t(e.providerId, e.signInMethod);
        return (
          e.idToken || e.accessToken
            ? (e.idToken && (r.idToken = e.idToken),
              e.accessToken && (r.accessToken = e.accessToken),
              e.nonce && !e.pendingToken && (r.nonce = e.nonce),
              e.pendingToken && (r.pendingToken = e.pendingToken))
            : e.oauthToken && e.oauthTokenSecret
            ? ((r.accessToken = e.oauthToken), (r.secret = e.oauthTokenSecret))
            : Jt("argument-error"),
          r
        );
      }
      toJSON() {
        return {
          idToken: this.idToken,
          accessToken: this.accessToken,
          secret: this.secret,
          nonce: this.nonce,
          pendingToken: this.pendingToken,
          providerId: this.providerId,
          signInMethod: this.signInMethod,
        };
      }
      static fromJSON(e) {
        let r = typeof e == "string" ? JSON.parse(e) : e,
          { providerId: n, signInMethod: i } = r,
          a = Ge(r, ["providerId", "signInMethod"]);
        if (!n || !i) return null;
        let o = new t(n, i);
        return (
          (o.idToken = a.idToken || void 0),
          (o.accessToken = a.accessToken || void 0),
          (o.secret = a.secret),
          (o.nonce = a.nonce),
          (o.pendingToken = a.pendingToken || null),
          o
        );
      }
      _getIdTokenResponse(e) {
        let r = this.buildRequest();
        return Di(e, r);
      }
      _linkToIdToken(e, r) {
        let n = this.buildRequest();
        return (n.idToken = r), Di(e, n);
      }
      _getReauthenticationResolver(e) {
        let r = this.buildRequest();
        return (r.autoCreate = !1), Di(e, r);
      }
      buildRequest() {
        let e = { requestUri: O2, returnSecureToken: !0 };
        if (this.pendingToken) e.pendingToken = this.pendingToken;
        else {
          let r = {};
          this.idToken && (r.id_token = this.idToken),
            this.accessToken && (r.access_token = this.accessToken),
            this.secret && (r.oauth_token_secret = this.secret),
            (r.providerId = this.providerId),
            this.nonce && !this.pendingToken && (r.nonce = this.nonce),
            (e.postBody = Ai(r));
        }
        return e;
      }
    };
  async function k2(t, e) {
    return pt(t, "POST", "/v1/accounts:sendVerificationCode", ze(t, e));
  }
  async function C2(t, e) {
    return cn(t, "POST", "/v1/accounts:signInWithPhoneNumber", ze(t, e));
  }
  async function M2(t, e) {
    let r = await cn(t, "POST", "/v1/accounts:signInWithPhoneNumber", ze(t, e));
    if (r.temporaryProof)
      throw qa(t, "account-exists-with-different-credential", r);
    return r;
  }
  var N2 = { USER_NOT_FOUND: "user-not-found" };
  async function D2(t, e) {
    let r = Object.assign(Object.assign({}, e), { operation: "REAUTH" });
    return cn(t, "POST", "/v1/accounts:signInWithPhoneNumber", ze(t, r), N2);
  }
  var Ha = class t extends qn {
    constructor(e) {
      super("phone", "phone"), (this.params = e);
    }
    static _fromVerification(e, r) {
      return new t({ verificationId: e, verificationCode: r });
    }
    static _fromTokenResponse(e, r) {
      return new t({ phoneNumber: e, temporaryProof: r });
    }
    _getIdTokenResponse(e) {
      return C2(e, this._makeVerificationRequest());
    }
    _linkToIdToken(e, r) {
      return M2(
        e,
        Object.assign({ idToken: r }, this._makeVerificationRequest())
      );
    }
    _getReauthenticationResolver(e) {
      return D2(e, this._makeVerificationRequest());
    }
    _makeVerificationRequest() {
      let {
        temporaryProof: e,
        phoneNumber: r,
        verificationId: n,
        verificationCode: i,
      } = this.params;
      return e && r
        ? { temporaryProof: e, phoneNumber: r }
        : { sessionInfo: n, code: i };
    }
    toJSON() {
      let e = { providerId: this.providerId };
      return (
        this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber),
        this.params.temporaryProof &&
          (e.temporaryProof = this.params.temporaryProof),
        this.params.verificationCode &&
          (e.verificationCode = this.params.verificationCode),
        this.params.verificationId &&
          (e.verificationId = this.params.verificationId),
        e
      );
    }
    static fromJSON(e) {
      typeof e == "string" && (e = JSON.parse(e));
      let {
        verificationId: r,
        verificationCode: n,
        phoneNumber: i,
        temporaryProof: a,
      } = e;
      return !n && !r && !i && !a
        ? null
        : new t({
            verificationId: r,
            verificationCode: n,
            phoneNumber: i,
            temporaryProof: a,
          });
    }
  };
  function R2(t) {
    switch (t) {
      case "recoverEmail":
        return "RECOVER_EMAIL";
      case "resetPassword":
        return "PASSWORD_RESET";
      case "signIn":
        return "EMAIL_SIGNIN";
      case "verifyEmail":
        return "VERIFY_EMAIL";
      case "verifyAndChangeEmail":
        return "VERIFY_AND_CHANGE_EMAIL";
      case "revertSecondFactorAddition":
        return "REVERT_SECOND_FACTOR_ADDITION";
      default:
        return null;
    }
  }
  function F2(t) {
    let e = Oi(ki(t)).link,
      r = e ? Oi(ki(e)).deep_link_id : null,
      n = Oi(ki(t)).deep_link_id;
    return (n ? Oi(ki(n)).link : null) || n || r || e || t;
  }
  var ic = class t {
    constructor(e) {
      var r, n, i, a, o, s;
      let c = Oi(ki(e)),
        u = (r = c.apiKey) !== null && r !== void 0 ? r : null,
        l = (n = c.oobCode) !== null && n !== void 0 ? n : null,
        f = R2((i = c.mode) !== null && i !== void 0 ? i : null);
      Z(u && l && f, "argument-error"),
        (this.apiKey = u),
        (this.operation = f),
        (this.code = l),
        (this.continueUrl =
          (a = c.continueUrl) !== null && a !== void 0 ? a : null),
        (this.languageCode =
          (o = c.languageCode) !== null && o !== void 0 ? o : null),
        (this.tenantId = (s = c.tenantId) !== null && s !== void 0 ? s : null);
    }
    static parseLink(e) {
      let r = F2(e);
      try {
        return new t(r);
      } catch {
        return null;
      }
    }
  };
  var Ri = class t {
    constructor() {
      this.providerId = t.PROVIDER_ID;
    }
    static credential(e, r) {
      return Wa._fromEmailAndPassword(e, r);
    }
    static credentialWithLink(e, r) {
      let n = ic.parseLink(r);
      return (
        Z(n, "argument-error"), Wa._fromEmailAndCode(e, n.code, n.tenantId)
      );
    }
  };
  Ri.PROVIDER_ID = "password";
  Ri.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
  Ri.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
  var ac = class {
    constructor(e) {
      (this.providerId = e),
        (this.defaultLanguageCode = null),
        (this.customParameters = {});
    }
    setDefaultLanguage(e) {
      this.defaultLanguageCode = e;
    }
    setCustomParameters(e) {
      return (this.customParameters = e), this;
    }
    getCustomParameters() {
      return this.customParameters;
    }
  };
  var jn = class extends ac {
    constructor() {
      super(...arguments), (this.scopes = []);
    }
    addScope(e) {
      return this.scopes.includes(e) || this.scopes.push(e), this;
    }
    getScopes() {
      return [...this.scopes];
    }
  };
  var Ga = class t extends jn {
    constructor() {
      super("facebook.com");
    }
    static credential(e) {
      return Bn._fromParams({
        providerId: t.PROVIDER_ID,
        signInMethod: t.FACEBOOK_SIGN_IN_METHOD,
        accessToken: e,
      });
    }
    static credentialFromResult(e) {
      return t.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return t.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
      try {
        return t.credential(e.oauthAccessToken);
      } catch {
        return null;
      }
    }
  };
  Ga.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
  Ga.PROVIDER_ID = "facebook.com";
  var za = class t extends jn {
    constructor() {
      super("google.com"), this.addScope("profile");
    }
    static credential(e, r) {
      return Bn._fromParams({
        providerId: t.PROVIDER_ID,
        signInMethod: t.GOOGLE_SIGN_IN_METHOD,
        idToken: e,
        accessToken: r,
      });
    }
    static credentialFromResult(e) {
      return t.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return t.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e) return null;
      let { oauthIdToken: r, oauthAccessToken: n } = e;
      if (!r && !n) return null;
      try {
        return t.credential(r, n);
      } catch {
        return null;
      }
    }
  };
  za.GOOGLE_SIGN_IN_METHOD = "google.com";
  za.PROVIDER_ID = "google.com";
  var $a = class t extends jn {
    constructor() {
      super("github.com");
    }
    static credential(e) {
      return Bn._fromParams({
        providerId: t.PROVIDER_ID,
        signInMethod: t.GITHUB_SIGN_IN_METHOD,
        accessToken: e,
      });
    }
    static credentialFromResult(e) {
      return t.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return t.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
      try {
        return t.credential(e.oauthAccessToken);
      } catch {
        return null;
      }
    }
  };
  $a.GITHUB_SIGN_IN_METHOD = "github.com";
  $a.PROVIDER_ID = "github.com";
  var Ka = class t extends jn {
    constructor() {
      super("twitter.com");
    }
    static credential(e, r) {
      return Bn._fromParams({
        providerId: t.PROVIDER_ID,
        signInMethod: t.TWITTER_SIGN_IN_METHOD,
        oauthToken: e,
        oauthTokenSecret: r,
      });
    }
    static credentialFromResult(e) {
      return t.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return t.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e) return null;
      let { oauthAccessToken: r, oauthTokenSecret: n } = e;
      if (!r || !n) return null;
      try {
        return t.credential(r, n);
      } catch {
        return null;
      }
    }
  };
  Ka.TWITTER_SIGN_IN_METHOD = "twitter.com";
  Ka.PROVIDER_ID = "twitter.com";
  var Fi = class t {
    constructor(e) {
      (this.user = e.user),
        (this.providerId = e.providerId),
        (this._tokenResponse = e._tokenResponse),
        (this.operationType = e.operationType);
    }
    static async _fromIdTokenResponse(e, r, n, i = !1) {
      let a = await Va._fromIdTokenResponse(e, n, i),
        o = KT(n);
      return new t({
        user: a,
        providerId: o,
        _tokenResponse: n,
        operationType: r,
      });
    }
    static async _forOperation(e, r, n) {
      await e._updateTokensIfNecessary(n, !0);
      let i = KT(n);
      return new t({
        user: e,
        providerId: i,
        _tokenResponse: n,
        operationType: r,
      });
    }
  };
  function KT(t) {
    return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
  }
  var lf = class t extends Kt {
    constructor(e, r, n, i) {
      var a;
      super(r.code, r.message),
        (this.operationType = n),
        (this.user = i),
        Object.setPrototypeOf(this, t.prototype),
        (this.customData = {
          appName: e.name,
          tenantId: (a = e.tenantId) !== null && a !== void 0 ? a : void 0,
          _serverResponse: r.customData._serverResponse,
          operationType: n,
        });
    }
    static _fromErrorAndOperation(e, r, n, i) {
      return new t(e, r, n, i);
    }
  };
  function TE(t, e, r, n) {
    return (
      e === "reauthenticate"
        ? r._getReauthenticationResolver(t)
        : r._getIdTokenResponse(t)
    ).catch((a) => {
      throw a.code === "auth/multi-factor-auth-required"
        ? lf._fromErrorAndOperation(t, a, e, n)
        : a;
    });
  }
  async function P2(t, e, r = !1) {
    let n = await ja(t, e._linkToIdToken(t.auth, await t.getIdToken()), r);
    return Fi._forOperation(t, "link", n);
  }
  async function L2(t, e, r = !1) {
    let { auth: n } = t,
      i = "reauthenticate";
    try {
      let a = await ja(t, TE(n, i, e, t), r);
      Z(a.idToken, n, "internal-error");
      let o = Sf(a.idToken);
      Z(o, n, "internal-error");
      let { sub: s } = o;
      return Z(t.uid === s, n, "user-mismatch"), Fi._forOperation(t, i, a);
    } catch (a) {
      throw (a?.code === "auth/user-not-found" && Jt(n, "user-mismatch"), a);
    }
  }
  async function U2(t, e, r = !1) {
    let n = "signIn",
      i = await TE(t, n, e),
      a = await Fi._fromIdTokenResponse(t, n, i);
    return r || (await t._updateCurrentUser(a.user)), a;
  }
  async function q2(t, e) {
    return cn(t, "POST", "/v1/accounts:signInWithCustomToken", ze(t, e));
  }
  async function Ja(t, e) {
    let r = Pi(t),
      n = await q2(r, { token: e, returnSecureToken: !0 }),
      i = await Fi._fromIdTokenResponse(r, "signIn", n);
    return await r._updateCurrentUser(i.user), i;
  }
  function EE(t, e, r, n) {
    return gr(t).onIdTokenChanged(e, r, n);
  }
  function IE(t, e, r) {
    return gr(t).beforeAuthStateChanged(e, r);
  }
  function Sc(t, e, r, n) {
    return gr(t).onAuthStateChanged(e, r, n);
  }
  function Xa(t) {
    return gr(t).signOut();
  }
  function B2(t, e) {
    return pt(t, "POST", "/v2/accounts/mfaEnrollment:start", ze(t, e));
  }
  function j2(t, e) {
    return pt(t, "POST", "/v2/accounts/mfaEnrollment:finalize", ze(t, e));
  }
  function V2(t, e) {
    return pt(t, "POST", "/v2/accounts/mfaEnrollment:start", ze(t, e));
  }
  function W2(t, e) {
    return pt(t, "POST", "/v2/accounts/mfaEnrollment:finalize", ze(t, e));
  }
  var oc = "__sak";
  var sc = class {
    constructor(e, r) {
      (this.storageRetriever = e), (this.type = r);
    }
    _isAvailable() {
      try {
        return this.storage
          ? (this.storage.setItem(oc, "1"),
            this.storage.removeItem(oc),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      } catch {
        return Promise.resolve(!1);
      }
    }
    _set(e, r) {
      return this.storage.setItem(e, JSON.stringify(r)), Promise.resolve();
    }
    _get(e) {
      let r = this.storage.getItem(e);
      return Promise.resolve(r ? JSON.parse(r) : null);
    }
    _remove(e) {
      return this.storage.removeItem(e), Promise.resolve();
    }
    get storage() {
      return this.storageRetriever();
    }
  };
  function H2() {
    let t = et();
    return Tf(t) || bc(t);
  }
  var G2 = 1e3,
    z2 = 10,
    cc = class extends sc {
      constructor() {
        super(() => window.localStorage, "LOCAL"),
          (this.boundEventHandler = (e, r) => this.onStorageEvent(e, r)),
          (this.listeners = {}),
          (this.localCache = {}),
          (this.pollTimer = null),
          (this.safariLocalStorageNotSynced = H2() && m2()),
          (this.fallbackToPolling = mE()),
          (this._shouldAllowMigration = !0);
      }
      forAllChangedKeys(e) {
        for (let r of Object.keys(this.listeners)) {
          let n = this.storage.getItem(r),
            i = this.localCache[r];
          n !== i && e(r, i, n);
        }
      }
      onStorageEvent(e, r = !1) {
        if (!e.key) {
          this.forAllChangedKeys((o, s, c) => {
            this.notifyListeners(o, c);
          });
          return;
        }
        let n = e.key;
        if (
          (r ? this.detachListener() : this.stopPolling(),
          this.safariLocalStorageNotSynced)
        ) {
          let o = this.storage.getItem(n);
          if (e.newValue !== o)
            e.newValue !== null
              ? this.storage.setItem(n, e.newValue)
              : this.storage.removeItem(n);
          else if (this.localCache[n] === e.newValue && !r) return;
        }
        let i = () => {
            let o = this.storage.getItem(n);
            (!r && this.localCache[n] === o) || this.notifyListeners(n, o);
          },
          a = this.storage.getItem(n);
        g2() && a !== e.newValue && e.newValue !== e.oldValue
          ? setTimeout(i, z2)
          : i();
      }
      notifyListeners(e, r) {
        this.localCache[e] = r;
        let n = this.listeners[e];
        if (n) for (let i of Array.from(n)) i(r && JSON.parse(r));
      }
      startPolling() {
        this.stopPolling(),
          (this.pollTimer = setInterval(() => {
            this.forAllChangedKeys((e, r, n) => {
              this.onStorageEvent(
                new StorageEvent("storage", {
                  key: e,
                  oldValue: r,
                  newValue: n,
                }),
                !0
              );
            });
          }, G2));
      }
      stopPolling() {
        this.pollTimer &&
          (clearInterval(this.pollTimer), (this.pollTimer = null));
      }
      attachListener() {
        window.addEventListener("storage", this.boundEventHandler);
      }
      detachListener() {
        window.removeEventListener("storage", this.boundEventHandler);
      }
      _addListener(e, r) {
        Object.keys(this.listeners).length === 0 &&
          (this.fallbackToPolling
            ? this.startPolling()
            : this.attachListener()),
          this.listeners[e] ||
            ((this.listeners[e] = new Set()),
            (this.localCache[e] = this.storage.getItem(e))),
          this.listeners[e].add(r);
      }
      _removeListener(e, r) {
        this.listeners[e] &&
          (this.listeners[e].delete(r),
          this.listeners[e].size === 0 && delete this.listeners[e]),
          Object.keys(this.listeners).length === 0 &&
            (this.detachListener(), this.stopPolling());
      }
      async _set(e, r) {
        await super._set(e, r), (this.localCache[e] = JSON.stringify(r));
      }
      async _get(e) {
        let r = await super._get(e);
        return (this.localCache[e] = JSON.stringify(r)), r;
      }
      async _remove(e) {
        await super._remove(e), delete this.localCache[e];
      }
    };
  cc.type = "LOCAL";
  var xE = cc;
  var uc = class extends sc {
    constructor() {
      super(() => window.sessionStorage, "SESSION");
    }
    _addListener(e, r) {}
    _removeListener(e, r) {}
  };
  uc.type = "SESSION";
  var Ef = uc;
  function $2(t) {
    return Promise.all(
      t.map(async (e) => {
        try {
          return { fulfilled: !0, value: await e };
        } catch (r) {
          return { fulfilled: !1, reason: r };
        }
      })
    );
  }
  var lc = class t {
    constructor(e) {
      (this.eventTarget = e),
        (this.handlersMap = {}),
        (this.boundEventHandler = this.handleEvent.bind(this));
    }
    static _getInstance(e) {
      let r = this.receivers.find((i) => i.isListeningto(e));
      if (r) return r;
      let n = new t(e);
      return this.receivers.push(n), n;
    }
    isListeningto(e) {
      return this.eventTarget === e;
    }
    async handleEvent(e) {
      let r = e,
        { eventId: n, eventType: i, data: a } = r.data,
        o = this.handlersMap[i];
      if (!o?.size) return;
      r.ports[0].postMessage({ status: "ack", eventId: n, eventType: i });
      let s = Array.from(o).map(async (u) => u(r.origin, a)),
        c = await $2(s);
      r.ports[0].postMessage({
        status: "done",
        eventId: n,
        eventType: i,
        response: c,
      });
    }
    _subscribe(e, r) {
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.addEventListener("message", this.boundEventHandler),
        this.handlersMap[e] || (this.handlersMap[e] = new Set()),
        this.handlersMap[e].add(r);
    }
    _unsubscribe(e, r) {
      this.handlersMap[e] && r && this.handlersMap[e].delete(r),
        (!r || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
        Object.keys(this.handlersMap).length === 0 &&
          this.eventTarget.removeEventListener(
            "message",
            this.boundEventHandler
          );
    }
  };
  lc.receivers = [];
  function If(t = "", e = 10) {
    let r = "";
    for (let n = 0; n < e; n++) r += Math.floor(Math.random() * 10);
    return t + r;
  }
  var pf = class {
    constructor(e) {
      (this.target = e), (this.handlers = new Set());
    }
    removeMessageHandler(e) {
      e.messageChannel &&
        (e.messageChannel.port1.removeEventListener("message", e.onMessage),
        e.messageChannel.port1.close()),
        this.handlers.delete(e);
    }
    async _send(e, r, n = 50) {
      let i = typeof MessageChannel < "u" ? new MessageChannel() : null;
      if (!i) throw new Error("connection_unavailable");
      let a, o;
      return new Promise((s, c) => {
        let u = If("", 20);
        i.port1.start();
        let l = setTimeout(() => {
          c(new Error("unsupported_event"));
        }, n);
        (o = {
          messageChannel: i,
          onMessage(f) {
            let p = f;
            if (p.data.eventId === u)
              switch (p.data.status) {
                case "ack":
                  clearTimeout(l),
                    (a = setTimeout(() => {
                      c(new Error("timeout"));
                    }, 3e3));
                  break;
                case "done":
                  clearTimeout(a), s(p.data.response);
                  break;
                default:
                  clearTimeout(l),
                    clearTimeout(a),
                    c(new Error("invalid_response"));
                  break;
              }
          },
        }),
          this.handlers.add(o),
          i.port1.addEventListener("message", o.onMessage),
          this.target.postMessage({ eventType: e, eventId: u, data: r }, [
            i.port2,
          ]);
      }).finally(() => {
        o && this.removeMessageHandler(o);
      });
    }
  };
  function _r() {
    return window;
  }
  function K2(t) {
    _r().location.href = t;
  }
  function wE() {
    return (
      typeof _r().WorkerGlobalScope < "u" &&
      typeof _r().importScripts == "function"
    );
  }
  async function Q2() {
    if (!navigator?.serviceWorker) return null;
    try {
      return (await navigator.serviceWorker.ready).active;
    } catch {
      return null;
    }
  }
  function Y2() {
    var t;
    return (
      ((t = navigator?.serviceWorker) === null || t === void 0
        ? void 0
        : t.controller) || null
    );
  }
  function J2() {
    return wE() ? self : null;
  }
  var AE = "firebaseLocalStorageDb",
    X2 = 1,
    pc = "firebaseLocalStorage",
    OE = "fbase_key",
    Vn = class {
      constructor(e) {
        this.request = e;
      }
      toPromise() {
        return new Promise((e, r) => {
          this.request.addEventListener("success", () => {
            e(this.request.result);
          }),
            this.request.addEventListener("error", () => {
              r(this.request.error);
            });
        });
      }
    };
  function Tc(t, e) {
    return t.transaction([pc], e ? "readwrite" : "readonly").objectStore(pc);
  }
  function Z2() {
    let t = indexedDB.deleteDatabase(AE);
    return new Vn(t).toPromise();
  }
  function ff() {
    let t = indexedDB.open(AE, X2);
    return new Promise((e, r) => {
      t.addEventListener("error", () => {
        r(t.error);
      }),
        t.addEventListener("upgradeneeded", () => {
          let n = t.result;
          try {
            n.createObjectStore(pc, { keyPath: OE });
          } catch (i) {
            r(i);
          }
        }),
        t.addEventListener("success", async () => {
          let n = t.result;
          n.objectStoreNames.contains(pc)
            ? e(n)
            : (n.close(), await Z2(), e(await ff()));
        });
    });
  }
  async function QT(t, e, r) {
    let n = Tc(t, !0).put({ [OE]: e, value: r });
    return new Vn(n).toPromise();
  }
  async function ej(t, e) {
    let r = Tc(t, !1).get(e),
      n = await new Vn(r).toPromise();
    return n === void 0 ? null : n.value;
  }
  function YT(t, e) {
    let r = Tc(t, !0).delete(e);
    return new Vn(r).toPromise();
  }
  var tj = 800,
    rj = 3,
    fc = class {
      constructor() {
        (this.type = "LOCAL"),
          (this._shouldAllowMigration = !0),
          (this.listeners = {}),
          (this.localCache = {}),
          (this.pollTimer = null),
          (this.pendingWrites = 0),
          (this.receiver = null),
          (this.sender = null),
          (this.serviceWorkerReceiverAvailable = !1),
          (this.activeServiceWorker = null),
          (this._workerInitializationPromise =
            this.initializeServiceWorkerMessaging().then(
              () => {},
              () => {}
            ));
      }
      async _openDb() {
        return this.db ? this.db : ((this.db = await ff()), this.db);
      }
      async _withRetries(e) {
        let r = 0;
        for (;;)
          try {
            let n = await this._openDb();
            return await e(n);
          } catch (n) {
            if (r++ > rj) throw n;
            this.db && (this.db.close(), (this.db = void 0));
          }
      }
      async initializeServiceWorkerMessaging() {
        return wE() ? this.initializeReceiver() : this.initializeSender();
      }
      async initializeReceiver() {
        (this.receiver = lc._getInstance(J2())),
          this.receiver._subscribe("keyChanged", async (e, r) => ({
            keyProcessed: (await this._poll()).includes(r.key),
          })),
          this.receiver._subscribe("ping", async (e, r) => ["keyChanged"]);
      }
      async initializeSender() {
        var e, r;
        if (
          ((this.activeServiceWorker = await Q2()), !this.activeServiceWorker)
        )
          return;
        this.sender = new pf(this.activeServiceWorker);
        let n = await this.sender._send("ping", {}, 800);
        n &&
          !((e = n[0]) === null || e === void 0) &&
          e.fulfilled &&
          !((r = n[0]) === null || r === void 0) &&
          r.value.includes("keyChanged") &&
          (this.serviceWorkerReceiverAvailable = !0);
      }
      async notifyServiceWorker(e) {
        if (
          !(
            !this.sender ||
            !this.activeServiceWorker ||
            Y2() !== this.activeServiceWorker
          )
        )
          try {
            await this.sender._send(
              "keyChanged",
              { key: e },
              this.serviceWorkerReceiverAvailable ? 800 : 50
            );
          } catch {}
      }
      async _isAvailable() {
        try {
          if (!indexedDB) return !1;
          let e = await ff();
          return await QT(e, oc, "1"), await YT(e, oc), !0;
        } catch {}
        return !1;
      }
      async _withPendingWrite(e) {
        this.pendingWrites++;
        try {
          await e();
        } finally {
          this.pendingWrites--;
        }
      }
      async _set(e, r) {
        return this._withPendingWrite(
          async () => (
            await this._withRetries((n) => QT(n, e, r)),
            (this.localCache[e] = r),
            this.notifyServiceWorker(e)
          )
        );
      }
      async _get(e) {
        let r = await this._withRetries((n) => ej(n, e));
        return (this.localCache[e] = r), r;
      }
      async _remove(e) {
        return this._withPendingWrite(
          async () => (
            await this._withRetries((r) => YT(r, e)),
            delete this.localCache[e],
            this.notifyServiceWorker(e)
          )
        );
      }
      async _poll() {
        let e = await this._withRetries((i) => {
          let a = Tc(i, !1).getAll();
          return new Vn(a).toPromise();
        });
        if (!e) return [];
        if (this.pendingWrites !== 0) return [];
        let r = [],
          n = new Set();
        if (e.length !== 0)
          for (let { fbase_key: i, value: a } of e)
            n.add(i),
              JSON.stringify(this.localCache[i]) !== JSON.stringify(a) &&
                (this.notifyListeners(i, a), r.push(i));
        for (let i of Object.keys(this.localCache))
          this.localCache[i] &&
            !n.has(i) &&
            (this.notifyListeners(i, null), r.push(i));
        return r;
      }
      notifyListeners(e, r) {
        this.localCache[e] = r;
        let n = this.listeners[e];
        if (n) for (let i of Array.from(n)) i(r);
      }
      startPolling() {
        this.stopPolling(),
          (this.pollTimer = setInterval(async () => this._poll(), tj));
      }
      stopPolling() {
        this.pollTimer &&
          (clearInterval(this.pollTimer), (this.pollTimer = null));
      }
      _addListener(e, r) {
        Object.keys(this.listeners).length === 0 && this.startPolling(),
          this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
          this.listeners[e].add(r);
      }
      _removeListener(e, r) {
        this.listeners[e] &&
          (this.listeners[e].delete(r),
          this.listeners[e].size === 0 && delete this.listeners[e]),
          Object.keys(this.listeners).length === 0 && this.stopPolling();
      }
    };
  fc.type = "LOCAL";
  var kE = fc;
  function nj(t, e) {
    return pt(t, "POST", "/v2/accounts/mfaSignIn:start", ze(t, e));
  }
  function ij(t, e) {
    return pt(t, "POST", "/v2/accounts/mfaSignIn:finalize", ze(t, e));
  }
  function aj(t, e) {
    return pt(t, "POST", "/v2/accounts/mfaSignIn:finalize", ze(t, e));
  }
  var _X = vE("rcb"),
    bX = new Un(3e4, 6e4);
  var oj = "recaptcha";
  async function sj(t, e, r) {
    var n;
    let i = await r.verify();
    try {
      Z(typeof i == "string", t, "argument-error"),
        Z(r.type === oj, t, "argument-error");
      let a;
      if (
        (typeof e == "string" ? (a = { phoneNumber: e }) : (a = e),
        "session" in a)
      ) {
        let o = a.session;
        if ("phoneNumber" in a)
          return (
            Z(o.type === "enroll", t, "internal-error"),
            (
              await B2(t, {
                idToken: o.credential,
                phoneEnrollmentInfo: {
                  phoneNumber: a.phoneNumber,
                  recaptchaToken: i,
                },
              })
            ).phoneSessionInfo.sessionInfo
          );
        {
          Z(o.type === "signin", t, "internal-error");
          let s =
            ((n = a.multiFactorHint) === null || n === void 0
              ? void 0
              : n.uid) || a.multiFactorUid;
          return (
            Z(s, t, "missing-multi-factor-info"),
            (
              await nj(t, {
                mfaPendingCredential: o.credential,
                mfaEnrollmentId: s,
                phoneSignInInfo: { recaptchaToken: i },
              })
            ).phoneResponseInfo.sessionInfo
          );
        }
      } else {
        let { sessionInfo: o } = await k2(t, {
          phoneNumber: a.phoneNumber,
          recaptchaToken: i,
        });
        return o;
      }
    } finally {
      r._reset();
    }
  }
  var Qa = class t {
    constructor(e) {
      (this.providerId = t.PROVIDER_ID), (this.auth = Pi(e));
    }
    verifyPhoneNumber(e, r) {
      return sj(this.auth, e, gr(r));
    }
    static credential(e, r) {
      return Ha._fromVerification(e, r);
    }
    static credentialFromResult(e) {
      let r = e;
      return t.credentialFromTaggedObject(r);
    }
    static credentialFromError(e) {
      return t.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e) return null;
      let { phoneNumber: r, temporaryProof: n } = e;
      return r && n ? Ha._fromTokenResponse(r, n) : null;
    }
  };
  Qa.PROVIDER_ID = "phone";
  Qa.PHONE_SIGN_IN_METHOD = "phone";
  function cj(t, e) {
    return e
      ? Dr(e)
      : (Z(t._popupRedirectResolver, t, "argument-error"),
        t._popupRedirectResolver);
  }
  var Ya = class extends qn {
    constructor(e) {
      super("custom", "custom"), (this.params = e);
    }
    _getIdTokenResponse(e) {
      return Di(e, this._buildIdpRequest());
    }
    _linkToIdToken(e, r) {
      return Di(e, this._buildIdpRequest(r));
    }
    _getReauthenticationResolver(e) {
      return Di(e, this._buildIdpRequest());
    }
    _buildIdpRequest(e) {
      let r = {
        requestUri: this.params.requestUri,
        sessionId: this.params.sessionId,
        postBody: this.params.postBody,
        tenantId: this.params.tenantId,
        pendingToken: this.params.pendingToken,
        returnSecureToken: !0,
        returnIdpCredential: !0,
      };
      return e && (r.idToken = e), r;
    }
  };
  function uj(t) {
    return U2(t.auth, new Ya(t), t.bypassAuthState);
  }
  function lj(t) {
    let { auth: e, user: r } = t;
    return Z(r, e, "internal-error"), L2(r, new Ya(t), t.bypassAuthState);
  }
  async function pj(t) {
    let { auth: e, user: r } = t;
    return Z(r, e, "internal-error"), P2(r, new Ya(t), t.bypassAuthState);
  }
  var dc = class {
    constructor(e, r, n, i, a = !1) {
      (this.auth = e),
        (this.resolver = n),
        (this.user = i),
        (this.bypassAuthState = a),
        (this.pendingPromise = null),
        (this.eventManager = null),
        (this.filter = Array.isArray(r) ? r : [r]);
    }
    execute() {
      return new Promise(async (e, r) => {
        this.pendingPromise = { resolve: e, reject: r };
        try {
          (this.eventManager = await this.resolver._initialize(this.auth)),
            await this.onExecution(),
            this.eventManager.registerConsumer(this);
        } catch (n) {
          this.reject(n);
        }
      });
    }
    async onAuthEvent(e) {
      let {
        urlResponse: r,
        sessionId: n,
        postBody: i,
        tenantId: a,
        error: o,
        type: s,
      } = e;
      if (o) {
        this.reject(o);
        return;
      }
      let c = {
        auth: this.auth,
        requestUri: r,
        sessionId: n,
        tenantId: a || void 0,
        postBody: i || void 0,
        user: this.user,
        bypassAuthState: this.bypassAuthState,
      };
      try {
        this.resolve(await this.getIdpTask(s)(c));
      } catch (u) {
        this.reject(u);
      }
    }
    onError(e) {
      this.reject(e);
    }
    getIdpTask(e) {
      switch (e) {
        case "signInViaPopup":
        case "signInViaRedirect":
          return uj;
        case "linkViaPopup":
        case "linkViaRedirect":
          return pj;
        case "reauthViaPopup":
        case "reauthViaRedirect":
          return lj;
        default:
          Jt(this.auth, "internal-error");
      }
    }
    resolve(e) {
      Fr(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.resolve(e),
        this.unregisterAndCleanUp();
    }
    reject(e) {
      Fr(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.reject(e),
        this.unregisterAndCleanUp();
    }
    unregisterAndCleanUp() {
      this.eventManager && this.eventManager.unregisterConsumer(this),
        (this.pendingPromise = null),
        this.cleanUp();
    }
  };
  var fj = new Un(2e3, 1e4);
  var df = class t extends dc {
    constructor(e, r, n, i, a) {
      super(e, r, i, a),
        (this.provider = n),
        (this.authWindow = null),
        (this.pollId = null),
        t.currentPopupAction && t.currentPopupAction.cancel(),
        (t.currentPopupAction = this);
    }
    async executeNotNull() {
      let e = await this.execute();
      return Z(e, this.auth, "internal-error"), e;
    }
    async onExecution() {
      Fr(this.filter.length === 1, "Popup operations only handle one event");
      let e = If();
      (this.authWindow = await this.resolver._openPopup(
        this.auth,
        this.provider,
        this.filter[0],
        e
      )),
        (this.authWindow.associatedEvent = e),
        this.resolver._originValidation(this.auth).catch((r) => {
          this.reject(r);
        }),
        this.resolver._isIframeWebStorageSupported(this.auth, (r) => {
          r || this.reject(Rr(this.auth, "web-storage-unsupported"));
        }),
        this.pollUserCancellation();
    }
    get eventId() {
      var e;
      return (
        ((e = this.authWindow) === null || e === void 0
          ? void 0
          : e.associatedEvent) || null
      );
    }
    cancel() {
      this.reject(Rr(this.auth, "cancelled-popup-request"));
    }
    cleanUp() {
      this.authWindow && this.authWindow.close(),
        this.pollId && window.clearTimeout(this.pollId),
        (this.authWindow = null),
        (this.pollId = null),
        (t.currentPopupAction = null);
    }
    pollUserCancellation() {
      let e = () => {
        var r, n;
        if (
          !(
            (n =
              (r = this.authWindow) === null || r === void 0
                ? void 0
                : r.window) === null || n === void 0
          ) &&
          n.closed
        ) {
          this.pollId = window.setTimeout(() => {
            (this.pollId = null),
              this.reject(Rr(this.auth, "popup-closed-by-user"));
          }, 8e3);
          return;
        }
        this.pollId = window.setTimeout(e, fj.get());
      };
      e();
    }
  };
  df.currentPopupAction = null;
  var dj = "pendingRedirect",
    Ks = new Map(),
    hf = class extends dc {
      constructor(e, r, n = !1) {
        super(
          e,
          [
            "signInViaRedirect",
            "linkViaRedirect",
            "reauthViaRedirect",
            "unknown",
          ],
          r,
          void 0,
          n
        ),
          (this.eventId = null);
      }
      async execute() {
        let e = Ks.get(this.auth._key());
        if (!e) {
          try {
            let n = (await hj(this.resolver, this.auth))
              ? await super.execute()
              : null;
            e = () => Promise.resolve(n);
          } catch (r) {
            e = () => Promise.reject(r);
          }
          Ks.set(this.auth._key(), e);
        }
        return (
          this.bypassAuthState ||
            Ks.set(this.auth._key(), () => Promise.resolve(null)),
          e()
        );
      }
      async onAuthEvent(e) {
        if (e.type === "signInViaRedirect") return super.onAuthEvent(e);
        if (e.type === "unknown") {
          this.resolve(null);
          return;
        }
        if (e.eventId) {
          let r = await this.auth._redirectUserForId(e.eventId);
          if (r) return (this.user = r), super.onAuthEvent(e);
          this.resolve(null);
        }
      }
      async onExecution() {}
      cleanUp() {}
    };
  async function hj(t, e) {
    let r = yj(e),
      n = mj(t);
    if (!(await n._isAvailable())) return !1;
    let i = (await n._get(r)) === "true";
    return await n._remove(r), i;
  }
  function gj(t, e) {
    Ks.set(t._key(), e);
  }
  function mj(t) {
    return Dr(t._redirectPersistence);
  }
  function yj(t) {
    return $s(dj, t.config.apiKey, t.name);
  }
  async function vj(t, e, r = !1) {
    let n = Pi(t),
      i = cj(n, e),
      o = await new hf(n, i, r).execute();
    return (
      o &&
        !r &&
        (delete o.user._redirectEventId,
        await n._persistUserIfCurrent(o.user),
        await n._setRedirectUser(null, e)),
      o
    );
  }
  var _j = 10 * 60 * 1e3,
    gf = class {
      constructor(e) {
        (this.auth = e),
          (this.cachedEventUids = new Set()),
          (this.consumers = new Set()),
          (this.queuedRedirectEvent = null),
          (this.hasHandledPotentialRedirect = !1),
          (this.lastProcessedEventTime = Date.now());
      }
      registerConsumer(e) {
        this.consumers.add(e),
          this.queuedRedirectEvent &&
            this.isEventForConsumer(this.queuedRedirectEvent, e) &&
            (this.sendToConsumer(this.queuedRedirectEvent, e),
            this.saveEventToCache(this.queuedRedirectEvent),
            (this.queuedRedirectEvent = null));
      }
      unregisterConsumer(e) {
        this.consumers.delete(e);
      }
      onEvent(e) {
        if (this.hasEventBeenHandled(e)) return !1;
        let r = !1;
        return (
          this.consumers.forEach((n) => {
            this.isEventForConsumer(e, n) &&
              ((r = !0), this.sendToConsumer(e, n), this.saveEventToCache(e));
          }),
          this.hasHandledPotentialRedirect ||
            !bj(e) ||
            ((this.hasHandledPotentialRedirect = !0),
            r || ((this.queuedRedirectEvent = e), (r = !0))),
          r
        );
      }
      sendToConsumer(e, r) {
        var n;
        if (e.error && !CE(e)) {
          let i =
            ((n = e.error.code) === null || n === void 0
              ? void 0
              : n.split("auth/")[1]) || "internal-error";
          r.onError(Rr(this.auth, i));
        } else r.onAuthEvent(e);
      }
      isEventForConsumer(e, r) {
        let n = r.eventId === null || (!!e.eventId && e.eventId === r.eventId);
        return r.filter.includes(e.type) && n;
      }
      hasEventBeenHandled(e) {
        return (
          Date.now() - this.lastProcessedEventTime >= _j &&
            this.cachedEventUids.clear(),
          this.cachedEventUids.has(JT(e))
        );
      }
      saveEventToCache(e) {
        this.cachedEventUids.add(JT(e)),
          (this.lastProcessedEventTime = Date.now());
      }
    };
  function JT(t) {
    return [t.type, t.eventId, t.sessionId, t.tenantId]
      .filter((e) => e)
      .join("-");
  }
  function CE({ type: t, error: e }) {
    return t === "unknown" && e?.code === "auth/no-auth-event";
  }
  function bj(t) {
    switch (t.type) {
      case "signInViaRedirect":
      case "linkViaRedirect":
      case "reauthViaRedirect":
        return !0;
      case "unknown":
        return CE(t);
      default:
        return !1;
    }
  }
  async function Sj(t, e = {}) {
    return pt(t, "GET", "/v1/projects", e);
  }
  var Tj = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    Ej = /^https?/;
  async function Ij(t) {
    if (t.config.emulator) return;
    let { authorizedDomains: e } = await Sj(t);
    for (let r of e)
      try {
        if (xj(r)) return;
      } catch {}
    Jt(t, "unauthorized-domain");
  }
  function xj(t) {
    let e = ef(),
      { protocol: r, hostname: n } = new URL(e);
    if (t.startsWith("chrome-extension://")) {
      let o = new URL(t);
      return o.hostname === "" && n === ""
        ? r === "chrome-extension:" &&
            t.replace("chrome-extension://", "") ===
              e.replace("chrome-extension://", "")
        : r === "chrome-extension:" && o.hostname === n;
    }
    if (!Ej.test(r)) return !1;
    if (Tj.test(t)) return n === t;
    let i = t.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(n);
  }
  var wj = new Un(3e4, 6e4);
  function XT() {
    let t = _r().___jsl;
    if (t?.H) {
      for (let e of Object.keys(t.H))
        if (
          ((t.H[e].r = t.H[e].r || []),
          (t.H[e].L = t.H[e].L || []),
          (t.H[e].r = [...t.H[e].L]),
          t.CP)
        )
          for (let r = 0; r < t.CP.length; r++) t.CP[r] = null;
    }
  }
  function Aj(t) {
    return new Promise((e, r) => {
      var n, i, a;
      function o() {
        XT(),
          gapi.load("gapi.iframes", {
            callback: () => {
              e(gapi.iframes.getContext());
            },
            ontimeout: () => {
              XT(), r(Rr(t, "network-request-failed"));
            },
            timeout: wj.get(),
          });
      }
      if (
        !(
          (i =
            (n = _r().gapi) === null || n === void 0 ? void 0 : n.iframes) ===
            null || i === void 0
        ) &&
        i.Iframe
      )
        e(gapi.iframes.getContext());
      else if (!((a = _r().gapi) === null || a === void 0) && a.load) o();
      else {
        let s = vE("iframefcb");
        return (
          (_r()[s] = () => {
            gapi.load ? o() : r(Rr(t, "network-request-failed"));
          }),
          Promise.resolve().catch((c) => r(c))
        );
      }
    }).catch((e) => {
      throw ((Qs = null), e);
    });
  }
  var Qs = null;
  function Oj(t) {
    return (Qs = Qs || Aj(t)), Qs;
  }
  var kj = new Un(5e3, 15e3),
    Cj = "__/auth/iframe",
    Mj = "emulator/auth/iframe",
    Nj = {
      style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px",
      },
      "aria-hidden": "true",
      tabindex: "-1",
    },
    Dj = new Map([
      ["identitytoolkit.googleapis.com", "p"],
      ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
      ["test-identitytoolkit.sandbox.googleapis.com", "t"],
    ]);
  function Rj(t) {
    let e = t.config;
    Z(e.authDomain, t, "auth-domain-config-required");
    let r = e.emulator ? bf(e, Mj) : `https://${t.config.authDomain}/${Cj}`,
      n = { apiKey: e.apiKey, appName: t.name, v: Ni },
      i = Dj.get(t.config.apiHost);
    i && (n.eid = i);
    let a = t._getFrameworks();
    return a.length && (n.fw = a.join(",")), `${r}?${Ai(n).slice(1)}`;
  }
  async function Fj(t) {
    let e = await Oj(t),
      r = _r().gapi;
    return (
      Z(r, t, "internal-error"),
      e.open(
        {
          where: document.body,
          url: Rj(t),
          messageHandlersFilter: r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
          attributes: Nj,
          dontclear: !0,
        },
        (n) =>
          new Promise(async (i, a) => {
            await n.restyle({ setHideOnLeave: !1 });
            let o = Rr(t, "network-request-failed"),
              s = _r().setTimeout(() => {
                a(o);
              }, kj.get());
            function c() {
              _r().clearTimeout(s), i(n);
            }
            n.ping(c).then(c, () => {
              a(o);
            });
          })
      )
    );
  }
  var Pj = {
      location: "yes",
      resizable: "yes",
      statusbar: "yes",
      toolbar: "no",
    },
    Lj = 500,
    Uj = 600,
    qj = "_blank",
    Bj = "http://localhost",
    hc = class {
      constructor(e) {
        (this.window = e), (this.associatedEvent = null);
      }
      close() {
        if (this.window)
          try {
            this.window.close();
          } catch {}
      }
    };
  function jj(t, e, r, n = Lj, i = Uj) {
    let a = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
      o = Math.max((window.screen.availWidth - n) / 2, 0).toString(),
      s = "",
      c = Object.assign(Object.assign({}, Pj), {
        width: n.toString(),
        height: i.toString(),
        top: a,
        left: o,
      }),
      u = et().toLowerCase();
    r && (s = pE(u) ? qj : r), lE(u) && ((e = e || Bj), (c.scrollbars = "yes"));
    let l = Object.entries(c).reduce((p, [d, g]) => `${p}${d}=${g},`, "");
    if (h2(u) && s !== "_self") return Vj(e || "", s), new hc(null);
    let f = window.open(e || "", s, l);
    Z(f, t, "popup-blocked");
    try {
      f.focus();
    } catch {}
    return new hc(f);
  }
  function Vj(t, e) {
    let r = document.createElement("a");
    (r.href = t), (r.target = e);
    let n = document.createEvent("MouseEvent");
    n.initMouseEvent(
      "click",
      !0,
      !0,
      window,
      1,
      0,
      0,
      0,
      0,
      !1,
      !1,
      !1,
      !1,
      1,
      null
    ),
      r.dispatchEvent(n);
  }
  var Wj = "__/auth/handler",
    Hj = "emulator/auth/handler",
    Gj = encodeURIComponent("fac");
  async function ZT(t, e, r, n, i, a) {
    Z(t.config.authDomain, t, "auth-domain-config-required"),
      Z(t.config.apiKey, t, "invalid-api-key");
    let o = {
      apiKey: t.config.apiKey,
      appName: t.name,
      authType: r,
      redirectUrl: n,
      v: Ni,
      eventId: i,
    };
    if (e instanceof ac) {
      e.setDefaultLanguage(t.languageCode),
        (o.providerId = e.providerId || ""),
        xT(e.getCustomParameters()) ||
          (o.customParameters = JSON.stringify(e.getCustomParameters()));
      for (let [l, f] of Object.entries(a || {})) o[l] = f;
    }
    if (e instanceof jn) {
      let l = e.getScopes().filter((f) => f !== "");
      l.length > 0 && (o.scopes = l.join(","));
    }
    t.tenantId && (o.tid = t.tenantId);
    let s = o;
    for (let l of Object.keys(s)) s[l] === void 0 && delete s[l];
    let c = await t._getAppCheckToken(),
      u = c ? `#${Gj}=${encodeURIComponent(c)}` : "";
    return `${zj(t)}?${Ai(s).slice(1)}${u}`;
  }
  function zj({ config: t }) {
    return t.emulator ? bf(t, Hj) : `https://${t.authDomain}/${Wj}`;
  }
  var Zp = "webStorageSupport",
    mf = class {
      constructor() {
        (this.eventManagers = {}),
          (this.iframes = {}),
          (this.originValidationPromises = {}),
          (this._redirectPersistence = Ef),
          (this._completeRedirectFn = vj),
          (this._overrideRedirectResult = gj);
      }
      async _openPopup(e, r, n, i) {
        var a;
        Fr(
          (a = this.eventManagers[e._key()]) === null || a === void 0
            ? void 0
            : a.manager,
          "_initialize() not called before _openPopup()"
        );
        let o = await ZT(e, r, n, ef(), i);
        return jj(e, o, If());
      }
      async _openRedirect(e, r, n, i) {
        await this._originValidation(e);
        let a = await ZT(e, r, n, ef(), i);
        return K2(a), new Promise(() => {});
      }
      _initialize(e) {
        let r = e._key();
        if (this.eventManagers[r]) {
          let { manager: i, promise: a } = this.eventManagers[r];
          return i
            ? Promise.resolve(i)
            : (Fr(a, "If manager is not set, promise should be"), a);
        }
        let n = this.initAndGetManager(e);
        return (
          (this.eventManagers[r] = { promise: n }),
          n.catch(() => {
            delete this.eventManagers[r];
          }),
          n
        );
      }
      async initAndGetManager(e) {
        let r = await Fj(e),
          n = new gf(e);
        return (
          r.register(
            "authEvent",
            (i) => (
              Z(i?.authEvent, e, "invalid-auth-event"),
              { status: n.onEvent(i.authEvent) ? "ACK" : "ERROR" }
            ),
            gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
          ),
          (this.eventManagers[e._key()] = { manager: n }),
          (this.iframes[e._key()] = r),
          n
        );
      }
      _isIframeWebStorageSupported(e, r) {
        this.iframes[e._key()].send(
          Zp,
          { type: Zp },
          (i) => {
            var a;
            let o = (a = i?.[0]) === null || a === void 0 ? void 0 : a[Zp];
            o !== void 0 && r(!!o), Jt(e, "internal-error");
          },
          gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
        );
      }
      _originValidation(e) {
        let r = e._key();
        return (
          this.originValidationPromises[r] ||
            (this.originValidationPromises[r] = Ij(e)),
          this.originValidationPromises[r]
        );
      }
      get _shouldInitProactively() {
        return mE() || Tf() || bc();
      }
    },
    ME = mf,
    gc = class {
      constructor(e) {
        this.factorId = e;
      }
      _process(e, r, n) {
        switch (r.type) {
          case "enroll":
            return this._finalizeEnroll(e, r.credential, n);
          case "signin":
            return this._finalizeSignIn(e, r.credential);
          default:
            return vr("unexpected MultiFactorSessionType");
        }
      }
    },
    yf = class t extends gc {
      constructor(e) {
        super("phone"), (this.credential = e);
      }
      static _fromCredential(e) {
        return new t(e);
      }
      _finalizeEnroll(e, r, n) {
        return j2(e, {
          idToken: r,
          displayName: n,
          phoneVerificationInfo: this.credential._makeVerificationRequest(),
        });
      }
      _finalizeSignIn(e, r) {
        return ij(e, {
          mfaPendingCredential: r,
          phoneVerificationInfo: this.credential._makeVerificationRequest(),
        });
      }
    },
    mc = class {
      constructor() {}
      static assertion(e) {
        return yf._fromCredential(e);
      }
    };
  mc.FACTOR_ID = "phone";
  var yc = class {
    static assertionForEnrollment(e, r) {
      return vc._fromSecret(e, r);
    }
    static assertionForSignIn(e, r) {
      return vc._fromEnrollmentId(e, r);
    }
    static async generateSecret(e) {
      var r;
      let n = e;
      Z(
        typeof ((r = n.user) === null || r === void 0 ? void 0 : r.auth) < "u",
        "internal-error"
      );
      let i = await V2(n.user.auth, {
        idToken: n.credential,
        totpEnrollmentInfo: {},
      });
      return _c._fromStartTotpMfaEnrollmentResponse(i, n.user.auth);
    }
  };
  yc.FACTOR_ID = "totp";
  var vc = class t extends gc {
      constructor(e, r, n) {
        super("totp"),
          (this.otp = e),
          (this.enrollmentId = r),
          (this.secret = n);
      }
      static _fromSecret(e, r) {
        return new t(r, void 0, e);
      }
      static _fromEnrollmentId(e, r) {
        return new t(r, e);
      }
      async _finalizeEnroll(e, r, n) {
        return (
          Z(typeof this.secret < "u", e, "argument-error"),
          W2(e, {
            idToken: r,
            displayName: n,
            totpVerificationInfo: this.secret._makeTotpVerificationInfo(
              this.otp
            ),
          })
        );
      }
      async _finalizeSignIn(e, r) {
        Z(
          this.enrollmentId !== void 0 && this.otp !== void 0,
          e,
          "argument-error"
        );
        let n = { verificationCode: this.otp };
        return aj(e, {
          mfaPendingCredential: r,
          mfaEnrollmentId: this.enrollmentId,
          totpVerificationInfo: n,
        });
      }
    },
    _c = class t {
      constructor(e, r, n, i, a, o, s) {
        (this.sessionInfo = o),
          (this.auth = s),
          (this.secretKey = e),
          (this.hashingAlgorithm = r),
          (this.codeLength = n),
          (this.codeIntervalSeconds = i),
          (this.enrollmentCompletionDeadline = a);
      }
      static _fromStartTotpMfaEnrollmentResponse(e, r) {
        return new t(
          e.totpSessionInfo.sharedSecretKey,
          e.totpSessionInfo.hashingAlgorithm,
          e.totpSessionInfo.verificationCodeLength,
          e.totpSessionInfo.periodSec,
          new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),
          e.totpSessionInfo.sessionInfo,
          r
        );
      }
      _makeTotpVerificationInfo(e) {
        return { sessionInfo: this.sessionInfo, verificationCode: e };
      }
      generateQrCodeUrl(e, r) {
        var n;
        let i = !1;
        return (
          (Gs(e) || Gs(r)) && (i = !0),
          i &&
            (Gs(e) &&
              (e =
                ((n = this.auth.currentUser) === null || n === void 0
                  ? void 0
                  : n.email) || "unknownuser"),
            Gs(r) && (r = this.auth.name)),
          `otpauth://totp/${r}:${e}?secret=${this.secretKey}&issuer=${r}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`
        );
      }
    };
  function Gs(t) {
    return typeof t > "u" || t?.length === 0;
  }
  var eE = "@firebase/auth",
    tE = "1.5.1";
  var vf = class {
    constructor(e) {
      (this.auth = e), (this.internalListeners = new Map());
    }
    getUid() {
      var e;
      return (
        this.assertAuthConfigured(),
        ((e = this.auth.currentUser) === null || e === void 0
          ? void 0
          : e.uid) || null
      );
    }
    async getToken(e) {
      return (
        this.assertAuthConfigured(),
        await this.auth._initializationPromise,
        this.auth.currentUser
          ? { accessToken: await this.auth.currentUser.getIdToken(e) }
          : null
      );
    }
    addAuthTokenListener(e) {
      if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
      let r = this.auth.onIdTokenChanged((n) => {
        e(n?.stsTokenManager.accessToken || null);
      });
      this.internalListeners.set(e, r), this.updateProactiveRefresh();
    }
    removeAuthTokenListener(e) {
      this.assertAuthConfigured();
      let r = this.internalListeners.get(e);
      r &&
        (this.internalListeners.delete(e), r(), this.updateProactiveRefresh());
    }
    assertAuthConfigured() {
      Z(
        this.auth._initializationPromise,
        "dependent-sdk-initialized-before-auth"
      );
    }
    updateProactiveRefresh() {
      this.internalListeners.size > 0
        ? this.auth._startProactiveRefresh()
        : this.auth._stopProactiveRefresh();
    }
  };
  function $j(t) {
    switch (t) {
      case "Node":
        return "node";
      case "ReactNative":
        return "rn";
      case "Worker":
        return "webworker";
      case "Cordova":
        return "cordova";
      default:
        return;
    }
  }
  function Kj(t) {
    Mi(
      new mr(
        "auth",
        (e, { options: r }) => {
          let n = e.getProvider("app").getImmediate(),
            i = e.getProvider("heartbeat"),
            a = e.getProvider("app-check-internal"),
            { apiKey: o, authDomain: s } = n.options;
          Z(o && !o.includes(":"), "invalid-api-key", { appName: n.name });
          let c = {
              apiKey: o,
              authDomain: s,
              clientPlatform: t,
              apiHost: "identitytoolkit.googleapis.com",
              tokenApiHost: "securetoken.googleapis.com",
              apiScheme: "https",
              sdkClientVersion: yE(t),
            },
            u = new cf(n, i, a, c);
          return S2(u, r), u;
        },
        "PUBLIC"
      )
        .setInstantiationMode("EXPLICIT")
        .setInstanceCreatedCallback((e, r, n) => {
          e.getProvider("auth-internal").initialize();
        })
    ),
      Mi(
        new mr(
          "auth-internal",
          (e) => {
            let r = Pi(e.getProvider("auth").getImmediate());
            return ((n) => new vf(n))(r);
          },
          "PRIVATE"
        ).setInstantiationMode("EXPLICIT")
      ),
      on(eE, tE, $j(t)),
      on(eE, tE, "esm2017");
  }
  var Qj = 5 * 60,
    Yj = Rp("authIdTokenMaxAge") || Qj,
    rE = null,
    Jj = (t) => async (e) => {
      let r = e && (await e.getIdTokenResult()),
        n = r && (new Date().getTime() - Date.parse(r.issuedAtTime)) / 1e3;
      if (n && n > Yj) return;
      let i = r?.token;
      rE !== i &&
        ((rE = i),
        await fetch(t, {
          method: i ? "POST" : "DELETE",
          headers: i ? { Authorization: `Bearer ${i}` } : {},
        }));
    };
  function tt(t = UT()) {
    let e = Qp(t, "auth");
    if (e.isInitialized()) return e.getImmediate();
    let r = _E(t, { popupRedirectResolver: ME, persistence: [kE, xE, Ef] }),
      n = Rp("authTokenSyncURL");
    if (n) {
      let a = Jj(n);
      IE(r, a, () => a(r.currentUser)), EE(r, (o) => a(o));
    }
    let i = vT("auth");
    return i && bE(r, `http://${i}`), r;
  }
  Kj("Browser");
  var Ki = Fe(eI()),
    wu = Fe(zf());
  function rt(t) {
    return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
  }
  var IV = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
    tI = IV,
    $f = () => Math.random().toString(36).substring(7).split("").join("."),
    xV = {
      INIT: `@@redux/INIT${$f()}`,
      REPLACE: `@@redux/REPLACE${$f()}`,
      PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${$f()}`,
    },
    Rc = xV;
  function Fc(t) {
    if (typeof t != "object" || t === null) return !1;
    let e = t;
    for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e || Object.getPrototypeOf(t) === null;
  }
  function Kf(t, e, r) {
    if (typeof t != "function") throw new Error(rt(2));
    if (
      (typeof e == "function" && typeof r == "function") ||
      (typeof r == "function" && typeof arguments[3] == "function")
    )
      throw new Error(rt(0));
    if (
      (typeof e == "function" && typeof r > "u" && ((r = e), (e = void 0)),
      typeof r < "u")
    ) {
      if (typeof r != "function") throw new Error(rt(1));
      return r(Kf)(t, e);
    }
    let n = t,
      i = e,
      a = new Map(),
      o = a,
      s = 0,
      c = !1;
    function u() {
      o === a &&
        ((o = new Map()),
        a.forEach((y, m) => {
          o.set(m, y);
        }));
    }
    function l() {
      if (c) throw new Error(rt(3));
      return i;
    }
    function f(y) {
      if (typeof y != "function") throw new Error(rt(4));
      if (c) throw new Error(rt(5));
      let m = !0;
      u();
      let I = s++;
      return (
        o.set(I, y),
        function () {
          if (m) {
            if (c) throw new Error(rt(6));
            (m = !1), u(), o.delete(I), (a = null);
          }
        }
      );
    }
    function p(y) {
      if (!Fc(y)) throw new Error(rt(7));
      if (typeof y.type > "u") throw new Error(rt(8));
      if (typeof y.type != "string") throw new Error(rt(17));
      if (c) throw new Error(rt(9));
      try {
        (c = !0), (i = n(i, y));
      } finally {
        c = !1;
      }
      return (
        (a = o).forEach((I) => {
          I();
        }),
        y
      );
    }
    function d(y) {
      if (typeof y != "function") throw new Error(rt(10));
      (n = y), p({ type: Rc.REPLACE });
    }
    function g() {
      let y = f;
      return {
        subscribe(m) {
          if (typeof m != "object" || m === null) throw new Error(rt(11));
          function I() {
            let w = m;
            w.next && w.next(l());
          }
          return I(), { unsubscribe: y(I) };
        },
        [tI]() {
          return this;
        },
      };
    }
    return (
      p({ type: Rc.INIT }),
      { dispatch: p, subscribe: f, getState: l, replaceReducer: d, [tI]: g }
    );
  }
  function wV(t) {
    Object.keys(t).forEach((e) => {
      let r = t[e];
      if (typeof r(void 0, { type: Rc.INIT }) > "u") throw new Error(rt(12));
      if (typeof r(void 0, { type: Rc.PROBE_UNKNOWN_ACTION() }) > "u")
        throw new Error(rt(13));
    });
  }
  function Pc(t) {
    let e = Object.keys(t),
      r = {};
    for (let o = 0; o < e.length; o++) {
      let s = e[o];
      typeof t[s] == "function" && (r[s] = t[s]);
    }
    let n = Object.keys(r),
      i,
      a;
    try {
      wV(r);
    } catch (o) {
      a = o;
    }
    return function (s = {}, c) {
      if (a) throw a;
      let u = !1,
        l = {};
      for (let f = 0; f < n.length; f++) {
        let p = n[f],
          d = r[p],
          g = s[p],
          v = d(g, c);
        if (typeof v > "u") {
          let y = c && c.type;
          throw new Error(rt(14));
        }
        (l[p] = v), (u = u || v !== g);
      }
      return (u = u || n.length !== Object.keys(s).length), u ? l : s;
    };
  }
  function Wi(...t) {
    return t.length === 0
      ? (e) => e
      : t.length === 1
      ? t[0]
      : t.reduce(
          (e, r) =>
            (...n) =>
              e(r(...n))
        );
  }
  function rI(...t) {
    return (e) => (r, n) => {
      let i = e(r, n),
        a = () => {
          throw new Error(rt(15));
        },
        o = { getState: i.getState, dispatch: (c, ...u) => a(c, ...u) },
        s = t.map((c) => c(o));
      return (a = Wi(...s)(i.dispatch)), { ...i, dispatch: a };
    };
  }
  function nI(t) {
    return Fc(t) && "type" in t && typeof t.type == "string";
  }
  var uI = Symbol.for("immer-nothing"),
    iI = Symbol.for("immer-draftable"),
    Ft = Symbol.for("immer-state");
  function Zt(t, ...e) {
    throw new Error(
      `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var Hi = Object.getPrototypeOf;
  function Er(t) {
    return !!t && !!t[Ft];
  }
  function er(t) {
    return t
      ? lI(t) ||
          Array.isArray(t) ||
          !!t[iI] ||
          !!t.constructor?.[iI] ||
          Bc(t) ||
          jc(t)
      : !1;
  }
  var AV = Object.prototype.constructor.toString();
  function lI(t) {
    if (!t || typeof t != "object") return !1;
    let e = Hi(t);
    if (e === null) return !0;
    let r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
    return r === Object
      ? !0
      : typeof r == "function" && Function.toString.call(r) === AV;
  }
  function io(t, e) {
    qc(t) === 0
      ? Object.entries(t).forEach(([r, n]) => {
          e(r, n, t);
        })
      : t.forEach((r, n) => e(n, r, t));
  }
  function qc(t) {
    let e = t[Ft];
    return e ? e.type_ : Array.isArray(t) ? 1 : Bc(t) ? 2 : jc(t) ? 3 : 0;
  }
  function Jf(t, e) {
    return qc(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
  }
  function pI(t, e, r) {
    let n = qc(t);
    n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : (t[e] = r);
  }
  function OV(t, e) {
    return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
  }
  function Bc(t) {
    return t instanceof Map;
  }
  function jc(t) {
    return t instanceof Set;
  }
  function Gn(t) {
    return t.copy_ || t.base_;
  }
  function Xf(t, e) {
    if (Bc(t)) return new Map(t);
    if (jc(t)) return new Set(t);
    if (Array.isArray(t)) return Array.prototype.slice.call(t);
    if (!e && lI(t))
      return Hi(t) ? { ...t } : Object.assign(Object.create(null), t);
    let r = Object.getOwnPropertyDescriptors(t);
    delete r[Ft];
    let n = Reflect.ownKeys(r);
    for (let i = 0; i < n.length; i++) {
      let a = n[i],
        o = r[a];
      o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
        (o.get || o.set) &&
          (r[a] = {
            configurable: !0,
            writable: !0,
            enumerable: o.enumerable,
            value: t[a],
          });
    }
    return Object.create(Hi(t), r);
  }
  function nd(t, e = !1) {
    return (
      Vc(t) ||
        Er(t) ||
        !er(t) ||
        (qc(t) > 1 && (t.set = t.add = t.clear = t.delete = kV),
        Object.freeze(t),
        e && io(t, (r, n) => nd(n, !0), !0)),
      t
    );
  }
  function kV() {
    Zt(2);
  }
  function Vc(t) {
    return Object.isFrozen(t);
  }
  var CV = {};
  function zn(t) {
    let e = CV[t];
    return e || Zt(0, t), e;
  }
  var ao;
  function fI() {
    return ao;
  }
  function MV(t, e) {
    return {
      drafts_: [],
      parent_: t,
      immer_: e,
      canAutoFreeze_: !0,
      unfinalizedDrafts_: 0,
    };
  }
  function aI(t, e) {
    e &&
      (zn("Patches"),
      (t.patches_ = []),
      (t.inversePatches_ = []),
      (t.patchListener_ = e));
  }
  function Zf(t) {
    ed(t), t.drafts_.forEach(NV), (t.drafts_ = null);
  }
  function ed(t) {
    t === ao && (ao = t.parent_);
  }
  function oI(t) {
    return (ao = MV(ao, t));
  }
  function NV(t) {
    let e = t[Ft];
    e.type_ === 0 || e.type_ === 1 ? e.revoke_() : (e.revoked_ = !0);
  }
  function sI(t, e) {
    e.unfinalizedDrafts_ = e.drafts_.length;
    let r = e.drafts_[0];
    return (
      t !== void 0 && t !== r
        ? (r[Ft].modified_ && (Zf(e), Zt(4)),
          er(t) && ((t = Lc(e, t)), e.parent_ || Uc(e, t)),
          e.patches_ &&
            zn("Patches").generateReplacementPatches_(
              r[Ft].base_,
              t,
              e.patches_,
              e.inversePatches_
            ))
        : (t = Lc(e, r, [])),
      Zf(e),
      e.patches_ && e.patchListener_(e.patches_, e.inversePatches_),
      t !== uI ? t : void 0
    );
  }
  function Lc(t, e, r) {
    if (Vc(e)) return e;
    let n = e[Ft];
    if (!n) return io(e, (i, a) => cI(t, n, e, i, a, r), !0), e;
    if (n.scope_ !== t) return e;
    if (!n.modified_) return Uc(t, n.base_, !0), n.base_;
    if (!n.finalized_) {
      (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
      let i = n.copy_,
        a = i,
        o = !1;
      n.type_ === 3 && ((a = new Set(i)), i.clear(), (o = !0)),
        io(a, (s, c) => cI(t, n, i, s, c, r, o)),
        Uc(t, i, !1),
        r &&
          t.patches_ &&
          zn("Patches").generatePatches_(n, r, t.patches_, t.inversePatches_);
    }
    return n.copy_;
  }
  function cI(t, e, r, n, i, a, o) {
    if (Er(i)) {
      let s =
          a && e && e.type_ !== 3 && !Jf(e.assigned_, n) ? a.concat(n) : void 0,
        c = Lc(t, i, s);
      if ((pI(r, n, c), Er(c))) t.canAutoFreeze_ = !1;
      else return;
    } else o && r.add(i);
    if (er(i) && !Vc(i)) {
      if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1) return;
      Lc(t, i), (!e || !e.scope_.parent_) && Uc(t, i);
    }
  }
  function Uc(t, e, r = !1) {
    !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && nd(e, r);
  }
  function DV(t, e) {
    let r = Array.isArray(t),
      n = {
        type_: r ? 1 : 0,
        scope_: e ? e.scope_ : fI(),
        modified_: !1,
        finalized_: !1,
        assigned_: {},
        parent_: e,
        base_: t,
        draft_: null,
        copy_: null,
        revoke_: null,
        isManual_: !1,
      },
      i = n,
      a = id;
    r && ((i = [n]), (a = oo));
    let { revoke: o, proxy: s } = Proxy.revocable(i, a);
    return (n.draft_ = s), (n.revoke_ = o), s;
  }
  var id = {
      get(t, e) {
        if (e === Ft) return t;
        let r = Gn(t);
        if (!Jf(r, e)) return RV(t, r, e);
        let n = r[e];
        return t.finalized_ || !er(n)
          ? n
          : n === Qf(t.base_, e)
          ? (Yf(t), (t.copy_[e] = rd(n, t)))
          : n;
      },
      has(t, e) {
        return e in Gn(t);
      },
      ownKeys(t) {
        return Reflect.ownKeys(Gn(t));
      },
      set(t, e, r) {
        let n = dI(Gn(t), e);
        if (n?.set) return n.set.call(t.draft_, r), !0;
        if (!t.modified_) {
          let i = Qf(Gn(t), e),
            a = i?.[Ft];
          if (a && a.base_ === r)
            return (t.copy_[e] = r), (t.assigned_[e] = !1), !0;
          if (OV(r, i) && (r !== void 0 || Jf(t.base_, e))) return !0;
          Yf(t), td(t);
        }
        return (
          (t.copy_[e] === r && (r !== void 0 || e in t.copy_)) ||
            (Number.isNaN(r) && Number.isNaN(t.copy_[e])) ||
            ((t.copy_[e] = r), (t.assigned_[e] = !0)),
          !0
        );
      },
      deleteProperty(t, e) {
        return (
          Qf(t.base_, e) !== void 0 || e in t.base_
            ? ((t.assigned_[e] = !1), Yf(t), td(t))
            : delete t.assigned_[e],
          t.copy_ && delete t.copy_[e],
          !0
        );
      },
      getOwnPropertyDescriptor(t, e) {
        let r = Gn(t),
          n = Reflect.getOwnPropertyDescriptor(r, e);
        return (
          n && {
            writable: !0,
            configurable: t.type_ !== 1 || e !== "length",
            enumerable: n.enumerable,
            value: r[e],
          }
        );
      },
      defineProperty() {
        Zt(11);
      },
      getPrototypeOf(t) {
        return Hi(t.base_);
      },
      setPrototypeOf() {
        Zt(12);
      },
    },
    oo = {};
  io(id, (t, e) => {
    oo[t] = function () {
      return (arguments[0] = arguments[0][0]), e.apply(this, arguments);
    };
  });
  oo.deleteProperty = function (t, e) {
    return oo.set.call(this, t, e, void 0);
  };
  oo.set = function (t, e, r) {
    return id.set.call(this, t[0], e, r, t[0]);
  };
  function Qf(t, e) {
    let r = t[Ft];
    return (r ? Gn(r) : t)[e];
  }
  function RV(t, e, r) {
    let n = dI(e, r);
    return n ? ("value" in n ? n.value : n.get?.call(t.draft_)) : void 0;
  }
  function dI(t, e) {
    if (!(e in t)) return;
    let r = Hi(t);
    for (; r; ) {
      let n = Object.getOwnPropertyDescriptor(r, e);
      if (n) return n;
      r = Hi(r);
    }
  }
  function td(t) {
    t.modified_ || ((t.modified_ = !0), t.parent_ && td(t.parent_));
  }
  function Yf(t) {
    t.copy_ || (t.copy_ = Xf(t.base_, t.scope_.immer_.useStrictShallowCopy_));
  }
  var FV = class {
    constructor(t) {
      (this.autoFreeze_ = !0),
        (this.useStrictShallowCopy_ = !1),
        (this.produce = (e, r, n) => {
          if (typeof e == "function" && typeof r != "function") {
            let a = r;
            r = e;
            let o = this;
            return function (c = a, ...u) {
              return o.produce(c, (l) => r.call(this, l, ...u));
            };
          }
          typeof r != "function" && Zt(6),
            n !== void 0 && typeof n != "function" && Zt(7);
          let i;
          if (er(e)) {
            let a = oI(this),
              o = rd(e, void 0),
              s = !0;
            try {
              (i = r(o)), (s = !1);
            } finally {
              s ? Zf(a) : ed(a);
            }
            return aI(a, n), sI(i, a);
          } else if (!e || typeof e != "object") {
            if (
              ((i = r(e)),
              i === void 0 && (i = e),
              i === uI && (i = void 0),
              this.autoFreeze_ && nd(i, !0),
              n)
            ) {
              let a = [],
                o = [];
              zn("Patches").generateReplacementPatches_(e, i, a, o), n(a, o);
            }
            return i;
          } else Zt(1, e);
        }),
        (this.produceWithPatches = (e, r) => {
          if (typeof e == "function")
            return (o, ...s) => this.produceWithPatches(o, (c) => e(c, ...s));
          let n, i;
          return [
            this.produce(e, r, (o, s) => {
              (n = o), (i = s);
            }),
            n,
            i,
          ];
        }),
        typeof t?.autoFreeze == "boolean" && this.setAutoFreeze(t.autoFreeze),
        typeof t?.useStrictShallowCopy == "boolean" &&
          this.setUseStrictShallowCopy(t.useStrictShallowCopy);
    }
    createDraft(t) {
      er(t) || Zt(8), Er(t) && (t = ad(t));
      let e = oI(this),
        r = rd(t, void 0);
      return (r[Ft].isManual_ = !0), ed(e), r;
    }
    finishDraft(t, e) {
      let r = t && t[Ft];
      (!r || !r.isManual_) && Zt(9);
      let { scope_: n } = r;
      return aI(n, e), sI(void 0, n);
    }
    setAutoFreeze(t) {
      this.autoFreeze_ = t;
    }
    setUseStrictShallowCopy(t) {
      this.useStrictShallowCopy_ = t;
    }
    applyPatches(t, e) {
      let r;
      for (r = e.length - 1; r >= 0; r--) {
        let i = e[r];
        if (i.path.length === 0 && i.op === "replace") {
          t = i.value;
          break;
        }
      }
      r > -1 && (e = e.slice(r + 1));
      let n = zn("Patches").applyPatches_;
      return Er(t) ? n(t, e) : this.produce(t, (i) => n(i, e));
    }
  };
  function rd(t, e) {
    let r = Bc(t)
      ? zn("MapSet").proxyMap_(t, e)
      : jc(t)
      ? zn("MapSet").proxySet_(t, e)
      : DV(t, e);
    return (e ? e.scope_ : fI()).drafts_.push(r), r;
  }
  function ad(t) {
    return Er(t) || Zt(10, t), hI(t);
  }
  function hI(t) {
    if (!er(t) || Vc(t)) return t;
    let e = t[Ft],
      r;
    if (e) {
      if (!e.modified_) return e.base_;
      (e.finalized_ = !0), (r = Xf(t, e.scope_.immer_.useStrictShallowCopy_));
    } else r = Xf(t, !0);
    return (
      io(r, (n, i) => {
        pI(r, n, hI(i));
      }),
      e && (e.finalized_ = !1),
      r
    );
  }
  var Pt = new FV(),
    Wc = Pt.produce,
    DZ = Pt.produceWithPatches.bind(Pt),
    RZ = Pt.setAutoFreeze.bind(Pt),
    FZ = Pt.setUseStrictShallowCopy.bind(Pt),
    PZ = Pt.applyPatches.bind(Pt),
    LZ = Pt.createDraft.bind(Pt),
    UZ = Pt.finishDraft.bind(Pt);
  function PV(t, e = `expected a function, instead received ${typeof t}`) {
    if (typeof t != "function") throw new TypeError(e);
  }
  function LV(t, e = `expected an object, instead received ${typeof t}`) {
    if (typeof t != "object") throw new TypeError(e);
  }
  function UV(
    t,
    e = "expected all items to be functions, instead received the following types: "
  ) {
    if (!t.every((r) => typeof r == "function")) {
      let r = t
        .map((n) =>
          typeof n == "function"
            ? `function ${n.name || "unnamed"}()`
            : typeof n
        )
        .join(", ");
      throw new TypeError(`${e}[${r}]`);
    }
  }
  var gI = (t) => (Array.isArray(t) ? t : [t]);
  function qV(t) {
    let e = Array.isArray(t[0]) ? t[0] : t;
    return (
      UV(
        e,
        "createSelector expects all input-selectors to be functions, but received the following types: "
      ),
      e
    );
  }
  function BV(t, e) {
    let r = [],
      { length: n } = t;
    for (let i = 0; i < n; i++) r.push(t[i].apply(null, e));
    return r;
  }
  var jZ = Symbol();
  var VZ = Object.getPrototypeOf({});
  var jV = class {
      constructor(t) {
        this.value = t;
      }
      deref() {
        return this.value;
      }
    },
    VV = typeof WeakRef < "u" ? WeakRef : jV,
    WV = 0,
    mI = 1;
  function Hc() {
    return { s: WV, v: void 0, o: null, p: null };
  }
  function Gc(t, e = {}) {
    let r = Hc(),
      { resultEqualityCheck: n } = e,
      i,
      a = 0;
    function o() {
      let s = r,
        { length: c } = arguments;
      for (let f = 0, p = c; f < p; f++) {
        let d = arguments[f];
        if (typeof d == "function" || (typeof d == "object" && d !== null)) {
          let g = s.o;
          g === null && (s.o = g = new WeakMap());
          let v = g.get(d);
          v === void 0 ? ((s = Hc()), g.set(d, s)) : (s = v);
        } else {
          let g = s.p;
          g === null && (s.p = g = new Map());
          let v = g.get(d);
          v === void 0 ? ((s = Hc()), g.set(d, s)) : (s = v);
        }
      }
      let u = s,
        l;
      if (
        (s.s === mI ? (l = s.v) : ((l = t.apply(null, arguments)), a++),
        (u.s = mI),
        n)
      ) {
        let f = i?.deref?.() ?? i;
        f != null && n(f, l) && ((l = f), a !== 0 && a--),
          (i =
            (typeof l == "object" && l !== null) || typeof l == "function"
              ? new VV(l)
              : l);
      }
      return (u.v = l), l;
    }
    return (
      (o.clearCache = () => {
        (r = Hc()), o.resetResultsCount();
      }),
      (o.resultsCount = () => a),
      (o.resetResultsCount = () => {
        a = 0;
      }),
      o
    );
  }
  function od(t, ...e) {
    let r = typeof t == "function" ? { memoize: t, memoizeOptions: e } : t,
      n = (...i) => {
        let a = 0,
          o = 0,
          s,
          c = {},
          u = i.pop();
        typeof u == "object" && ((c = u), (u = i.pop())),
          PV(
            u,
            `createSelector expects an output function after the inputs, but received: [${typeof u}]`
          );
        let l = { ...r, ...c },
          {
            memoize: f,
            memoizeOptions: p = [],
            argsMemoize: d = Gc,
            argsMemoizeOptions: g = [],
            devModeChecks: v = {},
          } = l,
          y = gI(p),
          m = gI(g),
          I = qV(i),
          b = f(function () {
            return a++, u.apply(null, arguments);
          }, ...y),
          w = !0,
          k = d(function () {
            o++;
            let A = BV(I, arguments);
            return (s = b.apply(null, A)), s;
          }, ...m);
        return Object.assign(k, {
          resultFunc: u,
          memoizedResultFunc: b,
          dependencies: I,
          dependencyRecomputations: () => o,
          resetDependencyRecomputations: () => {
            o = 0;
          },
          lastResult: () => s,
          recomputations: () => a,
          resetRecomputations: () => {
            a = 0;
          },
          memoize: f,
          argsMemoize: d,
        });
      };
    return Object.assign(n, { withTypes: () => n }), n;
  }
  var HV = od(Gc),
    GV = Object.assign(
      (t, e = HV) => {
        LV(
          t,
          `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`
        );
        let r = Object.keys(t),
          n = r.map((a) => t[a]);
        return e(n, (...a) => a.reduce((o, s, c) => ((o[r[c]] = s), o), {}));
      },
      { withTypes: () => GV }
    );
  function yI(t) {
    return ({ dispatch: r, getState: n }) =>
      (i) =>
      (a) =>
        typeof a == "function" ? a(r, n, t) : i(a);
  }
  var vI = yI(),
    _I = yI;
  var zV = (...t) => {
      let e = od(...t);
      return (...r) => {
        let n = e(...r),
          i = (a, ...o) => n(Er(a) ? ad(a) : a, ...o);
        return Object.assign(i, n), i;
      };
    },
    KZ = zV(Gc),
    $V =
      typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : function () {
            if (arguments.length !== 0)
              return typeof arguments[0] == "object"
                ? Wi
                : Wi.apply(null, arguments);
          },
    JZ =
      typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__
        : function () {
            return function (t) {
              return t;
            };
          },
    KV = (t) => t && typeof t.match == "function";
  function B(t, e) {
    function r(...n) {
      if (e) {
        let i = e(...n);
        if (!i) throw new Error(nt(0));
        return {
          type: t,
          payload: i.payload,
          ...("meta" in i && { meta: i.meta }),
          ...("error" in i && { error: i.error }),
        };
      }
      return { type: t, payload: n[0] };
    }
    return (
      (r.toString = () => `${t}`),
      (r.type = t),
      (r.match = (n) => nI(n) && n.type === t),
      r
    );
  }
  var EI = class so extends Array {
    constructor(...e) {
      super(...e), Object.setPrototypeOf(this, so.prototype);
    }
    static get [Symbol.species]() {
      return so;
    }
    concat(...e) {
      return super.concat.apply(this, e);
    }
    prepend(...e) {
      return e.length === 1 && Array.isArray(e[0])
        ? new so(...e[0].concat(this))
        : new so(...e.concat(this));
    }
  };
  function bI(t) {
    return er(t) ? Wc(t, () => {}) : t;
  }
  function SI(t, e, r) {
    if (t.has(e)) {
      let i = t.get(e);
      return r.update && ((i = r.update(i, e, t)), t.set(e, i)), i;
    }
    if (!r.insert) throw new Error(nt(10));
    let n = r.insert(e, t);
    return t.set(e, n), n;
  }
  function QV(t) {
    return typeof t == "boolean";
  }
  var YV = () =>
      function (e) {
        let {
            thunk: r = !0,
            immutableCheck: n = !0,
            serializableCheck: i = !0,
            actionCreatorCheck: a = !0,
          } = e ?? {},
          o = new EI();
        return r && (QV(r) ? o.push(vI) : o.push(_I(r.extraArgument))), o;
      },
    JV = "RTK_autoBatch";
  var II = (t) => (e) => {
      setTimeout(e, t);
    },
    XV =
      typeof window < "u" && window.requestAnimationFrame
        ? window.requestAnimationFrame
        : II(10),
    ZV =
      (t = { type: "raf" }) =>
      (e) =>
      (...r) => {
        let n = e(...r),
          i = !0,
          a = !1,
          o = !1,
          s = new Set(),
          c =
            t.type === "tick"
              ? queueMicrotask
              : t.type === "raf"
              ? XV
              : t.type === "callback"
              ? t.queueNotification
              : II(t.timeout),
          u = () => {
            (o = !1), a && ((a = !1), s.forEach((l) => l()));
          };
        return Object.assign({}, n, {
          subscribe(l) {
            let f = () => i && l(),
              p = n.subscribe(f);
            return (
              s.add(l),
              () => {
                p(), s.delete(l);
              }
            );
          },
          dispatch(l) {
            try {
              return (
                (i = !l?.meta?.[JV]),
                (a = !i),
                a && (o || ((o = !0), c(u))),
                n.dispatch(l)
              );
            } finally {
              i = !0;
            }
          },
        });
      },
    eW = (t) =>
      function (r) {
        let { autoBatch: n = !0 } = r ?? {},
          i = new EI(t);
        return n && i.push(ZV(typeof n == "object" ? n : void 0)), i;
      },
    hn = !0;
  function xI(t) {
    let e = YV(),
      {
        reducer: r = void 0,
        middleware: n,
        devTools: i = !0,
        preloadedState: a = void 0,
        enhancers: o = void 0,
      } = t || {},
      s;
    if (typeof r == "function") s = r;
    else if (Fc(r)) s = Pc(r);
    else throw new Error(nt(1));
    if (!hn && n && typeof n != "function") throw new Error(nt(2));
    let c;
    if (typeof n == "function") {
      if (((c = n(e)), !hn && !Array.isArray(c))) throw new Error(nt(3));
    } else c = e();
    if (!hn && c.some((g) => typeof g != "function")) throw new Error(nt(4));
    let u = Wi;
    i && (u = $V({ trace: !hn, ...(typeof i == "object" && i) }));
    let l = rI(...c),
      f = eW(l);
    if (!hn && o && typeof o != "function") throw new Error(nt(5));
    let p = typeof o == "function" ? o(f) : f();
    if (!hn && !Array.isArray(p)) throw new Error(nt(6));
    if (!hn && p.some((g) => typeof g != "function")) throw new Error(nt(7));
    !hn &&
      c.length &&
      !p.includes(l) &&
      console.error(
        "middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`"
      );
    let d = u(...p);
    return Kf(s, a, d);
  }
  function wI(t) {
    let e = {},
      r = [],
      n,
      i = {
        addCase(a, o) {
          let s = typeof a == "string" ? a : a.type;
          if (!s) throw new Error(nt(28));
          if (s in e) throw new Error(nt(29));
          return (e[s] = o), i;
        },
        addMatcher(a, o) {
          return r.push({ matcher: a, reducer: o }), i;
        },
        addDefaultCase(a) {
          return (n = a), i;
        },
      };
    return t(i), [e, r, n];
  }
  function tW(t) {
    return typeof t == "function";
  }
  function tr(t, e) {
    let [r, n, i] = wI(e),
      a;
    if (tW(t)) a = () => bI(t());
    else {
      let s = bI(t);
      a = () => s;
    }
    function o(s = a(), c) {
      let u = [
        r[c.type],
        ...n.filter(({ matcher: l }) => l(c)).map(({ reducer: l }) => l),
      ];
      return (
        u.filter((l) => !!l).length === 0 && (u = [i]),
        u.reduce((l, f) => {
          if (f)
            if (Er(l)) {
              let d = f(l, c);
              return d === void 0 ? l : d;
            } else {
              if (er(l)) return Wc(l, (p) => f(p, c));
              {
                let p = f(l, c);
                if (p === void 0) {
                  if (l === null) return l;
                  throw new Error(nt(9));
                }
                return p;
              }
            }
          return l;
        }, s)
      );
    }
    return (o.getInitialState = a), o;
  }
  var rW = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
    nW = (t = 21) => {
      let e = "",
        r = t;
      for (; r--; ) e += rW[(Math.random() * 64) | 0];
      return e;
    },
    iW = (t, e) => (KV(t) ? t.match(e) : t(e));
  function aW(...t) {
    return (e) => t.some((r) => iW(r, e));
  }
  var oW = ["name", "message", "stack", "code"],
    sd = class {
      constructor(t, e) {
        (this.payload = t), (this.meta = e);
      }
      _type;
    },
    TI = class {
      constructor(t, e) {
        (this.payload = t), (this.meta = e);
      }
      _type;
    },
    sW = (t) => {
      if (typeof t == "object" && t !== null) {
        let e = {};
        for (let r of oW) typeof t[r] == "string" && (e[r] = t[r]);
        return e;
      }
      return { message: String(t) };
    },
    cW = (() => {
      function t(e, r, n) {
        let i = B(e + "/fulfilled", (c, u, l, f) => ({
            payload: c,
            meta: {
              ...(f || {}),
              arg: l,
              requestId: u,
              requestStatus: "fulfilled",
            },
          })),
          a = B(e + "/pending", (c, u, l) => ({
            payload: void 0,
            meta: {
              ...(l || {}),
              arg: u,
              requestId: c,
              requestStatus: "pending",
            },
          })),
          o = B(e + "/rejected", (c, u, l, f, p) => ({
            payload: f,
            error: ((n && n.serializeError) || sW)(c || "Rejected"),
            meta: {
              ...(p || {}),
              arg: l,
              requestId: u,
              rejectedWithValue: !!f,
              requestStatus: "rejected",
              aborted: c?.name === "AbortError",
              condition: c?.name === "ConditionError",
            },
          }));
        function s(c) {
          return (u, l, f) => {
            let p = n?.idGenerator ? n.idGenerator(c) : nW(),
              d = new AbortController(),
              g;
            function v(m) {
              (g = m), d.abort();
            }
            let y = (async function () {
              let m;
              try {
                let b = n?.condition?.(c, { getState: l, extra: f });
                if ((lW(b) && (b = await b), b === !1 || d.signal.aborted))
                  throw {
                    name: "ConditionError",
                    message:
                      "Aborted due to condition callback returning false.",
                  };
                let w = new Promise((k, _) =>
                  d.signal.addEventListener("abort", () =>
                    _({ name: "AbortError", message: g || "Aborted" })
                  )
                );
                u(
                  a(
                    p,
                    c,
                    n?.getPendingMeta?.(
                      { requestId: p, arg: c },
                      { getState: l, extra: f }
                    )
                  )
                ),
                  (m = await Promise.race([
                    w,
                    Promise.resolve(
                      r(c, {
                        dispatch: u,
                        getState: l,
                        extra: f,
                        requestId: p,
                        signal: d.signal,
                        abort: v,
                        rejectWithValue: (k, _) => new sd(k, _),
                        fulfillWithValue: (k, _) => new TI(k, _),
                      })
                    ).then((k) => {
                      if (k instanceof sd) throw k;
                      return k instanceof TI
                        ? i(k.payload, p, c, k.meta)
                        : i(k, p, c);
                    }),
                  ]));
              } catch (b) {
                m =
                  b instanceof sd
                    ? o(null, p, c, b.payload, b.meta)
                    : o(b, p, c);
              }
              return (
                (n &&
                  !n.dispatchConditionRejection &&
                  o.match(m) &&
                  m.meta.condition) ||
                  u(m),
                m
              );
            })();
            return Object.assign(y, {
              abort: v,
              requestId: p,
              arg: c,
              unwrap() {
                return y.then(uW);
              },
            });
          };
        }
        return Object.assign(s, {
          pending: a,
          rejected: o,
          fulfilled: i,
          settled: aW(o, i),
          typePrefix: e,
        });
      }
      return (t.withTypes = () => t), t;
    })();
  function uW(t) {
    if (t.meta && t.meta.rejectedWithValue) throw t.payload;
    if (t.error) throw t.error;
    return t.payload;
  }
  function lW(t) {
    return t !== null && typeof t == "object" && typeof t.then == "function";
  }
  var AI = Symbol.for("rtk-slice-createasyncthunk"),
    ree = { [AI]: cW };
  function pW(t, e) {
    return `${t}/${e}`;
  }
  function fW({ creators: t } = {}) {
    let e = t?.asyncThunk?.[AI];
    return function (n) {
      let { name: i, reducerPath: a = i } = n;
      if (!i) throw new Error(nt(11));
      typeof process < "u";
      let o =
          (typeof n.reducers == "function" ? n.reducers(hW()) : n.reducers) ||
          {},
        s = Object.keys(o),
        c = {
          sliceCaseReducersByName: {},
          sliceCaseReducersByType: {},
          actionCreators: {},
          sliceMatchers: [],
        },
        u = {
          addCase(v, y) {
            let m = typeof v == "string" ? v : v.type;
            if (!m) throw new Error(nt(12));
            if (m in c.sliceCaseReducersByType) throw new Error(nt(13));
            return (c.sliceCaseReducersByType[m] = y), u;
          },
          addMatcher(v, y) {
            return c.sliceMatchers.push({ matcher: v, reducer: y }), u;
          },
          exposeAction(v, y) {
            return (c.actionCreators[v] = y), u;
          },
          exposeCaseReducer(v, y) {
            return (c.sliceCaseReducersByName[v] = y), u;
          },
        };
      s.forEach((v) => {
        let y = o[v],
          m = {
            reducerName: v,
            type: pW(i, v),
            createNotation: typeof n.reducers == "function",
          };
        mW(y) ? vW(m, y, u, e) : gW(m, y, u);
      });
      function l() {
        let [v = {}, y = [], m = void 0] =
            typeof n.extraReducers == "function"
              ? wI(n.extraReducers)
              : [n.extraReducers],
          I = { ...v, ...c.sliceCaseReducersByType };
        return tr(n.initialState, (b) => {
          for (let w in I) b.addCase(w, I[w]);
          for (let w of c.sliceMatchers) b.addMatcher(w.matcher, w.reducer);
          for (let w of y) b.addMatcher(w.matcher, w.reducer);
          m && b.addDefaultCase(m);
        });
      }
      let f = (v) => v,
        p = new WeakMap(),
        d,
        g = {
          name: i,
          reducerPath: a,
          reducer(v, y) {
            return d || (d = l()), d(v, y);
          },
          actions: c.actionCreators,
          caseReducers: c.sliceCaseReducersByName,
          getInitialState() {
            return d || (d = l()), d.getInitialState();
          },
          getSelectors(v = f) {
            let y = SI(p, this, { insert: () => new WeakMap() });
            return SI(y, v, {
              insert: () => {
                let m = {};
                for (let [I, b] of Object.entries(n.selectors ?? {}))
                  m[I] = dW(this, b, v, this !== g);
                return m;
              },
            });
          },
          selectSlice(v) {
            let y = v[this.reducerPath];
            return (
              typeof y > "u" && this !== g && (y = this.getInitialState()), y
            );
          },
          get selectors() {
            return this.getSelectors(this.selectSlice);
          },
          injectInto(v, { reducerPath: y, ...m } = {}) {
            let I = y ?? this.reducerPath;
            return (
              v.inject({ reducerPath: I, reducer: this.reducer }, m),
              { ...this, reducerPath: I }
            );
          },
        };
      return g;
    };
  }
  function dW(t, e, r, n) {
    function i(a, ...o) {
      let s = r.call(t, a);
      return typeof s > "u" && n && (s = t.getInitialState()), e(s, ...o);
    }
    return (i.unwrapped = e), i;
  }
  var nee = fW();
  function hW() {
    function t(e, r) {
      return { _reducerDefinitionType: "asyncThunk", payloadCreator: e, ...r };
    }
    return (
      (t.withTypes = () => t),
      {
        reducer(e) {
          return Object.assign(
            {
              [e.name](...r) {
                return e(...r);
              },
            }[e.name],
            { _reducerDefinitionType: "reducer" }
          );
        },
        preparedReducer(e, r) {
          return {
            _reducerDefinitionType: "reducerWithPrepare",
            prepare: e,
            reducer: r,
          };
        },
        asyncThunk: t,
      }
    );
  }
  function gW({ type: t, reducerName: e, createNotation: r }, n, i) {
    let a, o;
    if ("reducer" in n) {
      if (r && !yW(n)) throw new Error(nt(17));
      (a = n.reducer), (o = n.prepare);
    } else a = n;
    i.addCase(t, a)
      .exposeCaseReducer(e, a)
      .exposeAction(e, o ? B(t, o) : B(t));
  }
  function mW(t) {
    return t._reducerDefinitionType === "asyncThunk";
  }
  function yW(t) {
    return t._reducerDefinitionType === "reducerWithPrepare";
  }
  function vW({ type: t, reducerName: e }, r, n, i) {
    if (!i) throw new Error(nt(18));
    let {
        payloadCreator: a,
        fulfilled: o,
        pending: s,
        rejected: c,
        settled: u,
        options: l,
      } = r,
      f = i(t, a, l);
    n.exposeAction(e, f),
      o && n.addCase(f.fulfilled, o),
      s && n.addCase(f.pending, s),
      c && n.addCase(f.rejected, c),
      u && n.addMatcher(f.settled, u),
      n.exposeCaseReducer(e, {
        fulfilled: o || zc,
        pending: s || zc,
        rejected: c || zc,
        settled: u || zc,
      });
  }
  function zc() {}
  var OI = "listener",
    kI = "completed",
    CI = "cancelled",
    iee = `task-${CI}`,
    aee = `task-${kI}`,
    oee = `${OI}-${CI}`,
    see = `${OI}-${kI}`;
  var { assign: cee } = Object;
  var cd = "listenerMiddleware";
  var uee = B(`${cd}/add`),
    lee = B(`${cd}/removeAll`),
    pee = B(`${cd}/remove`);
  var fee = Symbol.for("rtk-state-proxy-original");
  function nt(t) {
    return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
  }
  var $x = Fe(NI());
  var rr = function (e) {
      return "@@redux-saga/" + e;
    },
    co = rr("CANCEL_PROMISE"),
    ud = rr("CHANNEL_END"),
    uo = rr("IO"),
    ld = rr("MATCH"),
    Kc = rr("MULTICAST"),
    lo = rr("SAGA_ACTION"),
    Qc = rr("SELF_CANCELLATION"),
    pd = rr("TASK"),
    gn = rr("TASK_CANCEL"),
    Yc = rr("TERMINATE"),
    fd = rr("LOCATION");
  function $n() {
    return (
      ($n = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }),
      $n.apply(this, arguments)
    );
  }
  function dd(t, e) {
    if (t == null) return {};
    var r = {},
      n = Object.keys(t),
      i,
      a;
    for (a = 0; a < n.length; a++)
      (i = n[a]), !(e.indexOf(i) >= 0) && (r[i] = t[i]);
    return r;
  }
  var Jc = function (e) {
      return e == null;
    },
    Kn = function (e) {
      return e != null;
    },
    it = function (e) {
      return typeof e == "function";
    };
  var po = function (e) {
      return typeof e == "string";
    },
    Ir = Array.isArray;
  var fo = function (e) {
      return e && it(e.then);
    },
    Xc = function (e) {
      return e && it(e.next) && it(e.throw);
    };
  var hd = function t(e) {
      return e && (po(e) || gd(e) || it(e) || (Ir(e) && e.every(t)));
    },
    Gi = function (e) {
      return e && it(e.take) && it(e.close);
    },
    Zc = function (e) {
      return it(e) && e.hasOwnProperty("toString");
    },
    gd = function (e) {
      return (
        !!e &&
        typeof Symbol == "function" &&
        e.constructor === Symbol &&
        e !== Symbol.prototype
      );
    },
    DI = function (e) {
      return Gi(e) && e[Kc];
    };
  var _W = 2147483647;
  function bW(t, e) {
    e === void 0 && (e = !0);
    var r,
      n = new Promise(function (i) {
        r = setTimeout(i, Math.min(_W, t), e);
      });
    return (
      (n[co] = function () {
        clearTimeout(r);
      }),
      n
    );
  }
  var RI = bW;
  var SW = function (e) {
      return function () {
        return e;
      };
    },
    md = SW(!0),
    Je = function () {},
    yd = function (e) {
      return e;
    };
  var eu = function (e, r) {
      $n(e, r),
        Object.getOwnPropertySymbols &&
          Object.getOwnPropertySymbols(r).forEach(function (n) {
            e[n] = r[n];
          });
    },
    FI = function (e, r) {
      var n;
      return (n = []).concat.apply(n, r.map(e));
    };
  function go(t, e) {
    var r = t.indexOf(e);
    r >= 0 && t.splice(r, 1);
  }
  function PI(t) {
    var e = !1;
    return function () {
      e || ((e = !0), t());
    };
  }
  var TW = function (e) {
      throw e;
    },
    EW = function (e) {
      return { value: e, done: !0 };
    };
  function mo(t, e, r) {
    e === void 0 && (e = TW), r === void 0 && (r = "iterator");
    var n = {
      meta: { name: r },
      next: t,
      throw: e,
      return: EW,
      isSagaIterator: !0,
    };
    return (
      typeof Symbol < "u" &&
        (n[Symbol.iterator] = function () {
          return n;
        }),
      n
    );
  }
  function LI(t, e) {
    var r = e.sagaStack;
    console.error(t), console.error(r);
  }
  var tu = function (e) {
    return new Error(
      `
  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug
  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.
  Error: ` +
        e +
        `
`
    );
  };
  var vd = function (e) {
      return Array.apply(null, new Array(e));
    },
    UI = function (e) {
      return function (r) {
        return e(Object.defineProperty(r, lo, { value: !0 }));
      };
    },
    _d = function (e) {
      return e === Yc;
    },
    bd = function (e) {
      return e === gn;
    },
    Sd = function (e) {
      return _d(e) || bd(e);
    };
  function Td(t, e) {
    var r = Object.keys(t),
      n = r.length,
      i = 0,
      a,
      o = Ir(t) ? vd(n) : {},
      s = {};
    function c() {
      i === n && ((a = !0), e(o));
    }
    return (
      r.forEach(function (u) {
        var l = function (p, d) {
          a || (d || Sd(p) ? (e.cancel(), e(p, d)) : ((o[u] = p), i++, c()));
        };
        (l.cancel = Je), (s[u] = l);
      }),
      (e.cancel = function () {
        a ||
          ((a = !0),
          r.forEach(function (u) {
            return s[u].cancel();
          }));
      }),
      s
    );
  }
  function ru(t) {
    return { name: t.name || "anonymous", location: Ed(t) };
  }
  function Ed(t) {
    return t[fd];
  }
  function qI() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    return e.length === 0
      ? function (n) {
          return n;
        }
      : e.length === 1
      ? e[0]
      : e.reduce(function (n, i) {
          return function () {
            return n(i.apply(void 0, arguments));
          };
        });
  }
  var IW = "Channel's Buffer overflow!",
    BI = 1,
    xW = 2,
    jI = 3,
    VI = 4,
    wW = { isEmpty: md, put: Je, take: Je };
  function nu(t, e) {
    t === void 0 && (t = 10);
    var r = new Array(t),
      n = 0,
      i = 0,
      a = 0,
      o = function (l) {
        (r[i] = l), (i = (i + 1) % t), n++;
      },
      s = function () {
        if (n != 0) {
          var l = r[a];
          return (r[a] = null), n--, (a = (a + 1) % t), l;
        }
      },
      c = function () {
        for (var l = []; n; ) l.push(s());
        return l;
      };
    return {
      isEmpty: function () {
        return n == 0;
      },
      put: function (l) {
        if (n < t) o(l);
        else {
          var f;
          switch (e) {
            case BI:
              throw new Error(IW);
            case jI:
              (r[i] = l), (i = (i + 1) % t), (a = i);
              break;
            case VI:
              (f = 2 * t),
                (r = c()),
                (n = r.length),
                (i = r.length),
                (a = 0),
                (r.length = f),
                (t = f),
                o(l);
              break;
            default:
          }
        }
      },
      take: s,
      flush: c,
    };
  }
  var WI = function () {
      return wW;
    },
    AW = function (e) {
      return nu(e, BI);
    },
    OW = function (e) {
      return nu(e, xW);
    },
    Id = function (e) {
      return nu(e, jI);
    },
    xd = function (e) {
      return nu(e, VI);
    },
    wd = Object.freeze({
      __proto__: null,
      none: WI,
      fixed: AW,
      dropping: OW,
      sliding: Id,
      expanding: xd,
    }),
    ho = "TAKE",
    Ad = "PUT",
    Od = "ALL",
    HI = "RACE",
    kd = "CALL",
    GI = "CPS",
    Cd = "FORK",
    zI = "JOIN",
    Md = "CANCEL",
    Nd = "SELECT",
    Dd = "ACTION_CHANNEL",
    $I = "CANCELLED",
    KI = "FLUSH",
    QI = "GET_CONTEXT",
    YI = "SET_CONTEXT";
  var xr = function (e, r) {
    var n;
    return (
      (n = {}),
      (n[uo] = !0),
      (n.combinator = !1),
      (n.type = e),
      (n.payload = r),
      n
    );
  };
  function Qn(t, e) {
    if ((t === void 0 && (t = "*"), hd(t)))
      return (
        Kn(e) &&
          console.warn(
            "take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"
          ),
        xr(ho, { pattern: t })
      );
    if (DI(t) && Kn(e) && hd(e)) return xr(ho, { channel: t, pattern: e });
    if (Gi(t))
      return (
        Kn(e) &&
          console.warn(
            "take(channel) takes one argument but two were provided. Second argument is ignored."
          ),
        xr(ho, { channel: t })
      );
  }
  function Rd(t, e) {
    return Jc(e) && ((e = t), (t = void 0)), xr(Ad, { channel: t, action: e });
  }
  function Fd(t) {
    var e = xr(Od, t);
    return (e.combinator = !0), e;
  }
  function JI(t, e) {
    var r = null,
      n;
    return (
      it(t)
        ? (n = t)
        : (Ir(t) ? ((r = t[0]), (n = t[1])) : ((r = t.context), (n = t.fn)),
          r && po(n) && it(r[n]) && (n = r[n])),
      { context: r, fn: n, args: e }
    );
  }
  function yo(t) {
    for (
      var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
      n < e;
      n++
    )
      r[n - 1] = arguments[n];
    if (0) var i;
    return xr(kd, JI(t, r));
  }
  function qr(t) {
    for (
      var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
      n < e;
      n++
    )
      r[n - 1] = arguments[n];
    return xr(Cd, JI(t, r));
  }
  function iu(t) {
    return t === void 0 && (t = Qc), xr(Md, t);
  }
  function Pd(t) {
    t === void 0 && (t = yd);
    for (
      var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
      n < e;
      n++
    )
      r[n - 1] = arguments[n];
    return xr(Nd, { selector: t, args: r });
  }
  function vo(t, e) {
    return xr(Dd, { pattern: t, buffer: e });
  }
  var _o = yo.bind(null, RI);
  function kW() {
    var t = {};
    return (
      (t.promise = new Promise(function (e, r) {
        (t.resolve = e), (t.reject = r);
      })),
      t
    );
  }
  var XI = kW;
  var tx = [],
    ou = 0;
  function CW(t) {
    try {
      Ud(), t();
    } finally {
      ix();
    }
  }
  function rx(t) {
    tx.push(t), ou || (Ud(), ax());
  }
  function nx(t) {
    try {
      return Ud(), t();
    } finally {
      ax();
    }
  }
  function Ud() {
    ou++;
  }
  function ix() {
    ou--;
  }
  function ax() {
    ix();
    for (var t; !ou && (t = tx.shift()) !== void 0; ) CW(t);
  }
  var MW = function (e) {
      return function (r) {
        return e.some(function (n) {
          return qd(n)(r);
        });
      };
    },
    NW = function (e) {
      return function (r) {
        return e(r);
      };
    },
    ZI = function (e) {
      return function (r) {
        return r.type === String(e);
      };
    },
    DW = function (e) {
      return function (r) {
        return r.type === e;
      };
    },
    ox = function () {
      return md;
    };
  function qd(t) {
    var e =
      t === "*"
        ? ox
        : po(t)
        ? ZI
        : Ir(t)
        ? MW
        : Zc(t)
        ? ZI
        : it(t)
        ? NW
        : gd(t)
        ? DW
        : null;
    if (e === null) throw new Error("invalid pattern: " + t);
    return e(t);
  }
  var bo = { type: ud },
    Bd = function (e) {
      return e && e.type === ud;
    },
    sx = "Cannot have a closed channel with pending takers";
  function RW(t) {
    t === void 0 && (t = xd());
    var e = !1,
      r = [];
    function n() {
      if (e && r.length) throw tu(sx);
      if (r.length && !t.isEmpty())
        throw tu("Cannot have pending takers with non empty buffer");
    }
    function i(c) {
      if (!e) {
        if (r.length === 0) return t.put(c);
        var u = r.shift();
        u(c);
      }
    }
    function a(c) {
      e && t.isEmpty()
        ? c(bo)
        : t.isEmpty()
        ? (r.push(c),
          (c.cancel = function () {
            go(r, c);
          }))
        : c(t.take());
    }
    function o(c) {
      if (e && t.isEmpty()) {
        c(bo);
        return;
      }
      c(t.flush());
    }
    function s() {
      if (!e) {
        e = !0;
        var c = r;
        r = [];
        for (var u = 0, l = c.length; u < l; u++) {
          var f = c[u];
          f(bo);
        }
      }
    }
    return { take: a, put: i, flush: o, close: s };
  }
  function FW() {
    var t,
      e = !1,
      r = [],
      n = r;
    function i() {
      if (e && n.length) throw tu(sx);
    }
    var a = function () {
        n === r && (n = r.slice());
      },
      o = function () {
        e = !0;
        var c = (r = n);
        (n = []),
          c.forEach(function (u) {
            u(bo);
          });
      };
    return (
      (t = {}),
      (t[Kc] = !0),
      (t.put = function (c) {
        if (!e) {
          if (Bd(c)) {
            o();
            return;
          }
          for (var u = (r = n), l = 0, f = u.length; l < f; l++) {
            var p = u[l];
            p[ld](c) && (p.cancel(), p(c));
          }
        }
      }),
      (t.take = function (c, u) {
        if ((u === void 0 && (u = ox), e)) {
          c(bo);
          return;
        }
        (c[ld] = u),
          a(),
          n.push(c),
          (c.cancel = PI(function () {
            a(), go(n, c);
          }));
      }),
      (t.close = o),
      t
    );
  }
  function cx() {
    var t = FW(),
      e = t.put;
    return (
      (t.put = function (r) {
        if (r[lo]) {
          e(r);
          return;
        }
        rx(function () {
          e(r);
        });
      }),
      t
    );
  }
  var Yn = 0,
    Br = 1,
    au = 2,
    ux = 3;
  function jd(t, e) {
    var r = t[co];
    it(r) && (e.cancel = r),
      t.then(e, function (n) {
        e(n, !0);
      });
  }
  var To = 0,
    lx = function () {
      return ++To;
    },
    at;
  function PW(t, e) {
    return t.isSagaIterator ? { name: t.meta.name } : ru(e);
  }
  function LW(t) {
    var e = t.context,
      r = t.fn,
      n = t.args;
    try {
      var i = r.apply(e, n);
      if (Xc(i)) return i;
      var a = !1,
        o = function (c) {
          return a
            ? { value: c, done: !0 }
            : ((a = !0), { value: i, done: !fo(i) });
        };
      return mo(o);
    } catch (s) {
      return mo(function () {
        throw s;
      });
    }
  }
  function UW(t, e, r) {
    var n = e.channel,
      i = e.action,
      a = e.resolve;
    rx(function () {
      var o;
      try {
        o = (n ? n.put : t.dispatch)(i);
      } catch (s) {
        r(s, !0);
        return;
      }
      a && fo(o) ? jd(o, r) : r(o);
    });
  }
  function qW(t, e, r) {
    var n = e.channel,
      i = n === void 0 ? t.channel : n,
      a = e.pattern,
      o = e.maybe,
      s = function (u) {
        if (u instanceof Error) {
          r(u, !0);
          return;
        }
        if (Bd(u) && !o) {
          r(Yc);
          return;
        }
        r(u);
      };
    try {
      i.take(s, Kn(a) ? qd(a) : null);
    } catch (c) {
      r(c, !0);
      return;
    }
    r.cancel = s.cancel;
  }
  function BW(t, e, r, n) {
    var i = e.context,
      a = e.fn,
      o = e.args,
      s = n.task;
    try {
      var c = a.apply(i, o);
      if (fo(c)) {
        jd(c, r);
        return;
      }
      if (Xc(c)) {
        su(t, c, s.context, To, ru(a), !1, r);
        return;
      }
      r(c);
    } catch (u) {
      r(u, !0);
    }
  }
  function jW(t, e, r) {
    var n = e.context,
      i = e.fn,
      a = e.args;
    try {
      var o = function (c, u) {
        Jc(c) ? r(u) : r(c, !0);
      };
      i.apply(n, a.concat(o)), o.cancel && (r.cancel = o.cancel);
    } catch (s) {
      r(s, !0);
    }
  }
  function VW(t, e, r, n) {
    var i = e.context,
      a = e.fn,
      o = e.args,
      s = e.detached,
      c = n.task,
      u = LW({ context: i, fn: a, args: o }),
      l = PW(u, a);
    nx(function () {
      var f = su(t, u, c.context, To, l, s, void 0);
      s
        ? r(f)
        : f.isRunning()
        ? (c.queue.addTask(f), r(f))
        : f.isAborted()
        ? c.queue.abort(f.error())
        : r(f);
    });
  }
  function WW(t, e, r, n) {
    var i = n.task,
      a = function (c, u) {
        if (c.isRunning()) {
          var l = { task: i, cb: u };
          (u.cancel = function () {
            c.isRunning() && go(c.joiners, l);
          }),
            c.joiners.push(l);
        } else c.isAborted() ? u(c.error(), !0) : u(c.result());
      };
    if (Ir(e)) {
      if (e.length === 0) {
        r([]);
        return;
      }
      var o = Td(e, r);
      e.forEach(function (s, c) {
        a(s, o[c]);
      });
    } else a(e, r);
  }
  function Ld(t) {
    t.isRunning() && t.cancel();
  }
  function HW(t, e, r, n) {
    var i = n.task;
    e === Qc ? Ld(i) : Ir(e) ? e.forEach(Ld) : Ld(e), r();
  }
  function GW(t, e, r, n) {
    var i = n.digestEffect,
      a = To,
      o = Object.keys(e);
    if (o.length === 0) {
      r(Ir(e) ? [] : {});
      return;
    }
    var s = Td(e, r);
    o.forEach(function (c) {
      i(e[c], a, s[c], c);
    });
  }
  function zW(t, e, r, n) {
    var i = n.digestEffect,
      a = To,
      o = Object.keys(e),
      s = Ir(e) ? vd(o.length) : {},
      c = {},
      u = !1;
    o.forEach(function (l) {
      var f = function (d, g) {
        u ||
          (g || Sd(d)
            ? (r.cancel(), r(d, g))
            : (r.cancel(), (u = !0), (s[l] = d), r(s)));
      };
      (f.cancel = Je), (c[l] = f);
    }),
      (r.cancel = function () {
        u ||
          ((u = !0),
          o.forEach(function (l) {
            return c[l].cancel();
          }));
      }),
      o.forEach(function (l) {
        u || i(e[l], a, c[l], l);
      });
  }
  function $W(t, e, r) {
    var n = e.selector,
      i = e.args;
    try {
      var a = n.apply(void 0, [t.getState()].concat(i));
      r(a);
    } catch (o) {
      r(o, !0);
    }
  }
  function KW(t, e, r) {
    var n = e.pattern,
      i = e.buffer,
      a = RW(i),
      o = qd(n),
      s = function u(l) {
        Bd(l) || t.channel.take(u, o), a.put(l);
      },
      c = a.close;
    (a.close = function () {
      s.cancel(), c();
    }),
      t.channel.take(s, o),
      r(a);
  }
  function QW(t, e, r, n) {
    var i = n.task;
    r(i.isCancelled());
  }
  function YW(t, e, r) {
    e.flush(r);
  }
  function JW(t, e, r, n) {
    var i = n.task;
    r(i.context[e]);
  }
  function XW(t, e, r, n) {
    var i = n.task;
    eu(i.context, e), r();
  }
  var ZW =
    ((at = {}),
    (at[ho] = qW),
    (at[Ad] = UW),
    (at[Od] = GW),
    (at[HI] = zW),
    (at[kd] = BW),
    (at[GI] = jW),
    (at[Cd] = VW),
    (at[zI] = WW),
    (at[Md] = HW),
    (at[Nd] = $W),
    (at[Dd] = KW),
    (at[$I] = QW),
    (at[KI] = YW),
    (at[QI] = JW),
    (at[YI] = XW),
    at);
  function eH(t, e, r) {
    var n = [],
      i,
      a = !1;
    c(t);
    var o = function () {
      return n;
    };
    function s(l) {
      e(), u(), r(l, !0);
    }
    function c(l) {
      n.push(l),
        (l.cont = function (f, p) {
          a ||
            (go(n, l),
            (l.cont = Je),
            p ? s(f) : (l === t && (i = f), n.length || ((a = !0), r(i))));
        });
    }
    function u() {
      a ||
        ((a = !0),
        n.forEach(function (l) {
          (l.cont = Je), l.cancel();
        }),
        (n = []));
    }
    return { addTask: c, cancelAll: u, abort: s, getTasks: o };
  }
  function px(t, e) {
    return t + "?" + e;
  }
  function tH(t) {
    var e = Ed(t);
    if (e) {
      var r = e.code,
        n = e.fileName,
        i = e.lineNumber,
        a = r + "  " + px(n, i);
      return a;
    }
    return "";
  }
  function ex(t) {
    var e = t.name,
      r = t.location;
    return r ? e + "  " + px(r.fileName, r.lineNumber) : e;
  }
  function rH(t) {
    var e = FI(function (r) {
      return r.cancelledTasks;
    }, t);
    return e.length
      ? ["Tasks cancelled due to error:"].concat(e).join(`
`)
      : "";
  }
  var Vd = null,
    So = [],
    nH = function (e) {
      (e.crashedEffect = Vd), So.push(e);
    },
    fx = function () {
      (Vd = null), (So.length = 0);
    },
    iH = function (e) {
      Vd = e;
    },
    aH = function () {
      var e = So[0],
        r = So.slice(1),
        n = e.crashedEffect ? tH(e.crashedEffect) : null,
        i =
          "The above error occurred in task " +
          ex(e.meta) +
          (n
            ? ` 
 when executing effect ` + n
            : "");
      return [i].concat(
        r.map(function (a) {
          return "    created by " + ex(a.meta);
        }),
        [rH(So)]
      ).join(`
`);
    };
  function oH(t, e, r, n, i, a, o) {
    var s;
    o === void 0 && (o = Je);
    var c = Yn,
      u,
      l,
      f = null,
      p = [],
      d = Object.create(r),
      g = eH(
        e,
        function () {
          p.push.apply(
            p,
            g.getTasks().map(function (k) {
              return k.meta.name;
            })
          );
        },
        y
      );
    function v() {
      c === Yn && ((c = Br), g.cancelAll(), y(gn, !1));
    }
    function y(w, k) {
      if (!k)
        w === gn ? (c = Br) : c !== Br && (c = ux), (u = w), f && f.resolve(w);
      else {
        if (((c = au), nH({ meta: i, cancelledTasks: p }), b.isRoot)) {
          var _ = aH();
          fx(), t.onError(w, { sagaStack: _ });
        }
        (l = w), f && f.reject(w);
      }
      b.cont(w, k),
        b.joiners.forEach(function (A) {
          A.cb(w, k);
        }),
        (b.joiners = null);
    }
    function m(w) {
      eu(d, w);
    }
    function I() {
      return (
        f || ((f = XI()), c === au ? f.reject(l) : c !== Yn && f.resolve(u)),
        f.promise
      );
    }
    var b =
      ((s = {}),
      (s[pd] = !0),
      (s.id = n),
      (s.meta = i),
      (s.isRoot = a),
      (s.context = d),
      (s.joiners = []),
      (s.queue = g),
      (s.cancel = v),
      (s.cont = o),
      (s.end = y),
      (s.setContext = m),
      (s.toPromise = I),
      (s.isRunning = function () {
        return c === Yn;
      }),
      (s.isCancelled = function () {
        return c === Br || (c === Yn && e.status === Br);
      }),
      (s.isAborted = function () {
        return c === au;
      }),
      (s.result = function () {
        return u;
      }),
      (s.error = function () {
        return l;
      }),
      s);
    return b;
  }
  function su(t, e, r, n, i, a, o) {
    var s = t.finalizeRunEffect(d);
    p.cancel = Je;
    var c = { meta: i, cancel: f, status: Yn },
      u = oH(t, c, r, n, i, a, o),
      l = { task: u, digestEffect: g };
    function f() {
      c.status === Yn && ((c.status = Br), p(gn));
    }
    return o && (o.cancel = u.cancel), p(), u;
    function p(v, y) {
      try {
        var m;
        y
          ? ((m = e.throw(v)), fx())
          : bd(v)
          ? ((c.status = Br),
            p.cancel(),
            (m = it(e.return) ? e.return(gn) : { done: !0, value: gn }))
          : _d(v)
          ? (m = it(e.return) ? e.return() : { done: !0 })
          : (m = e.next(v)),
          m.done
            ? (c.status !== Br && (c.status = ux), c.cont(m.value))
            : g(m.value, n, p);
      } catch (I) {
        if (c.status === Br) throw I;
        (c.status = au), c.cont(I, !0);
      }
    }
    function d(v, y, m) {
      if (fo(v)) jd(v, m);
      else if (Xc(v)) su(t, v, u.context, y, i, !1, m);
      else if (v && v[uo]) {
        var I = ZW[v.type];
        I(t, v.payload, m, l);
      } else m(v);
    }
    function g(v, y, m, I) {
      I === void 0 && (I = "");
      var b = lx();
      t.sagaMonitor &&
        t.sagaMonitor.effectTriggered({
          effectId: b,
          parentEffectId: y,
          label: I,
          effect: v,
        });
      var w;
      function k(_, A) {
        w ||
          ((w = !0),
          (m.cancel = Je),
          t.sagaMonitor &&
            (A
              ? t.sagaMonitor.effectRejected(b, _)
              : t.sagaMonitor.effectResolved(b, _)),
          A && iH(v),
          m(_, A));
      }
      (k.cancel = Je),
        (m.cancel = function () {
          w ||
            ((w = !0),
            k.cancel(),
            (k.cancel = Je),
            t.sagaMonitor && t.sagaMonitor.effectCancelled(b));
        }),
        s(v, b, k);
    }
  }
  var sH = "runSaga(options, saga, ...args)",
    Kee = sH + ": saga argument must be a Generator function!";
  function cH(t, e) {
    for (
      var r = t.channel,
        n = r === void 0 ? cx() : r,
        i = t.dispatch,
        a = t.getState,
        o = t.context,
        s = o === void 0 ? {} : o,
        c = t.sagaMonitor,
        u = t.effectMiddlewares,
        l = t.onError,
        f = l === void 0 ? LI : l,
        p = arguments.length,
        d = new Array(p > 2 ? p - 2 : 0),
        g = 2;
      g < p;
      g++
    )
      d[g - 2] = arguments[g];
    var v = e.apply(void 0, d),
      y = lx();
    if (
      (c &&
        ((c.rootSagaStarted = c.rootSagaStarted || Je),
        (c.effectTriggered = c.effectTriggered || Je),
        (c.effectResolved = c.effectResolved || Je),
        (c.effectRejected = c.effectRejected || Je),
        (c.effectCancelled = c.effectCancelled || Je),
        (c.actionDispatched = c.actionDispatched || Je),
        c.rootSagaStarted({ effectId: y, saga: e, args: d })),
      0 && Kn(u))
    )
      var m;
    var I;
    if (u) {
      var b = qI.apply(void 0, u);
      I = function (_) {
        return function (A, C, F) {
          var W = function (X) {
            return _(X, C, F);
          };
          return b(W)(A);
        };
      };
    } else I = yd;
    var w = {
      channel: n,
      dispatch: UI(i),
      getState: a,
      sagaMonitor: c,
      onError: f,
      finalizeRunEffect: I,
    };
    return nx(function () {
      var k = su(w, v, s, y, ru(e), !0, void 0);
      return c && c.effectResolved(y, k), k;
    });
  }
  function uH(t) {
    var e = t === void 0 ? {} : t,
      r = e.context,
      n = r === void 0 ? {} : r,
      i = e.channel,
      a = i === void 0 ? cx() : i,
      o = e.sagaMonitor,
      s = dd(e, ["context", "channel", "sagaMonitor"]),
      c;
    function u(l) {
      var f = l.getState,
        p = l.dispatch;
      return (
        (c = cH.bind(
          null,
          $n({}, s, {
            context: n,
            channel: a,
            dispatch: p,
            getState: f,
            sagaMonitor: o,
          })
        )),
        function (d) {
          return function (g) {
            o && o.actionDispatched && o.actionDispatched(g);
            var v = d(g);
            return a.put(g), v;
          };
        }
      );
    }
    return (
      (u.run = function () {
        return c.apply(void 0, arguments);
      }),
      (u.setContext = function (l) {
        eu(n, l);
      }),
      u
    );
  }
  var dx = uH;
  var hx = dx;
  function fe() {
    return !0;
  }
  var bh = {};
  nM(bh, {
    global: () => xx,
    transcriptions: () => Ex,
    ui: () => Mx,
    unsaved: () => Bx,
    user: () => zx,
  });
  var _x = Fe(Oa());
  var gx = Object.freeze({
      English: {
        id: 1,
        translationId: 12,
        shortName: "en",
        optionName: "English",
        menuLabel: "More options",
        menuItemLabel: "Captions",
        detailsLabel: "Meeting details",
        showCaptionsLabel: "Turn on captions",
        hideCaptionsLabel: "Turn off captions",
        chatToggleLabel: "Chat with everyone",
        chatSendLabel: "Send a message to everyone",
        closeLanguageDialogButtonLabel: "Apply",
        captionsLanguageHeaderLabel: "LANGUAGE OF THE MEETING",
      },
      SpanishMexico: {
        id: 2,
        shortName: "es",
        optionName: "Espa\xF1ol",
        menuLabel: "M\xE1s opciones",
        menuItemLabel: "Subt\xEDtulos",
        detailsLabel: "Detalles de la reuni\xF3n",
        showCaptionsLabel: "Activar subt\xEDtulos",
        hideCaptionsLabel: "Desactivar subt\xEDtulos",
        closeLanguageDialogButtonLabel: "Aplicar",
        captionsLanguageHeaderLabel: "IDIOMA DE LA REUNI\xD3N",
      },
      SpanishSpain: {
        id: 3,
        translationId: 13,
        shortName: "es",
        optionName: "Espa\xF1ol",
        menuLabel: "M\xE1s opciones",
        menuItemLabel: "Subt\xEDtulos",
        detailsLabel: "Detalles de la reuni\xF3n",
        showCaptionsLabel: "Activar subt\xEDtulos",
        hideCaptionsLabel: "Desactivar subt\xEDtulos",
        closeLanguageDialogButtonLabel: "Aplicar",
        captionsLanguageHeaderLabel: "IDIOMA DE LA REUNI\xD3N",
      },
      PortugueseBrazil: {
        id: 4,
        translationId: 14,
        shortName: "pt",
        optionName: "Portugu\xEAs",
        menuLabel: "Mais op\xE7\xF5es",
        menuItemLabel: "Legendas",
        detailsLabel: "Detalhes da reuni\xE3o",
        showCaptionsLabel: "Ativar legendas",
        hideCaptionsLabel: "Desativar legendas",
        closeLanguageDialogButtonLabel: "Aplicar",
        captionsLanguageHeaderLabel: "IDIOMA DA REUNI\xC3O",
      },
      PortuguesePortugal: {
        id: 17,
        shortName: "pt",
        optionName: "Portugu\xEAs",
        menuLabel: "Mais op\xE7\xF5es",
        menuItemLabel: "Legendas",
        detailsLabel: "Detalhes da reuni\xE3o",
        showCaptionsLabel: "Ativar legendas",
        hideCaptionsLabel: "Desativar legendas",
        closeLanguageDialogButtonLabel: "Aplicar",
        captionsLanguageHeaderLabel: "IDIOMA DA REUNI\xC3O",
      },
      French: {
        id: 5,
        translationId: 15,
        shortName: "fr",
        optionName: "Fran\xE7ais",
        menuLabel: "Plus d'options",
        menuItemLabel: "Sous-titres",
        detailsLabel: "D\xE9tails de la r\xE9union",
        showCaptionsLabel: "Activer les sous-titres",
        hideCaptionsLabel: "D\xE9sactiver les sous-titres",
        closeLanguageDialogButtonLabel: "Appliquer",
        captionsLanguageHeaderLabel: "LANGUE DE LA R\xC9UNION",
      },
      FrenchCanadian: {
        id: 73,
        shortName: "fr",
        optionName: "Fran\xE7ais (Canada)",
        menuLabel: "Plus d'options",
        menuItemLabel: "Sous-titres",
        detailsLabel: "D\xE9tails de la r\xE9union",
        showCaptionsLabel: "Activer les sous-titres",
        hideCaptionsLabel: "D\xE9sactiver les sous-titres",
        closeLanguageDialogButtonLabel: "Appliquer",
        captionsLanguageHeaderLabel: "LANGUE DE LA R\xC9UNION",
      },
      German: {
        id: 6,
        translationId: 16,
        shortName: "de",
        optionName: "Deutsch",
        menuLabel: "Weitere Optionen",
        menuItemLabel: "Untertitel",
        detailsLabel: "Besprechungsdetails",
        showCaptionsLabel: "Untertitel aktivieren",
        hideCaptionsLabel: "Untertitel deaktivieren",
        closeLanguageDialogButtonLabel: "Anwenden",
        captionsLanguageHeaderLabel: "IN DER BESPRECHUNG GESPROCHENE SPRACHE",
      },
      Italian: {
        id: 7,
        shortName: "it",
        optionName: "Italiano",
        menuLabel: "Altre opzioni",
        menuItemLabel: "Sottotitoli",
        detailsLabel: "Dettagli riunione",
        showCaptionsLabel: "Attiva sottotitoli",
        hideCaptionsLabel: "Disattiva sottotitoli",
        closeLanguageDialogButtonLabel: "Applica",
        captionsLanguageHeaderLabel: "LINGUA DELLA RIUNIONE",
      },
      Japanese: {
        id: 9,
        translationId: 28,
        shortName: "ja",
        optionName: "\u65E5\u672C\u8A9E",
        menuLabel: "\u305D\u306E\u4ED6\u306E\u30AA\u30D7\u30B7\u30E7\u30F3",
        menuItemLabel: "\u5B57\u5E55\u3092\u30AA\u30F3\u306B\u3059\u308B",
        detailsLabel: "\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u8A73\u7D30",
        showCaptionsLabel: "\u5B57\u5E55\u3092\u30AA\u30F3\u306B\u3059\u308B",
        hideCaptionsLabel: "\u5B57\u5E55\u3092\u30AA\u30D5\u306B\u3059\u308B",
        chatToggleLabel: "\u5168\u54E1\u3068\u30C1\u30E3\u30C3\u30C8",
        chatSendLabel:
          "\u53C2\u52A0\u8005\u5168\u54E1\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1",
        closeLanguageDialogButtonLabel: "\u9069\u7528",
        captionsLanguageHeaderLabel:
          "\u4F1A\u8B70\u306E\u4F7F\u7528\u8A00\u8A9E",
      },
      Korean: {
        id: 11,
        shortName: "ko",
        optionName: "\uD55C\uAD6D\uC5B4",
        menuLabel: "\uC635\uC158 \uB354\uBCF4\uAE30",
        menuItemLabel: "\uCEA1\uC158",
        detailsLabel: "\uD68C\uC758 \uC138\uBD80\uC815\uBCF4",
        showCaptionsLabel: "\uC790\uB9C9 \uC0AC\uC6A9",
        hideCaptionsLabel: "\uC790\uB9C9 \uC0AC\uC6A9 \uC911\uC9C0",
        chatToggleLabel: "\uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uC640 \uCC44\uD305",
        chatSendLabel: "\uBA54\uC2DC\uC9C0 \uBCF4\uB0B4\uAE30",
        closeLanguageDialogButtonLabel: "\uB300\uD654\uC0C1\uC790 \uB2EB\uAE30",
        captionsLanguageHeaderLabel: "\uD68C\uC758 \uC5B8\uC5B4",
      },
      Chineese: {
        id: 35,
        translationId: 62,
        shortName: "zh",
        optionName: "\u4E2D\u6587",
        menuLabel: "\u66F4\u591A\u9078\u9805",
        menuItemLabel: "\u5B57\u5E55",
        detailsLabel: "\u6703\u8B70\u8A73\u60C5",
        showCaptionsLabel: "\u958B\u555F\u5B57\u5E55",
        hideCaptionsLabel: "\u95DC\u9589\u5B57\u5E55",
        chatToggleLabel: "\u8207\u6240\u6709\u4EBA\u804A\u5929",
        chatSendLabel: "\u5411\u6240\u6709\u4EBA\u767C\u9001\u8A0A\u606F",
        closeLanguageDialogButtonLabel: "\u5957\u7528",
        captionsLanguageHeaderLabel: "\u6703\u8B70\u8A9E\u8A00",
      },
      Dutch: {
        id: 8,
        translationId: 27,
        shortName: "nl",
        optionName: "Nederlands",
        menuLabel: "Meer opties",
        menuItemLabel: "Ondertiteling",
        detailsLabel: "Details van de vergadering",
        showCaptionsLabel: "Ondertiteling inschakelen",
        hideCaptionsLabel: "Ondertiteling uitschakelen",
        chatToggleLabel: "Met iedereen chatten",
        chatSendLabel: "Bericht naar iedereen verzenden",
        closeLanguageDialogButtonLabel: "Toepassen",
        captionsLanguageHeaderLabel: "VERGADERINGSTAAL",
      },
      Russian: {
        id: 10,
        shortName: "ru",
        optionName: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
        menuLabel:
          "\u0414\u0440\u0443\u0433\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",
        menuItemLabel: "\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
        detailsLabel:
          "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u0432\u0441\u0442\u0440\u0435\u0447\u0438",
        showCaptionsLabel:
          "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
        hideCaptionsLabel:
          "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
        chatToggleLabel:
          "\u041E\u0431\u0449\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u0432\u0441\u0435\u043C\u0438",
        chatSendLabel:
          "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u043C",
        closeLanguageDialogButtonLabel:
          "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",
        captionsLanguageHeaderLabel:
          "\u042F\u0417\u042B\u041A \u0412\u0421\u0422\u0420\u0415\u0427\u0418",
      },
      Polish: {
        id: 39,
        shortName: "pl",
        optionName: "Polski",
        menuLabel: "Wi\u0119cej opcji",
        menuItemLabel: "Napisy",
        detailsLabel: "Szczeg\xF3\u0142y spotkania",
        showCaptionsLabel: "W\u0142\u0105cz napisy",
        hideCaptionsLabel: "Wy\u0142\u0105cz napisy",
        chatToggleLabel: "Czatuj ze wszystkimi",
        chatSendLabel: "Wy\u015Blij wiadomo\u015B\u0107 do wszystkich",
        closeLanguageDialogButtonLabel: "Zamknij okno",
        captionsLanguageHeaderLabel: "J\u0118ZYK SPOTKANIA",
      },
      Romanian: {
        id: 40,
        shortName: "ro",
        optionName: "Rom\xE2n\u0103",
        menuLabel: "Mai multe op\u021Biuni",
        menuItemLabel: "legendele",
        detailsLabel: "Detaliile \xEEnt\xE2lnirii",
        showCaptionsLabel: "Activeaz\u0103 subtitr\u0103rile",
        hideCaptionsLabel: "Dezactiveaz\u0103 subtitr\u0103rile",
        chatToggleLabel: "Converseaz\u0103 prin chat cu to\u021Bi",
        chatSendLabel: "Trimite un mesaj",
        closeLanguageDialogButtonLabel: "\xCEnchide\u021Bi caseta de dialog",
        captionsLanguageHeaderLabel: "LIMBA \xCENT\xC2LNIRII",
      },
      Thai: {
        id: 37,
        shortName: "th",
        optionName: "\u0E44\u0E17\u0E22",
        menuLabel:
          "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
        menuItemLabel:
          "\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E20\u0E32\u0E1E",
        detailsLabel:
          "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21",
        showCaptionsLabel:
          "\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E04\u0E33\u0E1A\u0E23\u0E23\u0E22\u0E32\u0E22\u0E41\u0E17\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07",
        hideCaptionsLabel:
          "\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E04\u0E33\u0E1A\u0E23\u0E23\u0E22\u0E32\u0E22\u0E41\u0E17\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07",
        chatToggleLabel:
          "\u0E41\u0E0A\u0E17\u0E01\u0E31\u0E1A\u0E17\u0E38\u0E01\u0E04\u0E19",
        chatSendLabel:
          "\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",
        closeLanguageDialogButtonLabel:
          "\u0E1B\u0E34\u0E14\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E42\u0E15\u0E49\u0E15\u0E2D\u0E1A",
        captionsLanguageHeaderLabel:
          "\u0E20\u0E32\u0E29\u0E32\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21",
      },
      Turkish: {
        id: 38,
        translationId: 65,
        shortName: "tr",
        optionName: "T\xFCrk\xE7e",
        menuLabel: "Di\u011Fer se\xE7enekler",
        menuItemLabel: "altyaz\u0131lar",
        detailsLabel: "Toplant\u0131 ayr\u0131nt\u0131lar\u0131",
        showCaptionsLabel: "Altyaz\u0131lar\u0131 a\xE7",
        hideCaptionsLabel: "Altyaz\u0131lar\u0131 kapa",
        chatToggleLabel: "Herkesle sohbet et",
        chatSendLabel: "\u0130leti g\xF6nderin",
        closeLanguageDialogButtonLabel: "\u0130leti\u015Fim kutusunu kapat",
        captionsLanguageHeaderLabel: "TOPLANTI D\u0130L\u0130",
      },
      Indonesian: {
        id: 41,
        shortName: "id",
        optionName: "Indonesia",
        menuLabel: "Opsi lainnya",
        menuItemLabel: "Teks",
        detailsLabel: "Detail rapat",
        showCaptionsLabel: "Aktifkan teks",
        hideCaptionsLabel: "Nonaktifkan teks",
        chatToggleLabel: "Chat dengan semua orang",
        chatSendLabel: "Kirim pesan",
        closeLanguageDialogButtonLabel: "Tutup dialog",
        captionsLanguageHeaderLabel: "BAHASA DALAM RAPAT",
      },
      Vietnamese: {
        id: 42,
        shortName: "vi",
        optionName: "Ti\u1EBFng Vi\u1EC7t",
        menuLabel: "T\xF9y ch\u1ECDn kh\xE1c",
        menuItemLabel: "ph\u1EE5 \u0111\u1EC1",
        detailsLabel: "Chi ti\u1EBFt v\u1EC1 cu\u1ED9c h\u1ECDp",
        showCaptionsLabel: "B\u1EADt ph\u1EE5 \u0111\u1EC1",
        hideCaptionsLabel: "T\u1EAFt ph\u1EE5 \u0111\u1EC1",
        chatToggleLabel: "Tr\xF2 chuy\u1EC7n v\u1EDBi m\u1ECDi ng\u01B0\u1EDDi",
        chatSendLabel: "G\u1EEDi th\u01B0",
        closeLanguageDialogButtonLabel:
          "\u0110o\u0301ng h\xF4\u0323p thoa\u0323i",
        captionsLanguageHeaderLabel:
          "NG\xD4N NG\u1EEE D\xD9NG TRONG CU\u1ED8C H\u1ECCP",
      },
    }),
    cu = Object.values(gx),
    Wd = (t) =>
      Hd(t)
        ? cu.find((e) => e.translationId === t)
        : cu.find((e) => e.id === t),
    Hd = (t) => cu.some((e) => e.translationId === t),
    Gd = Object.freeze({
      "Arabic_- Saudi Arabia": {
        languageCode: "ar-sa",
        shortName: "ar",
        optionName: "Arabic - Saudi Arabia",
      },
      "Arabic_- United Arab Emirates": {
        languageCode: "ar-ae",
        shortName: "ar",
        optionName: "Arabic - United Arab Emirates",
      },
      "Chinese__Simplified, PRC_": {
        languageCode: "zh-cn",
        shortName: "zh",
        optionName: "Chinese (Simplified, China)",
      },
      "Chinese__Traditional, Hong Kong S.A.R._": {
        languageCode: "zh-hk",
        shortName: "zh",
        optionName: "Chinese (Traditional, Hong Kong SAR.)",
      },
      "Chinese__Traditional, Taiwan_": {
        languageCode: "zh-tw",
        shortName: "zh",
        optionName: "Chinese (Traditional, Taiwan)",
      },
      "Czech__Czech Republic_": {
        languageCode: "cs-cz",
        shortName: "cs",
        optionName: "Czech (Czech Republic)",
      },
      Danish__Denmark_: {
        languageCode: "da-dk",
        shortName: "da",
        optionName: "Danish (Denmark)",
      },
      Dutch__Belgium_: {
        languageCode: "nl-be",
        shortName: "nl",
        optionName: "Dutch (Belgium)",
      },
      Dutch__Netherlands_: {
        languageCode: "nl-nl",
        shortName: "nl",
        optionName: "Dutch (Netherlands)",
      },
      English__Australia_: {
        languageCode: "en-au",
        shortName: "en",
        optionName: "English (Australia)",
      },
      English__Canada_: {
        languageCode: "en-ca",
        shortName: "en",
        optionName: "English (Canada)",
      },
      English__India_: {
        languageCode: "en-in",
        shortName: "en",
        optionName: "English (India)",
      },
      "English__New Zealand_": {
        languageCode: "en-nz",
        shortName: "en",
        optionName: "English (New Zealand)",
      },
      "English__United Kingdom_": {
        languageCode: "en-gb",
        shortName: "en",
        optionName: "English (UK)",
      },
      "English__United States_": {
        languageCode: "en-us",
        shortName: "en",
        optionName: "English (US)",
      },
      Finnish__Finland_: {
        languageCode: "fi-fi",
        shortName: "fi",
        optionName: "Finnish (Finland)",
      },
      French__Canada_: {
        languageCode: "fr-ca",
        shortName: "fr",
        optionName: "French (Canada)",
      },
      French__France_: {
        languageCode: "fr-fr",
        shortName: "fr",
        optionName: "French (France)",
      },
      German__Germany_: {
        languageCode: "de-de",
        shortName: "de",
        optionName: "German (Germany)",
      },
      Greek__Greece_: {
        languageCode: "el-gr",
        shortName: "el",
        optionName: "Greek (Greece)",
      },
      Hebrew__Israel_: {
        languageCode: "he-il",
        shortName: "he",
        optionName: "Hebrew (Israel)",
      },
      Hindi__India_: {
        languageCode: "hi-in",
        shortName: "hi",
        optionName: "Hindi (India)",
      },
      Hungarian__Hungary_: {
        languageCode: "hu-hu",
        shortName: "hu",
        optionName: "Hungarian (Hungary)",
      },
      Italian__Italy_: {
        languageCode: "it-it",
        shortName: "it",
        optionName: "Italian (Italy)",
      },
      Japanese__Japan_: {
        languageCode: "ja-jp",
        shortName: "ja",
        optionName: "Japanese (Japan)",
      },
      Korean__Korea_: {
        languageCode: "ko-kr",
        shortName: "ko",
        optionName: "Korean (Korea)",
      },
      Norwegian_Norway_: {
        languageCode: "nb-no",
        shortName: "nb",
        optionName: "Norwegian (Norway)",
      },
      Polish__Poland_: {
        languageCode: "pl-pl",
        shortName: "pl",
        optionName: "Polish (Poland)",
      },
      Portuguese__Brazil_: {
        languageCode: "pt-br",
        shortName: "pt",
        optionName: "Portuguese (Brazil)",
      },
      Portuguese__Portugal_: {
        languageCode: "pt-pt",
        shortName: "pt",
        optionName: "Portuguese (Portugal)",
      },
      Romanian__Romania_: {
        languageCode: "ro-ro",
        shortName: "ro",
        optionName: "Romanian (Romania)",
      },
      Russian__Russia_: {
        languageCode: "ru-ru",
        shortName: "ru",
        optionName: "Russian (Russia)",
      },
      Slovak__Slovakia_: {
        languageCode: "sk-sk",
        shortName: "sk",
        optionName: "Slovak (Slovakia)",
      },
      Spanish__Mexico_: {
        languageCode: "es-mx",
        shortName: "es",
        optionName: "Spanish (Mexico)",
      },
      Spanish__Spain: {
        languageCode: "es-es",
        shortName: "es",
        optionName: "Spanish (Spain)",
      },
      Swedish__Sweden_: {
        languageCode: "sv-se",
        shortName: "sv",
        optionName: "Swedish (Sweden)",
      },
      Thai__Thailand_: {
        languageCode: "th-th",
        shortName: "th",
        optionName: "Thai (Thailand)",
      },
      Turkish__Turkey_: {
        languageCode: "tr-tr",
        shortName: "tr",
        optionName: "Turkish (T\xFCrkiye)",
      },
      Ukrainian__Ukraine_: {
        languageCode: "uk-ua",
        shortName: "uk",
        optionName: "Ukrainian (Ukraine)",
      },
      Vietnamese__Vietnam_: {
        languageCode: "vi-vn",
        shortName: "vi",
        optionName: "Vietnamese (Vietnam)",
      },
      "Welsh__United Kingdom_": {
        languageCode: "cy-gb",
        shortName: "cy",
        optionName: "Welsh (United Kingdom)",
      },
    }),
    zd = Object.values(Gd),
    mx = (t) => zd.find((e) => e.languageCode === t),
    lH = Object.freeze({
      Chinese: {
        zoomLanguageId: 1,
        languageCode: "zh",
        shortName: "zh",
        optionName: "Chinese (Simplified)",
        optionNames: [
          "Cinese (semplificato)",
          "Chinese (Simplified)",
          "Chino (simplificado)",
          "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09",
          "\u4E2D\u6587\uFF08\u7C21\u9AD4\uFF09",
          "Chinois (Simplifi\xE9)",
          "Chin\xEAs (simplificado)",
          "\u4E2D\u56FD\u8A9E\uFF08\u7C21\u4F53\u5B57\uFF09",
          "\u041A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0439 (\u0443\u043F\u0440\u043E\u0449\u0435\u043D\u043D\u044B\u0439)",
          "\uC911\uAD6D\uC5B4(\uAC04\uCCB4)",
          "Ti\u1EBFng Trung (Gi\u1EA3n th\u1EC3)",
          "Chi\u0144ski (uproszczony)",
          "\xC7ince (Basitle\u015Ftirilmi\u015F)",
          "Mandarin (Sederhana)",
          "Chinees (vereenvoudigd)",
        ],
      },
      Dutch: {
        zoomLanguageId: 12,
        languageCode: "nl-nl",
        shortName: "nl",
        optionName: "Dutch",
        optionNames: [
          "Dutch",
          "Holand\xE9s",
          "Niederl\xE4ndisch",
          "N\xE9erlandais",
          "Holandesa",
          "\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0439",
          "Olandese",
          "Holenderski",
          "Nederlands",
          "\u8377\u5170",
          "\u8377\u862D",
          "\u30AA\u30E9\u30F3\u30C0",
          "\uB124\uB35C\uB780\uB4DC",
          "H\xE0 Lan",
          "Niderlandzki",
          "Felemenk\xE7e",
          "Belanda",
        ],
      },
      English: {
        zoomLanguageId: 0,
        languageCode: "en-us",
        shortName: "en",
        optionName: "English",
        optionNames: [
          "English",
          "Ingl\xE9s",
          "Englisch",
          "Anglais",
          "Ingl\xEAs",
          "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439",
          "Inglese",
          "Engels",
          "\u82F1\u8BED",
          "\u82F1\u6587",
          "\u82F1\u8A9E",
          "\uC601\uC5B4",
          "Ti\u1EBFng Anh",
          "Angielski",
          "\u0130ngilizce",
          "Inggris",
        ],
      },
      French: {
        zoomLanguageId: 4,
        languageCode: "fr-fr",
        shortName: "fr",
        optionName: "French",
        optionNames: [
          "French",
          "Franc\xE9s",
          "Franz\xF6sisch",
          "Fran\xE7ais",
          "Franc\xEAs",
          "\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0438\u0439",
          "Francese",
          "Frans",
          "\u6CD5\u8BED",
          "\u6CD5\u6587",
          "\u30D5\u30E9\u30F3\u30B9\u8A9E",
          "\uD504\uB791\uC2A4\uC5B4",
          "Ti\u1EBFng Ph\xE1p",
          "Francuski",
          "Frans\u0131zca",
          "Prancis",
        ],
      },
      German: {
        zoomLanguageId: 3,
        languageCode: "de-de",
        shortName: "de",
        optionName: "German",
        optionNames: [
          "German",
          "Alem\xE1n",
          "Deutsch",
          "Allemand",
          "Alem\xE3o",
          "\u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439",
          "Tedesco",
          "Duits",
          "\u5FB7\u8BED",
          "\u5FB7\u6587",
          "\u30C9\u30A4\u30C4\u8A9E",
          "\uB3C5\uC77C\uC5B4",
          "Ti\u1EBFng \u0110\u1EE9c",
          "Niemiecki",
          "Almanca",
          "Jerman",
        ],
      },
      Italian: {
        zoomLanguageId: 9,
        languageCode: "it-it",
        shortName: "it",
        optionName: "Italian",
        optionNames: [
          "Italian",
          "Italiano",
          "Italienisch",
          "Italien",
          "Italiana",
          "\u0418\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439",
          "Italiano",
          "Italiaans",
          "\u610F\u5927\u5229",
          "\u7FA9\u5927\u5229",
          "\u30A4\u30BF\u30EA\u30A2",
          "\uC774\uD0C8\uB9AC\uC544",
          "Ti\u1EBFng \xDD",
          "W\u0142oski",
          "\u0130talyanca",
          "Italia",
        ],
      },
      Japanese: {
        zoomLanguageId: 2,
        languageCode: "ja-ja",
        shortName: "ja",
        optionName: "Japanese",
        optionNames: [
          "Japanese",
          "Japon\xE9s",
          "Japanisch",
          "Japonais",
          "Japon\xEAs",
          "\u042F\u043F\u043E\u043D\u0441\u043A\u0438\u0439",
          "Giapponese",
          "Japans",
          "\u65E5\u8BED",
          "\u65E5\u6587",
          "\u65E5\u672C\u8A9E",
          "\uC77C\uBCF8\uC5B4",
          "Ti\u1EBFng Nh\u1EADt",
          "Japo\u0144ski",
          "Japonca",
          "Jepang",
        ],
      },
      Korean: {
        zoomLanguageId: 8,
        languageCode: "ko-ko",
        shortName: "ko",
        optionName: "Korean",
        optionNames: [
          "Korean",
          "Coreano",
          "Koreanisch",
          "Cor\xE9en",
          "Coreano",
          "\u041A\u043E\u0440\u0435\u0439\u0441\u043A\u0438\u0439",
          "Coreano",
          "Koreaans",
          "\u97E9\u8BED",
          "\u97D3\u6587",
          "\u97D3\u56FD\u8A9E",
          "\uD55C\uAD6D\uC5B4",
          "Ti\u1EBFng H\xE0n",
          "Korea\u0144ski",
          "Korece",
          "Korea",
        ],
      },
      Portuguese: {
        zoomLanguageId: 6,
        languageCode: "pt-br",
        shortName: "pt",
        optionName: "Portuguese",
        optionNames: [
          "Portuguese",
          "Portugu\xE9s",
          "Portugiesisch",
          "Portugais",
          "Portugu\xEAs",
          "\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u044C\u0441\u043A\u0438\u0439",
          "Portoghese",
          "Portugees",
          "\u8461\u8404\u7259\u8BED",
          "\u8461\u8404\u7259\u6587",
          "\u30DD\u30EB\u30C8\u30AC\u30EB\u8A9E",
          "\uD3EC\uB974\uD22C\uAC08\uC5B4",
          "Ti\u1EBFng B\u1ED3 \u0110\xE0o Nha",
          "Portugalski",
          "Portekizce",
          "Portugis",
        ],
      },
      Russian: {
        zoomLanguageId: 5,
        languageCode: "ru-ru",
        shortName: "ru",
        optionName: "Russian",
        optionNames: [
          "Russian",
          "Ruso",
          "Russisch",
          "Russe",
          "Russo",
          "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
          "Russo",
          "Russisch",
          "\u4FC4\u8BED",
          "\u4FC4\u6587",
          "\u30ED\u30B7\u30A2\u8A9E",
          "\uB7EC\uC2DC\uC544\uC5B4",
          "Ti\u1EBFng Nga",
          "Rosyjski",
          "Rus\xE7a",
          "Rusia",
        ],
      },
      Spanish: {
        zoomLanguageId: 7,
        languageCode: "es-mx",
        shortName: "es",
        optionName: "Spanish",
        optionNames: [
          "Spanish",
          "Espa\xF1ol",
          "Spanisch",
          "Espagnol",
          "Espanhol",
          "\u0418\u0441\u043F\u0430\u043D\u0441\u043A\u0438\u0439",
          "Spagnolo",
          "Spaans",
          "\u897F\u73ED\u7259\u8BED",
          "\u897F\u73ED\u7259\u6587",
          "\u30B9\u30DA\u30A4\u30F3\u8A9E",
          "\uC2A4\uD398\uC778\uC5B4",
          "Ti\u1EBFng T\xE2y Ban Nha",
          "Hiszpa\u0144ski",
          "\u0130spanyolca",
          "Spanyol",
        ],
      },
      Ukrainian: {
        zoomLanguageId: 13,
        languageCode: "uk-ua",
        shortName: "uk",
        optionName: "Ukrainian",
        optionNames: [
          "Ukrainian",
          "Ucraniano",
          "Ukrainisch",
          "Ukrainien",
          "Ucraniano",
          "\u0423\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0439",
          "Ucraino",
          "Oekra\xEFens",
          "\u4E4C\u514B\u5170\u8BED",
          "\u70CF\u514B\u862D\u6587",
          "\u30A6\u30AF\u30E9\u30A4\u30CA\u8A9E",
          "\uC6B0\uD06C\uB77C\uC774\uB098\uC5B4",
          "Ti\u1EBFng Ukraina",
          "Ukrai\u0144ski",
          "Ukraynaca",
          "Ukraina",
        ],
      },
      Vietnamese: {
        zoomLanguageId: 11,
        languageCode: "vi",
        shortName: "vi",
        optionName: "Vietnamese",
        optionNames: [
          "Vietnamita",
          "Vietnamese",
          "\u8D8A\u5357\u8BED",
          "\u8D8A\u5357\u6587",
          "Vietnamien",
          "\u30D9\u30C8\u30CA\u30E0\u8A9E",
          "\u0412\u044C\u0435\u0442\u043D\u0430\u043C\u0441\u043A\u0438\u0439",
          "\uBCA0\uD2B8\uB0A8\uC5B4",
          "Ti\u1EBFng Vi\u1EC7t",
          "Wietnamski",
          "Vietnam Dili",
          "Vietnam",
          "Vietnamees",
        ],
      },
      Arabic: {
        zoomLanguageId: 14,
        languageCode: "ar",
        shortName: "ar",
        optionName: "Arabic",
        optionNames: [
          "Arabo",
          "Arabic",
          "\xC1rabe",
          "\u963F\u62C9\u4F2F\u8BED",
          "\u963F\u62C9\u4F2F\u6587",
          "Arabe",
          "\u30A2\u30E9\u30D3\u30A2\u8A9E",
          "\u0410\u0440\u0430\u0431\u0441\u043A\u0438\u0439",
          "\uC544\uB78D\uC5B4",
          "Ti\u1EBFng \u1EA2 R\u1EADp",
          "Arabski",
          "Arap\xE7a",
          "Arab",
          "Arabisch",
        ],
      },
      Bengali: {
        zoomLanguageId: 15,
        languageCode: "bn",
        shortName: "bn",
        optionName: "Bengali",
        optionNames: [
          "Bengali",
          "Bengal\xED",
          "\u5B5F\u52A0\u62C9\u8BED",
          "\u5B5F\u52A0\u62C9\u6587",
          "\u30D9\u30F3\u30AC\u30EB\u8A9E",
          "\u0411\u0435\u043D\u0433\u0430\u043B\u044C\u0441\u043A\u0438\u0439",
          "\uBCB5\uACE8\uC5B4",
          "Ti\u1EBFng Bengal",
          "Bengalski",
          "Bengaals",
        ],
      },
      Chinese_Traditional: {
        zoomLanguageId: 16,
        languageCode: "zh-hant",
        shortName: "zh-hant",
        optionName: "Chinese (Traditional)",
        optionNames: [
          "Cinese (tradizionale)",
          "Chinese (Traditional)",
          "Chino (tradicional)",
          "\u4E2D\u6587\uFF08\u7E41\u4F53\uFF09",
          "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09",
          "Chinois (traditionnel)",
          "Chin\xEAs (tradicional)",
          "\u4E2D\u56FD\u8A9E\uFF08\u7E41\u4F53\u5B57\uFF09",
          "\u041A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0439 (\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0439)",
          "\uC911\uAD6D\uC5B4(\uBC88\uCCB4)",
          "Ti\u1EBFng Trung (Ph\u1ED3n th\u1EC3)",
          "Chi\u0144ski (tradycyjny)",
          "\xC7ince (Geleneksel)",
          "Mandarin (Tradisional)",
          "Chinees (traditioneel)",
        ],
      },
      Czech: {
        zoomLanguageId: 17,
        languageCode: "cs",
        shortName: "cs",
        optionName: "Czech",
        optionNames: [
          "Ceco",
          "Czech",
          "Checo",
          "\u6377\u514B\u8BED",
          "\u6377\u514B\u6587",
          "Tch\xE8que",
          "Tcheco",
          "\u30C1\u30A7\u30B3\u8A9E",
          "\u0427\u0435\u0448\u0441\u043A\u0438\u0439",
          "\uCCB4\uCF54\uC5B4",
          "S\xE9c",
          "Czeski",
          "\xC7ek\xE7e",
          "Ceska",
          "Tsjechisch",
        ],
      },
      Estonian: {
        zoomLanguageId: 18,
        languageCode: "et",
        shortName: "et",
        optionName: "Estonian",
        optionNames: [
          "Estone",
          "Estonian",
          "Estonio",
          "\u7231\u6C99\u5C3C\u4E9A\u8BED",
          "\u611B\u6C99\u5C3C\u4E9E\u6587",
          "Estonien",
          "Estoniano",
          "\u30A8\u30B9\u30C8\u30CB\u30A2\u8A9E",
          "\u042D\u0441\u0442\u043E\u043D\u0441\u043A\u0438\u0439",
          "\uC5D0\uC2A4\uD1A0\uB2C8\uC544\uC5B4",
          "Ti\u1EBFng Estonia",
          "Esto\u0144ski",
          "Estonca",
          "Estonia",
          "Ests",
        ],
      },
      Finnish: {
        zoomLanguageId: 19,
        languageCode: "fi",
        shortName: "fi",
        optionName: "Finnish",
        optionNames: [
          "Finlandese",
          "Finnish",
          "Finland\xE9s",
          "\u82AC\u5170\u8BED",
          "\u82AC\u862D\u6587",
          "Finnois",
          "Finland\xEAs",
          "\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9\u8A9E",
          "\u0424\u0438\u043D\u0441\u043A\u0438\u0439",
          "\uD540\uB780\uB4DC\uC5B4",
          "Ti\u1EBFng Ph\u1EA7n Lan",
          "Fi\u0144ski",
          "Fince",
          "Finlandia",
          "Fins",
        ],
      },
      Greek: {
        zoomLanguageId: 20,
        languageCode: "el",
        shortName: "el",
        optionName: "Greek",
        optionNames: [
          "Greco",
          "Greek",
          "Griego",
          "\u5E0C\u814A\u8BED",
          "\u5E0C\u81D8\u6587",
          "Grec",
          "Grego",
          "\u30AE\u30EA\u30B7\u30E3\u8A9E",
          "\u0413\u0440\u0435\u0447\u0435\u0441\u043A\u0438\u0439",
          "\uADF8\uB9AC\uC2A4\uC5B4",
          "Ti\u1EBFng Hy L\u1EA1p",
          "Grecki",
          "Yunanca",
          "Yunani",
          "Grieks",
        ],
      },
      Hebrew: {
        zoomLanguageId: 21,
        languageCode: "he",
        shortName: "he",
        optionName: "Hebrew",
        optionNames: [
          "Ebraico",
          "Hebrew",
          "Hebreo",
          "\u5E0C\u4F2F\u6765\u8BED",
          "\u5E0C\u4F2F\u4F86\u6587",
          "H\xE9breu",
          "Hebraico",
          "\u30D8\u30D6\u30E9\u30A4\u8A9E",
          "\u0418\u0432\u0440\u0438\u0442",
          "\uD788\uBE0C\uB9AC\uC5B4",
          "Ti\u1EBFng Do Th\xE1i",
          "Hebrajski",
          "\u0130branice",
          "Ibrani",
          "Hebreeuws",
        ],
      },
      Hindi: {
        zoomLanguageId: 22,
        languageCode: "hi",
        shortName: "hi",
        optionName: "Hindi",
        optionNames: [
          "Hindi",
          "\u5370\u5730\u8BED",
          "\u5370\u5EA6\u6587",
          "\u30D2\u30F3\u30C7\u30A3\u30FC\u8A9E",
          "\u0425\u0438\u043D\u0434\u0438",
          "\uD78C\uB514\uC5B4",
          "Ti\u1EBFng Hindi",
          "Hint\xE7e",
        ],
      },
      Hungarian: {
        zoomLanguageId: 23,
        languageCode: "hu",
        shortName: "hu",
        optionName: "Hungarian",
        optionNames: [
          "Ungherese",
          "Hungarian",
          "H\xFAngaro",
          "\u5308\u7259\u5229\u8BED",
          "\u5308\u7259\u5229\u6587",
          "Hongrois",
          "\u30CF\u30F3\u30AC\u30EA\u30FC\u8A9E",
          "\u0412\u0435\u043D\u0433\u0435\u0440\u0441\u043A\u0438\u0439",
          "\uD5DD\uAC00\uB9AC\uC5B4",
          "Ti\u1EBFng Hungary",
          "W\u0119gierski",
          "Macarca",
          "Hongaria",
          "Hongaars",
        ],
      },
      Indonesian: {
        zoomLanguageId: 24,
        languageCode: "id",
        shortName: "id",
        optionName: "Indonesian",
        optionNames: [
          "Indonesiano",
          "Indonesian",
          "Indonesio",
          "\u5370\u5EA6\u5C3C\u897F\u4E9A",
          "\u5370\u5C3C",
          "Indon\xE9sien",
          "Indon\xE9sia",
          "\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2",
          "\u0418\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u0439\u0441\u043A\u0438\u0439",
          "\uC778\uB3C4\uB124\uC2DC\uC544",
          "Ti\u1EBFng Indonesia",
          "Indonezyjski",
          "Endonezyaca",
          "Bahasa Indonesia",
          "Indonesisch",
        ],
      },
      Malay: {
        zoomLanguageId: 25,
        languageCode: "ms",
        shortName: "ms",
        optionName: "Malay",
        optionNames: [
          "Malese",
          "Malay",
          "Malayo",
          "\u9A6C\u6765\u8BED",
          "\u99AC\u4F86\u6587",
          "Malaisien",
          "Malaio",
          "\u30DE\u30EC\u30FC\u8A9E",
          "\u041C\u0430\u043B\u0430\u0439\u0441\u043A\u0438\u0439",
          "\uB9D0\uB808\uC774\uC2DC\uC544\uC5B4",
          "Ti\u1EBFng M\xE3 Lai",
          "Malajski",
          "Malay dili",
          "Melayu",
          "Maleisisch",
        ],
      },
      Persian: {
        zoomLanguageId: 26,
        languageCode: "fa",
        shortName: "fa",
        optionName: "Persian",
        optionNames: [
          "Persiano",
          "Persian",
          "Persa",
          "\u6CE2\u65AF",
          "Perse",
          "\u30DA\u30EB\u30B7\u30E3",
          "\u041F\u0435\u0440\u0441\u0438\u0434\u0441\u043A\u0438\u0439",
          "\uD398\uB974\uC2DC\uC544",
          "Ti\u1EBFng Ba T\u01B0",
          "Perski",
          "Fars\xE7a",
          "Farsi",
          "Perzisch",
        ],
      },
      Polish: {
        zoomLanguageId: 27,
        languageCode: "pl",
        shortName: "pl",
        optionName: "Polish",
        optionNames: [
          "Polacco",
          "Polish",
          "Polaco",
          "\u6CE2\u5170",
          "\u6CE2\u862D",
          "Polonais",
          "Polonesa",
          "\u30DD\u30FC\u30E9\u30F3\u30C9",
          "\u041F\u043E\u043B\u044C\u0441\u043A\u0438\u0439",
          "\uD3F4\uB780\uB4DC",
          "Ba Lan",
          "Polski",
          "Leh\xE7e",
          "Polandia",
          "Pools",
        ],
      },
      Romanian: {
        zoomLanguageId: 28,
        languageCode: "ro",
        shortName: "ro",
        optionName: "Romanian",
        optionNames: [
          "Rumeno",
          "Romanian",
          "Rumano",
          "\u7F57\u9A6C\u5C3C\u4E9A\u8BED",
          "\u7F85\u99AC\u5C3C\u4E9E\u6587",
          "Roumain",
          "Romeno",
          "\u30EB\u30FC\u30DE\u30CB\u30A2\u8A9E",
          "\u0420\u0443\u043C\u044B\u043D\u0441\u043A\u0438\u0439",
          "\uB8E8\uB9C8\uB2C8\uC544\uC5B4",
          "Ti\u1EBFng Rumani",
          "Rumu\u0144ski",
          "Rumence",
          "Rumania",
          "Roemeens",
        ],
      },
      Swedish: {
        zoomLanguageId: 29,
        languageCode: "sv",
        shortName: "sv",
        optionName: "Swedish",
        optionNames: [
          "Svedese",
          "Swedish",
          "Sueco",
          "\u745E\u5178\u8BED",
          "\u745E\u5178\u6587",
          "Su\xE9dois",
          "\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3\u8A9E",
          "\u0428\u0432\u0435\u0434\u0441\u043A\u0438\u0439",
          "\uC2A4\uC6E8\uB374\uC5B4",
          "Ti\u1EBFng Th\u1EE5y \u0110i\u1EC3n",
          "Szwedzki",
          "\u0130sve\xE7\xE7e",
          "Swedia",
          "Zweeds",
        ],
      },
      Tamil: {
        zoomLanguageId: 30,
        languageCode: "ta",
        shortName: "ta",
        optionName: "Tamil",
        optionNames: [
          "Tamil",
          "\u6CF0\u7C73\u5C14\u8BED",
          "\u5766\u7C73\u723E\u6587",
          "T\xE2mil",
          "\u30BF\u30DF\u30EB\u8A9E",
          "\u0422\u0430\u043C\u0438\u043B\u044C\u0441\u043A\u0438\u0439",
          "\uD0C0\uBC00\uC5B4",
          "Ti\u1EBFng Tamil",
          "Tamilski",
          "Tamil dili",
        ],
      },
      Telugu: {
        zoomLanguageId: 31,
        languageCode: "te",
        shortName: "te",
        optionName: "Telugu",
        optionNames: [
          "Telugu",
          "\u6CF0\u5362\u56FA\u8BED",
          "\u7279\u62C9\u53E4\u6587",
          "Telugo",
          "\u30C6\u30EB\u30B0\u8A9E",
          "\u0422\u0435\u043B\u0443\u0433\u0443",
          "\uD154\uB8E8\uAD6C\uC5B4",
          "Ti\u1EBFng Telugu",
          "Telugu dili",
        ],
      },
      Tagalog: {
        zoomLanguageId: 32,
        languageCode: "tl",
        shortName: "tl",
        optionName: "Tagalog",
        optionNames: [
          "Tagalog",
          "Tagalo",
          "\u5854\u52A0\u62C9\u65CF\u8BED",
          "\u5854\u52A0\u62C9\u65CF\u6587",
          "\u30BF\u30AC\u30ED\u30B0\u8A9E",
          "\u0422\u0430\u0433\u0430\u043B\u044C\u0441\u043A\u0438\u0439",
          "\uD0C0\uAC08\uB85C\uADF8\uC5B4",
          "Ti\u1EBFng Tagalog",
          "Tagalog dili",
        ],
      },
      Turkish: {
        zoomLanguageId: 33,
        languageCode: "tr",
        shortName: "tr",
        optionName: "Turkish",
        optionNames: [
          "Turco",
          "Turkish",
          "\u571F\u8033\u5176",
          "Turc",
          "Turca",
          "\u30C8\u30EB\u30B3\u8A9E",
          "\u0422\u0443\u0440\u0435\u0446\u043A\u0438\u0439",
          "\uD130\uD0A4",
          "Th\u1ED5 Nh\u0129 K\u1EF3",
          "Turecki",
          "T\xFCrk\xE7e",
          "Turki",
          "Turks",
        ],
      },
    }),
    pH = Object.values(lH),
    $d = (t) => pH.find((e) => e.zoomLanguageId === t);
  var bx = vx(),
    pu = B("UPDATE_CAPTURE_PIN"),
    Kd = B("HIGHLIGHT_LAST_CAPTURE"),
    fu = B("UPDATE_CAPTURE_TAG"),
    Eo = B("RTC_TEXT"),
    du = B("AUTOSAVED"),
    Qd = B("CONSUME_AUTOSAVE"),
    dH = B("UPDATE_PLATFORM"),
    Io = B("UPDATE_MEETING_ID"),
    hu = B("UPDATE_MEETING_TITLE"),
    nr = B("UPDATE_AUTOSAVE_STATUS"),
    hH = B("SET_IS_DOCUMENT_OPENED"),
    gH = B("SET_IS_ZOOM_HOST"),
    Yd = B("SET_IS_MSTEAMS_ORGANISER"),
    mH = B("SET_DETECTED_CAPTIONS_STATE"),
    yH = B("SET_DETECTED_RECORDING_ON"),
    ir = B("SET_DETECTED_LANGUAGE"),
    vH = B("SET_DETECTED_MEETING_STAGE"),
    gu = B("UPDATE_FILE"),
    _H = B("RTC_DEVICE"),
    Jd = B("SET_PAUSED"),
    Xd = B("SET_AUTO_PAUSE_ENABLED"),
    Zd = B("DELETE_TRANSCRIPTION"),
    eh = B("SAVE_TRANSCRIPT_LOCALLY"),
    bH = B("PRELOAD_TRANSCRIPT"),
    mu = B("SAVE_MEETING"),
    yu = B("SAVE_MEETING_NO_THROTTLE"),
    th = B("SAVE_MEETING_REMOTELY"),
    rh = B("ATTEMPT_AUTOSAVE"),
    vu = B("SET_TRANSCRIPT_NOTES"),
    Sx = B("UPDATE_TRANSCRIPT"),
    nh = B("CREATE_NEW_TRANSCRIPT_PART"),
    ih = B("CLEAR_NEW_HIGHLIGHTS"),
    Tx = B("TAKE_SCREENSHOT"),
    xo = B("ADD_SCREENSHOTS"),
    SH = B("DELETE_BLOCKS");
  function TH(t, e) {
    let r = t;
    return (
      e?.forEach((n) => {
        r = r.replaceAll(
          new RegExp(`\\b${bx(n.searchValue)}\\b`, "gi"),
          n.newValue
        );
      }),
      r
    );
  }
  function EH(t, e = []) {
    let r = !1,
      n = [];
    for (let i of e)
      new RegExp(`\\b${bx(i.searchValue)}\\b`, "gi").test(t) &&
        (i.autoTag ? n.push(i.autoTag) : (r = !0));
    return { isPinned: r, tags: Array.from(new Set(n)) };
  }
  function lu(t) {
    let e = new Date();
    return {
      id: t.id,
      devices: {},
      createdAt: e.getTime(),
      updatedAt: e.getTime(),
      tzOffset: e.getTimezoneOffset() * 60 * 1e3,
      platform: "UNKNOWN",
      blocks: [],
      files: {},
      isPaused: t.autoPauseEnabled,
      isDocumentOpened: !1,
    };
  }
  function Jn() {
    return Date.now();
  }
  var IH = (t, e, r, n) => {
      let i = n.autoReplaces?.length ? TH(e.text, n.autoReplaces) : e.text,
        a,
        o = r.find((s) => s.messageId === e.messageId);
      if (o)
        o.messageVersion <= e.messageVersion &&
          ((o.speakerName = t),
          (o.transcript = i),
          (o.version = Date.now()),
          (a = o));
      else {
        let s = {
          timestamp: Date.now(),
          speakerName: t,
          transcript: i,
          deviceId: e.deviceId,
          messageId: e.messageId,
          messageVersion: e.messageVersion,
          version: Date.now(),
          type: e.type,
        };
        r.push(s), (a = s);
      }
      return (
        a && e.text.normalize() !== i && (a.originalTranscript = e.text), a
      );
    },
    xH = (t, e, r) => {
      let n;
      Object.keys(t.devices ?? {})?.length
        ? (!t.devices[e.deviceId] &&
            e.deviceName &&
            (t.devices[e.deviceId] = e.deviceName),
          (n = t.devices[e.deviceId] ?? "Speaker"))
        : (((t.devices ??= {})[e.deviceId] = e.deviceName ?? "Speaker"),
          (n = e.deviceName ?? "Speaker"));
      let { blocks: i } = t;
      if (e.langId !== void 0 && Hd(e.langId)) {
        let a = Wd(e.langId);
        !t.translation &&
          a &&
          (t.translation = { detectedLanguage: a, blocks: [] }),
          (i = t.translation.blocks);
      }
      return IH(n, e, i, r);
    };
  function wH(t, { payload: e }) {
    if (
      (t.current || (t.current = {}),
      (t.current[e.id] ??= lu({
        id: e.id,
        autoPauseEnabled: t.autoPauseEnabled ?? !1,
      })),
      !t.current[e.id].isPaused)
    ) {
      let n = !1,
        i = [];
      for (let a of e.messages)
        if (a.type !== "chat" || !e.settings.ignoreChat) {
          n = !0;
          let o = xH(t.current[e.id], a, e.settings);
          o && i.push(o);
        }
      if (e.settings.autoHighlights) {
        let a = AH(t.current[e.id], i, e.settings);
        a.length && ((n = !0), (t.newHighlghts = a));
      }
      n && (t.current[e.id].updatedAt = Jn());
    }
  }
  function AH(t, e, r) {
    let n = [],
      i = uT(t.blocks, !1);
    for (let a of e) {
      let o = i.find((s) => s.messageIds.has(a.messageId));
      if (o) {
        let s = EH(o.transcript, r.autoHighlights ?? []);
        if (s) {
          (a.isPinned = a.isPinned || s.isPinned),
            s.tags.forEach((c) => {
              a?.tags?.indexOf(c) === -1 &&
                r.hideAutoHighlightSnacks === !1 &&
                c !== Ep.name &&
                n.push({
                  text: o.transcript,
                  tagName: c,
                  isAuto: !0,
                  blockType: o.type ?? "transcript",
                });
            });
          for (let c of o.blocks)
            (c.tags ??= []),
              s.tags.forEach((u) => {
                c?.tags?.indexOf(u) === -1 && c?.tags?.push(u);
              }),
              (c.isPinned = c.isPinned || s.isPinned);
        }
      }
    }
    return n;
  }
  var Ce = (t, e) => (
      t.current || (t.current = {}),
      (t.current[e] ??= lu({
        id: e,
        autoPauseEnabled: t.autoPauseEnabled ?? !1,
      })),
      t.current[e]
    ),
    Ex = tr({ current: {}, unsaved: [] }, (t) =>
      t
        .addCase(pu, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          if (!n.isPaused)
            for (let i of r.messageIds) {
              let a = n.blocks.find((o) => o.messageId === i);
              a &&
                ((a.isPinned = r.pinValue),
                r.pinValue || (a.tags = []),
                (a.version = Date.now()),
                (n.updatedAt = Jn()));
            }
        })
        .addCase(Kd, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          if (!n.isPaused) {
            let i = (0, _x.default)(n.blocks);
            i &&
              ((i.isPinned = !0),
              (i.version = Date.now()),
              (n.updatedAt = Jn()));
          }
        })
        .addCase(fu, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          if (!n.isPaused) {
            for (let i of r.messageIds) {
              let a = n.blocks.find((o) => o.messageId === i);
              if (a) {
                (a.version = Date.now()), a.tags || (a.tags = []);
                let o = a.tags.indexOf(r.tagFieldName);
                r.value
                  ? o === -1 && a.tags.push(r.tagFieldName)
                  : o !== -1 && a.tags.splice(o, 1);
              }
            }
            n.updatedAt = Jn();
          }
        })
        .addCase(Eo, wH)
        .addCase(xo, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.blocks.push({
            type: "screenshot",
            messageId: r.stamp.toString(),
            messageVersion: 0,
            speakerName: "Screenshot",
            transcript: r.thumb,
            timestamp: r.stamp,
            version: Date.now(),
          }),
            (n.updatedAt = Jn());
        })
        .addCase(SH, (e, { payload: r }) => {
          let n = Ce(e, r.id),
            i = n;
          (n.blocks = i.blocks.filter(
            (a) => r.messageIds.indexOf(a.messageId) === -1
          )),
            (n.updatedAt = Jn());
        })
        .addCase(du, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.lastAutoSavedAt = new Date(r.autosavedAt).getTime();
        })
        .addCase(Qd, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.consumedAutosave = !0;
        })
        .addCase(dH, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.platform = r.platform;
        })
        .addCase(gH, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.isZoomHost = r.isZoomHost;
        })
        .addCase(Yd, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.isMSTeamsOrganiser = r.isMSTeamsOrganiser;
        })
        .addCase(Io, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          (n.meetingId = r.meetingId), (n.userId = r.userId);
        })
        .addCase(hu, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.meetingTitle = r.title;
        })
        .addCase(nr, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.autosaveStatus = r.autosaveStatus;
        })
        .addCase(mH, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.detectedCaptionsOn = r.isOn;
        })
        .addCase(yH, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.detectedRecordingOn = r.isOn;
        })
        .addCase(hH, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.isDocumentOpened = !0;
        })
        .addCase(ir, (e, { payload: r }) => {
          let n;
          if (
            ("langId" in r
              ? (n = Wd(r.langId))
              : "languageCode" in r
              ? (n = mx(r.languageCode))
              : (n = $d(r.zoomLanguageId)),
            n)
          ) {
            let i = Ce(e, r.id);
            (i.previousDetectedLanguage = i.detectedLanguage),
              (i.detectedLanguage = n);
          }
        })
        .addCase(vH, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.detectedMeetingStage = r.stage;
        })
        .addCase(gu, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.files[r.integrationType] = r.file;
        })
        .addCase(_H, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          n.devices[r.deviceId] = r.deviceName;
        })
        .addCase(Jd, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          (n.isPaused = r.isPaused), r.isPaused || (n.isWasUnpaused = !0);
        })
        .addCase(Xd, (e, { payload: r }) => {
          (e.autoPauseEnabled = r),
            r &&
              Object.values(e.current ?? {}).forEach((n) => {
                !n.blocks.length && !n.isWasUnpaused && (n.isPaused = !0);
              });
        })
        .addCase(bH, (e, { payload: r }) => {
          e.current || (e.current = {}), (e.current[r.id] = r.transcript);
        })
        .addCase(Zd, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          Object.assign(
            n,
            lu({ id: r.id, autoPauseEnabled: e.autoPauseEnabled ?? !1 })
          ),
            (n.isPaused = !0),
            (n.consumedAutosave = !1),
            (n.lastAutoSavedAt = void 0),
            (n.meetingId = void 0);
        })
        .addCase(vu, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          (n.notes = {
            ...(n.notes || {}),
            content: r.content,
            version: Date.now(),
          }),
            (n.updatedAt = Jn());
        })
        .addCase(ih, (e) => {
          e.newHighlghts = [];
        })
        .addCase(Sx, (e, { payload: r }) => {
          let n = Ce(e, r.id);
          (n.blocks = r.transcript.blocks),
            (n.notes = r.transcript.notes),
            (n.updatedAt = r.transcript.updatedAt);
        })
        .addCase(nh, (e, { payload: r }) => {
          let { id: n } = r,
            i = Ce(e, r.id);
          if (
            e.current?.[n] &&
            ((e.current[n] = lu({ id: n, autoPauseEnabled: !1 })),
            (e.current[n].partIndex = (i.partIndex ?? 0) + 1),
            (e.current[n].meetingTitle = i.meetingTitle),
            (e.current[n].platform = i.platform),
            (e.current[n].devices = i.devices),
            (e.current[n].detectedLanguage = i.detectedLanguage),
            (e.current[n].userId = i.userId),
            i.lastAutoSavedAt)
          ) {
            let a = i.lastAutoSavedAt;
            e.current[n].blocks = i.blocks.filter((o) => o.timestamp > a);
          }
        })
    );
  var Xn = B("SAVE_MANUALLY"),
    wo = B("SAVE_MANUALLY_FINISHED"),
    Ao = B("DELETE_MANUALLY"),
    ah = B("DELETE_MANUALLY_FINISHED"),
    Ix = B("GET_NOTIFICATIONS"),
    oh = B("GOT_NOTIFICATIONS"),
    Zn = B("SET_LANGUAGE"),
    _u = B("ANALYTICS"),
    OH = B("DISMISS_OPERATION_STATUS"),
    sh = B("SET_INITIAL_STATE"),
    ei = B("SET_SAVED_USER_ID"),
    kH = B("SET_FEATURE_FLAGS"),
    xx = tr(
      {
        operations: {},
        featureFlags: {
          isExtensionDebugModeEnabled: !1,
          isStartAudioRecordingButtonEnabled: !1,
        },
      },
      (t) =>
        t
          .addCase(Xn, (e, { payload: r }) => {
            e.operations || (e.operations = { saves: [], deletes: [] });
            let n = e.operations.saves.find((i) => i.source.id === r.id);
            n
              ? (n.status = "In Progress")
              : e.operations.saves.push({ status: "In Progress", source: r });
          })
          .addCase(wo, (e, { payload: r }) => {
            if (
              (e.operations || (e.operations = { saves: [], deletes: [] }),
              e.operations.saves)
            ) {
              let n = e.operations.saves.findIndex(
                (i) => i.source.id === r.source.id
              );
              n > -1 && e.operations.saves?.splice(n, 1, r);
            }
          })
          .addCase(Ao, (e, { payload: r }) => {
            e.operations || (e.operations = { saves: [], deletes: [] });
            let n = e.operations.deletes.find((i) => i.source.id === r.id);
            n
              ? (n.status = "In Progress")
              : e.operations.deletes.push({ status: "In Progress", source: r });
          })
          .addCase(ah, (e, { payload: r }) => {
            e.operations || (e.operations = { saves: [], deletes: [] });
            let n = e.operations.deletes?.findIndex(
              (i) => i.source.id === r.source.id
            );
            n && n > -1 && e.operations.deletes?.splice(n, 1, r);
          })
          .addCase(OH, (e, { payload: r }) => {
            e.operations || (e.operations = { saves: [], deletes: [] }),
              (e.operations.saves = e.operations.saves?.filter(
                (n) => n.source.id !== r.source.id
              )),
              (e.operations.deletes = e.operations.deletes?.filter(
                (n) => n.source.id !== r.source.id
              ));
          })
          .addCase(oh, (e, { payload: r }) => {
            e.notifications = r;
          })
          .addCase(Zn, (e, r) => {
            e.langId = r.payload;
          })
          .addCase(ir, (e, { payload: r }) => {
            "zoomLanguageId" in r && (e.zoomLangId = r.zoomLanguageId);
          })
          .addCase(sh, (e, { payload: r }) => {
            (e.langId = r.langId),
              (e.zoomLangId = r.zoomLangId),
              (e.languageCode = r.languageCode),
              (e.savedUserId = r.savedUserId),
              (e.installationId = r.installationId);
          })
          .addCase(ei, (e, { payload: r }) => {
            e.savedUserId = r.savedUserId;
          })
          .addCase(kH, (e, { payload: r }) => {
            e.featureFlags = r;
          })
    );
  var Ax = B("SET_LANGUAGE_SELECTION_PROGRESS"),
    Ox = B("SET_CAPTIONS_VISIBILITY_PROGRESS"),
    Lt = B("TOGGLE_WIDGET_STATE"),
    ch = B("HIDE_DISCOVERY_WIDGET"),
    CH = B("SHOW_VIDEO_NOTIFICATION_POPOVER"),
    MH = B("HIDE_VIDEO_NOTIFICATION_POPOVER"),
    uh = B("SET_DISCOVERY_WIDGETS"),
    kx = B("SHOW_ZOOM_POPOVER"),
    Cx = B("SHOW_ZOOM_ALERT_BUTTON"),
    NH = B("SET_SHOW_AUDIO_RECORDING_POPOVER"),
    DH = B("SET_IS_TALL_SIDEBAR"),
    lh = B("SHOW_MSTEAMS_POPOVER"),
    RH = {
      languageChangeState: {},
      captionsChangeState: {},
      showDiscoveryWidget: {
        SCREENSHOTS: !0,
        DOCUMENT: !0,
        LANGUAGE_SWITCHER: !0,
      },
      isWidgetExpanded: !1,
      isTallSidebar: !1,
      showVideoNotificationPopover: !1,
      showZoomPopover: !1,
      showMSTeamsPopover: !1,
      showZoomAlertButton: !1,
      showAudioRecordingPopover: !1,
    },
    Mx = tr(RH, (t) =>
      t
        .addCase(Ax, (e, { payload: r }) => {
          e.languageChangeState[r.id] = r.isInProgress;
        })
        .addCase(Ox, (e, { payload: r }) => {
          e.captionsChangeState[r.id] = r.isInProgress;
        })
        .addCase(Lt, (e, { payload: r }) => {
          e.isWidgetExpanded = r;
        })
        .addCase(ch, (e, { payload: r }) => {
          e.showDiscoveryWidget[r] = !1;
        })
        .addCase(kx, (e, { payload: r }) => {
          e.showZoomPopover = r;
        })
        .addCase(Cx, (e, { payload: r }) => {
          e.showZoomAlertButton = r;
        })
        .addCase(CH, (e) => {
          e.showVideoNotificationPopover = !0;
        })
        .addCase(MH, (e) => {
          e.showVideoNotificationPopover = !1;
        })
        .addCase(DH, (e, { payload: r }) => {
          e.isTallSidebar = r;
        })
        .addCase(uh, (e, { payload: r }) => {
          e.showDiscoveryWidget = r.showDiscovertWidget;
        })
        .addCase(NH, (e, { payload: r }) => {
          e.showAudioRecordingPopover = r;
        })
        .addCase(lh, (e, { payload: r }) => {
          e.showMSTeamsPopover = r;
        })
    );
  var bu,
    FH = new Uint8Array(16);
  function ph() {
    if (
      !bu &&
      ((bu =
        typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)),
      !bu)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    return bu(FH);
  }
  var ot = [];
  for (let t = 0; t < 256; ++t) ot.push((t + 256).toString(16).slice(1));
  function Nx(t, e = 0) {
    return (
      ot[t[e + 0]] +
      ot[t[e + 1]] +
      ot[t[e + 2]] +
      ot[t[e + 3]] +
      "-" +
      ot[t[e + 4]] +
      ot[t[e + 5]] +
      "-" +
      ot[t[e + 6]] +
      ot[t[e + 7]] +
      "-" +
      ot[t[e + 8]] +
      ot[t[e + 9]] +
      "-" +
      ot[t[e + 10]] +
      ot[t[e + 11]] +
      ot[t[e + 12]] +
      ot[t[e + 13]] +
      ot[t[e + 14]] +
      ot[t[e + 15]]
    );
  }
  var PH =
      typeof crypto < "u" &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
    fh = { randomUUID: PH };
  function LH(t, e, r) {
    if (fh.randomUUID && !e && !t) return fh.randomUUID();
    t = t || {};
    let n = t.random || (t.rng || ph)();
    if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), e)) {
      r = r || 0;
      for (let i = 0; i < 16; ++i) e[r + i] = n[i];
      return e;
    }
    return Nx(n);
  }
  var dh = LH;
  var Rx = "user_id",
    Dx = "installation_id",
    gh = "is_widget_expanded",
    Su,
    hh;
  async function ar(t) {
    let e = `v2_${t}`;
    return new Promise((r) => {
      chrome.storage.local.get([e], (n) => {
        let i = n[e];
        r(typeof i < "u" ? JSON.parse(i) : void 0);
      });
    });
  }
  async function jr(t, e) {
    let r = `v2_${t}`;
    return new Promise((n) => {
      chrome.storage.local.set({ [r]: JSON.stringify(e) }, () => {
        n(void 0);
      });
    });
  }
  async function Fx() {
    try {
      let t = (await ar(gh)) ?? "false";
      return typeof t == "boolean" ? t : !1;
    } catch {
      return !1;
    }
  }
  async function Px(t = !1) {
    await jr(gh, t);
  }
  async function Lx() {
    return !!ar(gh);
  }
  async function Tu() {
    if (!Su) {
      let t = await ar(Rx);
      t && (Su = t);
    }
    return Su;
  }
  async function Ux(t) {
    (Su = t), await jr(Rx, t);
  }
  async function zi() {
    if (hh) return hh;
    let t = await ar(Dx);
    return t || ((t = dh()), await jr(Dx, t), (hh = t)), t;
  }
  function $i(t) {
    if (!t) return [];
    let e = t.transcripts.filter(
        (a) =>
          !a.transcript.savedManually &&
          !a.transcript.deleted &&
          a.transcript.updatedAt - a.transcript.createdAt > 3 * 60 * 1e3
      ),
      r = e.filter((a) => !Object.values(a.transcript.files ?? {}).length),
      n = e.filter(
        (a) =>
          Object.values(a.transcript.files ?? {}).length &&
          a.transcript.lastAutoSavedAt &&
          a.transcript.lastAutoSavedAt < a.transcript.updatedAt
      ),
      i = r
        .map((a) => ({ ...a, unsavedCompletely: !0 }))
        .concat(n.map((a) => ({ ...a, unsavedSomewhat: !0 })));
    return i.sort((a, o) => o.transcript.createdAt - a.transcript.createdAt), i;
  }
  async function qx() {
    try {
      let t = await ar("langId");
      if (!t) return;
      let e = parseInt(t);
      return Number.isNaN(e) ? void 0 : e;
    } catch (t) {
      console.debug(t);
      return;
    }
  }
  var Vr = B("GOT_LOCAL_STATE"),
    UH = { list: [], loaded: !1 },
    Bx = tr(UH, (t) =>
      t.addCase(Vr, (e, { payload: r }) => {
        let n = $i(r),
          i = !1;
        for (let a of n) e.list?.find((o) => o.id === a.id) || (i = !0);
        for (let a of e.list || []) n.find((o) => o.id === a.id) || (i = !0);
        i && ((e.list = n), (e.loaded = !0));
      })
    );
  var jx = {
      kind: "Document",
      definitions: [
        {
          kind: "OperationDefinition",
          operation: "subscription",
          name: { kind: "Name", value: "userUpdates" },
          selectionSet: {
            kind: "SelectionSet",
            selections: [
              {
                kind: "Field",
                name: { kind: "Name", value: "user" },
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    { kind: "Field", name: { kind: "Name", value: "id" } },
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "displayName" },
                    },
                    { kind: "Field", name: { kind: "Name", value: "email" } },
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "isChromeExtensionUser" },
                    },
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "isTroubleshooting" },
                    },
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "lastTeamId" },
                    },
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "settings" },
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "autoReplaces" },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "searchValue" },
                                },
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "newValue" },
                                },
                              ],
                            },
                          },
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "autoHighlights" },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "searchValue" },
                                },
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "autoTag" },
                                },
                              ],
                            },
                          },
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "autoPauseEnabled" },
                          },
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "ignoreChat" },
                          },
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "highlightColor" },
                          },
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "lang" },
                          },
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "zoomwcredirect" },
                          },
                          {
                            kind: "Field",
                            name: {
                              kind: "Name",
                              value: "hideAutoHighlightSnacks",
                            },
                          },
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "notifications" },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "transcripts" },
                                  selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                      {
                                        kind: "Field",
                                        name: {
                                          kind: "Name",
                                          value: "extension",
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "meetings" },
                                  selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                      {
                                        kind: "Field",
                                        name: { kind: "Name", value: "chat" },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "tags" },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "icon" },
                                },
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "name" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    { kind: "Field", name: { kind: "Name", value: "isPaid" } },
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "plan" },
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "free" },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "allowance" },
                                },
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "used" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "onboarding" },
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "GoogleMeet" },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "isSelected" },
                                },
                                {
                                  kind: "Field",
                                  name: {
                                    kind: "Name",
                                    value: "isMeetingCompleted",
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "Zoom" },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "isSelected" },
                                },
                                {
                                  kind: "Field",
                                  name: {
                                    kind: "Name",
                                    value: "isMeetingCompleted",
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "Teams" },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "isSelected" },
                                },
                                {
                                  kind: "Field",
                                  name: {
                                    kind: "Name",
                                    value: "isMeetingCompleted",
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "Webex" },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "isSelected" },
                                },
                                {
                                  kind: "Field",
                                  name: {
                                    kind: "Name",
                                    value: "isMeetingCompleted",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    Vx = {
      kind: "Document",
      definitions: [
        {
          kind: "OperationDefinition",
          operation: "mutation",
          name: { kind: "Name", value: "UpdateUserSetting" },
          variableDefinitions: [
            {
              kind: "VariableDefinition",
              variable: {
                kind: "Variable",
                name: { kind: "Name", value: "input" },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "UpdateUserSettingInput" },
                },
              },
            },
          ],
          selectionSet: {
            kind: "SelectionSet",
            selections: [
              {
                kind: "Field",
                name: { kind: "Name", value: "updateUserSetting" },
                arguments: [
                  {
                    kind: "Argument",
                    name: { kind: "Name", value: "input" },
                    value: {
                      kind: "Variable",
                      name: { kind: "Name", value: "input" },
                    },
                  },
                ],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    { kind: "Field", name: { kind: "Name", value: "success" } },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    Wx = {
      kind: "Document",
      definitions: [
        {
          kind: "OperationDefinition",
          operation: "mutation",
          name: { kind: "Name", value: "SetIsChromeExtensionUserFlag" },
          selectionSet: {
            kind: "SelectionSet",
            selections: [
              {
                kind: "Field",
                name: { kind: "Name", value: "setIsChromeExtensionUserFlag" },
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    { kind: "Field", name: { kind: "Name", value: "success" } },
                  ],
                },
              },
            ],
          },
        },
      ],
    };
  var ti = B("UPDATE_USER_DATA"),
    mh = B("UPDATE_CREDIT_USAGE"),
    yh = B("UPDATE_BASIC_DETAILS"),
    Gx = B("SET_USERSETTING"),
    Ut = B("SIGN_OUT"),
    qH = B("HIDE_MUST_RELOGIN"),
    vh = B("SHOW_MUST_SIGNUP"),
    BH = B("HIDE_MUST_SIGNUP"),
    _h = B("SET_MEETIGNS_CHAT_POPOVER"),
    Oo = B("SHOW_CONTENT_SCRIPT_SNACKBAR"),
    Hx = {
      id: "",
      displayName: "",
      email: "",
      isPaid: !1,
      plan: { free: { allowance: 10, used: 0 } },
      settings: {
        autoPauseEnabled: !1,
        notifications: {
          meetings: { chat: "DISABLED" },
          transcripts: { extension: "WHEN_MEETING_ENDED" },
        },
        tags: [],
      },
      onboarding: {
        __typename: "UserOnboarding",
        GoogleMeet: {
          __typename: "UserOnboardingPlatform",
          isSelected: !1,
          isMeetingCompleted: !1,
        },
        Zoom: {
          __typename: "UserOnboardingPlatform",
          isSelected: !1,
          isMeetingCompleted: !1,
        },
        Teams: {
          __typename: "UserOnboardingPlatform",
          isSelected: !1,
          isMeetingCompleted: !1,
        },
        Webex: {
          __typename: "UserOnboardingPlatform",
          isSelected: !1,
          isMeetingCompleted: !1,
        },
      },
      mustRelogin: !1,
      mustSignUp: !1,
      showMeetingsChatPopover: "no",
      isTroubleshooting: !1,
      isChromeExtensionUser: !1,
    },
    zx = tr(Hx, (t) =>
      t
        .addCase(mh, (e, { payload: r }) => {
          (e.plan.free.allowance = r.as_allowance),
            (e.plan.free.used = r.as_used);
        })
        .addCase(yh, (e, { payload: r }) => {
          (e.id = r.uid),
            (e.displayName = r.displayName),
            (e.email = r.email),
            (e.mustRelogin = !1),
            (e.mustSignUp = !1);
        })
        .addCase(ti, (e, { payload: r }) => {
          Object.assign(e, r), (e.mustSignUp = !1);
        })
        .addCase(Ut, (e) => {
          Object.assign(e, Hx), (e.mustRelogin = !0);
        })
        .addCase(qH, (e) => {
          e.mustRelogin = !1;
        })
        .addCase(vh, (e) => {
          e.mustSignUp = !0;
        })
        .addCase(BH, (e) => {
          e.mustSignUp = !1;
        })
        .addCase(_h, (e, { payload: r }) => {
          e.showMeetingsChatPopover = r;
        })
    );
  var Sh = hx(),
    Kx = [Sh];
  fe() || Kx.push((0, $x.createLogger)({ diff: !0, collapsed: !0 }));
  var jH = xI({
    reducer: Pc(bh),
    preloadedState: {
      global: {
        operations: { saves: [], deletes: [] },
        installationId: "",
        featureFlags: {
          isExtensionDebugModeEnabled: !1,
          isStartAudioRecordingButtonEnabled: !1,
        },
      },
      ui: {
        isWidgetExpanded: !1,
        isTallSidebar: !1,
        showDiscoveryWidget: {
          SCREENSHOTS: !1,
          DOCUMENT: !0,
          LANGUAGE_SWITCHER: !1,
        },
        languageChangeState: {},
        captionsChangeState: {},
        showZoomAlertButton: !1,
        showZoomPopover: !1,
        showMSTeamsPopover: !1,
        showVideoNotificationPopover: !1,
        showAudioRecordingPopover: !1,
      },
    },
    middleware: (t) => t().concat(Kx),
  });
  function ve() {
    return jH;
  }
  var Qx = {
      apiKey: "AIzaSyCje8NQSmYgswaQtKIdC980PY1lEgyQ8wM",
      authDomain: "testfirebaseauth-f5df6.firebaseapp.com",
      databaseURL: "https://testfirebaseauth-f5df6.firebaseio.com",
      projectId: "testfirebaseauth-f5df6",
      storageBucket: "testfirebaseauth-f5df6.appspot.com",
      messagingSenderId: "776425480797",
      appId: "1:776425480797:web:16f7b697e290e012bb23b4",
      measurementId: "G-ZDNVCTLGST",
    },
    VH = {
      apiKey: "AIzaSyBIibg6zIb1HLFzHjtBdyEj8fuitje9Wus",
      authDomain: "tactiq-prod-au.firebaseapp.com",
      databaseURL: "https://tactiq-prod-au.firebaseio.com",
      projectId: "tactiq-prod-au",
      storageBucket: "tactiq-prod-au.appspot.com",
      messagingSenderId: "399035273123",
      appId: "1:399035273123:web:0a0d0feae451bf70",
      measurementId: "G-K9TV4YH82E",
    };
  function WH() {
    switch ("production") {
      case "production":
        return VH;
      case "staging":
        return Qx;
      case "development":
        return JSON.parse(
          '{   "projectId": "tactiq-prod-au",  "appId": "1:399035273123:web:0a0d0feae451bf70",  "databaseURL": "https://tactiq-prod-au.firebaseio.com",  "storageBucket": "tactiq-prod-au.appspot.com",  "locationId": "us-central",  "apiKey": "AIzaSyBAhfKLNAWAp0hI04bHPOfuS7MzFxspqvg",  "authDomain": "tactiq-prod-au.firebaseapp.com",  "messagingSenderId": "399035273123" }'
        );
      default:
        throw new Error('Unknown environment type "production"');
    }
  }
  Eu();
  function Eu() {
    let t = WH();
    return (
      re.configure({
        serviceName: `${t.projectId}-ext`,
        serviceVersion: "cb134b4477b11f6f4b61dba07900cbff40ea002e",
        useApi: !0,
      }),
      {
        baseURL: fe()
          ? "https://app.tactiq.io"
          : `https://${t.projectId}.firebaseapp.com`,
        firebaseConfig: t,
      }
    );
  }
  function Th(t) {
    return `${Eu().baseURL}${t}`;
  }
  function ko(t) {
    return `${fe() ? "https://api2.tactiq.io" : Eu().baseURL}${t}`;
  }
  var Eh = "https://api2.tactiq.io/api/2/graphql",
    Yx = Eh.replace("https://", "wss://").replace("http://", "ws://");
  function Jx() {
    return Eu().firebaseConfig;
  }
  async function Iu(t = void 0) {
    let e = await zi();
    if (chrome.runtime.setUninstallURL) {
      let r = t ?? ve()?.getState().user?.id,
        n = ko(r ? `/api/2/u/uninstall/${e}/${r}` : `/api/2/u/uninstall/${e}`);
      chrome.runtime.setUninstallURL(n),
        chrome.runtime.lastError
          ? console.log(
              "Could not set Uninstall URL",
              chrome.runtime.lastError.message
            )
          : console.log("Successfully set uninstall URL");
    }
  }
  var HH = "meet.google.com",
    GH = /^([a-zA-Z0-9](?:[-a-zA-Z0-9]{0,61}[a-zA-Z0-9])?\.)?zoom.us/,
    zH =
      /^(gov\.)?teams\.(microsoft|live)(\.com(\.cas\.ms|\.mcas\.ms|\.mcas-gov\.us)?|.us)$/,
    mn = (t = window.location) => t.host === HH;
  var yn = (t = window.location) => !!t.host.match(GH);
  var Co = (t = window.location) => !!t.host.match(zH);
  var Ih = (t = window.location) =>
    mn(t)
      ? "GOOGLE_MEET"
      : yn(t)
      ? "ZOOM"
      : Co(t)
      ? "MICROSOFT_TEAMS"
      : (console.debug("What is this platform?", t), "UNKNOWN");
  var $H = new Bs({
    appName: "tactiq-extension",
    environment: fe() ? "production" : "development",
    storageProvider: {
      save: async (t, e) =>
        new Promise((r) => {
          chrome.storage.local.set({ [t]: e }, () => {
            r(void 0);
          });
        }),
      get: async (t) =>
        new Promise((e) => {
          chrome.storage.local.get(t, (r) => {
            e(r[t]);
          });
        }),
    },
    fetch: fetch.bind(self),
  });
  var Mo = $H;
  function xu(t) {
    return new Promise(function (e) {
      setTimeout(e, t);
    });
  }
  function dt() {
    return "registration" in self;
  }
  async function qt(t) {
    return new Promise((e) => {
      try {
        chrome.runtime.sendMessage(t, (r) => {
          if (
            typeof r > "u" &&
            chrome.runtime.lastError?.message?.includes(
              "Could not establish connection"
            )
          )
            console.log("Retrying...", fe() ? "" : t.type),
              xu(1e3)
                .then(() => qt(t))
                .then((n) => e(n))
                .catch((n) => re.error(n));
          else return e(r);
        });
      } catch (r) {
        r.message.includes("Extension context invalidated") &&
          window.tactiq.content.disappear();
      }
    });
  }
  async function Xx() {
    let t = await qt({ type: "tactiq.get-current-tab-screenshot" });
    if (t.success && t.screenshot)
      return fetch(t.screenshot).then((e) => e.blob());
  }
  function KH() {
    let t = ve()?.getState().global.installationId;
    !fe() && console.log(`Starting Mixpanel with device ID [${t}]...`),
      Ki.default.init(
        fe()
          ? "01ed30ca1f6ac4cd0d4c3f59d96dbbb8"
          : "9a56981e0851ed25934f43c9cc43dced",
        { ...(t ? { device_id: t } : {}) }
      );
  }
  function wh() {
    return dt() ? void 0 : window;
  }
  function Bt(t, e = void 0, r = void 0) {
    try {
      if (dt()) YH(t, e, r);
      else {
        let n = typeof e == "object" ? e : { status: e };
        qt({
          type: "tactiq.trigger-analytic",
          event: t,
          properties: n,
          windowLocation: wh()?.location,
        });
      }
    } catch (n) {
      console.error(n);
    }
    return !0;
  }
  function QH() {
    return navigator.userAgentData?.brands.find(
      (t) => t.brand !== "Chromium" && t.brand.indexOf("Brand") === -1
    );
  }
  function Ah() {
    return (
      ve()?.getState().user?.id ??
      ve()?.getState().global.savedUserId ??
      ve()?.getState().global.installationId
    );
  }
  function Zx(t = {}, e = void 0) {
    let r = e ?? ve()?.getState().user?.id,
      n = QH(),
      i = wh()?.document?.head?.getAttribute("data-version"),
      a = {
        event: "",
        userId: r,
        ...(r ? { distinct_id: r } : {}),
        isLoggedIn: !1,
        widget: !0,
        version: chrome?.runtime?.getManifest()?.version,
        webstore: XH(),
        browserLanguage: wh()?.navigator?.language,
        browserName: n?.brand,
        browserVersion: n?.version,
        ...(i ? { msTeamsVersion: i } : {}),
        ...t,
      };
    if (!r) {
      let o = ve()?.getState().global.savedUserId;
      o
        ? ((a.userId = o), (a.hasBeenLoggedOut = !0))
        : ((a.isAnonymous = !0),
          (a.anonymousId = ve()?.getState().global.installationId));
    }
    return (
      (a.installationId = ve()?.getState().global.installationId),
      (a.isLoggedIn = !a.isAnonymous && !a.hasBeenLoggedOut),
      a.userId && (a.distinct_id = a.userId),
      a
    );
  }
  async function YH(t, e = void 0, r = void 0, n = void 0) {
    try {
      await iw();
      let i = Zx(e, n);
      (i.event = t),
        r &&
          (mn(r) || yn(r)) &&
          (i.pathnameSHA512 = (0, wu.sha512)(r.pathname)),
        r?.host && ((i.host = r.host), (i.platform = Ih(r)));
      let a = ew(r);
      a && (i.meetingId = a),
        fe() || console.log(t, i),
        Ki.default.track(t, JSON.parse(JSON.stringify(i)));
    } catch (i) {
      console.error(i);
    }
  }
  function ew(t) {
    try {
      if (!t) return;
      let e;
      if (mn(t)) {
        let r = t.pathname.match(/\/(\w+-\w+-\w+)/);
        r && ([, e] = r);
      } else if (yn(t)) {
        let r = t.pathname.match(/\/wc\/(\d+)/);
        r && ([, e] = r);
      }
      return e ? (0, wu.sha512)(e) : void 0;
    } catch {
      return;
    }
  }
  function tw(t, e = void 0, r) {
    return (
      dt()
        ? JH(t, e, r)
        : qt({
            type: "tactiq.trigger-track-page",
            name: t,
            properties: r,
            windowLocation: { ...e },
          }),
      !0
    );
  }
  async function JH(t, e, r) {
    try {
      await iw();
      let n = Zx(r);
      (n.page = t),
        (n.name = t),
        e?.pathname && (n.pathnameSHA512 = (0, wu.sha512)(e.pathname)),
        e?.host && ((n.host = e.host), (n.platform = Ih(e)));
      let i = ew(e);
      i && (n.meetingId = i);
      let a = "Loaded a Page";
      fe() || console.log(`${a} - ${t}`, n),
        Ki.default.track(a, JSON.parse(JSON.stringify(n)));
    } catch (n) {
      console.error(n);
    }
  }
  var xh,
    Wr,
    rw,
    nw = async (t, e) => {
      (Wr = t), (rw = e);
    },
    iw = async () => (
      xh ||
        (xh = (async () => {
          if ((KH(), Wr?.uid && Wr.email))
            try {
              fe() || console.log("Logging into analytics..."),
                Ki.default.identify(Wr.uid),
                Ki.default.people.set({
                  $email: Wr.email,
                  $name: Wr.displayName,
                }),
                await Mo.updateContext({
                  userId: Wr.uid,
                  email: Wr.email,
                  anonymousId: rw,
                }),
                await Iu(Wr.uid);
            } catch (t) {
              console.error(t);
            }
        })()),
      xh
    );
  function XH() {
    let t = chrome?.runtime?.id;
    return t
      ? t === "ldihbakgcndcoojkibjniljbadkanaic"
        ? "Edge"
        : "Chrome"
      : "";
  }
  function ow(t, e) {
    return (
      (function (r) {
        if (Array.isArray(r)) return r;
      })(t) ||
      (function (r, n) {
        var i =
          r == null
            ? null
            : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
        if (i != null) {
          var a,
            o,
            s,
            c,
            u = [],
            l = !0,
            f = !1;
          try {
            if (((s = (i = i.call(r)).next), n === 0)) {
              if (Object(i) !== i) return;
              l = !1;
            } else
              for (
                ;
                !(l = (a = s.call(i)).done) &&
                (u.push(a.value), u.length !== n);
                l = !0
              );
          } catch (p) {
            (f = !0), (o = p);
          } finally {
            try {
              if (!l && i.return != null && ((c = i.return()), Object(c) !== c))
                return;
            } finally {
              if (f) throw o;
            }
          }
          return u;
        }
      })(t, e) ||
      (function (r, n) {
        if (r) {
          if (typeof r == "string") return aw(r, n);
          var i = Object.prototype.toString.call(r).slice(8, -1);
          if (
            (i === "Object" && r.constructor && (i = r.constructor.name),
            i === "Map" || i === "Set")
          )
            return Array.from(r);
          if (
            i === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          )
            return aw(r, n);
        }
      })(t, e) ||
      (function () {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      })()
    );
  }
  function aw(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  var Ow = Fe(Oh()),
    qh = Fe(kh()),
    kw = Fe(Uh());
  function Aw(t) {
    return !(0, Ow.default)(t) && ((0, qh.default)(t) || Array.isArray(t));
  }
  var Bh = function t(e) {
    for (
      var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
      i < r;
      i++
    )
      n[i - 1] = arguments[i];
    return (function (a) {
      if (!Array.isArray(a) && !(0, qh.default)(a)) return a;
      if (Array.isArray(a))
        return a.map(function (p) {
          return Aw(p) ? t.apply(void 0, [p].concat(n)) : p;
        });
      for (var o = {}, s = 0, c = Object.entries(a); s < c.length; s++) {
        var u = ow(c[s], 2),
          l = u[0],
          f = u[1];
        o[l] = Aw(f) ? t.apply(void 0, [f].concat(n)) : f;
      }
      return kw.default.apply(void 0, [o].concat(n));
    })(e);
  };
  var Pre = Fe(Oh()),
    Lre = Fe(kh()),
    Ure = Fe(Uh()),
    qre = Fe(h0());
  var ag = "Invariant Violation",
    g0 = Object.setPrototypeOf,
    y3 =
      g0 === void 0
        ? function (t, e) {
            return (t.__proto__ = e), t;
          }
        : g0,
    zu = (function (t) {
      Le(e, t);
      function e(r) {
        r === void 0 && (r = ag);
        var n =
          t.call(
            this,
            typeof r == "number"
              ? ag +
                  ": " +
                  r +
                  " (see https://github.com/apollographql/invariant-packages)"
              : r
          ) || this;
        return (n.framesToPop = 1), (n.name = ag), y3(n, e.prototype), n;
      }
      return e;
    })(Error);
  function Sn(t, e) {
    if (!t) throw new zu(e);
  }
  var Gu = ["debug", "log", "warn", "error", "silent"],
    og = Gu.indexOf("log");
  function Hu(t) {
    return function () {
      if (Gu.indexOf(t) >= og) {
        var e = console[t] || console.log;
        return e.apply(console, arguments);
      }
    };
  }
  (function (t) {
    (t.debug = Hu("debug")),
      (t.log = Hu("log")),
      (t.warn = Hu("warn")),
      (t.error = Hu("error"));
  })(Sn || (Sn = {}));
  function m0(t) {
    var e = Gu[og];
    return (og = Math.max(0, Gu.indexOf(t))), e;
  }
  var Uo = "3.8.10";
  function ht(t) {
    try {
      return t();
    } catch {}
  }
  var $u =
    ht(function () {
      return globalThis;
    }) ||
    ht(function () {
      return window;
    }) ||
    ht(function () {
      return self;
    }) ||
    ht(function () {
      return globalThis;
    }) ||
    ht(function () {
      return ht.constructor("return this")();
    });
  var y0 = new Map();
  function qo(t) {
    var e = y0.get(t) || 1;
    return (
      y0.set(t, e + 1),
      ""
        .concat(t, ":")
        .concat(e, ":")
        .concat(Math.random().toString(36).slice(2))
    );
  }
  function Ku(t, e) {
    e === void 0 && (e = 0);
    var r = qo("stringifyForDisplay");
    return JSON.stringify(
      t,
      function (n, i) {
        return i === void 0 ? r : i;
      },
      e
    )
      .split(JSON.stringify(r))
      .join("<undefined>");
  }
  function Qu(t) {
    return function (e) {
      for (var r = [], n = 1; n < arguments.length; n++)
        r[n - 1] = arguments[n];
      if (typeof e == "number") {
        var i = e;
        (e = sg(i)), e || ((e = cg(i, r)), (r = []));
      }
      t.apply(void 0, [e].concat(r));
    };
  }
  var z = Object.assign(
    function (e, r) {
      for (var n = [], i = 2; i < arguments.length; i++)
        n[i - 2] = arguments[i];
      e || Sn(e, sg(r, n) || cg(r, n));
    },
    {
      debug: Qu(Sn.debug),
      log: Qu(Sn.log),
      warn: Qu(Sn.warn),
      error: Qu(Sn.error),
    }
  );
  function Te(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    return new zu(sg(t, e) || cg(t, e));
  }
  var v0 = Symbol.for("ApolloErrorMessageHandler_" + Uo);
  function _0(t) {
    return typeof t == "string" ? t : Ku(t, 2).slice(0, 1e3);
  }
  function sg(t, e) {
    if ((e === void 0 && (e = []), !!t)) return $u[v0] && $u[v0](t, e.map(_0));
  }
  function cg(t, e) {
    if ((e === void 0 && (e = []), !!t))
      return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(
        encodeURIComponent(
          JSON.stringify({ version: Uo, message: t, args: e.map(_0) })
        )
      );
  }
  var v3 = globalThis.__DEV__ !== !1;
  function b0(t, e) {
    if (!!!t) throw new Error(e);
  }
  var lg = {
      Name: [],
      Document: ["definitions"],
      OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet",
      ],
      VariableDefinition: ["variable", "type", "defaultValue", "directives"],
      Variable: ["name"],
      SelectionSet: ["selections"],
      Field: ["alias", "name", "arguments", "directives", "selectionSet"],
      Argument: ["name", "value"],
      FragmentSpread: ["name", "directives"],
      InlineFragment: ["typeCondition", "directives", "selectionSet"],
      FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet",
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ["values"],
      ObjectValue: ["fields"],
      ObjectField: ["name", "value"],
      Directive: ["name", "arguments"],
      NamedType: ["name"],
      ListType: ["type"],
      NonNullType: ["type"],
      SchemaDefinition: ["description", "directives", "operationTypes"],
      OperationTypeDefinition: ["type"],
      ScalarTypeDefinition: ["description", "name", "directives"],
      ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields",
      ],
      FieldDefinition: [
        "description",
        "name",
        "arguments",
        "type",
        "directives",
      ],
      InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives",
      ],
      InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields",
      ],
      UnionTypeDefinition: ["description", "name", "directives", "types"],
      EnumTypeDefinition: ["description", "name", "directives", "values"],
      EnumValueDefinition: ["description", "name", "directives"],
      InputObjectTypeDefinition: [
        "description",
        "name",
        "directives",
        "fields",
      ],
      DirectiveDefinition: ["description", "name", "arguments", "locations"],
      SchemaExtension: ["directives", "operationTypes"],
      ScalarTypeExtension: ["name", "directives"],
      ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
      InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
      UnionTypeExtension: ["name", "directives", "types"],
      EnumTypeExtension: ["name", "directives", "values"],
      InputObjectTypeExtension: ["name", "directives", "fields"],
    },
    _3 = new Set(Object.keys(lg));
  function pg(t) {
    let e = t?.kind;
    return typeof e == "string" && _3.has(e);
  }
  var ug;
  (function (t) {
    (t.QUERY = "query"),
      (t.MUTATION = "mutation"),
      (t.SUBSCRIPTION = "subscription");
  })(ug || (ug = {}));
  var Ne;
  (function (t) {
    (t.NAME = "Name"),
      (t.DOCUMENT = "Document"),
      (t.OPERATION_DEFINITION = "OperationDefinition"),
      (t.VARIABLE_DEFINITION = "VariableDefinition"),
      (t.SELECTION_SET = "SelectionSet"),
      (t.FIELD = "Field"),
      (t.ARGUMENT = "Argument"),
      (t.FRAGMENT_SPREAD = "FragmentSpread"),
      (t.INLINE_FRAGMENT = "InlineFragment"),
      (t.FRAGMENT_DEFINITION = "FragmentDefinition"),
      (t.VARIABLE = "Variable"),
      (t.INT = "IntValue"),
      (t.FLOAT = "FloatValue"),
      (t.STRING = "StringValue"),
      (t.BOOLEAN = "BooleanValue"),
      (t.NULL = "NullValue"),
      (t.ENUM = "EnumValue"),
      (t.LIST = "ListValue"),
      (t.OBJECT = "ObjectValue"),
      (t.OBJECT_FIELD = "ObjectField"),
      (t.DIRECTIVE = "Directive"),
      (t.NAMED_TYPE = "NamedType"),
      (t.LIST_TYPE = "ListType"),
      (t.NON_NULL_TYPE = "NonNullType"),
      (t.SCHEMA_DEFINITION = "SchemaDefinition"),
      (t.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
      (t.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
      (t.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
      (t.FIELD_DEFINITION = "FieldDefinition"),
      (t.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
      (t.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
      (t.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
      (t.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
      (t.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
      (t.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
      (t.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
      (t.SCHEMA_EXTENSION = "SchemaExtension"),
      (t.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
      (t.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
      (t.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
      (t.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
      (t.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
      (t.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
  })(Ne || (Ne = {}));
  function fg(t) {
    return t === 9 || t === 32;
  }
  function S0(t, e) {
    let r = t.replace(/"""/g, '\\"""'),
      n = r.split(/\r\n|[\n\r]/g),
      i = n.length === 1,
      a =
        n.length > 1 &&
        n.slice(1).every((d) => d.length === 0 || fg(d.charCodeAt(0))),
      o = r.endsWith('\\"""'),
      s = t.endsWith('"') && !o,
      c = t.endsWith("\\"),
      u = s || c,
      l = !(e != null && e.minimize) && (!i || t.length > 70 || u || a || o),
      f = "",
      p = i && fg(t.charCodeAt(0));
    return (
      ((l && !p) || a) &&
        (f += `
`),
      (f += r),
      (l || u) &&
        (f += `
`),
      '"""' + f + '"""'
    );
  }
  function T0(t) {
    return Yu(t, []);
  }
  function Yu(t, e) {
    switch (typeof t) {
      case "string":
        return JSON.stringify(t);
      case "function":
        return t.name ? `[function ${t.name}]` : "[function]";
      case "object":
        return b3(t, e);
      default:
        return String(t);
    }
  }
  function b3(t, e) {
    if (t === null) return "null";
    if (e.includes(t)) return "[Circular]";
    let r = [...e, t];
    if (S3(t)) {
      let n = t.toJSON();
      if (n !== t) return typeof n == "string" ? n : Yu(n, r);
    } else if (Array.isArray(t)) return E3(t, r);
    return T3(t, r);
  }
  function S3(t) {
    return typeof t.toJSON == "function";
  }
  function T3(t, e) {
    let r = Object.entries(t);
    return r.length === 0
      ? "{}"
      : e.length > 2
      ? "[" + I3(t) + "]"
      : "{ " + r.map(([i, a]) => i + ": " + Yu(a, e)).join(", ") + " }";
  }
  function E3(t, e) {
    if (t.length === 0) return "[]";
    if (e.length > 2) return "[Array]";
    let r = Math.min(10, t.length),
      n = t.length - r,
      i = [];
    for (let a = 0; a < r; ++a) i.push(Yu(t[a], e));
    return (
      n === 1
        ? i.push("... 1 more item")
        : n > 1 && i.push(`... ${n} more items`),
      "[" + i.join(", ") + "]"
    );
  }
  function I3(t) {
    let e = Object.prototype.toString
      .call(t)
      .replace(/^\[object /, "")
      .replace(/]$/, "");
    if (e === "Object" && typeof t.constructor == "function") {
      let r = t.constructor.name;
      if (typeof r == "string" && r !== "") return r;
    }
    return e;
  }
  function E0(t) {
    return `"${t.replace(x3, w3)}"`;
  }
  var x3 = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
  function w3(t) {
    return A3[t.charCodeAt(0)];
  }
  var A3 = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "\\t",
    "\\n",
    "\\u000B",
    "\\f",
    "\\r",
    "\\u000E",
    "\\u000F",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001A",
    "\\u001B",
    "\\u001C",
    "\\u001D",
    "\\u001E",
    "\\u001F",
    "",
    "",
    '\\"',
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\\\",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\u007F",
    "\\u0080",
    "\\u0081",
    "\\u0082",
    "\\u0083",
    "\\u0084",
    "\\u0085",
    "\\u0086",
    "\\u0087",
    "\\u0088",
    "\\u0089",
    "\\u008A",
    "\\u008B",
    "\\u008C",
    "\\u008D",
    "\\u008E",
    "\\u008F",
    "\\u0090",
    "\\u0091",
    "\\u0092",
    "\\u0093",
    "\\u0094",
    "\\u0095",
    "\\u0096",
    "\\u0097",
    "\\u0098",
    "\\u0099",
    "\\u009A",
    "\\u009B",
    "\\u009C",
    "\\u009D",
    "\\u009E",
    "\\u009F",
  ];
  var ai = Object.freeze({});
  function gt(t, e, r = lg) {
    let n = new Map();
    for (let m of Object.values(Ne)) n.set(m, dg(e, m));
    let i,
      a = Array.isArray(t),
      o = [t],
      s = -1,
      c = [],
      u = t,
      l,
      f,
      p = [],
      d = [];
    do {
      s++;
      let m = s === o.length,
        I = m && c.length !== 0;
      if (m) {
        if (
          ((l = d.length === 0 ? void 0 : p[p.length - 1]),
          (u = f),
          (f = d.pop()),
          I)
        )
          if (a) {
            u = u.slice();
            let w = 0;
            for (let [k, _] of c) {
              let A = k - w;
              _ === null ? (u.splice(A, 1), w++) : (u[A] = _);
            }
          } else {
            u = Object.defineProperties(
              {},
              Object.getOwnPropertyDescriptors(u)
            );
            for (let [w, k] of c) u[w] = k;
          }
        (s = i.index),
          (o = i.keys),
          (c = i.edits),
          (a = i.inArray),
          (i = i.prev);
      } else if (f) {
        if (((l = a ? s : o[s]), (u = f[l]), u == null)) continue;
        p.push(l);
      }
      let b;
      if (!Array.isArray(u)) {
        var g, v;
        pg(u) || b0(!1, `Invalid AST Node: ${T0(u)}.`);
        let w = m
          ? (g = n.get(u.kind)) === null || g === void 0
            ? void 0
            : g.leave
          : (v = n.get(u.kind)) === null || v === void 0
          ? void 0
          : v.enter;
        if (((b = w?.call(e, u, l, f, p, d)), b === ai)) break;
        if (b === !1) {
          if (!m) {
            p.pop();
            continue;
          }
        } else if (b !== void 0 && (c.push([l, b]), !m))
          if (pg(b)) u = b;
          else {
            p.pop();
            continue;
          }
      }
      if ((b === void 0 && I && c.push([l, u]), m)) p.pop();
      else {
        var y;
        (i = { inArray: a, index: s, keys: o, edits: c, prev: i }),
          (a = Array.isArray(u)),
          (o = a ? u : (y = r[u.kind]) !== null && y !== void 0 ? y : []),
          (s = -1),
          (c = []),
          f && d.push(f),
          (f = u);
      }
    } while (i !== void 0);
    return c.length !== 0 ? c[c.length - 1][1] : t;
  }
  function dg(t, e) {
    let r = t[e];
    return typeof r == "object"
      ? r
      : typeof r == "function"
      ? { enter: r, leave: void 0 }
      : { enter: t.enter, leave: t.leave };
  }
  function Xu(t) {
    return gt(t, k3);
  }
  var O3 = 80,
    k3 = {
      Name: { leave: (t) => t.value },
      Variable: { leave: (t) => "$" + t.name },
      Document: {
        leave: (t) =>
          $(
            t.definitions,
            `

`
          ),
      },
      OperationDefinition: {
        leave(t) {
          let e = pe("(", $(t.variableDefinitions, ", "), ")"),
            r = $([t.operation, $([t.name, e]), $(t.directives, " ")], " ");
          return (r === "query" ? "" : r + " ") + t.selectionSet;
        },
      },
      VariableDefinition: {
        leave: ({ variable: t, type: e, defaultValue: r, directives: n }) =>
          t + ": " + e + pe(" = ", r) + pe(" ", $(n, " ")),
      },
      SelectionSet: { leave: ({ selections: t }) => or(t) },
      Field: {
        leave({
          alias: t,
          name: e,
          arguments: r,
          directives: n,
          selectionSet: i,
        }) {
          let a = pe("", t, ": ") + e,
            o = a + pe("(", $(r, ", "), ")");
          return (
            o.length > O3 &&
              (o =
                a +
                pe(
                  `(
`,
                  Ju(
                    $(
                      r,
                      `
`
                    )
                  ),
                  `
)`
                )),
            $([o, $(n, " "), i], " ")
          );
        },
      },
      Argument: { leave: ({ name: t, value: e }) => t + ": " + e },
      FragmentSpread: {
        leave: ({ name: t, directives: e }) => "..." + t + pe(" ", $(e, " ")),
      },
      InlineFragment: {
        leave: ({ typeCondition: t, directives: e, selectionSet: r }) =>
          $(["...", pe("on ", t), $(e, " "), r], " "),
      },
      FragmentDefinition: {
        leave: ({
          name: t,
          typeCondition: e,
          variableDefinitions: r,
          directives: n,
          selectionSet: i,
        }) =>
          `fragment ${t}${pe("(", $(r, ", "), ")")} on ${e} ${pe(
            "",
            $(n, " "),
            " "
          )}` + i,
      },
      IntValue: { leave: ({ value: t }) => t },
      FloatValue: { leave: ({ value: t }) => t },
      StringValue: { leave: ({ value: t, block: e }) => (e ? S0(t) : E0(t)) },
      BooleanValue: { leave: ({ value: t }) => (t ? "true" : "false") },
      NullValue: { leave: () => "null" },
      EnumValue: { leave: ({ value: t }) => t },
      ListValue: { leave: ({ values: t }) => "[" + $(t, ", ") + "]" },
      ObjectValue: { leave: ({ fields: t }) => "{" + $(t, ", ") + "}" },
      ObjectField: { leave: ({ name: t, value: e }) => t + ": " + e },
      Directive: {
        leave: ({ name: t, arguments: e }) =>
          "@" + t + pe("(", $(e, ", "), ")"),
      },
      NamedType: { leave: ({ name: t }) => t },
      ListType: { leave: ({ type: t }) => "[" + t + "]" },
      NonNullType: { leave: ({ type: t }) => t + "!" },
      SchemaDefinition: {
        leave: ({ description: t, directives: e, operationTypes: r }) =>
          pe(
            "",
            t,
            `
`
          ) + $(["schema", $(e, " "), or(r)], " "),
      },
      OperationTypeDefinition: {
        leave: ({ operation: t, type: e }) => t + ": " + e,
      },
      ScalarTypeDefinition: {
        leave: ({ description: t, name: e, directives: r }) =>
          pe(
            "",
            t,
            `
`
          ) + $(["scalar", e, $(r, " ")], " "),
      },
      ObjectTypeDefinition: {
        leave: ({
          description: t,
          name: e,
          interfaces: r,
          directives: n,
          fields: i,
        }) =>
          pe(
            "",
            t,
            `
`
          ) +
          $(["type", e, pe("implements ", $(r, " & ")), $(n, " "), or(i)], " "),
      },
      FieldDefinition: {
        leave: ({
          description: t,
          name: e,
          arguments: r,
          type: n,
          directives: i,
        }) =>
          pe(
            "",
            t,
            `
`
          ) +
          e +
          (I0(r)
            ? pe(
                `(
`,
                Ju(
                  $(
                    r,
                    `
`
                  )
                ),
                `
)`
              )
            : pe("(", $(r, ", "), ")")) +
          ": " +
          n +
          pe(" ", $(i, " ")),
      },
      InputValueDefinition: {
        leave: ({
          description: t,
          name: e,
          type: r,
          defaultValue: n,
          directives: i,
        }) =>
          pe(
            "",
            t,
            `
`
          ) + $([e + ": " + r, pe("= ", n), $(i, " ")], " "),
      },
      InterfaceTypeDefinition: {
        leave: ({
          description: t,
          name: e,
          interfaces: r,
          directives: n,
          fields: i,
        }) =>
          pe(
            "",
            t,
            `
`
          ) +
          $(
            ["interface", e, pe("implements ", $(r, " & ")), $(n, " "), or(i)],
            " "
          ),
      },
      UnionTypeDefinition: {
        leave: ({ description: t, name: e, directives: r, types: n }) =>
          pe(
            "",
            t,
            `
`
          ) + $(["union", e, $(r, " "), pe("= ", $(n, " | "))], " "),
      },
      EnumTypeDefinition: {
        leave: ({ description: t, name: e, directives: r, values: n }) =>
          pe(
            "",
            t,
            `
`
          ) + $(["enum", e, $(r, " "), or(n)], " "),
      },
      EnumValueDefinition: {
        leave: ({ description: t, name: e, directives: r }) =>
          pe(
            "",
            t,
            `
`
          ) + $([e, $(r, " ")], " "),
      },
      InputObjectTypeDefinition: {
        leave: ({ description: t, name: e, directives: r, fields: n }) =>
          pe(
            "",
            t,
            `
`
          ) + $(["input", e, $(r, " "), or(n)], " "),
      },
      DirectiveDefinition: {
        leave: ({
          description: t,
          name: e,
          arguments: r,
          repeatable: n,
          locations: i,
        }) =>
          pe(
            "",
            t,
            `
`
          ) +
          "directive @" +
          e +
          (I0(r)
            ? pe(
                `(
`,
                Ju(
                  $(
                    r,
                    `
`
                  )
                ),
                `
)`
              )
            : pe("(", $(r, ", "), ")")) +
          (n ? " repeatable" : "") +
          " on " +
          $(i, " | "),
      },
      SchemaExtension: {
        leave: ({ directives: t, operationTypes: e }) =>
          $(["extend schema", $(t, " "), or(e)], " "),
      },
      ScalarTypeExtension: {
        leave: ({ name: t, directives: e }) =>
          $(["extend scalar", t, $(e, " ")], " "),
      },
      ObjectTypeExtension: {
        leave: ({ name: t, interfaces: e, directives: r, fields: n }) =>
          $(
            [
              "extend type",
              t,
              pe("implements ", $(e, " & ")),
              $(r, " "),
              or(n),
            ],
            " "
          ),
      },
      InterfaceTypeExtension: {
        leave: ({ name: t, interfaces: e, directives: r, fields: n }) =>
          $(
            [
              "extend interface",
              t,
              pe("implements ", $(e, " & ")),
              $(r, " "),
              or(n),
            ],
            " "
          ),
      },
      UnionTypeExtension: {
        leave: ({ name: t, directives: e, types: r }) =>
          $(["extend union", t, $(e, " "), pe("= ", $(r, " | "))], " "),
      },
      EnumTypeExtension: {
        leave: ({ name: t, directives: e, values: r }) =>
          $(["extend enum", t, $(e, " "), or(r)], " "),
      },
      InputObjectTypeExtension: {
        leave: ({ name: t, directives: e, fields: r }) =>
          $(["extend input", t, $(e, " "), or(r)], " "),
      },
    };
  function $(t, e = "") {
    var r;
    return (r = t?.filter((n) => n).join(e)) !== null && r !== void 0 ? r : "";
  }
  function or(t) {
    return pe(
      `{
`,
      Ju(
        $(
          t,
          `
`
        )
      ),
      `
}`
    );
  }
  function pe(t, e, r = "") {
    return e != null && e !== "" ? t + e + r : "";
  }
  function Ju(t) {
    return pe(
      "  ",
      t.replace(
        /\n/g,
        `
  `
      )
    );
  }
  function I0(t) {
    var e;
    return (e = t?.some((r) =>
      r.includes(`
`)
    )) !== null && e !== void 0
      ? e
      : !1;
  }
  function Bo(t) {
    return (
      t.kind === Ne.FIELD ||
      t.kind === Ne.FRAGMENT_SPREAD ||
      t.kind === Ne.INLINE_FRAGMENT
    );
  }
  function sr(t, e) {
    var r = t.directives;
    return !r || !r.length
      ? !0
      : x0(r).every(function (n) {
          var i = n.directive,
            a = n.ifArgument,
            o = !1;
          return (
            a.value.kind === "Variable"
              ? ((o = e && e[a.value.name.value]),
                z(o !== void 0, 66, i.name.value))
              : (o = a.value.value),
            i.name.value === "skip" ? !o : o
          );
        });
  }
  function $r(t, e, r) {
    var n = new Set(t),
      i = n.size;
    return (
      gt(e, {
        Directive: function (a) {
          if (n.delete(a.name.value) && (!r || !n.size)) return ai;
        },
      }),
      r ? !n.size : n.size < i
    );
  }
  function hg(t) {
    return t && $r(["client", "export"], t, !0);
  }
  function j3(t) {
    var e = t.name.value;
    return e === "skip" || e === "include";
  }
  function x0(t) {
    var e = [];
    return (
      t &&
        t.length &&
        t.forEach(function (r) {
          if (j3(r)) {
            var n = r.arguments,
              i = r.name.value;
            z(n && n.length === 1, 67, i);
            var a = n[0];
            z(a.name && a.name.value === "if", 68, i);
            var o = a.value;
            z(o && (o.kind === "Variable" || o.kind === "BooleanValue"), 69, i),
              e.push({ directive: r, ifArgument: a });
          }
        }),
      e
    );
  }
  var V3 = () => Object.create(null),
    { forEach: W3, slice: w0 } = Array.prototype,
    { hasOwnProperty: H3 } = Object.prototype,
    cr = class t {
      constructor(e = !0, r = V3) {
        (this.weakness = e), (this.makeData = r);
      }
      lookup() {
        return this.lookupArray(arguments);
      }
      lookupArray(e) {
        let r = this;
        return (
          W3.call(e, (n) => (r = r.getChildTrie(n))),
          H3.call(r, "data") ? r.data : (r.data = this.makeData(w0.call(e)))
        );
      }
      peek() {
        return this.peekArray(arguments);
      }
      peekArray(e) {
        let r = this;
        for (let n = 0, i = e.length; r && n < i; ++n) {
          let a = r.mapFor(e[n], !1);
          r = a && a.get(e[n]);
        }
        return r && r.data;
      }
      remove() {
        return this.removeArray(arguments);
      }
      removeArray(e) {
        let r;
        if (e.length) {
          let n = e[0],
            i = this.mapFor(n, !1),
            a = i && i.get(n);
          a &&
            ((r = a.removeArray(w0.call(e, 1))),
            !a.data && !a.weak && !(a.strong && a.strong.size) && i.delete(n));
        } else (r = this.data), delete this.data;
        return r;
      }
      getChildTrie(e) {
        let r = this.mapFor(e, !0),
          n = r.get(e);
        return n || r.set(e, (n = new t(this.weakness, this.makeData))), n;
      }
      mapFor(e, r) {
        return this.weakness && G3(e)
          ? this.weak || (r ? (this.weak = new WeakMap()) : void 0)
          : this.strong || (r ? (this.strong = new Map()) : void 0);
      }
    };
  function G3(t) {
    switch (typeof t) {
      case "object":
        if (t === null) break;
      case "function":
        return !0;
    }
    return !1;
  }
  var mt =
      typeof WeakMap == "function" &&
      ht(function () {
        return navigator.product;
      }) !== "ReactNative",
    Zu = typeof WeakSet == "function",
    gg = typeof Symbol == "function" && typeof Symbol.for == "function",
    Tn = gg && Symbol.asyncIterator,
    Yne =
      typeof ht(function () {
        return window.document.createElement;
      }) == "function",
    Jne =
      ht(function () {
        return navigator.userAgent.indexOf("jsdom") >= 0;
      }) || !1;
  function ce(t) {
    return t !== null && typeof t == "object";
  }
  function mg(t, e) {
    var r = e,
      n = [];
    t.definitions.forEach(function (a) {
      if (a.kind === "OperationDefinition")
        throw Te(
          70,
          a.operation,
          a.name ? " named '".concat(a.name.value, "'") : ""
        );
      a.kind === "FragmentDefinition" && n.push(a);
    }),
      typeof r > "u" &&
        (z(n.length === 1, 71, n.length), (r = n[0].name.value));
    var i = x(x({}, t), {
      definitions: Ht(
        [
          {
            kind: "OperationDefinition",
            operation: "query",
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: r } },
              ],
            },
          },
        ],
        t.definitions,
        !0
      ),
    });
    return i;
  }
  function Kr(t) {
    t === void 0 && (t = []);
    var e = {};
    return (
      t.forEach(function (r) {
        e[r.name.value] = r;
      }),
      e
    );
  }
  function Qr(t, e) {
    switch (t.kind) {
      case "InlineFragment":
        return t;
      case "FragmentSpread": {
        var r = t.name.value;
        if (typeof e == "function") return e(r);
        var n = e && e[r];
        return z(n, 72, r), n || null;
      }
      default:
        return null;
    }
  }
  function Ar(t) {
    return { __ref: String(t) };
  }
  function le(t) {
    return !!(t && typeof t == "object" && typeof t.__ref == "string");
  }
  function yg(t) {
    return ce(t) && t.kind === "Document" && Array.isArray(t.definitions);
  }
  function z3(t) {
    return t.kind === "StringValue";
  }
  function $3(t) {
    return t.kind === "BooleanValue";
  }
  function K3(t) {
    return t.kind === "IntValue";
  }
  function Q3(t) {
    return t.kind === "FloatValue";
  }
  function Y3(t) {
    return t.kind === "Variable";
  }
  function J3(t) {
    return t.kind === "ObjectValue";
  }
  function X3(t) {
    return t.kind === "ListValue";
  }
  function Z3(t) {
    return t.kind === "EnumValue";
  }
  function e$(t) {
    return t.kind === "NullValue";
  }
  function En(t, e, r, n) {
    if (K3(r) || Q3(r)) t[e.value] = Number(r.value);
    else if ($3(r) || z3(r)) t[e.value] = r.value;
    else if (J3(r)) {
      var i = {};
      r.fields.map(function (o) {
        return En(i, o.name, o.value, n);
      }),
        (t[e.value] = i);
    } else if (Y3(r)) {
      var a = (n || {})[r.name.value];
      t[e.value] = a;
    } else if (X3(r))
      t[e.value] = r.values.map(function (o) {
        var s = {};
        return En(s, e, o, n), s[e.value];
      });
    else if (Z3(r)) t[e.value] = r.value;
    else if (e$(r)) t[e.value] = null;
    else throw Te(81, e.value, r.kind);
  }
  function vg(t, e) {
    var r = null;
    t.directives &&
      ((r = {}),
      t.directives.forEach(function (i) {
        (r[i.name.value] = {}),
          i.arguments &&
            i.arguments.forEach(function (a) {
              var o = a.name,
                s = a.value;
              return En(r[i.name.value], o, s, e);
            });
      }));
    var n = null;
    return (
      t.arguments &&
        t.arguments.length &&
        ((n = {}),
        t.arguments.forEach(function (i) {
          var a = i.name,
            o = i.value;
          return En(n, a, o, e);
        })),
      Vo(t.name.value, n, r)
    );
  }
  var t$ = [
      "connection",
      "include",
      "skip",
      "client",
      "rest",
      "export",
      "nonreactive",
    ],
    Vo = Object.assign(
      function (t, e, r) {
        if (e && r && r.connection && r.connection.key)
          if (r.connection.filter && r.connection.filter.length > 0) {
            var n = r.connection.filter ? r.connection.filter : [];
            n.sort();
            var i = {};
            return (
              n.forEach(function (s) {
                i[s] = e[s];
              }),
              "".concat(r.connection.key, "(").concat(jo(i), ")")
            );
          } else return r.connection.key;
        var a = t;
        if (e) {
          var o = jo(e);
          a += "(".concat(o, ")");
        }
        return (
          r &&
            Object.keys(r).forEach(function (s) {
              t$.indexOf(s) === -1 &&
                (r[s] && Object.keys(r[s]).length
                  ? (a += "@".concat(s, "(").concat(jo(r[s]), ")"))
                  : (a += "@".concat(s)));
            }),
          a
        );
      },
      {
        setStringify: function (t) {
          var e = jo;
          return (jo = t), e;
        },
      }
    ),
    jo = function (e) {
      return JSON.stringify(e, r$);
    };
  function r$(t, e) {
    return (
      ce(e) &&
        !Array.isArray(e) &&
        (e = Object.keys(e)
          .sort()
          .reduce(function (r, n) {
            return (r[n] = e[n]), r;
          }, {})),
      e
    );
  }
  function Yr(t, e) {
    if (t.arguments && t.arguments.length) {
      var r = {};
      return (
        t.arguments.forEach(function (n) {
          var i = n.name,
            a = n.value;
          return En(r, i, a, e);
        }),
        r
      );
    }
    return null;
  }
  function Ct(t) {
    return t.alias ? t.alias.value : t.name.value;
  }
  function Wo(t, e, r) {
    for (var n, i = 0, a = e.selections; i < a.length; i++) {
      var o = a[i];
      if (At(o)) {
        if (o.name.value === "__typename") return t[Ct(o)];
      } else n ? n.push(o) : (n = [o]);
    }
    if (typeof t.__typename == "string") return t.__typename;
    if (n)
      for (var s = 0, c = n; s < c.length; s++) {
        var o = c[s],
          u = Wo(t, Qr(o, r).selectionSet, r);
        if (typeof u == "string") return u;
      }
  }
  function At(t) {
    return t.kind === "Field";
  }
  function _g(t) {
    return t.kind === "InlineFragment";
  }
  function In(t) {
    z(t && t.kind === "Document", 73);
    var e = t.definitions
      .filter(function (r) {
        return r.kind !== "FragmentDefinition";
      })
      .map(function (r) {
        if (r.kind !== "OperationDefinition") throw Te(74, r.kind);
        return r;
      });
    return z(e.length <= 1, 75, e.length), t;
  }
  function Or(t) {
    return (
      In(t),
      t.definitions.filter(function (e) {
        return e.kind === "OperationDefinition";
      })[0]
    );
  }
  function na(t) {
    return (
      t.definitions
        .filter(function (e) {
          return e.kind === "OperationDefinition" && !!e.name;
        })
        .map(function (e) {
          return e.name.value;
        })[0] || null
    );
  }
  function Jr(t) {
    return t.definitions.filter(function (e) {
      return e.kind === "FragmentDefinition";
    });
  }
  function Ho(t) {
    var e = Or(t);
    return z(e && e.operation === "query", 76), e;
  }
  function bg(t) {
    z(t.kind === "Document", 77), z(t.definitions.length <= 1, 78);
    var e = t.definitions[0];
    return z(e.kind === "FragmentDefinition", 79), e;
  }
  function jt(t) {
    In(t);
    for (var e, r = 0, n = t.definitions; r < n.length; r++) {
      var i = n[r];
      if (i.kind === "OperationDefinition") {
        var a = i.operation;
        if (a === "query" || a === "mutation" || a === "subscription") return i;
      }
      i.kind === "FragmentDefinition" && !e && (e = i);
    }
    if (e) return e;
    throw Te(80);
  }
  function oi(t) {
    var e = Object.create(null),
      r = t && t.variableDefinitions;
    return (
      r &&
        r.length &&
        r.forEach(function (n) {
          n.defaultValue && En(e, n.variable.name, n.defaultValue);
        }),
      e
    );
  }
  function n$(t) {
    return t;
  }
  var Go = (function () {
    function t(e, r) {
      r === void 0 && (r = Object.create(null)),
        (this.resultCache = Zu ? new WeakSet() : new Set()),
        (this.transform = e),
        r.getCacheKey && (this.getCacheKey = r.getCacheKey),
        r.cache !== !1 &&
          (this.stableCacheKeys = new cr(mt, function (n) {
            return { key: n };
          }));
    }
    return (
      (t.prototype.getCacheKey = function (e) {
        return [e];
      }),
      (t.identity = function () {
        return new t(n$, { cache: !1 });
      }),
      (t.split = function (e, r, n) {
        return (
          n === void 0 && (n = t.identity()),
          new t(
            function (i) {
              var a = e(i) ? r : n;
              return a.transformDocument(i);
            },
            { cache: !1 }
          )
        );
      }),
      (t.prototype.transformDocument = function (e) {
        if (this.resultCache.has(e)) return e;
        var r = this.getStableCacheEntry(e);
        if (r && r.value) return r.value;
        In(e);
        var n = this.transform(e);
        return this.resultCache.add(n), r && (r.value = n), n;
      }),
      (t.prototype.concat = function (e) {
        var r = this;
        return new t(
          function (n) {
            return e.transformDocument(r.transformDocument(n));
          },
          { cache: !1 }
        );
      }),
      (t.prototype.getStableCacheEntry = function (e) {
        if (this.stableCacheKeys) {
          var r = this.getCacheKey(e);
          if (r)
            return z(Array.isArray(r), 65), this.stableCacheKeys.lookupArray(r);
        }
      }),
      t
    );
  })();
  var ia = mt ? new WeakMap() : void 0,
    si = function (t) {
      var e;
      return (e = ia?.get(t)), e || ((e = Xu(t)), ia?.set(t, e)), e;
    };
  var be = Array.isArray;
  function st(t) {
    return Array.isArray(t) && t.length > 0;
  }
  var A0 = { kind: Ne.FIELD, name: { kind: Ne.NAME, value: "__typename" } };
  function k0(t, e) {
    return (
      !t ||
      t.selectionSet.selections.every(function (r) {
        return r.kind === Ne.FRAGMENT_SPREAD && k0(e[r.name.value], e);
      })
    );
  }
  function i$(t) {
    return k0(Or(t) || bg(t), Kr(Jr(t))) ? null : t;
  }
  function a$(t) {
    var e = new Map(),
      r = new Map();
    return (
      t.forEach(function (n) {
        n && (n.name ? e.set(n.name, n) : n.test && r.set(n.test, n));
      }),
      function (n) {
        var i = e.get(n.name.value);
        return (
          !i &&
            r.size &&
            r.forEach(function (a, o) {
              o(n) && (i = a);
            }),
          i
        );
      }
    );
  }
  function O0(t) {
    var e = new Map();
    return function (n) {
      n === void 0 && (n = t);
      var i = e.get(n);
      return (
        i ||
          e.set(n, (i = { variables: new Set(), fragmentSpreads: new Set() })),
        i
      );
    };
  }
  function el(t, e) {
    In(e);
    for (
      var r = O0(""),
        n = O0(""),
        i = function (m) {
          for (var I = 0, b = void 0; I < m.length && (b = m[I]); ++I)
            if (!be(b)) {
              if (b.kind === Ne.OPERATION_DEFINITION)
                return r(b.name && b.name.value);
              if (b.kind === Ne.FRAGMENT_DEFINITION) return n(b.name.value);
            }
          return globalThis.__DEV__ !== !1 && z.error(82), null;
        },
        a = 0,
        o = e.definitions.length - 1;
      o >= 0;
      --o
    )
      e.definitions[o].kind === Ne.OPERATION_DEFINITION && ++a;
    var s = a$(t),
      c = function (m) {
        return (
          st(m) &&
          m.map(s).some(function (I) {
            return I && I.remove;
          })
        );
      },
      u = new Map(),
      l = !1,
      f = {
        enter: function (m) {
          if (c(m.directives)) return (l = !0), null;
        },
      },
      p = gt(e, {
        Field: f,
        InlineFragment: f,
        VariableDefinition: {
          enter: function () {
            return !1;
          },
        },
        Variable: {
          enter: function (m, I, b, w, k) {
            var _ = i(k);
            _ && _.variables.add(m.name.value);
          },
        },
        FragmentSpread: {
          enter: function (m, I, b, w, k) {
            if (c(m.directives)) return (l = !0), null;
            var _ = i(k);
            _ && _.fragmentSpreads.add(m.name.value);
          },
        },
        FragmentDefinition: {
          enter: function (m, I, b, w) {
            u.set(JSON.stringify(w), m);
          },
          leave: function (m, I, b, w) {
            var k = u.get(JSON.stringify(w));
            if (m === k) return m;
            if (
              a > 0 &&
              m.selectionSet.selections.every(function (_) {
                return _.kind === Ne.FIELD && _.name.value === "__typename";
              })
            )
              return (n(m.name.value).removed = !0), (l = !0), null;
          },
        },
        Directive: {
          leave: function (m) {
            if (s(m)) return (l = !0), null;
          },
        },
      });
    if (!l) return e;
    var d = function (m) {
        return (
          m.transitiveVars ||
            ((m.transitiveVars = new Set(m.variables)),
            m.removed ||
              m.fragmentSpreads.forEach(function (I) {
                d(n(I)).transitiveVars.forEach(function (b) {
                  m.transitiveVars.add(b);
                });
              })),
          m
        );
      },
      g = new Set();
    p.definitions.forEach(function (m) {
      m.kind === Ne.OPERATION_DEFINITION
        ? d(r(m.name && m.name.value)).fragmentSpreads.forEach(function (I) {
            g.add(I);
          })
        : m.kind === Ne.FRAGMENT_DEFINITION &&
          a === 0 &&
          !n(m.name.value).removed &&
          g.add(m.name.value);
    }),
      g.forEach(function (m) {
        d(n(m)).fragmentSpreads.forEach(function (I) {
          g.add(I);
        });
      });
    var v = function (m) {
        return !!(!g.has(m) || n(m).removed);
      },
      y = {
        enter: function (m) {
          if (v(m.name.value)) return null;
        },
      };
    return i$(
      gt(p, {
        FragmentSpread: y,
        FragmentDefinition: y,
        OperationDefinition: {
          leave: function (m) {
            if (m.variableDefinitions) {
              var I = d(r(m.name && m.name.value)).transitiveVars;
              if (I.size < m.variableDefinitions.length)
                return x(x({}, m), {
                  variableDefinitions: m.variableDefinitions.filter(function (
                    b
                  ) {
                    return I.has(b.variable.name.value);
                  }),
                });
            }
          },
        },
      })
    );
  }
  var ci = Object.assign(
    function (t) {
      return gt(t, {
        SelectionSet: {
          enter: function (e, r, n) {
            if (!(n && n.kind === Ne.OPERATION_DEFINITION)) {
              var i = e.selections;
              if (i) {
                var a = i.some(function (s) {
                  return (
                    At(s) &&
                    (s.name.value === "__typename" ||
                      s.name.value.lastIndexOf("__", 0) === 0)
                  );
                });
                if (!a) {
                  var o = n;
                  if (
                    !(
                      At(o) &&
                      o.directives &&
                      o.directives.some(function (s) {
                        return s.name.value === "export";
                      })
                    )
                  )
                    return x(x({}, e), {
                      selections: Ht(Ht([], i, !0), [A0], !1),
                    });
                }
              }
            }
          },
        },
      });
    },
    {
      added: function (t) {
        return t === A0;
      },
    }
  );
  function Sg(t) {
    var e = jt(t),
      r = e.operation;
    if (r === "query") return t;
    var n = gt(t, {
      OperationDefinition: {
        enter: function (i) {
          return x(x({}, i), { operation: "query" });
        },
      },
    });
    return n;
  }
  function zo(t) {
    In(t);
    var e = el(
      [
        {
          test: function (r) {
            return r.name.value === "client";
          },
          remove: !0,
        },
      ],
      t
    );
    return e;
  }
  var o$ = Object.prototype.hasOwnProperty;
  function Tg() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return $o(t);
  }
  function $o(t) {
    var e = t[0] || {},
      r = t.length;
    if (r > 1) for (var n = new Mt(), i = 1; i < r; ++i) e = n.merge(e, t[i]);
    return e;
  }
  var s$ = function (t, e, r) {
      return this.merge(t[r], e[r]);
    },
    Mt = (function () {
      function t(e) {
        e === void 0 && (e = s$),
          (this.reconciler = e),
          (this.isObject = ce),
          (this.pastCopies = new Set());
      }
      return (
        (t.prototype.merge = function (e, r) {
          for (var n = this, i = [], a = 2; a < arguments.length; a++)
            i[a - 2] = arguments[a];
          return ce(r) && ce(e)
            ? (Object.keys(r).forEach(function (o) {
                if (o$.call(e, o)) {
                  var s = e[o];
                  if (r[o] !== s) {
                    var c = n.reconciler.apply(n, Ht([e, r, o], i, !1));
                    c !== s && ((e = n.shallowCopyForMerge(e)), (e[o] = c));
                  }
                } else (e = n.shallowCopyForMerge(e)), (e[o] = r[o]);
              }),
              e)
            : r;
        }),
        (t.prototype.shallowCopyForMerge = function (e) {
          return (
            ce(e) &&
              (this.pastCopies.has(e) ||
                (Array.isArray(e)
                  ? (e = e.slice(0))
                  : (e = x({ __proto__: Object.getPrototypeOf(e) }, e)),
                this.pastCopies.add(e))),
            e
          );
        }),
        t
      );
    })();
  function c$(t, e) {
    var r = (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
    if (r) return (r = r.call(t)).next.bind(r);
    if (
      Array.isArray(t) ||
      (r = u$(t)) ||
      (e && t && typeof t.length == "number")
    ) {
      r && (t = r);
      var n = 0;
      return function () {
        return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function u$(t, e) {
    if (t) {
      if (typeof t == "string") return C0(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (
        (r === "Object" && t.constructor && (r = t.constructor.name),
        r === "Map" || r === "Set")
      )
        return Array.from(t);
      if (
        r === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return C0(t, e);
    }
  }
  function C0(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  function M0(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function wg(t, e, r) {
    return (
      e && M0(t.prototype, e),
      r && M0(t, r),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  var Ag = function () {
      return typeof Symbol == "function";
    },
    Og = function (t) {
      return Ag() && !!Symbol[t];
    },
    kg = function (t) {
      return Og(t) ? Symbol[t] : "@@" + t;
    };
  Ag() && !Og("observable") && (Symbol.observable = Symbol("observable"));
  var l$ = kg("iterator"),
    Ig = kg("observable"),
    N0 = kg("species");
  function rl(t, e) {
    var r = t[e];
    if (r != null) {
      if (typeof r != "function") throw new TypeError(r + " is not a function");
      return r;
    }
  }
  function Ko(t) {
    var e = t.constructor;
    return (
      e !== void 0 && ((e = e[N0]), e === null && (e = void 0)),
      e !== void 0 ? e : se
    );
  }
  function p$(t) {
    return t instanceof se;
  }
  function aa(t) {
    aa.log
      ? aa.log(t)
      : setTimeout(function () {
          throw t;
        });
  }
  function tl(t) {
    Promise.resolve().then(function () {
      try {
        t();
      } catch (e) {
        aa(e);
      }
    });
  }
  function D0(t) {
    var e = t._cleanup;
    if (e !== void 0 && ((t._cleanup = void 0), !!e))
      try {
        if (typeof e == "function") e();
        else {
          var r = rl(e, "unsubscribe");
          r && r.call(e);
        }
      } catch (n) {
        aa(n);
      }
  }
  function xg(t) {
    (t._observer = void 0), (t._queue = void 0), (t._state = "closed");
  }
  function f$(t) {
    var e = t._queue;
    if (e) {
      (t._queue = void 0), (t._state = "ready");
      for (
        var r = 0;
        r < e.length && (R0(t, e[r].type, e[r].value), t._state !== "closed");
        ++r
      );
    }
  }
  function R0(t, e, r) {
    t._state = "running";
    var n = t._observer;
    try {
      var i = rl(n, e);
      switch (e) {
        case "next":
          i && i.call(n, r);
          break;
        case "error":
          if ((xg(t), i)) i.call(n, r);
          else throw r;
          break;
        case "complete":
          xg(t), i && i.call(n);
          break;
      }
    } catch (a) {
      aa(a);
    }
    t._state === "closed"
      ? D0(t)
      : t._state === "running" && (t._state = "ready");
  }
  function Eg(t, e, r) {
    if (t._state !== "closed") {
      if (t._state === "buffering") {
        t._queue.push({ type: e, value: r });
        return;
      }
      if (t._state !== "ready") {
        (t._state = "buffering"),
          (t._queue = [{ type: e, value: r }]),
          tl(function () {
            return f$(t);
          });
        return;
      }
      R0(t, e, r);
    }
  }
  var d$ = (function () {
      function t(r, n) {
        (this._cleanup = void 0),
          (this._observer = r),
          (this._queue = void 0),
          (this._state = "initializing");
        var i = new h$(this);
        try {
          this._cleanup = n.call(void 0, i);
        } catch (a) {
          i.error(a);
        }
        this._state === "initializing" && (this._state = "ready");
      }
      var e = t.prototype;
      return (
        (e.unsubscribe = function () {
          this._state !== "closed" && (xg(this), D0(this));
        }),
        wg(t, [
          {
            key: "closed",
            get: function () {
              return this._state === "closed";
            },
          },
        ]),
        t
      );
    })(),
    h$ = (function () {
      function t(r) {
        this._subscription = r;
      }
      var e = t.prototype;
      return (
        (e.next = function (n) {
          Eg(this._subscription, "next", n);
        }),
        (e.error = function (n) {
          Eg(this._subscription, "error", n);
        }),
        (e.complete = function () {
          Eg(this._subscription, "complete");
        }),
        wg(t, [
          {
            key: "closed",
            get: function () {
              return this._subscription._state === "closed";
            },
          },
        ]),
        t
      );
    })(),
    se = (function () {
      function t(r) {
        if (!(this instanceof t))
          throw new TypeError("Observable cannot be called as a function");
        if (typeof r != "function")
          throw new TypeError("Observable initializer must be a function");
        this._subscriber = r;
      }
      var e = t.prototype;
      return (
        (e.subscribe = function (n) {
          return (
            (typeof n != "object" || n === null) &&
              (n = { next: n, error: arguments[1], complete: arguments[2] }),
            new d$(n, this._subscriber)
          );
        }),
        (e.forEach = function (n) {
          var i = this;
          return new Promise(function (a, o) {
            if (typeof n != "function") {
              o(new TypeError(n + " is not a function"));
              return;
            }
            function s() {
              c.unsubscribe(), a();
            }
            var c = i.subscribe({
              next: function (u) {
                try {
                  n(u, s);
                } catch (l) {
                  o(l), c.unsubscribe();
                }
              },
              error: o,
              complete: a,
            });
          });
        }),
        (e.map = function (n) {
          var i = this;
          if (typeof n != "function")
            throw new TypeError(n + " is not a function");
          var a = Ko(this);
          return new a(function (o) {
            return i.subscribe({
              next: function (s) {
                try {
                  s = n(s);
                } catch (c) {
                  return o.error(c);
                }
                o.next(s);
              },
              error: function (s) {
                o.error(s);
              },
              complete: function () {
                o.complete();
              },
            });
          });
        }),
        (e.filter = function (n) {
          var i = this;
          if (typeof n != "function")
            throw new TypeError(n + " is not a function");
          var a = Ko(this);
          return new a(function (o) {
            return i.subscribe({
              next: function (s) {
                try {
                  if (!n(s)) return;
                } catch (c) {
                  return o.error(c);
                }
                o.next(s);
              },
              error: function (s) {
                o.error(s);
              },
              complete: function () {
                o.complete();
              },
            });
          });
        }),
        (e.reduce = function (n) {
          var i = this;
          if (typeof n != "function")
            throw new TypeError(n + " is not a function");
          var a = Ko(this),
            o = arguments.length > 1,
            s = !1,
            c = arguments[1],
            u = c;
          return new a(function (l) {
            return i.subscribe({
              next: function (f) {
                var p = !s;
                if (((s = !0), !p || o))
                  try {
                    u = n(u, f);
                  } catch (d) {
                    return l.error(d);
                  }
                else u = f;
              },
              error: function (f) {
                l.error(f);
              },
              complete: function () {
                if (!s && !o)
                  return l.error(
                    new TypeError("Cannot reduce an empty sequence")
                  );
                l.next(u), l.complete();
              },
            });
          });
        }),
        (e.concat = function () {
          for (
            var n = this, i = arguments.length, a = new Array(i), o = 0;
            o < i;
            o++
          )
            a[o] = arguments[o];
          var s = Ko(this);
          return new s(function (c) {
            var u,
              l = 0;
            function f(p) {
              u = p.subscribe({
                next: function (d) {
                  c.next(d);
                },
                error: function (d) {
                  c.error(d);
                },
                complete: function () {
                  l === a.length
                    ? ((u = void 0), c.complete())
                    : f(s.from(a[l++]));
                },
              });
            }
            return (
              f(n),
              function () {
                u && (u.unsubscribe(), (u = void 0));
              }
            );
          });
        }),
        (e.flatMap = function (n) {
          var i = this;
          if (typeof n != "function")
            throw new TypeError(n + " is not a function");
          var a = Ko(this);
          return new a(function (o) {
            var s = [],
              c = i.subscribe({
                next: function (l) {
                  if (n)
                    try {
                      l = n(l);
                    } catch (p) {
                      return o.error(p);
                    }
                  var f = a.from(l).subscribe({
                    next: function (p) {
                      o.next(p);
                    },
                    error: function (p) {
                      o.error(p);
                    },
                    complete: function () {
                      var p = s.indexOf(f);
                      p >= 0 && s.splice(p, 1), u();
                    },
                  });
                  s.push(f);
                },
                error: function (l) {
                  o.error(l);
                },
                complete: function () {
                  u();
                },
              });
            function u() {
              c.closed && s.length === 0 && o.complete();
            }
            return function () {
              s.forEach(function (l) {
                return l.unsubscribe();
              }),
                c.unsubscribe();
            };
          });
        }),
        (e[Ig] = function () {
          return this;
        }),
        (t.from = function (n) {
          var i = typeof this == "function" ? this : t;
          if (n == null) throw new TypeError(n + " is not an object");
          var a = rl(n, Ig);
          if (a) {
            var o = a.call(n);
            if (Object(o) !== o) throw new TypeError(o + " is not an object");
            return p$(o) && o.constructor === i
              ? o
              : new i(function (s) {
                  return o.subscribe(s);
                });
          }
          if (Og("iterator") && ((a = rl(n, l$)), a))
            return new i(function (s) {
              tl(function () {
                if (!s.closed) {
                  for (var c = c$(a.call(n)), u; !(u = c()).done; ) {
                    var l = u.value;
                    if ((s.next(l), s.closed)) return;
                  }
                  s.complete();
                }
              });
            });
          if (Array.isArray(n))
            return new i(function (s) {
              tl(function () {
                if (!s.closed) {
                  for (var c = 0; c < n.length; ++c)
                    if ((s.next(n[c]), s.closed)) return;
                  s.complete();
                }
              });
            });
          throw new TypeError(n + " is not observable");
        }),
        (t.of = function () {
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          var o = typeof this == "function" ? this : t;
          return new o(function (s) {
            tl(function () {
              if (!s.closed) {
                for (var c = 0; c < i.length; ++c)
                  if ((s.next(i[c]), s.closed)) return;
                s.complete();
              }
            });
          });
        }),
        wg(t, null, [
          {
            key: N0,
            get: function () {
              return this;
            },
          },
        ]),
        t
      );
    })();
  Ag() &&
    Object.defineProperty(se, Symbol("extensions"), {
      value: { symbol: Ig, hostReportError: aa },
      configurable: !0,
    });
  function Cg(t) {
    var e,
      r = t.Symbol;
    if (typeof r == "function")
      if (r.observable) e = r.observable;
      else {
        typeof r.for == "function"
          ? (e = r.for("https://github.com/benlesh/symbol-observable"))
          : (e = r("https://github.com/benlesh/symbol-observable"));
        try {
          r.observable = e;
        } catch {}
      }
    else e = "@@observable";
    return e;
  }
  var oa;
  typeof self < "u"
    ? (oa = self)
    : typeof window < "u"
    ? (oa = window)
    : typeof globalThis < "u"
    ? (oa = globalThis)
    : typeof module < "u"
    ? (oa = module)
    : (oa = Function("return this")());
  var Die = Cg(oa);
  var F0 = se.prototype,
    P0 = "@@observable";
  F0[P0] ||
    (F0[P0] = function () {
      return this;
    });
  var g$ = Object.prototype.toString;
  function nl(t) {
    return Mg(t);
  }
  function Mg(t, e) {
    switch (g$.call(t)) {
      case "[object Array]": {
        if (((e = e || new Map()), e.has(t))) return e.get(t);
        var r = t.slice(0);
        return (
          e.set(t, r),
          r.forEach(function (i, a) {
            r[a] = Mg(i, e);
          }),
          r
        );
      }
      case "[object Object]": {
        if (((e = e || new Map()), e.has(t))) return e.get(t);
        var n = Object.create(Object.getPrototypeOf(t));
        return (
          e.set(t, n),
          Object.keys(t).forEach(function (i) {
            n[i] = Mg(t[i], e);
          }),
          n
        );
      }
      default:
        return t;
    }
  }
  function m$(t) {
    var e = new Set([t]);
    return (
      e.forEach(function (r) {
        ce(r) &&
          y$(r) === r &&
          Object.getOwnPropertyNames(r).forEach(function (n) {
            ce(r[n]) && e.add(r[n]);
          });
      }),
      t
    );
  }
  function y$(t) {
    if (globalThis.__DEV__ !== !1 && !Object.isFrozen(t))
      try {
        Object.freeze(t);
      } catch (e) {
        if (e instanceof TypeError) return null;
        throw e;
      }
    return t;
  }
  function Qo(t) {
    return globalThis.__DEV__ !== !1 && m$(t), t;
  }
  function ui(t, e, r) {
    var n = [];
    t.forEach(function (i) {
      return i[e] && n.push(i);
    }),
      n.forEach(function (i) {
        return i[e](r);
      });
  }
  function il(t, e, r) {
    return new se(function (n) {
      var i = {
        then: function (c) {
          return new Promise(function (u) {
            return u(c());
          });
        },
      };
      function a(c, u) {
        return function (l) {
          if (c) {
            var f = function () {
              return n.closed ? 0 : c(l);
            };
            i = i.then(f, f).then(
              function (p) {
                return n.next(p);
              },
              function (p) {
                return n.error(p);
              }
            );
          } else n[u](l);
        };
      }
      var o = {
          next: a(e, "next"),
          error: a(r, "error"),
          complete: function () {
            i.then(function () {
              return n.complete();
            });
          },
        },
        s = t.subscribe(o);
      return function () {
        return s.unsubscribe();
      };
    });
  }
  function al(t) {
    function e(r) {
      Object.defineProperty(t, r, { value: se });
    }
    return gg && Symbol.species && e(Symbol.species), e("@@species"), t;
  }
  function L0(t) {
    return t && typeof t.then == "function";
  }
  var li = (function (t) {
    Le(e, t);
    function e(r) {
      var n =
        t.call(this, function (i) {
          return (
            n.addObserver(i),
            function () {
              return n.removeObserver(i);
            }
          );
        }) || this;
      return (
        (n.observers = new Set()),
        (n.promise = new Promise(function (i, a) {
          (n.resolve = i), (n.reject = a);
        })),
        (n.handlers = {
          next: function (i) {
            n.sub !== null &&
              ((n.latest = ["next", i]),
              n.notify("next", i),
              ui(n.observers, "next", i));
          },
          error: function (i) {
            var a = n.sub;
            a !== null &&
              (a &&
                setTimeout(function () {
                  return a.unsubscribe();
                }),
              (n.sub = null),
              (n.latest = ["error", i]),
              n.reject(i),
              n.notify("error", i),
              ui(n.observers, "error", i));
          },
          complete: function () {
            var i = n,
              a = i.sub,
              o = i.sources,
              s = o === void 0 ? [] : o;
            if (a !== null) {
              var c = s.shift();
              c
                ? L0(c)
                  ? c.then(function (u) {
                      return (n.sub = u.subscribe(n.handlers));
                    })
                  : (n.sub = c.subscribe(n.handlers))
                : (a &&
                    setTimeout(function () {
                      return a.unsubscribe();
                    }),
                  (n.sub = null),
                  n.latest && n.latest[0] === "next"
                    ? n.resolve(n.latest[1])
                    : n.resolve(),
                  n.notify("complete"),
                  ui(n.observers, "complete"));
            }
          },
        }),
        (n.nextResultListeners = new Set()),
        (n.cancel = function (i) {
          n.reject(i), (n.sources = []), n.handlers.complete();
        }),
        n.promise.catch(function (i) {}),
        typeof r == "function" && (r = [new se(r)]),
        L0(r)
          ? r.then(function (i) {
              return n.start(i);
            }, n.handlers.error)
          : n.start(r),
        n
      );
    }
    return (
      (e.prototype.start = function (r) {
        this.sub === void 0 &&
          ((this.sources = Array.from(r)), this.handlers.complete());
      }),
      (e.prototype.deliverLastMessage = function (r) {
        if (this.latest) {
          var n = this.latest[0],
            i = r[n];
          i && i.call(r, this.latest[1]),
            this.sub === null && n === "next" && r.complete && r.complete();
        }
      }),
      (e.prototype.addObserver = function (r) {
        this.observers.has(r) ||
          (this.deliverLastMessage(r), this.observers.add(r));
      }),
      (e.prototype.removeObserver = function (r) {
        this.observers.delete(r) &&
          this.observers.size < 1 &&
          this.handlers.complete();
      }),
      (e.prototype.notify = function (r, n) {
        var i = this.nextResultListeners;
        i.size &&
          ((this.nextResultListeners = new Set()),
          i.forEach(function (a) {
            return a(r, n);
          }));
      }),
      (e.prototype.beforeNext = function (r) {
        var n = !1;
        this.nextResultListeners.add(function (i, a) {
          n || ((n = !0), r(i, a));
        });
      }),
      e
    );
  })(se);
  al(li);
  function xn(t) {
    return "incremental" in t;
  }
  function v$(t) {
    return "hasNext" in t && "data" in t;
  }
  function U0(t) {
    return xn(t) || v$(t);
  }
  function q0(t) {
    return ce(t) && "payload" in t;
  }
  function ol(t, e) {
    var r = t,
      n = new Mt();
    return (
      xn(e) &&
        st(e.incremental) &&
        e.incremental.forEach(function (i) {
          for (var a = i.data, o = i.path, s = o.length - 1; s >= 0; --s) {
            var c = o[s],
              u = !isNaN(+c),
              l = u ? [] : {};
            (l[c] = a), (a = l);
          }
          r = n.merge(r, a);
        }),
      r
    );
  }
  function sa(t) {
    var e = sl(t);
    return st(e);
  }
  function sl(t) {
    var e = st(t.errors) ? t.errors.slice(0) : [];
    return (
      xn(t) &&
        st(t.incremental) &&
        t.incremental.forEach(function (r) {
          r.errors && e.push.apply(e, r.errors);
        }),
      e
    );
  }
  function kr() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var r = Object.create(null);
    return (
      t.forEach(function (n) {
        n &&
          Object.keys(n).forEach(function (i) {
            var a = n[i];
            a !== void 0 && (r[i] = a);
          });
      }),
      r
    );
  }
  function Yo(t, e) {
    return kr(
      t,
      e,
      e.variables && { variables: kr(x(x({}, t && t.variables), e.variables)) }
    );
  }
  function Jo(t) {
    return new se(function (e) {
      e.error(t);
    });
  }
  var cl = function (t, e, r) {
    var n = new Error(r);
    throw (
      ((n.name = "ServerError"),
      (n.response = t),
      (n.statusCode = t.status),
      (n.result = e),
      n)
    );
  };
  function Ng(t) {
    for (
      var e = ["query", "operationName", "variables", "extensions", "context"],
        r = 0,
        n = Object.keys(t);
      r < n.length;
      r++
    ) {
      var i = n[r];
      if (e.indexOf(i) < 0) throw Te(43, i);
    }
    return t;
  }
  function Dg(t, e) {
    var r = x({}, t),
      n = function (a) {
        typeof a == "function" ? (r = x(x({}, r), a(r))) : (r = x(x({}, r), a));
      },
      i = function () {
        return x({}, r);
      };
    return (
      Object.defineProperty(e, "setContext", { enumerable: !1, value: n }),
      Object.defineProperty(e, "getContext", { enumerable: !1, value: i }),
      e
    );
  }
  function Rg(t) {
    var e = {
      variables: t.variables || {},
      extensions: t.extensions || {},
      operationName: t.operationName,
      query: t.query,
    };
    return (
      e.operationName ||
        (e.operationName =
          typeof e.query != "string" ? na(e.query) || void 0 : ""),
      e
    );
  }
  function Fg(t, e) {
    var r = x({}, t),
      n = new Set(Object.keys(t));
    return (
      gt(e, {
        Variable: function (i, a, o) {
          o && o.kind !== "VariableDefinition" && n.delete(i.name.value);
        },
      }),
      n.forEach(function (i) {
        delete r[i];
      }),
      r
    );
  }
  function B0(t, e) {
    return e ? e(t) : se.of();
  }
  function Xo(t) {
    return typeof t == "function" ? new Be(t) : t;
  }
  function ul(t) {
    return t.request.length <= 1;
  }
  var Be = (function () {
    function t(e) {
      e && (this.request = e);
    }
    return (
      (t.empty = function () {
        return new t(function () {
          return se.of();
        });
      }),
      (t.from = function (e) {
        return e.length === 0
          ? t.empty()
          : e.map(Xo).reduce(function (r, n) {
              return r.concat(n);
            });
      }),
      (t.split = function (e, r, n) {
        var i = Xo(r),
          a = Xo(n || new t(B0));
        return ul(i) && ul(a)
          ? new t(function (o) {
              return e(o) ? i.request(o) || se.of() : a.request(o) || se.of();
            })
          : new t(function (o, s) {
              return e(o)
                ? i.request(o, s) || se.of()
                : a.request(o, s) || se.of();
            });
      }),
      (t.execute = function (e, r) {
        return e.request(Dg(r.context, Rg(Ng(r)))) || se.of();
      }),
      (t.concat = function (e, r) {
        var n = Xo(e);
        if (ul(n)) return globalThis.__DEV__ !== !1 && z.warn(35, n), n;
        var i = Xo(r);
        return ul(i)
          ? new t(function (a) {
              return (
                n.request(a, function (o) {
                  return i.request(o) || se.of();
                }) || se.of()
              );
            })
          : new t(function (a, o) {
              return (
                n.request(a, function (s) {
                  return i.request(s, o) || se.of();
                }) || se.of()
              );
            });
      }),
      (t.prototype.split = function (e, r, n) {
        return this.concat(t.split(e, r, n || new t(B0)));
      }),
      (t.prototype.concat = function (e) {
        return t.concat(this, e);
      }),
      (t.prototype.request = function (e, r) {
        throw Te(36);
      }),
      (t.prototype.onError = function (e, r) {
        if (r && r.error) return r.error(e), !1;
        throw e;
      }),
      (t.prototype.setOnError = function (e) {
        return (this.onError = e), this;
      }),
      t
    );
  })();
  var Pg = Be.from;
  var Lg = Be.split;
  var ca = Be.execute;
  function Ug(t) {
    var e,
      r = t[Symbol.asyncIterator]();
    return (
      (e = {
        next: function () {
          return r.next();
        },
      }),
      (e[Symbol.asyncIterator] = function () {
        return this;
      }),
      e
    );
  }
  function qg(t) {
    var e = null,
      r = null,
      n = !1,
      i = [],
      a = [];
    function o(f) {
      if (!r) {
        if (a.length) {
          var p = a.shift();
          if (Array.isArray(p) && p[0]) return p[0]({ value: f, done: !1 });
        }
        i.push(f);
      }
    }
    function s(f) {
      r = f;
      var p = a.slice();
      p.forEach(function (d) {
        d[1](f);
      }),
        !e || e();
    }
    function c() {
      n = !0;
      var f = a.slice();
      f.forEach(function (p) {
        p[0]({ value: void 0, done: !0 });
      }),
        !e || e();
    }
    (e = function () {
      (e = null),
        t.removeListener("data", o),
        t.removeListener("error", s),
        t.removeListener("end", c),
        t.removeListener("finish", c),
        t.removeListener("close", c);
    }),
      t.on("data", o),
      t.on("error", s),
      t.on("end", c),
      t.on("finish", c),
      t.on("close", c);
    function u() {
      return new Promise(function (f, p) {
        if (r) return p(r);
        if (i.length) return f({ value: i.shift(), done: !1 });
        if (n) return f({ value: void 0, done: !0 });
        a.push([f, p]);
      });
    }
    var l = {
      next: function () {
        return u();
      },
    };
    return (
      Tn &&
        (l[Symbol.asyncIterator] = function () {
          return this;
        }),
      l
    );
  }
  function Bg(t) {
    var e = !1,
      r = {
        next: function () {
          return e
            ? Promise.resolve({ value: void 0, done: !0 })
            : ((e = !0),
              new Promise(function (n, i) {
                t.then(function (a) {
                  n({ value: a, done: !1 });
                }).catch(i);
              }));
        },
      };
    return (
      Tn &&
        (r[Symbol.asyncIterator] = function () {
          return this;
        }),
      r
    );
  }
  function ll(t) {
    var e = {
      next: function () {
        return t.read();
      },
    };
    return (
      Tn &&
        (e[Symbol.asyncIterator] = function () {
          return this;
        }),
      e
    );
  }
  function _$(t) {
    return !!t.body;
  }
  function b$(t) {
    return !!t.getReader;
  }
  function S$(t) {
    return !!(Tn && t[Symbol.asyncIterator]);
  }
  function T$(t) {
    return !!t.stream;
  }
  function E$(t) {
    return !!t.arrayBuffer;
  }
  function I$(t) {
    return !!t.pipe;
  }
  function j0(t) {
    var e = t;
    if ((_$(t) && (e = t.body), S$(e))) return Ug(e);
    if (b$(e)) return ll(e.getReader());
    if (T$(e)) return ll(e.stream().getReader());
    if (E$(e)) return Bg(e.arrayBuffer());
    if (I$(e)) return qg(e);
    throw new Error(
      "Unknown body type for responseIterator. Please pass a streamable response."
    );
  }
  var Zo = Symbol();
  function V0(t) {
    return t.extensions ? Array.isArray(t.extensions[Zo]) : !1;
  }
  function W0(t) {
    return t.hasOwnProperty("graphQLErrors");
  }
  var x$ = function (t) {
      var e = Ht(
        Ht(Ht([], t.graphQLErrors, !0), t.clientErrors, !0),
        t.protocolErrors,
        !0
      );
      return (
        t.networkError && e.push(t.networkError),
        e.map(function (r) {
          return (ce(r) && r.message) || "Error message not found.";
        }).join(`
`)
      );
    },
    Xr = (function (t) {
      Le(e, t);
      function e(r) {
        var n = r.graphQLErrors,
          i = r.protocolErrors,
          a = r.clientErrors,
          o = r.networkError,
          s = r.errorMessage,
          c = r.extraInfo,
          u = t.call(this, s) || this;
        return (
          (u.name = "ApolloError"),
          (u.graphQLErrors = n || []),
          (u.protocolErrors = i || []),
          (u.clientErrors = a || []),
          (u.networkError = o || null),
          (u.message = s || x$(u)),
          (u.extraInfo = c),
          (u.__proto__ = e.prototype),
          u
        );
      }
      return e;
    })(Error);
  var H0 = Object.prototype.hasOwnProperty;
  function G0(t, e) {
    var r;
    return Qt(this, void 0, void 0, function () {
      var n, i, a, o, s, c, u, l, f, p, d, g, v, y, m, I, b, w, k, _, A, C, F;
      return Yt(this, function (W) {
        switch (W.label) {
          case 0:
            if (TextDecoder === void 0)
              throw new Error(
                "TextDecoder must be defined in the environment: please import a polyfill."
              );
            (n = new TextDecoder("utf-8")),
              (i =
                (r = t.headers) === null || r === void 0
                  ? void 0
                  : r.get("content-type")),
              (a = "boundary="),
              (o = i?.includes(a)
                ? i
                    ?.substring(i?.indexOf(a) + a.length)
                    .replace(/['"]/g, "")
                    .replace(/\;(.*)/gm, "")
                    .trim()
                : "-"),
              (s = `\r
--`.concat(o)),
              (c = ""),
              (u = j0(t)),
              (l = !0),
              (W.label = 1);
          case 1:
            return l ? [4, u.next()] : [3, 3];
          case 2:
            for (
              f = W.sent(),
                p = f.value,
                d = f.done,
                g = typeof p == "string" ? p : n.decode(p),
                v = c.length - s.length + 1,
                l = !d,
                c += g,
                y = c.indexOf(s, v);
              y > -1;

            ) {
              if (
                ((m = void 0),
                (C = [c.slice(0, y), c.slice(y + s.length)]),
                (m = C[0]),
                (c = C[1]),
                (I = m.indexOf(`\r
\r
`)),
                (b = w$(m.slice(0, I))),
                (w = b["content-type"]),
                w && w.toLowerCase().indexOf("application/json") === -1)
              )
                throw new Error(
                  "Unsupported patch content type: application/json is required."
                );
              if (((k = m.slice(I)), k)) {
                if (
                  ((_ = z0(t, k)),
                  Object.keys(_).length > 1 ||
                    "data" in _ ||
                    "incremental" in _ ||
                    "errors" in _ ||
                    "payload" in _)
                )
                  q0(_)
                    ? ((A = {}),
                      "payload" in _ && (A = x({}, _.payload)),
                      "errors" in _ &&
                        (A = x(x({}, A), {
                          extensions: x(
                            x({}, "extensions" in A ? A.extensions : null),
                            ((F = {}), (F[Zo] = _.errors), F)
                          ),
                        })),
                      e(A))
                    : e(_);
                else if (
                  Object.keys(_).length === 1 &&
                  "hasNext" in _ &&
                  !_.hasNext
                )
                  return [2];
              }
              y = c.indexOf(s);
            }
            return [3, 1];
          case 3:
            return [2];
        }
      });
    });
  }
  function w$(t) {
    var e = {};
    return (
      t
        .split(
          `
`
        )
        .forEach(function (r) {
          var n = r.indexOf(":");
          if (n > -1) {
            var i = r.slice(0, n).trim().toLowerCase(),
              a = r.slice(n + 1).trim();
            e[i] = a;
          }
        }),
      e
    );
  }
  function z0(t, e) {
    if (t.status >= 300) {
      var r = function () {
        try {
          return JSON.parse(e);
        } catch {
          return e;
        }
      };
      cl(
        t,
        r(),
        "Response not successful: Received status code ".concat(t.status)
      );
    }
    try {
      return JSON.parse(e);
    } catch (i) {
      var n = i;
      throw (
        ((n.name = "ServerParseError"),
        (n.response = t),
        (n.statusCode = t.status),
        (n.bodyText = e),
        n)
      );
    }
  }
  function $0(t, e) {
    t.result && t.result.errors && t.result.data && e.next(t.result),
      e.error(t);
  }
  function K0(t) {
    return function (e) {
      return e
        .text()
        .then(function (r) {
          return z0(e, r);
        })
        .then(function (r) {
          return (
            !Array.isArray(r) &&
              !H0.call(r, "data") &&
              !H0.call(r, "errors") &&
              cl(
                e,
                r,
                "Server response was missing for query '".concat(
                  Array.isArray(t)
                    ? t.map(function (n) {
                        return n.operationName;
                      })
                    : t.operationName,
                  "'."
                )
              ),
            r
          );
        });
    };
  }
  var es = function (t, e) {
    var r;
    try {
      r = JSON.stringify(t);
    } catch (i) {
      var n = Te(39, e, i.message);
      throw ((n.parseError = i), n);
    }
    return r;
  };
  var A$ = { includeQuery: !0, includeExtensions: !1, preserveHeaderCase: !1 },
    O$ = { accept: "*/*", "content-type": "application/json" },
    k$ = { method: "POST" },
    Q0 = { http: A$, headers: O$, options: k$ },
    Y0 = function (t, e) {
      return e(t);
    };
  function J0(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    var i = {},
      a = {};
    r.forEach(function (f) {
      (i = x(x(x({}, i), f.options), {
        headers: x(x({}, i.headers), f.headers),
      })),
        f.credentials && (i.credentials = f.credentials),
        (a = x(x({}, a), f.http));
    }),
      i.headers && (i.headers = C$(i.headers, a.preserveHeaderCase));
    var o = t.operationName,
      s = t.extensions,
      c = t.variables,
      u = t.query,
      l = { operationName: o, variables: c };
    return (
      a.includeExtensions && (l.extensions = s),
      a.includeQuery && (l.query = e(u, si)),
      { options: i, body: l }
    );
  }
  function C$(t, e) {
    if (!e) {
      var r = Object.create(null);
      return (
        Object.keys(Object(t)).forEach(function (a) {
          r[a.toLowerCase()] = t[a];
        }),
        r
      );
    }
    var n = Object.create(null);
    Object.keys(Object(t)).forEach(function (a) {
      n[a.toLowerCase()] = { originalName: a, value: t[a] };
    });
    var i = Object.create(null);
    return (
      Object.keys(n).forEach(function (a) {
        i[n[a].originalName] = n[a].value;
      }),
      i
    );
  }
  var X0 = function (t) {
    if (!t && typeof fetch > "u") throw Te(37);
  };
  var Z0 = function (t, e) {
    var r = t.getContext(),
      n = r.uri;
    return n || (typeof e == "function" ? e(t) : e || "/graphql");
  };
  function eA(t, e) {
    var r = [],
      n = function (f, p) {
        r.push("".concat(f, "=").concat(encodeURIComponent(p)));
      };
    if (
      ("query" in e && n("query", e.query),
      e.operationName && n("operationName", e.operationName),
      e.variables)
    ) {
      var i = void 0;
      try {
        i = es(e.variables, "Variables map");
      } catch (f) {
        return { parseError: f };
      }
      n("variables", i);
    }
    if (e.extensions) {
      var a = void 0;
      try {
        a = es(e.extensions, "Extensions map");
      } catch (f) {
        return { parseError: f };
      }
      n("extensions", a);
    }
    var o = "",
      s = t,
      c = t.indexOf("#");
    c !== -1 && ((o = t.substr(c)), (s = t.substr(0, c)));
    var u = s.indexOf("?") === -1 ? "?" : "&",
      l = s + u + r.join("&") + o;
    return { newURI: l };
  }
  var tA = ht(function () {
      return fetch;
    }),
    ts = function (t) {
      t === void 0 && (t = {});
      var e = t.uri,
        r = e === void 0 ? "/graphql" : e,
        n = t.fetch,
        i = t.print,
        a = i === void 0 ? Y0 : i,
        o = t.includeExtensions,
        s = t.preserveHeaderCase,
        c = t.useGETForQueries,
        u = t.includeUnusedVariables,
        l = u === void 0 ? !1 : u,
        f = Ge(t, [
          "uri",
          "fetch",
          "print",
          "includeExtensions",
          "preserveHeaderCase",
          "useGETForQueries",
          "includeUnusedVariables",
        ]);
      globalThis.__DEV__ !== !1 && X0(n || tA);
      var p = {
        http: { includeExtensions: o, preserveHeaderCase: s },
        options: f.fetchOptions,
        credentials: f.credentials,
        headers: f.headers,
      };
      return new Be(function (d) {
        var g = Z0(d, r),
          v = d.getContext(),
          y = {};
        if (v.clientAwareness) {
          var m = v.clientAwareness,
            I = m.name,
            b = m.version;
          I && (y["apollographql-client-name"] = I),
            b && (y["apollographql-client-version"] = b);
        }
        var w = x(x({}, y), v.headers),
          k = {
            http: v.http,
            options: v.fetchOptions,
            credentials: v.credentials,
            headers: w,
          };
        if ($r(["client"], d.query)) {
          var _ = zo(d.query);
          if (!_)
            return Jo(
              new Error(
                "HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."
              )
            );
          d.query = _;
        }
        var A = J0(d, a, Q0, p, k),
          C = A.options,
          F = A.body;
        F.variables && !l && (F.variables = Fg(F.variables, d.query));
        var W;
        !C.signal &&
          typeof AbortController < "u" &&
          ((W = new AbortController()), (C.signal = W.signal));
        var j = function (S) {
            return (
              S.kind === "OperationDefinition" && S.operation === "mutation"
            );
          },
          X = function (S) {
            return (
              S.kind === "OperationDefinition" && S.operation === "subscription"
            );
          },
          P = X(jt(d.query)),
          ie = $r(["defer"], d.query);
        if (
          (c && !d.query.definitions.some(j) && (C.method = "GET"), ie || P)
        ) {
          C.headers = C.headers || {};
          var V = "multipart/mixed;";
          P && ie && globalThis.__DEV__ !== !1 && z.warn(38),
            P
              ? (V += "boundary=graphql;subscriptionSpec=1.0,application/json")
              : ie && (V += "deferSpec=20220824,application/json"),
            (C.headers.accept = V);
        }
        if (C.method === "GET") {
          var ee = eA(g, F),
            R = ee.newURI,
            G = ee.parseError;
          if (G) return Jo(G);
          g = R;
        } else
          try {
            C.body = es(F, "Payload");
          } catch (S) {
            return Jo(S);
          }
        return new se(function (S) {
          var O =
              n ||
              ht(function () {
                return fetch;
              }) ||
              tA,
            E = S.next.bind(S);
          return (
            O(g, C)
              .then(function (N) {
                var D;
                d.setContext({ response: N });
                var Q =
                  (D = N.headers) === null || D === void 0
                    ? void 0
                    : D.get("content-type");
                return Q !== null && /^multipart\/mixed/i.test(Q)
                  ? G0(N, E)
                  : K0(d)(N).then(E);
              })
              .then(function () {
                (W = void 0), S.complete();
              })
              .catch(function (N) {
                (W = void 0), $0(N, S);
              }),
            function () {
              W && W.abort();
            }
          );
        });
      });
    };
  var jg = (function (t) {
    Le(e, t);
    function e(r) {
      r === void 0 && (r = {});
      var n = t.call(this, ts(r).request) || this;
      return (n.options = r), n;
    }
    return e;
  })(Be);
  var { toString: rA, hasOwnProperty: M$ } = Object.prototype,
    nA = Function.prototype.toString,
    Vg = new Map();
  function Ee(t, e) {
    try {
      return Wg(t, e);
    } finally {
      Vg.clear();
    }
  }
  var Hg = Ee;
  function Wg(t, e) {
    if (t === e) return !0;
    let r = rA.call(t),
      n = rA.call(e);
    if (r !== n) return !1;
    switch (r) {
      case "[object Array]":
        if (t.length !== e.length) return !1;
      case "[object Object]": {
        if (aA(t, e)) return !0;
        let i = iA(t),
          a = iA(e),
          o = i.length;
        if (o !== a.length) return !1;
        for (let s = 0; s < o; ++s) if (!M$.call(e, i[s])) return !1;
        for (let s = 0; s < o; ++s) {
          let c = i[s];
          if (!Wg(t[c], e[c])) return !1;
        }
        return !0;
      }
      case "[object Error]":
        return t.name === e.name && t.message === e.message;
      case "[object Number]":
        if (t !== t) return e !== e;
      case "[object Boolean]":
      case "[object Date]":
        return +t == +e;
      case "[object RegExp]":
      case "[object String]":
        return t == `${e}`;
      case "[object Map]":
      case "[object Set]": {
        if (t.size !== e.size) return !1;
        if (aA(t, e)) return !0;
        let i = t.entries(),
          a = r === "[object Map]";
        for (;;) {
          let o = i.next();
          if (o.done) break;
          let [s, c] = o.value;
          if (!e.has(s) || (a && !Wg(c, e.get(s)))) return !1;
        }
        return !0;
      }
      case "[object Uint16Array]":
      case "[object Uint8Array]":
      case "[object Uint32Array]":
      case "[object Int32Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object ArrayBuffer]":
        (t = new Uint8Array(t)), (e = new Uint8Array(e));
      case "[object DataView]": {
        let i = t.byteLength;
        if (i === e.byteLength) for (; i-- && t[i] === e[i]; );
        return i === -1;
      }
      case "[object AsyncFunction]":
      case "[object GeneratorFunction]":
      case "[object AsyncGeneratorFunction]":
      case "[object Function]": {
        let i = nA.call(t);
        return i !== nA.call(e) ? !1 : !R$(i, D$);
      }
    }
    return !1;
  }
  function iA(t) {
    return Object.keys(t).filter(N$, t);
  }
  function N$(t) {
    return this[t] !== void 0;
  }
  var D$ = "{ [native code] }";
  function R$(t, e) {
    let r = t.length - e.length;
    return r >= 0 && t.indexOf(e, r) === r;
  }
  function aA(t, e) {
    let r = Vg.get(t);
    if (r) {
      if (r.has(e)) return !0;
    } else Vg.set(t, (r = new Set()));
    return r.add(e), !1;
  }
  var F$ = () => Object.create(null),
    { forEach: P$, slice: L$ } = Array.prototype,
    { hasOwnProperty: U$ } = Object.prototype,
    pl = class t {
      constructor(e = !0, r = F$) {
        (this.weakness = e), (this.makeData = r);
      }
      lookup(...e) {
        return this.lookupArray(e);
      }
      lookupArray(e) {
        let r = this;
        return (
          P$.call(e, (n) => (r = r.getChildTrie(n))),
          U$.call(r, "data") ? r.data : (r.data = this.makeData(L$.call(e)))
        );
      }
      peek(...e) {
        return this.peekArray(e);
      }
      peekArray(e) {
        let r = this;
        for (let n = 0, i = e.length; r && n < i; ++n) {
          let a = this.weakness && oA(e[n]) ? r.weak : r.strong;
          r = a && a.get(e[n]);
        }
        return r && r.data;
      }
      getChildTrie(e) {
        let r =
            this.weakness && oA(e)
              ? this.weak || (this.weak = new WeakMap())
              : this.strong || (this.strong = new Map()),
          n = r.get(e);
        return n || r.set(e, (n = new t(this.weakness, this.makeData))), n;
      }
    };
  function oA(t) {
    switch (typeof t) {
      case "object":
        if (t === null) break;
      case "function":
        return !0;
    }
    return !1;
  }
  function q$() {}
  var rs = class {
    constructor(e = 1 / 0, r = q$) {
      (this.max = e),
        (this.dispose = r),
        (this.map = new Map()),
        (this.newest = null),
        (this.oldest = null);
    }
    has(e) {
      return this.map.has(e);
    }
    get(e) {
      let r = this.getNode(e);
      return r && r.value;
    }
    get size() {
      return this.map.size;
    }
    getNode(e) {
      let r = this.map.get(e);
      if (r && r !== this.newest) {
        let { older: n, newer: i } = r;
        i && (i.older = n),
          n && (n.newer = i),
          (r.older = this.newest),
          (r.older.newer = r),
          (r.newer = null),
          (this.newest = r),
          r === this.oldest && (this.oldest = i);
      }
      return r;
    }
    set(e, r) {
      let n = this.getNode(e);
      return n
        ? (n.value = r)
        : ((n = { key: e, value: r, newer: null, older: this.newest }),
          this.newest && (this.newest.newer = n),
          (this.newest = n),
          (this.oldest = this.oldest || n),
          this.map.set(e, n),
          n.value);
    }
    clean() {
      for (; this.oldest && this.map.size > this.max; )
        this.delete(this.oldest.key);
    }
    delete(e) {
      let r = this.map.get(e);
      return r
        ? (r === this.newest && (this.newest = r.older),
          r === this.oldest && (this.oldest = r.newer),
          r.newer && (r.newer.older = r.older),
          r.older && (r.older.newer = r.newer),
          this.map.delete(e),
          this.dispose(r.value, e),
          !0)
        : !1;
    }
  };
  var ct = null,
    sA = {},
    B$ = 1,
    j$ = () =>
      class {
        constructor() {
          this.id = [
            "slot",
            B$++,
            Date.now(),
            Math.random().toString(36).slice(2),
          ].join(":");
        }
        hasValue() {
          for (let e = ct; e; e = e.parent)
            if (this.id in e.slots) {
              let r = e.slots[this.id];
              if (r === sA) break;
              return e !== ct && (ct.slots[this.id] = r), !0;
            }
          return ct && (ct.slots[this.id] = sA), !1;
        }
        getValue() {
          if (this.hasValue()) return ct.slots[this.id];
        }
        withValue(e, r, n, i) {
          let a = { __proto__: null, [this.id]: e },
            o = ct;
          ct = { parent: o, slots: a };
          try {
            return r.apply(i, n);
          } finally {
            ct = o;
          }
        }
        static bind(e) {
          let r = ct;
          return function () {
            let n = ct;
            try {
              return (ct = r), e.apply(this, arguments);
            } finally {
              ct = n;
            }
          };
        }
        static noContext(e, r, n) {
          if (ct) {
            let i = ct;
            try {
              return (ct = null), e.apply(n, r);
            } finally {
              ct = i;
            }
          } else return e.apply(n, r);
        }
      };
  function cA(t) {
    try {
      return t();
    } catch {}
  }
  var Gg = "@wry/context:Slot",
    V$ = cA(() => globalThis) || cA(() => globalThis) || Object.create(null),
    uA = V$,
    pi =
      uA[Gg] ||
      Array[Gg] ||
      (function (t) {
        try {
          Object.defineProperty(uA, Gg, {
            value: t,
            enumerable: !1,
            writable: !1,
            configurable: !0,
          });
        } finally {
          return t;
        }
      })(j$());
  var { bind: lA, noContext: pA } = pi;
  var fi = new pi();
  var { hasOwnProperty: fA } = Object.prototype,
    ns =
      Array.from ||
      function (t) {
        let e = [];
        return t.forEach((r) => e.push(r)), e;
      };
  function ua(t) {
    let { unsubscribe: e } = t;
    typeof e == "function" && ((t.unsubscribe = void 0), e());
  }
  var is = [],
    G$ = 100;
  function la(t, e) {
    if (!t) throw new Error(e || "assertion failure");
  }
  function hA(t, e) {
    let r = t.length;
    return r > 0 && r === e.length && t[r - 1] === e[r - 1];
  }
  function gA(t) {
    switch (t.length) {
      case 0:
        throw new Error("unknown value");
      case 1:
        return t[0];
      case 2:
        throw t[1];
    }
  }
  function mA(t) {
    return t.slice(0);
  }
  var as = class t {
    constructor(e) {
      (this.fn = e),
        (this.parents = new Set()),
        (this.childValues = new Map()),
        (this.dirtyChildren = null),
        (this.dirty = !0),
        (this.recomputing = !1),
        (this.value = []),
        (this.deps = null),
        ++t.count;
    }
    peek() {
      if (this.value.length === 1 && !wn(this)) return dA(this), this.value[0];
    }
    recompute(e) {
      return (
        la(!this.recomputing, "already recomputing"),
        dA(this),
        wn(this) ? z$(this, e) : gA(this.value)
      );
    }
    setDirty() {
      this.dirty || ((this.dirty = !0), yA(this), ua(this));
    }
    dispose() {
      this.setDirty(),
        TA(this),
        zg(this, (e, r) => {
          e.setDirty(), EA(e, this);
        });
    }
    forget() {
      this.dispose();
    }
    dependOn(e) {
      e.add(this),
        this.deps || (this.deps = is.pop() || new Set()),
        this.deps.add(e);
    }
    forgetDeps() {
      this.deps &&
        (ns(this.deps).forEach((e) => e.delete(this)),
        this.deps.clear(),
        is.push(this.deps),
        (this.deps = null));
    }
  };
  as.count = 0;
  function dA(t) {
    let e = fi.getValue();
    if (e)
      return (
        t.parents.add(e),
        e.childValues.has(t) || e.childValues.set(t, []),
        wn(t) ? _A(e, t) : bA(e, t),
        e
      );
  }
  function z$(t, e) {
    return TA(t), fi.withValue(t, $$, [t, e]), Q$(t, e) && K$(t), gA(t.value);
  }
  function $$(t, e) {
    t.recomputing = !0;
    let { normalizeResult: r } = t,
      n;
    r && t.value.length === 1 && (n = mA(t.value)), (t.value.length = 0);
    try {
      if (((t.value[0] = t.fn.apply(null, e)), r && n && !hA(n, t.value)))
        try {
          t.value[0] = r(t.value[0], n[0]);
        } catch {}
    } catch (i) {
      t.value[1] = i;
    }
    t.recomputing = !1;
  }
  function wn(t) {
    return t.dirty || !!(t.dirtyChildren && t.dirtyChildren.size);
  }
  function K$(t) {
    (t.dirty = !1), !wn(t) && vA(t);
  }
  function yA(t) {
    zg(t, _A);
  }
  function vA(t) {
    zg(t, bA);
  }
  function zg(t, e) {
    let r = t.parents.size;
    if (r) {
      let n = ns(t.parents);
      for (let i = 0; i < r; ++i) e(n[i], t);
    }
  }
  function _A(t, e) {
    la(t.childValues.has(e)), la(wn(e));
    let r = !wn(t);
    if (!t.dirtyChildren) t.dirtyChildren = is.pop() || new Set();
    else if (t.dirtyChildren.has(e)) return;
    t.dirtyChildren.add(e), r && yA(t);
  }
  function bA(t, e) {
    la(t.childValues.has(e)), la(!wn(e));
    let r = t.childValues.get(e);
    r.length === 0
      ? t.childValues.set(e, mA(e.value))
      : hA(r, e.value) || t.setDirty(),
      SA(t, e),
      !wn(t) && vA(t);
  }
  function SA(t, e) {
    let r = t.dirtyChildren;
    r &&
      (r.delete(e),
      r.size === 0 && (is.length < G$ && is.push(r), (t.dirtyChildren = null)));
  }
  function TA(t) {
    t.childValues.size > 0 &&
      t.childValues.forEach((e, r) => {
        EA(t, r);
      }),
      t.forgetDeps(),
      la(t.dirtyChildren === null);
  }
  function EA(t, e) {
    e.parents.delete(t), t.childValues.delete(e), SA(t, e);
  }
  function Q$(t, e) {
    if (typeof t.subscribe == "function")
      try {
        ua(t), (t.unsubscribe = t.subscribe.apply(null, e));
      } catch {
        return t.setDirty(), !1;
      }
    return !0;
  }
  var Y$ = { setDirty: !0, dispose: !0, forget: !0 };
  function os(t) {
    let e = new Map(),
      r = t && t.subscribe;
    function n(i) {
      let a = fi.getValue();
      if (a) {
        let o = e.get(i);
        o || e.set(i, (o = new Set())),
          a.dependOn(o),
          typeof r == "function" && (ua(o), (o.unsubscribe = r(i)));
      }
    }
    return (
      (n.dirty = function (a, o) {
        let s = e.get(a);
        if (s) {
          let c = o && fA.call(Y$, o) ? o : "setDirty";
          ns(s).forEach((u) => u[c]()), e.delete(a), ua(s);
        }
      }),
      n
    );
  }
  var IA;
  function J$(...t) {
    return (IA || (IA = new pl(typeof WeakMap == "function"))).lookupArray(t);
  }
  var $g = new Set();
  function di(
    t,
    {
      max: e = Math.pow(2, 16),
      keyArgs: r,
      makeCacheKey: n = J$,
      normalizeResult: i,
      subscribe: a,
      cache: o = rs,
    } = Object.create(null)
  ) {
    let s = typeof o == "function" ? new o(e, (p) => p.dispose()) : o,
      c = function () {
        let p = n.apply(null, r ? r.apply(null, arguments) : arguments);
        if (p === void 0) return t.apply(null, arguments);
        let d = s.get(p);
        d ||
          (s.set(p, (d = new as(t))),
          (d.normalizeResult = i),
          (d.subscribe = a),
          (d.forget = () => s.delete(p)));
        let g = d.recompute(Array.prototype.slice.call(arguments));
        return (
          s.set(p, d),
          $g.add(s),
          fi.hasValue() || ($g.forEach((v) => v.clean()), $g.clear()),
          g
        );
      };
    Object.defineProperty(c, "size", {
      get: () => s.size,
      configurable: !1,
      enumerable: !1,
    }),
      Object.freeze(
        (c.options = {
          max: e,
          keyArgs: r,
          makeCacheKey: n,
          normalizeResult: i,
          subscribe: a,
          cache: s,
        })
      );
    function u(p) {
      let d = p && s.get(p);
      d && d.setDirty();
    }
    (c.dirtyKey = u),
      (c.dirty = function () {
        u(n.apply(null, arguments));
      });
    function l(p) {
      let d = p && s.get(p);
      if (d) return d.peek();
    }
    (c.peekKey = l),
      (c.peek = function () {
        return l(n.apply(null, arguments));
      });
    function f(p) {
      return p ? s.delete(p) : !1;
    }
    return (
      (c.forgetKey = f),
      (c.forget = function () {
        return f(n.apply(null, arguments));
      }),
      (c.makeCacheKey = n),
      (c.getKey = r
        ? function () {
            return n.apply(null, r.apply(null, arguments));
          }
        : n),
      Object.freeze(c)
    );
  }
  var Kg = (function () {
    function t() {
      (this.assumeImmutableResults = !1), (this.getFragmentDoc = di(mg));
    }
    return (
      (t.prototype.batch = function (e) {
        var r = this,
          n =
            typeof e.optimistic == "string"
              ? e.optimistic
              : e.optimistic === !1
              ? null
              : void 0,
          i;
        return (
          this.performTransaction(function () {
            return (i = e.update(r));
          }, n),
          i
        );
      }),
      (t.prototype.recordOptimisticTransaction = function (e, r) {
        this.performTransaction(e, r);
      }),
      (t.prototype.transformDocument = function (e) {
        return e;
      }),
      (t.prototype.transformForLink = function (e) {
        return e;
      }),
      (t.prototype.identify = function (e) {}),
      (t.prototype.gc = function () {
        return [];
      }),
      (t.prototype.modify = function (e) {
        return !1;
      }),
      (t.prototype.readQuery = function (e, r) {
        return (
          r === void 0 && (r = !!e.optimistic),
          this.read(
            x(x({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: r })
          )
        );
      }),
      (t.prototype.readFragment = function (e, r) {
        return (
          r === void 0 && (r = !!e.optimistic),
          this.read(
            x(x({}, e), {
              query: this.getFragmentDoc(e.fragment, e.fragmentName),
              rootId: e.id,
              optimistic: r,
            })
          )
        );
      }),
      (t.prototype.writeQuery = function (e) {
        var r = e.id,
          n = e.data,
          i = Ge(e, ["id", "data"]);
        return this.write(
          Object.assign(i, { dataId: r || "ROOT_QUERY", result: n })
        );
      }),
      (t.prototype.writeFragment = function (e) {
        var r = e.id,
          n = e.data,
          i = e.fragment,
          a = e.fragmentName,
          o = Ge(e, ["id", "data", "fragment", "fragmentName"]);
        return this.write(
          Object.assign(o, {
            query: this.getFragmentDoc(i, a),
            dataId: r,
            result: n,
          })
        );
      }),
      (t.prototype.updateQuery = function (e, r) {
        return this.batch({
          update: function (n) {
            var i = n.readQuery(e),
              a = r(i);
            return a == null ? i : (n.writeQuery(x(x({}, e), { data: a })), a);
          },
        });
      }),
      (t.prototype.updateFragment = function (e, r) {
        return this.batch({
          update: function (n) {
            var i = n.readFragment(e),
              a = r(i);
            return a == null
              ? i
              : (n.writeFragment(x(x({}, e), { data: a })), a);
          },
        });
      }),
      t
    );
  })();
  var ss = (function (t) {
    Le(e, t);
    function e(r, n, i, a) {
      var o,
        s = t.call(this, r) || this;
      if (
        ((s.message = r),
        (s.path = n),
        (s.query = i),
        (s.variables = a),
        Array.isArray(s.path))
      ) {
        s.missing = s.message;
        for (var c = s.path.length - 1; c >= 0; --c)
          s.missing = ((o = {}), (o[s.path[c]] = s.missing), o);
      } else s.missing = s.path;
      return (s.__proto__ = e.prototype), s;
    }
    return e;
  })(Error);
  var Ue = Object.prototype.hasOwnProperty;
  function cs(t) {
    return t == null;
  }
  function dl(t, e) {
    var r = t.__typename,
      n = t.id,
      i = t._id;
    if (
      typeof r == "string" &&
      (e && (e.keyObject = cs(n) ? (cs(i) ? void 0 : { _id: i }) : { id: n }),
      cs(n) && !cs(i) && (n = i),
      !cs(n))
    )
      return ""
        .concat(r, ":")
        .concat(
          typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n)
        );
  }
  var xA = {
    dataIdFromObject: dl,
    addTypename: !0,
    resultCaching: !0,
    canonizeResults: !1,
  };
  function wA(t) {
    return kr(xA, t);
  }
  function hl(t) {
    var e = t.canonizeResults;
    return e === void 0 ? xA.canonizeResults : e;
  }
  function AA(t, e) {
    return le(e) ? t.get(e.__ref, "__typename") : e && e.__typename;
  }
  var Qg = /^[_a-z][_0-9a-z]*/i;
  function ur(t) {
    var e = t.match(Qg);
    return e ? e[0] : t;
  }
  function fl(t, e, r) {
    return ce(e)
      ? be(e)
        ? e.every(function (n) {
            return fl(t, n, r);
          })
        : t.selections.every(function (n) {
            if (At(n) && sr(n, r)) {
              var i = Ct(n);
              return (
                Ue.call(e, i) &&
                (!n.selectionSet || fl(n.selectionSet, e[i], r))
              );
            }
            return !0;
          })
      : !1;
  }
  function An(t) {
    return ce(t) && !le(t) && !be(t);
  }
  function OA() {
    return new Mt();
  }
  function gl(t, e) {
    var r = Kr(Jr(t));
    return {
      fragmentMap: r,
      lookupFragment: function (n) {
        var i = r[n];
        return !i && e && (i = e.lookup(n)), i || null;
      },
    };
  }
  var ml = Object.create(null),
    Yg = function () {
      return ml;
    },
    kA = Object.create(null),
    pa = (function () {
      function t(e, r) {
        var n = this;
        (this.policies = e),
          (this.group = r),
          (this.data = Object.create(null)),
          (this.rootIds = Object.create(null)),
          (this.refs = Object.create(null)),
          (this.getFieldValue = function (i, a) {
            return Qo(le(i) ? n.get(i.__ref, a) : i && i[a]);
          }),
          (this.canRead = function (i) {
            return le(i) ? n.has(i.__ref) : typeof i == "object";
          }),
          (this.toReference = function (i, a) {
            if (typeof i == "string") return Ar(i);
            if (le(i)) return i;
            var o = n.policies.identify(i)[0];
            if (o) {
              var s = Ar(o);
              return a && n.merge(o, i), s;
            }
          });
      }
      return (
        (t.prototype.toObject = function () {
          return x({}, this.data);
        }),
        (t.prototype.has = function (e) {
          return this.lookup(e, !0) !== void 0;
        }),
        (t.prototype.get = function (e, r) {
          if ((this.group.depend(e, r), Ue.call(this.data, e))) {
            var n = this.data[e];
            if (n && Ue.call(n, r)) return n[r];
          }
          if (r === "__typename" && Ue.call(this.policies.rootTypenamesById, e))
            return this.policies.rootTypenamesById[e];
          if (this instanceof On) return this.parent.get(e, r);
        }),
        (t.prototype.lookup = function (e, r) {
          if ((r && this.group.depend(e, "__exists"), Ue.call(this.data, e)))
            return this.data[e];
          if (this instanceof On) return this.parent.lookup(e, r);
          if (this.policies.rootTypenamesById[e]) return Object.create(null);
        }),
        (t.prototype.merge = function (e, r) {
          var n = this,
            i;
          le(e) && (e = e.__ref), le(r) && (r = r.__ref);
          var a = typeof e == "string" ? this.lookup((i = e)) : e,
            o = typeof r == "string" ? this.lookup((i = r)) : r;
          if (o) {
            z(typeof i == "string", 1);
            var s = new Mt(Z$).merge(a, o);
            if (
              ((this.data[i] = s),
              s !== a && (delete this.refs[i], this.group.caching))
            ) {
              var c = Object.create(null);
              a || (c.__exists = 1),
                Object.keys(o).forEach(function (u) {
                  if (!a || a[u] !== s[u]) {
                    c[u] = 1;
                    var l = ur(u);
                    l !== u &&
                      !n.policies.hasKeyArgs(s.__typename, l) &&
                      (c[l] = 1),
                      s[u] === void 0 && !(n instanceof On) && delete s[u];
                  }
                }),
                c.__typename &&
                  !(a && a.__typename) &&
                  this.policies.rootTypenamesById[i] === s.__typename &&
                  delete c.__typename,
                Object.keys(c).forEach(function (u) {
                  return n.group.dirty(i, u);
                });
            }
          }
        }),
        (t.prototype.modify = function (e, r) {
          var n = this,
            i = this.lookup(e);
          if (i) {
            var a = Object.create(null),
              o = !1,
              s = !0,
              c = {
                DELETE: ml,
                INVALIDATE: kA,
                isReference: le,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (u, l) {
                  return n.policies.readField(
                    typeof u == "string"
                      ? { fieldName: u, from: l || Ar(e) }
                      : u,
                    { store: n }
                  );
                },
              };
            if (
              (Object.keys(i).forEach(function (u) {
                var l = ur(u),
                  f = i[u];
                if (f !== void 0) {
                  var p = typeof r == "function" ? r : r[u] || r[l];
                  if (p) {
                    var d =
                      p === Yg
                        ? ml
                        : p(
                            Qo(f),
                            x(x({}, c), {
                              fieldName: l,
                              storeFieldName: u,
                              storage: n.getStorage(e, u),
                            })
                          );
                    if (d === kA) n.group.dirty(e, u);
                    else if (
                      (d === ml && (d = void 0),
                      d !== f &&
                        ((a[u] = d),
                        (o = !0),
                        (f = d),
                        globalThis.__DEV__ !== !1))
                    ) {
                      var g = function (k) {
                        if (n.lookup(k.__ref) === void 0)
                          return globalThis.__DEV__ !== !1 && z.warn(2, k), !0;
                      };
                      if (le(d)) g(d);
                      else if (Array.isArray(d))
                        for (
                          var v = !1, y = void 0, m = 0, I = d;
                          m < I.length;
                          m++
                        ) {
                          var b = I[m];
                          if (le(b)) {
                            if (((v = !0), g(b))) break;
                          } else if (typeof b == "object" && b) {
                            var w = n.policies.identify(b)[0];
                            w && (y = b);
                          }
                          if (v && y !== void 0) {
                            globalThis.__DEV__ !== !1 && z.warn(3, y);
                            break;
                          }
                        }
                    }
                  }
                  f !== void 0 && (s = !1);
                }
              }),
              o)
            )
              return (
                this.merge(e, a),
                s &&
                  (this instanceof On
                    ? (this.data[e] = void 0)
                    : delete this.data[e],
                  this.group.dirty(e, "__exists")),
                !0
              );
          }
          return !1;
        }),
        (t.prototype.delete = function (e, r, n) {
          var i,
            a = this.lookup(e);
          if (a) {
            var o = this.getFieldValue(a, "__typename"),
              s =
                r && n
                  ? this.policies.getStoreFieldName({
                      typename: o,
                      fieldName: r,
                      args: n,
                    })
                  : r;
            return this.modify(e, s ? ((i = {}), (i[s] = Yg), i) : Yg);
          }
          return !1;
        }),
        (t.prototype.evict = function (e, r) {
          var n = !1;
          return (
            e.id &&
              (Ue.call(this.data, e.id) &&
                (n = this.delete(e.id, e.fieldName, e.args)),
              this instanceof On &&
                this !== r &&
                (n = this.parent.evict(e, r) || n),
              (e.fieldName || n) &&
                this.group.dirty(e.id, e.fieldName || "__exists")),
            n
          );
        }),
        (t.prototype.clear = function () {
          this.replace(null);
        }),
        (t.prototype.extract = function () {
          var e = this,
            r = this.toObject(),
            n = [];
          return (
            this.getRootIdSet().forEach(function (i) {
              Ue.call(e.policies.rootTypenamesById, i) || n.push(i);
            }),
            n.length && (r.__META = { extraRootIds: n.sort() }),
            r
          );
        }),
        (t.prototype.replace = function (e) {
          var r = this;
          if (
            (Object.keys(this.data).forEach(function (a) {
              (e && Ue.call(e, a)) || r.delete(a);
            }),
            e)
          ) {
            var n = e.__META,
              i = Ge(e, ["__META"]);
            Object.keys(i).forEach(function (a) {
              r.merge(a, i[a]);
            }),
              n && n.extraRootIds.forEach(this.retain, this);
          }
        }),
        (t.prototype.retain = function (e) {
          return (this.rootIds[e] = (this.rootIds[e] || 0) + 1);
        }),
        (t.prototype.release = function (e) {
          if (this.rootIds[e] > 0) {
            var r = --this.rootIds[e];
            return r || delete this.rootIds[e], r;
          }
          return 0;
        }),
        (t.prototype.getRootIdSet = function (e) {
          return (
            e === void 0 && (e = new Set()),
            Object.keys(this.rootIds).forEach(e.add, e),
            this instanceof On
              ? this.parent.getRootIdSet(e)
              : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e),
            e
          );
        }),
        (t.prototype.gc = function () {
          var e = this,
            r = this.getRootIdSet(),
            n = this.toObject();
          r.forEach(function (o) {
            Ue.call(n, o) &&
              (Object.keys(e.findChildRefIds(o)).forEach(r.add, r),
              delete n[o]);
          });
          var i = Object.keys(n);
          if (i.length) {
            for (var a = this; a instanceof On; ) a = a.parent;
            i.forEach(function (o) {
              return a.delete(o);
            });
          }
          return i;
        }),
        (t.prototype.findChildRefIds = function (e) {
          if (!Ue.call(this.refs, e)) {
            var r = (this.refs[e] = Object.create(null)),
              n = this.data[e];
            if (!n) return r;
            var i = new Set([n]);
            i.forEach(function (a) {
              le(a) && (r[a.__ref] = !0),
                ce(a) &&
                  Object.keys(a).forEach(function (o) {
                    var s = a[o];
                    ce(s) && i.add(s);
                  });
            });
          }
          return this.refs[e];
        }),
        (t.prototype.makeCacheKey = function () {
          return this.group.keyMaker.lookupArray(arguments);
        }),
        t
      );
    })();
  var CA = (function () {
    function t(e, r) {
      r === void 0 && (r = null),
        (this.caching = e),
        (this.parent = r),
        (this.d = null),
        this.resetCaching();
    }
    return (
      (t.prototype.resetCaching = function () {
        (this.d = this.caching ? os() : null), (this.keyMaker = new cr(mt));
      }),
      (t.prototype.depend = function (e, r) {
        if (this.d) {
          this.d(Jg(e, r));
          var n = ur(r);
          n !== r && this.d(Jg(e, n)), this.parent && this.parent.depend(e, r);
        }
      }),
      (t.prototype.dirty = function (e, r) {
        this.d &&
          this.d.dirty(Jg(e, r), r === "__exists" ? "forget" : "setDirty");
      }),
      t
    );
  })();
  function Jg(t, e) {
    return e + "#" + t;
  }
  function Xg(t, e) {
    hi(t) && t.group.depend(e, "__exists");
  }
  (function (t) {
    var e = (function (r) {
      Le(n, r);
      function n(i) {
        var a = i.policies,
          o = i.resultCaching,
          s = o === void 0 ? !0 : o,
          c = i.seed,
          u = r.call(this, a, new CA(s)) || this;
        return (
          (u.stump = new X$(u)),
          (u.storageTrie = new cr(mt)),
          c && u.replace(c),
          u
        );
      }
      return (
        (n.prototype.addLayer = function (i, a) {
          return this.stump.addLayer(i, a);
        }),
        (n.prototype.removeLayer = function () {
          return this;
        }),
        (n.prototype.getStorage = function () {
          return this.storageTrie.lookupArray(arguments);
        }),
        n
      );
    })(t);
    t.Root = e;
  })(pa || (pa = {}));
  var On = (function (t) {
      Le(e, t);
      function e(r, n, i, a) {
        var o = t.call(this, n.policies, a) || this;
        return (
          (o.id = r), (o.parent = n), (o.replay = i), (o.group = a), i(o), o
        );
      }
      return (
        (e.prototype.addLayer = function (r, n) {
          return new e(r, this, n, this.group);
        }),
        (e.prototype.removeLayer = function (r) {
          var n = this,
            i = this.parent.removeLayer(r);
          return r === this.id
            ? (this.group.caching &&
                Object.keys(this.data).forEach(function (a) {
                  var o = n.data[a],
                    s = i.lookup(a);
                  s
                    ? o
                      ? o !== s &&
                        Object.keys(o).forEach(function (c) {
                          Ee(o[c], s[c]) || n.group.dirty(a, c);
                        })
                      : (n.group.dirty(a, "__exists"),
                        Object.keys(s).forEach(function (c) {
                          n.group.dirty(a, c);
                        }))
                    : n.delete(a);
                }),
              i)
            : i === this.parent
            ? this
            : i.addLayer(this.id, this.replay);
        }),
        (e.prototype.toObject = function () {
          return x(x({}, this.parent.toObject()), this.data);
        }),
        (e.prototype.findChildRefIds = function (r) {
          var n = this.parent.findChildRefIds(r);
          return Ue.call(this.data, r)
            ? x(x({}, n), t.prototype.findChildRefIds.call(this, r))
            : n;
        }),
        (e.prototype.getStorage = function () {
          for (var r = this.parent; r.parent; ) r = r.parent;
          return r.getStorage.apply(r, arguments);
        }),
        e
      );
    })(pa),
    X$ = (function (t) {
      Le(e, t);
      function e(r) {
        return (
          t.call(
            this,
            "EntityStore.Stump",
            r,
            function () {},
            new CA(r.group.caching, r.group)
          ) || this
        );
      }
      return (
        (e.prototype.removeLayer = function () {
          return this;
        }),
        (e.prototype.merge = function (r, n) {
          return this.parent.merge(r, n);
        }),
        e
      );
    })(On);
  function Z$(t, e, r) {
    var n = t[r],
      i = e[r];
    return Ee(n, i) ? n : i;
  }
  function hi(t) {
    return !!(t instanceof pa && t.group.caching);
  }
  function eK(t) {
    return ce(t)
      ? be(t)
        ? t.slice(0)
        : x({ __proto__: Object.getPrototypeOf(t) }, t)
      : t;
  }
  var yl = (function () {
    function t() {
      (this.known = new (Zu ? WeakSet : Set)()),
        (this.pool = new cr(mt)),
        (this.passes = new WeakMap()),
        (this.keysByJSON = new Map()),
        (this.empty = this.admit({}));
    }
    return (
      (t.prototype.isKnown = function (e) {
        return ce(e) && this.known.has(e);
      }),
      (t.prototype.pass = function (e) {
        if (ce(e)) {
          var r = eK(e);
          return this.passes.set(r, e), r;
        }
        return e;
      }),
      (t.prototype.admit = function (e) {
        var r = this;
        if (ce(e)) {
          var n = this.passes.get(e);
          if (n) return n;
          var i = Object.getPrototypeOf(e);
          switch (i) {
            case Array.prototype: {
              if (this.known.has(e)) return e;
              var a = e.map(this.admit, this),
                o = this.pool.lookupArray(a);
              return (
                o.array ||
                  (this.known.add((o.array = a)),
                  globalThis.__DEV__ !== !1 && Object.freeze(a)),
                o.array
              );
            }
            case null:
            case Object.prototype: {
              if (this.known.has(e)) return e;
              var s = Object.getPrototypeOf(e),
                c = [s],
                u = this.sortedKeys(e);
              c.push(u.json);
              var l = c.length;
              u.sorted.forEach(function (d) {
                c.push(r.admit(e[d]));
              });
              var o = this.pool.lookupArray(c);
              if (!o.object) {
                var f = (o.object = Object.create(s));
                this.known.add(f),
                  u.sorted.forEach(function (d, g) {
                    f[d] = c[l + g];
                  }),
                  globalThis.__DEV__ !== !1 && Object.freeze(f);
              }
              return o.object;
            }
          }
        }
        return e;
      }),
      (t.prototype.sortedKeys = function (e) {
        var r = Object.keys(e),
          n = this.pool.lookupArray(r);
        if (!n.keys) {
          r.sort();
          var i = JSON.stringify(r);
          (n.keys = this.keysByJSON.get(i)) ||
            this.keysByJSON.set(i, (n.keys = { sorted: r, json: i }));
        }
        return n.keys;
      }),
      t
    );
  })();
  var Vt = Object.assign(
      function (t) {
        if (ce(t)) {
          Zg === void 0 && MA();
          var e = Zg.admit(t),
            r = em.get(e);
          return r === void 0 && em.set(e, (r = JSON.stringify(e))), r;
        }
        return JSON.stringify(t);
      },
      { reset: MA }
    ),
    Zg,
    em;
  function MA() {
    (Zg = new yl()), (em = new (mt ? WeakMap : Map)());
  }
  function NA(t) {
    return [
      t.selectionSet,
      t.objectOrReference,
      t.context,
      t.context.canonizeResults,
    ];
  }
  var DA = (function () {
    function t(e) {
      var r = this;
      (this.knownResults = new (mt ? WeakMap : Map)()),
        (this.config = kr(e, {
          addTypename: e.addTypename !== !1,
          canonizeResults: hl(e),
        })),
        (this.canon = e.canon || new yl()),
        (this.executeSelectionSet = di(
          function (n) {
            var i,
              a = n.context.canonizeResults,
              o = NA(n);
            o[3] = !a;
            var s = (i = r.executeSelectionSet).peek.apply(i, o);
            return s
              ? a
                ? x(x({}, s), { result: r.canon.admit(s.result) })
                : s
              : (Xg(n.context.store, n.enclosingRef.__ref),
                r.execSelectionSetImpl(n));
          },
          {
            max: this.config.resultCacheMaxSize,
            keyArgs: NA,
            makeCacheKey: function (n, i, a, o) {
              if (hi(a.store))
                return a.store.makeCacheKey(
                  n,
                  le(i) ? i.__ref : i,
                  a.varString,
                  o
                );
            },
          }
        )),
        (this.executeSubSelectedArray = di(
          function (n) {
            return (
              Xg(n.context.store, n.enclosingRef.__ref),
              r.execSubSelectedArrayImpl(n)
            );
          },
          {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (n) {
              var i = n.field,
                a = n.array,
                o = n.context;
              if (hi(o.store)) return o.store.makeCacheKey(i, a, o.varString);
            },
          }
        ));
    }
    return (
      (t.prototype.resetCanon = function () {
        this.canon = new yl();
      }),
      (t.prototype.diffQueryAgainstStore = function (e) {
        var r = e.store,
          n = e.query,
          i = e.rootId,
          a = i === void 0 ? "ROOT_QUERY" : i,
          o = e.variables,
          s = e.returnPartialData,
          c = s === void 0 ? !0 : s,
          u = e.canonizeResults,
          l = u === void 0 ? this.config.canonizeResults : u,
          f = this.config.cache.policies;
        o = x(x({}, oi(Ho(n))), o);
        var p = Ar(a),
          d = this.executeSelectionSet({
            selectionSet: jt(n).selectionSet,
            objectOrReference: p,
            enclosingRef: p,
            context: x(
              {
                store: r,
                query: n,
                policies: f,
                variables: o,
                varString: Vt(o),
                canonizeResults: l,
              },
              gl(n, this.config.fragments)
            ),
          }),
          g;
        if (d.missing && ((g = [new ss(tK(d.missing), d.missing, n, o)]), !c))
          throw g[0];
        return { result: d.result, complete: !g, missing: g };
      }),
      (t.prototype.isFresh = function (e, r, n, i) {
        if (hi(i.store) && this.knownResults.get(e) === n) {
          var a = this.executeSelectionSet.peek(n, r, i, this.canon.isKnown(e));
          if (a && e === a.result) return !0;
        }
        return !1;
      }),
      (t.prototype.execSelectionSetImpl = function (e) {
        var r = this,
          n = e.selectionSet,
          i = e.objectOrReference,
          a = e.enclosingRef,
          o = e.context;
        if (
          le(i) &&
          !o.policies.rootTypenamesById[i.__ref] &&
          !o.store.has(i.__ref)
        )
          return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(
              i.__ref,
              " object"
            ),
          };
        var s = o.variables,
          c = o.policies,
          u = o.store,
          l = u.getFieldValue(i, "__typename"),
          f = [],
          p,
          d = new Mt();
        this.config.addTypename &&
          typeof l == "string" &&
          !c.rootIdsByTypename[l] &&
          f.push({ __typename: l });
        function g(b, w) {
          var k;
          return (
            b.missing && (p = d.merge(p, ((k = {}), (k[w] = b.missing), k))),
            b.result
          );
        }
        var v = new Set(n.selections);
        v.forEach(function (b) {
          var w, k;
          if (sr(b, s))
            if (At(b)) {
              var _ = c.readField(
                  {
                    fieldName: b.name.value,
                    field: b,
                    variables: o.variables,
                    from: i,
                  },
                  o
                ),
                A = Ct(b);
              _ === void 0
                ? ci.added(b) ||
                  (p = d.merge(
                    p,
                    ((w = {}),
                    (w[A] = "Can't find field '"
                      .concat(b.name.value, "' on ")
                      .concat(
                        le(i)
                          ? i.__ref + " object"
                          : "object " + JSON.stringify(i, null, 2)
                      )),
                    w)
                  ))
                : be(_)
                ? (_ = g(
                    r.executeSubSelectedArray({
                      field: b,
                      array: _,
                      enclosingRef: a,
                      context: o,
                    }),
                    A
                  ))
                : b.selectionSet
                ? _ != null &&
                  (_ = g(
                    r.executeSelectionSet({
                      selectionSet: b.selectionSet,
                      objectOrReference: _,
                      enclosingRef: le(_) ? _ : a,
                      context: o,
                    }),
                    A
                  ))
                : o.canonizeResults && (_ = r.canon.pass(_)),
                _ !== void 0 && f.push(((k = {}), (k[A] = _), k));
            } else {
              var C = Qr(b, o.lookupFragment);
              if (!C && b.kind === Ne.FRAGMENT_SPREAD)
                throw Te(9, b.name.value);
              C &&
                c.fragmentMatches(C, l) &&
                C.selectionSet.selections.forEach(v.add, v);
            }
        });
        var y = $o(f),
          m = { result: y, missing: p },
          I = o.canonizeResults ? this.canon.admit(m) : Qo(m);
        return I.result && this.knownResults.set(I.result, n), I;
      }),
      (t.prototype.execSubSelectedArrayImpl = function (e) {
        var r = this,
          n = e.field,
          i = e.array,
          a = e.enclosingRef,
          o = e.context,
          s,
          c = new Mt();
        function u(l, f) {
          var p;
          return (
            l.missing && (s = c.merge(s, ((p = {}), (p[f] = l.missing), p))),
            l.result
          );
        }
        return (
          n.selectionSet && (i = i.filter(o.store.canRead)),
          (i = i.map(function (l, f) {
            return l === null
              ? null
              : be(l)
              ? u(
                  r.executeSubSelectedArray({
                    field: n,
                    array: l,
                    enclosingRef: a,
                    context: o,
                  }),
                  f
                )
              : n.selectionSet
              ? u(
                  r.executeSelectionSet({
                    selectionSet: n.selectionSet,
                    objectOrReference: l,
                    enclosingRef: le(l) ? l : a,
                    context: o,
                  }),
                  f
                )
              : (globalThis.__DEV__ !== !1 && rK(o.store, n, l), l);
          })),
          { result: o.canonizeResults ? this.canon.admit(i) : i, missing: s }
        );
      }),
      t
    );
  })();
  function tK(t) {
    try {
      JSON.stringify(t, function (e, r) {
        if (typeof r == "string") throw r;
        return r;
      });
    } catch (e) {
      return e;
    }
  }
  function rK(t, e, r) {
    if (!e.selectionSet) {
      var n = new Set([r]);
      n.forEach(function (i) {
        ce(i) &&
          (z(!le(i), 10, AA(t, i), e.name.value),
          Object.values(i).forEach(n.add, n));
      });
    }
  }
  var fa = new pi(),
    RA = new WeakMap();
  function us(t) {
    var e = RA.get(t);
    return e || RA.set(t, (e = { vars: new Set(), dep: os() })), e;
  }
  function tm(t) {
    us(t).vars.forEach(function (e) {
      return e.forgetCache(t);
    });
  }
  function FA(t) {
    us(t).vars.forEach(function (e) {
      return e.attachCache(t);
    });
  }
  function vl(t) {
    var e = new Set(),
      r = new Set(),
      n = function (a) {
        if (arguments.length > 0) {
          if (t !== a) {
            (t = a),
              e.forEach(function (c) {
                us(c).dep.dirty(n), nK(c);
              });
            var o = Array.from(r);
            r.clear(),
              o.forEach(function (c) {
                return c(t);
              });
          }
        } else {
          var s = fa.getValue();
          s && (i(s), us(s).dep(n));
        }
        return t;
      };
    n.onNextChange = function (a) {
      return (
        r.add(a),
        function () {
          r.delete(a);
        }
      );
    };
    var i = (n.attachCache = function (a) {
      return e.add(a), us(a).vars.add(n), n;
    });
    return (
      (n.forgetCache = function (a) {
        return e.delete(a);
      }),
      n
    );
  }
  function nK(t) {
    t.broadcastWatches && t.broadcastWatches();
  }
  var PA = Object.create(null);
  function rm(t) {
    var e = JSON.stringify(t);
    return PA[e] || (PA[e] = Object.create(null));
  }
  function nm(t) {
    var e = rm(t);
    return (
      e.keyFieldsFn ||
      (e.keyFieldsFn = function (r, n) {
        var i = function (o, s) {
            return n.readField(s, o);
          },
          a = (n.keyObject = am(t, function (o) {
            var s = da(n.storeObject, o, i);
            return (
              s === void 0 &&
                r !== n.storeObject &&
                Ue.call(r, o[0]) &&
                (s = da(r, o, UA)),
              z(s !== void 0, 4, o.join("."), r),
              s
            );
          }));
        return "".concat(n.typename, ":").concat(JSON.stringify(a));
      })
    );
  }
  function im(t) {
    var e = rm(t);
    return (
      e.keyArgsFn ||
      (e.keyArgsFn = function (r, n) {
        var i = n.field,
          a = n.variables,
          o = n.fieldName,
          s = am(t, function (u) {
            var l = u[0],
              f = l.charAt(0);
            if (f === "@") {
              if (i && st(i.directives)) {
                var p = l.slice(1),
                  d = i.directives.find(function (m) {
                    return m.name.value === p;
                  }),
                  g = d && Yr(d, a);
                return g && da(g, u.slice(1));
              }
              return;
            }
            if (f === "$") {
              var v = l.slice(1);
              if (a && Ue.call(a, v)) {
                var y = u.slice(0);
                return (y[0] = v), da(a, y);
              }
              return;
            }
            if (r) return da(r, u);
          }),
          c = JSON.stringify(s);
        return (r || c !== "{}") && (o += ":" + c), o;
      })
    );
  }
  function am(t, e) {
    var r = new Mt();
    return LA(t).reduce(function (n, i) {
      var a,
        o = e(i);
      if (o !== void 0) {
        for (var s = i.length - 1; s >= 0; --s)
          o = ((a = {}), (a[i[s]] = o), a);
        n = r.merge(n, o);
      }
      return n;
    }, Object.create(null));
  }
  function LA(t) {
    var e = rm(t);
    if (!e.paths) {
      var r = (e.paths = []),
        n = [];
      t.forEach(function (i, a) {
        be(i)
          ? (LA(i).forEach(function (o) {
              return r.push(n.concat(o));
            }),
            (n.length = 0))
          : (n.push(i), be(t[a + 1]) || (r.push(n.slice(0)), (n.length = 0)));
      });
    }
    return e.paths;
  }
  function UA(t, e) {
    return t[e];
  }
  function da(t, e, r) {
    return (
      (r = r || UA),
      qA(
        e.reduce(function n(i, a) {
          return be(i)
            ? i.map(function (o) {
                return n(o, a);
              })
            : i && r(i, a);
        }, t)
      )
    );
  }
  function qA(t) {
    return ce(t)
      ? be(t)
        ? t.map(qA)
        : am(Object.keys(t).sort(), function (e) {
            return da(t, e);
          })
      : t;
  }
  Vo.setStringify(Vt);
  function om(t) {
    return t.args !== void 0
      ? t.args
      : t.field
      ? Yr(t.field, t.variables)
      : null;
  }
  var iK = function () {},
    BA = function (t, e) {
      return e.fieldName;
    },
    jA = function (t, e, r) {
      var n = r.mergeObjects;
      return n(t, e);
    },
    VA = function (t, e) {
      return e;
    },
    HA = (function () {
      function t(e) {
        (this.config = e),
          (this.typePolicies = Object.create(null)),
          (this.toBeAdded = Object.create(null)),
          (this.supertypeMap = new Map()),
          (this.fuzzySubtypes = new Map()),
          (this.rootIdsByTypename = Object.create(null)),
          (this.rootTypenamesById = Object.create(null)),
          (this.usingPossibleTypes = !1),
          (this.config = x({ dataIdFromObject: dl }, e)),
          (this.cache = this.config.cache),
          this.setRootTypename("Query"),
          this.setRootTypename("Mutation"),
          this.setRootTypename("Subscription"),
          e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
          e.typePolicies && this.addTypePolicies(e.typePolicies);
      }
      return (
        (t.prototype.identify = function (e, r) {
          var n,
            i = this,
            a =
              (r &&
                (r.typename ||
                  ((n = r.storeObject) === null || n === void 0
                    ? void 0
                    : n.__typename))) ||
              e.__typename;
          if (a === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
          for (
            var o = (r && r.storeObject) || e,
              s = x(x({}, r), {
                typename: a,
                storeObject: o,
                readField:
                  (r && r.readField) ||
                  function () {
                    var p = _l(arguments, o);
                    return i.readField(p, {
                      store: i.cache.data,
                      variables: p.variables,
                    });
                  },
              }),
              c,
              u = a && this.getTypePolicy(a),
              l = (u && u.keyFn) || this.config.dataIdFromObject;
            l;

          ) {
            var f = l(x(x({}, e), o), s);
            if (be(f)) l = nm(f);
            else {
              c = f;
              break;
            }
          }
          return (
            (c = c ? String(c) : void 0), s.keyObject ? [c, s.keyObject] : [c]
          );
        }),
        (t.prototype.addTypePolicies = function (e) {
          var r = this;
          Object.keys(e).forEach(function (n) {
            var i = e[n],
              a = i.queryType,
              o = i.mutationType,
              s = i.subscriptionType,
              c = Ge(i, ["queryType", "mutationType", "subscriptionType"]);
            a && r.setRootTypename("Query", n),
              o && r.setRootTypename("Mutation", n),
              s && r.setRootTypename("Subscription", n),
              Ue.call(r.toBeAdded, n)
                ? r.toBeAdded[n].push(c)
                : (r.toBeAdded[n] = [c]);
          });
        }),
        (t.prototype.updateTypePolicy = function (e, r) {
          var n = this,
            i = this.getTypePolicy(e),
            a = r.keyFields,
            o = r.fields;
          function s(c, u) {
            c.merge =
              typeof u == "function"
                ? u
                : u === !0
                ? jA
                : u === !1
                ? VA
                : c.merge;
          }
          s(i, r.merge),
            (i.keyFn =
              a === !1
                ? iK
                : be(a)
                ? nm(a)
                : typeof a == "function"
                ? a
                : i.keyFn),
            o &&
              Object.keys(o).forEach(function (c) {
                var u = n.getFieldPolicy(e, c, !0),
                  l = o[c];
                if (typeof l == "function") u.read = l;
                else {
                  var f = l.keyArgs,
                    p = l.read,
                    d = l.merge;
                  (u.keyFn =
                    f === !1
                      ? BA
                      : be(f)
                      ? im(f)
                      : typeof f == "function"
                      ? f
                      : u.keyFn),
                    typeof p == "function" && (u.read = p),
                    s(u, d);
                }
                u.read && u.merge && (u.keyFn = u.keyFn || BA);
              });
        }),
        (t.prototype.setRootTypename = function (e, r) {
          r === void 0 && (r = e);
          var n = "ROOT_" + e.toUpperCase(),
            i = this.rootTypenamesById[n];
          r !== i &&
            (z(!i || i === e, 5, e),
            i && delete this.rootIdsByTypename[i],
            (this.rootIdsByTypename[r] = n),
            (this.rootTypenamesById[n] = r));
        }),
        (t.prototype.addPossibleTypes = function (e) {
          var r = this;
          (this.usingPossibleTypes = !0),
            Object.keys(e).forEach(function (n) {
              r.getSupertypeSet(n, !0),
                e[n].forEach(function (i) {
                  r.getSupertypeSet(i, !0).add(n);
                  var a = i.match(Qg);
                  (!a || a[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
                });
            });
        }),
        (t.prototype.getTypePolicy = function (e) {
          var r = this;
          if (!Ue.call(this.typePolicies, e)) {
            var n = (this.typePolicies[e] = Object.create(null));
            n.fields = Object.create(null);
            var i = this.supertypeMap.get(e);
            !i &&
              this.fuzzySubtypes.size &&
              ((i = this.getSupertypeSet(e, !0)),
              this.fuzzySubtypes.forEach(function (o, s) {
                if (o.test(e)) {
                  var c = r.supertypeMap.get(s);
                  c &&
                    c.forEach(function (u) {
                      return i.add(u);
                    });
                }
              })),
              i &&
                i.size &&
                i.forEach(function (o) {
                  var s = r.getTypePolicy(o),
                    c = s.fields,
                    u = Ge(s, ["fields"]);
                  Object.assign(n, u), Object.assign(n.fields, c);
                });
          }
          var a = this.toBeAdded[e];
          return (
            a &&
              a.length &&
              a.splice(0).forEach(function (o) {
                r.updateTypePolicy(e, o);
              }),
            this.typePolicies[e]
          );
        }),
        (t.prototype.getFieldPolicy = function (e, r, n) {
          if (e) {
            var i = this.getTypePolicy(e).fields;
            return i[r] || (n && (i[r] = Object.create(null)));
          }
        }),
        (t.prototype.getSupertypeSet = function (e, r) {
          var n = this.supertypeMap.get(e);
          return !n && r && this.supertypeMap.set(e, (n = new Set())), n;
        }),
        (t.prototype.fragmentMatches = function (e, r, n, i) {
          var a = this;
          if (!e.typeCondition) return !0;
          if (!r) return !1;
          var o = e.typeCondition.name.value;
          if (r === o) return !0;
          if (this.usingPossibleTypes && this.supertypeMap.has(o))
            for (
              var s = this.getSupertypeSet(r, !0),
                c = [s],
                u = function (g) {
                  var v = a.getSupertypeSet(g, !1);
                  v && v.size && c.indexOf(v) < 0 && c.push(v);
                },
                l = !!(n && this.fuzzySubtypes.size),
                f = !1,
                p = 0;
              p < c.length;
              ++p
            ) {
              var d = c[p];
              if (d.has(o))
                return (
                  s.has(o) ||
                    (f && globalThis.__DEV__ !== !1 && z.warn(6, r, o),
                    s.add(o)),
                  !0
                );
              d.forEach(u),
                l &&
                  p === c.length - 1 &&
                  fl(e.selectionSet, n, i) &&
                  ((l = !1),
                  (f = !0),
                  this.fuzzySubtypes.forEach(function (g, v) {
                    var y = r.match(g);
                    y && y[0] === r && u(v);
                  }));
            }
          return !1;
        }),
        (t.prototype.hasKeyArgs = function (e, r) {
          var n = this.getFieldPolicy(e, r, !1);
          return !!(n && n.keyFn);
        }),
        (t.prototype.getStoreFieldName = function (e) {
          var r = e.typename,
            n = e.fieldName,
            i = this.getFieldPolicy(r, n, !1),
            a,
            o = i && i.keyFn;
          if (o && r)
            for (
              var s = {
                  typename: r,
                  fieldName: n,
                  field: e.field || null,
                  variables: e.variables,
                },
                c = om(e);
              o;

            ) {
              var u = o(c, s);
              if (be(u)) o = im(u);
              else {
                a = u || n;
                break;
              }
            }
          return (
            a === void 0 &&
              (a = e.field ? vg(e.field, e.variables) : Vo(n, om(e))),
            a === !1 ? n : n === ur(a) ? a : n + ":" + a
          );
        }),
        (t.prototype.readField = function (e, r) {
          var n = e.from;
          if (n) {
            var i = e.field || e.fieldName;
            if (i) {
              if (e.typename === void 0) {
                var a = r.store.getFieldValue(n, "__typename");
                a && (e.typename = a);
              }
              var o = this.getStoreFieldName(e),
                s = ur(o),
                c = r.store.getFieldValue(n, o),
                u = this.getFieldPolicy(e.typename, s, !1),
                l = u && u.read;
              if (l) {
                var f = WA(
                  this,
                  n,
                  e,
                  r,
                  r.store.getStorage(le(n) ? n.__ref : n, o)
                );
                return fa.withValue(this.cache, l, [c, f]);
              }
              return c;
            }
          }
        }),
        (t.prototype.getReadFunction = function (e, r) {
          var n = this.getFieldPolicy(e, r, !1);
          return n && n.read;
        }),
        (t.prototype.getMergeFunction = function (e, r, n) {
          var i = this.getFieldPolicy(e, r, !1),
            a = i && i.merge;
          return (
            !a && n && ((i = this.getTypePolicy(n)), (a = i && i.merge)), a
          );
        }),
        (t.prototype.runMergeFunction = function (e, r, n, i, a) {
          var o = n.field,
            s = n.typename,
            c = n.merge;
          return c === jA
            ? GA(i.store)(e, r)
            : c === VA
            ? r
            : (i.overwrite && (e = void 0),
              c(
                e,
                r,
                WA(
                  this,
                  void 0,
                  {
                    typename: s,
                    fieldName: o.name.value,
                    field: o,
                    variables: i.variables,
                  },
                  i,
                  a || Object.create(null)
                )
              ));
        }),
        t
      );
    })();
  function WA(t, e, r, n, i) {
    var a = t.getStoreFieldName(r),
      o = ur(a),
      s = r.variables || n.variables,
      c = n.store,
      u = c.toReference,
      l = c.canRead;
    return {
      args: om(r),
      field: r.field || null,
      fieldName: o,
      storeFieldName: a,
      variables: s,
      isReference: le,
      toReference: u,
      storage: i,
      cache: t.cache,
      canRead: l,
      readField: function () {
        return t.readField(_l(arguments, e, s), n);
      },
      mergeObjects: GA(n.store),
    };
  }
  function _l(t, e, r) {
    var n = t[0],
      i = t[1],
      a = t.length,
      o;
    return (
      typeof n == "string"
        ? (o = { fieldName: n, from: a > 1 ? i : e })
        : ((o = x({}, n)), Ue.call(o, "from") || (o.from = e)),
      globalThis.__DEV__ !== !1 &&
        o.from === void 0 &&
        globalThis.__DEV__ !== !1 &&
        z.warn(7, Ku(Array.from(t))),
      o.variables === void 0 && (o.variables = r),
      o
    );
  }
  function GA(t) {
    return function (r, n) {
      if (be(r) || be(n)) throw Te(8);
      if (ce(r) && ce(n)) {
        var i = t.getFieldValue(r, "__typename"),
          a = t.getFieldValue(n, "__typename"),
          o = i && a && i !== a;
        if (o) return n;
        if (le(r) && An(n)) return t.merge(r.__ref, n), r;
        if (An(r) && le(n)) return t.merge(r, n.__ref), n;
        if (An(r) && An(n)) return x(x({}, r), n);
      }
      return n;
    };
  }
  function sm(t, e, r) {
    var n = "".concat(e).concat(r),
      i = t.flavors.get(n);
    return (
      i ||
        t.flavors.set(
          n,
          (i =
            t.clientOnly === e && t.deferred === r
              ? t
              : x(x({}, t), { clientOnly: e, deferred: r }))
        ),
      i
    );
  }
  var QA = (function () {
    function t(e, r, n) {
      (this.cache = e), (this.reader = r), (this.fragments = n);
    }
    return (
      (t.prototype.writeToStore = function (e, r) {
        var n = this,
          i = r.query,
          a = r.result,
          o = r.dataId,
          s = r.variables,
          c = r.overwrite,
          u = Or(i),
          l = OA();
        s = x(x({}, oi(u)), s);
        var f = x(
            x(
              {
                store: e,
                written: Object.create(null),
                merge: function (d, g) {
                  return l.merge(d, g);
                },
                variables: s,
                varString: Vt(s),
              },
              gl(i, this.fragments)
            ),
            {
              overwrite: !!c,
              incomingById: new Map(),
              clientOnly: !1,
              deferred: !1,
              flavors: new Map(),
            }
          ),
          p = this.processSelectionSet({
            result: a || Object.create(null),
            dataId: o,
            selectionSet: u.selectionSet,
            mergeTree: { map: new Map() },
            context: f,
          });
        if (!le(p)) throw Te(11, a);
        return (
          f.incomingById.forEach(function (d, g) {
            var v = d.storeObject,
              y = d.mergeTree,
              m = d.fieldNodeSet,
              I = Ar(g);
            if (y && y.map.size) {
              var b = n.applyMerges(y, I, v, f);
              if (le(b)) return;
              v = b;
            }
            if (globalThis.__DEV__ !== !1 && !f.overwrite) {
              var w = Object.create(null);
              m.forEach(function (A) {
                A.selectionSet && (w[A.name.value] = !0);
              });
              var k = function (A) {
                  return w[ur(A)] === !0;
                },
                _ = function (A) {
                  var C = y && y.map.get(A);
                  return !!(C && C.info && C.info.merge);
                };
              Object.keys(v).forEach(function (A) {
                k(A) && !_(A) && aK(I, v, A, f.store);
              });
            }
            e.merge(g, v);
          }),
          e.retain(p.__ref),
          p
        );
      }),
      (t.prototype.processSelectionSet = function (e) {
        var r = this,
          n = e.dataId,
          i = e.result,
          a = e.selectionSet,
          o = e.context,
          s = e.mergeTree,
          c = this.cache.policies,
          u = Object.create(null),
          l =
            (n && c.rootTypenamesById[n]) ||
            Wo(i, a, o.fragmentMap) ||
            (n && o.store.get(n, "__typename"));
        typeof l == "string" && (u.__typename = l);
        var f = function () {
            var b = _l(arguments, u, o.variables);
            if (le(b.from)) {
              var w = o.incomingById.get(b.from.__ref);
              if (w) {
                var k = c.readField(x(x({}, b), { from: w.storeObject }), o);
                if (k !== void 0) return k;
              }
            }
            return c.readField(b, o);
          },
          p = new Set();
        this.flattenFields(a, i, o, l).forEach(function (b, w) {
          var k,
            _ = Ct(w),
            A = i[_];
          if ((p.add(w), A !== void 0)) {
            var C = c.getStoreFieldName({
                typename: l,
                fieldName: w.name.value,
                field: w,
                variables: b.variables,
              }),
              F = zA(s, C),
              W = r.processFieldValue(
                A,
                w,
                w.selectionSet ? sm(b, !1, !1) : b,
                F
              ),
              j = void 0;
            w.selectionSet && (le(W) || An(W)) && (j = f("__typename", W));
            var X = c.getMergeFunction(l, w.name.value, j);
            X ? (F.info = { field: w, typename: l, merge: X }) : $A(s, C),
              (u = b.merge(u, ((k = {}), (k[C] = W), k)));
          } else globalThis.__DEV__ !== !1 && !b.clientOnly && !b.deferred && !ci.added(w) && !c.getReadFunction(l, w.name.value) && globalThis.__DEV__ !== !1 && z.error(12, Ct(w), i);
        });
        try {
          var d = c.identify(i, {
              typename: l,
              selectionSet: a,
              fragmentMap: o.fragmentMap,
              storeObject: u,
              readField: f,
            }),
            g = d[0],
            v = d[1];
          (n = n || g), v && (u = o.merge(u, v));
        } catch (b) {
          if (!n) throw b;
        }
        if (typeof n == "string") {
          var y = Ar(n),
            m = o.written[n] || (o.written[n] = []);
          if (
            m.indexOf(a) >= 0 ||
            (m.push(a), this.reader && this.reader.isFresh(i, y, a, o))
          )
            return y;
          var I = o.incomingById.get(n);
          return (
            I
              ? ((I.storeObject = o.merge(I.storeObject, u)),
                (I.mergeTree = cm(I.mergeTree, s)),
                p.forEach(function (b) {
                  return I.fieldNodeSet.add(b);
                }))
              : o.incomingById.set(n, {
                  storeObject: u,
                  mergeTree: bl(s) ? void 0 : s,
                  fieldNodeSet: p,
                }),
            y
          );
        }
        return u;
      }),
      (t.prototype.processFieldValue = function (e, r, n, i) {
        var a = this;
        return !r.selectionSet || e === null
          ? globalThis.__DEV__ !== !1
            ? nl(e)
            : e
          : be(e)
          ? e.map(function (o, s) {
              var c = a.processFieldValue(o, r, n, zA(i, s));
              return $A(i, s), c;
            })
          : this.processSelectionSet({
              result: e,
              selectionSet: r.selectionSet,
              context: n,
              mergeTree: i,
            });
      }),
      (t.prototype.flattenFields = function (e, r, n, i) {
        i === void 0 && (i = Wo(r, e, n.fragmentMap));
        var a = new Map(),
          o = this.cache.policies,
          s = new cr(!1);
        return (
          (function c(u, l) {
            var f = s.lookup(u, l.clientOnly, l.deferred);
            f.visited ||
              ((f.visited = !0),
              u.selections.forEach(function (p) {
                if (sr(p, n.variables)) {
                  var d = l.clientOnly,
                    g = l.deferred;
                  if (
                    (!(d && g) &&
                      st(p.directives) &&
                      p.directives.forEach(function (m) {
                        var I = m.name.value;
                        if ((I === "client" && (d = !0), I === "defer")) {
                          var b = Yr(m, n.variables);
                          (!b || b.if !== !1) && (g = !0);
                        }
                      }),
                    At(p))
                  ) {
                    var v = a.get(p);
                    v && ((d = d && v.clientOnly), (g = g && v.deferred)),
                      a.set(p, sm(n, d, g));
                  } else {
                    var y = Qr(p, n.lookupFragment);
                    if (!y && p.kind === Ne.FRAGMENT_SPREAD)
                      throw Te(13, p.name.value);
                    y &&
                      o.fragmentMatches(y, i, r, n.variables) &&
                      c(y.selectionSet, sm(n, d, g));
                  }
                }
              }));
          })(e, n),
          a
        );
      }),
      (t.prototype.applyMerges = function (e, r, n, i, a) {
        var o,
          s = this;
        if (e.map.size && !le(n)) {
          var c = !be(n) && (le(r) || An(r)) ? r : void 0,
            u = n;
          c && !a && (a = [le(c) ? c.__ref : c]);
          var l,
            f = function (p, d) {
              return be(p)
                ? typeof d == "number"
                  ? p[d]
                  : void 0
                : i.store.getFieldValue(p, String(d));
            };
          e.map.forEach(function (p, d) {
            var g = f(c, d),
              v = f(u, d);
            if (v !== void 0) {
              a && a.push(d);
              var y = s.applyMerges(p, g, v, i, a);
              y !== v && ((l = l || new Map()), l.set(d, y)),
                a && z(a.pop() === d);
            }
          }),
            l &&
              ((n = be(u) ? u.slice(0) : x({}, u)),
              l.forEach(function (p, d) {
                n[d] = p;
              }));
        }
        return e.info
          ? this.cache.policies.runMergeFunction(
              r,
              n,
              e.info,
              i,
              a && (o = i.store).getStorage.apply(o, a)
            )
          : n;
      }),
      t
    );
  })();
  var YA = [];
  function zA(t, e) {
    var r = t.map;
    return r.has(e) || r.set(e, YA.pop() || { map: new Map() }), r.get(e);
  }
  function cm(t, e) {
    if (t === e || !e || bl(e)) return t;
    if (!t || bl(t)) return e;
    var r = t.info && e.info ? x(x({}, t.info), e.info) : t.info || e.info,
      n = t.map.size && e.map.size,
      i = n ? new Map() : t.map.size ? t.map : e.map,
      a = { info: r, map: i };
    if (n) {
      var o = new Set(e.map.keys());
      t.map.forEach(function (s, c) {
        a.map.set(c, cm(s, e.map.get(c))), o.delete(c);
      }),
        o.forEach(function (s) {
          a.map.set(s, cm(e.map.get(s), t.map.get(s)));
        });
    }
    return a;
  }
  function bl(t) {
    return !t || !(t.info || t.map.size);
  }
  function $A(t, e) {
    var r = t.map,
      n = r.get(e);
    n && bl(n) && (YA.push(n), r.delete(e));
  }
  var KA = new Set();
  function aK(t, e, r, n) {
    var i = function (f) {
        var p = n.getFieldValue(f, r);
        return typeof p == "object" && p;
      },
      a = i(t);
    if (a) {
      var o = i(e);
      if (
        o &&
        !le(a) &&
        !Ee(a, o) &&
        !Object.keys(a).every(function (f) {
          return n.getFieldValue(o, f) !== void 0;
        })
      ) {
        var s =
            n.getFieldValue(t, "__typename") ||
            n.getFieldValue(e, "__typename"),
          c = ur(r),
          u = "".concat(s, ".").concat(c);
        if (!KA.has(u)) {
          KA.add(u);
          var l = [];
          !be(a) &&
            !be(o) &&
            [a, o].forEach(function (f) {
              var p = n.getFieldValue(f, "__typename");
              typeof p == "string" && !l.includes(p) && l.push(p);
            }),
            globalThis.__DEV__ !== !1 &&
              z.warn(
                14,
                c,
                s,
                l.length
                  ? "either ensure all objects of type " +
                      l.join(" and ") +
                      " have an ID or a custom merge function, or "
                  : "",
                u,
                a,
                o
              );
        }
      }
    }
  }
  var Sl = (function (t) {
    Le(e, t);
    function e(r) {
      r === void 0 && (r = {});
      var n = t.call(this) || this;
      return (
        (n.watches = new Set()),
        (n.addTypenameTransform = new Go(ci)),
        (n.assumeImmutableResults = !0),
        (n.makeVar = vl),
        (n.txCount = 0),
        (n.config = wA(r)),
        (n.addTypename = !!n.config.addTypename),
        (n.policies = new HA({
          cache: n,
          dataIdFromObject: n.config.dataIdFromObject,
          possibleTypes: n.config.possibleTypes,
          typePolicies: n.config.typePolicies,
        })),
        n.init(),
        n
      );
    }
    return (
      (e.prototype.init = function () {
        var r = (this.data = new pa.Root({
          policies: this.policies,
          resultCaching: this.config.resultCaching,
        }));
        (this.optimisticData = r.stump), this.resetResultCache();
      }),
      (e.prototype.resetResultCache = function (r) {
        var n = this,
          i = this.storeReader,
          a = this.config.fragments;
        (this.storeWriter = new QA(
          this,
          (this.storeReader = new DA({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: hl(this.config),
            canon: r ? void 0 : i && i.canon,
            fragments: a,
          })),
          a
        )),
          (this.maybeBroadcastWatch = di(
            function (o, s) {
              return n.broadcastWatch(o, s);
            },
            {
              max: this.config.resultCacheMaxSize,
              makeCacheKey: function (o) {
                var s = o.optimistic ? n.optimisticData : n.data;
                if (hi(s)) {
                  var c = o.optimistic,
                    u = o.id,
                    l = o.variables;
                  return s.makeCacheKey(
                    o.query,
                    o.callback,
                    Vt({ optimistic: c, id: u, variables: l })
                  );
                }
              },
            }
          )),
          new Set([this.data.group, this.optimisticData.group]).forEach(
            function (o) {
              return o.resetCaching();
            }
          );
      }),
      (e.prototype.restore = function (r) {
        return this.init(), r && this.data.replace(r), this;
      }),
      (e.prototype.extract = function (r) {
        return (
          r === void 0 && (r = !1),
          (r ? this.optimisticData : this.data).extract()
        );
      }),
      (e.prototype.read = function (r) {
        var n = r.returnPartialData,
          i = n === void 0 ? !1 : n;
        try {
          return (
            this.storeReader.diffQueryAgainstStore(
              x(x({}, r), {
                store: r.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: i,
              })
            ).result || null
          );
        } catch (a) {
          if (a instanceof ss) return null;
          throw a;
        }
      }),
      (e.prototype.write = function (r) {
        try {
          return ++this.txCount, this.storeWriter.writeToStore(this.data, r);
        } finally {
          !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
        }
      }),
      (e.prototype.modify = function (r) {
        if (Ue.call(r, "id") && !r.id) return !1;
        var n = r.optimistic ? this.optimisticData : this.data;
        try {
          return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
        } finally {
          !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
        }
      }),
      (e.prototype.diff = function (r) {
        return this.storeReader.diffQueryAgainstStore(
          x(x({}, r), {
            store: r.optimistic ? this.optimisticData : this.data,
            rootId: r.id || "ROOT_QUERY",
            config: this.config,
          })
        );
      }),
      (e.prototype.watch = function (r) {
        var n = this;
        return (
          this.watches.size || FA(this),
          this.watches.add(r),
          r.immediate && this.maybeBroadcastWatch(r),
          function () {
            n.watches.delete(r) && !n.watches.size && tm(n),
              n.maybeBroadcastWatch.forget(r);
          }
        );
      }),
      (e.prototype.gc = function (r) {
        Vt.reset();
        var n = this.optimisticData.gc();
        return (
          r &&
            !this.txCount &&
            (r.resetResultCache
              ? this.resetResultCache(r.resetResultIdentities)
              : r.resetResultIdentities && this.storeReader.resetCanon()),
          n
        );
      }),
      (e.prototype.retain = function (r, n) {
        return (n ? this.optimisticData : this.data).retain(r);
      }),
      (e.prototype.release = function (r, n) {
        return (n ? this.optimisticData : this.data).release(r);
      }),
      (e.prototype.identify = function (r) {
        if (le(r)) return r.__ref;
        try {
          return this.policies.identify(r)[0];
        } catch (n) {
          globalThis.__DEV__ !== !1 && z.warn(n);
        }
      }),
      (e.prototype.evict = function (r) {
        if (!r.id) {
          if (Ue.call(r, "id")) return !1;
          r = x(x({}, r), { id: "ROOT_QUERY" });
        }
        try {
          return ++this.txCount, this.optimisticData.evict(r, this.data);
        } finally {
          !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
        }
      }),
      (e.prototype.reset = function (r) {
        var n = this;
        return (
          this.init(),
          Vt.reset(),
          r && r.discardWatches
            ? (this.watches.forEach(function (i) {
                return n.maybeBroadcastWatch.forget(i);
              }),
              this.watches.clear(),
              tm(this))
            : this.broadcastWatches(),
          Promise.resolve()
        );
      }),
      (e.prototype.removeOptimistic = function (r) {
        var n = this.optimisticData.removeLayer(r);
        n !== this.optimisticData &&
          ((this.optimisticData = n), this.broadcastWatches());
      }),
      (e.prototype.batch = function (r) {
        var n = this,
          i = r.update,
          a = r.optimistic,
          o = a === void 0 ? !0 : a,
          s = r.removeOptimistic,
          c = r.onWatchUpdated,
          u,
          l = function (p) {
            var d = n,
              g = d.data,
              v = d.optimisticData;
            ++n.txCount, p && (n.data = n.optimisticData = p);
            try {
              return (u = i(n));
            } finally {
              --n.txCount, (n.data = g), (n.optimisticData = v);
            }
          },
          f = new Set();
        return (
          c &&
            !this.txCount &&
            this.broadcastWatches(
              x(x({}, r), {
                onWatchUpdated: function (p) {
                  return f.add(p), !1;
                },
              })
            ),
          typeof o == "string"
            ? (this.optimisticData = this.optimisticData.addLayer(o, l))
            : o === !1
            ? l(this.data)
            : l(),
          typeof s == "string" &&
            (this.optimisticData = this.optimisticData.removeLayer(s)),
          c && f.size
            ? (this.broadcastWatches(
                x(x({}, r), {
                  onWatchUpdated: function (p, d) {
                    var g = c.call(this, p, d);
                    return g !== !1 && f.delete(p), g;
                  },
                })
              ),
              f.size &&
                f.forEach(function (p) {
                  return n.maybeBroadcastWatch.dirty(p);
                }))
            : this.broadcastWatches(r),
          u
        );
      }),
      (e.prototype.performTransaction = function (r, n) {
        return this.batch({ update: r, optimistic: n || n !== null });
      }),
      (e.prototype.transformDocument = function (r) {
        return this.addTypenameToDocument(this.addFragmentsToDocument(r));
      }),
      (e.prototype.broadcastWatches = function (r) {
        var n = this;
        this.txCount ||
          this.watches.forEach(function (i) {
            return n.maybeBroadcastWatch(i, r);
          });
      }),
      (e.prototype.addFragmentsToDocument = function (r) {
        var n = this.config.fragments;
        return n ? n.transform(r) : r;
      }),
      (e.prototype.addTypenameToDocument = function (r) {
        return this.addTypename
          ? this.addTypenameTransform.transformDocument(r)
          : r;
      }),
      (e.prototype.broadcastWatch = function (r, n) {
        var i = r.lastDiff,
          a = this.diff(r);
        (n &&
          (r.optimistic &&
            typeof n.optimistic == "string" &&
            (a.fromOptimisticTransaction = !0),
          n.onWatchUpdated && n.onWatchUpdated.call(this, r, a, i) === !1)) ||
          ((!i || !Ee(i.result, a.result)) && r.callback((r.lastDiff = a), i));
      }),
      e
    );
  })(Kg);
  var ge;
  (function (t) {
    (t[(t.loading = 1)] = "loading"),
      (t[(t.setVariables = 2)] = "setVariables"),
      (t[(t.fetchMore = 3)] = "fetchMore"),
      (t[(t.refetch = 4)] = "refetch"),
      (t[(t.poll = 6)] = "poll"),
      (t[(t.ready = 7)] = "ready"),
      (t[(t.error = 8)] = "error");
  })(ge || (ge = {}));
  function kn(t) {
    return t ? t < 7 : !1;
  }
  function XA(t, e, r, n) {
    var i = e.data,
      a = Ge(e, ["data"]),
      o = r.data,
      s = Ge(r, ["data"]);
    return (
      Hg(a, s) &&
      Tl(jt(t).selectionSet, i, o, { fragmentMap: Kr(Jr(t)), variables: n })
    );
  }
  function Tl(t, e, r, n) {
    if (e === r) return !0;
    var i = new Set();
    return t.selections.every(function (a) {
      if (i.has(a) || (i.add(a), !sr(a, n.variables)) || JA(a)) return !0;
      if (At(a)) {
        var o = Ct(a),
          s = e && e[o],
          c = r && r[o],
          u = a.selectionSet;
        if (!u) return Hg(s, c);
        var l = Array.isArray(s),
          f = Array.isArray(c);
        if (l !== f) return !1;
        if (l && f) {
          var p = s.length;
          if (c.length !== p) return !1;
          for (var d = 0; d < p; ++d) if (!Tl(u, s[d], c[d], n)) return !1;
          return !0;
        }
        return Tl(u, s, c, n);
      } else {
        var g = Qr(a, n.fragmentMap);
        if (g) return JA(g) ? !0 : Tl(g.selectionSet, e, r, n);
      }
    });
  }
  function JA(t) {
    return !!t.directives && t.directives.some(oK);
  }
  function oK(t) {
    return t.name.value === "nonreactive";
  }
  var ZA = Object.assign,
    sK = Object.hasOwnProperty,
    El = (function (t) {
      Le(e, t);
      function e(r) {
        var n = r.queryManager,
          i = r.queryInfo,
          a = r.options,
          o =
            t.call(this, function (y) {
              try {
                var m = y._subscription._observer;
                m && !m.error && (m.error = cK);
              } catch {}
              var I = !o.observers.size;
              o.observers.add(y);
              var b = o.last;
              return (
                b && b.error
                  ? y.error && y.error(b.error)
                  : b && b.result && y.next && y.next(b.result),
                I && o.reobserve().catch(function () {}),
                function () {
                  o.observers.delete(y) &&
                    !o.observers.size &&
                    o.tearDownQuery();
                }
              );
            }) || this;
        (o.observers = new Set()),
          (o.subscriptions = new Set()),
          (o.queryInfo = i),
          (o.queryManager = n),
          (o.waitForOwnResult = um(a.fetchPolicy)),
          (o.isTornDown = !1);
        var s = n.defaultOptions.watchQuery,
          c = s === void 0 ? {} : s,
          u = c.fetchPolicy,
          l = u === void 0 ? "cache-first" : u,
          f = a.fetchPolicy,
          p = f === void 0 ? l : f,
          d = a.initialFetchPolicy,
          g = d === void 0 ? (p === "standby" ? l : p) : d;
        (o.options = x(x({}, a), { initialFetchPolicy: g, fetchPolicy: p })),
          (o.queryId = i.queryId || n.generateQueryId());
        var v = Or(o.query);
        return (o.queryName = v && v.name && v.name.value), o;
      }
      return (
        Object.defineProperty(e.prototype, "query", {
          get: function () {
            return this.lastQuery || this.options.query;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "variables", {
          get: function () {
            return this.options.variables;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.result = function () {
          var r = this;
          return new Promise(function (n, i) {
            var a = {
                next: function (s) {
                  n(s),
                    r.observers.delete(a),
                    r.observers.size || r.queryManager.removeQuery(r.queryId),
                    setTimeout(function () {
                      o.unsubscribe();
                    }, 0);
                },
                error: i,
              },
              o = r.subscribe(a);
          });
        }),
        (e.prototype.getCurrentResult = function (r) {
          r === void 0 && (r = !0);
          var n = this.getLastResult(!0),
            i =
              this.queryInfo.networkStatus ||
              (n && n.networkStatus) ||
              ge.ready,
            a = x(x({}, n), { loading: kn(i), networkStatus: i }),
            o = this.options.fetchPolicy,
            s = o === void 0 ? "cache-first" : o;
          if (
            !(
              um(s) ||
              this.queryManager.getDocumentInfo(this.query).hasForcedResolvers
            )
          )
            if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var c = this.queryInfo.getDiff();
              (c.complete || this.options.returnPartialData) &&
                (a.data = c.result),
                Ee(a.data, {}) && (a.data = void 0),
                c.complete
                  ? (delete a.partial,
                    c.complete &&
                      a.networkStatus === ge.loading &&
                      (s === "cache-first" || s === "cache-only") &&
                      ((a.networkStatus = ge.ready), (a.loading = !1)))
                  : (a.partial = !0),
                globalThis.__DEV__ !== !1 &&
                  !c.complete &&
                  !this.options.partialRefetch &&
                  !a.loading &&
                  !a.data &&
                  !a.error &&
                  pm(c.missing);
            }
          return r && this.updateLastResult(a), a;
        }),
        (e.prototype.isDifferentFromLastResult = function (r, n) {
          if (!this.last) return !0;
          var i = this.queryManager.getDocumentInfo(this.query)
            .hasNonreactiveDirective
            ? !XA(this.query, this.last.result, r, this.variables)
            : !Ee(this.last.result, r);
          return i || (n && !Ee(this.last.variables, n));
        }),
        (e.prototype.getLast = function (r, n) {
          var i = this.last;
          if (i && i[r] && (!n || Ee(i.variables, this.variables))) return i[r];
        }),
        (e.prototype.getLastResult = function (r) {
          return this.getLast("result", r);
        }),
        (e.prototype.getLastError = function (r) {
          return this.getLast("error", r);
        }),
        (e.prototype.resetLastResults = function () {
          delete this.last, (this.isTornDown = !1);
        }),
        (e.prototype.resetQueryStoreErrors = function () {
          this.queryManager.resetErrors(this.queryId);
        }),
        (e.prototype.refetch = function (r) {
          var n,
            i = { pollInterval: 0 },
            a = this.options.fetchPolicy;
          if (
            (a === "cache-and-network"
              ? (i.fetchPolicy = a)
              : a === "no-cache"
              ? (i.fetchPolicy = "no-cache")
              : (i.fetchPolicy = "network-only"),
            globalThis.__DEV__ !== !1 && r && sK.call(r, "variables"))
          ) {
            var o = Ho(this.query),
              s = o.variableDefinitions;
            (!s ||
              !s.some(function (c) {
                return c.variable.name.value === "variables";
              })) &&
              globalThis.__DEV__ !== !1 &&
              z.warn(
                20,
                r,
                ((n = o.name) === null || n === void 0 ? void 0 : n.value) || o
              );
          }
          return (
            r &&
              !Ee(this.options.variables, r) &&
              (i.variables = this.options.variables =
                x(x({}, this.options.variables), r)),
            this.queryInfo.resetLastWrite(),
            this.reobserve(i, ge.refetch)
          );
        }),
        (e.prototype.fetchMore = function (r) {
          var n = this,
            i = x(
              x(
                {},
                r.query
                  ? r
                  : x(
                      x(
                        x(x({}, this.options), { query: this.options.query }),
                        r
                      ),
                      {
                        variables: x(
                          x({}, this.options.variables),
                          r.variables
                        ),
                      }
                    )
              ),
              { fetchPolicy: "no-cache" }
            );
          i.query = this.transformDocument(i.query);
          var a = this.queryManager.generateQueryId();
          this.lastQuery = r.query
            ? this.transformDocument(this.options.query)
            : i.query;
          var o = this.queryInfo,
            s = o.networkStatus;
          (o.networkStatus = ge.fetchMore),
            i.notifyOnNetworkStatusChange && this.observe();
          var c = new Set();
          return this.queryManager
            .fetchQuery(a, i, ge.fetchMore)
            .then(function (u) {
              return (
                n.queryManager.removeQuery(a),
                o.networkStatus === ge.fetchMore && (o.networkStatus = s),
                n.queryManager.cache.batch({
                  update: function (l) {
                    var f = r.updateQuery;
                    f
                      ? l.updateQuery(
                          {
                            query: n.query,
                            variables: n.variables,
                            returnPartialData: !0,
                            optimistic: !1,
                          },
                          function (p) {
                            return f(p, {
                              fetchMoreResult: u.data,
                              variables: i.variables,
                            });
                          }
                        )
                      : l.writeQuery({
                          query: i.query,
                          variables: i.variables,
                          data: u.data,
                        });
                  },
                  onWatchUpdated: function (l) {
                    c.add(l.query);
                  },
                }),
                u
              );
            })
            .finally(function () {
              c.has(n.query) || lm(n);
            });
        }),
        (e.prototype.subscribeToMore = function (r) {
          var n = this,
            i = this.queryManager
              .startGraphQLSubscription({
                query: r.document,
                variables: r.variables,
                context: r.context,
              })
              .subscribe({
                next: function (a) {
                  var o = r.updateQuery;
                  o &&
                    n.updateQuery(function (s, c) {
                      var u = c.variables;
                      return o(s, { subscriptionData: a, variables: u });
                    });
                },
                error: function (a) {
                  if (r.onError) {
                    r.onError(a);
                    return;
                  }
                  globalThis.__DEV__ !== !1 && z.error(21, a);
                },
              });
          return (
            this.subscriptions.add(i),
            function () {
              n.subscriptions.delete(i) && i.unsubscribe();
            }
          );
        }),
        (e.prototype.setOptions = function (r) {
          return this.reobserve(r);
        }),
        (e.prototype.silentSetOptions = function (r) {
          var n = kr(this.options, r || {});
          ZA(this.options, n);
        }),
        (e.prototype.setVariables = function (r) {
          return Ee(this.variables, r)
            ? this.observers.size
              ? this.result()
              : Promise.resolve()
            : ((this.options.variables = r),
              this.observers.size
                ? this.reobserve(
                    {
                      fetchPolicy: this.options.initialFetchPolicy,
                      variables: r,
                    },
                    ge.setVariables
                  )
                : Promise.resolve());
        }),
        (e.prototype.updateQuery = function (r) {
          var n = this.queryManager,
            i = n.cache.diff({
              query: this.options.query,
              variables: this.variables,
              returnPartialData: !0,
              optimistic: !1,
            }).result,
            a = r(i, { variables: this.variables });
          a &&
            (n.cache.writeQuery({
              query: this.options.query,
              data: a,
              variables: this.variables,
            }),
            n.broadcastQueries());
        }),
        (e.prototype.startPolling = function (r) {
          (this.options.pollInterval = r), this.updatePolling();
        }),
        (e.prototype.stopPolling = function () {
          (this.options.pollInterval = 0), this.updatePolling();
        }),
        (e.prototype.applyNextFetchPolicy = function (r, n) {
          if (n.nextFetchPolicy) {
            var i = n.fetchPolicy,
              a = i === void 0 ? "cache-first" : i,
              o = n.initialFetchPolicy,
              s = o === void 0 ? a : o;
            a === "standby" ||
              (typeof n.nextFetchPolicy == "function"
                ? (n.fetchPolicy = n.nextFetchPolicy(a, {
                    reason: r,
                    options: n,
                    observable: this,
                    initialFetchPolicy: s,
                  }))
                : r === "variables-changed"
                ? (n.fetchPolicy = s)
                : (n.fetchPolicy = n.nextFetchPolicy));
          }
          return n.fetchPolicy;
        }),
        (e.prototype.fetch = function (r, n, i) {
          return (
            this.queryManager.setObservableQuery(this),
            this.queryManager.fetchConcastWithInfo(this.queryId, r, n, i)
          );
        }),
        (e.prototype.updatePolling = function () {
          var r = this;
          if (!this.queryManager.ssrMode) {
            var n = this,
              i = n.pollingInfo,
              a = n.options.pollInterval;
            if (!a) {
              i && (clearTimeout(i.timeout), delete this.pollingInfo);
              return;
            }
            if (!(i && i.interval === a)) {
              z(a, 22);
              var o = i || (this.pollingInfo = {});
              o.interval = a;
              var s = function () {
                  r.pollingInfo &&
                    (kn(r.queryInfo.networkStatus)
                      ? c()
                      : r
                          .reobserve(
                            {
                              fetchPolicy:
                                r.options.initialFetchPolicy === "no-cache"
                                  ? "no-cache"
                                  : "network-only",
                            },
                            ge.poll
                          )
                          .then(c, c));
                },
                c = function () {
                  var u = r.pollingInfo;
                  u &&
                    (clearTimeout(u.timeout),
                    (u.timeout = setTimeout(s, u.interval)));
                };
              c();
            }
          }
        }),
        (e.prototype.updateLastResult = function (r, n) {
          n === void 0 && (n = this.variables);
          var i = this.getLastError();
          return (
            i && this.last && !Ee(n, this.last.variables) && (i = void 0),
            (this.last = x(
              {
                result: this.queryManager.assumeImmutableResults ? r : nl(r),
                variables: n,
              },
              i ? { error: i } : null
            ))
          );
        }),
        (e.prototype.reobserveAsConcast = function (r, n) {
          var i = this;
          this.isTornDown = !1;
          var a = n === ge.refetch || n === ge.fetchMore || n === ge.poll,
            o = this.options.variables,
            s = this.options.fetchPolicy,
            c = kr(this.options, r || {}),
            u = a ? c : ZA(this.options, c),
            l = this.transformDocument(u.query);
          (this.lastQuery = l),
            a ||
              (this.updatePolling(),
              r &&
                r.variables &&
                !Ee(r.variables, o) &&
                u.fetchPolicy !== "standby" &&
                u.fetchPolicy === s &&
                (this.applyNextFetchPolicy("variables-changed", u),
                n === void 0 && (n = ge.setVariables))),
            this.waitForOwnResult &&
              (this.waitForOwnResult = um(u.fetchPolicy));
          var f = function () {
              i.concast === g && (i.waitForOwnResult = !1);
            },
            p = u.variables && x({}, u.variables),
            d = this.fetch(u, n, l),
            g = d.concast,
            v = d.fromLink,
            y = {
              next: function (m) {
                f(), i.reportResult(m, p);
              },
              error: function (m) {
                f(), i.reportError(m, p);
              },
            };
          return (
            !a &&
              (v || !this.concast) &&
              (this.concast &&
                this.observer &&
                this.concast.removeObserver(this.observer),
              (this.concast = g),
              (this.observer = y)),
            g.addObserver(y),
            g
          );
        }),
        (e.prototype.reobserve = function (r, n) {
          return this.reobserveAsConcast(r, n).promise;
        }),
        (e.prototype.resubscribeAfterError = function () {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          var i = this.last;
          this.resetLastResults();
          var a = this.subscribe.apply(this, r);
          return (this.last = i), a;
        }),
        (e.prototype.observe = function () {
          this.reportResult(this.getCurrentResult(!1), this.variables);
        }),
        (e.prototype.reportResult = function (r, n) {
          var i = this.getLastError(),
            a = this.isDifferentFromLastResult(r, n);
          (i || !r.partial || this.options.returnPartialData) &&
            this.updateLastResult(r, n),
            (i || a) && ui(this.observers, "next", r);
        }),
        (e.prototype.reportError = function (r, n) {
          var i = x(x({}, this.getLastResult()), {
            error: r,
            errors: r.graphQLErrors,
            networkStatus: ge.error,
            loading: !1,
          });
          this.updateLastResult(i, n),
            ui(this.observers, "error", (this.last.error = r));
        }),
        (e.prototype.hasObservers = function () {
          return this.observers.size > 0;
        }),
        (e.prototype.tearDownQuery = function () {
          this.isTornDown ||
            (this.concast &&
              this.observer &&
              (this.concast.removeObserver(this.observer),
              delete this.concast,
              delete this.observer),
            this.stopPolling(),
            this.subscriptions.forEach(function (r) {
              return r.unsubscribe();
            }),
            this.subscriptions.clear(),
            this.queryManager.stopQuery(this.queryId),
            this.observers.clear(),
            (this.isTornDown = !0));
        }),
        (e.prototype.transformDocument = function (r) {
          return this.queryManager.transform(r);
        }),
        e
      );
    })(se);
  al(El);
  function lm(t) {
    var e = t.options,
      r = e.fetchPolicy,
      n = e.nextFetchPolicy;
    return r === "cache-and-network" || r === "network-only"
      ? t.reobserve({
          fetchPolicy: "cache-first",
          nextFetchPolicy: function (i, a) {
            return (
              (this.nextFetchPolicy = n),
              typeof this.nextFetchPolicy == "function"
                ? this.nextFetchPolicy(i, a)
                : r
            );
          },
        })
      : t.reobserve();
  }
  function cK(t) {
    globalThis.__DEV__ !== !1 && z.error(23, t.message, t.stack);
  }
  function pm(t) {
    globalThis.__DEV__ !== !1 &&
      t &&
      globalThis.__DEV__ !== !1 &&
      z.debug(24, t);
  }
  function um(t) {
    return t === "network-only" || t === "no-cache" || t === "standby";
  }
  var Il = (function () {
    function t(e) {
      var r = e.cache,
        n = e.client,
        i = e.resolvers,
        a = e.fragmentMatcher;
      (this.selectionsToResolveCache = new WeakMap()),
        (this.cache = r),
        n && (this.client = n),
        i && this.addResolvers(i),
        a && this.setFragmentMatcher(a);
    }
    return (
      (t.prototype.addResolvers = function (e) {
        var r = this;
        (this.resolvers = this.resolvers || {}),
          Array.isArray(e)
            ? e.forEach(function (n) {
                r.resolvers = Tg(r.resolvers, n);
              })
            : (this.resolvers = Tg(this.resolvers, e));
      }),
      (t.prototype.setResolvers = function (e) {
        (this.resolvers = {}), this.addResolvers(e);
      }),
      (t.prototype.getResolvers = function () {
        return this.resolvers || {};
      }),
      (t.prototype.runResolvers = function (e) {
        var r = e.document,
          n = e.remoteResult,
          i = e.context,
          a = e.variables,
          o = e.onlyRunForcedResolvers,
          s = o === void 0 ? !1 : o;
        return Qt(this, void 0, void 0, function () {
          return Yt(this, function (c) {
            return r
              ? [
                  2,
                  this.resolveDocument(
                    r,
                    n.data,
                    i,
                    a,
                    this.fragmentMatcher,
                    s
                  ).then(function (u) {
                    return x(x({}, n), { data: u.result });
                  }),
                ]
              : [2, n];
          });
        });
      }),
      (t.prototype.setFragmentMatcher = function (e) {
        this.fragmentMatcher = e;
      }),
      (t.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
      }),
      (t.prototype.clientQuery = function (e) {
        return $r(["client"], e) && this.resolvers ? e : null;
      }),
      (t.prototype.serverQuery = function (e) {
        return zo(e);
      }),
      (t.prototype.prepareContext = function (e) {
        var r = this.cache;
        return x(x({}, e), {
          cache: r,
          getCacheKey: function (n) {
            return r.identify(n);
          },
        });
      }),
      (t.prototype.addExportedVariables = function (e, r, n) {
        return (
          r === void 0 && (r = {}),
          n === void 0 && (n = {}),
          Qt(this, void 0, void 0, function () {
            return Yt(this, function (i) {
              return e
                ? [
                    2,
                    this.resolveDocument(
                      e,
                      this.buildRootValueFromCache(e, r) || {},
                      this.prepareContext(n),
                      r
                    ).then(function (a) {
                      return x(x({}, r), a.exportedVariables);
                    }),
                  ]
                : [2, x({}, r)];
            });
          })
        );
      }),
      (t.prototype.shouldForceResolvers = function (e) {
        var r = !1;
        return (
          gt(e, {
            Directive: {
              enter: function (n) {
                if (
                  n.name.value === "client" &&
                  n.arguments &&
                  ((r = n.arguments.some(function (i) {
                    return (
                      i.name.value === "always" &&
                      i.value.kind === "BooleanValue" &&
                      i.value.value === !0
                    );
                  })),
                  r)
                )
                  return ai;
              },
            },
          }),
          r
        );
      }),
      (t.prototype.buildRootValueFromCache = function (e, r) {
        return this.cache.diff({
          query: Sg(e),
          variables: r,
          returnPartialData: !0,
          optimistic: !1,
        }).result;
      }),
      (t.prototype.resolveDocument = function (e, r, n, i, a, o) {
        return (
          n === void 0 && (n = {}),
          i === void 0 && (i = {}),
          a === void 0 &&
            (a = function () {
              return !0;
            }),
          o === void 0 && (o = !1),
          Qt(this, void 0, void 0, function () {
            var s, c, u, l, f, p, d, g, v, y, m;
            return Yt(this, function (I) {
              return (
                (s = jt(e)),
                (c = Jr(e)),
                (u = Kr(c)),
                (l = this.collectSelectionsToResolve(s, u)),
                (f = s.operation),
                (p = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query"),
                (d = this),
                (g = d.cache),
                (v = d.client),
                (y = {
                  fragmentMap: u,
                  context: x(x({}, n), { cache: g, client: v }),
                  variables: i,
                  fragmentMatcher: a,
                  defaultOperationType: p,
                  exportedVariables: {},
                  selectionsToResolve: l,
                  onlyRunForcedResolvers: o,
                }),
                (m = !1),
                [
                  2,
                  this.resolveSelectionSet(s.selectionSet, m, r, y).then(
                    function (b) {
                      return {
                        result: b,
                        exportedVariables: y.exportedVariables,
                      };
                    }
                  ),
                ]
              );
            });
          })
        );
      }),
      (t.prototype.resolveSelectionSet = function (e, r, n, i) {
        return Qt(this, void 0, void 0, function () {
          var a,
            o,
            s,
            c,
            u,
            l = this;
          return Yt(this, function (f) {
            return (
              (a = i.fragmentMap),
              (o = i.context),
              (s = i.variables),
              (c = [n]),
              (u = function (p) {
                return Qt(l, void 0, void 0, function () {
                  var d, g;
                  return Yt(this, function (v) {
                    return !r && !i.selectionsToResolve.has(p)
                      ? [2]
                      : sr(p, s)
                      ? At(p)
                        ? [
                            2,
                            this.resolveField(p, r, n, i).then(function (y) {
                              var m;
                              typeof y < "u" &&
                                c.push(((m = {}), (m[Ct(p)] = y), m));
                            }),
                          ]
                        : (_g(p)
                            ? (d = p)
                            : ((d = a[p.name.value]), z(d, 18, p.name.value)),
                          d &&
                          d.typeCondition &&
                          ((g = d.typeCondition.name.value),
                          i.fragmentMatcher(n, g, o))
                            ? [
                                2,
                                this.resolveSelectionSet(
                                  d.selectionSet,
                                  r,
                                  n,
                                  i
                                ).then(function (y) {
                                  c.push(y);
                                }),
                              ]
                            : [2])
                      : [2];
                  });
                });
              }),
              [
                2,
                Promise.all(e.selections.map(u)).then(function () {
                  return $o(c);
                }),
              ]
            );
          });
        });
      }),
      (t.prototype.resolveField = function (e, r, n, i) {
        return Qt(this, void 0, void 0, function () {
          var a,
            o,
            s,
            c,
            u,
            l,
            f,
            p,
            d,
            g = this;
          return Yt(this, function (v) {
            return n
              ? ((a = i.variables),
                (o = e.name.value),
                (s = Ct(e)),
                (c = o !== s),
                (u = n[s] || n[o]),
                (l = Promise.resolve(u)),
                (!i.onlyRunForcedResolvers || this.shouldForceResolvers(e)) &&
                  ((f = n.__typename || i.defaultOperationType),
                  (p = this.resolvers && this.resolvers[f]),
                  p &&
                    ((d = p[c ? o : s]),
                    d &&
                      (l = Promise.resolve(
                        fa.withValue(this.cache, d, [
                          n,
                          Yr(e, a),
                          i.context,
                          { field: e, fragmentMap: i.fragmentMap },
                        ])
                      )))),
                [
                  2,
                  l.then(function (y) {
                    var m, I;
                    if (
                      (y === void 0 && (y = u),
                      e.directives &&
                        e.directives.forEach(function (w) {
                          w.name.value === "export" &&
                            w.arguments &&
                            w.arguments.forEach(function (k) {
                              k.name.value === "as" &&
                                k.value.kind === "StringValue" &&
                                (i.exportedVariables[k.value.value] = y);
                            });
                        }),
                      !e.selectionSet || y == null)
                    )
                      return y;
                    var b =
                      (I =
                        (m = e.directives) === null || m === void 0
                          ? void 0
                          : m.some(function (w) {
                              return w.name.value === "client";
                            })) !== null && I !== void 0
                        ? I
                        : !1;
                    if (Array.isArray(y))
                      return g.resolveSubSelectedArray(e, r || b, y, i);
                    if (e.selectionSet)
                      return g.resolveSelectionSet(
                        e.selectionSet,
                        r || b,
                        y,
                        i
                      );
                  }),
                ])
              : [2, null];
          });
        });
      }),
      (t.prototype.resolveSubSelectedArray = function (e, r, n, i) {
        var a = this;
        return Promise.all(
          n.map(function (o) {
            if (o === null) return null;
            if (Array.isArray(o)) return a.resolveSubSelectedArray(e, r, o, i);
            if (e.selectionSet)
              return a.resolveSelectionSet(e.selectionSet, r, o, i);
          })
        );
      }),
      (t.prototype.collectSelectionsToResolve = function (e, r) {
        var n = function (o) {
            return !Array.isArray(o);
          },
          i = this.selectionsToResolveCache;
        function a(o) {
          if (!i.has(o)) {
            var s = new Set();
            i.set(o, s),
              gt(o, {
                Directive: function (c, u, l, f, p) {
                  c.name.value === "client" &&
                    p.forEach(function (d) {
                      n(d) && Bo(d) && s.add(d);
                    });
                },
                FragmentSpread: function (c, u, l, f, p) {
                  var d = r[c.name.value];
                  z(d, 19, c.name.value);
                  var g = a(d);
                  g.size > 0 &&
                    (p.forEach(function (v) {
                      n(v) && Bo(v) && s.add(v);
                    }),
                    s.add(c),
                    g.forEach(function (v) {
                      s.add(v);
                    }));
                },
              });
          }
          return i.get(o);
        }
        return a(e);
      }),
      t
    );
  })();
  var ha = new (mt ? WeakMap : Map)();
  function fm(t, e) {
    var r = t[e];
    typeof r == "function" &&
      (t[e] = function () {
        return ha.set(t, (ha.get(t) + 1) % 1e15), r.apply(this, arguments);
      });
  }
  function eO(t) {
    t.notifyTimeout &&
      (clearTimeout(t.notifyTimeout), (t.notifyTimeout = void 0));
  }
  var xl = (function () {
    function t(e, r) {
      r === void 0 && (r = e.generateQueryId()),
        (this.queryId = r),
        (this.listeners = new Set()),
        (this.document = null),
        (this.lastRequestId = 1),
        (this.stopped = !1),
        (this.dirty = !1),
        (this.observableQuery = null);
      var n = (this.cache = e.cache);
      ha.has(n) ||
        (ha.set(n, 0), fm(n, "evict"), fm(n, "modify"), fm(n, "reset"));
    }
    return (
      (t.prototype.init = function (e) {
        var r = e.networkStatus || ge.loading;
        return (
          this.variables &&
            this.networkStatus !== ge.loading &&
            !Ee(this.variables, e.variables) &&
            (r = ge.setVariables),
          Ee(e.variables, this.variables) || (this.lastDiff = void 0),
          Object.assign(this, {
            document: e.document,
            variables: e.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: r,
          }),
          e.observableQuery && this.setObservableQuery(e.observableQuery),
          e.lastRequestId && (this.lastRequestId = e.lastRequestId),
          this
        );
      }),
      (t.prototype.reset = function () {
        eO(this), (this.dirty = !1);
      }),
      (t.prototype.getDiff = function () {
        var e = this.getDiffOptions();
        if (this.lastDiff && Ee(e, this.lastDiff.options))
          return this.lastDiff.diff;
        this.updateWatch(this.variables);
        var r = this.observableQuery;
        if (r && r.options.fetchPolicy === "no-cache") return { complete: !1 };
        var n = this.cache.diff(e);
        return this.updateLastDiff(n, e), n;
      }),
      (t.prototype.updateLastDiff = function (e, r) {
        this.lastDiff = e
          ? { diff: e, options: r || this.getDiffOptions() }
          : void 0;
      }),
      (t.prototype.getDiffOptions = function (e) {
        var r;
        return (
          e === void 0 && (e = this.variables),
          {
            query: this.document,
            variables: e,
            returnPartialData: !0,
            optimistic: !0,
            canonizeResults:
              (r = this.observableQuery) === null || r === void 0
                ? void 0
                : r.options.canonizeResults,
          }
        );
      }),
      (t.prototype.setDiff = function (e) {
        var r = this,
          n = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(e),
          !this.dirty &&
            !Ee(n && n.result, e && e.result) &&
            ((this.dirty = !0),
            this.notifyTimeout ||
              (this.notifyTimeout = setTimeout(function () {
                return r.notify();
              }, 0)));
      }),
      (t.prototype.setObservableQuery = function (e) {
        var r = this;
        e !== this.observableQuery &&
          (this.oqListener && this.listeners.delete(this.oqListener),
          (this.observableQuery = e),
          e
            ? ((e.queryInfo = this),
              this.listeners.add(
                (this.oqListener = function () {
                  var n = r.getDiff();
                  n.fromOptimisticTransaction ? e.observe() : lm(e);
                })
              ))
            : delete this.oqListener);
      }),
      (t.prototype.notify = function () {
        var e = this;
        eO(this),
          this.shouldNotify() &&
            this.listeners.forEach(function (r) {
              return r(e);
            }),
          (this.dirty = !1);
      }),
      (t.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) return !1;
        if (kn(this.networkStatus) && this.observableQuery) {
          var e = this.observableQuery.options.fetchPolicy;
          if (e !== "cache-only" && e !== "cache-and-network") return !1;
        }
        return !0;
      }),
      (t.prototype.stop = function () {
        if (!this.stopped) {
          (this.stopped = !0),
            this.reset(),
            this.cancel(),
            (this.cancel = t.prototype.cancel);
          var e = this.observableQuery;
          e && e.stopPolling();
        }
      }),
      (t.prototype.cancel = function () {}),
      (t.prototype.updateWatch = function (e) {
        var r = this;
        e === void 0 && (e = this.variables);
        var n = this.observableQuery;
        if (!(n && n.options.fetchPolicy === "no-cache")) {
          var i = x(x({}, this.getDiffOptions(e)), {
            watcher: this,
            callback: function (a) {
              return r.setDiff(a);
            },
          });
          (!this.lastWatch || !Ee(i, this.lastWatch)) &&
            (this.cancel(),
            (this.cancel = this.cache.watch((this.lastWatch = i))));
        }
      }),
      (t.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
      }),
      (t.prototype.shouldWrite = function (e, r) {
        var n = this.lastWrite;
        return !(
          n &&
          n.dmCount === ha.get(this.cache) &&
          Ee(r, n.variables) &&
          Ee(e.data, n.result.data)
        );
      }),
      (t.prototype.markResult = function (e, r, n, i) {
        var a = this,
          o = new Mt(),
          s = st(e.errors) ? e.errors.slice(0) : [];
        if ((this.reset(), "incremental" in e && st(e.incremental))) {
          var c = ol(this.getDiff().result, e);
          e.data = c;
        } else if ("hasNext" in e && e.hasNext) {
          var u = this.getDiff();
          e.data = o.merge(u.result, e.data);
        }
        (this.graphQLErrors = s),
          n.fetchPolicy === "no-cache"
            ? this.updateLastDiff(
                { result: e.data, complete: !0 },
                this.getDiffOptions(n.variables)
              )
            : i !== 0 &&
              (wl(e, n.errorPolicy)
                ? this.cache.performTransaction(function (l) {
                    if (a.shouldWrite(e, n.variables))
                      l.writeQuery({
                        query: r,
                        data: e.data,
                        variables: n.variables,
                        overwrite: i === 1,
                      }),
                        (a.lastWrite = {
                          result: e,
                          variables: n.variables,
                          dmCount: ha.get(a.cache),
                        });
                    else if (a.lastDiff && a.lastDiff.diff.complete) {
                      e.data = a.lastDiff.diff.result;
                      return;
                    }
                    var f = a.getDiffOptions(n.variables),
                      p = l.diff(f);
                    !a.stopped &&
                      Ee(a.variables, n.variables) &&
                      a.updateWatch(n.variables),
                      a.updateLastDiff(p, f),
                      p.complete && (e.data = p.result);
                  })
                : (this.lastWrite = void 0));
      }),
      (t.prototype.markReady = function () {
        return (this.networkError = null), (this.networkStatus = ge.ready);
      }),
      (t.prototype.markError = function (e) {
        return (
          (this.networkStatus = ge.error),
          (this.lastWrite = void 0),
          this.reset(),
          e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors),
          e.networkError && (this.networkError = e.networkError),
          e
        );
      }),
      t
    );
  })();
  function wl(t, e) {
    e === void 0 && (e = "none");
    var r = e === "ignore" || e === "all",
      n = !sa(t);
    return !n && r && t.data && (n = !0), n;
  }
  var uK = Object.prototype.hasOwnProperty,
    tO = (function () {
      function t(e) {
        var r = e.cache,
          n = e.link,
          i = e.defaultOptions,
          a = e.documentTransform,
          o = e.queryDeduplication,
          s = o === void 0 ? !1 : o,
          c = e.onBroadcast,
          u = e.ssrMode,
          l = u === void 0 ? !1 : u,
          f = e.clientAwareness,
          p = f === void 0 ? {} : f,
          d = e.localState,
          g = e.assumeImmutableResults,
          v = g === void 0 ? !!r.assumeImmutableResults : g,
          y = this;
        (this.clientAwareness = {}),
          (this.queries = new Map()),
          (this.fetchCancelFns = new Map()),
          (this.transformCache = new (mt ? WeakMap : Map)()),
          (this.queryIdCounter = 1),
          (this.requestIdCounter = 1),
          (this.mutationIdCounter = 1),
          (this.inFlightLinkObservables = new Map());
        var m = new Go(
          function (I) {
            return y.cache.transformDocument(I);
          },
          { cache: !1 }
        );
        (this.cache = r),
          (this.link = n),
          (this.defaultOptions = i || Object.create(null)),
          (this.queryDeduplication = s),
          (this.clientAwareness = p),
          (this.localState = d || new Il({ cache: r })),
          (this.ssrMode = l),
          (this.assumeImmutableResults = v),
          (this.documentTransform = a ? m.concat(a).concat(m) : m),
          (this.onBroadcast = c) && (this.mutationStore = Object.create(null));
      }
      return (
        (t.prototype.stop = function () {
          var e = this;
          this.queries.forEach(function (r, n) {
            e.stopQueryNoBroadcast(n);
          }),
            this.cancelPendingFetches(Te(25));
        }),
        (t.prototype.cancelPendingFetches = function (e) {
          this.fetchCancelFns.forEach(function (r) {
            return r(e);
          }),
            this.fetchCancelFns.clear();
        }),
        (t.prototype.mutate = function (e) {
          var r,
            n,
            i = e.mutation,
            a = e.variables,
            o = e.optimisticResponse,
            s = e.updateQueries,
            c = e.refetchQueries,
            u = c === void 0 ? [] : c,
            l = e.awaitRefetchQueries,
            f = l === void 0 ? !1 : l,
            p = e.update,
            d = e.onQueryUpdated,
            g = e.fetchPolicy,
            v =
              g === void 0
                ? ((r = this.defaultOptions.mutate) === null || r === void 0
                    ? void 0
                    : r.fetchPolicy) || "network-only"
                : g,
            y = e.errorPolicy,
            m =
              y === void 0
                ? ((n = this.defaultOptions.mutate) === null || n === void 0
                    ? void 0
                    : n.errorPolicy) || "none"
                : y,
            I = e.keepRootFields,
            b = e.context;
          return Qt(this, void 0, void 0, function () {
            var w, k, _, A;
            return Yt(this, function (C) {
              switch (C.label) {
                case 0:
                  return (
                    z(i, 26),
                    z(v === "network-only" || v === "no-cache", 27),
                    (w = this.generateMutationId()),
                    (i = this.cache.transformForLink(this.transform(i))),
                    (k = this.getDocumentInfo(i).hasClientExports),
                    (a = this.getVariables(i, a)),
                    k
                      ? [4, this.localState.addExportedVariables(i, a, b)]
                      : [3, 2]
                  );
                case 1:
                  (a = C.sent()), (C.label = 2);
                case 2:
                  return (
                    (_ =
                      this.mutationStore &&
                      (this.mutationStore[w] = {
                        mutation: i,
                        variables: a,
                        loading: !0,
                        error: null,
                      })),
                    o &&
                      this.markMutationOptimistic(o, {
                        mutationId: w,
                        document: i,
                        variables: a,
                        fetchPolicy: v,
                        errorPolicy: m,
                        context: b,
                        updateQueries: s,
                        update: p,
                        keepRootFields: I,
                      }),
                    this.broadcastQueries(),
                    (A = this),
                    [
                      2,
                      new Promise(function (F, W) {
                        return il(
                          A.getObservableFromLink(
                            i,
                            x(x({}, b), { optimisticResponse: o }),
                            a,
                            !1
                          ),
                          function (j) {
                            if (sa(j) && m === "none")
                              throw new Xr({ graphQLErrors: sl(j) });
                            _ && ((_.loading = !1), (_.error = null));
                            var X = x({}, j);
                            return (
                              typeof u == "function" && (u = u(X)),
                              m === "ignore" && sa(X) && delete X.errors,
                              A.markMutationResult({
                                mutationId: w,
                                result: X,
                                document: i,
                                variables: a,
                                fetchPolicy: v,
                                errorPolicy: m,
                                context: b,
                                update: p,
                                updateQueries: s,
                                awaitRefetchQueries: f,
                                refetchQueries: u,
                                removeOptimistic: o ? w : void 0,
                                onQueryUpdated: d,
                                keepRootFields: I,
                              })
                            );
                          }
                        ).subscribe({
                          next: function (j) {
                            A.broadcastQueries(),
                              (!("hasNext" in j) || j.hasNext === !1) && F(j);
                          },
                          error: function (j) {
                            _ && ((_.loading = !1), (_.error = j)),
                              o && A.cache.removeOptimistic(w),
                              A.broadcastQueries(),
                              W(
                                j instanceof Xr
                                  ? j
                                  : new Xr({ networkError: j })
                              );
                          },
                        });
                      }),
                    ]
                  );
              }
            });
          });
        }),
        (t.prototype.markMutationResult = function (e, r) {
          var n = this;
          r === void 0 && (r = this.cache);
          var i = e.result,
            a = [],
            o = e.fetchPolicy === "no-cache";
          if (!o && wl(i, e.errorPolicy)) {
            if (
              (xn(i) ||
                a.push({
                  result: i.data,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables,
                }),
              xn(i) && st(i.incremental))
            ) {
              var s = r.diff({
                  id: "ROOT_MUTATION",
                  query: this.getDocumentInfo(e.document).asQuery,
                  variables: e.variables,
                  optimistic: !1,
                  returnPartialData: !0,
                }),
                c = void 0;
              s.result && (c = ol(s.result, i)),
                typeof c < "u" &&
                  ((i.data = c),
                  a.push({
                    result: c,
                    dataId: "ROOT_MUTATION",
                    query: e.document,
                    variables: e.variables,
                  }));
            }
            var u = e.updateQueries;
            u &&
              this.queries.forEach(function (f, p) {
                var d = f.observableQuery,
                  g = d && d.queryName;
                if (!(!g || !uK.call(u, g))) {
                  var v = u[g],
                    y = n.queries.get(p),
                    m = y.document,
                    I = y.variables,
                    b = r.diff({
                      query: m,
                      variables: I,
                      returnPartialData: !0,
                      optimistic: !1,
                    }),
                    w = b.result,
                    k = b.complete;
                  if (k && w) {
                    var _ = v(w, {
                      mutationResult: i,
                      queryName: (m && na(m)) || void 0,
                      queryVariables: I,
                    });
                    _ &&
                      a.push({
                        result: _,
                        dataId: "ROOT_QUERY",
                        query: m,
                        variables: I,
                      });
                  }
                }
              });
          }
          if (
            a.length > 0 ||
            e.refetchQueries ||
            e.update ||
            e.onQueryUpdated ||
            e.removeOptimistic
          ) {
            var l = [];
            if (
              (this.refetchQueries({
                updateCache: function (f) {
                  o ||
                    a.forEach(function (v) {
                      return f.write(v);
                    });
                  var p = e.update,
                    d = !U0(i) || (xn(i) && !i.hasNext);
                  if (p) {
                    if (!o) {
                      var g = f.diff({
                        id: "ROOT_MUTATION",
                        query: n.getDocumentInfo(e.document).asQuery,
                        variables: e.variables,
                        optimistic: !1,
                        returnPartialData: !0,
                      });
                      g.complete &&
                        ((i = x(x({}, i), { data: g.result })),
                        "incremental" in i && delete i.incremental,
                        "hasNext" in i && delete i.hasNext);
                    }
                    d &&
                      p(f, i, { context: e.context, variables: e.variables });
                  }
                  !o &&
                    !e.keepRootFields &&
                    d &&
                    f.modify({
                      id: "ROOT_MUTATION",
                      fields: function (v, y) {
                        var m = y.fieldName,
                          I = y.DELETE;
                        return m === "__typename" ? v : I;
                      },
                    });
                },
                include: e.refetchQueries,
                optimistic: !1,
                removeOptimistic: e.removeOptimistic,
                onQueryUpdated: e.onQueryUpdated || null,
              }).forEach(function (f) {
                return l.push(f);
              }),
              e.awaitRefetchQueries || e.onQueryUpdated)
            )
              return Promise.all(l).then(function () {
                return i;
              });
          }
          return Promise.resolve(i);
        }),
        (t.prototype.markMutationOptimistic = function (e, r) {
          var n = this,
            i = typeof e == "function" ? e(r.variables) : e;
          return this.cache.recordOptimisticTransaction(function (a) {
            try {
              n.markMutationResult(x(x({}, r), { result: { data: i } }), a);
            } catch (o) {
              globalThis.__DEV__ !== !1 && z.error(o);
            }
          }, r.mutationId);
        }),
        (t.prototype.fetchQuery = function (e, r, n) {
          return this.fetchConcastWithInfo(e, r, n).concast.promise;
        }),
        (t.prototype.getQueryStore = function () {
          var e = Object.create(null);
          return (
            this.queries.forEach(function (r, n) {
              e[n] = {
                variables: r.variables,
                networkStatus: r.networkStatus,
                networkError: r.networkError,
                graphQLErrors: r.graphQLErrors,
              };
            }),
            e
          );
        }),
        (t.prototype.resetErrors = function (e) {
          var r = this.queries.get(e);
          r && ((r.networkError = void 0), (r.graphQLErrors = []));
        }),
        (t.prototype.transform = function (e) {
          return this.documentTransform.transformDocument(e);
        }),
        (t.prototype.getDocumentInfo = function (e) {
          var r = this.transformCache;
          if (!r.has(e)) {
            var n = {
              hasClientExports: hg(e),
              hasForcedResolvers: this.localState.shouldForceResolvers(e),
              hasNonreactiveDirective: $r(["nonreactive"], e),
              clientQuery: this.localState.clientQuery(e),
              serverQuery: el(
                [
                  { name: "client", remove: !0 },
                  { name: "connection" },
                  { name: "nonreactive" },
                ],
                e
              ),
              defaultVars: oi(Or(e)),
              asQuery: x(x({}, e), {
                definitions: e.definitions.map(function (i) {
                  return i.kind === "OperationDefinition" &&
                    i.operation !== "query"
                    ? x(x({}, i), { operation: "query" })
                    : i;
                }),
              }),
            };
            r.set(e, n);
          }
          return r.get(e);
        }),
        (t.prototype.getVariables = function (e, r) {
          return x(x({}, this.getDocumentInfo(e).defaultVars), r);
        }),
        (t.prototype.watchQuery = function (e) {
          var r = this.transform(e.query);
          (e = x(x({}, e), { variables: this.getVariables(r, e.variables) })),
            typeof e.notifyOnNetworkStatusChange > "u" &&
              (e.notifyOnNetworkStatusChange = !1);
          var n = new xl(this),
            i = new El({ queryManager: this, queryInfo: n, options: e });
          return (
            (i.lastQuery = r),
            this.queries.set(i.queryId, n),
            n.init({ document: r, observableQuery: i, variables: i.variables }),
            i
          );
        }),
        (t.prototype.query = function (e, r) {
          var n = this;
          return (
            r === void 0 && (r = this.generateQueryId()),
            z(e.query, 28),
            z(e.query.kind === "Document", 29),
            z(!e.returnPartialData, 30),
            z(!e.pollInterval, 31),
            this.fetchQuery(
              r,
              x(x({}, e), { query: this.transform(e.query) })
            ).finally(function () {
              return n.stopQuery(r);
            })
          );
        }),
        (t.prototype.generateQueryId = function () {
          return String(this.queryIdCounter++);
        }),
        (t.prototype.generateRequestId = function () {
          return this.requestIdCounter++;
        }),
        (t.prototype.generateMutationId = function () {
          return String(this.mutationIdCounter++);
        }),
        (t.prototype.stopQueryInStore = function (e) {
          this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
        }),
        (t.prototype.stopQueryInStoreNoBroadcast = function (e) {
          var r = this.queries.get(e);
          r && r.stop();
        }),
        (t.prototype.clearStore = function (e) {
          return (
            e === void 0 && (e = { discardWatches: !0 }),
            this.cancelPendingFetches(Te(32)),
            this.queries.forEach(function (r) {
              r.observableQuery ? (r.networkStatus = ge.loading) : r.stop();
            }),
            this.mutationStore && (this.mutationStore = Object.create(null)),
            this.cache.reset(e)
          );
        }),
        (t.prototype.getObservableQueries = function (e) {
          var r = this;
          e === void 0 && (e = "active");
          var n = new Map(),
            i = new Map(),
            a = new Set();
          return (
            Array.isArray(e) &&
              e.forEach(function (o) {
                typeof o == "string"
                  ? i.set(o, !1)
                  : yg(o)
                  ? i.set(r.transform(o), !1)
                  : ce(o) && o.query && a.add(o);
              }),
            this.queries.forEach(function (o, s) {
              var c = o.observableQuery,
                u = o.document;
              if (c) {
                if (e === "all") {
                  n.set(s, c);
                  return;
                }
                var l = c.queryName,
                  f = c.options.fetchPolicy;
                if (f === "standby" || (e === "active" && !c.hasObservers()))
                  return;
                (e === "active" || (l && i.has(l)) || (u && i.has(u))) &&
                  (n.set(s, c), l && i.set(l, !0), u && i.set(u, !0));
              }
            }),
            a.size &&
              a.forEach(function (o) {
                var s = qo("legacyOneTimeQuery"),
                  c = r
                    .getQuery(s)
                    .init({ document: o.query, variables: o.variables }),
                  u = new El({
                    queryManager: r,
                    queryInfo: c,
                    options: x(x({}, o), { fetchPolicy: "network-only" }),
                  });
                z(u.queryId === s), c.setObservableQuery(u), n.set(s, u);
              }),
            globalThis.__DEV__ !== !1 &&
              i.size &&
              i.forEach(function (o, s) {
                o ||
                  (globalThis.__DEV__ !== !1 &&
                    z.warn(typeof s == "string" ? 33 : 34, s));
              }),
            n
          );
        }),
        (t.prototype.reFetchObservableQueries = function (e) {
          var r = this;
          e === void 0 && (e = !1);
          var n = [];
          return (
            this.getObservableQueries(e ? "all" : "active").forEach(function (
              i,
              a
            ) {
              var o = i.options.fetchPolicy;
              i.resetLastResults(),
                (e || (o !== "standby" && o !== "cache-only")) &&
                  n.push(i.refetch()),
                r.getQuery(a).setDiff(null);
            }),
            this.broadcastQueries(),
            Promise.all(n)
          );
        }),
        (t.prototype.setObservableQuery = function (e) {
          this.getQuery(e.queryId).setObservableQuery(e);
        }),
        (t.prototype.startGraphQLSubscription = function (e) {
          var r = this,
            n = e.query,
            i = e.fetchPolicy,
            a = e.errorPolicy,
            o = a === void 0 ? "none" : a,
            s = e.variables,
            c = e.context,
            u = c === void 0 ? {} : c;
          (n = this.transform(n)), (s = this.getVariables(n, s));
          var l = function (p) {
            return r.getObservableFromLink(n, u, p).map(function (d) {
              i !== "no-cache" &&
                (wl(d, o) &&
                  r.cache.write({
                    query: n,
                    result: d.data,
                    dataId: "ROOT_SUBSCRIPTION",
                    variables: p,
                  }),
                r.broadcastQueries());
              var g = sa(d),
                v = V0(d);
              if (g || v) {
                var y = {};
                if (
                  (g && (y.graphQLErrors = d.errors),
                  v && (y.protocolErrors = d.extensions[Zo]),
                  o === "none" || v)
                )
                  throw new Xr(y);
              }
              return o === "ignore" && delete d.errors, d;
            });
          };
          if (this.getDocumentInfo(n).hasClientExports) {
            var f = this.localState.addExportedVariables(n, s, u).then(l);
            return new se(function (p) {
              var d = null;
              return (
                f.then(function (g) {
                  return (d = g.subscribe(p));
                }, p.error),
                function () {
                  return d && d.unsubscribe();
                }
              );
            });
          }
          return l(s);
        }),
        (t.prototype.stopQuery = function (e) {
          this.stopQueryNoBroadcast(e), this.broadcastQueries();
        }),
        (t.prototype.stopQueryNoBroadcast = function (e) {
          this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
        }),
        (t.prototype.removeQuery = function (e) {
          this.fetchCancelFns.delete(e),
            this.queries.has(e) &&
              (this.getQuery(e).stop(), this.queries.delete(e));
        }),
        (t.prototype.broadcastQueries = function () {
          this.onBroadcast && this.onBroadcast(),
            this.queries.forEach(function (e) {
              return e.notify();
            });
        }),
        (t.prototype.getLocalState = function () {
          return this.localState;
        }),
        (t.prototype.getObservableFromLink = function (e, r, n, i) {
          var a = this,
            o;
          i === void 0 &&
            (i =
              (o = r?.queryDeduplication) !== null && o !== void 0
                ? o
                : this.queryDeduplication);
          var s,
            c = this.getDocumentInfo(e),
            u = c.serverQuery,
            l = c.clientQuery;
          if (u) {
            var f = this,
              p = f.inFlightLinkObservables,
              d = f.link,
              g = {
                query: u,
                variables: n,
                operationName: na(u) || void 0,
                context: this.prepareContext(x(x({}, r), { forceFetch: !i })),
              };
            if (((r = g.context), i)) {
              var v = si(u),
                y = p.get(v) || new Map();
              p.set(v, y);
              var m = Vt(n);
              if (((s = y.get(m)), !s)) {
                var I = new li([ca(d, g)]);
                y.set(m, (s = I)),
                  I.beforeNext(function () {
                    y.delete(m) && y.size < 1 && p.delete(v);
                  });
              }
            } else s = new li([ca(d, g)]);
          } else
            (s = new li([se.of({ data: {} })])), (r = this.prepareContext(r));
          return (
            l &&
              (s = il(s, function (b) {
                return a.localState.runResolvers({
                  document: l,
                  remoteResult: b,
                  context: r,
                  variables: n,
                });
              })),
            s
          );
        }),
        (t.prototype.getResultsFromLink = function (e, r, n) {
          var i = (e.lastRequestId = this.generateRequestId()),
            a = this.cache.transformForLink(n.query);
          return il(
            this.getObservableFromLink(a, n.context, n.variables),
            function (o) {
              var s = sl(o),
                c = s.length > 0;
              if (i >= e.lastRequestId) {
                if (c && n.errorPolicy === "none")
                  throw e.markError(new Xr({ graphQLErrors: s }));
                e.markResult(o, a, n, r), e.markReady();
              }
              var u = { data: o.data, loading: !1, networkStatus: ge.ready };
              return (
                c &&
                  n.errorPolicy !== "ignore" &&
                  ((u.errors = s), (u.networkStatus = ge.error)),
                u
              );
            },
            function (o) {
              var s = W0(o) ? o : new Xr({ networkError: o });
              throw (i >= e.lastRequestId && e.markError(s), s);
            }
          );
        }),
        (t.prototype.fetchConcastWithInfo = function (e, r, n, i) {
          var a = this;
          n === void 0 && (n = ge.loading), i === void 0 && (i = r.query);
          var o = this.getVariables(i, r.variables),
            s = this.getQuery(e),
            c = this.defaultOptions.watchQuery,
            u = r.fetchPolicy,
            l = u === void 0 ? (c && c.fetchPolicy) || "cache-first" : u,
            f = r.errorPolicy,
            p = f === void 0 ? (c && c.errorPolicy) || "none" : f,
            d = r.returnPartialData,
            g = d === void 0 ? !1 : d,
            v = r.notifyOnNetworkStatusChange,
            y = v === void 0 ? !1 : v,
            m = r.context,
            I = m === void 0 ? {} : m,
            b = Object.assign({}, r, {
              query: i,
              variables: o,
              fetchPolicy: l,
              errorPolicy: p,
              returnPartialData: g,
              notifyOnNetworkStatusChange: y,
              context: I,
            }),
            w = function (F) {
              b.variables = F;
              var W = a.fetchQueryByPolicy(s, b, n);
              return (
                b.fetchPolicy !== "standby" &&
                  W.sources.length > 0 &&
                  s.observableQuery &&
                  s.observableQuery.applyNextFetchPolicy("after-fetch", r),
                W
              );
            },
            k = function () {
              return a.fetchCancelFns.delete(e);
            };
          this.fetchCancelFns.set(e, function (F) {
            k(),
              setTimeout(function () {
                return _.cancel(F);
              });
          });
          var _, A;
          if (this.getDocumentInfo(b.query).hasClientExports)
            (_ = new li(
              this.localState
                .addExportedVariables(b.query, b.variables, b.context)
                .then(w)
                .then(function (F) {
                  return F.sources;
                })
            )),
              (A = !0);
          else {
            var C = w(b.variables);
            (A = C.fromLink), (_ = new li(C.sources));
          }
          return _.promise.then(k, k), { concast: _, fromLink: A };
        }),
        (t.prototype.refetchQueries = function (e) {
          var r = this,
            n = e.updateCache,
            i = e.include,
            a = e.optimistic,
            o = a === void 0 ? !1 : a,
            s = e.removeOptimistic,
            c = s === void 0 ? (o ? qo("refetchQueries") : void 0) : s,
            u = e.onQueryUpdated,
            l = new Map();
          i &&
            this.getObservableQueries(i).forEach(function (p, d) {
              l.set(d, { oq: p, lastDiff: r.getQuery(d).getDiff() });
            });
          var f = new Map();
          return (
            n &&
              this.cache.batch({
                update: n,
                optimistic: (o && c) || !1,
                removeOptimistic: c,
                onWatchUpdated: function (p, d, g) {
                  var v = p.watcher instanceof xl && p.watcher.observableQuery;
                  if (v) {
                    if (u) {
                      l.delete(v.queryId);
                      var y = u(v, d, g);
                      return (
                        y === !0 && (y = v.refetch()),
                        y !== !1 && f.set(v, y),
                        y
                      );
                    }
                    u !== null &&
                      l.set(v.queryId, { oq: v, lastDiff: g, diff: d });
                  }
                },
              }),
            l.size &&
              l.forEach(function (p, d) {
                var g = p.oq,
                  v = p.lastDiff,
                  y = p.diff,
                  m;
                if (u) {
                  if (!y) {
                    var I = g.queryInfo;
                    I.reset(), (y = I.getDiff());
                  }
                  m = u(g, y, v);
                }
                (!u || m === !0) && (m = g.refetch()),
                  m !== !1 && f.set(g, m),
                  d.indexOf("legacyOneTimeQuery") >= 0 &&
                    r.stopQueryNoBroadcast(d);
              }),
            c && this.cache.removeOptimistic(c),
            f
          );
        }),
        (t.prototype.fetchQueryByPolicy = function (e, r, n) {
          var i = this,
            a = r.query,
            o = r.variables,
            s = r.fetchPolicy,
            c = r.refetchWritePolicy,
            u = r.errorPolicy,
            l = r.returnPartialData,
            f = r.context,
            p = r.notifyOnNetworkStatusChange,
            d = e.networkStatus;
          e.init({ document: a, variables: o, networkStatus: n });
          var g = function () {
              return e.getDiff();
            },
            v = function (w, k) {
              k === void 0 && (k = e.networkStatus || ge.loading);
              var _ = w.result;
              globalThis.__DEV__ !== !1 && !l && !Ee(_, {}) && pm(w.missing);
              var A = function (C) {
                return se.of(
                  x(
                    { data: C, loading: kn(k), networkStatus: k },
                    w.complete ? null : { partial: !0 }
                  )
                );
              };
              return _ && i.getDocumentInfo(a).hasForcedResolvers
                ? i.localState
                    .runResolvers({
                      document: a,
                      remoteResult: { data: _ },
                      context: f,
                      variables: o,
                      onlyRunForcedResolvers: !0,
                    })
                    .then(function (C) {
                      return A(C.data || void 0);
                    })
                : u === "none" && k === ge.refetch && Array.isArray(w.missing)
                ? A(void 0)
                : A(_);
            },
            y =
              s === "no-cache" ? 0 : n === ge.refetch && c !== "merge" ? 1 : 2,
            m = function () {
              return i.getResultsFromLink(e, y, {
                query: a,
                variables: o,
                context: f,
                fetchPolicy: s,
                errorPolicy: u,
              });
            },
            I = p && typeof d == "number" && d !== n && kn(n);
          switch (s) {
            default:
            case "cache-first": {
              var b = g();
              return b.complete
                ? { fromLink: !1, sources: [v(b, e.markReady())] }
                : l || I
                ? { fromLink: !0, sources: [v(b), m()] }
                : { fromLink: !0, sources: [m()] };
            }
            case "cache-and-network": {
              var b = g();
              return b.complete || l || I
                ? { fromLink: !0, sources: [v(b), m()] }
                : { fromLink: !0, sources: [m()] };
            }
            case "cache-only":
              return { fromLink: !1, sources: [v(g(), e.markReady())] };
            case "network-only":
              return I
                ? { fromLink: !0, sources: [v(g()), m()] }
                : { fromLink: !0, sources: [m()] };
            case "no-cache":
              return I
                ? { fromLink: !0, sources: [v(e.getDiff()), m()] }
                : { fromLink: !0, sources: [m()] };
            case "standby":
              return { fromLink: !1, sources: [] };
          }
        }),
        (t.prototype.getQuery = function (e) {
          return (
            e && !this.queries.has(e) && this.queries.set(e, new xl(this, e)),
            this.queries.get(e)
          );
        }),
        (t.prototype.prepareContext = function (e) {
          e === void 0 && (e = {});
          var r = this.localState.prepareContext(e);
          return x(x({}, r), { clientAwareness: this.clientAwareness });
        }),
        t
      );
    })();
  var rO = !1;
  var dm = (function () {
    function t(e) {
      var r = this;
      if (
        ((this.resetStoreCallbacks = []),
        (this.clearStoreCallbacks = []),
        !e.cache)
      )
        throw Te(15);
      var n = e.uri,
        i = e.credentials,
        a = e.headers,
        o = e.cache,
        s = e.documentTransform,
        c = e.ssrMode,
        u = c === void 0 ? !1 : c,
        l = e.ssrForceFetchDelay,
        f = l === void 0 ? 0 : l,
        p = e.connectToDevTools,
        d =
          p === void 0
            ? typeof window == "object" &&
              !window.__APOLLO_CLIENT__ &&
              globalThis.__DEV__ !== !1
            : p,
        g = e.queryDeduplication,
        v = g === void 0 ? !0 : g,
        y = e.defaultOptions,
        m = e.assumeImmutableResults,
        I = m === void 0 ? o.assumeImmutableResults : m,
        b = e.resolvers,
        w = e.typeDefs,
        k = e.fragmentMatcher,
        _ = e.name,
        A = e.version,
        C = e.link;
      C ||
        (C = n ? new jg({ uri: n, credentials: i, headers: a }) : Be.empty()),
        (this.link = C),
        (this.cache = o),
        (this.disableNetworkFetches = u || f > 0),
        (this.queryDeduplication = v),
        (this.defaultOptions = y || Object.create(null)),
        (this.typeDefs = w),
        f &&
          setTimeout(function () {
            return (r.disableNetworkFetches = !1);
          }, f),
        (this.watchQuery = this.watchQuery.bind(this)),
        (this.query = this.query.bind(this)),
        (this.mutate = this.mutate.bind(this)),
        (this.resetStore = this.resetStore.bind(this)),
        (this.reFetchObservableQueries =
          this.reFetchObservableQueries.bind(this)),
        (this.version = Uo),
        (this.localState = new Il({
          cache: o,
          client: this,
          resolvers: b,
          fragmentMatcher: k,
        })),
        (this.queryManager = new tO({
          cache: this.cache,
          link: this.link,
          defaultOptions: this.defaultOptions,
          documentTransform: s,
          queryDeduplication: v,
          ssrMode: u,
          clientAwareness: { name: _, version: A },
          localState: this.localState,
          assumeImmutableResults: I,
          onBroadcast: d
            ? function () {
                r.devToolsHookCb &&
                  r.devToolsHookCb({
                    action: {},
                    state: {
                      queries: r.queryManager.getQueryStore(),
                      mutations: r.queryManager.mutationStore || {},
                    },
                    dataWithOptimisticResults: r.cache.extract(!0),
                  });
              }
            : void 0,
        })),
        d && this.connectToDevTools();
    }
    return (
      (t.prototype.connectToDevTools = function () {
        if (typeof window == "object") {
          var e = window,
            r = Symbol.for("apollo.devtools");
          (e[r] = e[r] || []).push(this), (e.__APOLLO_CLIENT__ = this);
        }
        !rO &&
          globalThis.__DEV__ !== !1 &&
          ((rO = !0),
          setTimeout(function () {
            if (
              typeof window < "u" &&
              window.document &&
              window.top === window.self &&
              !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__
            ) {
              var n = window.navigator,
                i = n && n.userAgent,
                a = void 0;
              typeof i == "string" &&
                (i.indexOf("Chrome/") > -1
                  ? (a =
                      "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")
                  : i.indexOf("Firefox/") > -1 &&
                    (a =
                      "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
                a &&
                  globalThis.__DEV__ !== !1 &&
                  z.log(
                    "Download the Apollo DevTools for a better development experience: %s",
                    a
                  );
            }
          }, 1e4));
      }),
      Object.defineProperty(t.prototype, "documentTransform", {
        get: function () {
          return this.queryManager.documentTransform;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.stop = function () {
        this.queryManager.stop();
      }),
      (t.prototype.watchQuery = function (e) {
        return (
          this.defaultOptions.watchQuery &&
            (e = Yo(this.defaultOptions.watchQuery, e)),
          this.disableNetworkFetches &&
            (e.fetchPolicy === "network-only" ||
              e.fetchPolicy === "cache-and-network") &&
            (e = x(x({}, e), { fetchPolicy: "cache-first" })),
          this.queryManager.watchQuery(e)
        );
      }),
      (t.prototype.query = function (e) {
        return (
          this.defaultOptions.query && (e = Yo(this.defaultOptions.query, e)),
          z(e.fetchPolicy !== "cache-and-network", 16),
          this.disableNetworkFetches &&
            e.fetchPolicy === "network-only" &&
            (e = x(x({}, e), { fetchPolicy: "cache-first" })),
          this.queryManager.query(e)
        );
      }),
      (t.prototype.mutate = function (e) {
        return (
          this.defaultOptions.mutate && (e = Yo(this.defaultOptions.mutate, e)),
          this.queryManager.mutate(e)
        );
      }),
      (t.prototype.subscribe = function (e) {
        return this.queryManager.startGraphQLSubscription(e);
      }),
      (t.prototype.readQuery = function (e, r) {
        return r === void 0 && (r = !1), this.cache.readQuery(e, r);
      }),
      (t.prototype.readFragment = function (e, r) {
        return r === void 0 && (r = !1), this.cache.readFragment(e, r);
      }),
      (t.prototype.writeQuery = function (e) {
        var r = this.cache.writeQuery(e);
        return e.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
      }),
      (t.prototype.writeFragment = function (e) {
        var r = this.cache.writeFragment(e);
        return e.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
      }),
      (t.prototype.__actionHookForDevTools = function (e) {
        this.devToolsHookCb = e;
      }),
      (t.prototype.__requestRaw = function (e) {
        return ca(this.link, e);
      }),
      (t.prototype.resetStore = function () {
        var e = this;
        return Promise.resolve()
          .then(function () {
            return e.queryManager.clearStore({ discardWatches: !1 });
          })
          .then(function () {
            return Promise.all(
              e.resetStoreCallbacks.map(function (r) {
                return r();
              })
            );
          })
          .then(function () {
            return e.reFetchObservableQueries();
          });
      }),
      (t.prototype.clearStore = function () {
        var e = this;
        return Promise.resolve()
          .then(function () {
            return e.queryManager.clearStore({ discardWatches: !0 });
          })
          .then(function () {
            return Promise.all(
              e.clearStoreCallbacks.map(function (r) {
                return r();
              })
            );
          });
      }),
      (t.prototype.onResetStore = function (e) {
        var r = this;
        return (
          this.resetStoreCallbacks.push(e),
          function () {
            r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function (n) {
              return n !== e;
            });
          }
        );
      }),
      (t.prototype.onClearStore = function (e) {
        var r = this;
        return (
          this.clearStoreCallbacks.push(e),
          function () {
            r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function (n) {
              return n !== e;
            });
          }
        );
      }),
      (t.prototype.reFetchObservableQueries = function (e) {
        return this.queryManager.reFetchObservableQueries(e);
      }),
      (t.prototype.refetchQueries = function (e) {
        var r = this.queryManager.refetchQueries(e),
          n = [],
          i = [];
        r.forEach(function (o, s) {
          n.push(s), i.push(o);
        });
        var a = Promise.all(i);
        return (
          (a.queries = n),
          (a.results = i),
          a.catch(function (o) {
            globalThis.__DEV__ !== !1 && z.debug(17, o);
          }),
          a
        );
      }),
      (t.prototype.getObservableQueries = function (e) {
        return (
          e === void 0 && (e = "active"),
          this.queryManager.getObservableQueries(e)
        );
      }),
      (t.prototype.extract = function (e) {
        return this.cache.extract(e);
      }),
      (t.prototype.restore = function (e) {
        return this.cache.restore(e);
      }),
      (t.prototype.addResolvers = function (e) {
        this.localState.addResolvers(e);
      }),
      (t.prototype.setResolvers = function (e) {
        this.localState.setResolvers(e);
      }),
      (t.prototype.getResolvers = function () {
        return this.localState.getResolvers();
      }),
      (t.prototype.setLocalStateFragmentMatcher = function (e) {
        this.localState.setFragmentMatcher(e);
      }),
      (t.prototype.setLink = function (e) {
        this.link = this.queryManager.link = e;
      }),
      t
    );
  })();
  m0(globalThis.__DEV__ !== !1 ? "log" : "silent");
  function nO(t) {
    return new Be(function (e, r) {
      var n = Ge(e, []);
      return new se(function (i) {
        var a,
          o = !1;
        return (
          Promise.resolve(n)
            .then(function (s) {
              return t(s, e.getContext());
            })
            .then(e.setContext)
            .then(function () {
              o ||
                (a = r(e).subscribe({
                  next: i.next.bind(i),
                  error: i.error.bind(i),
                  complete: i.complete.bind(i),
                }));
            })
            .catch(i.error.bind(i)),
          function () {
            (o = !0), a && a.unsubscribe();
          }
        );
      });
    });
  }
  function lK(t) {
    return ce(t) && "code" in t && "reason" in t;
  }
  function pK(t) {
    var e;
    return (
      ce(t) &&
      ((e = t.target) === null || e === void 0 ? void 0 : e.readyState) ===
        WebSocket.CLOSED
    );
  }
  var iO = (function (t) {
    Le(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return (n.client = r), n;
    }
    return (
      (e.prototype.request = function (r) {
        var n = this;
        return new se(function (i) {
          return n.client.subscribe(x(x({}, r), { query: si(r.query) }), {
            next: i.next.bind(i),
            complete: i.complete.bind(i),
            error: function (a) {
              if (a instanceof Error) return i.error(a);
              var o = lK(a);
              return o || pK(a)
                ? i.error(
                    new Error(
                      "Socket closed"
                        .concat(o ? " with event ".concat(a.code) : "")
                        .concat(o ? " ".concat(a.reason) : "")
                    )
                  )
                : i.error(
                    new Xr({ graphQLErrors: Array.isArray(a) ? a : [a] })
                  );
            },
          });
        });
      }),
      e
    );
  })(Be);
  function Ot(t) {
    return t === null ? "null" : Array.isArray(t) ? "array" : typeof t;
  }
  function Zr(t) {
    return Ot(t) === "object";
  }
  function aO(t) {
    return Array.isArray(t) && t.length > 0 && t.every((e) => "message" in e);
  }
  function hm(t, e) {
    return t.length < 124 ? t : e;
  }
  var oO = "graphql-transport-ws";
  var Nt;
  (function (t) {
    (t[(t.InternalServerError = 4500)] = "InternalServerError"),
      (t[(t.InternalClientError = 4005)] = "InternalClientError"),
      (t[(t.BadRequest = 4400)] = "BadRequest"),
      (t[(t.BadResponse = 4004)] = "BadResponse"),
      (t[(t.Unauthorized = 4401)] = "Unauthorized"),
      (t[(t.Forbidden = 4403)] = "Forbidden"),
      (t[(t.SubprotocolNotAcceptable = 4406)] = "SubprotocolNotAcceptable"),
      (t[(t.ConnectionInitialisationTimeout = 4408)] =
        "ConnectionInitialisationTimeout"),
      (t[(t.ConnectionAcknowledgementTimeout = 4504)] =
        "ConnectionAcknowledgementTimeout"),
      (t[(t.SubscriberAlreadyExists = 4409)] = "SubscriberAlreadyExists"),
      (t[(t.TooManyInitialisationRequests = 4429)] =
        "TooManyInitialisationRequests");
  })(Nt || (Nt = {}));
  var qe;
  (function (t) {
    (t.ConnectionInit = "connection_init"),
      (t.ConnectionAck = "connection_ack"),
      (t.Ping = "ping"),
      (t.Pong = "pong"),
      (t.Subscribe = "subscribe"),
      (t.Next = "next"),
      (t.Error = "error"),
      (t.Complete = "complete");
  })(qe || (qe = {}));
  function sO(t) {
    if (!Zr(t))
      throw new Error(`Message is expected to be an object, but got ${Ot(t)}`);
    if (!t.type) throw new Error("Message is missing the 'type' property");
    if (typeof t.type != "string")
      throw new Error(
        `Message is expects the 'type' property to be a string, but got ${Ot(
          t.type
        )}`
      );
    switch (t.type) {
      case qe.ConnectionInit:
      case qe.ConnectionAck:
      case qe.Ping:
      case qe.Pong: {
        if (t.payload != null && !Zr(t.payload))
          throw new Error(
            `"${t.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${t.payload}"`
          );
        break;
      }
      case qe.Subscribe: {
        if (typeof t.id != "string")
          throw new Error(
            `"${
              t.type
            }" message expects the 'id' property to be a string, but got ${Ot(
              t.id
            )}`
          );
        if (!t.id)
          throw new Error(
            `"${t.type}" message requires a non-empty 'id' property`
          );
        if (!Zr(t.payload))
          throw new Error(
            `"${
              t.type
            }" message expects the 'payload' property to be an object, but got ${Ot(
              t.payload
            )}`
          );
        if (typeof t.payload.query != "string")
          throw new Error(
            `"${
              t.type
            }" message payload expects the 'query' property to be a string, but got ${Ot(
              t.payload.query
            )}`
          );
        if (t.payload.variables != null && !Zr(t.payload.variables))
          throw new Error(
            `"${
              t.type
            }" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Ot(
              t.payload.variables
            )}`
          );
        if (
          t.payload.operationName != null &&
          Ot(t.payload.operationName) !== "string"
        )
          throw new Error(
            `"${
              t.type
            }" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Ot(
              t.payload.operationName
            )}`
          );
        if (t.payload.extensions != null && !Zr(t.payload.extensions))
          throw new Error(
            `"${
              t.type
            }" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Ot(
              t.payload.extensions
            )}`
          );
        break;
      }
      case qe.Next: {
        if (typeof t.id != "string")
          throw new Error(
            `"${
              t.type
            }" message expects the 'id' property to be a string, but got ${Ot(
              t.id
            )}`
          );
        if (!t.id)
          throw new Error(
            `"${t.type}" message requires a non-empty 'id' property`
          );
        if (!Zr(t.payload))
          throw new Error(
            `"${
              t.type
            }" message expects the 'payload' property to be an object, but got ${Ot(
              t.payload
            )}`
          );
        break;
      }
      case qe.Error: {
        if (typeof t.id != "string")
          throw new Error(
            `"${
              t.type
            }" message expects the 'id' property to be a string, but got ${Ot(
              t.id
            )}`
          );
        if (!t.id)
          throw new Error(
            `"${t.type}" message requires a non-empty 'id' property`
          );
        if (!aO(t.payload))
          throw new Error(
            `"${
              t.type
            }" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(
              t.payload
            )}`
          );
        break;
      }
      case qe.Complete: {
        if (typeof t.id != "string")
          throw new Error(
            `"${
              t.type
            }" message expects the 'id' property to be a string, but got ${Ot(
              t.id
            )}`
          );
        if (!t.id)
          throw new Error(
            `"${t.type}" message requires a non-empty 'id' property`
          );
        break;
      }
      default:
        throw new Error(`Invalid message 'type' property "${t.type}"`);
    }
    return t;
  }
  function cO(t, e) {
    return sO(typeof t == "string" ? JSON.parse(t, e) : t);
  }
  function ga(t, e) {
    return sO(t), JSON.stringify(t, e);
  }
  var ma = function (t) {
      return this instanceof ma ? ((this.v = t), this) : new ma(t);
    },
    fK = function (t, e, r) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var n = r.apply(t, e || []),
        i,
        a = [];
      return (
        (i = {}),
        o("next"),
        o("throw"),
        o("return"),
        (i[Symbol.asyncIterator] = function () {
          return this;
        }),
        i
      );
      function o(p) {
        n[p] &&
          (i[p] = function (d) {
            return new Promise(function (g, v) {
              a.push([p, d, g, v]) > 1 || s(p, d);
            });
          });
      }
      function s(p, d) {
        try {
          c(n[p](d));
        } catch (g) {
          f(a[0][3], g);
        }
      }
      function c(p) {
        p.value instanceof ma
          ? Promise.resolve(p.value.v).then(u, l)
          : f(a[0][2], p);
      }
      function u(p) {
        s("next", p);
      }
      function l(p) {
        s("throw", p);
      }
      function f(p, d) {
        p(d), a.shift(), a.length && s(a[0][0], a[0][1]);
      }
    };
  function uO(t) {
    let {
        url: e,
        connectionParams: r,
        lazy: n = !0,
        onNonLazyError: i = console.error,
        lazyCloseTimeout: a = 0,
        keepAlive: o = 0,
        disablePong: s,
        connectionAckWaitTimeout: c = 0,
        retryAttempts: u = 5,
        retryWait: l = async function (ee) {
          let R = 1e3;
          for (let G = 0; G < ee; G++) R *= 2;
          await new Promise((G) =>
            setTimeout(G, R + Math.floor(Math.random() * 2700 + 300))
          );
        },
        shouldRetry: f = Al,
        isFatalConnectionProblem: p,
        on: d,
        webSocketImpl: g,
        generateID: v = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            (ee) => {
              let R = (Math.random() * 16) | 0;
              return (ee == "x" ? R : (R & 3) | 8).toString(16);
            }
          );
        },
        jsonMessageReplacer: y,
        jsonMessageReviver: m,
      } = t,
      I;
    if (g) {
      if (!hK(g)) throw new Error("Invalid WebSocket implementation provided");
      I = g;
    } else
      typeof WebSocket < "u"
        ? (I = WebSocket)
        : typeof globalThis < "u"
        ? (I = globalThis.WebSocket || globalThis.MozWebSocket)
        : typeof window < "u" && (I = window.WebSocket || window.MozWebSocket);
    if (!I)
      throw new Error(
        "WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`"
      );
    let b = I,
      w = (() => {
        let V = (() => {
            let R = {};
            return {
              on(G, S) {
                return (
                  (R[G] = S),
                  () => {
                    delete R[G];
                  }
                );
              },
              emit(G) {
                var S;
                "id" in G &&
                  ((S = R[G.id]) === null || S === void 0 || S.call(R, G));
              },
            };
          })(),
          ee = {
            connecting: d?.connecting ? [d.connecting] : [],
            opened: d?.opened ? [d.opened] : [],
            connected: d?.connected ? [d.connected] : [],
            ping: d?.ping ? [d.ping] : [],
            pong: d?.pong ? [d.pong] : [],
            message: d?.message ? [V.emit, d.message] : [V.emit],
            closed: d?.closed ? [d.closed] : [],
            error: d?.error ? [d.error] : [],
          };
        return {
          onMessage: V.on,
          on(R, G) {
            let S = ee[R];
            return (
              S.push(G),
              () => {
                S.splice(S.indexOf(G), 1);
              }
            );
          },
          emit(R, ...G) {
            for (let S of [...ee[R]]) S(...G);
          },
        };
      })();
    function k(V) {
      let ee = [
        w.on("error", (R) => {
          ee.forEach((G) => G()), V(R);
        }),
        w.on("closed", (R) => {
          ee.forEach((G) => G()), V(R);
        }),
      ];
    }
    let _,
      A = 0,
      C,
      F = !1,
      W = 0,
      j = !1;
    async function X() {
      clearTimeout(C);
      let [V, ee] = await (_ ??
        (_ = new Promise((S, O) =>
          (async () => {
            if (F) {
              if ((await l(W), !A))
                return (
                  (_ = void 0),
                  O({ code: 1e3, reason: "All Subscriptions Gone" })
                );
              W++;
            }
            w.emit("connecting");
            let E = new b(typeof e == "function" ? await e() : e, oO),
              N,
              D;
            function Q() {
              isFinite(o) &&
                o > 0 &&
                (clearTimeout(D),
                (D = setTimeout(() => {
                  E.readyState === b.OPEN &&
                    (E.send(ga({ type: qe.Ping })), w.emit("ping", !1, void 0));
                }, o)));
            }
            k((H) => {
              (_ = void 0),
                clearTimeout(N),
                clearTimeout(D),
                O(H),
                Al(H) &&
                  H.code === 4499 &&
                  (E.close(4499, "Terminated"),
                  (E.onerror = null),
                  (E.onclose = null));
            }),
              (E.onerror = (H) => w.emit("error", H)),
              (E.onclose = (H) => w.emit("closed", H)),
              (E.onopen = async () => {
                try {
                  w.emit("opened", E);
                  let H = typeof r == "function" ? await r() : r;
                  if (E.readyState !== b.OPEN) return;
                  E.send(
                    ga(
                      H
                        ? { type: qe.ConnectionInit, payload: H }
                        : { type: qe.ConnectionInit },
                      y
                    )
                  ),
                    isFinite(c) &&
                      c > 0 &&
                      (N = setTimeout(() => {
                        E.close(
                          Nt.ConnectionAcknowledgementTimeout,
                          "Connection acknowledgement timeout"
                        );
                      }, c)),
                    Q();
                } catch (H) {
                  w.emit("error", H),
                    E.close(
                      Nt.InternalClientError,
                      hm(
                        H instanceof Error ? H.message : new Error(H).message,
                        "Internal client error"
                      )
                    );
                }
              });
            let Y = !1;
            E.onmessage = ({ data: H }) => {
              try {
                let ae = cO(H, m);
                if (
                  (w.emit("message", ae),
                  ae.type === "ping" || ae.type === "pong")
                ) {
                  w.emit(ae.type, !0, ae.payload),
                    ae.type === "pong"
                      ? Q()
                      : s ||
                        (E.send(
                          ga(
                            ae.payload
                              ? { type: qe.Pong, payload: ae.payload }
                              : { type: qe.Pong }
                          )
                        ),
                        w.emit("pong", !1, ae.payload));
                  return;
                }
                if (Y) return;
                if (ae.type !== qe.ConnectionAck)
                  throw new Error(`First message cannot be of type ${ae.type}`);
                clearTimeout(N),
                  (Y = !0),
                  w.emit("connected", E, ae.payload),
                  (F = !1),
                  (W = 0),
                  S([E, new Promise((q, L) => k(L))]);
              } catch (ae) {
                (E.onmessage = null),
                  w.emit("error", ae),
                  E.close(
                    Nt.BadResponse,
                    hm(
                      ae instanceof Error ? ae.message : new Error(ae).message,
                      "Bad response"
                    )
                  );
              }
            };
          })()
        )));
      V.readyState === b.CLOSING && (await ee);
      let R = () => {},
        G = new Promise((S) => (R = S));
      return [
        V,
        R,
        Promise.race([
          G.then(() => {
            if (!A) {
              let S = () => V.close(1e3, "Normal Closure");
              isFinite(a) && a > 0
                ? (C = setTimeout(() => {
                    V.readyState === b.OPEN && S();
                  }, a))
                : S();
            }
          }),
          ee,
        ]),
      ];
    }
    function P(V) {
      if (
        Al(V) &&
        (dK(V.code) ||
          [
            Nt.InternalServerError,
            Nt.InternalClientError,
            Nt.BadRequest,
            Nt.BadResponse,
            Nt.Unauthorized,
            Nt.SubprotocolNotAcceptable,
            Nt.SubscriberAlreadyExists,
            Nt.TooManyInitialisationRequests,
          ].includes(V.code))
      )
        throw V;
      if (j) return !1;
      if (Al(V) && V.code === 1e3) return A > 0;
      if (!u || W >= u || !f(V) || p?.(V)) throw V;
      return (F = !0);
    }
    n ||
      (async () => {
        for (A++; ; )
          try {
            let [, , V] = await X();
            await V;
          } catch (V) {
            try {
              if (!P(V)) return;
            } catch (ee) {
              return i?.(ee);
            }
          }
      })();
    function ie(V, ee) {
      let R = v(V),
        G = !1,
        S = !1,
        O = () => {
          A--, (G = !0);
        };
      return (
        (async () => {
          for (A++; ; )
            try {
              let [E, N, D] = await X();
              if (G) return N();
              let Q = w.onMessage(R, (Y) => {
                switch (Y.type) {
                  case qe.Next: {
                    ee.next(Y.payload);
                    return;
                  }
                  case qe.Error: {
                    (S = !0), (G = !0), ee.error(Y.payload), O();
                    return;
                  }
                  case qe.Complete: {
                    (G = !0), O();
                    return;
                  }
                }
              });
              E.send(ga({ id: R, type: qe.Subscribe, payload: V }, y)),
                (O = () => {
                  !G &&
                    E.readyState === b.OPEN &&
                    E.send(ga({ id: R, type: qe.Complete }, y)),
                    A--,
                    (G = !0),
                    N();
                }),
                await D.finally(Q);
              return;
            } catch (E) {
              if (!P(E)) return;
            }
        })()
          .then(() => {
            S || ee.complete();
          })
          .catch((E) => {
            ee.error(E);
          }),
        () => {
          G || O();
        }
      );
    }
    return {
      on: w.on,
      subscribe: ie,
      iterate(V) {
        let ee = [],
          R = { done: !1, error: null, resolve: () => {} },
          G = ie(V, {
            next(O) {
              ee.push(O), R.resolve();
            },
            error(O) {
              (R.done = !0), (R.error = O), R.resolve();
            },
            complete() {
              (R.done = !0), R.resolve();
            },
          }),
          S = (function () {
            return fK(this, arguments, function* () {
              for (;;) {
                for (
                  ee.length || (yield ma(new Promise((N) => (R.resolve = N))));
                  ee.length;

                )
                  yield yield ma(ee.shift());
                if (R.error) throw R.error;
                if (R.done) return yield ma(void 0);
              }
            });
          })();
        return (
          (S.throw = async (O) => (
            R.done || ((R.done = !0), (R.error = O), R.resolve()),
            { done: !0, value: void 0 }
          )),
          (S.return = async () => (G(), { done: !0, value: void 0 })),
          S
        );
      },
      async dispose() {
        if (((j = !0), _)) {
          let [V] = await _;
          V.close(1e3, "Normal Closure");
        }
      },
      terminate() {
        _ &&
          w.emit("closed", { code: 4499, reason: "Terminated", wasClean: !1 });
      },
    };
  }
  function Al(t) {
    return Zr(t) && "code" in t && "reason" in t;
  }
  function dK(t) {
    return [1e3, 1001, 1006, 1005, 1012, 1013, 1014].includes(t)
      ? !1
      : t >= 1e3 && t <= 1999;
  }
  function hK(t) {
    return (
      typeof t == "function" &&
      "constructor" in t &&
      "CLOSED" in t &&
      "CLOSING" in t &&
      "CONNECTING" in t &&
      "OPEN" in t
    );
  }
  function gm(t) {
    return new Be(function (e, r) {
      return new se(function (n) {
        var i, a, o;
        try {
          i = r(e).subscribe({
            next: function (s) {
              if (
                s.errors &&
                ((o = t({
                  graphQLErrors: s.errors,
                  response: s,
                  operation: e,
                  forward: r,
                })),
                o)
              ) {
                a = o.subscribe({
                  next: n.next.bind(n),
                  error: n.error.bind(n),
                  complete: n.complete.bind(n),
                });
                return;
              }
              n.next(s);
            },
            error: function (s) {
              if (
                ((o = t({
                  operation: e,
                  networkError: s,
                  graphQLErrors: s && s.result && s.result.errors,
                  forward: r,
                })),
                o)
              ) {
                a = o.subscribe({
                  next: n.next.bind(n),
                  error: n.error.bind(n),
                  complete: n.complete.bind(n),
                });
                return;
              }
              n.error(s);
            },
            complete: function () {
              o || n.complete.bind(n)();
            },
          });
        } catch (s) {
          t({ networkError: s, operation: e, forward: r }), n.error(s);
        }
        return function () {
          i && i.unsubscribe(), a && i.unsubscribe();
        };
      });
    });
  }
  var zle = (function (t) {
    Le(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return (n.link = gm(r)), n;
    }
    return (
      (e.prototype.request = function (r, n) {
        return this.link.request(r, n);
      }),
      e
    );
  })(Be);
  var lO = !1;
  function Ol() {
    if (location.protocol === "chrome-extension:")
      throw new Error(
        "getActivePathname is not defined outside of the content script"
      );
    if (mn()) {
      let t = /meet.google.com\/(\w+-\w+-\w+)/.exec(location.href);
      return t && t[1];
    } else if (yn()) {
      let t = /\/wc\/(\d+)/.exec(location.pathname);
      if (t) {
        let e = !!document.getElementById("tactiq-rtc"),
          r = !!document.getElementById("root"),
          n = !!document.getElementsByClassName("pwa").length,
          i = !!document.getElementsByClassName("meeting-app").length,
          a = !!document.getElementsByClassName("meeting-client").length,
          o = !!document.getElementById("wc-content");
        if (r && (n || (i && a && o))) {
          if (e) return t[1];
          lO ||
            ((lO = !0),
            console.error(
              "Tactiq did not initialize properly, need to open a new tab"
            ));
        }
      }
      return;
    } else if (Co()) return;
  }
  var gK;
  function pO() {
    return gK ?? Ol();
  }
  var ls = (t) => t.user?.id,
    lr = (t, e) => (t.transcriptions?.current ?? {})[e],
    fO = (t) => t.transcriptions?.newHighlghts ?? [],
    mm = (t) => {
      let e = pO();
      return e ? (t.transcriptions?.current ?? {})[e] : void 0;
    };
  var ps = (t) => t.user;
  var dO = (t) => t.ui?.isWidgetExpanded ?? !1;
  var hO = (t) => t.global?.langId;
  var gO = (t) => !t.user?.id && !t.global?.savedUserId;
  var mO = (t) => t.user?.showMeetingsChatPopover || "no",
    yO = (t) => t.user?.settings?.notifications?.meetings?.chat || "DISABLED";
  function vO() {
    fe();
  }
  async function _O(t = 25, e = 50) {
    fe();
  }
  async function fs(t, { ignoreErrors: e, ignoreStatusCodes: r, ...n } = {}) {
    try {
      vO(), await _O();
      let i = {
          "Content-Type": "application/json",
          ...(n.headers ?? {}),
          ...(t.startsWith("/a/")
            ? { Authorization: `Bearer ${await gi()}` }
            : {}),
        },
        a = chrome?.runtime?.getManifest()?.version;
      a && (i["x-tactiq-extension-version"] = a);
      let o = await fetch(ko(`/api/2${t}`), { headers: i, ...n });
      if (o.ok) return o.json();
      if ((r ?? []).indexOf(o.status) > -1) return { error: "timeout" };
      if (o.status === 403) return { error: "notsignedin" };
      throw new Error(
        `Fetch request to ${t} failed with ${o.status} ${await o.text()}`
      );
    } catch (i) {
      let a = i;
      if (
        (a.message === "Failed to fetch"
          ? re.error(new Error(`Failed to fetch: ${t}`))
          : re.error(a),
        e)
      )
        return { error: "ignored" };
      throw i;
    }
  }
  async function bO() {
    let t = await fs("/u/notifications", { ignoreErrors: !0 });
    return "error" in t ? [] : t.notifications || [];
  }
  async function SO(t, e, r) {
    return fs(r !== void 0 ? "/u/m" : "/a/meeting", {
      method: "POST",
      body: JSON.stringify({
        rawTranscript: t,
        rawMeeting: e,
        ...(r ? { uid: r } : {}),
      }),
      ignoreErrors: !1,
      ignoreStatusCodes: [502, 503],
    });
  }
  async function TO(t) {
    return fs(`/a/meeting/${t}`, { method: "DELETE", ignoreErrors: !0 });
  }
  async function EO(t, e, r) {
    return fs(`/a/meeting/${e}/screenshot/${r}`, {
      method: "PUT",
      body: t,
      headers: {
        "Content-Type": "application/octet-stream",
        Authorization: `Bearer ${await gi()}`,
      },
    });
  }
  async function gi() {
    let t = tt().currentUser?.getIdToken();
    if (t) return t;
    if (dt()) return await ya(), tt().currentUser?.getIdToken();
    {
      let e = await qt({ type: "tactiq.get-id-token" });
      if (!e.success)
        throw new Error(
          `Could not get an ID token from the service worker: ${e.error}`
        );
      return e.token;
    }
  }
  var kl = async () => {
    if (!tt().currentUser) return;
    let e = await fs("/a/user/custom-token", { ignoreErrors: !0 });
    if (e && !("error" in e) && e.token) return e.token;
  };
  var yK = new iO(
      uO({
        url: Yx,
        connectionParams: async () => {
          let t = await gi();
          return (
            !t && !fe() && console.error("No token available for GQL!"),
            { authorization: t }
          );
        },
        shouldRetry: () => !0,
        retryAttempts: 30,
      })
    ),
    vK = ts({ uri: Eh }),
    _K = nO(async (t, { headers: e }) => {
      let r = await gi();
      return (
        !r && !fe() && console.error("No token available for GQL!"),
        { headers: { ...e, authorization: r ? `Bearer ${r}` : "" } }
      );
    }),
    bK = Lg(
      ({ query: t }) => {
        let e = jt(t);
        return (
          e.kind === "OperationDefinition" && e.operation === "subscription"
        );
      },
      yK,
      _K.concat(vK)
    ),
    SK = gm(
      ({ graphQLErrors: t, networkError: e, operation: r, response: n }) => {
        t &&
          t.forEach(({ message: i, locations: a, path: o }) =>
            re.error(
              new Error(
                `[GraphQL Extension Client error]: Message: ${i}, Location: ${a}, Path: ${o}`
              )
            )
          ),
          e &&
            re.error(
              new Error(
                `[GraphQL Extension Client Network error]: ${e}, Operation: ${
                  r.operationName
                }, Response ${n?.data ? "has data" : "does not have data"}`
              )
            );
      }
    ),
    ds = new dm({
      link: Pg([SK, bK]),
      cache: new Sl(),
      defaultOptions: {
        watchQuery: { fetchPolicy: "no-cache", errorPolicy: "all" },
        query: { fetchPolicy: "no-cache", errorPolicy: "all" },
      },
    });
  var IO = (t, e, r) => {
      let i = ds.subscribe({ query: jx }).subscribe({
        next: ({ data: a, errors: o }) => {
          if (o) {
            r(new Error(o[0].message));
            return;
          }
          a?.user && t(a.user);
        },
        error: r,
        complete: e,
      });
      return () => i.unsubscribe();
    },
    xO = async (t) => {
      let { errors: e } = await ds.mutate({
        mutation: Vx,
        variables: { input: Bh(t, "__typename") },
      });
      if (e) throw new Error(e[0].message);
    },
    wO = async () => {
      let { errors: t } = await ds.mutate({ mutation: Wx });
      if (t) throw new Error(t[0].message);
    };
  function AO() {
    return new Promise((t) => {
      chrome.permissions.contains({ origins: ["<all_urls>"] }, (e) => {
        t(e);
      });
    });
  }
  async function OO() {
    if (!dt() || !chrome.declarativeNetRequest?.getDynamicRules) return;
    let t = await chrome.declarativeNetRequest.getDynamicRules();
    if (ve().getState().user?.settings?.zoomwcredirect) {
      console.log("[INIT] Configuring Zoom redirects...");
      try {
        await chrome.declarativeNetRequest.updateDynamicRules({
          addRules: [
            {
              id: 1001,
              priority: 1,
              action: {
                type: chrome.declarativeNetRequest.RuleActionType.REDIRECT,
                redirect: {
                  regexSubstitution: "https://zoom.us/wc/\\2/start\\3",
                },
              },
              condition: {
                regexFilter: "^https://zoom.us/(s)/(\\d+)(.*)",
                resourceTypes: [
                  chrome.declarativeNetRequest.ResourceType.MAIN_FRAME,
                ],
              },
            },
            {
              id: 1002,
              priority: 1,
              action: {
                type: chrome.declarativeNetRequest.RuleActionType.REDIRECT,
                redirect: {
                  regexSubstitution: "https://zoom.us/wc/\\2/join\\3",
                },
              },
              condition: {
                regexFilter: "^https://zoom.us/(j|w)/(\\d+)(.*)",
                resourceTypes: [
                  chrome.declarativeNetRequest.ResourceType.MAIN_FRAME,
                ],
              },
            },
            {
              id: 1003,
              priority: 1,
              action: {
                type: chrome.declarativeNetRequest.RuleActionType.REDIRECT,
                redirect: {
                  regexSubstitution: "https://\\1.zoom.us/wc/\\3/start\\4",
                },
              },
              condition: {
                regexFilter: "^https://(.*)\\.zoom.us/(s)/(\\d+)(.*)",
                resourceTypes: [
                  chrome.declarativeNetRequest.ResourceType.MAIN_FRAME,
                ],
              },
            },
            {
              id: 1004,
              priority: 1,
              action: {
                type: chrome.declarativeNetRequest.RuleActionType.REDIRECT,
                redirect: {
                  regexSubstitution: "https://\\1.zoom.us/wc/\\3/join\\4",
                },
              },
              condition: {
                regexFilter: "^https://(.*)\\.zoom.us/(j|w)/(\\d+)(.*)",
                resourceTypes: [
                  chrome.declarativeNetRequest.ResourceType.MAIN_FRAME,
                ],
              },
            },
          ],
          removeRuleIds: t.map((e) => e.id),
        });
      } catch (e) {
        console.error("[INIT] Could not enable Zoom redirects", e);
      }
    } else
      t.length &&
        (console.log("[INIT] Disabling Zoom redirects..."),
        await chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: t.map((e) => e.id),
        }));
  }
  var ym,
    Cl = !1,
    TK = async (t) => {
      if ((fe() || console.log("updateAuthState", t), !t && !Cl))
        return ve().dispatch(Ut());
      if (t) {
        ve().dispatch(
          yh({
            uid: t.uid ?? "",
            displayName: t.displayName ?? "",
            email: t.email ?? "",
            photoURL: t.photoURL ?? "",
          })
        ),
          t.uid && ve().dispatch(ei({ savedUserId: t.uid })),
          await nw(t, ve().getState().global.installationId),
          re.configure({ parameters: { uid: t.uid } });
        let e = () => {
          ym && ym(),
            (ym = IO(
              (r) => {
                ve().dispatch(ti(r)), OO().catch((n) => re.error(n));
              },
              () => {
                re.info("User subscription closed");
              },
              (r) => {
                re.error(r),
                  setTimeout(() => {
                    e();
                  }, 6e4);
              }
            ));
        };
        e();
      }
    },
    kO = !1;
  async function ya() {
    return new Promise((t, e) => {
      if (kO) t();
      else {
        let r = Sc(
          tt(),
          () => {
            (kO = !0), r(), fe() || console.log("AUTH is ready"), t();
          },
          e
        );
      }
    });
  }
  async function CO() {
    if (dt()) await ya();
    else {
      let t = !1;
      await new Promise((e) => {
        let r = () => {
            t || ((t = !0), e());
          },
          n = async () => {
            if (!Cl) {
              let i = await qt({ type: "tactiq.get-custom-token" });
              if (i.success)
                (i.token ? await Ja(tt(), i.token) : void 0)
                  ? ((Cl = !0), r())
                  : ((Cl = !1),
                    tt().currentUser && (await Xa(tt())),
                    setTimeout(n, 2e3),
                    r());
              else throw new Error("Could not communicate with service worker");
            }
          };
        n().catch((i) => {
          re.error(i);
        });
      });
    }
    Sc(tt(), TK);
  }
  var MO = Fe(Ss()),
    Ml = (t) =>
      (0, MO.default)(
        Array.from(new Set(Object.keys(t.devices ?? {})))
          .filter((e) => e !== t.devices[e])
          .map((e) => t.devices[e])
          .filter(Boolean)
          .sort()
      );
  var va = "store_state_transcripts",
    _m = "store_state_transcript_";
  async function NO(t, e) {
    return new Promise((r) => {
      let n = {};
      (n[t] = e),
        chrome.storage.local.set(n, function () {
          r();
        });
    });
  }
  async function Nl(t) {
    return new Promise((e) => {
      chrome.storage.local.get([t], function (r) {
        e(r[t]);
      });
    });
  }
  var vm = Promise.resolve(void 0);
  async function Cn(t, e, r = !0) {
    if (!dt()) {
      let i = await qt({
        type: "tactiq.save-to-storage",
        bareId: t,
        transcript: e,
        saveBlocks: r,
      });
      return i.success ? i.localState : void 0;
    }
    let n = () =>
      new Promise((i) => {
        try {
          e.blocks?.length || !r
            ? chrome.storage.local.get([va], async function (a) {
                let o = a[va] || { version: 4, transcripts: [] };
                if (!o.version || o.version === 2)
                  o = { version: 3, transcripts: [] };
                else if (o.version === 3) {
                  for (let g of o.transcripts) {
                    let v = g.transcript;
                    v.combined?.length && (v.combined = []);
                  }
                  o.version = 4;
                }
                let s = r ? `${t}-${e.blocks[0].timestamp}` : t,
                  c = `${_m}${s}`,
                  { combined: u = void 0, ...l } = { ...e },
                  { blocks: f } = l,
                  p;
                (l.blocks = []),
                  l.translation &&
                    ((p = l.translation.blocks),
                    (l.translation = { ...l.translation, blocks: [] }));
                let d = o.transcripts.find((g) => g.id === s);
                d
                  ? ((d.transcript = l), (d.userId = Ah()))
                  : o.transcripts.push({
                      version: 2,
                      extensionVersion: chrome?.runtime?.getManifest().version,
                      id: s,
                      transcript: l,
                      userId: Ah(),
                    }),
                  r &&
                    (await NO(c, f),
                    p && p.length && (await NO(`${c}-translation`, p))),
                  chrome.storage.local.set(
                    { store_state_transcripts: o },
                    function () {}
                  ),
                  i(o);
              })
            : i(void 0);
        } catch (a) {
          re.error(a),
            console.error("STS", a, chrome?.runtime?.lastError),
            i(void 0);
        }
      });
    return (vm = vm.then(n)), vm;
  }
  async function DO(t) {
    let e = await Nl(va);
    if (!e) return;
    let r = e.transcripts.find((n) => t(n));
    return r
      ? ((r.transcript.blocks = await bm(r.id)),
        r.transcript.translation &&
          (r.transcript.translation.blocks = await Sm(r.id)),
        r)
      : null;
  }
  async function RO() {
    let t = await Nl(va);
    return t
      ? t.transcripts
          .filter((e) => e.transcript.meetingId)
          .map((e) => ({
            meetingId: e.transcript.meetingId,
            title: e.transcript.meetingTitle || "",
            participantNames: Ml(e.transcript),
          }))
      : [];
  }
  async function bm(t) {
    return (await Nl(`${_m}${t}`)) ?? [];
  }
  async function Sm(t) {
    return (await Nl(`${_m}${t}-translation`)) ?? [];
  }
  var EK = () =>
    new Promise((t) => {
      chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
        t(e?.length ? e[0] : void 0);
      });
    });
  async function IK() {
    return new Promise((t) => {
      chrome.permissions.contains({ origins: ["<all_urls>"] }, (e) => {
        t(e);
      });
    });
  }
  async function xK() {
    return (await IK())
      ? !0
      : (await chrome.tabs.create({
          url: `chrome-extension://${chrome.runtime.id}/options.html#/Permissions`,
        }),
        !1);
  }
  var FO = async () => {
    let t = await EK();
    if (t?.windowId && (await xK()))
      return new Promise((e) => {
        chrome.tabs.captureVisibleTab(t.windowId, {}, async (r) => {
          e(r || void 0);
        });
      });
  };
  function Tm(t) {
    chrome.storage.local.get([va], function (e) {
      let r = e.store_state_transcripts;
      t && t(r), r && ve().dispatch(Vr(r));
    });
  }
  function Dl() {
    return new Promise((t) => {
      Tm((e) => {
        t(e);
      });
    });
  }
  function PO(t, e = "") {
    return t
      ? t.startsWith(`https://app.tactiq.io/${e}`) ||
          t.startsWith(`https://testfirebaseauth-f5df6.firebaseapp.com/${e}`) ||
          t.startsWith(Th(`/${e}`)) ||
          (Th("/").startsWith("https://tactiq-review-") &&
            t.startsWith(`http://localhost:5000/${e}`)) ||
          (/^https:\/\/tactiq-review-[0-9]+.firebaseapp.com\//.test(t) &&
            t.indexOf(`.firebaseapp.com/${e}`) > -1)
      : !1;
  }
  async function LO(t, e, r) {
    return { enabled: await AO() };
  }
  var Em = async (t) =>
      t.unsaved?.loaded ? t.unsaved.list ?? [] : $i(await Dl()),
    Rl = async (t, e) => (await Em(t))?.find((n) => n.id === e);
  async function UO(t, e, r) {
    let n = await Rl(e, t.tid);
    n && r(Ao(n));
  }
  async function qO(t, e, r) {
    let n = (e.transcriptions?.current ?? {})[t.meetingId];
    if (n) return { transcript: n };
    {
      let i = await DO((a) => a.transcript.meetingId === t.meetingId);
      return i
        ? { transcript: i }
        : {
            success: !0,
            message:
              "The transcript was not found in your browser. Perhaps, you have used a different computer for that meeting?",
          };
    }
  }
  async function BO(t, e, r) {
    return { transcripts: await RO() };
  }
  async function jO(t, e, r) {
    return { list: await Em(e), operations: e.global?.operations };
  }
  async function VO(t, e, r) {
    await chrome.tabs.create({
      url: `chrome-extension://${chrome.runtime.id}/options.html`,
    });
  }
  async function WO(t, e, r) {
    await chrome.tabs.create({
      url: `chrome-extension://${chrome.runtime.id}/options.html#${t.path}`,
    });
  }
  async function HO(t, e, r) {
    if ((await Ja(tt(), t.token))?.user?.uid) Bt("Logged In");
    else throw new Error("Could not log in");
  }
  async function GO(t, e, r) {
    let n = await Rl(e, t.tid);
    n && r(Xn(n));
  }
  async function zO(t, e, r) {
    return { uid: e.user?.id };
  }
  async function $O(t, e, r) {
    return { token: await kl() };
  }
  async function KO(t, e, r) {
    await Xa(tt()), r(Ut()), Bt("Signed Out from the extension");
  }
  function QO() {
    chrome.runtime.onMessageExternal.addListener(wK);
  }
  function wK(t, e, r) {
    return (
      PO(e.url) &&
        (async function () {
          await en();
          let n = ve(),
            i = n.getState(),
            { dispatch: a } = n;
          try {
            let o;
            switch (t.type) {
              case "getSignedInUser":
                o = await zO(t, i, a);
                break;
              case "signIn":
                o = await HO(t, i, a);
                break;
              case "signOut":
                o = await KO(t, i, a);
                break;
              case "getSignInToken":
                o = await $O(t, i, a);
                break;
              case "getTranscript":
                o = await qO(t, i, a);
                break;
              case "getTranscriptSummaries":
                o = await BO(t, i, a);
                break;
              case "openOptions":
                o = await VO(t, i, a);
                break;
              case "openOptionsPage":
                o = await WO(t, i, a);
                break;
              case "getUnsavedTranscripts":
                o = await jO(t, i, a);
                break;
              case "saveManually":
                o = await GO(t, i, a);
                break;
              case "deleteManually":
                o = await UO(t, i, a);
                break;
              case "areAllPermissionsGranted":
                o = await LO(t, i, a);
                break;
            }
            r({
              success: !0,
              version: chrome?.runtime?.getManifest()?.version,
              ...(o ?? {}),
            });
          } catch (o) {
            reportError(o),
              console.error(o),
              r({
                error: o?.message,
                version: chrome?.runtime?.getManifest()?.version,
              });
          }
        })(),
      !0
    );
  }
  function YO() {
    let t = "saver";
    chrome.alarms.create(t, { delayInMinutes: 4, periodInMinutes: 4 }),
      chrome.alarms.onAlarm.addListener(async (e) => {
        fe() || re.info("chrome.alarms.onAlarm", e.name),
          e.name === t && (await AK());
      });
  }
  async function AK() {
    fe() || re.info("runSaver started");
    let e = $i(await Dl()).filter((r) => OK(r) && kK(r) && CK(r));
    if (e.length) {
      fe() || re.info(`runSaver has found ${e.length} meetings to save`),
        await en();
      for (let r of e) ve().dispatch(Xn(r));
    } else fe() || re.info("runSaver has not found anything to save");
  }
  function OK(t) {
    let e = Date.now() - 3e5;
    return t.transcript.updatedAt < e;
  }
  function kK(t) {
    let e = Date.now() - 36e5;
    return t.transcript.updatedAt > e;
  }
  function CK(t) {
    return t.transcript.updatedAt - (t.transcript.lastAutoSavedAt ?? 0) > 1e4;
  }
  function JO() {
    chrome.runtime.onInstalled.addListener(function (t) {
      chrome.declarativeContent.onPageChanged.removeRules(void 0, function () {
        chrome.declarativeContent.onPageChanged.addRules([
          {
            conditions: [
              new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: "meet.google.com", schemes: ["https"] },
              }),
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()],
          },
          {
            conditions: [new chrome.declarativeContent.PageStateMatcher({})],
            actions: [new chrome.declarativeContent.ShowPageAction()],
          },
          {
            conditions: [
              new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: "zoom.us", schemes: ["https"] },
              }),
            ],
            actions: [
              new chrome.declarativeContent.RequestContentScript({
                js: ["rtcinjector.js"],
              }),
            ],
          },
          {
            conditions: [
              new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostContains: ".zoom.us", schemes: ["https"] },
              }),
            ],
            actions: [
              new chrome.declarativeContent.RequestContentScript({
                js: ["rtcinjector.js"],
              }),
            ],
          },
        ]);
      });
      let e = async () => {
        let r = await zi();
        await chrome.tabs.create({ url: ko(`/api/2/u/welcome/${r}`) });
      };
      fe() &&
        (t?.reason === "install"
          ? en()
              .then(
                () => (
                  Bt("Install Extension"), e().catch((r) => console.error(r))
                )
              )
              .catch((r) => console.error(r))
          : t?.reason === "update" &&
            en()
              .then(
                () => (
                  Bt("Update Extension", {
                    previousVersion: t.previousVersion,
                    opened: "nothing",
                  }),
                  !0
                )
              )
              .catch((r) => console.error(r)));
    }),
      YO();
  }
  var XO = function (e) {
      return { done: !0, value: e };
    },
    Im = {};
  function xm(t) {
    return Gi(t) ? "channel" : Zc(t) ? String(t) : it(t) ? t.name : String(t);
  }
  function wm(t, e, r) {
    var n,
      i,
      a,
      o = e;
    function s(c, u) {
      if (o === Im) return XO(c);
      if (u && !i) throw ((o = Im), u);
      n && n(c);
      var l = u ? t[i](u) : t[o]();
      return (
        (o = l.nextState),
        (a = l.effect),
        (n = l.stateUpdater),
        (i = l.errorState),
        o === Im ? XO(c) : a
      );
    }
    return mo(
      s,
      function (c) {
        return s(null, c);
      },
      r
    );
  }
  function jK(t, e) {
    for (
      var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2;
      i < r;
      i++
    )
      n[i - 2] = arguments[i];
    var a = { done: !1, value: Qn(t) },
      o = function (l) {
        return { done: !1, value: qr.apply(void 0, [e].concat(n, [l])) };
      },
      s,
      c = function (l) {
        return (s = l);
      };
    return wm(
      {
        q1: function () {
          return { nextState: "q2", effect: a, stateUpdater: c };
        },
        q2: function () {
          return { nextState: "q1", effect: o(s) };
        },
      },
      "q1",
      "takeEvery(" + xm(t) + ", " + e.name + ")"
    );
  }
  function VK(t, e) {
    for (
      var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2;
      i < r;
      i++
    )
      n[i - 2] = arguments[i];
    var a = { done: !1, value: Qn(t) },
      o = function (d) {
        return { done: !1, value: qr.apply(void 0, [e].concat(n, [d])) };
      },
      s = function (d) {
        return { done: !1, value: iu(d) };
      },
      c,
      u,
      l = function (d) {
        return (c = d);
      },
      f = function (d) {
        return (u = d);
      };
    return wm(
      {
        q1: function () {
          return { nextState: "q2", effect: a, stateUpdater: f };
        },
        q2: function () {
          return c
            ? { nextState: "q3", effect: s(c) }
            : { nextState: "q1", effect: o(u), stateUpdater: l };
        },
        q3: function () {
          return { nextState: "q1", effect: o(u), stateUpdater: l };
        },
      },
      "q1",
      "takeLatest(" + xm(t) + ", " + e.name + ")"
    );
  }
  function WK(t, e, r) {
    for (
      var n = arguments.length, i = new Array(n > 3 ? n - 3 : 0), a = 3;
      a < n;
      a++
    )
      i[a - 3] = arguments[a];
    var o,
      s,
      c = function () {
        return { done: !1, value: Qn(s) };
      },
      u = function (v) {
        return { done: !1, value: qr.apply(void 0, [r].concat(i, [v])) };
      },
      l = { done: !1, value: _o(t) },
      f = function (v) {
        return (o = v);
      },
      p = function (v) {
        return (s = v);
      },
      d = !Gi(e);
    return (
      d || p(e),
      wm(
        {
          q1: function () {
            var v = { done: !1, value: vo(e, Id(1)) };
            return { nextState: "q2", effect: v, stateUpdater: p };
          },
          q2: function () {
            return { nextState: "q3", effect: c(), stateUpdater: f };
          },
          q3: function () {
            return { nextState: "q4", effect: u(o) };
          },
          q4: function () {
            return { nextState: "q2", effect: l };
          },
        },
        d ? "q1" : "q2",
        "throttle(" + xm(e) + ", " + r.name + ")"
      )
    );
  }
  function ek(t, e) {
    for (
      var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2;
      i < r;
      i++
    )
      n[i - 2] = arguments[i];
    return qr.apply(void 0, [jK, t, e].concat(n));
  }
  function tk(t, e) {
    for (
      var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2;
      i < r;
      i++
    )
      n[i - 2] = arguments[i];
    return qr.apply(void 0, [VK, t, e].concat(n));
  }
  function rk(t, e, r) {
    for (
      var n = arguments.length, i = new Array(n > 3 ? n - 3 : 0), a = 3;
      a < n;
      a++
    )
      i[a - 3] = arguments[a];
    return qr.apply(void 0, [WK, t, e, r].concat(i));
  }
  function* nk(...t) {
    return yield Qn(...t);
  }
  function* Ie(...t) {
    return yield ek(...t);
  }
  function* Fl(...t) {
    return yield tk(...t);
  }
  function* J(...t) {
    return yield Rd(...t);
  }
  function* me(...t) {
    return yield yo(...t);
  }
  function* De(...t) {
    return yield Pd(...t);
  }
  function* ik(...t) {
    return yield vo(...t);
  }
  function* ak(...t) {
    return yield _o(...t);
  }
  function* _a(...t) {
    return yield rk(...t);
  }
  function* Mn(...t) {
    return yield Fd(...t);
  }
  var ck = Fe(sk());
  function* zK(t) {
    try {
      let e = yield* De(ls);
      yield* me(Bt, t.payload.eventName, { userId: e, ...t.payload.eventData });
    } catch (e) {
      re.error(e);
    }
  }
  function* $K(t) {
    try {
      let e = { ...t.payload.transcript, deleted: new Date().getTime() },
        r = yield* me(Cn, t.payload.id, e, !1);
      r &&
        (yield* J(Vr(r)),
        yield* J(
          ah({
            source: {
              id: t.payload.id,
              transcript: e,
              version: 0,
              extensionVersion: "",
              userId: "",
            },
            status: "Succeeded",
          })
        ));
    } catch (e) {
      re.error(e);
    }
  }
  function* KK() {
    try {
      let t = yield* me(bO);
      yield* J(oh(t));
    } catch (t) {
      re.error(t);
    }
  }
  function* QK(t) {
    try {
      (yield* De(ls)) && (yield* me(xO, t.payload));
    } catch (e) {
      re.error(e);
    }
  }
  function* YK(t) {
    try {
      yield* me(jr, "langId", t.payload.toString());
    } catch (e) {
      re.error(e);
    }
  }
  function* JK(t) {
    let e = yield* De(lr, t.payload.id);
    if (
      e.previousDetectedLanguage &&
      e.detectedLanguage &&
      !(0, ck.default)(e.previousDetectedLanguage, e.detectedLanguage)
    )
      try {
        if ("zoomLanguageId" in t.payload) {
          let { zoomLanguageId: r } = t.payload;
          yield* me(jr, "zoomLanguageId", r.toString());
        } else
          "langId" in t.payload ||
            ("languageCode" in t.payload &&
              (yield* me(jr, "languageCode", t.payload.languageCode)));
      } catch (r) {
        re.error(r);
      }
  }
  function* XK(t) {
    try {
      yield* me(Ux, t.payload.savedUserId);
    } catch (e) {
      re.error(e);
    }
  }
  function ZK(t) {
    chrome.runtime.sendMessage(t, function (e) {
      return !0;
    });
  }
  function* e4() {
    yield* J(Lt(!0));
    try {
      let t = yield* me(tt);
      t && (yield* me(t.signOut.bind(t)));
    } catch (t) {
      console.debug(t);
    }
  }
  function* t4({ payload: t }) {
    try {
      yield* me(ZK, t);
    } catch (e) {
      console.debug(e);
    }
  }
  function* r4({ payload: t }) {
    t && !t.isChromeExtensionUser && (yield* me(wO));
  }
  function* uk() {
    yield* Mn([
      Ie(_u.type, zK),
      Ie(Ao.type, $K),
      Ie(ti.type, r4),
      Ie(Gx.type, QK),
      Ie(Ix.type, KK),
      Fl(Zn.type, YK),
      Fl(ir.type, JK),
      Fl(ei.type, XK),
      Ie(Ut.type, e4),
      Ie(Oo.type, t4),
    ]);
  }
  var WC = Fe(Oa()),
    HC = Fe(UC());
  var qC = Fe(zf());
  var BC = (t) => {
    let r = Ml(t)
        .map((a) => {
          let s = (t.blocks || []).filter((u) => u.speakerName === a);
          if (!s.length) return;
          let c = s.reduce(
            (u, l) => ({ textLength: u.textLength + l.transcript.length }),
            { textLength: 0 }
          ) || { textLength: 0 };
          return { name: a, analytics: c };
        })
        .filter((a) => !!a),
      n = t.blocks,
      i =
        n.length > 1
          ? Math.ceil((n[n.length - 1].timestamp - n[0].timestamp) / 1e3)
          : 0;
    return {
      meetingId: t.meetingId,
      title: t.meetingTitle,
      participants: r,
      speechDuration: i,
      pathnameSHA512: (0, qC.sha512)(t.id),
      platform: t.platform,
      translatedTo: t.translation?.detectedLanguage.shortName,
      partIndex: t.partIndex,
      isZoomHost: t.isZoomHost,
    };
  };
  function* jC(t) {
    let { id: e } = t.payload;
    try {
      let r = yield* De(ps),
        n = !0,
        i = yield* me(Tu),
        a = r?.id ? void 0 : i;
      if (
        !r?.id &&
        (yield* J(
          nr({ id: e, autosaveStatus: { messageCode: "unauthorized" } })
        ),
        !n || !a)
      )
        return;
      let o = yield* De(lr, e);
      if (o.isPaused) {
        yield* J(nr({ id: e, autosaveStatus: { messageCode: "paused" } }));
        return;
      }
      let s = !o.blocks?.length && !o.notes?.content.length;
      if (!o.meetingId)
        if (
          r?.settings?.autoPauseEnabled &&
          !o.isPaused &&
          !o.isWasUnpaused &&
          s
        ) {
          yield* J(Jd({ id: e, isPaused: !0 }));
          return;
        } else {
          yield* J(yu({ id: e, loggedOutUserId: a }));
          return;
        }
      if (s) {
        yield* J(nr({ id: e, autosaveStatus: { messageCode: "empty" } }));
        return;
      }
      (!o.lastAutoSavedAt || o.updatedAt > o.lastAutoSavedAt) &&
        (yield* J(mu({ id: e, loggedOutUserId: a })));
    } catch (r) {
      re.error(r),
        yield* J(nr({ id: e, autosaveStatus: { messageCode: "error" } }));
    }
  }
  var Rge = Object.freeze({
    English: {
      id: 1,
      shortName: "en",
      menuItemText: "Live Transcript...",
      newMenuItemText: "Show Captions",
      hideCaptionsText: "Hide Captions",
      viewFullTranscriptText: "View Full Transcript",
      enableLiveTranscriptionItemText: "Enable Auto-Transcription",
      disableLiveTranscriptionItemText: "Disable Auto-Transcription",
      captionsItemText: "Captions",
      captionLanguageItemText: "Caption Language:",
    },
    Spanish: {
      id: 7,
      shortName: "es",
      menuItemText: "Transcripci\xF3n en directo",
      newMenuItemText: "Mostrar subt\xEDtulos",
      hideCaptionsText: "Ocultar subt\xEDtulos",
      viewFullTranscriptText: "Ver transcripci\xF3n completa",
      enableLiveTranscriptionItemText: "Activar transcripci\xF3n autom\xE1tica",
      disableLiveTranscriptionItemText:
        "Desactivar transcripci\xF3n autom\xE1tica",
      captionsItemText: "Captions",
      captionLanguageItemText: "Caption Language:",
    },
    ChineseSimplified: {
      menuItemText: "\u5B9E\u65F6\u8F6C\u5F55",
      newMenuItemText: "\u663E\u793A\u5B57\u5E55",
      hideCaptionsText: "\u9690\u85CF\u5B57\u5E55",
      viewFullTranscriptText:
        "\u67E5\u770B\u5B8C\u6574\u8F6C\u5F55\u6587\u5B57",
      enableLiveTranscriptionItemText: "\u542F\u7528\u81EA\u52A8\u8F6C\u5F55",
      disableLiveTranscriptionItemText: "\u7981\u7528\u81EA\u52A8\u8F6C\u5F55",
      captionsItemText: "Captions",
      captionLanguageItemText: "Caption Language:",
    },
    ChineseTraditional: {
      menuItemText: "\u5373\u6642\u8F49\u9304\u6587\u5B57",
      newMenuItemText: "\u986F\u793A\u5B57\u5E55",
      hideCaptionsText: "\u96B1\u85CF\u5B57\u5E55",
      viewFullTranscriptText:
        "\u6AA2\u8996\u5B8C\u6574\u8F49\u9304\u6587\u5B57",
      enableLiveTranscriptionItemText:
        "\u555F\u7528\u81EA\u52D5\u8F49\u9304\u6587\u5B57",
      disableLiveTranscriptionItemText:
        "\u505C\u7528\u81EA\u52D5\u8F49\u9304\u6587\u5B57",
      captionsItemText: "Captions",
      captionLanguageItemText: "Caption Language:",
    },
    Deutch: {
      id: 12,
      shortName: "de",
      menuItemText: "Live-Transkription",
      newMenuItemText: "Untertitel anzeigen",
      hideCaptionsText: "Untertitel ausblenden",
      viewFullTranscriptText: "Vollst\xE4ndiges Transkript anzeigen",
      enableLiveTranscriptionItemText: "Auto-Transkription aktivieren",
      disableLiveTranscriptionItemText: "Auto-Transkription deaktivieren",
      captionsItemText: "Captions",
      captionLanguageItemText: "Caption Language:",
    },
    French: {
      id: 4,
      shortName: "fr",
      menuItemText: "Transcription en direct",
      newMenuItemText: "Afficher les sous-titres",
      hideCaptionsText: "Masquer les sous-titres",
      viewFullTranscriptText: "Afficher la transcription int\xE9grale",
      enableLiveTranscriptionItemText: "Activer la transcription automatique",
      disableLiveTranscriptionItemText:
        "D\xE9sactiver la transcription automatique",
      captionsItemText: "Captions",
      captionLanguageItemText: "Caption Language:",
    },
    Portugeese: {
      id: 6,
      shortName: "pt",
      menuItemText: "Transcri\xE7\xE3o ao vivo",
      newMenuItemText: "Mostrar legendas",
      hideCaptionsText: "Ocultar legendas",
      viewFullTranscriptText: "Visualizar transcri\xE7\xE3o total",
      enableLiveTranscriptionItemText:
        "Habilitar transcri\xE7\xE3o autom\xE1tica",
      disableLiveTranscriptionItemText:
        "Desabilitar transcri\xE7\xE3o autom\xE1tica",
      captionsItemText: "Captions",
      captionLanguageItemText: "Caption Language:",
    },
    Russian: {
      id: 5,
      shortName: "ru",
      menuItemText:
        "\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0430 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438",
      newMenuItemText:
        "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
      hideCaptionsText:
        "\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
      viewFullTranscriptText:
        "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u043E\u043B\u043D\u0443\u044E \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0443",
      enableLiveTranscriptionItemText:
        "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0443",
      disableLiveTranscriptionItemText:
        "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0443",
      captionsItemText: "Captions",
      captionLanguageItemText: "Caption Language:",
    },
    Italian: {
      id: 9,
      shortName: "it",
      menuItemText: "Trascrizione istantanea",
      newMenuItemText: "Mostra sottotitoli",
      hideCaptionsText: "Nascondi sottotitoli",
      viewFullTranscriptText: "Visualizza trascrizione completa",
      enableLiveTranscriptionItemText: "Abilita trascrizione automatica",
      disableLiveTranscriptionItemText: "Disabilita trascrizione automatica",
      captionsItemText: "Captions",
      captionLanguageItemText: "Caption Language:",
    },
    Dutch: {
      id: 12,
      shortName: "nl",
      menuItemText: "Live transcriptie",
      newMenuItemText: "Ondertiteling weergeven",
      hideCaptionsText: "Ondertiteling verbergen",
      viewFullTranscriptText: "Volledige transcriptie weergeven",
      enableLiveTranscriptionItemText: "Automatische transcriptie inschakelen",
      disableLiveTranscriptionItemText:
        "Automatische transcriptie uitschakelen",
      captionsItemText: "Captions",
      captionLanguageItemText: "Caption Language:",
    },
    Ukrainian: {
      id: 13,
      shortName: "uk",
      menuItemText:
        "\u0422\u0440\u0430\u043D\u0441\u043A\u0438\u043F\u0446\u0456\u044F",
      newMenuItemText:
        "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0441\u0443\u0431\u0442\u0456\u0442\u0440\u0438",
      hideCaptionsText:
        "\u0421\u0445\u043E\u0432\u0430\u0442\u0438 \u0441\u0443\u0431\u0442\u0456\u0442\u0440\u0438",
      viewFullTranscriptText:
        "\u041F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u043F\u043E\u0432\u043D\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043A\u0440\u0438\u043F\u0442",
      enableLiveTranscriptionItemText:
        "\u0423\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0443 \u0442\u0440\u0430\u043D\u0441\u043A\u0440\u0438\u043F\u0446\u0456\u044E",
      disableLiveTranscriptionItemText:
        "\u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0443 \u0442\u0440\u0430\u043D\u0441\u043A\u0440\u0438\u043F\u0446\u0456\u044E",
      captionsItemText: "Captions",
      captionLanguageItemText: "Caption Language:",
    },
  });
  var Bl = () => {
    let t = window.tactiq?.content?.store?.getState();
    return t ? mm(t) : null;
  };
  function* FQ(t) {
    let { id: e, loggedOutUserId: r } = t.payload,
      n = yield* De(ps),
      i = r || n?.id,
      a = yield* De(lr, e);
    if (!i) throw new Error("User is not logged in.");
    try {
      let o = yield* me(
        GC,
        !a.meetingId || i === a.userId ? a : (0, HC.default)(a, "meetingId"),
        r
      );
      if ("error" in o) {
        o.error === "timeout"
          ? yield* J(
              nr({ id: e, autosaveStatus: { messageCode: "networkIssue" } })
            )
          : o.error === "notsignedin" && (yield* J(Ut()));
        return;
      }
      if (o.tooLarge) {
        yield* J(nh({ id: e }));
        return;
      }
      if (o.noCredits && r) {
        yield* J(mh({ as_allowance: 10, as_used: 10 }));
        return;
      }
      if (o.noUser) {
        yield* J(ei({ savedUserId: "" }));
        return;
      }
      if (o.mustRelogin) {
        yield* J(Ut());
        return;
      }
      if (!o.meetingId)
        throw new Error("Something has gone wrong while saving the transcript");
      yield* J(Io({ id: e, meetingId: o.meetingId, userId: i }));
      let s = o.transcripts ?? [];
      for (let c of s)
        yield* J(
          gu({ id: e, integrationType: c.type ?? "googledrive", file: c })
        );
      yield* J(du({ id: e, autosavedAt: a.updatedAt })),
        s.length
          ? yield* J(
              nr({
                id: e,
                autosaveStatus: {
                  messageCode: "success",
                  nextAutosaveDelay: o.delay,
                },
              })
            )
          : yield* J(nr({ id: e, autosaveStatus: { messageCode: "empty" } }));
    } catch (o) {
      re.error(o),
        yield* J(nr({ id: e, autosaveStatus: { messageCode: "error" } }));
    }
  }
  async function GC(t, e) {
    let r = pT(t),
      n = BC(t);
    try {
      let i = await SO(r, n, e);
      if (!("error" in i) && !i.meetingId && !i.mustRelogin)
        throw new Error("Could not create a meeting through the API.");
      return i;
    } catch (i) {
      if (i instanceof Error) {
        if (i.message.includes("Not enough credits")) return { noCredits: !0 };
        if (i.message.includes("User does not exist")) return { noUser: !0 };
        if (i.message.includes("Transcript is too large to be saved in Tactiq"))
          return { tooLarge: !0 };
      }
      throw i;
    }
  }
  function* PQ(t) {
    let { id: e, transcript: r } = t.payload,
      n = yield* De(ps);
    if (!n || !n.id) throw new Error("User is not logged in.");
    let i = yield* me(bm, e),
      a = [];
    r.translation && (a = yield* me(Sm, e));
    try {
      let o = { ...r, blocks: i, savedManually: Date.now() };
      r.translation && (o.translation = { ...r.translation, blocks: a }),
        o.meetingId && o.userId !== n.id && delete o.meetingId;
      let s = yield* me(GC, o);
      if ("error" in s) {
        wo({
          source: {
            id: e,
            transcript: r,
            version: 0,
            extensionVersion: "",
            userId: n.id,
          },
          status: "Failed",
        });
        return;
      }
      if (s.mustRelogin) {
        yield* J(Ut());
        return;
      }
      if (!s.meetingId || !s.transcripts)
        throw new Error("Something has gone wrong while saving the transcript");
      let c = yield* me(Cn, r.id, { ...o, meetingId: s.meetingId });
      c &&
        (yield* J(Vr(c)),
        yield* J(
          wo({
            source: {
              id: e,
              transcript: r,
              version: 0,
              extensionVersion: "",
              userId: n.id,
            },
            status: "Succeeded",
            file: s.transcripts[0],
          })
        ));
    } catch (o) {
      re.error(o),
        yield* J(
          wo({
            source: {
              id: e,
              transcript: r,
              version: 0,
              extensionVersion: "",
              userId: n.id,
            },
            status: "Failed",
          })
        );
    }
  }
  function* LQ(t) {
    try {
      if (t.payload.messages.length) {
        let e = yield* De(lr, t.payload.id),
          r = yield* De(dO),
          n = yield* De(gO),
          i = yield* De(mO),
          a = yield* De(yO);
        if (e.blocks.length === 1) {
          let u = yield* me(Lx);
          !r && !u && (yield* J(Lt(!0))),
            n && (yield* J(Lt(!0)), yield* J(vh()));
        }
        i === "no" &&
          (e?.blocks.length ?? 0) > 10 &&
          Object.values(e?.devices ?? {}).length > 1 &&
          ((a === "PROMPT" || a === "UNDECIDED") && (yield* J(Lt(!0))),
          yield* J(_h("yes")));
        let [{ langId: o, languageCode: s }] = t.payload.messages;
        o
          ? ((yield* De(hO)) !== o && (yield* J(Zn(o))),
            e?.detectedLanguage?.id !== o &&
              (yield* J(Zn(o)), yield* J(ir({ id: t.payload.id, langId: o }))))
          : s &&
            e?.detectedLanguage?.languageCode !== s &&
            (yield* J(ir({ id: t.payload.id, languageCode: s })));
        let c = yield* De(fO);
        if (c.length) {
          let u = c.slice(-3);
          for (let l of u)
            yield* J(
              Oo({
                action: "tactiq-showSnackbar",
                text: `New highlight: ${l.tagName}`,
                options: { variant: "info", autoHideDuration: 1e3 },
              })
            ),
              yield* J(
                _u({
                  eventName: "Extension - Highlight",
                  eventData: {
                    tag: l.tagName,
                    isAuto: l.isAuto,
                    blockType: l.blockType,
                  },
                })
              );
          yield* J(ih());
        }
      }
    } catch (e) {
      re.error(e);
    }
  }
  function* Cr(t) {
    let e = yield* De(lr, t.payload.id);
    yield* J(eh({ id: t.payload.id, transcript: e })),
      [Eo.type, pu.type, fu.type, Io.type, hu.type, vu.type, xo.type].includes(
        t.type
      ) && (yield* J(rh({ id: t.payload.id })));
  }
  function* UQ(t) {
    try {
      if (t.payload) {
        let e = yield* me(Cn, t.payload.transcript.id, t.payload.transcript);
        e && (yield* J(Vr(e)));
      }
    } catch (e) {
      re.error(e);
    }
  }
  function* qQ(t) {
    try {
      t.payload.transcript.meetingId &&
        (yield* me(TO, t.payload.transcript.meetingId));
      let e = yield* me(Cn, t.payload.transcript.id, t.payload.transcript, !1);
      e && (yield* J(Vr(e)));
    } catch (e) {
      re.error(e);
    }
  }
  function* BQ(t) {
    let e = yield* De(lr, t.payload.id),
      r = (0, WC.default)(e.blocks);
    r &&
      (yield* J(
        Oo({
          action: "tactiq-showSnackbar",
          text: `\u{1F58A}\uFE0F ${new Date(
            r.timestamp
          ).toLocaleTimeString()}: ${r.speakerName} - Highlighted`,
          options: { variant: "info", autoHideDuration: 3e3 },
        })
      ));
  }
  function* jQ() {
    let t = yield* ik(th.type, wd.sliding(1));
    for (;;) {
      let e = yield* nk(t);
      yield* me(FQ, e);
      let r = 3e5,
        n = 1e3,
        i = 0;
      for (; i < r; ) {
        let o =
          (yield* De(lr, e.payload.id)).autosaveStatus?.nextAutosaveDelay ||
          15e3;
        if (i >= o) break;
        yield* ak(n), (i += n);
      }
    }
  }
  function* VC(t) {
    yield* J(th(t.payload));
  }
  function* VQ(t) {
    try {
      let e = yield* De(ls),
        r = yield* De(lr, t.payload.id),
        n = yield* me(Xx);
      if (!n) return;
      if (e && t.payload.id && r.meetingId) {
        let i = Date.now(),
          a = yield* me(EO, n, r.meetingId, i);
        if ("error" in a) {
          console.error(a.error);
          return;
        }
        yield* J(xo({ id: t.payload.id, stamp: i, thumb: a.url })),
          yield* J(Lt(!0));
      }
    } catch (e) {
      console.error(e);
    }
  }
  function* WQ(t) {
    yield* J(Xd(t.payload?.settings?.autoPauseEnabled ?? !1));
  }
  function* HQ({ payload: t }) {
    let e = yield* De((r) => r.global?.languageCode);
    if (e !== void 0) {
      let r = "";
      for (let o of zd) o.languageCode === e && (r = o.languageCode);
      let n = Bl(),
        i = n?.detectedLanguage;
      !n?.isMSTeamsOrganiser && e !== i?.languageCode
        ? (yield* J(lh(!0)), yield* J(Lt(!0)))
        : (yield* J(ir({ id: t.id, languageCode: r })),
          document.documentElement.dispatchEvent(
            new window.CustomEvent("tactiq-rtc", {
              detail: { type: "lang", languageCode: r },
            })
          ));
    } else
      yield* J(
        ir({
          id: t.id,
          languageCode: Gd["English__United States_"].languageCode,
        })
      );
  }
  function* zC() {
    yield* Mn([
      Ie(Eo.type, LQ),
      Ie(pu.type, Cr),
      Ie(fu.type, Cr),
      Ie(Eo.type, Cr),
      Ie(du.type, Cr),
      Ie(Qd.type, Cr),
      Ie(Io.type, Cr),
      Ie(hu.type, Cr),
      Ie(gu.type, Cr),
      _a(5e3, vu.type, Cr),
      Ie(xo.type, Cr),
      Ie(Kd.type, BQ),
      Ie(rh.type, jC),
      _a(2e4, mu.type, VC),
      Ie(yu.type, VC),
      Ie(Xn.type, PQ),
      Ie(ti.type, WQ),
      _a(5e3, eh.type, UQ),
      Ie(Zd.type, qQ),
      _a(3e3, Tx.type, VQ),
      _a(1e3, Yd.type, HQ),
      jQ(),
    ]);
  }
  function* GQ({ payload: t }) {
    yield* me(Px, t);
  }
  function* zQ({ payload: t }) {
    yield* me(jr, t, !1);
  }
  function* $C() {
    yield* Mn([Ie(Lt.type, GQ), Ie(ch.type, zQ)]);
  }
  function* Cm() {
    yield Mn([uk(), zC(), $C()]);
  }
  function KC() {
    return Sh.run(Cm), ve();
  }
  async function Mm() {
    let t = await qx(),
      e = await ar("zoomLanguageId"),
      r = await ar("languageCode"),
      n = await Tu(),
      i = await zi(),
      a = {
        SCREENSHOTS: (await ar("SCREENSHOTS")) ?? !1,
        DOCUMENT: (await ar("DOCUMENT")) ?? !0,
        LANGUAGE_SWITCHER: (await ar("LANGUAGE_SWITCHER")) ?? !1,
      };
    return {
      success: !0,
      langId: t,
      zoomLangId: e ? Number(e) : void 0,
      languageCode: r || void 0,
      savedUserId: n,
      installationId: i,
      showDiscovertWidget: a,
      isWidgetExpanded: await Fx(),
    };
  }
  async function QC() {
    try {
      let t = ve(),
        e = dt() ? await Mm() : await qt({ type: "tactiq.get-initial-values" });
      if (!e.success)
        throw new Error("Could not communicate with the service worker.");
      t.dispatch(
        sh({
          langId: e.langId,
          zoomLangId: e.zoomLangId,
          languageCode: e.languageCode,
          savedUserId: e.savedUserId,
          installationId: e.installationId,
        })
      ),
        t.dispatch(Lt(e.isWidgetExpanded)),
        t.dispatch(uh({ showDiscovertWidget: e.showDiscovertWidget }));
    } catch (t) {
      re.error(t);
    }
  }
  function YC(t) {
    chrome.runtime.onMessage.addListener(
      (e, r, n) => (
        !fe() &&
          e.type !== "chromex.dispatch" &&
          console.log("ServiceWorker Request", e),
        (async function () {
          await en();
          let i = (a) => {
            n(a);
          };
          switch (e.type) {
            case "tactiq.trigger-analytic":
              Bt(e.event, e.properties, e.windowLocation), i();
              break;
            case "tactiq.trigger-track-page":
              tw(e.name, e.windowLocation, e.properties), i();
              break;
            case "logout":
              t.dispatch(Ut()), i();
              break;
            case "tactiq.get-custom-token": {
              ya()
                .then(kl)
                .then((a) => i({ success: !0, token: a }))
                .catch((a) => {
                  re.error(a), i({ success: !1, error: String(a) });
                });
              break;
            }
            case "tactiq.get-id-token": {
              ya()
                .then(gi)
                .then((a) => {
                  if (!a) throw new Error("Could not get an ID token");
                  return i({ success: !0, token: a });
                })
                .catch((a) => {
                  re.error(a), i({ success: !1, error: String(a) });
                });
              break;
            }
            case "tactiq.get-initial-values": {
              Mm()
                .then((a) => i(a))
                .catch((a) => {
                  re.error(a), i({ success: !1, error: String(a) });
                });
              break;
            }
            case "tactiq.save-to-storage": {
              Cn(e.bareId, e.transcript, e.saveBlocks)
                .then((a) => i({ success: !0, localState: a }))
                .catch((a) => {
                  re.error(a), i({ success: !1, error: String(a) });
                });
              break;
            }
            case "tactiq.get-current-tab-screenshot": {
              FO()
                .then((a) => i({ success: !0, screenshot: a }))
                .catch((a) => {
                  re.error(a), i({ success: !1, error: String(a) });
                });
              break;
            }
            default:
              break;
          }
        })(),
        !0
      )
    );
  }
  importScripts("webext-dynamic-content-scripts.9.2.0.js");
  var JC, Nm;
  if (dt()) {
    console.log("INIT: Setting up extension scripts..."),
      JO(),
      console.log("INIT: Creating application state...");
    let t = KC();
    console.log("INIT: Setting uninstall URL..."),
      Iu().catch((e) => console.error(e)),
      console.log("INIT: Configuring initial application state..."),
      (JC = QC()
        .then(
          async () => (
            console.log("INIT: Registering background functions..."),
            YC(t),
            console.log(
              "INIT: Getting ready to accept messages from Tactiq Web..."
            ),
            QO(),
            console.log("INIT: Service Worker Started."),
            !0
          )
        )
        .catch((e) => {
          re.error(e);
        }));
  }
  async function en() {
    return (
      Nm ||
        (Nm = (async () => {
          await JC,
            console.log("INIT: Initialising Firebase..."),
            Yp(Jx()),
            console.log("INIT: Waiting for the user authentication..."),
            await CO(),
            console.log("INIT: Loading local state..."),
            Tm();
          let t = ve();
          return (
            console.log("INIT: Starting feature flags client..."),
            await Mo.updateContext({
              userId: t.getState().global.savedUserId || "anonymous",
              anonymousId: t.getState().global.installationId,
            }),
            await Mo.start(),
            console.log("INIT: Service Worker Ready."),
            !0
          );
        })()),
      Nm
    );
  }
})();
