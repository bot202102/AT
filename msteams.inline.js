"use strict";
(() => {
  function R() {
    return !0;
  }
  function p(l) {
    document.documentElement.dispatchEvent(
      new window.CustomEvent("tactiq-message", { detail: l })
    );
  }
  function i(l, ...c) {
    console.log(`[Tactiq] ${l}`, ...c);
  }
  function A(l, c) {
    let d = !1,
      v = new MutationObserver(function (m) {
        m.forEach(function () {
          let y = l();
          y && !d && ((d = !0), v.disconnect(), c(y));
        });
      });
    v.observe(document, { childList: !0, subtree: !0 });
  }
  async function L(l) {
    return new Promise(function (c) {
      setTimeout(c, l);
    });
  }
  async function D(l, c) {
    for (; l.isConnected; ) await L(250);
    c();
  }
  async function f(l, c) {
    for (;;) {
      let d = l();
      if (d) return c && c(d), d;
      await L(250);
    }
  }
  (function () {
    let l = !1,
      c,
      d = [];
    function v(e, n) {
      for (let t in e)
        if (t.startsWith("jQuery")) {
          let r = e[t];
          if (!n || n(r)) return r;
        }
    }
    function m(e) {
      p({ type: "meeting-id", data: e });
    }
    function y(e, n, t) {
      p({
        type: "msteams-organiser",
        meetingId: e,
        isOrganiser: n,
        languageCode: t,
      });
    }
    setInterval(() => {
      if (d.length) {
        let e = [...d];
        (d = []), p({ type: "speech", messages: e });
      }
    }, 500);
    function S(e) {
      let n = d.findIndex((t) => t.messageId === e.messageId);
      n > -1
        ? d[n].messageVersion <= e.messageVersion && d.splice(n, 1, e)
        : d.push(e);
    }
    let T = {};
    function q(e) {
      if ("timestampAudioSent" in e && e.timestampAudioSent)
        return `${e.timestampAudioSent}/${e.userId}`;
      {
        let [, n] = e.id.split("/"),
          t = T[e.userId];
        return e.isFinal
          ? t
            ? ((T[e.userId] = void 0), `${t}/${e.userId}`)
            : `${n}/${e.userId}`
          : t
          ? `${t}/${e.userId}`
          : ((T[e.userId] = n), `${n}/${e.userId}`);
      }
    }
    function b(e, n) {
      if (!n.startClosedCaption) return;
      l && p({ type: "debug", data: JSON.stringify(e) });
      let [, t] = e.id.split("/"),
        r = q(e),
        C = n.participants.find((o) => o.mri === e.userId),
        h = C?.displayName
          ? C.displayName
          : n.currentUserSkypeIdentity?.displayName ??
            n.getSelfParticipant().$$state.value.displayName;
      return {
        deviceId: e.userId,
        deviceName: h,
        messageId: r,
        messageVersion: parseInt(t),
        text: e.text,
        languageCode: n.getClosedCaptionsLanguage(),
      };
    }
    let g, x;
    ((r) => ((r.Classic = "Classic"), (r.Modern = "Modern"), (r.V2 = "V2")))(
      (x ||= {})
    );
    function N(e) {
      return window.location.pathname.startsWith("/v2/")
        ? "V2"
        : e && window.location.hash.includes("modern-calling")
        ? "Modern"
        : "Classic";
    }
    async function V(e) {
      try {
        i("Meeting started", e), (T = {});
        let n,
          t,
          r = document.querySelector("iframe.embedded-electron-webview"),
          C = N(r);
        i(`Teams app version: ${C}`, r);
        let h = (o) => {
          let u = o.data?.payload?.dataLayer?.data?.closedCaptionsEntryEvent,
            a =
              o.data?.payload?.dataLayer?.data?.closedCaptionsDynamicEntryEvent;
          if (u) {
            let s = b(u, e.call);
            s && S(s);
          } else if (a) {
            let s = b(a, e.call);
            s && S(s);
          } else l && i("DEBUG", o.data);
        };
        if (e.call.startClosedCaption) {
          i("Closed captions are available"),
            m(e.call._callId),
            i("Detected call ID"),
            (g = e.call);
          let o =
            e.call.getCallingConversation && e.call.getCallingConversation();
          if (o?.meetingInfo)
            i("Detected meetingInfo"),
              p({ type: "title-updated", title: o.meetingInfo.subject });
          else if (o?.unParsedMeetingInfo)
            i("Meting title fallback to unParsedMeetingInfo"),
              p({
                type: "title-updated",
                title: JSON.parse(o.unParsedMeetingInfo).subject,
              });
          else if (
            e.call.getCallingConversationAsync &&
            (await e.call.getCallingConversationAsync())?.conversation
              ?.threadProperties?.topic
          ) {
            i("Meeting title fallback to getCallingConversationAsync");
            let a = (await e.call.getCallingConversationAsync())?.conversation
              ?.threadProperties?.topic;
            a && p({ type: "title-updated", title: a });
          } else if (e.call.getMeetingDetails) {
            i("Meeting title fallback to getMeetingDetails");
            let a = await e.call.getMeetingDetails();
            !R() && console.log("Meeting details", a);
            let s = a?.meetingChatProperties;
            !R() && console.log("Meeting title", s),
              s && p({ type: "title-updated", title: JSON.parse(s).subject });
          }
          if (
            (i("Waiting for the call to connect..."),
            (await f(() => {
              if (e.call.callGotConnected && e.call.audioStreamState)
                return "connected";
              if (
                e.callingService.getActiveCall?.() === null ||
                e.callingService.callRegistry.calls.length === 0
              )
                return "disconnected";
            })) === "connected")
          )
            if (
              (i("Call connected"),
              i("Starting closed captions..."),
              e.call.startClosedCaption(),
              e.call.stopClosedCaption &&
                ((n = e.call.stopClosedCaption),
                (e.call.stopClosedCaption = function () {
                  confirm(
                    'If you click OK, Tactiq will stop working for this meeting. Please click Cancel and use the "CC" button in Tactiq to hide the captions.'
                  ) && n?.apply(this, arguments);
                })),
              await f(
                () =>
                  e.call.closedCaptionsHaveBeenStarted() &&
                  e.call.getClosedCaptionStatus() === 2
              ),
              i("Started closed captions"),
              C === "V2")
            ) {
              let a = e.call.dataChannel?.subscriptions?.find(
                (s) => s.eventHandler.on.name === "remoteUserEventsReceived"
              )?.eventHandler?.on;
              a
                ? ((t = a.handler),
                  (a.handler = function (s, w) {
                    try {
                      if (s === "3") {
                        let M = JSON.parse(w);
                        if (
                          "recognitionResults" in M &&
                          Array.isArray(M.recognitionResults)
                        )
                          for (let k of M.recognitionResults) {
                            let E = b(k, e.call);
                            E && S(E);
                          }
                      }
                    } catch (M) {
                      console.error(M);
                    }
                    return t.apply(this, arguments);
                  }),
                  i("Configured closed captions"),
                  f(
                    () => e.call?.role,
                    (s) => {
                      e.call &&
                        y(
                          e.call._callId,
                          s === "admin",
                          e.call.getClosedCaptionsLanguage()
                        );
                    }
                  ))
                : i("Could not configure closed captions");
            } else
              C === "Modern"
                ? (i("Waiting for the modern calling to get ready"),
                  f(
                    () => r?.contentWindow,
                    (a) => {
                      i("Configuring modern calling for Tactiq...", a),
                        a.addEventListener("message", h),
                        i("Configured modern calling for Tactiq");
                    }
                  ),
                  f(
                    () => g?.role,
                    (a) => {
                      g &&
                        y(
                          g._callId,
                          a === "admin",
                          g.getClosedCaptionsLanguage()
                        );
                    }
                  ))
                : (i("Configuring classic calling for Tactiq"),
                  A(
                    () => {
                      let a = document.getElementsByTagName(
                        "calling-closed-captions"
                      );
                      if (a.length) return a[0];
                    },
                    (a) => {
                      let s = v(a).$callingClosedCaptionsController;
                      c || (c = s.adapter.handler),
                        (s.adapter.handler = function () {
                          let w = b(arguments[0], e.call);
                          return w && S(w), c.apply(this, arguments);
                        });
                    }
                  ));
          else i("Call was not connected and closed"), m(void 0), (g = void 0);
        } else i("Closed captions are NOT available", e.call);
        if (C === "Modern")
          f(
            () =>
              e.callingService.getActiveCall
                ? e.callingService.getActiveCall() === null
                : e.callingService.callRegistry.calls.length === 0,
            () => {
              r?.contentWindow?.removeEventListener("message", h),
                i("Modern calling meeting ended"),
                m(void 0),
                (g = void 0),
                setTimeout(I, 5e3);
            }
          );
        else if (C === "V2")
          f(
            () =>
              e.callingService.getActiveCall
                ? e.callingService.getActiveCall() === null
                : e.callingService.callRegistry.calls.length === 0,
            () => {
              if (t) {
                let o = e.call.dataChannel?.subscriptions?.find(
                  (u) => u.eventHandler.on.name === "remoteUserEventsReceived"
                )?.eventHandler?.on;
                o && (o.handler = t);
              }
              i("V2 meeting ended"),
                m(void 0),
                (g = void 0),
                setTimeout(I, 5e3);
            }
          );
        else {
          let o = document.getElementsByTagName("calling-screen")[0];
          D(o, () => {
            i("Classic calling meeting ended"), m(void 0);
            try {
              n && ((e.call.stopClosedCaption = n), (n = void 0));
            } catch (u) {
              console.debug(u);
            }
            (g = void 0), I();
          }).catch((u) => console.error(u));
        }
      } catch (n) {
        i("Error starting the meeting", n);
      }
    }
    function I() {
      i("Waiting for an active call..."),
        f(() => {
          let e = v(
            document.documentElement,
            (n) => "$ngControllerController" in n
          )?.$ngControllerController;
          if (
            !(
              !e &&
              ("msteamscalling" in window &&
                (e = window.msteamscalling.deref()),
              !e)
            ) &&
            e.callingService?.callRegistry?.calls?.length
          )
            if (e.callingService.getActiveCall) {
              let n = e.callingService.getActiveCall();
              return n ? { call: n, callingService: e.callingService } : void 0;
            } else {
              let { lastOrCurrentCallInfo: n } = e.callingService;
              if (!n) return;
              let t = e.callingService.callRegistry.calls.find(
                (r) => r._callId === n.callId
              );
              return t ? { call: t, callingService: e.callingService } : void 0;
            }
        }, V);
    }
    function _() {
      document.documentElement.addEventListener("tactiq-rtc", async (n) => {
        let t = n.detail;
        switch (t.type) {
          case "debug":
            !l && t.enabled
              ? i("Debug mode enabled")
              : l && !t.enabled && i("Debug mode disabled"),
              (l = t.enabled);
            break;
          case "lang":
            g?.setClosedCaptionsLanguage(t.languageCode);
            break;
          default:
            console.debug(t);
            break;
        }
      });
      let e = document.createElement("meta");
      return (
        e.setAttribute("id", "tactiq-rtc"),
        e.setAttribute("name", "tactiq-rtc"),
        (document.head || document.documentElement).prepend(e),
        I(),
        !0
      );
    }
    window.tactiq || (window.tactiqRtc = {}),
      (window.tactiqRtc.gotRTC = _()),
      console.debug("Tactiq is Ready", window.tactiqRtc.gotRTC);
  })();
})();
