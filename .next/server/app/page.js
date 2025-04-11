(() => {
  var e = {};
  (e.id = 974),
    (e.ids = [974]),
    (e.modules = {
      440: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => i });
        var n = r(1658);
        let i = async (e) => [
          {
            type: "image/x-icon",
            sizes: "16x16",
            url:
              (0, n.fillMetadataSegment)(".", await e.params, "favicon.ico") +
              "",
          },
        ];
      },
      512: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            default: function () {
              return m;
            },
            defaultHead: function () {
              return f;
            },
          });
        let n = r(4985),
          i = r(740),
          o = r(687),
          a = i._(r(3210)),
          s = n._(r(7755)),
          l = r(4959),
          u = r(9513),
          c = r(4604);
        function f(e) {
          void 0 === e && (e = !1);
          let t = [(0, o.jsx)("meta", { charSet: "utf-8" }, "charset")];
          return (
            e ||
              t.push(
                (0, o.jsx)(
                  "meta",
                  { name: "viewport", content: "width=device-width" },
                  "viewport",
                ),
              ),
            t
          );
        }
        function p(e, t) {
          return "string" == typeof t || "number" == typeof t
            ? e
            : t.type === a.default.Fragment
              ? e.concat(
                  a.default.Children.toArray(t.props.children).reduce(
                    (e, t) =>
                      "string" == typeof t || "number" == typeof t
                        ? e
                        : e.concat(t),
                    [],
                  ),
                )
              : e.concat(t);
        }
        r(148);
        let d = ["name", "httpEquiv", "charSet", "itemProp"];
        function _(e, t) {
          let { inAmpMode: r } = t;
          return e
            .reduce(p, [])
            .reverse()
            .concat(f(r).reverse())
            .filter(
              (function () {
                let e = new Set(),
                  t = new Set(),
                  r = new Set(),
                  n = {};
                return (i) => {
                  let o = !0,
                    a = !1;
                  if (
                    i.key &&
                    "number" != typeof i.key &&
                    i.key.indexOf("$") > 0
                  ) {
                    a = !0;
                    let t = i.key.slice(i.key.indexOf("$") + 1);
                    e.has(t) ? (o = !1) : e.add(t);
                  }
                  switch (i.type) {
                    case "title":
                    case "base":
                      t.has(i.type) ? (o = !1) : t.add(i.type);
                      break;
                    case "meta":
                      for (let e = 0, t = d.length; e < t; e++) {
                        let t = d[e];
                        if (i.props.hasOwnProperty(t))
                          if ("charSet" === t) r.has(t) ? (o = !1) : r.add(t);
                          else {
                            let e = i.props[t],
                              r = n[t] || new Set();
                            ("name" !== t || !a) && r.has(e)
                              ? (o = !1)
                              : (r.add(e), (n[t] = r));
                          }
                      }
                  }
                  return o;
                };
              })(),
            )
            .reverse()
            .map((e, t) => {
              let n = e.key || t;
              if (
                process.env.__NEXT_OPTIMIZE_FONTS &&
                !r &&
                "link" === e.type &&
                e.props.href &&
                [
                  "https://fonts.googleapis.com/css",
                  "https://use.typekit.net/",
                ].some((t) => e.props.href.startsWith(t))
              ) {
                let t = { ...(e.props || {}) };
                return (
                  (t["data-href"] = t.href),
                  (t.href = void 0),
                  (t["data-optimized-fonts"] = !0),
                  a.default.cloneElement(e, t)
                );
              }
              return a.default.cloneElement(e, { key: n });
            });
        }
        let m = function (e) {
          let { children: t } = e,
            r = (0, a.useContext)(l.AmpStateContext),
            n = (0, a.useContext)(u.HeadManagerContext);
          return (0, o.jsx)(s.default, {
            reduceComponentsToState: _,
            headManager: n,
            inAmpMode: (0, c.isInAmpMode)(r),
            children: t,
          });
        };
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      554: (e, t) => {
        "use strict";
        function r(e) {
          return e.endsWith("/route");
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "isAppRouteRoute", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
      },
      660: (e, t) => {
        "use strict";
        function r(e) {
          let t = 5381;
          for (let r = 0; r < e.length; r++)
            t = ((t << 5) + t + e.charCodeAt(r)) | 0;
          return t >>> 0;
        }
        function n(e) {
          return r(e).toString(36).slice(0, 5);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            djb2Hash: function () {
              return r;
            },
            hexHash: function () {
              return n;
            },
          });
      },
      703: () => {},
      846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      1135: () => {},
      1204: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o });
        var n = r(7413),
          i = r(7066);
        function o() {
          return (0, n.jsx)(i.default, {});
        }
      },
      1261: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            default: function () {
              return l;
            },
            getImageProps: function () {
              return s;
            },
          });
        let n = r(4985),
          i = r(4953),
          o = r(6533),
          a = n._(r(1933));
        function s(e) {
          let { props: t } = (0, i.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        }
        let l = o.Image;
      },
      1437: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            INTERCEPTION_ROUTE_MARKERS: function () {
              return i;
            },
            extractInterceptionRouteInformation: function () {
              return a;
            },
            isInterceptionRouteAppPath: function () {
              return o;
            },
          });
        let n = r(4722),
          i = ["(..)(..)", "(.)", "(..)", "(...)"];
        function o(e) {
          return (
            void 0 !== e.split("/").find((e) => i.find((t) => e.startsWith(t)))
          );
        }
        function a(e) {
          let t, r, o;
          for (let n of e.split("/"))
            if ((r = i.find((e) => n.startsWith(e)))) {
              [t, o] = e.split(r, 2);
              break;
            }
          if (!t || !r || !o)
            throw Object.defineProperty(
              Error(
                "Invalid interception route: " +
                  e +
                  ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>",
              ),
              "__NEXT_ERROR_CODE",
              { value: "E269", enumerable: !1, configurable: !0 },
            );
          switch (((t = (0, n.normalizeAppPath)(t)), r)) {
            case "(.)":
              o = "/" === t ? "/" + o : t + "/" + o;
              break;
            case "(..)":
              if ("/" === t)
                throw Object.defineProperty(
                  Error(
                    "Invalid interception route: " +
                      e +
                      ". Cannot use (..) marker at the root level, use (.) instead.",
                  ),
                  "__NEXT_ERROR_CODE",
                  { value: "E207", enumerable: !1, configurable: !0 },
                );
              o = t.split("/").slice(0, -1).concat(o).join("/");
              break;
            case "(...)":
              o = "/" + o;
              break;
            case "(..)(..)":
              let a = t.split("/");
              if (a.length <= 2)
                throw Object.defineProperty(
                  Error(
                    "Invalid interception route: " +
                      e +
                      ". Cannot use (..)(..) marker at the root level or one level up.",
                  ),
                  "__NEXT_ERROR_CODE",
                  { value: "E486", enumerable: !1, configurable: !0 },
                );
              o = a.slice(0, -2).concat(o).join("/");
              break;
            default:
              throw Object.defineProperty(
                Error("Invariant: unexpected marker"),
                "__NEXT_ERROR_CODE",
                { value: "E112", enumerable: !1, configurable: !0 },
              );
          }
          return { interceptingRoute: t, interceptedRoute: o };
        }
      },
      1480: (e, t) => {
        "use strict";
        function r(e) {
          let {
              widthInt: t,
              heightInt: r,
              blurWidth: n,
              blurHeight: i,
              blurDataURL: o,
              objectFit: a,
            } = e,
            s = n ? 40 * n : t,
            l = i ? 40 * i : r,
            u = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
          return (
            "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
            u +
            "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
            (u
              ? "none"
              : "contain" === a
                ? "xMidYMid"
                : "cover" === a
                  ? "xMidYMid slice"
                  : "none") +
            "' style='filter: url(%23b);' href='" +
            o +
            "'/%3E%3C/svg%3E"
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
      },
      1658: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            fillMetadataSegment: function () {
              return p;
            },
            normalizeMetadataPageToRoute: function () {
              return _;
            },
            normalizeMetadataRoute: function () {
              return d;
            },
          });
        let n = r(8304),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r(8671)),
          o = r(6341),
          a = r(4396),
          s = r(660),
          l = r(4722),
          u = r(2958),
          c = r(5499);
        function f(e) {
          let t = i.default.dirname(e);
          if (e.endsWith("/sitemap")) return "";
          let r = "";
          return (
            t
              .split("/")
              .some(
                (e) =>
                  (0, c.isGroupSegment)(e) || (0, c.isParallelRouteSegment)(e),
              ) && (r = (0, s.djb2Hash)(t).toString(36).slice(0, 6)),
            r
          );
        }
        function p(e, t, r) {
          let n = (0, l.normalizeAppPath)(e),
            s = (0, a.getNamedRouteRegex)(n, { prefixRouteKeys: !1 }),
            c = (0, o.interpolateDynamicPath)(n, t, s),
            { name: p, ext: d } = i.default.parse(r),
            _ = f(i.default.posix.join(e, p)),
            m = _ ? `-${_}` : "";
          return (0, u.normalizePathSep)(i.default.join(c, `${p}${m}${d}`));
        }
        function d(e) {
          if (!(0, n.isMetadataPage)(e)) return e;
          let t = e,
            r = "";
          if (
            ("/robots" === e
              ? (t += ".txt")
              : "/manifest" === e
                ? (t += ".webmanifest")
                : (r = f(e)),
            !t.endsWith("/route"))
          ) {
            let { dir: e, name: n, ext: o } = i.default.parse(t);
            t = i.default.posix.join(e, `${n}${r ? `-${r}` : ""}${o}`, "route");
          }
          return t;
        }
        function _(e, t) {
          let r = e.endsWith("/route"),
            n = r ? e.slice(0, -6) : e,
            i = n.endsWith("/sitemap") ? ".xml" : "";
          return (
            (t ? `${n}/[__metadata_id__]` : `${n}${i}`) + (r ? "/route" : "")
          );
        }
      },
      1732: (e) => {
        e.exports = {
          ellipsis: "button_ellipsis__MG4oF",
          "text-12": "button_text-12__ZTBg3",
          "text-16": "button_text-16__t5jz5",
          "text-18": "button_text-18__KxTsf",
          "text-20": "button_text-20__5xU0d",
          "text-22": "button_text-22__lwcvL",
          "text-24": "button_text-24__Oz_3a",
          "text-28": "button_text-28___rj_B",
          "text-32": "button_text-32__CDC0S",
          "text-40": "button_text-40__LN8fU",
          "text-100": "button_text-100__oHKi2",
          "font-regular": "button_font-regular__5ffn6",
          "font-medium": "button_font-medium__rNO_i",
          "font-bold": "button_font-bold__XY_RU",
          uppercase: "button_uppercase__wADcf",
          "text-black": "button_text-black__guu_2",
          "text-green": "button_text-green__hi7uf",
          "text-gray": "button_text-gray__X6yXY",
          "text-white": "button_text-white__hhTfY",
          "text-center": "button_text-center__0QkvR",
          "text-left": "button_text-left__5Sdf0",
          button: "button_button__aZ_6A",
          size_0: "button_size_0__ddZC3",
          size_12_16: "button_size_12_16__yOGdn",
          size_16_24: "button_size_16_24__kvorD",
          size_12_24: "button_size_12_24__McqWg",
          black: "button_black__Ju1R5",
          white: "button_white__9a66o",
        };
      },
      1933: (e, t) => {
        "use strict";
        function r(e) {
          var t;
          let { config: r, src: n, width: i, quality: o } = e,
            a =
              o ||
              (null == (t = r.qualities)
                ? void 0
                : t.reduce((e, t) =>
                    Math.abs(t - 75) < Math.abs(e - 75) ? t : e,
                  )) ||
              75;
          return (
            r.path +
            "?url=" +
            encodeURIComponent(n) +
            "&w=" +
            i +
            "&q=" +
            a +
            (n.startsWith("/_next/static/media/"), "")
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return n;
            },
          }),
          (r.__next_img_default = !0);
        let n = r;
      },
      1937: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 9656));
      },
      2437: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "getPathMatch", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let n = r(5362);
        function i(e, t) {
          let r = [],
            i = (0, n.pathToRegexp)(e, r, {
              delimiter: "/",
              sensitive:
                "boolean" == typeof (null == t ? void 0 : t.sensitive) &&
                t.sensitive,
              strict: null == t ? void 0 : t.strict,
            }),
            o = (0, n.regexpToFunction)(
              (null == t ? void 0 : t.regexModifier)
                ? new RegExp(t.regexModifier(i.source), i.flags)
                : i,
              r,
            );
          return (e, n) => {
            if ("string" != typeof e) return !1;
            let i = o(e);
            if (!i) return !1;
            if (null == t ? void 0 : t.removeUnnamedParams)
              for (let e of r)
                "number" == typeof e.name && delete i.params[e.name];
            return { ...n, ...i.params };
          };
        }
      },
      2756: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            VALID_LOADERS: function () {
              return r;
            },
            imageConfigDefault: function () {
              return n;
            },
          });
        let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
          n = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy:
              "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: void 0,
            unoptimized: !1,
          };
      },
      2785: (e, t) => {
        "use strict";
        function r(e) {
          let t = {};
          for (let [r, n] of e.entries()) {
            let e = t[r];
            void 0 === e
              ? (t[r] = n)
              : Array.isArray(e)
                ? e.push(n)
                : (t[r] = [e, n]);
          }
          return t;
        }
        function n(e) {
          return "string" == typeof e
            ? e
            : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
              ? ""
              : String(e);
        }
        function i(e) {
          let t = new URLSearchParams();
          for (let [r, i] of Object.entries(e))
            if (Array.isArray(i)) for (let e of i) t.append(r, n(e));
            else t.set(r, n(i));
          return t;
        }
        function o(e) {
          for (
            var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          for (let t of r) {
            for (let r of t.keys()) e.delete(r);
            for (let [r, n] of t.entries()) e.append(r, n);
          }
          return e;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            assign: function () {
              return o;
            },
            searchParamsToUrlQuery: function () {
              return r;
            },
            urlQueryToSearchParams: function () {
              return i;
            },
          });
      },
      2834: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 7092));
      },
      2958: (e, t) => {
        "use strict";
        function r(e) {
          return e.replace(/\\/g, "/");
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "normalizePathSep", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
      },
      3033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      3038: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "useMergedRef", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let n = r(3210);
        function i(e, t) {
          let r = (0, n.useRef)(null),
            i = (0, n.useRef)(null);
          return (0, n.useCallback)(
            (n) => {
              if (null === n) {
                let e = r.current;
                e && ((r.current = null), e());
                let t = i.current;
                t && ((i.current = null), t());
              } else e && (r.current = o(e, n)), t && (i.current = o(t, n));
            },
            [e, t],
          );
        }
        function o(e, t) {
          if ("function" != typeof e)
            return (
              (e.current = t),
              () => {
                e.current = null;
              }
            );
          {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null);
          }
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      3293: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "escapeStringRegexp", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let r = /[|\\{}()[\]^$+*?.-]/,
          n = /[|\\{}()[\]^$+*?.-]/g;
        function i(e) {
          return r.test(e) ? e.replace(n, "\\$&") : e;
        }
      },
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      3517: (e) => {
        e.exports = {
          ellipsis: "contacts_ellipsis__l8yhg",
          "text-12": "contacts_text-12__DGbsL",
          "text-16": "contacts_text-16__Me1PH",
          "text-18": "contacts_text-18__T8XL6",
          "text-20": "contacts_text-20__GHipp",
          "text-22": "contacts_text-22__0DHmP",
          "text-24": "contacts_text-24__Pzhc8",
          "text-28": "contacts_text-28___YImb",
          "text-32": "contacts_text-32__qHods",
          "text-40": "contacts_text-40__5Ij6w",
          "text-100": "contacts_text-100__K3otV",
          "font-regular": "contacts_font-regular___Symd",
          "font-medium": "contacts_font-medium__e6K6A",
          "font-bold": "contacts_font-bold__iWvke",
          uppercase: "contacts_uppercase__IxlFd",
          "text-black": "contacts_text-black__KgTWE",
          "text-green": "contacts_text-green__w0hBF",
          "text-gray": "contacts_text-gray__Q9S1C",
          "text-white": "contacts_text-white__m_izG",
          "text-center": "contacts_text-center__0tbao",
          "text-left": "contacts_text-left__E29Cb",
          section: "contacts_section__HAeWw",
        };
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
      3736: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "parseRelativeUrl", {
            enumerable: !0,
            get: function () {
              return i;
            },
          }),
          r(4827);
        let n = r(2785);
        function i(e, t, r) {
          void 0 === r && (r = !0);
          let i = new URL("http://n"),
            o = t ? new URL(t, i) : e.startsWith(".") ? new URL("http://n") : i,
            {
              pathname: a,
              searchParams: s,
              search: l,
              hash: u,
              href: c,
              origin: f,
            } = new URL(e, o);
          if (f !== i.origin)
            throw Object.defineProperty(
              Error("invariant: invalid relative URL, router received " + e),
              "__NEXT_ERROR_CODE",
              { value: "E159", enumerable: !1, configurable: !0 },
            );
          return {
            pathname: a,
            query: r ? (0, n.searchParamsToUrlQuery)(s) : void 0,
            search: l,
            hash: u,
            href: c.slice(f.length),
          };
        }
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      4126: (e) => {
        e.exports = {
          ellipsis: "input_ellipsis__XkhBy",
          "text-12": "input_text-12__jAylU",
          "text-16": "input_text-16__f75rF",
          "text-18": "input_text-18__Lbsbm",
          "text-20": "input_text-20__DOOVW",
          "text-22": "input_text-22__vvprf",
          "text-24": "input_text-24__wjlC2",
          "text-28": "input_text-28__SPPB2",
          "text-32": "input_text-32__5mSSX",
          "text-40": "input_text-40__vQscl",
          "text-100": "input_text-100__BIz0v",
          "font-regular": "input_font-regular__Ocwpa",
          "font-medium": "input_font-medium__mxtFR",
          "font-bold": "input_font-bold__arerF",
          uppercase: "input_uppercase__ut9ia",
          "text-black": "input_text-black__IfSY9",
          "text-green": "input_text-green__pIC65",
          "text-gray": "input_text-gray__4ws14",
          "text-white": "input_text-white__e7VS0",
          "text-center": "input_text-center__veRN8",
          "text-left": "input_text-left__WiWVC",
          container: "input_container__vtAwS",
          right_icon: "input_right_icon__Wt1t_",
          input: "input_input__BVGza",
          label: "input_label__pApPz",
        };
      },
      4180: (e) => {
        e.exports = {
          ellipsis: "text-input_ellipsis__Lug4V",
          "text-12": "text-input_text-12__aSlvT",
          "text-16": "text-input_text-16__QXaiw",
          "text-18": "text-input_text-18__fh2or",
          "text-20": "text-input_text-20__A5nRW",
          "text-22": "text-input_text-22__Fi_BJ",
          "text-24": "text-input_text-24__Pu8m2",
          "text-28": "text-input_text-28__3NIo8",
          "text-32": "text-input_text-32__QVYgF",
          "text-40": "text-input_text-40__mz2O6",
          "text-100": "text-input_text-100__pCFSJ",
          "font-regular": "text-input_font-regular__F_p0f",
          "font-medium": "text-input_font-medium__kR3lS",
          "font-bold": "text-input_font-bold__3MneV",
          uppercase: "text-input_uppercase__iIJ6m",
          "text-black": "text-input_text-black__tTcUj",
          "text-green": "text-input_text-green__1fbLj",
          "text-gray": "text-input_text-gray__YkvIX",
          "text-white": "text-input_text-white__qr59w",
          "text-center": "text-input_text-center__sQ22E",
          "text-left": "text-input_text-left__nGpOB",
        };
      },
      4396: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            getNamedMiddlewareRegex: function () {
              return m;
            },
            getNamedRouteRegex: function () {
              return _;
            },
            getRouteRegex: function () {
              return f;
            },
            parseParameter: function () {
              return l;
            },
          });
        let n = r(6143),
          i = r(1437),
          o = r(3293),
          a = r(2887),
          s = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
        function l(e) {
          let t = e.match(s);
          return t ? u(t[2]) : u(e);
        }
        function u(e) {
          let t = e.startsWith("[") && e.endsWith("]");
          t && (e = e.slice(1, -1));
          let r = e.startsWith("...");
          return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
        }
        function c(e, t, r) {
          let n = {},
            l = 1,
            c = [];
          for (let f of (0, a.removeTrailingSlash)(e).slice(1).split("/")) {
            let e = i.INTERCEPTION_ROUTE_MARKERS.find((e) => f.startsWith(e)),
              a = f.match(s);
            if (e && a && a[2]) {
              let { key: t, optional: r, repeat: i } = u(a[2]);
              (n[t] = { pos: l++, repeat: i, optional: r }),
                c.push("/" + (0, o.escapeStringRegexp)(e) + "([^/]+?)");
            } else if (a && a[2]) {
              let { key: e, repeat: t, optional: i } = u(a[2]);
              (n[e] = { pos: l++, repeat: t, optional: i }),
                r && a[1] && c.push("/" + (0, o.escapeStringRegexp)(a[1]));
              let s = t ? (i ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)";
              r && a[1] && (s = s.substring(1)), c.push(s);
            } else c.push("/" + (0, o.escapeStringRegexp)(f));
            t && a && a[3] && c.push((0, o.escapeStringRegexp)(a[3]));
          }
          return { parameterizedRoute: c.join(""), groups: n };
        }
        function f(e, t) {
          let {
              includeSuffix: r = !1,
              includePrefix: n = !1,
              excludeOptionalTrailingSlash: i = !1,
            } = void 0 === t ? {} : t,
            { parameterizedRoute: o, groups: a } = c(e, r, n),
            s = o;
          return i || (s += "(?:/)?"), { re: RegExp("^" + s + "$"), groups: a };
        }
        function p(e) {
          let t,
            {
              interceptionMarker: r,
              getSafeRouteKey: n,
              segment: i,
              routeKeys: a,
              keyPrefix: s,
              backreferenceDuplicateKeys: l,
            } = e,
            { key: c, optional: f, repeat: p } = u(i),
            d = c.replace(/\W/g, "");
          s && (d = "" + s + d);
          let _ = !1;
          (0 === d.length || d.length > 30) && (_ = !0),
            isNaN(parseInt(d.slice(0, 1))) || (_ = !0),
            _ && (d = n());
          let m = d in a;
          s ? (a[d] = "" + s + c) : (a[d] = c);
          let h = r ? (0, o.escapeStringRegexp)(r) : "";
          return (
            (t =
              m && l
                ? "\\k<" + d + ">"
                : p
                  ? "(?<" + d + ">.+?)"
                  : "(?<" + d + ">[^/]+?)"),
            f ? "(?:/" + h + t + ")?" : "/" + h + t
          );
        }
        function d(e, t, r, l, u) {
          let c,
            f =
              ((c = 0),
              () => {
                let e = "",
                  t = ++c;
                for (; t > 0; )
                  (e += String.fromCharCode(97 + ((t - 1) % 26))),
                    (t = Math.floor((t - 1) / 26));
                return e;
              }),
            d = {},
            _ = [];
          for (let c of (0, a.removeTrailingSlash)(e).slice(1).split("/")) {
            let e = i.INTERCEPTION_ROUTE_MARKERS.some((e) => c.startsWith(e)),
              a = c.match(s);
            if (e && a && a[2])
              _.push(
                p({
                  getSafeRouteKey: f,
                  interceptionMarker: a[1],
                  segment: a[2],
                  routeKeys: d,
                  keyPrefix: t ? n.NEXT_INTERCEPTION_MARKER_PREFIX : void 0,
                  backreferenceDuplicateKeys: u,
                }),
              );
            else if (a && a[2]) {
              l && a[1] && _.push("/" + (0, o.escapeStringRegexp)(a[1]));
              let e = p({
                getSafeRouteKey: f,
                segment: a[2],
                routeKeys: d,
                keyPrefix: t ? n.NEXT_QUERY_PARAM_PREFIX : void 0,
                backreferenceDuplicateKeys: u,
              });
              l && a[1] && (e = e.substring(1)), _.push(e);
            } else _.push("/" + (0, o.escapeStringRegexp)(c));
            r && a && a[3] && _.push((0, o.escapeStringRegexp)(a[3]));
          }
          return { namedParameterizedRoute: _.join(""), routeKeys: d };
        }
        function _(e, t) {
          var r, n, i;
          let o = d(
              e,
              t.prefixRouteKeys,
              null != (r = t.includeSuffix) && r,
              null != (n = t.includePrefix) && n,
              null != (i = t.backreferenceDuplicateKeys) && i,
            ),
            a = o.namedParameterizedRoute;
          return (
            t.excludeOptionalTrailingSlash || (a += "(?:/)?"),
            { ...f(e, t), namedRegex: "^" + a + "$", routeKeys: o.routeKeys }
          );
        }
        function m(e, t) {
          let { parameterizedRoute: r } = c(e, !1, !1),
            { catchAll: n = !0 } = t;
          if ("/" === r) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
          let { namedParameterizedRoute: i } = d(e, !1, !1, !1, !1);
          return { namedRegex: "^" + i + (n ? "(?:(/.*)?)" : "") + "$" };
        }
      },
      4431: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { default: () => s, metadata: () => o, viewport: () => a });
        var n = r(7413);
        r(5134), r(703), r(7094), r(7111), r(1135);
        var i = r(8816);
        let o = {
            title: "RouteFinder",
            description: "We will help you to find the route for your trip",
            keywords: "trip, Krasnodar region, tourism, travel, Russia, hotels",
          },
          a =
            "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover";
        function s({ children: e }) {
          return (0, n.jsx)("html", {
            lang: "en",
            children: (0, n.jsx)("body", {
              className: "row",
              children: (0, n.jsx)(i.default, { children: e }),
            }),
          });
        }
      },
      4604: (e, t) => {
        "use strict";
        function r(e) {
          let {
            ampFirst: t = !1,
            hybrid: r = !1,
            hasQuery: n = !1,
          } = void 0 === e ? {} : e;
          return t || (r && n);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
      },
      4722: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            normalizeAppPath: function () {
              return o;
            },
            normalizeRscURL: function () {
              return a;
            },
          });
        let n = r(5531),
          i = r(5499);
        function o(e) {
          return (0, n.ensureLeadingSlash)(
            e
              .split("/")
              .reduce(
                (e, t, r, n) =>
                  !t ||
                  (0, i.isGroupSegment)(t) ||
                  "@" === t[0] ||
                  (("page" === t || "route" === t) && r === n.length - 1)
                    ? e
                    : e + "/" + t,
                "",
              ),
          );
        }
        function a(e) {
          return e.replace(/\.rsc($|\?)/, "$1");
        }
      },
      4827: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            DecodeError: function () {
              return _;
            },
            MiddlewareNotFoundError: function () {
              return g;
            },
            MissingStaticPage: function () {
              return x;
            },
            NormalizeError: function () {
              return m;
            },
            PageNotFoundError: function () {
              return h;
            },
            SP: function () {
              return p;
            },
            ST: function () {
              return d;
            },
            WEB_VITALS: function () {
              return r;
            },
            execOnce: function () {
              return n;
            },
            getDisplayName: function () {
              return l;
            },
            getLocationOrigin: function () {
              return a;
            },
            getURL: function () {
              return s;
            },
            isAbsoluteUrl: function () {
              return o;
            },
            isResSent: function () {
              return u;
            },
            loadGetInitialProps: function () {
              return f;
            },
            normalizeRepeatedSlashes: function () {
              return c;
            },
            stringifyError: function () {
              return v;
            },
          });
        let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function n(e) {
          let t,
            r = !1;
          return function () {
            for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
              i[o] = arguments[o];
            return r || ((r = !0), (t = e(...i))), t;
          };
        }
        let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
          o = (e) => i.test(e);
        function a() {
          let { protocol: e, hostname: t, port: r } = window.location;
          return e + "//" + t + (r ? ":" + r : "");
        }
        function s() {
          let { href: e } = window.location,
            t = a();
          return e.substring(t.length);
        }
        function l(e) {
          return "string" == typeof e
            ? e
            : e.displayName || e.name || "Unknown";
        }
        function u(e) {
          return e.finished || e.headersSent;
        }
        function c(e) {
          let t = e.split("?");
          return (
            t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
            (t[1] ? "?" + t.slice(1).join("?") : "")
          );
        }
        async function f(e, t) {
          let r = t.res || (t.ctx && t.ctx.res);
          if (!e.getInitialProps)
            return t.ctx && t.Component
              ? { pageProps: await f(t.Component, t.ctx) }
              : {};
          let n = await e.getInitialProps(t);
          if (r && u(r)) return n;
          if (!n)
            throw Object.defineProperty(
              Error(
                '"' +
                  l(e) +
                  '.getInitialProps()" should resolve to an object. But found "' +
                  n +
                  '" instead.',
              ),
              "__NEXT_ERROR_CODE",
              { value: "E394", enumerable: !1, configurable: !0 },
            );
          return n;
        }
        let p = "undefined" != typeof performance,
          d =
            p &&
            ["mark", "measure", "getEntriesByName"].every(
              (e) => "function" == typeof performance[e],
            );
        class _ extends Error {}
        class m extends Error {}
        class h extends Error {
          constructor(e) {
            super(),
              (this.code = "ENOENT"),
              (this.name = "PageNotFoundError"),
              (this.message = "Cannot find module for page: " + e);
          }
        }
        class x extends Error {
          constructor(e, t) {
            super(),
              (this.message =
                "Failed to load static file for page: " + e + " " + t);
          }
        }
        class g extends Error {
          constructor() {
            super(),
              (this.code = "ENOENT"),
              (this.message = "Cannot find the middleware module");
          }
        }
        function v(e) {
          return JSON.stringify({ message: e.message, stack: e.stack });
        }
      },
      4953: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function () {
              return l;
            },
          }),
          r(148);
        let n = r(1480),
          i = r(2756),
          o = ["-moz-initial", "fill", "none", "scale-down", void 0];
        function a(e) {
          return void 0 !== e.default;
        }
        function s(e) {
          return void 0 === e
            ? e
            : "number" == typeof e
              ? Number.isFinite(e)
                ? e
                : NaN
              : "string" == typeof e && /^[0-9]+$/.test(e)
                ? parseInt(e, 10)
                : NaN;
        }
        function l(e, t) {
          var r, l;
          let u,
            c,
            f,
            {
              src: p,
              sizes: d,
              unoptimized: _ = !1,
              priority: m = !1,
              loading: h,
              className: x,
              quality: g,
              width: v,
              height: b,
              fill: y = !1,
              style: E,
              overrideSrc: R,
              onLoad: P,
              onLoadingComplete: j,
              placeholder: w = "empty",
              blurDataURL: O,
              fetchPriority: A,
              decoding: S = "async",
              layout: C,
              objectFit: T,
              objectPosition: N,
              lazyBoundary: k,
              lazyRoot: M,
              ...I
            } = e,
            {
              imgConf: z,
              showAltText: $,
              blurComplete: D,
              defaultLoader: U,
            } = t,
            L = z || i.imageConfigDefault;
          if ("allSizes" in L) u = L;
          else {
            let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t),
              t = L.deviceSizes.sort((e, t) => e - t),
              n = null == (r = L.qualities) ? void 0 : r.sort((e, t) => e - t);
            u = { ...L, allSizes: e, deviceSizes: t, qualities: n };
          }
          if (void 0 === U)
            throw Object.defineProperty(
              Error(
                "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
              ),
              "__NEXT_ERROR_CODE",
              { value: "E163", enumerable: !1, configurable: !0 },
            );
          let F = I.loader || U;
          delete I.loader, delete I.srcSet;
          let q = "__next_img_default" in F;
          if (q) {
            if ("custom" === u.loader)
              throw Object.defineProperty(
                Error(
                  'Image with src "' +
                    p +
                    '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
                ),
                "__NEXT_ERROR_CODE",
                { value: "E252", enumerable: !1, configurable: !0 },
              );
          } else {
            let e = F;
            F = (t) => {
              let { config: r, ...n } = t;
              return e(n);
            };
          }
          if (C) {
            "fill" === C && (y = !0);
            let e = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[C];
            e && (E = { ...E, ...e });
            let t = { responsive: "100vw", fill: "100vw" }[C];
            t && !d && (d = t);
          }
          let W = "",
            X = s(v),
            H = s(b);
          if ((l = p) && "object" == typeof l && (a(l) || void 0 !== l.src)) {
            let e = a(p) ? p.default : p;
            if (!e.src)
              throw Object.defineProperty(
                Error(
                  "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                    JSON.stringify(e),
                ),
                "__NEXT_ERROR_CODE",
                { value: "E460", enumerable: !1, configurable: !0 },
              );
            if (!e.height || !e.width)
              throw Object.defineProperty(
                Error(
                  "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                    JSON.stringify(e),
                ),
                "__NEXT_ERROR_CODE",
                { value: "E48", enumerable: !1, configurable: !0 },
              );
            if (
              ((c = e.blurWidth),
              (f = e.blurHeight),
              (O = O || e.blurDataURL),
              (W = e.src),
              !y)
            )
              if (X || H) {
                if (X && !H) {
                  let t = X / e.width;
                  H = Math.round(e.height * t);
                } else if (!X && H) {
                  let t = H / e.height;
                  X = Math.round(e.width * t);
                }
              } else (X = e.width), (H = e.height);
          }
          let G = !m && ("lazy" === h || void 0 === h);
          (!(p = "string" == typeof p ? p : W) ||
            p.startsWith("data:") ||
            p.startsWith("blob:")) &&
            ((_ = !0), (G = !1)),
            u.unoptimized && (_ = !0),
            q &&
              !u.dangerouslyAllowSVG &&
              p.split("?", 1)[0].endsWith(".svg") &&
              (_ = !0);
          let B = s(g),
            V = Object.assign(
              y
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: T,
                    objectPosition: N,
                  }
                : {},
              $ ? {} : { color: "transparent" },
              E,
            ),
            K =
              D || "empty" === w
                ? null
                : "blur" === w
                  ? 'url("data:image/svg+xml;charset=utf-8,' +
                    (0, n.getImageBlurSvg)({
                      widthInt: X,
                      heightInt: H,
                      blurWidth: c,
                      blurHeight: f,
                      blurDataURL: O || "",
                      objectFit: V.objectFit,
                    }) +
                    '")'
                  : 'url("' + w + '")',
            Q = o.includes(V.objectFit)
              ? "fill" === V.objectFit
                ? "100% 100%"
                : "cover"
              : V.objectFit,
            Y = K
              ? {
                  backgroundSize: Q,
                  backgroundPosition: V.objectPosition || "50% 50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: K,
                }
              : {},
            J = (function (e) {
              let {
                config: t,
                src: r,
                unoptimized: n,
                width: i,
                quality: o,
                sizes: a,
                loader: s,
              } = e;
              if (n) return { src: r, srcSet: void 0, sizes: void 0 };
              let { widths: l, kind: u } = (function (e, t, r) {
                  let { deviceSizes: n, allSizes: i } = e;
                  if (r) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      t = [];
                    for (let n; (n = e.exec(r)); ) t.push(parseInt(n[2]));
                    if (t.length) {
                      let e = 0.01 * Math.min(...t);
                      return {
                        widths: i.filter((t) => t >= n[0] * e),
                        kind: "w",
                      };
                    }
                    return { widths: i, kind: "w" };
                  }
                  return "number" != typeof t
                    ? { widths: n, kind: "w" }
                    : {
                        widths: [
                          ...new Set(
                            [t, 2 * t].map(
                              (e) => i.find((t) => t >= e) || i[i.length - 1],
                            ),
                          ),
                        ],
                        kind: "x",
                      };
                })(t, i, a),
                c = l.length - 1;
              return {
                sizes: a || "w" !== u ? a : "100vw",
                srcSet: l
                  .map(
                    (e, n) =>
                      s({ config: t, src: r, quality: o, width: e }) +
                      " " +
                      ("w" === u ? e : n + 1) +
                      u,
                  )
                  .join(", "),
                src: s({ config: t, src: r, quality: o, width: l[c] }),
              };
            })({
              config: u,
              src: p,
              unoptimized: _,
              width: X,
              quality: B,
              sizes: d,
              loader: F,
            });
          return {
            props: {
              ...I,
              loading: G ? "lazy" : h,
              fetchPriority: A,
              width: X,
              height: H,
              decoding: S,
              className: x,
              style: { ...V, ...Y },
              sizes: J.sizes,
              srcSet: J.srcSet,
              src: R || J.src,
            },
            meta: { unoptimized: _, priority: m, placeholder: w, fill: y },
          };
        }
      },
      4959: (e, t, r) => {
        "use strict";
        e.exports = r(4041).vendored.contexts.AmpContext;
      },
      5134: () => {},
      5362: (e) => {
        (() => {
          "use strict";
          "undefined" != typeof __nccwpck_require__ &&
            (__nccwpck_require__.ab = __dirname + "/");
          var t = {};
          (() => {
            function e(e, t) {
              void 0 === t && (t = {});
              for (
                var r = (function (e) {
                    for (var t = [], r = 0; r < e.length; ) {
                      var n = e[r];
                      if ("*" === n || "+" === n || "?" === n) {
                        t.push({ type: "MODIFIER", index: r, value: e[r++] });
                        continue;
                      }
                      if ("\\" === n) {
                        t.push({
                          type: "ESCAPED_CHAR",
                          index: r++,
                          value: e[r++],
                        });
                        continue;
                      }
                      if ("{" === n) {
                        t.push({ type: "OPEN", index: r, value: e[r++] });
                        continue;
                      }
                      if ("}" === n) {
                        t.push({ type: "CLOSE", index: r, value: e[r++] });
                        continue;
                      }
                      if (":" === n) {
                        for (var i = "", o = r + 1; o < e.length; ) {
                          var a = e.charCodeAt(o);
                          if (
                            (a >= 48 && a <= 57) ||
                            (a >= 65 && a <= 90) ||
                            (a >= 97 && a <= 122) ||
                            95 === a
                          ) {
                            i += e[o++];
                            continue;
                          }
                          break;
                        }
                        if (!i)
                          throw TypeError("Missing parameter name at " + r);
                        t.push({ type: "NAME", index: r, value: i }), (r = o);
                        continue;
                      }
                      if ("(" === n) {
                        var s = 1,
                          l = "",
                          o = r + 1;
                        if ("?" === e[o])
                          throw TypeError(
                            'Pattern cannot start with "?" at ' + o,
                          );
                        for (; o < e.length; ) {
                          if ("\\" === e[o]) {
                            l += e[o++] + e[o++];
                            continue;
                          }
                          if (")" === e[o]) {
                            if (0 == --s) {
                              o++;
                              break;
                            }
                          } else if ("(" === e[o] && (s++, "?" !== e[o + 1]))
                            throw TypeError(
                              "Capturing groups are not allowed at " + o,
                            );
                          l += e[o++];
                        }
                        if (s) throw TypeError("Unbalanced pattern at " + r);
                        if (!l) throw TypeError("Missing pattern at " + r);
                        t.push({ type: "PATTERN", index: r, value: l }),
                          (r = o);
                        continue;
                      }
                      t.push({ type: "CHAR", index: r, value: e[r++] });
                    }
                    return t.push({ type: "END", index: r, value: "" }), t;
                  })(e),
                  n = t.prefixes,
                  o = void 0 === n ? "./" : n,
                  a = "[^" + i(t.delimiter || "/#?") + "]+?",
                  s = [],
                  l = 0,
                  u = 0,
                  c = "",
                  f = function (e) {
                    if (u < r.length && r[u].type === e) return r[u++].value;
                  },
                  p = function (e) {
                    var t = f(e);
                    if (void 0 !== t) return t;
                    var n = r[u];
                    throw TypeError(
                      "Unexpected " +
                        n.type +
                        " at " +
                        n.index +
                        ", expected " +
                        e,
                    );
                  },
                  d = function () {
                    for (var e, t = ""; (e = f("CHAR") || f("ESCAPED_CHAR")); )
                      t += e;
                    return t;
                  };
                u < r.length;

              ) {
                var _ = f("CHAR"),
                  m = f("NAME"),
                  h = f("PATTERN");
                if (m || h) {
                  var x = _ || "";
                  -1 === o.indexOf(x) && ((c += x), (x = "")),
                    c && (s.push(c), (c = "")),
                    s.push({
                      name: m || l++,
                      prefix: x,
                      suffix: "",
                      pattern: h || a,
                      modifier: f("MODIFIER") || "",
                    });
                  continue;
                }
                var g = _ || f("ESCAPED_CHAR");
                if (g) {
                  c += g;
                  continue;
                }
                if ((c && (s.push(c), (c = "")), f("OPEN"))) {
                  var x = d(),
                    v = f("NAME") || "",
                    b = f("PATTERN") || "",
                    y = d();
                  p("CLOSE"),
                    s.push({
                      name: v || (b ? l++ : ""),
                      pattern: v && !b ? a : b,
                      prefix: x,
                      suffix: y,
                      modifier: f("MODIFIER") || "",
                    });
                  continue;
                }
                p("END");
              }
              return s;
            }
            function r(e, t) {
              void 0 === t && (t = {});
              var r = o(t),
                n = t.encode,
                i =
                  void 0 === n
                    ? function (e) {
                        return e;
                      }
                    : n,
                a = t.validate,
                s = void 0 === a || a,
                l = e.map(function (e) {
                  if ("object" == typeof e)
                    return RegExp("^(?:" + e.pattern + ")$", r);
                });
              return function (t) {
                for (var r = "", n = 0; n < e.length; n++) {
                  var o = e[n];
                  if ("string" == typeof o) {
                    r += o;
                    continue;
                  }
                  var a = t ? t[o.name] : void 0,
                    u = "?" === o.modifier || "*" === o.modifier,
                    c = "*" === o.modifier || "+" === o.modifier;
                  if (Array.isArray(a)) {
                    if (!c)
                      throw TypeError(
                        'Expected "' +
                          o.name +
                          '" to not repeat, but got an array',
                      );
                    if (0 === a.length) {
                      if (u) continue;
                      throw TypeError(
                        'Expected "' + o.name + '" to not be empty',
                      );
                    }
                    for (var f = 0; f < a.length; f++) {
                      var p = i(a[f], o);
                      if (s && !l[n].test(p))
                        throw TypeError(
                          'Expected all "' +
                            o.name +
                            '" to match "' +
                            o.pattern +
                            '", but got "' +
                            p +
                            '"',
                        );
                      r += o.prefix + p + o.suffix;
                    }
                    continue;
                  }
                  if ("string" == typeof a || "number" == typeof a) {
                    var p = i(String(a), o);
                    if (s && !l[n].test(p))
                      throw TypeError(
                        'Expected "' +
                          o.name +
                          '" to match "' +
                          o.pattern +
                          '", but got "' +
                          p +
                          '"',
                      );
                    r += o.prefix + p + o.suffix;
                    continue;
                  }
                  if (!u) {
                    var d = c ? "an array" : "a string";
                    throw TypeError('Expected "' + o.name + '" to be ' + d);
                  }
                }
                return r;
              };
            }
            function n(e, t, r) {
              void 0 === r && (r = {});
              var n = r.decode,
                i =
                  void 0 === n
                    ? function (e) {
                        return e;
                      }
                    : n;
              return function (r) {
                var n = e.exec(r);
                if (!n) return !1;
                for (
                  var o = n[0], a = n.index, s = Object.create(null), l = 1;
                  l < n.length;
                  l++
                )
                  !(function (e) {
                    if (void 0 !== n[e]) {
                      var r = t[e - 1];
                      "*" === r.modifier || "+" === r.modifier
                        ? (s[r.name] = n[e]
                            .split(r.prefix + r.suffix)
                            .map(function (e) {
                              return i(e, r);
                            }))
                        : (s[r.name] = i(n[e], r));
                    }
                  })(l);
                return { path: o, index: a, params: s };
              };
            }
            function i(e) {
              return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
            }
            function o(e) {
              return e && e.sensitive ? "" : "i";
            }
            function a(e, t, r) {
              void 0 === r && (r = {});
              for (
                var n = r.strict,
                  a = void 0 !== n && n,
                  s = r.start,
                  l = r.end,
                  u = r.encode,
                  c =
                    void 0 === u
                      ? function (e) {
                          return e;
                        }
                      : u,
                  f = "[" + i(r.endsWith || "") + "]|$",
                  p = "[" + i(r.delimiter || "/#?") + "]",
                  d = void 0 === s || s ? "^" : "",
                  _ = 0;
                _ < e.length;
                _++
              ) {
                var m = e[_];
                if ("string" == typeof m) d += i(c(m));
                else {
                  var h = i(c(m.prefix)),
                    x = i(c(m.suffix));
                  if (m.pattern)
                    if ((t && t.push(m), h || x))
                      if ("+" === m.modifier || "*" === m.modifier) {
                        var g = "*" === m.modifier ? "?" : "";
                        d +=
                          "(?:" +
                          h +
                          "((?:" +
                          m.pattern +
                          ")(?:" +
                          x +
                          h +
                          "(?:" +
                          m.pattern +
                          "))*)" +
                          x +
                          ")" +
                          g;
                      } else
                        d +=
                          "(?:" +
                          h +
                          "(" +
                          m.pattern +
                          ")" +
                          x +
                          ")" +
                          m.modifier;
                    else d += "(" + m.pattern + ")" + m.modifier;
                  else d += "(?:" + h + x + ")" + m.modifier;
                }
              }
              if (void 0 === l || l)
                a || (d += p + "?"), (d += r.endsWith ? "(?=" + f + ")" : "$");
              else {
                var v = e[e.length - 1],
                  b =
                    "string" == typeof v
                      ? p.indexOf(v[v.length - 1]) > -1
                      : void 0 === v;
                a || (d += "(?:" + p + "(?=" + f + "))?"),
                  b || (d += "(?=" + p + "|" + f + ")");
              }
              return new RegExp(d, o(r));
            }
            function s(t, r, n) {
              if (t instanceof RegExp) {
                if (!r) return t;
                var i = t.source.match(/\((?!\?)/g);
                if (i)
                  for (var l = 0; l < i.length; l++)
                    r.push({
                      name: l,
                      prefix: "",
                      suffix: "",
                      modifier: "",
                      pattern: "",
                    });
                return t;
              }
              return Array.isArray(t)
                ? RegExp(
                    "(?:" +
                      t
                        .map(function (e) {
                          return s(e, r, n).source;
                        })
                        .join("|") +
                      ")",
                    o(n),
                  )
                : a(e(t, n), r, n);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.parse = e),
              (t.compile = function (t, n) {
                return r(e(t, n), n);
              }),
              (t.tokensToFunction = r),
              (t.match = function (e, t) {
                var r = [];
                return n(s(e, r, t), r, t);
              }),
              (t.regexpToFunction = n),
              (t.tokensToRegexp = a),
              (t.pathToRegexp = s);
          })(),
            (e.exports = t);
        })();
      },
      5526: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            compileNonPath: function () {
              return f;
            },
            matchHas: function () {
              return c;
            },
            parseDestination: function () {
              return p;
            },
            prepareDestination: function () {
              return d;
            },
          });
        let n = r(5362),
          i = r(3293),
          o = r(6759),
          a = r(1437),
          s = r(9977),
          l = r(8212);
        function u(e) {
          return e.replace(/__ESC_COLON_/gi, ":");
        }
        function c(e, t, r, n) {
          void 0 === r && (r = []), void 0 === n && (n = []);
          let i = {},
            o = (r) => {
              let n,
                o = r.key;
              switch (r.type) {
                case "header":
                  (o = o.toLowerCase()), (n = e.headers[o]);
                  break;
                case "cookie":
                  n =
                    "cookies" in e
                      ? e.cookies[r.key]
                      : (0, l.getCookieParser)(e.headers)()[r.key];
                  break;
                case "query":
                  n = t[o];
                  break;
                case "host": {
                  let { host: t } = (null == e ? void 0 : e.headers) || {};
                  n = null == t ? void 0 : t.split(":", 1)[0].toLowerCase();
                }
              }
              if (!r.value && n)
                return (
                  (i[
                    (function (e) {
                      let t = "";
                      for (let r = 0; r < e.length; r++) {
                        let n = e.charCodeAt(r);
                        ((n > 64 && n < 91) || (n > 96 && n < 123)) &&
                          (t += e[r]);
                      }
                      return t;
                    })(o)
                  ] = n),
                  !0
                );
              if (n) {
                let e = RegExp("^" + r.value + "$"),
                  t = Array.isArray(n) ? n.slice(-1)[0].match(e) : n.match(e);
                if (t)
                  return (
                    Array.isArray(t) &&
                      (t.groups
                        ? Object.keys(t.groups).forEach((e) => {
                            i[e] = t.groups[e];
                          })
                        : "host" === r.type && t[0] && (i.host = t[0])),
                    !0
                  );
              }
              return !1;
            };
          return !(!r.every((e) => o(e)) || n.some((e) => o(e))) && i;
        }
        function f(e, t) {
          if (!e.includes(":")) return e;
          for (let r of Object.keys(t))
            e.includes(":" + r) &&
              (e = e
                .replace(
                  RegExp(":" + r + "\\*", "g"),
                  ":" + r + "--ESCAPED_PARAM_ASTERISKS",
                )
                .replace(
                  RegExp(":" + r + "\\?", "g"),
                  ":" + r + "--ESCAPED_PARAM_QUESTION",
                )
                .replace(
                  RegExp(":" + r + "\\+", "g"),
                  ":" + r + "--ESCAPED_PARAM_PLUS",
                )
                .replace(
                  RegExp(":" + r + "(?!\\w)", "g"),
                  "--ESCAPED_PARAM_COLON" + r,
                ));
          return (
            (e = e
              .replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1")
              .replace(/--ESCAPED_PARAM_PLUS/g, "+")
              .replace(/--ESCAPED_PARAM_COLON/g, ":")
              .replace(/--ESCAPED_PARAM_QUESTION/g, "?")
              .replace(/--ESCAPED_PARAM_ASTERISKS/g, "*")),
            (0, n.compile)("/" + e, { validate: !1 })(t).slice(1)
          );
        }
        function p(e) {
          let t = e.destination;
          for (let r of Object.keys({ ...e.params, ...e.query }))
            r &&
              (t = t.replace(
                RegExp(":" + (0, i.escapeStringRegexp)(r), "g"),
                "__ESC_COLON_" + r,
              ));
          let r = (0, o.parseUrl)(t),
            n = r.pathname;
          n && (n = u(n));
          let a = r.href;
          a && (a = u(a));
          let s = r.hostname;
          s && (s = u(s));
          let l = r.hash;
          return (
            l && (l = u(l)),
            { ...r, pathname: n, hostname: s, href: a, hash: l }
          );
        }
        function d(e) {
          let t,
            r,
            i = Object.assign({}, e.query);
          delete i[s.NEXT_RSC_UNION_QUERY];
          let o = p(e),
            { hostname: l, query: c } = o,
            d = o.pathname;
          o.hash && (d = "" + d + o.hash);
          let _ = [],
            m = [];
          for (let e of ((0, n.pathToRegexp)(d, m), m)) _.push(e.name);
          if (l) {
            let e = [];
            for (let t of ((0, n.pathToRegexp)(l, e), e)) _.push(t.name);
          }
          let h = (0, n.compile)(d, { validate: !1 });
          for (let [r, i] of (l && (t = (0, n.compile)(l, { validate: !1 })),
          Object.entries(c)))
            Array.isArray(i)
              ? (c[r] = i.map((t) => f(u(t), e.params)))
              : "string" == typeof i && (c[r] = f(u(i), e.params));
          let x = Object.keys(e.params).filter(
            (e) => "nextInternalLocale" !== e,
          );
          if (e.appendParamsToQuery && !x.some((e) => _.includes(e)))
            for (let t of x) t in c || (c[t] = e.params[t]);
          if ((0, a.isInterceptionRouteAppPath)(d))
            for (let t of d.split("/")) {
              let r = a.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e));
              if (r) {
                "(..)(..)" === r
                  ? ((e.params["0"] = "(..)"), (e.params["1"] = "(..)"))
                  : (e.params["0"] = r);
                break;
              }
            }
          try {
            let [n, i] = (r = h(e.params)).split("#", 2);
            t && (o.hostname = t(e.params)),
              (o.pathname = n),
              (o.hash = (i ? "#" : "") + (i || "")),
              delete o.search;
          } catch (e) {
            if (e.message.match(/Expected .*? to not repeat, but got an array/))
              throw Object.defineProperty(
                Error(
                  "To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match",
                ),
                "__NEXT_ERROR_CODE",
                { value: "E329", enumerable: !1, configurable: !0 },
              );
            throw e;
          }
          return (
            (o.query = { ...i, ...o.query }),
            { newUrl: r, destQuery: c, parsedDestination: o }
          );
        }
      },
      5531: (e, t) => {
        "use strict";
        function r(e) {
          return e.startsWith("/") ? e : "/" + e;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ensureLeadingSlash", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
      },
      6341: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            getPreviouslyRevalidatedTags: function () {
              return x;
            },
            getUtils: function () {
              return h;
            },
            interpolateDynamicPath: function () {
              return _;
            },
            normalizeDynamicRouteParams: function () {
              return m;
            },
            normalizeVercelUrl: function () {
              return d;
            },
          });
        let n = r(9551),
          i = r(1959),
          o = r(2437),
          a = r(4396),
          s = r(8034),
          l = r(5526),
          u = r(2887),
          c = r(4722),
          f = r(6143),
          p = r(7912);
        function d(e, t, r) {
          let i = (0, n.parse)(e.url, !0);
          for (let e of (delete i.search, Object.keys(i.query))) {
            let n =
                e !== f.NEXT_QUERY_PARAM_PREFIX &&
                e.startsWith(f.NEXT_QUERY_PARAM_PREFIX),
              o =
                e !== f.NEXT_INTERCEPTION_MARKER_PREFIX &&
                e.startsWith(f.NEXT_INTERCEPTION_MARKER_PREFIX);
            (n ||
              o ||
              t.includes(e) ||
              (r && Object.keys(r.groups).includes(e))) &&
              delete i.query[e];
          }
          e.url = (0, n.format)(i);
        }
        function _(e, t, r) {
          if (!r) return e;
          for (let n of Object.keys(r.groups)) {
            let i,
              { optional: o, repeat: a } = r.groups[n],
              s = `[${a ? "..." : ""}${n}]`;
            o && (s = `[${s}]`);
            let l = t[n];
            (i = Array.isArray(l)
              ? l.map((e) => e && encodeURIComponent(e)).join("/")
              : l
                ? encodeURIComponent(l)
                : ""),
              (e = e.replaceAll(s, i));
          }
          return e;
        }
        function m(e, t, r, n) {
          let i = {};
          for (let o of Object.keys(t.groups)) {
            let a = e[o];
            "string" == typeof a
              ? (a = (0, c.normalizeRscURL)(a))
              : Array.isArray(a) && (a = a.map(c.normalizeRscURL));
            let s = r[o],
              l = t.groups[o].optional;
            if (
              (Array.isArray(s)
                ? s.some((e) =>
                    Array.isArray(a)
                      ? a.some((t) => t.includes(e))
                      : null == a
                        ? void 0
                        : a.includes(e),
                  )
                : null == a
                  ? void 0
                  : a.includes(s)) ||
              (void 0 === a && !(l && n))
            )
              return { params: {}, hasValidParams: !1 };
            l &&
              (!a ||
                (Array.isArray(a) &&
                  1 === a.length &&
                  ("index" === a[0] || a[0] === `[[...${o}]]`))) &&
              ((a = void 0), delete e[o]),
              a &&
                "string" == typeof a &&
                t.groups[o].repeat &&
                (a = a.split("/")),
              a && (i[o] = a);
          }
          return { params: i, hasValidParams: !0 };
        }
        function h({
          page: e,
          i18n: t,
          basePath: r,
          rewrites: n,
          pageIsDynamic: c,
          trailingSlash: f,
          caseSensitive: h,
        }) {
          let x, g, v;
          return (
            c &&
              ((x = (0, a.getNamedRouteRegex)(e, { prefixRouteKeys: !1 })),
              (v = (g = (0, s.getRouteMatcher)(x))(e))),
            {
              handleRewrites: function (a, s) {
                let p = {},
                  d = s.pathname,
                  _ = (n) => {
                    let u = (0, o.getPathMatch)(n.source + (f ? "(/)?" : ""), {
                      removeUnnamedParams: !0,
                      strict: !0,
                      sensitive: !!h,
                    });
                    if (!s.pathname) return !1;
                    let _ = u(s.pathname);
                    if ((n.has || n.missing) && _) {
                      let e = (0, l.matchHas)(a, s.query, n.has, n.missing);
                      e ? Object.assign(_, e) : (_ = !1);
                    }
                    if (_) {
                      let { parsedDestination: o, destQuery: a } = (0,
                      l.prepareDestination)({
                        appendParamsToQuery: !0,
                        destination: n.destination,
                        params: _,
                        query: s.query,
                      });
                      if (o.protocol) return !0;
                      if (
                        (Object.assign(p, a, _),
                        Object.assign(s.query, o.query),
                        delete o.query,
                        Object.assign(s, o),
                        !(d = s.pathname))
                      )
                        return !1;
                      if (
                        (r && (d = d.replace(RegExp(`^${r}`), "") || "/"), t)
                      ) {
                        let e = (0, i.normalizeLocalePath)(d, t.locales);
                        (d = e.pathname),
                          (s.query.nextInternalLocale =
                            e.detectedLocale || _.nextInternalLocale);
                      }
                      if (d === e) return !0;
                      if (c && g) {
                        let e = g(d);
                        if (e) return (s.query = { ...s.query, ...e }), !0;
                      }
                    }
                    return !1;
                  };
                for (let e of n.beforeFiles || []) _(e);
                if (d !== e) {
                  let t = !1;
                  for (let e of n.afterFiles || []) if ((t = _(e))) break;
                  if (
                    !t &&
                    !(() => {
                      let t = (0, u.removeTrailingSlash)(d || "");
                      return (
                        t === (0, u.removeTrailingSlash)(e) ||
                        (null == g ? void 0 : g(t))
                      );
                    })()
                  ) {
                    for (let e of n.fallback || []) if ((t = _(e))) break;
                  }
                }
                return p;
              },
              defaultRouteRegex: x,
              dynamicRouteMatcher: g,
              defaultRouteMatches: v,
              getParamsFromRouteMatches: function (e) {
                if (!x) return null;
                let { groups: t, routeKeys: r } = x,
                  n = (0, s.getRouteMatcher)({
                    re: {
                      exec: (e) => {
                        let n = Object.fromEntries(new URLSearchParams(e));
                        for (let [e, t] of Object.entries(n)) {
                          let r = (0, p.normalizeNextQueryParam)(e);
                          r && ((n[r] = t), delete n[e]);
                        }
                        let i = {};
                        for (let e of Object.keys(r)) {
                          let o = r[e];
                          if (!o) continue;
                          let a = t[o],
                            s = n[e];
                          if (!a.optional && !s) return null;
                          i[a.pos] = s;
                        }
                        return i;
                      },
                    },
                    groups: t,
                  })(e);
                return n || null;
              },
              normalizeDynamicRouteParams: (e, t) =>
                x && v ? m(e, x, v, t) : { params: {}, hasValidParams: !1 },
              normalizeVercelUrl: (e, t) => d(e, t, x),
              interpolateDynamicPath: (e, t) => _(e, t, x),
            }
          );
        }
        function x(e, t) {
          return "string" == typeof e[f.NEXT_CACHE_REVALIDATED_TAGS_HEADER] &&
            e[f.NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER] === t
            ? e[f.NEXT_CACHE_REVALIDATED_TAGS_HEADER].split(",")
            : [];
        }
      },
      6415: (e) => {
        (() => {
          "use strict";
          "undefined" != typeof __nccwpck_require__ &&
            (__nccwpck_require__.ab = __dirname + "/");
          var t = {};
          (() => {
            (t.parse = function (t, r) {
              if ("string" != typeof t)
                throw TypeError("argument str must be a string");
              for (
                var i = {}, o = t.split(n), a = (r || {}).decode || e, s = 0;
                s < o.length;
                s++
              ) {
                var l = o[s],
                  u = l.indexOf("=");
                if (!(u < 0)) {
                  var c = l.substr(0, u).trim(),
                    f = l.substr(++u, l.length).trim();
                  '"' == f[0] && (f = f.slice(1, -1)),
                    void 0 == i[c] &&
                      (i[c] = (function (e, t) {
                        try {
                          return t(e);
                        } catch (t) {
                          return e;
                        }
                      })(f, a));
                }
              }
              return i;
            }),
              (t.serialize = function (e, t, n) {
                var o = n || {},
                  a = o.encode || r;
                if ("function" != typeof a)
                  throw TypeError("option encode is invalid");
                if (!i.test(e)) throw TypeError("argument name is invalid");
                var s = a(t);
                if (s && !i.test(s)) throw TypeError("argument val is invalid");
                var l = e + "=" + s;
                if (null != o.maxAge) {
                  var u = o.maxAge - 0;
                  if (isNaN(u) || !isFinite(u))
                    throw TypeError("option maxAge is invalid");
                  l += "; Max-Age=" + Math.floor(u);
                }
                if (o.domain) {
                  if (!i.test(o.domain))
                    throw TypeError("option domain is invalid");
                  l += "; Domain=" + o.domain;
                }
                if (o.path) {
                  if (!i.test(o.path))
                    throw TypeError("option path is invalid");
                  l += "; Path=" + o.path;
                }
                if (o.expires) {
                  if ("function" != typeof o.expires.toUTCString)
                    throw TypeError("option expires is invalid");
                  l += "; Expires=" + o.expires.toUTCString();
                }
                if (
                  (o.httpOnly && (l += "; HttpOnly"),
                  o.secure && (l += "; Secure"),
                  o.sameSite)
                )
                  switch (
                    "string" == typeof o.sameSite
                      ? o.sameSite.toLowerCase()
                      : o.sameSite
                  ) {
                    case !0:
                    case "strict":
                      l += "; SameSite=Strict";
                      break;
                    case "lax":
                      l += "; SameSite=Lax";
                      break;
                    case "none":
                      l += "; SameSite=None";
                      break;
                    default:
                      throw TypeError("option sameSite is invalid");
                  }
                return l;
              });
            var e = decodeURIComponent,
              r = encodeURIComponent,
              n = /; */,
              i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
          })(),
            (e.exports = t);
        })();
      },
      6533: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function () {
              return b;
            },
          });
        let n = r(4985),
          i = r(740),
          o = r(687),
          a = i._(r(3210)),
          s = n._(r(1215)),
          l = n._(r(512)),
          u = r(4953),
          c = r(2756),
          f = r(7903);
        r(148);
        let p = r(9148),
          d = n._(r(1933)),
          _ = r(3038),
          m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          };
        function h(e, t, r, n, i, o, a) {
          let s = null == e ? void 0 : e.src;
          e &&
            e["data-loaded-src"] !== s &&
            ((e["data-loaded-src"] = s),
            ("decode" in e ? e.decode() : Promise.resolve())
              .catch(() => {})
              .then(() => {
                if (e.parentElement && e.isConnected) {
                  if (
                    ("empty" !== t && i(!0), null == r ? void 0 : r.current)
                  ) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                      writable: !1,
                      value: e,
                    });
                    let n = !1,
                      i = !1;
                    r.current({
                      ...t,
                      nativeEvent: t,
                      currentTarget: e,
                      target: e,
                      isDefaultPrevented: () => n,
                      isPropagationStopped: () => i,
                      persist: () => {},
                      preventDefault: () => {
                        (n = !0), t.preventDefault();
                      },
                      stopPropagation: () => {
                        (i = !0), t.stopPropagation();
                      },
                    });
                  }
                  (null == n ? void 0 : n.current) && n.current(e);
                }
              }));
        }
        function x(e) {
          return a.use ? { fetchPriority: e } : { fetchpriority: e };
        }
        globalThis.__NEXT_IMAGE_IMPORTED = !0;
        let g = (0, a.forwardRef)((e, t) => {
          let {
              src: r,
              srcSet: n,
              sizes: i,
              height: s,
              width: l,
              decoding: u,
              className: c,
              style: f,
              fetchPriority: p,
              placeholder: d,
              loading: m,
              unoptimized: g,
              fill: v,
              onLoadRef: b,
              onLoadingCompleteRef: y,
              setBlurComplete: E,
              setShowAltText: R,
              sizesInput: P,
              onLoad: j,
              onError: w,
              ...O
            } = e,
            A = (0, a.useCallback)(
              (e) => {
                e &&
                  (w && (e.src = e.src), e.complete && h(e, d, b, y, E, g, P));
              },
              [r, d, b, y, E, w, g, P],
            ),
            S = (0, _.useMergedRef)(t, A);
          return (0, o.jsx)("img", {
            ...O,
            ...x(p),
            loading: m,
            width: l,
            height: s,
            decoding: u,
            "data-nimg": v ? "fill" : "1",
            className: c,
            style: f,
            sizes: i,
            srcSet: n,
            src: r,
            ref: S,
            onLoad: (e) => {
              h(e.currentTarget, d, b, y, E, g, P);
            },
            onError: (e) => {
              R(!0), "empty" !== d && E(!0), w && w(e);
            },
          });
        });
        function v(e) {
          let { isAppRouter: t, imgAttributes: r } = e,
            n = {
              as: "image",
              imageSrcSet: r.srcSet,
              imageSizes: r.sizes,
              crossOrigin: r.crossOrigin,
              referrerPolicy: r.referrerPolicy,
              ...x(r.fetchPriority),
            };
          return t && s.default.preload
            ? (s.default.preload(r.src, n), null)
            : (0, o.jsx)(l.default, {
                children: (0, o.jsx)(
                  "link",
                  { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                  "__nimg-" + r.src + r.srcSet + r.sizes,
                ),
              });
        }
        let b = (0, a.forwardRef)((e, t) => {
          let r = (0, a.useContext)(p.RouterContext),
            n = (0, a.useContext)(f.ImageConfigContext),
            i = (0, a.useMemo)(() => {
              var e;
              let t = m || n || c.imageConfigDefault,
                r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
                i = t.deviceSizes.sort((e, t) => e - t),
                o =
                  null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
              return { ...t, allSizes: r, deviceSizes: i, qualities: o };
            }, [n]),
            { onLoad: s, onLoadingComplete: l } = e,
            _ = (0, a.useRef)(s);
          (0, a.useEffect)(() => {
            _.current = s;
          }, [s]);
          let h = (0, a.useRef)(l);
          (0, a.useEffect)(() => {
            h.current = l;
          }, [l]);
          let [x, b] = (0, a.useState)(!1),
            [y, E] = (0, a.useState)(!1),
            { props: R, meta: P } = (0, u.getImgProps)(e, {
              defaultLoader: d.default,
              imgConf: i,
              blurComplete: x,
              showAltText: y,
            });
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(g, {
                ...R,
                unoptimized: P.unoptimized,
                placeholder: P.placeholder,
                fill: P.fill,
                onLoadRef: _,
                onLoadingCompleteRef: h,
                setBlurComplete: b,
                setShowAltText: E,
                sizesInput: e.sizes,
                ref: t,
              }),
              P.priority
                ? (0, o.jsx)(v, { isAppRouter: !r, imgAttributes: R })
                : null,
            ],
          });
        });
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      6759: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "parseUrl", {
            enumerable: !0,
            get: function () {
              return o;
            },
          });
        let n = r(2785),
          i = r(3736);
        function o(e) {
          if (e.startsWith("/")) return (0, i.parseRelativeUrl)(e);
          let t = new URL(e);
          return {
            hash: t.hash,
            hostname: t.hostname,
            href: t.href,
            pathname: t.pathname,
            port: t.port,
            protocol: t.protocol,
            query: (0, n.searchParamsToUrlQuery)(t.searchParams),
            search: t.search,
          };
        }
      },
      6901: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => f,
            pages: () => c,
            routeModule: () => p,
            tree: () => u,
          });
        var n = r(5239),
          i = r(8088),
          o = r(8170),
          a = r.n(o),
          s = r(893),
          l = {};
        for (let e in s)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => s[e]);
        r.d(t, l);
        let u = {
            children: [
              "",
              {
                children: [
                  "__PAGE__",
                  {},
                  {
                    page: [
                      () => Promise.resolve().then(r.bind(r, 1204)),
                      "C:\\next\\Hakaton\\src\\app\\page.tsx",
                    ],
                    metadata: {
                      icon: [
                        async (e) =>
                          (
                            await Promise.resolve().then(r.bind(r, 440))
                          ).default(e),
                      ],
                      apple: [],
                      openGraph: [],
                      twitter: [],
                      manifest: void 0,
                    },
                  },
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
                metadata: {
                  icon: [
                    async (e) =>
                      (await Promise.resolve().then(r.bind(r, 440))).default(e),
                  ],
                  apple: [],
                  openGraph: [],
                  twitter: [],
                  manifest: void 0,
                },
              },
            ],
          }.children,
          c = ["C:\\next\\Hakaton\\src\\app\\page.tsx"],
          f = { require: r, loadChunk: () => Promise.resolve() },
          p = new n.AppPageRouteModule({
            definition: {
              kind: i.RouteKind.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      7066: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => n });
        let n = (0, r(2907).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"C:\\\\next\\\\Hakaton\\\\src\\\\pages-components\\\\home\\\\ui\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "C:\\next\\Hakaton\\src\\pages-components\\home\\ui\\index.tsx",
          "default",
        );
      },
      7092: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => u });
        var n = r(687),
          i = r(3210);
        let o = () => {
          let [e, t] = (0, i.useState)("desktop");
          return (
            (0, i.useEffect)(() => {
              let e = /iPad|iPhone|iPod/.test(navigator.userAgent),
                r = navigator.userAgent.includes("Android");
              e ? t("ios") : r ? t("android") : t("desktop");
            }, []),
            { deviceType: e }
          );
        };
        var a = r(7566),
          s = r.n(a);
        function l({ children: e }) {
          let { deviceType: t } = o();
          return (0, n.jsx)("div", {
            className: "content",
            children: (0, n.jsx)("div", {
              className: `${s().client__layout} ${s()[t]}`,
              children: e,
            }),
          });
        }
        function u({ children: e }) {
          return (0, n.jsx)(l, { children: e });
        }
      },
      7094: () => {},
      7111: () => {},
      7566: (e) => {
        e.exports = {
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
      7755: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return a;
            },
          });
        let n = r(3210),
          i = () => {},
          o = () => {};
        function a(e) {
          var t;
          let { headManager: r, reduceComponentsToState: a } = e;
          function s() {
            if (r && r.mountedInstances) {
              let t = n.Children.toArray(
                Array.from(r.mountedInstances).filter(Boolean),
              );
              r.updateHead(a(t, e));
            }
          }
          return (
            null == r || null == (t = r.mountedInstances) || t.add(e.children),
            s(),
            i(() => {
              var t;
              return (
                null == r ||
                  null == (t = r.mountedInstances) ||
                  t.add(e.children),
                () => {
                  var t;
                  null == r ||
                    null == (t = r.mountedInstances) ||
                    t.delete(e.children);
                }
              );
            }),
            i(
              () => (
                r && (r._pendingUpdate = s),
                () => {
                  r && (r._pendingUpdate = s);
                }
              ),
            ),
            o(
              () => (
                r &&
                  r._pendingUpdate &&
                  (r._pendingUpdate(), (r._pendingUpdate = null)),
                () => {
                  r &&
                    r._pendingUpdate &&
                    (r._pendingUpdate(), (r._pendingUpdate = null));
                }
              ),
            ),
            null
          );
        }
      },
      7903: (e, t, r) => {
        "use strict";
        e.exports = r(4041).vendored.contexts.ImageConfigContext;
      },
      8018: (e) => {
        e.exports = {
          ellipsis: "header_ellipsis__YttH9",
          "text-12": "header_text-12__l2q2o",
          "text-16": "header_text-16__BgIYB",
          "text-18": "header_text-18__vxQol",
          "text-20": "header_text-20___CRAZ",
          "text-22": "header_text-22__GxTQF",
          "text-24": "header_text-24__Vilh6",
          "text-28": "header_text-28__jL3Vd",
          "text-32": "header_text-32__UcacG",
          "text-40": "header_text-40__bKACW",
          "text-100": "header_text-100__dGAR2",
          "font-regular": "header_font-regular__ipWzq",
          "font-medium": "header_font-medium__64Y94",
          "font-bold": "header_font-bold__5okl7",
          uppercase: "header_uppercase__prIBl",
          "text-black": "header_text-black__wr7uS",
          "text-green": "header_text-green__yUNI9",
          "text-gray": "header_text-gray__YxYDx",
          "text-white": "header_text-white___qu0d",
          "text-center": "header_text-center__pp4ZD",
          "text-left": "header_text-left__99yfH",
          container: "header_container__TPRiB",
          avatar: "header_avatar__Sto9d",
          logo: "header_logo__Y5mBI",
        };
      },
      8034: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "getRouteMatcher", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let n = r(4827);
        function i(e) {
          let { re: t, groups: r } = e;
          return (e) => {
            let i = t.exec(e);
            if (!i) return !1;
            let o = (e) => {
                try {
                  return decodeURIComponent(e);
                } catch (e) {
                  throw Object.defineProperty(
                    new n.DecodeError("failed to decode param"),
                    "__NEXT_ERROR_CODE",
                    { value: "E528", enumerable: !1, configurable: !0 },
                  );
                }
              },
              a = {};
            for (let [e, t] of Object.entries(r)) {
              let r = i[t.pos];
              void 0 !== r &&
                (t.repeat
                  ? (a[e] = r.split("/").map((e) => o(e)))
                  : (a[e] = o(r)));
            }
            return a;
          };
        }
      },
      8205: (e) => {
        e.exports = {
          ellipsis: "form_ellipsis__XbFgU",
          "text-12": "form_text-12__sLsOu",
          "text-16": "form_text-16__QV65q",
          "text-18": "form_text-18__Fu3dh",
          "text-20": "form_text-20__BMuvW",
          "text-22": "form_text-22__0LVoC",
          "text-24": "form_text-24__aDfOP",
          "text-28": "form_text-28__TVBIf",
          "text-32": "form_text-32__LNoc9",
          "text-40": "form_text-40__bnldU",
          "text-100": "form_text-100__Zirgs",
          "font-regular": "form_font-regular__x_8fv",
          "font-medium": "form_font-medium__qnPO_",
          "font-bold": "form_font-bold__PFgkn",
          uppercase: "form_uppercase__lUDDp",
          "text-black": "form_text-black__3GDyV",
          "text-green": "form_text-green__92yxR",
          "text-gray": "form_text-gray__64He_",
          "text-white": "form_text-white__BayB8",
          "text-center": "form_text-center__vVmv6",
          "text-left": "form_text-left__OYstt",
          form: "form_form__CNAh1",
          input: "form_input___oIBv",
        };
      },
      8212: (e, t, r) => {
        "use strict";
        function n(e) {
          return function () {
            let { cookie: t } = e;
            if (!t) return {};
            let { parse: n } = r(6415);
            return n(Array.isArray(t) ? t.join("; ") : t);
          };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "getCookieParser", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
      },
      8304: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            DEFAULT_METADATA_ROUTE_EXTENSIONS: function () {
              return s;
            },
            STATIC_METADATA_IMAGES: function () {
              return a;
            },
            getExtensionRegexString: function () {
              return l;
            },
            isMetadataPage: function () {
              return f;
            },
            isMetadataRoute: function () {
              return p;
            },
            isMetadataRouteFile: function () {
              return u;
            },
            isStaticMetadataRoute: function () {
              return c;
            },
          });
        let n = r(2958),
          i = r(4722),
          o = r(554),
          a = {
            icon: {
              filename: "icon",
              extensions: ["ico", "jpg", "jpeg", "png", "svg"],
            },
            apple: {
              filename: "apple-icon",
              extensions: ["jpg", "jpeg", "png"],
            },
            favicon: { filename: "favicon", extensions: ["ico"] },
            openGraph: {
              filename: "opengraph-image",
              extensions: ["jpg", "jpeg", "png", "gif"],
            },
            twitter: {
              filename: "twitter-image",
              extensions: ["jpg", "jpeg", "png", "gif"],
            },
          },
          s = ["js", "jsx", "ts", "tsx"],
          l = (e, t) =>
            t && 0 !== t.length
              ? `(?:\\.(${e.join("|")})|(\\.(${t.join("|")})))`
              : `(\\.(?:${e.join("|")}))`;
        function u(e, t, r) {
          let i = (r ? "" : "?") + "$",
            o = `\\d?${r ? "" : "(-\\w{6})?"}`,
            s = [
              RegExp(`^[\\\\/]robots${l(t.concat("txt"), null)}${i}`),
              RegExp(
                `^[\\\\/]manifest${l(t.concat("webmanifest", "json"), null)}${i}`,
              ),
              RegExp("^[\\\\/]favicon\\.ico$"),
              RegExp(`[\\\\/]sitemap${l(["xml"], t)}${i}`),
              RegExp(
                `[\\\\/]${a.icon.filename}${o}${l(a.icon.extensions, t)}${i}`,
              ),
              RegExp(
                `[\\\\/]${a.apple.filename}${o}${l(a.apple.extensions, t)}${i}`,
              ),
              RegExp(
                `[\\\\/]${a.openGraph.filename}${o}${l(a.openGraph.extensions, t)}${i}`,
              ),
              RegExp(
                `[\\\\/]${a.twitter.filename}${o}${l(a.twitter.extensions, t)}${i}`,
              ),
            ],
            u = (0, n.normalizePathSep)(e);
          return s.some((e) => e.test(u));
        }
        function c(e) {
          let t = e.replace(/\/route$/, "");
          return (
            (0, o.isAppRouteRoute)(e) &&
            u(t, [], !0) &&
            "/robots.txt" !== t &&
            "/manifest.webmanifest" !== t &&
            !t.endsWith("/sitemap.xml")
          );
        }
        function f(e) {
          return !(0, o.isAppRouteRoute)(e) && u(e, [], !1);
        }
        function p(e) {
          let t = (0, i.normalizeAppPath)(e)
            .replace(/^\/?app\//, "")
            .replace("/[__metadata_id__]", "")
            .replace(/\/route$/, "");
          return (
            "/" !== t[0] && (t = "/" + t),
            (0, o.isAppRouteRoute)(e) && u(t, [], !1)
          );
        }
      },
      8785: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 7066));
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
      9148: (e, t, r) => {
        "use strict";
        e.exports = r(4041).vendored.contexts.RouterContext;
      },
      9294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      9513: (e, t, r) => {
        "use strict";
        e.exports = r(4041).vendored.contexts.HeadManagerContext;
      },
      9551: (e) => {
        "use strict";
        e.exports = require("url");
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
      9656: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => M });
        var n,
          i,
          o,
          a = r(687),
          s = r(3210),
          l = r(8018),
          u = r.n(l),
          c = r(1261),
          f = r.n(c);
        function p() {
          return (p = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        function d() {
          return (d = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        function _() {
          return (_ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        let m = [
          {
            title: "Карта",
            link: "#map",
            Icon: function (e) {
              return s.createElement(
                "svg",
                p(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill: "none",
                  },
                  e,
                ),
                n ||
                  (n = s.createElement("path", {
                    fill: "#2A343D",
                    d: "m6.999 3.906-4.312 1.47a1 1 0 0 0-.688.936v12a.99.99 0 0 0 1.313.938l3.687-1.344zm2 0v14l6 2v-14zm11.688.688-3.688 1.312v14l4.313-1.438a.99.99 0 0 0 .687-.937v-12a.992.992 0 0 0-1.312-.937",
                  })),
              );
            },
          },
          {
            title: "Контакты",
            link: "#contacts",
            Icon: function (e) {
              return s.createElement(
                "svg",
                d(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill: "none",
                  },
                  e,
                ),
                i ||
                  (i = s.createElement("path", {
                    fill: "#2A343D",
                    d: "M8.514 2.93a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m7.5 4a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm-1 4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm-9.938 2.344c-1.834.756-3.062 2.612-3.062 4.656v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2c0-1.996-1.235-3.806-3.062-4.594a1.02 1.02 0 0 0-.813 0c-.885.397-1.747.594-2.625.594-.875 0-1.74-.208-2.656-.625a.97.97 0 0 0-.782-.031m12.938 1.656a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2z",
                  })),
              );
            },
          },
          {
            title: "О нас",
            link: "#about",
            Icon: function (e) {
              return s.createElement(
                "svg",
                _(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill: "none",
                  },
                  e,
                ),
                o ||
                  (o = s.createElement("path", {
                    fill: "#2A343D",
                    d: "M12 1.953c-5.524 0-9.982 4.477-10 10-.02 5.515 4.48 10.02 10 10.031 5.517.011 10.009-4.555 10-10.03-.01-5.524-4.478-10-10-10m0 2a8 8 0 0 1 8 8c0 2.25-.938 4.278-2.433 5.732-.736-1.593-2.318-2.732-4.13-2.732h-2.875c-1.811 0-3.389 1.125-4.125 2.72-1.495-1.455-2.438-3.47-2.438-5.72a8 8 0 0 1 8-8m0 2a4 4 0 1 0-.001 8 4 4 0 0 0 0-8",
                  })),
              );
            },
          },
        ];
        var h = r(1732),
          x = r.n(h);
        let g = (e) => {
          let {
            typeButton: t = "yellow",
            children: r,
            className: n,
            size: i,
            isDisabled: o,
            onClick: s,
            isLoading: l,
            needSvgHover: u,
            ...c
          } = e;
          return (0, a.jsx)("button", {
            onClick: s,
            disabled: o,
            className: `${n} ${x().button} ${"0" === i ? x().size_0 : "12-16" === i ? x().size_12_16 : "16-24" === i ? x().size_16_24 : "12-24" === i ? x().size_12_24 : void 0} ${"black" === t ? x().black : "white" === t ? x().white : "ghost" === t ? x().ghost : "link" === t ? x().link : void 0} ${u ? x().svg : ""}`,
            ...c,
            children: r,
          });
        };
        function v() {
          return (0, a.jsx)("header", {
            className: `${u().header}`,
            children: (0, a.jsx)("div", {
              className: "wrapper",
              children: (0, a.jsxs)("div", {
                className: `flex-row space-between align-center ${u().container}`,
                children: [
                  (0, a.jsx)("div", {
                    className: `${u().logo} cursor`,
                    children: (0, a.jsx)(f(), {
                      src: "/shared/logo.png",
                      alt: "",
                      width: 50,
                      height: 50,
                    }),
                  }),
                  (0, a.jsx)("nav", {
                    className: u().nav,
                    children: (0, a.jsx)("ul", {
                      className: "flex-row gap-3 align-center",
                      children: m.map((e, t) =>
                        (0, a.jsx)(
                          "li",
                          {
                            children: (0, a.jsx)(g, {
                              typeButton: "white",
                              size: "12-16",
                              children: (0, a.jsxs)("div", {
                                className: "flex-row gap-2 align-center",
                                children: [
                                  (0, a.jsx)(e.Icon, {}),
                                  (0, a.jsx)("a", {
                                    href: e.link,
                                    className: "text-18",
                                    children: e.title,
                                  }),
                                ],
                              }),
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        var b = r(3517),
          y = r.n(b),
          E = r(8205),
          R = r.n(E),
          P = r(4180),
          j = r.n(P),
          w = r(4126),
          O = r.n(w);
        let A = (e) => {
          let {
            className: t = "",
            placeholder: r,
            onChange: n,
            value: i,
            type: o,
            name: s,
            disabled: l,
            RightIcon: u,
            rightIconClick: c,
            classNameRightIcon: f,
            label: p,
            classNameLabel: d,
            ..._
          } = e;
          return (0, a.jsxs)("div", {
            className: ` ${O().container} column`,
            children: [
              (0, a.jsxs)("label", {
                htmlFor: s,
                className: "flex-column gap-3",
                children: [
                  p &&
                    (0, a.jsx)("span", {
                      className: `text-14 text-black ${d} ${O().label}`,
                      children: p,
                    }),
                  (0, a.jsx)("input", {
                    ..._,
                    name: s ?? "",
                    type: o ?? "",
                    disabled: l,
                    placeholder: r,
                    value: i,
                    onChange: (e) => {
                      !l && n && n(e);
                    },
                    className: `${O().input} ${t}`,
                  }),
                ],
              }),
              u &&
                (0, a.jsx)("div", {
                  className: `${O().right_icon} ${f} pointer`,
                  onClick: c,
                  children: (0, a.jsx)(u, {}),
                }),
            ],
          });
        };
        function S(e) {
          let {
            className: t = "",
            rightIcon: r,
            rightIconClick: n,
            placholder: i,
            disabled: o,
            onChange: s,
            value: l,
            name: u,
            classNameRightIcon: c,
            label: f,
          } = e;
          return (0, a.jsx)(A, {
            className: `${j().input} ${t}`,
            rightIconClick: n,
            RightIcon: r,
            placeholder: i,
            disabled: o,
            onChange: s,
            value: l,
            type: "text",
            name: u,
            classNameRightIcon: c,
            label: f,
          });
        }
        let C = { email: "", number: "" },
          T = () => {
            let [e, t] = (0, s.useState)(C),
              [r, n] = (0, s.useState)("Ok"),
              i = async () => {
                let t = await fetch("/api/send-email", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ toEmail: e.email }),
                });
                n((await t.json()).message);
              };
            return {
              formData: e,
              handleChange: (e, r) => {
                t((t) => ({ ...t, [r]: e }));
              },
              handleSend: i,
              status: r,
            };
          };
        function N() {
          let { formData: e, handleChange: t, handleSend: r } = T();
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: `${R().container} flex-column gap-3`,
                children: [
                  (0, a.jsx)(S, {
                    name: "email",
                    placholder: "Почта",
                    value: e.email,
                    onChange: (e) => t(e.target.value, "email"),
                    className: `${R().input}`,
                    label: "Почта",
                  }),
                  (0, a.jsx)(S, {
                    name: "phone",
                    placholder: "Номер телефона",
                    value: e.number,
                    onChange: (e) => t(e.target.value, "number"),
                    className: `${R().input}`,
                    label: "Номер телефона",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                children: (0, a.jsx)(g, {
                  typeButton: "black",
                  size: "12-24",
                  onClick: r,
                  children: (0, a.jsx)("span", {
                    className: "text-white text-16",
                    children: "Отправить",
                  }),
                }),
              }),
            ],
          });
        }
        function k() {
          return (0, a.jsx)("section", {
            className: y().section,
            id: "contacts",
            children: (0, a.jsx)("div", {
              className: "wrapper",
              children: (0, a.jsxs)("div", {
                className: `${y().container} flex-column gap-5`,
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex-column gap-1 flex-start",
                    children: [
                      (0, a.jsx)("h2", {
                        className: "text-24 text-white font-bold uppercase",
                        children: "Контактная информация",
                      }),
                      (0, a.jsx)("h3", {
                        className: "text-12 text-gray",
                        children:
                          "Мы свяжемся с вами по почте, указанной в форме",
                      }),
                    ],
                  }),
                  (0, a.jsx)(N, {}),
                ],
              }),
            }),
          });
        }
        function M() {
          let [e, t] = (0, s.useState)(null);
          return (0, a.jsxs)("div", {
            className: "row gap-8",
            children: [(0, a.jsx)(v, {}), (0, a.jsx)(k, {})],
          });
        }
      },
      9786: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 8816));
      },
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [447, 825], () => r(6901));
  module.exports = n;
})();
