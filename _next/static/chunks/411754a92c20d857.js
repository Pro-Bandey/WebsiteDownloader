(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  33525,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  98183,
  (e, t, r) => {
    "use strict";
    function n(e) {
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
    function a(e) {
      return "string" == typeof e
        ? e
        : ("number" == typeof e && !isNaN(e)) || "boolean" == typeof e
          ? String(e)
          : "";
    }
    function o(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, a(e));
        else t.set(r, a(n));
      return t;
    }
    function s(e) {
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
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      (function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        assign: function () {
          return s;
        },
        searchParamsToUrlQuery: function () {
          return n;
        },
        urlQueryToSearchParams: function () {
          return o;
        },
      }));
  },
  95057,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      (function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        formatUrl: function () {
          return o;
        },
        formatWithValidation: function () {
          return l;
        },
        urlObjectKeys: function () {
          return s;
        },
      }));
    let n = e.r(90809)._(e.r(98183)),
      a = /https?|ftp|gopher|file/;
    function o(e) {
      let { auth: t, hostname: r } = e,
        o = e.protocol || "",
        s = e.pathname || "",
        l = e.hash || "",
        i = e.query || "",
        c = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : r &&
            ((c = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
            e.port && (c += ":" + e.port)),
        i && "object" == typeof i && (i = String(n.urlQueryToSearchParams(i))));
      let u = e.search || (i && "?" + i) || "";
      return (
        o && !o.endsWith(":") && (o += ":"),
        e.slashes || ((!o || a.test(o)) && !1 !== c)
          ? ((c = "//" + (c || "")), s && "/" !== s[0] && (s = "/" + s))
          : c || (c = ""),
        l && "#" !== l[0] && (l = "#" + l),
        u && "?" !== u[0] && (u = "?" + u),
        "" +
          o +
          c +
          (s = s.replace(/[?#]/g, encodeURIComponent)) +
          (u = u.replace("#", "%23")) +
          l
      );
    }
    let s = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function l(e) {
      return o(e);
    }
  },
  18581,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(71645);
    function a(e, t) {
      let r = (0, n.useRef)(null),
        a = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = a.current;
            t && ((a.current = null), t());
          } else (e && (r.current = o(e, n)), t && (a.current = o(t, n)));
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
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18967,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      (function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        DecodeError: function () {
          return m;
        },
        MiddlewareNotFoundError: function () {
          return y;
        },
        MissingStaticPage: function () {
          return b;
        },
        NormalizeError: function () {
          return p;
        },
        PageNotFoundError: function () {
          return g;
        },
        SP: function () {
          return h;
        },
        ST: function () {
          return x;
        },
        WEB_VITALS: function () {
          return n;
        },
        execOnce: function () {
          return a;
        },
        getDisplayName: function () {
          return c;
        },
        getLocationOrigin: function () {
          return l;
        },
        getURL: function () {
          return i;
        },
        isAbsoluteUrl: function () {
          return s;
        },
        isResSent: function () {
          return u;
        },
        loadGetInitialProps: function () {
          return f;
        },
        normalizeRepeatedSlashes: function () {
          return d;
        },
        stringifyError: function () {
          return v;
        },
      }));
    let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function a(e) {
      let t,
        r = !1;
      return function () {
        for (var n = arguments.length, a = Array(n), o = 0; o < n; o++)
          a[o] = arguments[o];
        return (r || ((r = !0), (t = e(...a))), t);
      };
    }
    let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      s = (e) => o.test(e);
    function l() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return e + "//" + t + (r ? ":" + r : "");
    }
    function i() {
      let { href: e } = window.location,
        t = l();
      return e.substring(t.length);
    }
    function c(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function u(e) {
      return e.finished || e.headersSent;
    }
    function d(e) {
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
              c(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.',
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return n;
    }
    let h = "undefined" != typeof performance,
      x =
        h &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class m extends Error {}
    class p extends Error {}
    class g extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = "Cannot find module for page: " + e));
      }
    }
    class b extends Error {
      constructor(e, t) {
        (super(),
          (this.message =
            "Failed to load static file for page: " + e + " " + t));
      }
    }
    class y extends Error {
      constructor() {
        (super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module"));
      }
    }
    function v(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(18967),
      a = e.r(52817);
    function o(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, a.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  84508,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  22016,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      (function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        default: function () {
          return p;
        },
        useLinkStatus: function () {
          return b;
        },
      }));
    let n = e.r(90809),
      a = e.r(43476),
      o = n._(e.r(71645)),
      s = e.r(95057),
      l = e.r(8372),
      i = e.r(18581),
      c = e.r(18967),
      u = e.r(5550);
    e.r(33525);
    let d = e.r(91949),
      f = e.r(73668),
      h = e.r(99781);
    e.r(84508);
    let x = e.r(65165);
    function m(e) {
      return "string" == typeof e ? e : (0, s.formatUrl)(e);
    }
    function p(e) {
      var t;
      let r,
        n,
        s,
        [p, b] = (0, o.useOptimistic)(d.IDLE_LINK_STATUS),
        y = (0, o.useRef)(null),
        {
          href: v,
          as: j,
          children: N,
          prefetch: k = null,
          passHref: w,
          replace: P,
          shallow: C,
          scroll: _,
          onClick: A,
          onMouseEnter: O,
          onTouchStart: D,
          legacyBehavior: M = !1,
          onNavigate: E,
          ref: S,
          unstable_dynamicOnHover: T,
          ...R
        } = e;
      ((r = N),
        M &&
          ("string" == typeof r || "number" == typeof r) &&
          (r = (0, a.jsx)("a", { children: r })));
      let L = o.default.useContext(l.AppRouterContext),
        B = !1 !== k,
        z =
          !1 !== k
            ? null === (t = k) || "auto" === t
              ? x.FetchStrategy.PPR
              : x.FetchStrategy.Full
            : x.FetchStrategy.PPR,
        { href: U, as: W } = o.default.useMemo(() => {
          let e = m(v);
          return { href: e, as: j ? m(j) : e };
        }, [v, j]);
      M && (n = o.default.Children.only(r));
      let F = M ? n && "object" == typeof n && n.ref : S,
        I = o.default.useCallback(
          (e) => (
            null !== L &&
              (y.current = (0, d.mountLinkInstance)(e, U, L, z, B, b)),
            () => {
              (y.current &&
                ((0, d.unmountLinkForCurrentNavigation)(y.current),
                (y.current = null)),
                (0, d.unmountPrefetchableInstance)(e));
            }
          ),
          [B, U, L, z, b],
        ),
        H = {
          ref: (0, i.useMergedRef)(I, F),
          onClick(e) {
            (M || "function" != typeof A || A(e),
              M &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              L &&
                (e.defaultPrevented ||
                  (function (e, t, r, n, a, s, l) {
                    let { nodeName: i } = e.currentTarget;
                    if (
                      !(
                        ("A" === i.toUpperCase() &&
                          (function (e) {
                            let t = e.currentTarget.getAttribute("target");
                            return (
                              (t && "_self" !== t) ||
                              e.metaKey ||
                              e.ctrlKey ||
                              e.shiftKey ||
                              e.altKey ||
                              (e.nativeEvent && 2 === e.nativeEvent.which)
                            );
                          })(e)) ||
                        e.currentTarget.hasAttribute("download")
                      )
                    ) {
                      if (!(0, f.isLocalURL)(t))
                        return void (
                          a && (e.preventDefault(), location.replace(t))
                        );
                      if ((e.preventDefault(), l)) {
                        let e = !1;
                        if (
                          (l({
                            preventDefault: () => {
                              e = !0;
                            },
                          }),
                          e)
                        )
                          return;
                      }
                      o.default.startTransition(() => {
                        (0, h.dispatchNavigateAction)(
                          r || t,
                          a ? "replace" : "push",
                          null == s || s,
                          n.current,
                        );
                      });
                    }
                  })(e, U, W, y, P, _, E)));
          },
          onMouseEnter(e) {
            (M || "function" != typeof O || O(e),
              M &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              L && B && (0, d.onNavigationIntent)(e.currentTarget, !0 === T));
          },
          onTouchStart: function (e) {
            (M || "function" != typeof D || D(e),
              M &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              L && B && (0, d.onNavigationIntent)(e.currentTarget, !0 === T));
          },
        };
      return (
        (0, c.isAbsoluteUrl)(W)
          ? (H.href = W)
          : (M && !w && ("a" !== n.type || "href" in n.props)) ||
            (H.href = (0, u.addBasePath)(W)),
        (s = M
          ? o.default.cloneElement(n, H)
          : (0, a.jsx)("a", { ...R, ...H, children: r })),
        (0, a.jsx)(g.Provider, { value: p, children: s })
      );
    }
    let g = (0, o.createContext)(d.IDLE_LINK_STATUS),
      b = () => (0, o.useContext)(g);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18566,
  (e, t, r) => {
    t.exports = e.r(76562);
  },
  17942,
  (e) => {
    "use strict";
    e.s(["default", () => a]);
    var t = e.i(43476),
      r = e.i(22016),
      n = e.i(18566);
    function a() {
      let e = (0, n.usePathname)();
      return (0, t.jsx)("header", {
        className:
          "bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700",
        children: (0, t.jsxs)("div", {
          className: "container mx-auto px-4 py-4",
          children: [
            (0, t.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, t.jsx)("div", {
                  className: "flex items-center space-x-3",
                  children: (0, t.jsxs)(r.default, {
                    href: "/",
                    className:
                      "flex items-center space-x-3 hover:opacity-80 transition-opacity",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center",
                        children: (0, t.jsx)("svg", {
                          className: "w-6 h-6 text-white",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                          }),
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("h1", {
                            className:
                              "text-xl mozilla-headline-bold text-gray-900 dark:text-white",
                            children: "WebsiteDownloader",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "text-xs text-gray-500 dark:text-gray-400",
                            children:
                              "Full Website Downloader & Website Scraper",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("nav", {
                  className: "hidden md:flex items-center space-x-8",
                  children: [
                    (0, t.jsx)(r.default, {
                      href: "/",
                      className:
                        "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ".concat(
                          "/" === e
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-700 dark:text-gray-300",
                        ),
                      children: "Home",
                    }),
                    (0, t.jsx)(r.default, {
                      href: "/blog",
                      className:
                        "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ".concat(
                          (null == e ? void 0 : e.startsWith("/blog"))
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-700 dark:text-gray-300",
                        ),
                      children: "Blog",
                    }),
                  ],
                }),
                (0, t.jsx)("button", {
                  className:
                    "md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
                  children: (0, t.jsx)("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0, t.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 6h16M4 12h16M4 18h16",
                    }),
                  }),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className:
                "md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-slate-700",
              children: (0, t.jsxs)("nav", {
                className: "flex flex-col space-y-3",
                children: [
                  (0, t.jsx)(r.default, {
                    href: "/",
                    className:
                      "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ".concat(
                        "/" === e
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300",
                      ),
                    children: "Home",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "/blog",
                    className:
                      "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ".concat(
                        (null == e ? void 0 : e.startsWith("/blog"))
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300",
                      ),
                    children: "Blog",
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
  },
  1805,
  (e) => {
    "use strict";
    e.s(["default", () => r]);
    var t = e.i(43476);
    function r() {
      let e = new Date().getFullYear();
      return (0, t.jsx)("footer", {
        className:
          "bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 mt-16",
        children: (0, t.jsxs)("div", {
          className: "container mx-auto px-4 py-12",
          children: [
            (0, t.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-4 gap-8",
              children: [
                (0, t.jsxs)("div", {
                  className: "col-span-1 md:col-span-2",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex items-center space-x-3 mb-4",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center",
                          children: (0, t.jsx)("svg", {
                            className: "w-5 h-5 text-white",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                            }),
                          }),
                        }),
                        (0, t.jsx)("span", {
                          className:
                            "text-lg mozilla-headline-bold text-gray-900 dark:text-white",
                          children: "WebsiteDownloader",
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "mozilla-headline-regular text-gray-600 dark:text-gray-400 mb-4 max-w-md",
                      children:
                        "Professional full website downloader and website scraper tool. Download complete websites with advanced scraping technology and embedded browser support.",
                    }),
                    (0, t.jsxs)("p", {
                      className:
                        "text-sm text-gray-500 dark:text-gray-400 mb-4",
                      children: [
                        "Website Downloader - by",
                        " ",
                        (0, t.jsx)("a", {
                          href: "https://mramzanch.blogspot.com/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "text-blue-600 dark:text-blue-400 hover:underline font-medium",
                          children: "M Ramzan Ch",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex space-x-4",
                      children: [
                        (0, t.jsx)("a", {
                          href: "https://www.x.com/rm4814691/",
                          className:
                            "text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                          children: (0, t.jsx)("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                              d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                            }),
                          }),
                        }),
                        (0, t.jsx)("a", {
                          href: "https://web.facebook.com/mramzanch01/",
                          className:
                            "text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                          children: (0, t.jsx)("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                              d: "M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z",
                            }),
                          }),
                        }),
                        (0, t.jsx)("a", {
                          href: "https://www.linkedin.com/in/mramzanch/",
                          className:
                            "text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                          children: (0, t.jsx)("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                              d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("h3", {
                      className:
                        "text-sm mozilla-headline-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4",
                      children: "Features",
                    }),
                    (0, t.jsxs)("ul", {
                      className: "space-y-3",
                      children: [
                        (0, t.jsx)("li", {
                          className: "text-gray-600 dark:text-gray-400",
                          children: "Full Website Download",
                        }),
                        (0, t.jsx)("li", {
                          className: "text-gray-600 dark:text-gray-400",
                          children: "Website Scraper",
                        }),
                        (0, t.jsx)("li", {
                          className: "text-gray-600 dark:text-gray-400",
                          children: "Single Page Download",
                        }),
                        (0, t.jsx)("li", {
                          className: "text-gray-600 dark:text-gray-400",
                          children: "Complete Website Backup",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("h3", {
                      className:
                        "text-sm mozilla-headline-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4",
                      children: "About",
                    }),
                    (0, t.jsxs)("ul", {
                      className: "space-y-3",
                      children: [
                        (0, t.jsx)("li", {
                          className: "text-gray-600 dark:text-gray-400",
                          children: "Professional Tool",
                        }),
                        (0, t.jsx)("li", {
                          className: "text-gray-600 dark:text-gray-400",
                          children: "Advanced Technology",
                        }),
                        (0, t.jsx)("li", {
                          className: "text-gray-600 dark:text-gray-400",
                          children: "Fast Downloads",
                        }),
                        (0, t.jsx)("li", {
                          className: "text-gray-600 dark:text-gray-400",
                          children: "Reliable Service",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className:
                "border-t border-gray-200 dark:border-slate-700 mt-8 pt-8",
              children: (0, t.jsxs)("div", {
                className:
                  "flex flex-col md:flex-row justify-between items-center",
                children: [
                  (0, t.jsxs)("div", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                      "© ",
                      e,
                      " WebsiteDownloader. All rights reserved.",
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "mt-4 md:mt-0",
                    children: (0, t.jsxs)("p", {
                      className: "text-sm text-gray-600 dark:text-gray-400",
                      children: [
                        "Powered by",
                        " ",
                        (0, t.jsx)("a", {
                          href: "https://microresearch-corporation.github.io/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "text-blue-600 dark:text-blue-400 hover:underline font-medium",
                          children: "MicroResearch Corporation",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
  },
]);
