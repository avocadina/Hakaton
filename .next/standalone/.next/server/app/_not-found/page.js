(() => {
  var e = {};
  (e.id = 492),
    (e.ids = [492]),
    (e.modules = {
      703: () => {},
      846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      1135: () => {},
      2299: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => s.a,
            __next_app__: () => c,
            pages: () => u,
            routeModule: () => _,
            tree: () => d,
          });
        var n = r(5239),
          o = r(8088),
          i = r(8170),
          s = r.n(i),
          l = r(893),
          a = {};
        for (let e in l)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (a[e] = () => l[e]);
        r.d(t, a);
        let d = {
            children: [
              "",
              {
                children: [
                  "/_not-found",
                  {
                    children: [
                      "__PAGE__",
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(r.t.bind(r, 7398, 23)),
                          "next/dist/client/components/not-found-error",
                        ],
                      },
                    ],
                  },
                  {},
                ],
              },
              {
                layout: [
                  () => Promise.resolve().then(r.bind(r, 4431)),
                  "C:\\next\\Hakaton\\src\\app\\layout.tsx",
                ],
                "not-found": [
                  () => Promise.resolve().then(r.t.bind(r, 7398, 23)),
                  "next/dist/client/components/not-found-error",
                ],
                forbidden: [
                  () => Promise.resolve().then(r.t.bind(r, 9999, 23)),
                  "next/dist/client/components/forbidden-error",
                ],
                unauthorized: [
                  () => Promise.resolve().then(r.t.bind(r, 5284, 23)),
                  "next/dist/client/components/unauthorized-error",
                ],
              },
            ],
          }.children,
          u = [],
          c = { require: r, loadChunk: () => Promise.resolve() },
          _ = new n.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: "/_not-found/page",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      2834: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 7092));
      },
      3033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      3547: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 6444, 23)),
          Promise.resolve().then(r.t.bind(r, 6042, 23)),
          Promise.resolve().then(r.t.bind(r, 8170, 23)),
          Promise.resolve().then(r.t.bind(r, 9477, 23)),
          Promise.resolve().then(r.t.bind(r, 9345, 23)),
          Promise.resolve().then(r.t.bind(r, 2089, 23)),
          Promise.resolve().then(r.t.bind(r, 6577, 23)),
          Promise.resolve().then(r.t.bind(r, 1307, 23));
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      4431: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { default: () => l, metadata: () => i, viewport: () => s });
        var n = r(7413);
        r(5134), r(703), r(7094), r(7111), r(1135);
        var o = r(8816);
        let i = {
            title: "RouteFinder",
            description: "We will help you to find the route for your trip",
            keywords: "trip, Krasnodar region, tourism, travel, Russia, hotels",
          },
          s =
            "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover";
        function l({ children: e }) {
          return (0, n.jsx)("html", {
            lang: "en",
            children: (0, n.jsx)("body", {
              className: "row",
              children: (0, n.jsx)(o.default, { children: e }),
            }),
          });
        }
      },
      5134: () => {},
      7092: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => d });
        var n = r(687),
          o = r(3210);
        let i = () => {
          let [e, t] = (0, o.useState)("desktop");
          return (
            (0, o.useEffect)(() => {
              let e = /iPad|iPhone|iPod/.test(navigator.userAgent),
                r = navigator.userAgent.includes("Android");
              e ? t("ios") : r ? t("android") : t("desktop");
            }, []),
            { deviceType: e }
          );
        };
        var s = r(7566),
          l = r.n(s);
        function a({ children: e }) {
          let { deviceType: t } = i();
          return (0, n.jsx)("div", {
            className: "content",
            children: (0, n.jsx)("div", {
              className: `${l().client__layout} ${l()[t]}`,
              children: e,
            }),
          });
        }
        function d({ children: e }) {
          return (0, n.jsx)(a, { children: e });
        }
      },
      7094: () => {},
      7111: () => {},
      7566: (e) => {
        e.exports = {
          ellipsis: "client-layout_ellipsis__6enrQ",
          "text-16": "client-layout_text-16__eeTFi",
          "text-18": "client-layout_text-18__UprlN",
          "text-20": "client-layout_text-20__zlwmT",
          "text-22": "client-layout_text-22__6vjIw",
          "text-24": "client-layout_text-24__p40CX",
          "text-28": "client-layout_text-28__DczhT",
          "text-32": "client-layout_text-32__hHO2e",
          "text-40": "client-layout_text-40__yj9UQ",
          "text-100": "client-layout_text-100__W5vcz",
          "font-regular": "client-layout_font-regular__JWTOf",
          "font-medium": "client-layout_font-medium__jaG_W",
          "font-bold": "client-layout_font-bold__S4wOV",
          uppercase: "client-layout_uppercase__i7pkO",
          "text-green": "client-layout_text-green__wDUhK",
          "text-gray": "client-layout_text-gray__1efZN",
          "text-center": "client-layout_text-center__1Jufp",
          "text-left": "client-layout_text-left__dRw_Y",
          client__layout: "client-layout_client__layout__eZx0p",
        };
      },
      8816: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => n });
        let n = (0, r(2907).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"C:\\\\next\\\\Hakaton\\\\src\\\\app\\\\client-layout\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "C:\\next\\Hakaton\\src\\app\\client-layout\\index.tsx",
          "default",
        );
      },
      9121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      9294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      9571: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 6346, 23)),
          Promise.resolve().then(r.t.bind(r, 7924, 23)),
          Promise.resolve().then(r.t.bind(r, 5656, 23)),
          Promise.resolve().then(r.t.bind(r, 99, 23)),
          Promise.resolve().then(r.t.bind(r, 8243, 23)),
          Promise.resolve().then(r.t.bind(r, 8827, 23)),
          Promise.resolve().then(r.t.bind(r, 2763, 23)),
          Promise.resolve().then(r.t.bind(r, 7173, 23));
      },
      9786: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 8816));
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [447, 825], () => r(2299));
  module.exports = n;
})();
