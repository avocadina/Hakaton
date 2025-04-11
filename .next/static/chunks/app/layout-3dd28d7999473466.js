(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    347: () => {},
    1302: (t, e, l) => {
      "use strict";
      l.d(e, { default: () => u });
      var _ = l(5155),
        n = l(2115);
      let i = () => {
        let [t, e] = (0, n.useState)("desktop");
        return (
          (0, n.useEffect)(() => {
            let t = /iPad|iPhone|iPod/.test(navigator.userAgent),
              l = navigator.userAgent.includes("Android");
            t ? e("ios") : l ? e("android") : e("desktop");
          }, []),
          { deviceType: t }
        );
      };
      var o = l(8813),
        a = l.n(o);
      function c(t) {
        let { children: e } = t,
          { deviceType: l } = i();
        return (0, _.jsx)("div", {
          className: "content",
          children: (0, _.jsx)("div", {
            className: "".concat(a().client__layout, " ").concat(a()[l]),
            children: e,
          }),
        });
      }
      function u(t) {
        let { children: e } = t;
        return (0, _.jsx)(c, { children: e });
      }
    },
    1802: () => {},
    2346: () => {},
    3762: () => {},
    5675: () => {},
    6270: (t, e, l) => {
      Promise.resolve().then(l.bind(l, 1302)),
        Promise.resolve().then(l.t.bind(l, 1802, 23)),
        Promise.resolve().then(l.t.bind(l, 2346, 23)),
        Promise.resolve().then(l.t.bind(l, 5675, 23)),
        Promise.resolve().then(l.t.bind(l, 3762, 23)),
        Promise.resolve().then(l.t.bind(l, 347, 23));
    },
    8813: (t) => {
      t.exports = {
        ellipsis: "client-layout_ellipsis__6enrQ",
        "text-12": "client-layout_text-12__pV8mf",
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
        "text-black": "client-layout_text-black__J0AFu",
        "text-green": "client-layout_text-green__wDUhK",
        "text-gray": "client-layout_text-gray__1efZN",
        "text-white": "client-layout_text-white__dlO7l",
        "text-center": "client-layout_text-center__1Jufp",
        "text-left": "client-layout_text-left__dRw_Y",
        client__layout: "client-layout_client__layout__eZx0p",
      };
    },
  },
  (t) => {
    var e = (e) => t((t.s = e));
    t.O(0, [758, 441, 684, 358], () => e(6270)), (_N_E = t.O());
  },
]);
