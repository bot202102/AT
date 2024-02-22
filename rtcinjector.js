"use strict";
(() => {
  var l = "meet.google.com",
    u = /^([a-zA-Z0-9](?:[-a-zA-Z0-9]{0,61}[a-zA-Z0-9])?\.)?zoom.us/,
    d =
      /^(gov\.)?teams\.(microsoft|live)(\.com(\.cas\.ms|\.mcas\.ms|\.mcas-gov\.us)?|.us)$/,
    s = (n = window.location) => n.host === l;
  var a = (n = window.location) => !!n.host.match(u);
  var m = (n = window.location) => !!n.host.match(d);
  function c(n, r) {
    let o = !1,
      i = new MutationObserver(function (t) {
        t.forEach(function () {
          let e = n();
          e && !o && ((o = !0), i.disconnect(), r(e));
        });
      });
    i.observe(document, { childList: !0, subtree: !0 });
  }
  (function () {
    if ((window.tactiqrtc || (window.tactiqrtc = {}), !window.tactiqrtc.rtc)) {
      if (
        ((window.tactiqrtc.rtc = {}),
        s() &&
          (window.location.pathname.match(/\S\S\S-\S\S\S\S-\S\S\S/) ||
            window.location.pathname === "/new"))
      ) {
        let t = document.head || document.documentElement;
        t ? o(t) : c(() => document.head || document.documentElement, o);
      } else if (m()) {
        let t = document.head || document.documentElement;
        t ? i(t) : c(() => document.head || document.documentElement, i);
      } else if (a()) {
        let t = Array.from(document.querySelectorAll("script")).find((e) =>
          r(e)
        );
        t
          ? n(t)
          : c(
              () =>
                Array.from(document.querySelectorAll("script")).find((e) =>
                  r(e)
                ),
              n
            );
      }
    }
    function n(t) {
      t.onload = () => {
        let e = document.createElement("script");
        (e.type = "text/javascript"),
          (e.src = chrome.runtime.getURL("zoom.inline.js")),
          t.parentNode?.insertBefore(e, t.nextSibling);
      };
    }
    function r(t) {
      let e = t.getAttribute("src");
      return e
        ? e.indexOf("redux.min.js") > -1 ||
            e.indexOf("externals.min.js") > -1 ||
            e.indexOf("externals.0.min.js") > -1
        : 0;
    }
    function o(t) {
      let e = document.createElement("script");
      (e.type = "text/javascript"),
        (e.src = chrome.runtime.getURL("googlemeet.inline.js")),
        t.prepend(e);
    }
    function i(t) {
      let e = document.createElement("script");
      (e.type = "text/javascript"),
        (e.src = chrome.runtime.getURL("msteams.inline.js")),
        t.prepend(e);
    }
  })();
})();
