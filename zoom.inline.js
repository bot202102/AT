"use strict";
(() => {
  function v(i) {
    document.documentElement.dispatchEvent(
      new window.CustomEvent("tactiq-message", { detail: i })
    );
  }
  function b(i, ...d) {
    console.log(`[Tactiq] ${i}`, ...d);
  }
  function S(i, d) {
    let m = !1,
      l = new MutationObserver(function (g) {
        g.forEach(function () {
          let u = i();
          u && !m && ((m = !0), l.disconnect(), d(u));
        });
      });
    l.observe(document, { childList: !0, subtree: !0 });
  }
  var r = window?.Redux || window?.RTK;
  (function () {
    let i = !1,
      d = (e, n) => n,
      m = [];
    function l(e) {
      let n = e.tqLastAction,
        s = n.payload ?? n;
      switch (n.type) {
        case "UPDATE_MESSAGE": {
          E(s.userId, s.previousDisplayName),
            document.documentElement.dispatchEvent(
              new window.CustomEvent("tactiq-message", {
                detail: {
                  type: "speech",
                  messages: [
                    {
                      deviceId: s.userId,
                      deviceName: s.previousDisplayName,
                      messageId: `${s.srcMsgID}/${s.userId}`,
                      messageVersion: Date.now(),
                      text: s.message,
                    },
                  ],
                },
              })
            );
          break;
        }
        case "SET_NEW_L_T_MESSAGE": {
          let a = s;
          for (let t of Object.values(a.collection))
            E(t.user.zoomID, t.user.displayName),
              document.documentElement.dispatchEvent(
                new window.CustomEvent("tactiq-message", {
                  detail: {
                    type: "speech",
                    messages: [
                      {
                        deviceId: t.user.zoomID,
                        deviceName: t.user.displayName,
                        messageId: `${t.msgId}/${t.user.zoomID}`,
                        messageVersion: Date.now(),
                        text: t.text,
                        zoomLanguage: t.language,
                      },
                    ],
                  },
                })
              );
          break;
        }
        case "SET_NEW_L_T_STATE": {
          let a = s;
          if (!("selectedTranscriptionLanguage" in a)) break;
          document.documentElement.dispatchEvent(
            new window.CustomEvent("tactiq-message", {
              detail: {
                type: "zoom-language-changed",
                payload: { zoomLanguageId: a.selectedTranscriptionLanguage },
              },
            })
          );
          break;
        }
        case "SET_SELF_CHAT_ID": {
          let { msgID: a, userId: t } = s,
            o = e.chat.meetingChat.find(({ senderId: w }) => w === t);
          if (!o) break;
          let c = o.chatMsgs.find((w) => w.msgId === a);
          if (!c) break;
          f(t, c, e.attendeesList.attendeesList);
          break;
        }
        case "UPDATE_NEW_MEETING_CHAT": {
          m = s.newMeetingChat;
          break;
        }
        case "SET_SELF_NEW_CHAT_ID": {
          let { msgID: a, userId: t } = s,
            o = m.find((c) => c.msgId === a);
          if (!o) break;
          f(
            t,
            { msgId: a, text: o.content.text },
            e.attendeesList.attendeesList
          ),
            console.log(t, o, e.attendeesList.attendeesList);
          break;
        }
        case "JOIN_MEETING_SUCCESS": {
          document.documentElement.dispatchEvent(
            new window.CustomEvent("tactiq-message", {
              detail: { type: "zoom-ready" },
            })
          );
          break;
        }
        case "RECORD_MEETING_SUCCESS": {
          document.documentElement.dispatchEvent(
            new window.CustomEvent("tactiq-message", {
              detail: { type: "created-recording" },
            })
          );
          break;
        }
        case "SET_MEETING_TOPIC": {
          document.documentElement.dispatchEvent(
            new window.CustomEvent("tactiq-message", {
              detail: { type: "title-updated", title: s.meetingTopic },
            })
          );
          break;
        }
        default:
          i && v({ type: "debug", data: JSON.stringify(n) });
      }
    }
    function g(e, n) {
      switch (n.type) {
        case "UPDATE_MEETING_CHAT": {
          let s = n.payload,
            a = [];
          s.forEach((t) => {
            let o = e.chat.meetingChat.find(
              ({ senderId: c }) => c === t.senderId
            );
            if (!o) {
              a.push({ userId: t.senderId, messages: t.chatMsgs });
              return;
            }
            o.chatMsgs.length !== t.chatMsgs.length &&
              a.push({
                userId: t.senderId,
                messages: t.chatMsgs.slice(o.chatMsgs.length - 1),
              });
          }),
            a.forEach(({ userId: t, messages: o }) => {
              o.forEach((c) => {
                f(t, c, e.attendeesList.attendeesList);
              });
            });
          break;
        }
      }
    }
    let u = [],
      E = (e, n) => {
        u.indexOf(e) === -1 &&
          (u.push(e),
          document.documentElement.dispatchEvent(
            new window.CustomEvent("tactiq-message", {
              detail: { type: "deviceinfo", deviceId: e, deviceName: n },
            })
          ));
      },
      f = (e, n, s) => {
        let { msgId: a, text: t } = n;
        if (!a) return;
        let o = s.find((c) => c.userId === e);
        o &&
          (E(e, o.displayName),
          document.documentElement.dispatchEvent(
            new window.CustomEvent("tactiq-message", {
              detail: {
                type: "speech",
                messages: [
                  {
                    type: "chat",
                    deviceId: e,
                    messageId: a,
                    messageVersion: 0,
                    text: t,
                  },
                ],
              },
            })
          ));
      },
      M = r.createStore;
    r.createStore = function (e, ...n) {
      let s = M.call(
        this,
        (...a) => {
          try {
            let [t, o] = a;
            g(t, o);
          } catch {}
          return e(...a);
        },
        ...n
      );
      return (
        (window._tq_store = s),
        s.subscribe(() => {
          try {
            l(s.getState());
          } catch {}
        }),
        s
      );
    };
    let L = r.combineReducers;
    r.combineReducers = function () {
      let [e] = arguments;
      return (e.tqLastAction = d), L.apply(this, [e]);
    };
    let _ = null,
      h = () => {
        S(
          () => document.querySelector(".pwa-webclient__iframe-wrapper iframe"),
          (...e) => {
            _ = setInterval(() => {
              let n = document.querySelector(
                ".pwa-webclient__iframe-wrapper iframe"
              )?.contentWindow?.Redux;
              n &&
                ((n.createStore = r.createStore),
                (n.combineReducers = r.combineReducers),
                clearInterval(_),
                (I = setInterval(N, 1e3)));
            }, 100);
          }
        );
      },
      I = null,
      N = () => {
        document.querySelector(".pwa-webclient__iframe-wrapper iframe")
          ?.contentWindow?.Redux || (clearInterval(I), h());
      };
    h(),
      document.documentElement.addEventListener("tactiq-rtc", async (e) => {
        let n = e.detail;
        switch (n.type) {
          case "debug":
            !i && n.enabled
              ? b("Debug mode enabled")
              : i && !n.enabled && b("Debug mode disabled"),
              (i = n.enabled);
            break;
          default:
            console.debug(n);
            break;
        }
      });
    let p = document.createElement("meta");
    p.setAttribute("id", "tactiq-rtc"),
      p.setAttribute("name", "tactiq-rtc"),
      (document.head || document.documentElement).prepend(p);
    let y = document.createElement("link");
    y.setAttribute(
      "href",
      "https://fonts.googleapis.com/css?family=Rubik:400,600,700&display=swap"
    ),
      y.setAttribute("rel", "stylesheet"),
      (document.head || document.documentElement).append(y);
    let T = Object.getOwnPropertyDescriptor(window, "innerWidth")?.get;
    window.__defineGetter__("innerWidth", function () {
      let e = T && T();
      return document.body.classList.contains("tactiq-sidebar-on")
        ? e - 320
        : e;
    });
  })();
})();
