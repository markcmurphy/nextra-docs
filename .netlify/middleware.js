var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var require_detect_domain_locale = __commonJS({
  "node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.detectDomainLocale = detectDomainLocale;
    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      let domainItem;
      if (domainItems) {
        if (detectedLocale) {
          detectedLocale = detectedLocale.toLowerCase();
        }
        for (const item of domainItems) {
          var ref, ref1;
          const domainHostname = (ref = item.domain) == null ? void 0 : ref.split(":")[0].toLowerCase();
          if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((ref1 = item.locales) == null ? void 0 : ref1.some((locale) => locale.toLowerCase() === detectedLocale))) {
            domainItem = item;
            break;
          }
        }
      }
      return domainItem;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js
var require_remove_trailing_slash = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeTrailingSlash = removeTrailingSlash;
    function removeTrailingSlash(route) {
      return route.replace(/\/$/, "") || "/";
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/parse-path.js
var require_parse_path = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/parse-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parsePath = parsePath;
    function parsePath(path) {
      const hashIndex = path.indexOf("#");
      const queryIndex = path.indexOf("?");
      const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
      if (hasQuery || hashIndex > -1) {
        return {
          pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
          query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
          hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
      }
      return {
        pathname: path,
        query: "",
        hash: ""
      };
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js
var require_add_path_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addPathPrefix = addPathPrefix;
    var _parsePath = require_parse_path();
    function addPathPrefix(path, prefix) {
      if (!path.startsWith("/") || !prefix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsePath).parsePath(path);
      return `${prefix}${pathname}${query}${hash}`;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js
var require_add_path_suffix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addPathSuffix = addPathSuffix;
    var _parsePath = require_parse_path();
    function addPathSuffix(path, suffix) {
      if (!path.startsWith("/") || !suffix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsePath).parsePath(path);
      return `${pathname}${suffix}${query}${hash}`;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js
var require_path_has_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.pathHasPrefix = pathHasPrefix;
    var _parsePath = require_parse_path();
    function pathHasPrefix(path, prefix) {
      if (typeof path !== "string") {
        return false;
      }
      const { pathname } = (0, _parsePath).parsePath(path);
      return pathname === prefix || pathname.startsWith(prefix + "/");
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-locale.js
var require_add_locale = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-locale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addLocale = addLocale;
    var _addPathPrefix = require_add_path_prefix();
    var _pathHasPrefix = require_path_has_prefix();
    function addLocale(path, locale, defaultLocale, ignorePrefix) {
      if (locale && locale !== defaultLocale && (ignorePrefix || !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), `/${locale.toLowerCase()}`) && !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), "/api"))) {
        return (0, _addPathPrefix).addPathPrefix(path, `/${locale}`);
      }
      return path;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js
var require_format_next_pathname_info = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatNextPathnameInfo = formatNextPathnameInfo;
    var _removeTrailingSlash = require_remove_trailing_slash();
    var _addPathPrefix = require_add_path_prefix();
    var _addPathSuffix = require_add_path_suffix();
    var _addLocale = require_add_locale();
    function formatNextPathnameInfo(info) {
      let pathname = (0, _addLocale).addLocale(info.pathname, info.locale, info.buildId ? void 0 : info.defaultLocale, info.ignorePrefix);
      if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
      }
      if (info.buildId) {
        pathname = (0, _addPathSuffix).addPathSuffix((0, _addPathPrefix).addPathPrefix(pathname, `/_next/data/${info.buildId}`), info.pathname === "/" ? "index.json" : ".json");
      }
      pathname = (0, _addPathPrefix).addPathPrefix(pathname, info.basePath);
      return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addPathSuffix).addPathSuffix(pathname, "/") : pathname : (0, _removeTrailingSlash).removeTrailingSlash(pathname);
    }
  }
});

// node_modules/next/dist/shared/lib/get-hostname.js
var require_get_hostname = __commonJS({
  "node_modules/next/dist/shared/lib/get-hostname.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getHostname = getHostname;
    function getHostname(parsed, headers) {
      var ref;
      return (ref = !Array.isArray(headers == null ? void 0 : headers.host) && (headers == null ? void 0 : headers.host) || parsed.hostname) == null ? void 0 : ref.split(":")[0].toLowerCase();
    }
  }
});

// node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
var require_normalize_locale_path = __commonJS({
  "node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizeLocalePath = normalizeLocalePath;
    function normalizeLocalePath(pathname, locales) {
      let detectedLocale;
      const pathnameParts = pathname.split("/");
      (locales || []).some((locale) => {
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
          detectedLocale = locale;
          pathnameParts.splice(1, 1);
          pathname = pathnameParts.join("/") || "/";
          return true;
        }
        return false;
      });
      return {
        pathname,
        detectedLocale
      };
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js
var require_remove_path_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removePathPrefix = removePathPrefix;
    var _pathHasPrefix = require_path_has_prefix();
    function removePathPrefix(path, prefix) {
      if ((0, _pathHasPrefix).pathHasPrefix(path, prefix)) {
        const withoutPrefix = path.slice(prefix.length);
        return withoutPrefix.startsWith("/") ? withoutPrefix : `/${withoutPrefix}`;
      }
      return path;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js
var require_get_next_pathname_info = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getNextPathnameInfo = getNextPathnameInfo;
    var _normalizeLocalePath = require_normalize_locale_path();
    var _removePathPrefix = require_remove_path_prefix();
    var _pathHasPrefix = require_path_has_prefix();
    function getNextPathnameInfo(pathname, options) {
      var _nextConfig;
      const { basePath, i18n, trailingSlash } = (_nextConfig = options.nextConfig) != null ? _nextConfig : {};
      const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
      };
      if (basePath && (0, _pathHasPrefix).pathHasPrefix(info.pathname, basePath)) {
        info.pathname = (0, _removePathPrefix).removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
      }
      if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? `/${paths.slice(1).join("/")}` : "/";
        info.buildId = buildId;
      }
      if (i18n) {
        const pathLocale = (0, _normalizeLocalePath).normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = pathLocale == null ? void 0 : pathLocale.detectedLocale;
        info.pathname = (pathLocale == null ? void 0 : pathLocale.pathname) || info.pathname;
      }
      return info;
    }
  }
});

// node_modules/next/dist/server/web/next-url.js
var require_next_url = __commonJS({
  "node_modules/next/dist/server/web/next-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _detectDomainLocale = require_detect_domain_locale();
    var _formatNextPathnameInfo = require_format_next_pathname_info();
    var _getHostname = require_get_hostname();
    var _getNextPathnameInfo = require_get_next_pathname_info();
    var REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;
    function parseURL(url, base) {
      return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
    }
    var Internal = Symbol("NextURLInternal");
    var NextURL = class {
      constructor(input, baseOrOpts, opts) {
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
          base = baseOrOpts;
          options = opts || {};
        } else {
          options = opts || baseOrOpts || {};
        }
        this[Internal] = {
          url: parseURL(input, base ?? options.base),
          options,
          basePath: ""
        };
        this.analyzeUrl();
      }
      analyzeUrl() {
        var ref, ref1, ref2, ref3, ref4;
        const pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(this[Internal].url.pathname, {
          nextConfig: this[Internal].options.nextConfig,
          parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE
        });
        this[Internal].domainLocale = (0, _detectDomainLocale).detectDomainLocale((ref = this[Internal].options.nextConfig) == null ? void 0 : (ref1 = ref.i18n) == null ? void 0 : ref1.domains, (0, _getHostname).getHostname(this[Internal].url, this[Internal].options.headers));
        const defaultLocale = ((ref2 = this[Internal].domainLocale) == null ? void 0 : ref2.defaultLocale) || ((ref3 = this[Internal].options.nextConfig) == null ? void 0 : (ref4 = ref3.i18n) == null ? void 0 : ref4.defaultLocale);
        this[Internal].url.pathname = pathnameInfo.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = pathnameInfo.basePath ?? "";
        this[Internal].buildId = pathnameInfo.buildId;
        this[Internal].locale = pathnameInfo.locale ?? defaultLocale;
        this[Internal].trailingSlash = pathnameInfo.trailingSlash;
      }
      formatPathname() {
        return (0, _formatNextPathnameInfo).formatNextPathnameInfo({
          basePath: this[Internal].basePath,
          buildId: this[Internal].buildId,
          defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : void 0,
          locale: this[Internal].locale,
          pathname: this[Internal].url.pathname,
          trailingSlash: this[Internal].trailingSlash
        });
      }
      formatSearch() {
        return this[Internal].url.search;
      }
      get buildId() {
        return this[Internal].buildId;
      }
      set buildId(buildId) {
        this[Internal].buildId = buildId;
      }
      get locale() {
        return this[Internal].locale ?? "";
      }
      set locale(locale) {
        var ref, ref5;
        if (!this[Internal].locale || !((ref = this[Internal].options.nextConfig) == null ? void 0 : (ref5 = ref.i18n) == null ? void 0 : ref5.locales.includes(locale))) {
          throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
      }
      get defaultLocale() {
        return this[Internal].defaultLocale;
      }
      get domainLocale() {
        return this[Internal].domainLocale;
      }
      get searchParams() {
        return this[Internal].url.searchParams;
      }
      get host() {
        return this[Internal].url.host;
      }
      set host(value) {
        this[Internal].url.host = value;
      }
      get hostname() {
        return this[Internal].url.hostname;
      }
      set hostname(value) {
        this[Internal].url.hostname = value;
      }
      get port() {
        return this[Internal].url.port;
      }
      set port(value) {
        this[Internal].url.port = value;
      }
      get protocol() {
        return this[Internal].url.protocol;
      }
      set protocol(value) {
        this[Internal].url.protocol = value;
      }
      get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
      }
      set href(url) {
        this[Internal].url = parseURL(url);
        this.analyzeUrl();
      }
      get origin() {
        return this[Internal].url.origin;
      }
      get pathname() {
        return this[Internal].url.pathname;
      }
      set pathname(value) {
        this[Internal].url.pathname = value;
      }
      get hash() {
        return this[Internal].url.hash;
      }
      set hash(value) {
        this[Internal].url.hash = value;
      }
      get search() {
        return this[Internal].url.search;
      }
      set search(value) {
        this[Internal].url.search = value;
      }
      get password() {
        return this[Internal].url.password;
      }
      set password(value) {
        this[Internal].url.password = value;
      }
      get username() {
        return this[Internal].url.username;
      }
      set username(value) {
        this[Internal].url.username = value;
      }
      get basePath() {
        return this[Internal].basePath;
      }
      set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
      }
      toString() {
        return this.href;
      }
      toJSON() {
        return this.href;
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          href: this.href,
          origin: this.origin,
          protocol: this.protocol,
          username: this.username,
          password: this.password,
          host: this.host,
          hostname: this.hostname,
          port: this.port,
          pathname: this.pathname,
          search: this.search,
          searchParams: this.searchParams,
          hash: this.hash
        };
      }
      clone() {
        return new NextURL(String(this), this[Internal].options);
      }
    };
    exports.NextURL = NextURL;
  }
});

// node_modules/next/dist/server/web/utils.js
var require_utils = __commonJS({
  "node_modules/next/dist/server/web/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fromNodeHeaders = fromNodeHeaders;
    exports.splitCookiesString = splitCookiesString;
    exports.toNodeHeaders = toNodeHeaders;
    exports.validateURL = validateURL;
    function fromNodeHeaders(object) {
      const headers = new Headers();
      for (let [key, value] of Object.entries(object)) {
        const values = Array.isArray(value) ? value : [
          value
        ];
        for (let v of values) {
          if (v !== void 0) {
            headers.append(key, v);
          }
        }
      }
      return headers;
    }
    function splitCookiesString(cookiesString) {
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    function toNodeHeaders(headers) {
      const result = {};
      if (headers) {
        for (const [key, value] of headers.entries()) {
          result[key] = value;
          if (key.toLowerCase() === "set-cookie") {
            result[key] = splitCookiesString(value);
          }
        }
      }
      return result;
    }
    function validateURL(url) {
      try {
        return String(new URL(String(url)));
      } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
          cause: error
        });
      }
    }
  }
});

// node_modules/next/dist/server/web/error.js
var require_error = __commonJS({
  "node_modules/next/dist/server/web/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PageSignatureError = class extends Error {
      constructor({ page }) {
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
      }
    };
    exports.PageSignatureError = PageSignatureError;
    var RemovedPageError = class extends Error {
      constructor() {
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
      }
    };
    exports.RemovedPageError = RemovedPageError;
    var RemovedUAError = class extends Error {
      constructor() {
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
      }
    };
    exports.RemovedUAError = RemovedUAError;
  }
});

// node_modules/next/dist/server/web/spec-extension/cookies/serialize.js
var require_serialize = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/cookies/serialize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.serialize = serialize;
    exports.parseCookieString = parseCookieString;
    exports.parseSetCookieString = parseSetCookieString;
    var SAME_SITE = [
      "strict",
      "lax",
      "none"
    ];
    function parseSameSite(string) {
      string = string.toLowerCase();
      return SAME_SITE.includes(string) ? string : void 0;
    }
    function compact(t) {
      const newT = {};
      for (const key in t) {
        if (t[key]) {
          newT[key] = t[key];
        }
      }
      return newT;
    }
    function serialize(c) {
      const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && c.expires && `Expires=${c.expires.toUTCString()}`,
        "maxAge" in c && c.maxAge && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`
      ].filter(Boolean);
      return `${c.name}=${encodeURIComponent(c.value ?? "")}; ${attrs.join("; ")}`;
    }
    function parseCookieString(cookie) {
      const map = /* @__PURE__ */ new Map();
      for (const pair of cookie.split(/; */)) {
        if (!pair)
          continue;
        const [key, value] = pair.split("=", 2);
        map.set(key, decodeURIComponent(value ?? "true"));
      }
      return map;
    }
    function parseSetCookieString(setCookie) {
      if (!setCookie) {
        return void 0;
      }
      const [[name, value], ...attributes] = parseCookieString(setCookie);
      const { domain, expires, httponly, maxage, path, samesite, secure } = Object.fromEntries(attributes.map(([key, v]) => [
        key.toLowerCase(),
        v
      ]));
      const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
          expires: new Date(expires)
        },
        ...httponly && {
          httpOnly: true
        },
        ...typeof maxage === "string" && {
          maxAge: Number(maxage)
        },
        path,
        ...samesite && {
          sameSite: parseSameSite(samesite)
        },
        ...secure && {
          secure: true
        }
      };
      return compact(cookie);
    }
  }
});

// node_modules/next/dist/server/web/spec-extension/cookies/request-cookies.js
var require_request_cookies = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/cookies/request-cookies.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _serialize = require_serialize();
    var RequestCookies = class {
      _parsed = /* @__PURE__ */ new Map();
      constructor(requestHeaders) {
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
          const parsed = (0, _serialize).parseCookieString(header);
          for (const [name, value] of parsed) {
            this._parsed.set(name, {
              name,
              value
            });
          }
        }
      }
      [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
      }
      get size() {
        return this._parsed.size;
      }
      get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
      }
      getAll(...args) {
        var ref;
        const all = Array.from(this._parsed);
        if (!args.length) {
          return all.map(([_, value]) => value);
        }
        const name = typeof args[0] === "string" ? args[0] : (ref = args[0]) == null ? void 0 : ref.name;
        return all.filter(([n]) => n === name).map(([_, value]) => value);
      }
      has(name) {
        return this._parsed.has(name);
      }
      set(...args) {
        const [name, value] = args.length === 1 ? [
          args[0].name,
          args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
          name,
          value
        });
        this._headers.set("cookie", Array.from(map).map(([_, v]) => (0, _serialize).serialize(v)).join("; "));
        return this;
      }
      delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value]) => (0, _serialize).serialize(value)).join("; "));
        return result;
      }
      clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
    };
    exports.RequestCookies = RequestCookies;
  }
});

// node_modules/next/dist/server/web/spec-extension/cookies/response-cookies.js
var require_response_cookies = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/cookies/response-cookies.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _serialize = require_serialize();
    function replace(bag, headers) {
      headers.delete("set-cookie");
      for (const [, value] of bag) {
        const serialized = (0, _serialize).serialize(value);
        headers.append("set-cookie", serialized);
      }
    }
    function normalizeCookie(cookie = {
      name: "",
      value: ""
    }) {
      if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
      }
      if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
      }
      return cookie;
    }
    var ResponseCookies = class {
      _parsed = /* @__PURE__ */ new Map();
      constructor(responseHeaders) {
        this._headers = responseHeaders;
        const headers = this._headers.getAll("set-cookie");
        for (const header of headers) {
          const parsed = (0, _serialize).parseSetCookieString(header);
          if (parsed) {
            this._parsed.set(parsed.name, parsed);
          }
        }
      }
      get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
      }
      getAll(...args) {
        var ref;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
          return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (ref = args[0]) == null ? void 0 : ref.name;
        return all.filter((c) => c.name === key);
      }
      set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
          args[0].name,
          args[0].value,
          args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
          name,
          value,
          ...cookie
        }));
        replace(map, this._headers);
        return this;
      }
      delete(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this.set({
          name,
          value: "",
          expires: new Date(0)
        });
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
    };
    exports.ResponseCookies = ResponseCookies;
  }
});

// node_modules/next/dist/server/web/spec-extension/cookies/index.js
var require_cookies = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/cookies/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "RequestCookies", {
      enumerable: true,
      get: function() {
        return _requestCookies.RequestCookies;
      }
    });
    Object.defineProperty(exports, "ResponseCookies", {
      enumerable: true,
      get: function() {
        return _responseCookies.ResponseCookies;
      }
    });
    var _requestCookies = require_request_cookies();
    var _responseCookies = require_response_cookies();
  }
});

// node_modules/next/dist/server/web/spec-extension/request.js
var require_request = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.INTERNALS = void 0;
    var _nextUrl = require_next_url();
    var _utils = require_utils();
    var _error = require_error();
    var _cookies = require_cookies();
    var INTERNALS = Symbol("internal request");
    exports.INTERNALS = INTERNALS;
    var NextRequest = class extends Request {
      constructor(input, init = {}) {
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0, _utils).validateURL(url);
        super(url, init);
        this[INTERNALS] = {
          cookies: new _cookies.RequestCookies(this.headers),
          geo: init.geo || {},
          ip: init.ip,
          url: new _nextUrl.NextURL(url, {
            headers: (0, _utils).toNodeHeaders(this.headers),
            nextConfig: init.nextConfig
          })
        };
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          cookies: this.cookies,
          geo: this.geo,
          ip: this.ip,
          nextUrl: this.nextUrl,
          url: this.url,
          bodyUsed: this.bodyUsed,
          cache: this.cache,
          credentials: this.credentials,
          destination: this.destination,
          headers: Object.fromEntries(this.headers),
          integrity: this.integrity,
          keepalive: this.keepalive,
          method: this.method,
          mode: this.mode,
          redirect: this.redirect,
          referrer: this.referrer,
          referrerPolicy: this.referrerPolicy,
          signal: this.signal
        };
      }
      get cookies() {
        return this[INTERNALS].cookies;
      }
      get geo() {
        return this[INTERNALS].geo;
      }
      get ip() {
        return this[INTERNALS].ip;
      }
      get nextUrl() {
        return this[INTERNALS].url;
      }
      get page() {
        throw new _error.RemovedPageError();
      }
      get ua() {
        throw new _error.RemovedUAError();
      }
      get url() {
        return this[INTERNALS].url.toString();
      }
    };
    exports.NextRequest = NextRequest;
  }
});

// node_modules/next/dist/server/web/spec-extension/response.js
var require_response = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _nextUrl = require_next_url();
    var _utils = require_utils();
    var _cookies = require_cookies();
    var INTERNALS = Symbol("internal response");
    var REDIRECTS = /* @__PURE__ */ new Set([
      301,
      302,
      303,
      307,
      308
    ]);
    function handleMiddlewareField(init, headers) {
      var ref;
      if (init == null ? void 0 : (ref = init.request) == null ? void 0 : ref.headers) {
        if (!(init.request.headers instanceof Headers)) {
          throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers) {
          headers.set("x-middleware-request-" + key, value);
          keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
      }
    }
    var NextResponse = class extends Response {
      constructor(body, init = {}) {
        super(body, init);
        this[INTERNALS] = {
          cookies: new _cookies.ResponseCookies(this.headers),
          url: init.url ? new _nextUrl.NextURL(init.url, {
            headers: (0, _utils).toNodeHeaders(this.headers),
            nextConfig: init.nextConfig
          }) : void 0
        };
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          cookies: this.cookies,
          url: this.url,
          body: this.body,
          bodyUsed: this.bodyUsed,
          headers: Object.fromEntries(this.headers),
          ok: this.ok,
          redirected: this.redirected,
          status: this.status,
          statusText: this.statusText,
          type: this.type
        };
      }
      get cookies() {
        return this[INTERNALS].cookies;
      }
      static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
      }
      static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
          throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, _utils).validateURL(url));
        return new NextResponse(null, {
          ...initObj,
          headers,
          status
        });
      }
      static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, _utils).validateURL(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
          ...init,
          headers
        });
      }
      static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
          ...init,
          headers
        });
      }
    };
    exports.NextResponse = NextResponse;
  }
});

// node_modules/next/dist/compiled/ua-parser-js/ua-parser.js
var require_ua_parser = __commonJS({
  "node_modules/next/dist/compiled/ua-parser-js/ua-parser.js"(exports, module) {
    (() => {
      var i = { 412: function(i2, s2) {
        (function(e2, o) {
          "use strict";
          var r = "0.7.28", a = "", n = "?", t = "function", l = "undefined", w = "object", d = "string", b = "major", u = "model", c = "name", m = "type", p = "vendor", f2 = "version", h = "architecture", g = "console", v = "mobile", x = "tablet", k = "smarttv", _ = "wearable", y = "embedded", S = 255;
          var E = { extend: function(i3, s3) {
            var e3 = {};
            for (var o2 in i3) {
              if (s3[o2] && s3[o2].length % 2 === 0) {
                e3[o2] = s3[o2].concat(i3[o2]);
              } else {
                e3[o2] = i3[o2];
              }
            }
            return e3;
          }, has: function(i3, s3) {
            return typeof i3 === d ? s3.toLowerCase().indexOf(i3.toLowerCase()) !== -1 : false;
          }, lowerize: function(i3) {
            return i3.toLowerCase();
          }, major: function(i3) {
            return typeof i3 === d ? i3.replace(/[^\d\.]/g, "").split(".")[0] : o;
          }, trim: function(i3, s3) {
            i3 = i3.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            return typeof s3 === l ? i3 : i3.substring(0, S);
          } };
          var A = { rgx: function(i3, s3) {
            var e3 = 0, r2, a2, n2, l2, d2, b2;
            while (e3 < s3.length && !d2) {
              var u2 = s3[e3], c2 = s3[e3 + 1];
              r2 = a2 = 0;
              while (r2 < u2.length && !d2) {
                d2 = u2[r2++].exec(i3);
                if (!!d2) {
                  for (n2 = 0; n2 < c2.length; n2++) {
                    b2 = d2[++a2];
                    l2 = c2[n2];
                    if (typeof l2 === w && l2.length > 0) {
                      if (l2.length == 2) {
                        if (typeof l2[1] == t) {
                          this[l2[0]] = l2[1].call(this, b2);
                        } else {
                          this[l2[0]] = l2[1];
                        }
                      } else if (l2.length == 3) {
                        if (typeof l2[1] === t && !(l2[1].exec && l2[1].test)) {
                          this[l2[0]] = b2 ? l2[1].call(this, b2, l2[2]) : o;
                        } else {
                          this[l2[0]] = b2 ? b2.replace(l2[1], l2[2]) : o;
                        }
                      } else if (l2.length == 4) {
                        this[l2[0]] = b2 ? l2[3].call(this, b2.replace(l2[1], l2[2])) : o;
                      }
                    } else {
                      this[l2] = b2 ? b2 : o;
                    }
                  }
                }
              }
              e3 += 2;
            }
          }, str: function(i3, s3) {
            for (var e3 in s3) {
              if (typeof s3[e3] === w && s3[e3].length > 0) {
                for (var r2 = 0; r2 < s3[e3].length; r2++) {
                  if (E.has(s3[e3][r2], i3)) {
                    return e3 === n ? o : e3;
                  }
                }
              } else if (E.has(s3[e3], i3)) {
                return e3 === n ? o : e3;
              }
            }
            return i3;
          } };
          var N = { browser: { oldSafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } }, oldEdge: { version: { 0.1: "12.", 21: "13.", 31: "14.", 39: "15.", 41: "16.", 42: "17.", 44: "18." } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } };
          var T = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [f2, [c, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [f2, [c, "Edge"]], [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i], [c, f2], [/opios[\/\s]+([\w\.]+)/i], [f2, [c, "Opera Mini"]], [/\sopr\/([\w\.]+)/i], [f2, [c, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i], [c, f2], [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [f2, [c, "UCBrowser"]], [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i], [f2, [c, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [f2, [c, "WeChat"]], [/konqueror\/([\w\.]+)/i], [f2, [c, "Konqueror"]], [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i], [f2, [c, "IE"]], [/yabrowser\/([\w\.]+)/i], [f2, [c, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[c, /(.+)/, "$1 Secure Browser"], f2], [/focus\/([\w\.]+)/i], [f2, [c, "Firefox Focus"]], [/opt\/([\w\.]+)/i], [f2, [c, "Opera Touch"]], [/coc_coc_browser\/([\w\.]+)/i], [f2, [c, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [f2, [c, "Dolphin"]], [/coast\/([\w\.]+)/i], [f2, [c, "Opera Coast"]], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [f2, [c, "MIUI Browser"]], [/fxios\/([\w\.-]+)/i], [f2, [c, "Firefox"]], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[c, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[c, /(.+)/, "$1 Browser"], f2], [/(comodo_dragon)\/([\w\.]+)/i], [[c, /_/g, " "], f2], [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i], [c, f2], [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i], [c], [/;fbav\/([\w\.]+);/i], [f2, [c, "Facebook"]], [/FBAN\/FBIOS|FB_IAB\/FB4A/i], [[c, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i], [c, f2], [/\bgsa\/([\w\.]+)\s.*safari\//i], [f2, [c, "GSA"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [f2, [c, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[c, "Chrome WebView"], f2], [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i], [f2, [c, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [c, f2], [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i], [f2, [c, "Mobile Safari"]], [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i], [f2, c], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [c, [f2, A.str, N.browser.oldSafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [c, f2], [/(navigator|netscape)\/([\w\.-]+)/i], [[c, "Netscape"], f2], [/ile\svr;\srv:([\w\.]+)\).+firefox/i], [f2, [c, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [c, f2]], cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[h, "amd64"]], [/(ia32(?=;))/i], [[h, E.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[h, "ia32"]], [/\b(aarch64|armv?8e?l?)\b/i], [[h, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[h, "armhf"]], [/windows\s(ce|mobile);\sppc;/i], [[h, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[h, /ower/, "", E.lowerize]], [/(sun4\w)[;\)]/i], [[h, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[h, E.lowerize]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i], [u, [p, "Samsung"], [m, x]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i], [u, [p, "Samsung"], [m, v]], [/\((ip(?:hone|od)[\s\w]*);/i], [u, [p, "Apple"], [m, v]], [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [u, [p, "Apple"], [m, x]], [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i], [u, [p, "Huawei"], [m, x]], [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i], [u, [p, "Huawei"], [m, v]], [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i], [[u, /_/g, " "], [p, "Xiaomi"], [m, v]], [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i], [[u, /_/g, " "], [p, "Xiaomi"], [m, x]], [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i], [u, [p, "OPPO"], [m, v]], [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i], [u, [p, "Vivo"], [m, v]], [/\s(rmx[12]\d{3})(?:\sbuild|;)/i], [u, [p, "Realme"], [m, v]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i], [u, [p, "Motorola"], [m, v]], [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [u, [p, "Motorola"], [m, x]], [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i], [u, [p, "LG"], [m, x]], [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i], [u, [p, "LG"], [m, v]], [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i], [u, [p, "Lenovo"], [m, x]], [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i], [[u, /_/g, " "], [p, "Nokia"], [m, v]], [/droid.+;\s(pixel\sc)[\s)]/i], [u, [p, "Google"], [m, x]], [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i], [u, [p, "Google"], [m, v]], [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [u, [p, "Sony"], [m, v]], [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i], [[u, "Xperia Tablet"], [p, "Sony"], [m, x]], [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i], [u, [p, "OnePlus"], [m, v]], [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i], [u, [p, "Amazon"], [m, x]], [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i], [[u, "Fire Phone"], [p, "Amazon"], [m, v]], [/\((playbook);[\w\s\),;-]+(rim)/i], [u, p, [m, x]], [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i], [u, [p, "BlackBerry"], [m, v]], [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i], [u, [p, "ASUS"], [m, x]], [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i], [u, [p, "ASUS"], [m, v]], [/(nexus\s9)/i], [u, [p, "HTC"], [m, x]], [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [p, [u, /_/g, " "], [m, v]], [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [u, [p, "Acer"], [m, x]], [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i], [u, [p, "Meizu"], [m, v]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [p, u, [m, v]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i], [p, u, [m, x]], [/\s(surface\sduo)\s/i], [u, [p, "Microsoft"], [m, x]], [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i], [u, [p, "Fairphone"], [m, v]], [/\s(u304aa)\sbuild/i], [u, [p, "AT&T"], [m, v]], [/sie-(\w*)/i], [u, [p, "Siemens"], [m, v]], [/[;\/]\s?(rct\w+)\sbuild/i], [u, [p, "RCA"], [m, x]], [/[;\/\s](venue[\d\s]{2,7})\sbuild/i], [u, [p, "Dell"], [m, x]], [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i], [u, [p, "Verizon"], [m, x]], [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i], [u, [p, "Barnes & Noble"], [m, x]], [/[;\/]\s(tm\d{3}\w+)\sbuild/i], [u, [p, "NuVision"], [m, x]], [/;\s(k88)\sbuild/i], [u, [p, "ZTE"], [m, x]], [/;\s(nx\d{3}j)\sbuild/i], [u, [p, "ZTE"], [m, v]], [/[;\/]\s?(gen\d{3})\sbuild.*49h/i], [u, [p, "Swiss"], [m, v]], [/[;\/]\s?(zur\d{3})\sbuild/i], [u, [p, "Swiss"], [m, x]], [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i], [u, [p, "Zeki"], [m, x]], [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i], [[p, "Dragon Touch"], u, [m, x]], [/[;\/]\s?(ns-?\w{0,9})\sbuild/i], [u, [p, "Insignia"], [m, x]], [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i], [u, [p, "NextBook"], [m, x]], [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i], [[p, "Voice"], u, [m, v]], [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i], [[p, "LvTel"], u, [m, v]], [/;\s(ph-1)\s/i], [u, [p, "Essential"], [m, v]], [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i], [u, [p, "Envizen"], [m, x]], [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i], [u, [p, "MachSpeed"], [m, x]], [/[;\/]\s?tu_(1491)\sbuild/i], [u, [p, "Rotor"], [m, x]], [/(shield[\w\s]+)\sbuild/i], [u, [p, "Nvidia"], [m, x]], [/(sprint)\s(\w+)/i], [p, u, [m, v]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [p, "Microsoft"], [m, v]], [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [u, [p, "Zebra"], [m, x]], [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i], [u, [p, "Zebra"], [m, v]], [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i], [p, u, [m, g]], [/droid.+;\s(shield)\sbuild/i], [u, [p, "Nvidia"], [m, g]], [/(playstation\s[345portablevi]+)/i], [u, [p, "Sony"], [m, g]], [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i], [u, [p, "Microsoft"], [m, g]], [/smart-tv.+(samsung)/i], [p, [m, k]], [/hbbtv.+maple;(\d+)/i], [[u, /^/, "SmartTV"], [p, "Samsung"], [m, k]], [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i], [[p, "LG"], [m, k]], [/(apple)\s?tv/i], [p, [u, "Apple TV"], [m, k]], [/crkey/i], [[u, "Chromecast"], [p, "Google"], [m, k]], [/droid.+aft([\w])(\sbuild\/|\))/i], [u, [p, "Amazon"], [m, k]], [/\(dtv[\);].+(aquos)/i], [u, [p, "Sharp"], [m, k]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[p, E.trim], [u, E.trim], [m, k]], [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i], [[m, k]], [/((pebble))app\/[\d\.]+\s/i], [p, u, [m, _]], [/droid.+;\s(glass)\s\d/i], [u, [p, "Google"], [m, _]], [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i], [u, [p, "Zebra"], [m, _]], [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i], [p, [m, y]], [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i], [u, [m, v]], [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i], [u, [m, x]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[m, E.lowerize]], [/(android[\w\.\s\-]{0,9});.+build/i], [u, [p, "Generic"]], [/(phone)/i], [[m, v]]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [f2, [c, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [f2, [c, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [c, f2], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [f2, c]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [c, f2], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i], [c, [f2, A.str, N.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[c, "Windows"], [f2, A.str, N.os.windows.version]], [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i], [[f2, /_/g, "."], [c, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i], [[c, "Mac OS"], [f2, /_/g, "."]], [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i], [c, f2], [/\(bb(10);/i], [f2, [c, "BlackBerry"]], [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i], [f2, [c, "Symbian"]], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[c, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [f2, [c, "webOS"]], [/crkey\/([\d\.]+)/i], [f2, [c, "Chromecast"]], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[c, "Chromium OS"], f2], [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i], [c, f2], [/(sunos)\s?([\w\.\d]*)/i], [[c, "Solaris"], f2], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [c, f2]] };
          var UAParser = function(i3, s3) {
            if (typeof i3 === "object") {
              s3 = i3;
              i3 = o;
            }
            if (!(this instanceof UAParser)) {
              return new UAParser(i3, s3).getResult();
            }
            var r2 = i3 || (typeof e2 !== "undefined" && e2.navigator && e2.navigator.userAgent ? e2.navigator.userAgent : a);
            var n2 = s3 ? E.extend(T, s3) : T;
            this.getBrowser = function() {
              var i4 = { name: o, version: o };
              A.rgx.call(i4, r2, n2.browser);
              i4.major = E.major(i4.version);
              return i4;
            };
            this.getCPU = function() {
              var i4 = { architecture: o };
              A.rgx.call(i4, r2, n2.cpu);
              return i4;
            };
            this.getDevice = function() {
              var i4 = { vendor: o, model: o, type: o };
              A.rgx.call(i4, r2, n2.device);
              return i4;
            };
            this.getEngine = function() {
              var i4 = { name: o, version: o };
              A.rgx.call(i4, r2, n2.engine);
              return i4;
            };
            this.getOS = function() {
              var i4 = { name: o, version: o };
              A.rgx.call(i4, r2, n2.os);
              return i4;
            };
            this.getResult = function() {
              return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
            };
            this.getUA = function() {
              return r2;
            };
            this.setUA = function(i4) {
              r2 = typeof i4 === d && i4.length > S ? E.trim(i4, S) : i4;
              return this;
            };
            this.setUA(r2);
            return this;
          };
          UAParser.VERSION = r;
          UAParser.BROWSER = { NAME: c, MAJOR: b, VERSION: f2 };
          UAParser.CPU = { ARCHITECTURE: h };
          UAParser.DEVICE = { MODEL: u, VENDOR: p, TYPE: m, CONSOLE: g, MOBILE: v, SMARTTV: k, TABLET: x, WEARABLE: _, EMBEDDED: y };
          UAParser.ENGINE = { NAME: c, VERSION: f2 };
          UAParser.OS = { NAME: c, VERSION: f2 };
          if (typeof s2 !== l) {
            if (l !== "object" && i2.exports) {
              s2 = i2.exports = UAParser;
            }
            s2.UAParser = UAParser;
          } else {
            if (typeof define === "function" && define.amd) {
              define(function() {
                return UAParser;
              });
            } else if (typeof e2 !== "undefined") {
              e2.UAParser = UAParser;
            }
          }
          var z = typeof e2 !== "undefined" && (e2.jQuery || e2.Zepto);
          if (z && !z.ua) {
            var O = new UAParser();
            z.ua = O.getResult();
            z.ua.get = function() {
              return O.getUA();
            };
            z.ua.set = function(i3) {
              O.setUA(i3);
              var s3 = O.getResult();
              for (var e3 in s3) {
                z.ua[e3] = s3[e3];
              }
            };
          }
        })(typeof window === "object" ? window : this);
      } };
      var s = {};
      function __nccwpck_require__(e2) {
        var o = s[e2];
        if (o !== void 0) {
          return o.exports;
        }
        var r = s[e2] = { exports: {} };
        var a = true;
        try {
          i[e2].call(r.exports, r, r.exports, __nccwpck_require__);
          a = false;
        } finally {
          if (a)
            delete s[e2];
        }
        return r.exports;
      }
      if (typeof __nccwpck_require__ !== "undefined")
        __nccwpck_require__.ab = __dirname + "/";
      var e = __nccwpck_require__(412);
      module.exports = e;
    })();
  }
});

// node_modules/next/dist/server/web/spec-extension/user-agent.js
var require_user_agent = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/user-agent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isBot = isBot;
    exports.userAgentFromString = userAgentFromString;
    exports.userAgent = userAgent;
    var _uaParserJs = _interopRequireDefault(require_ua_parser());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function isBot(input) {
      return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
    }
    function userAgentFromString(input) {
      return {
        ...(0, _uaParserJs).default(input),
        isBot: input === void 0 ? false : isBot(input)
      };
    }
    function userAgent({ headers }) {
      return userAgentFromString(headers.get("user-agent") || void 0);
    }
  }
});

// node_modules/next/server.js
var require_server = __commonJS({
  "node_modules/next/server.js"(exports, module) {
    var serverExports = {
      NextRequest: require_request().NextRequest,
      NextResponse: require_response().NextResponse,
      userAgentFromString: require_user_agent().userAgentFromString,
      userAgent: require_user_agent().userAgent
    };
    if (typeof URLPattern !== "undefined") {
      serverExports.URLPattern = URLPattern;
    }
    module.exports = serverExports;
    exports.NextRequest = serverExports.NextRequest;
    exports.NextResponse = serverExports.NextResponse;
    exports.userAgentFromString = serverExports.userAgentFromString;
    exports.userAgent = serverExports.userAgent;
    exports.URLPattern = serverExports.URLPattern;
  }
});

// node_modules/jose/dist/browser/runtime/webcrypto.js
var webcrypto_default, isCryptoKey;
var init_webcrypto = __esm({
  "node_modules/jose/dist/browser/runtime/webcrypto.js"() {
    webcrypto_default = crypto;
    isCryptoKey = (key) => key instanceof CryptoKey;
  }
});

// node_modules/jose/dist/browser/runtime/digest.js
var digest, digest_default;
var init_digest = __esm({
  "node_modules/jose/dist/browser/runtime/digest.js"() {
    init_webcrypto();
    digest = async (algorithm, data) => {
      const subtleDigest = `SHA-${algorithm.slice(-3)}`;
      return new Uint8Array(await webcrypto_default.subtle.digest(subtleDigest, data));
    };
    digest_default = digest;
  }
});

// node_modules/jose/dist/browser/lib/buffer_utils.js
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf = new Uint8Array(size);
  let i = 0;
  buffers.forEach((buffer) => {
    buf.set(buffer, i);
    i += buffer.length;
  });
  return buf;
}
function p2s(alg, p2sInput) {
  return concat(encoder.encode(alg), new Uint8Array([0]), p2sInput);
}
function writeUInt32BE(buf, value, offset) {
  if (value < 0 || value >= MAX_INT32) {
    throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
  }
  buf.set([value >>> 24, value >>> 16, value >>> 8, value & 255], offset);
}
function uint64be(value) {
  const high = Math.floor(value / MAX_INT32);
  const low = value % MAX_INT32;
  const buf = new Uint8Array(8);
  writeUInt32BE(buf, high, 0);
  writeUInt32BE(buf, low, 4);
  return buf;
}
function uint32be(value) {
  const buf = new Uint8Array(4);
  writeUInt32BE(buf, value);
  return buf;
}
function lengthAndInput(input) {
  return concat(uint32be(input.length), input);
}
async function concatKdf(secret, bits, value) {
  const iterations = Math.ceil((bits >> 3) / 32);
  const res = new Uint8Array(iterations * 32);
  for (let iter = 0; iter < iterations; iter++) {
    const buf = new Uint8Array(4 + secret.length + value.length);
    buf.set(uint32be(iter + 1));
    buf.set(secret, 4);
    buf.set(value, 4 + secret.length);
    res.set(await digest_default("sha256", buf), iter * 32);
  }
  return res.slice(0, bits >> 3);
}
var encoder, decoder, MAX_INT32;
var init_buffer_utils = __esm({
  "node_modules/jose/dist/browser/lib/buffer_utils.js"() {
    init_digest();
    encoder = new TextEncoder();
    decoder = new TextDecoder();
    MAX_INT32 = 2 ** 32;
  }
});

// node_modules/jose/dist/browser/runtime/base64url.js
var encodeBase64, encode, decodeBase64, decode;
var init_base64url = __esm({
  "node_modules/jose/dist/browser/runtime/base64url.js"() {
    init_buffer_utils();
    encodeBase64 = (input) => {
      let unencoded = input;
      if (typeof unencoded === "string") {
        unencoded = encoder.encode(unencoded);
      }
      const CHUNK_SIZE = 32768;
      const arr = [];
      for (let i = 0; i < unencoded.length; i += CHUNK_SIZE) {
        arr.push(String.fromCharCode.apply(null, unencoded.subarray(i, i + CHUNK_SIZE)));
      }
      return btoa(arr.join(""));
    };
    encode = (input) => {
      return encodeBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    };
    decodeBase64 = (encoded) => {
      const binary = atob(encoded);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      return bytes;
    };
    decode = (input) => {
      let encoded = input;
      if (encoded instanceof Uint8Array) {
        encoded = decoder.decode(encoded);
      }
      encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
      try {
        return decodeBase64(encoded);
      } catch (_a) {
        throw new TypeError("The input to be decoded is not correctly encoded.");
      }
    };
  }
});

// node_modules/jose/dist/browser/util/errors.js
var errors_exports = {};
__export(errors_exports, {
  JOSEAlgNotAllowed: () => JOSEAlgNotAllowed,
  JOSEError: () => JOSEError,
  JOSENotSupported: () => JOSENotSupported,
  JWEDecryptionFailed: () => JWEDecryptionFailed,
  JWEInvalid: () => JWEInvalid,
  JWKInvalid: () => JWKInvalid,
  JWKSInvalid: () => JWKSInvalid,
  JWKSMultipleMatchingKeys: () => JWKSMultipleMatchingKeys,
  JWKSNoMatchingKey: () => JWKSNoMatchingKey,
  JWKSTimeout: () => JWKSTimeout,
  JWSInvalid: () => JWSInvalid,
  JWSSignatureVerificationFailed: () => JWSSignatureVerificationFailed,
  JWTClaimValidationFailed: () => JWTClaimValidationFailed,
  JWTExpired: () => JWTExpired,
  JWTInvalid: () => JWTInvalid
});
var JOSEError, JWTClaimValidationFailed, JWTExpired, JOSEAlgNotAllowed, JOSENotSupported, JWEDecryptionFailed, JWEInvalid, JWSInvalid, JWTInvalid, JWKInvalid, JWKSInvalid, JWKSNoMatchingKey, JWKSMultipleMatchingKeys, JWKSTimeout, JWSSignatureVerificationFailed;
var init_errors = __esm({
  "node_modules/jose/dist/browser/util/errors.js"() {
    JOSEError = class extends Error {
      static get code() {
        return "ERR_JOSE_GENERIC";
      }
      constructor(message2) {
        var _a;
        super(message2);
        this.code = "ERR_JOSE_GENERIC";
        this.name = this.constructor.name;
        (_a = Error.captureStackTrace) === null || _a === void 0 ? void 0 : _a.call(Error, this, this.constructor);
      }
    };
    JWTClaimValidationFailed = class extends JOSEError {
      static get code() {
        return "ERR_JWT_CLAIM_VALIDATION_FAILED";
      }
      constructor(message2, claim = "unspecified", reason = "unspecified") {
        super(message2);
        this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
        this.claim = claim;
        this.reason = reason;
      }
    };
    JWTExpired = class extends JOSEError {
      static get code() {
        return "ERR_JWT_EXPIRED";
      }
      constructor(message2, claim = "unspecified", reason = "unspecified") {
        super(message2);
        this.code = "ERR_JWT_EXPIRED";
        this.claim = claim;
        this.reason = reason;
      }
    };
    JOSEAlgNotAllowed = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
      }
      static get code() {
        return "ERR_JOSE_ALG_NOT_ALLOWED";
      }
    };
    JOSENotSupported = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_NOT_SUPPORTED";
      }
      static get code() {
        return "ERR_JOSE_NOT_SUPPORTED";
      }
    };
    JWEDecryptionFailed = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWE_DECRYPTION_FAILED";
        this.message = "decryption operation failed";
      }
      static get code() {
        return "ERR_JWE_DECRYPTION_FAILED";
      }
    };
    JWEInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWE_INVALID";
      }
      static get code() {
        return "ERR_JWE_INVALID";
      }
    };
    JWSInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWS_INVALID";
      }
      static get code() {
        return "ERR_JWS_INVALID";
      }
    };
    JWTInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWT_INVALID";
      }
      static get code() {
        return "ERR_JWT_INVALID";
      }
    };
    JWKInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWK_INVALID";
      }
      static get code() {
        return "ERR_JWK_INVALID";
      }
    };
    JWKSInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWKS_INVALID";
      }
      static get code() {
        return "ERR_JWKS_INVALID";
      }
    };
    JWKSNoMatchingKey = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWKS_NO_MATCHING_KEY";
        this.message = "no applicable key found in the JSON Web Key Set";
      }
      static get code() {
        return "ERR_JWKS_NO_MATCHING_KEY";
      }
    };
    JWKSMultipleMatchingKeys = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
        this.message = "multiple matching keys found in the JSON Web Key Set";
      }
      static get code() {
        return "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
      }
    };
    JWKSTimeout = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWKS_TIMEOUT";
        this.message = "request timed out";
      }
      static get code() {
        return "ERR_JWKS_TIMEOUT";
      }
    };
    JWSSignatureVerificationFailed = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
        this.message = "signature verification failed";
      }
      static get code() {
        return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/random.js
var random_default;
var init_random = __esm({
  "node_modules/jose/dist/browser/runtime/random.js"() {
    init_webcrypto();
    random_default = webcrypto_default.getRandomValues.bind(webcrypto_default);
  }
});

// node_modules/jose/dist/browser/lib/iv.js
function bitLength(alg) {
  switch (alg) {
    case "A128GCM":
    case "A128GCMKW":
    case "A192GCM":
    case "A192GCMKW":
    case "A256GCM":
    case "A256GCMKW":
      return 96;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      return 128;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
  }
}
var iv_default;
var init_iv = __esm({
  "node_modules/jose/dist/browser/lib/iv.js"() {
    init_errors();
    init_random();
    iv_default = (alg) => random_default(new Uint8Array(bitLength(alg) >> 3));
  }
});

// node_modules/jose/dist/browser/lib/check_iv_length.js
var checkIvLength, check_iv_length_default;
var init_check_iv_length = __esm({
  "node_modules/jose/dist/browser/lib/check_iv_length.js"() {
    init_errors();
    init_iv();
    checkIvLength = (enc, iv) => {
      if (iv.length << 3 !== bitLength(enc)) {
        throw new JWEInvalid("Invalid Initialization Vector length");
      }
    };
    check_iv_length_default = checkIvLength;
  }
});

// node_modules/jose/dist/browser/runtime/check_cek_length.js
var checkCekLength, check_cek_length_default;
var init_check_cek_length = __esm({
  "node_modules/jose/dist/browser/runtime/check_cek_length.js"() {
    init_errors();
    checkCekLength = (cek, expected) => {
      const actual = cek.byteLength << 3;
      if (actual !== expected) {
        throw new JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
      }
    };
    check_cek_length_default = checkCekLength;
  }
});

// node_modules/jose/dist/browser/runtime/timing_safe_equal.js
var timingSafeEqual, timing_safe_equal_default;
var init_timing_safe_equal = __esm({
  "node_modules/jose/dist/browser/runtime/timing_safe_equal.js"() {
    timingSafeEqual = (a, b) => {
      if (!(a instanceof Uint8Array)) {
        throw new TypeError("First argument must be a buffer");
      }
      if (!(b instanceof Uint8Array)) {
        throw new TypeError("Second argument must be a buffer");
      }
      if (a.length !== b.length) {
        throw new TypeError("Input buffers must have the same length");
      }
      const len = a.length;
      let out = 0;
      let i = -1;
      while (++i < len) {
        out |= a[i] ^ b[i];
      }
      return out === 0;
    };
    timing_safe_equal_default = timingSafeEqual;
  }
});

// node_modules/jose/dist/browser/runtime/env.js
function isCloudflareWorkers() {
  return typeof WebSocketPair !== "undefined" || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" || typeof EdgeRuntime !== "undefined" && EdgeRuntime === "vercel";
}
var init_env = __esm({
  "node_modules/jose/dist/browser/runtime/env.js"() {
  }
});

// node_modules/jose/dist/browser/lib/crypto_key.js
function unusable(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
  return algorithm.name === name;
}
function getHashLength(hash) {
  return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
  switch (alg) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function checkUsage(key, usages) {
  if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
    let msg = "CryptoKey does not support this operation, its usages must include ";
    if (usages.length > 2) {
      const last = usages.pop();
      msg += `one of ${usages.join(", ")}, or ${last}.`;
    } else if (usages.length === 2) {
      msg += `one of ${usages[0]} or ${usages[1]}.`;
    } else {
      msg += `${usages[0]}.`;
    }
    throw new TypeError(msg);
  }
}
function checkSigCryptoKey(key, alg, ...usages) {
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!isAlgorithm(key.algorithm, "HMAC"))
        throw unusable("HMAC");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
        throw unusable("RSASSA-PKCS1-v1_5");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!isAlgorithm(key.algorithm, "RSA-PSS"))
        throw unusable("RSA-PSS");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case (isCloudflareWorkers() && "EdDSA"): {
      if (!isAlgorithm(key.algorithm, "NODE-ED25519"))
        throw unusable("NODE-ED25519");
      break;
    }
    case "EdDSA": {
      if (key.algorithm.name !== "Ed25519" && key.algorithm.name !== "Ed448") {
        throw unusable("Ed25519 or Ed448");
      }
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!isAlgorithm(key.algorithm, "ECDSA"))
        throw unusable("ECDSA");
      const expected = getNamedCurve(alg);
      const actual = key.algorithm.namedCurve;
      if (actual !== expected)
        throw unusable(expected, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usages);
}
function checkEncCryptoKey(key, alg, ...usages) {
  switch (alg) {
    case "A128GCM":
    case "A192GCM":
    case "A256GCM": {
      if (!isAlgorithm(key.algorithm, "AES-GCM"))
        throw unusable("AES-GCM");
      const expected = parseInt(alg.slice(1, 4), 10);
      const actual = key.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (!isAlgorithm(key.algorithm, "AES-KW"))
        throw unusable("AES-KW");
      const expected = parseInt(alg.slice(1, 4), 10);
      const actual = key.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "ECDH": {
      switch (key.algorithm.name) {
        case "ECDH":
        case "X25519":
        case "X448":
          break;
        default:
          throw unusable("ECDH, X25519, or X448");
      }
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      if (!isAlgorithm(key.algorithm, "PBKDF2"))
        throw unusable("PBKDF2");
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (!isAlgorithm(key.algorithm, "RSA-OAEP"))
        throw unusable("RSA-OAEP");
      const expected = parseInt(alg.slice(9), 10) || 1;
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usages);
}
var init_crypto_key = __esm({
  "node_modules/jose/dist/browser/lib/crypto_key.js"() {
    init_env();
  }
});

// node_modules/jose/dist/browser/lib/invalid_key_input.js
function message(msg, actual, ...types2) {
  if (types2.length > 2) {
    const last = types2.pop();
    msg += `one of type ${types2.join(", ")}, or ${last}.`;
  } else if (types2.length === 2) {
    msg += `one of type ${types2[0]} or ${types2[1]}.`;
  } else {
    msg += `of type ${types2[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor && actual.constructor.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
function withAlg(alg, actual, ...types2) {
  return message(`Key for the ${alg} algorithm must be `, actual, ...types2);
}
var invalid_key_input_default;
var init_invalid_key_input = __esm({
  "node_modules/jose/dist/browser/lib/invalid_key_input.js"() {
    invalid_key_input_default = (actual, ...types2) => {
      return message("Key must be ", actual, ...types2);
    };
  }
});

// node_modules/jose/dist/browser/runtime/is_key_like.js
var is_key_like_default, types;
var init_is_key_like = __esm({
  "node_modules/jose/dist/browser/runtime/is_key_like.js"() {
    init_webcrypto();
    is_key_like_default = (key) => {
      return isCryptoKey(key);
    };
    types = ["CryptoKey"];
  }
});

// node_modules/jose/dist/browser/runtime/decrypt.js
async function cbcDecrypt(enc, cek, ciphertext, iv, tag, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["decrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const expectedTag = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  let macCheckPassed;
  try {
    macCheckPassed = timing_safe_equal_default(tag, expectedTag);
  } catch (_a) {
  }
  if (!macCheckPassed) {
    throw new JWEDecryptionFailed();
  }
  let plaintext;
  try {
    plaintext = new Uint8Array(await webcrypto_default.subtle.decrypt({ iv, name: "AES-CBC" }, encKey, ciphertext));
  } catch (_b) {
  }
  if (!plaintext) {
    throw new JWEDecryptionFailed();
  }
  return plaintext;
}
async function gcmDecrypt(enc, cek, ciphertext, iv, tag, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["decrypt"]);
  } else {
    checkEncCryptoKey(cek, enc, "decrypt");
    encKey = cek;
  }
  try {
    return new Uint8Array(await webcrypto_default.subtle.decrypt({
      additionalData: aad,
      iv,
      name: "AES-GCM",
      tagLength: 128
    }, encKey, concat(ciphertext, tag)));
  } catch (_a) {
    throw new JWEDecryptionFailed();
  }
}
var decrypt, decrypt_default;
var init_decrypt = __esm({
  "node_modules/jose/dist/browser/runtime/decrypt.js"() {
    init_buffer_utils();
    init_check_iv_length();
    init_check_cek_length();
    init_timing_safe_equal();
    init_errors();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    decrypt = async (enc, cek, ciphertext, iv, tag, aad) => {
      if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
      }
      check_iv_length_default(enc, iv);
      switch (enc) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(-3), 10));
          return cbcDecrypt(enc, cek, ciphertext, iv, tag, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(1, 4), 10));
          return gcmDecrypt(enc, cek, ciphertext, iv, tag, aad);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    decrypt_default = decrypt;
  }
});

// node_modules/jose/dist/browser/runtime/zlib.js
var inflate, deflate;
var init_zlib = __esm({
  "node_modules/jose/dist/browser/runtime/zlib.js"() {
    init_errors();
    inflate = async () => {
      throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `inflateRaw` decrypt option to provide Inflate Raw implementation.');
    };
    deflate = async () => {
      throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.');
    };
  }
});

// node_modules/jose/dist/browser/lib/is_disjoint.js
var isDisjoint, is_disjoint_default;
var init_is_disjoint = __esm({
  "node_modules/jose/dist/browser/lib/is_disjoint.js"() {
    isDisjoint = (...headers) => {
      const sources = headers.filter(Boolean);
      if (sources.length === 0 || sources.length === 1) {
        return true;
      }
      let acc;
      for (const header of sources) {
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
          acc = new Set(parameters);
          continue;
        }
        for (const parameter of parameters) {
          if (acc.has(parameter)) {
            return false;
          }
          acc.add(parameter);
        }
      }
      return true;
    };
    is_disjoint_default = isDisjoint;
  }
});

// node_modules/jose/dist/browser/lib/is_object.js
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function isObject(input) {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}
var init_is_object = __esm({
  "node_modules/jose/dist/browser/lib/is_object.js"() {
  }
});

// node_modules/jose/dist/browser/runtime/bogus.js
var bogusWebCrypto, bogus_default;
var init_bogus = __esm({
  "node_modules/jose/dist/browser/runtime/bogus.js"() {
    bogusWebCrypto = [
      { hash: "SHA-256", name: "HMAC" },
      true,
      ["sign"]
    ];
    bogus_default = bogusWebCrypto;
  }
});

// node_modules/jose/dist/browser/runtime/aeskw.js
function checkKeySize(key, alg) {
  if (key.algorithm.length !== parseInt(alg.slice(1, 4), 10)) {
    throw new TypeError(`Invalid key size for alg: ${alg}`);
  }
}
function getCryptoKey(key, alg, usage) {
  if (isCryptoKey(key)) {
    checkEncCryptoKey(key, alg, usage);
    return key;
  }
  if (key instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key, "AES-KW", true, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}
var wrap, unwrap;
var init_aeskw = __esm({
  "node_modules/jose/dist/browser/runtime/aeskw.js"() {
    init_bogus();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    wrap = async (alg, key, cek) => {
      const cryptoKey = await getCryptoKey(key, alg, "wrapKey");
      checkKeySize(cryptoKey, alg);
      const cryptoKeyCek = await webcrypto_default.subtle.importKey("raw", cek, ...bogus_default);
      return new Uint8Array(await webcrypto_default.subtle.wrapKey("raw", cryptoKeyCek, cryptoKey, "AES-KW"));
    };
    unwrap = async (alg, key, encryptedKey) => {
      const cryptoKey = await getCryptoKey(key, alg, "unwrapKey");
      checkKeySize(cryptoKey, alg);
      const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, cryptoKey, "AES-KW", ...bogus_default);
      return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
    };
  }
});

// node_modules/jose/dist/browser/runtime/ecdhes.js
async function deriveKey(publicKey, privateKey, algorithm, keyLength, apu = new Uint8Array(0), apv = new Uint8Array(0)) {
  if (!isCryptoKey(publicKey)) {
    throw new TypeError(invalid_key_input_default(publicKey, ...types));
  }
  checkEncCryptoKey(publicKey, "ECDH");
  if (!isCryptoKey(privateKey)) {
    throw new TypeError(invalid_key_input_default(privateKey, ...types));
  }
  checkEncCryptoKey(privateKey, "ECDH", "deriveBits");
  const value = concat(lengthAndInput(encoder.encode(algorithm)), lengthAndInput(apu), lengthAndInput(apv), uint32be(keyLength));
  let length;
  if (publicKey.algorithm.name === "X25519") {
    length = 256;
  } else if (publicKey.algorithm.name === "X448") {
    length = 448;
  } else {
    length = Math.ceil(parseInt(publicKey.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
  }
  const sharedSecret = new Uint8Array(await webcrypto_default.subtle.deriveBits({
    name: publicKey.algorithm.name,
    public: publicKey
  }, privateKey, length));
  return concatKdf(sharedSecret, keyLength, value);
}
async function generateEpk(key) {
  if (!isCryptoKey(key)) {
    throw new TypeError(invalid_key_input_default(key, ...types));
  }
  return webcrypto_default.subtle.generateKey(key.algorithm, true, ["deriveBits"]);
}
function ecdhAllowed(key) {
  if (!isCryptoKey(key)) {
    throw new TypeError(invalid_key_input_default(key, ...types));
  }
  return ["P-256", "P-384", "P-521"].includes(key.algorithm.namedCurve) || key.algorithm.name === "X25519" || key.algorithm.name === "X448";
}
var init_ecdhes = __esm({
  "node_modules/jose/dist/browser/runtime/ecdhes.js"() {
    init_buffer_utils();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
  }
});

// node_modules/jose/dist/browser/lib/check_p2s.js
function checkP2s(p2s2) {
  if (!(p2s2 instanceof Uint8Array) || p2s2.length < 8) {
    throw new JWEInvalid("PBES2 Salt Input must be 8 or more octets");
  }
}
var init_check_p2s = __esm({
  "node_modules/jose/dist/browser/lib/check_p2s.js"() {
    init_errors();
  }
});

// node_modules/jose/dist/browser/runtime/pbes2kw.js
function getCryptoKey2(key, alg) {
  if (key instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key, "PBKDF2", false, ["deriveBits"]);
  }
  if (isCryptoKey(key)) {
    checkEncCryptoKey(key, alg, "deriveBits", "deriveKey");
    return key;
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}
async function deriveKey2(p2s2, alg, p2c, key) {
  checkP2s(p2s2);
  const salt = p2s(alg, p2s2);
  const keylen = parseInt(alg.slice(13, 16), 10);
  const subtleAlg = {
    hash: `SHA-${alg.slice(8, 11)}`,
    iterations: p2c,
    name: "PBKDF2",
    salt
  };
  const wrapAlg = {
    length: keylen,
    name: "AES-KW"
  };
  const cryptoKey = await getCryptoKey2(key, alg);
  if (cryptoKey.usages.includes("deriveBits")) {
    return new Uint8Array(await webcrypto_default.subtle.deriveBits(subtleAlg, cryptoKey, keylen));
  }
  if (cryptoKey.usages.includes("deriveKey")) {
    return webcrypto_default.subtle.deriveKey(subtleAlg, cryptoKey, wrapAlg, false, ["wrapKey", "unwrapKey"]);
  }
  throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
}
var encrypt, decrypt2;
var init_pbes2kw = __esm({
  "node_modules/jose/dist/browser/runtime/pbes2kw.js"() {
    init_random();
    init_buffer_utils();
    init_base64url();
    init_aeskw();
    init_check_p2s();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    encrypt = async (alg, key, cek, p2c = 2048, p2s2 = random_default(new Uint8Array(16))) => {
      const derived = await deriveKey2(p2s2, alg, p2c, key);
      const encryptedKey = await wrap(alg.slice(-6), derived, cek);
      return { encryptedKey, p2c, p2s: encode(p2s2) };
    };
    decrypt2 = async (alg, key, encryptedKey, p2c, p2s2) => {
      const derived = await deriveKey2(p2s2, alg, p2c, key);
      return unwrap(alg.slice(-6), derived, encryptedKey);
    };
  }
});

// node_modules/jose/dist/browser/runtime/subtle_rsaes.js
function subtleRsaEs(alg) {
  switch (alg) {
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      return "RSA-OAEP";
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
}
var init_subtle_rsaes = __esm({
  "node_modules/jose/dist/browser/runtime/subtle_rsaes.js"() {
    init_errors();
  }
});

// node_modules/jose/dist/browser/runtime/check_key_length.js
var check_key_length_default;
var init_check_key_length = __esm({
  "node_modules/jose/dist/browser/runtime/check_key_length.js"() {
    check_key_length_default = (alg, key) => {
      if (alg.startsWith("RS") || alg.startsWith("PS")) {
        const { modulusLength } = key.algorithm;
        if (typeof modulusLength !== "number" || modulusLength < 2048) {
          throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
        }
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/rsaes.js
var encrypt2, decrypt3;
var init_rsaes = __esm({
  "node_modules/jose/dist/browser/runtime/rsaes.js"() {
    init_subtle_rsaes();
    init_bogus();
    init_webcrypto();
    init_crypto_key();
    init_check_key_length();
    init_invalid_key_input();
    init_is_key_like();
    encrypt2 = async (alg, key, cek) => {
      if (!isCryptoKey(key)) {
        throw new TypeError(invalid_key_input_default(key, ...types));
      }
      checkEncCryptoKey(key, alg, "encrypt", "wrapKey");
      check_key_length_default(alg, key);
      if (key.usages.includes("encrypt")) {
        return new Uint8Array(await webcrypto_default.subtle.encrypt(subtleRsaEs(alg), key, cek));
      }
      if (key.usages.includes("wrapKey")) {
        const cryptoKeyCek = await webcrypto_default.subtle.importKey("raw", cek, ...bogus_default);
        return new Uint8Array(await webcrypto_default.subtle.wrapKey("raw", cryptoKeyCek, key, subtleRsaEs(alg)));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');
    };
    decrypt3 = async (alg, key, encryptedKey) => {
      if (!isCryptoKey(key)) {
        throw new TypeError(invalid_key_input_default(key, ...types));
      }
      checkEncCryptoKey(key, alg, "decrypt", "unwrapKey");
      check_key_length_default(alg, key);
      if (key.usages.includes("decrypt")) {
        return new Uint8Array(await webcrypto_default.subtle.decrypt(subtleRsaEs(alg), key, encryptedKey));
      }
      if (key.usages.includes("unwrapKey")) {
        const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, key, subtleRsaEs(alg), ...bogus_default);
        return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');
    };
  }
});

// node_modules/jose/dist/browser/lib/cek.js
function bitLength2(alg) {
  switch (alg) {
    case "A128GCM":
      return 128;
    case "A192GCM":
      return 192;
    case "A256GCM":
    case "A128CBC-HS256":
      return 256;
    case "A192CBC-HS384":
      return 384;
    case "A256CBC-HS512":
      return 512;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
  }
}
var cek_default;
var init_cek = __esm({
  "node_modules/jose/dist/browser/lib/cek.js"() {
    init_errors();
    init_random();
    cek_default = (alg) => random_default(new Uint8Array(bitLength2(alg) >> 3));
  }
});

// node_modules/jose/dist/browser/lib/format_pem.js
var format_pem_default;
var init_format_pem = __esm({
  "node_modules/jose/dist/browser/lib/format_pem.js"() {
    format_pem_default = (b64, descriptor) => {
      const newlined = (b64.match(/.{1,64}/g) || []).join("\n");
      return `-----BEGIN ${descriptor}-----
${newlined}
-----END ${descriptor}-----`;
    };
  }
});

// node_modules/jose/dist/browser/runtime/asn1.js
var genericExport, toSPKI, toPKCS8, findOid, getNamedCurve2, genericImport, fromPKCS8, fromSPKI;
var init_asn1 = __esm({
  "node_modules/jose/dist/browser/runtime/asn1.js"() {
    init_env();
    init_webcrypto();
    init_invalid_key_input();
    init_base64url();
    init_format_pem();
    init_errors();
    init_is_key_like();
    genericExport = async (keyType, keyFormat, key) => {
      if (!isCryptoKey(key)) {
        throw new TypeError(invalid_key_input_default(key, ...types));
      }
      if (!key.extractable) {
        throw new TypeError("CryptoKey is not extractable");
      }
      if (key.type !== keyType) {
        throw new TypeError(`key is not a ${keyType} key`);
      }
      return format_pem_default(encodeBase64(new Uint8Array(await webcrypto_default.subtle.exportKey(keyFormat, key))), `${keyType.toUpperCase()} KEY`);
    };
    toSPKI = (key) => {
      return genericExport("public", "spki", key);
    };
    toPKCS8 = (key) => {
      return genericExport("private", "pkcs8", key);
    };
    findOid = (keyData, oid, from = 0) => {
      if (from === 0) {
        oid.unshift(oid.length);
        oid.unshift(6);
      }
      let i = keyData.indexOf(oid[0], from);
      if (i === -1)
        return false;
      const sub = keyData.subarray(i, i + oid.length);
      if (sub.length !== oid.length)
        return false;
      return sub.every((value, index) => value === oid[index]) || findOid(keyData, oid, i + 1);
    };
    getNamedCurve2 = (keyData) => {
      switch (true) {
        case findOid(keyData, [42, 134, 72, 206, 61, 3, 1, 7]):
          return "P-256";
        case findOid(keyData, [43, 129, 4, 0, 34]):
          return "P-384";
        case findOid(keyData, [43, 129, 4, 0, 35]):
          return "P-521";
        case findOid(keyData, [43, 101, 110]):
          return "X25519";
        case findOid(keyData, [43, 101, 111]):
          return "X448";
        case findOid(keyData, [43, 101, 112]):
          return "Ed25519";
        case findOid(keyData, [43, 101, 113]):
          return "Ed448";
        default:
          throw new JOSENotSupported("Invalid or unsupported EC Key Curve or OKP Key Sub Type");
      }
    };
    genericImport = async (replace, keyFormat, pem, alg, options) => {
      var _a;
      let algorithm;
      let keyUsages;
      const keyData = new Uint8Array(atob(pem.replace(replace, "")).split("").map((c) => c.charCodeAt(0)));
      const isPublic = keyFormat === "spki";
      switch (alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${alg.slice(-3)}` };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${alg.slice(-3)}` };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`
          };
          keyUsages = isPublic ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"];
          break;
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW": {
          const namedCurve = getNamedCurve2(keyData);
          algorithm = namedCurve.startsWith("P-") ? { name: "ECDH", namedCurve } : { name: namedCurve };
          keyUsages = isPublic ? [] : ["deriveBits"];
          break;
        }
        case (isCloudflareWorkers() && "EdDSA"): {
          const namedCurve = getNamedCurve2(keyData).toUpperCase();
          algorithm = { name: `NODE-${namedCurve}`, namedCurve: `NODE-${namedCurve}` };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        }
        case "EdDSA":
          algorithm = { name: getNamedCurve2(keyData) };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported "alg" (Algorithm) value');
      }
      return webcrypto_default.subtle.importKey(keyFormat, keyData, algorithm, (_a = options === null || options === void 0 ? void 0 : options.extractable) !== null && _a !== void 0 ? _a : false, keyUsages);
    };
    fromPKCS8 = (pem, alg, options) => {
      return genericImport(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, "pkcs8", pem, alg, options);
    };
    fromSPKI = (pem, alg, options) => {
      return genericImport(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", pem, alg, options);
    };
  }
});

// node_modules/jose/dist/browser/runtime/jwk_to_key.js
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "oct": {
      switch (jwk.alg) {
        case "HS256":
        case "HS384":
        case "HS512":
          algorithm = { name: "HMAC", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = ["sign", "verify"];
          break;
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          throw new JOSENotSupported(`${jwk.alg} keys cannot be imported as CryptoKey instances`);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW":
          algorithm = { name: "AES-GCM" };
          keyUsages = ["encrypt", "decrypt"];
          break;
        case "A128KW":
        case "A192KW":
        case "A256KW":
          algorithm = { name: "AES-KW" };
          keyUsages = ["wrapKey", "unwrapKey"];
          break;
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
          algorithm = { name: "PBKDF2" };
          keyUsages = ["deriveBits"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case (isCloudflareWorkers() && "OKP"):
      if (jwk.alg !== "EdDSA") {
        throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      switch (jwk.crv) {
        case "Ed25519":
          algorithm = { name: "NODE-ED25519", namedCurve: "NODE-ED25519" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    case "OKP": {
      switch (jwk.alg) {
        case "EdDSA":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
var parse, jwk_to_key_default;
var init_jwk_to_key = __esm({
  "node_modules/jose/dist/browser/runtime/jwk_to_key.js"() {
    init_env();
    init_webcrypto();
    init_errors();
    init_base64url();
    parse = async (jwk) => {
      var _a, _b;
      const { algorithm, keyUsages } = subtleMapping(jwk);
      const rest = [
        algorithm,
        (_a = jwk.ext) !== null && _a !== void 0 ? _a : false,
        (_b = jwk.key_ops) !== null && _b !== void 0 ? _b : keyUsages
      ];
      if (algorithm.name === "PBKDF2") {
        return webcrypto_default.subtle.importKey("raw", decode(jwk.k), ...rest);
      }
      const keyData = { ...jwk };
      delete keyData.alg;
      delete keyData.use;
      return webcrypto_default.subtle.importKey("jwk", keyData, ...rest);
    };
    jwk_to_key_default = parse;
  }
});

// node_modules/jose/dist/browser/key/import.js
function getElement(seq) {
  let result = [];
  let next = 0;
  while (next < seq.length) {
    let nextPart = parseElement(seq.subarray(next));
    result.push(nextPart);
    next += nextPart.byteLength;
  }
  return result;
}
function parseElement(bytes) {
  let position = 0;
  let tag = bytes[0] & 31;
  position++;
  if (tag === 31) {
    tag = 0;
    while (bytes[position] >= 128) {
      tag = tag * 128 + bytes[position] - 128;
      position++;
    }
    tag = tag * 128 + bytes[position] - 128;
    position++;
  }
  let length = 0;
  if (bytes[position] < 128) {
    length = bytes[position];
    position++;
  } else if (length === 128) {
    length = 0;
    while (bytes[position + length] !== 0 || bytes[position + length + 1] !== 0) {
      if (length > bytes.byteLength) {
        throw new TypeError("invalid indefinite form length");
      }
      length++;
    }
    const byteLength2 = position + length + 2;
    return {
      byteLength: byteLength2,
      contents: bytes.subarray(position, position + length),
      raw: bytes.subarray(0, byteLength2)
    };
  } else {
    let numberOfDigits = bytes[position] & 127;
    position++;
    length = 0;
    for (let i = 0; i < numberOfDigits; i++) {
      length = length * 256 + bytes[position];
      position++;
    }
  }
  const byteLength = position + length;
  return {
    byteLength,
    contents: bytes.subarray(position, byteLength),
    raw: bytes.subarray(0, byteLength)
  };
}
function spkiFromX509(buf) {
  const tbsCertificate = getElement(getElement(parseElement(buf).contents)[0].contents);
  return encodeBase64(tbsCertificate[tbsCertificate[0].raw[0] === 160 ? 6 : 5].raw);
}
function getSPKI(x509) {
  const pem = x509.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, "");
  const raw = decodeBase64(pem);
  return format_pem_default(spkiFromX509(raw), "PUBLIC KEY");
}
async function importSPKI(spki, alg, options) {
  if (typeof spki !== "string" || spki.indexOf("-----BEGIN PUBLIC KEY-----") !== 0) {
    throw new TypeError('"spki" must be SPKI formatted string');
  }
  return fromSPKI(spki, alg, options);
}
async function importX509(x509, alg, options) {
  if (typeof x509 !== "string" || x509.indexOf("-----BEGIN CERTIFICATE-----") !== 0) {
    throw new TypeError('"x509" must be X.509 formatted string');
  }
  let spki;
  try {
    spki = getSPKI(x509);
  } catch (cause) {
    throw new TypeError("failed to parse the X.509 certificate", { cause });
  }
  return fromSPKI(spki, alg, options);
}
async function importPKCS8(pkcs8, alg, options) {
  if (typeof pkcs8 !== "string" || pkcs8.indexOf("-----BEGIN PRIVATE KEY-----") !== 0) {
    throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
  }
  return fromPKCS8(pkcs8, alg, options);
}
async function importJWK(jwk, alg, octAsKeyObject) {
  var _a;
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  alg || (alg = jwk.alg);
  if (typeof alg !== "string" || !alg) {
    throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
  }
  switch (jwk.kty) {
    case "oct":
      if (typeof jwk.k !== "string" || !jwk.k) {
        throw new TypeError('missing "k" (Key Value) Parameter value');
      }
      octAsKeyObject !== null && octAsKeyObject !== void 0 ? octAsKeyObject : octAsKeyObject = jwk.ext !== true;
      if (octAsKeyObject) {
        return jwk_to_key_default({ ...jwk, alg, ext: (_a = jwk.ext) !== null && _a !== void 0 ? _a : false });
      }
      return decode(jwk.k);
    case "RSA":
      if (jwk.oth !== void 0) {
        throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
      }
    case "EC":
    case "OKP":
      return jwk_to_key_default({ ...jwk, alg });
    default:
      throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
  }
}
var init_import = __esm({
  "node_modules/jose/dist/browser/key/import.js"() {
    init_base64url();
    init_asn1();
    init_asn1();
    init_jwk_to_key();
    init_errors();
    init_format_pem();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/lib/check_key_type.js
var symmetricTypeCheck, asymmetricTypeCheck, checkKeyType, check_key_type_default;
var init_check_key_type = __esm({
  "node_modules/jose/dist/browser/lib/check_key_type.js"() {
    init_invalid_key_input();
    init_is_key_like();
    symmetricTypeCheck = (alg, key) => {
      if (key instanceof Uint8Array)
        return;
      if (!is_key_like_default(key)) {
        throw new TypeError(withAlg(alg, key, ...types, "Uint8Array"));
      }
      if (key.type !== "secret") {
        throw new TypeError(`${types.join(" or ")} instances for symmetric algorithms must be of type "secret"`);
      }
    };
    asymmetricTypeCheck = (alg, key, usage) => {
      if (!is_key_like_default(key)) {
        throw new TypeError(withAlg(alg, key, ...types));
      }
      if (key.type === "secret") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
      }
      if (usage === "sign" && key.type === "public") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
      }
      if (usage === "decrypt" && key.type === "public") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
      }
      if (key.algorithm && usage === "verify" && key.type === "private") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
      }
      if (key.algorithm && usage === "encrypt" && key.type === "private") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`);
      }
    };
    checkKeyType = (alg, key, usage) => {
      const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg);
      if (symmetric) {
        symmetricTypeCheck(alg, key);
      } else {
        asymmetricTypeCheck(alg, key, usage);
      }
    };
    check_key_type_default = checkKeyType;
  }
});

// node_modules/jose/dist/browser/runtime/encrypt.js
async function cbcEncrypt(enc, plaintext, cek, iv, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["encrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const ciphertext = new Uint8Array(await webcrypto_default.subtle.encrypt({
    iv,
    name: "AES-CBC"
  }, encKey, plaintext));
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const tag = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  return { ciphertext, tag };
}
async function gcmEncrypt(enc, plaintext, cek, iv, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  } else {
    checkEncCryptoKey(cek, enc, "encrypt");
    encKey = cek;
  }
  const encrypted = new Uint8Array(await webcrypto_default.subtle.encrypt({
    additionalData: aad,
    iv,
    name: "AES-GCM",
    tagLength: 128
  }, encKey, plaintext));
  const tag = encrypted.slice(-16);
  const ciphertext = encrypted.slice(0, -16);
  return { ciphertext, tag };
}
var encrypt3, encrypt_default;
var init_encrypt = __esm({
  "node_modules/jose/dist/browser/runtime/encrypt.js"() {
    init_buffer_utils();
    init_check_iv_length();
    init_check_cek_length();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_errors();
    init_is_key_like();
    encrypt3 = async (enc, plaintext, cek, iv, aad) => {
      if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
      }
      check_iv_length_default(enc, iv);
      switch (enc) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(-3), 10));
          return cbcEncrypt(enc, plaintext, cek, iv, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(1, 4), 10));
          return gcmEncrypt(enc, plaintext, cek, iv, aad);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    encrypt_default = encrypt3;
  }
});

// node_modules/jose/dist/browser/lib/aesgcmkw.js
async function wrap2(alg, key, cek, iv) {
  const jweAlgorithm = alg.slice(0, 7);
  iv || (iv = iv_default(jweAlgorithm));
  const { ciphertext: encryptedKey, tag } = await encrypt_default(jweAlgorithm, cek, key, iv, new Uint8Array(0));
  return { encryptedKey, iv: encode(iv), tag: encode(tag) };
}
async function unwrap2(alg, key, encryptedKey, iv, tag) {
  const jweAlgorithm = alg.slice(0, 7);
  return decrypt_default(jweAlgorithm, key, encryptedKey, iv, tag, new Uint8Array(0));
}
var init_aesgcmkw = __esm({
  "node_modules/jose/dist/browser/lib/aesgcmkw.js"() {
    init_encrypt();
    init_decrypt();
    init_iv();
    init_base64url();
  }
});

// node_modules/jose/dist/browser/lib/decrypt_key_management.js
async function decryptKeyManagement(alg, key, encryptedKey, joseHeader, options) {
  check_key_type_default(alg, key, "decrypt");
  switch (alg) {
    case "dir": {
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
      return key;
    }
    case "ECDH-ES":
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!isObject(joseHeader.epk))
        throw new JWEInvalid(`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`);
      if (!ecdhAllowed(key))
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      const epk = await importJWK(joseHeader.epk, alg);
      let partyUInfo;
      let partyVInfo;
      if (joseHeader.apu !== void 0) {
        if (typeof joseHeader.apu !== "string")
          throw new JWEInvalid(`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
        partyUInfo = decode(joseHeader.apu);
      }
      if (joseHeader.apv !== void 0) {
        if (typeof joseHeader.apv !== "string")
          throw new JWEInvalid(`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
        partyVInfo = decode(joseHeader.apv);
      }
      const sharedSecret = await deriveKey(epk, key, alg === "ECDH-ES" ? joseHeader.enc : alg, alg === "ECDH-ES" ? bitLength2(joseHeader.enc) : parseInt(alg.slice(-5, -2), 10), partyUInfo, partyVInfo);
      if (alg === "ECDH-ES")
        return sharedSecret;
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg.slice(-6), sharedSecret, encryptedKey);
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return decrypt3(alg, key, encryptedKey);
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.p2c !== "number")
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
      const p2cLimit = (options === null || options === void 0 ? void 0 : options.maxPBES2Count) || 1e4;
      if (joseHeader.p2c > p2cLimit)
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`);
      if (typeof joseHeader.p2s !== "string")
        throw new JWEInvalid(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
      return decrypt2(alg, key, encryptedKey, joseHeader.p2c, decode(joseHeader.p2s));
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg, key, encryptedKey);
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.iv !== "string")
        throw new JWEInvalid(`JOSE Header "iv" (Initialization Vector) missing or invalid`);
      if (typeof joseHeader.tag !== "string")
        throw new JWEInvalid(`JOSE Header "tag" (Authentication Tag) missing or invalid`);
      const iv = decode(joseHeader.iv);
      const tag = decode(joseHeader.tag);
      return unwrap2(alg, key, encryptedKey, iv, tag);
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
}
var decrypt_key_management_default;
var init_decrypt_key_management = __esm({
  "node_modules/jose/dist/browser/lib/decrypt_key_management.js"() {
    init_aeskw();
    init_ecdhes();
    init_pbes2kw();
    init_rsaes();
    init_base64url();
    init_errors();
    init_cek();
    init_import();
    init_check_key_type();
    init_is_object();
    init_aesgcmkw();
    decrypt_key_management_default = decryptKeyManagement;
  }
});

// node_modules/jose/dist/browser/lib/validate_crit.js
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
  if (joseHeader.crit !== void 0 && protectedHeader.crit === void 0) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === void 0) {
    return /* @__PURE__ */ new Set();
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== void 0) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    } else if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
}
var validate_crit_default;
var init_validate_crit = __esm({
  "node_modules/jose/dist/browser/lib/validate_crit.js"() {
    init_errors();
    validate_crit_default = validateCrit;
  }
});

// node_modules/jose/dist/browser/lib/validate_algorithms.js
var validateAlgorithms, validate_algorithms_default;
var init_validate_algorithms = __esm({
  "node_modules/jose/dist/browser/lib/validate_algorithms.js"() {
    validateAlgorithms = (option, algorithms) => {
      if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
      }
      if (!algorithms) {
        return void 0;
      }
      return new Set(algorithms);
    };
    validate_algorithms_default = validateAlgorithms;
  }
});

// node_modules/jose/dist/browser/jwe/flattened/decrypt.js
async function flattenedDecrypt(jwe, key, options) {
  var _a;
  if (!isObject(jwe)) {
    throw new JWEInvalid("Flattened JWE must be an object");
  }
  if (jwe.protected === void 0 && jwe.header === void 0 && jwe.unprotected === void 0) {
    throw new JWEInvalid("JOSE Header missing");
  }
  if (typeof jwe.iv !== "string") {
    throw new JWEInvalid("JWE Initialization Vector missing or incorrect type");
  }
  if (typeof jwe.ciphertext !== "string") {
    throw new JWEInvalid("JWE Ciphertext missing or incorrect type");
  }
  if (typeof jwe.tag !== "string") {
    throw new JWEInvalid("JWE Authentication Tag missing or incorrect type");
  }
  if (jwe.protected !== void 0 && typeof jwe.protected !== "string") {
    throw new JWEInvalid("JWE Protected Header incorrect type");
  }
  if (jwe.encrypted_key !== void 0 && typeof jwe.encrypted_key !== "string") {
    throw new JWEInvalid("JWE Encrypted Key incorrect type");
  }
  if (jwe.aad !== void 0 && typeof jwe.aad !== "string") {
    throw new JWEInvalid("JWE AAD incorrect type");
  }
  if (jwe.header !== void 0 && !isObject(jwe.header)) {
    throw new JWEInvalid("JWE Shared Unprotected Header incorrect type");
  }
  if (jwe.unprotected !== void 0 && !isObject(jwe.unprotected)) {
    throw new JWEInvalid("JWE Per-Recipient Unprotected Header incorrect type");
  }
  let parsedProt;
  if (jwe.protected) {
    try {
      const protectedHeader2 = decode(jwe.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader2));
    } catch (_b) {
      throw new JWEInvalid("JWE Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jwe.header, jwe.unprotected)) {
    throw new JWEInvalid("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jwe.header,
    ...jwe.unprotected
  };
  validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options === null || options === void 0 ? void 0 : options.crit, parsedProt, joseHeader);
  if (joseHeader.zip !== void 0) {
    if (!parsedProt || !parsedProt.zip) {
      throw new JWEInvalid('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
    }
    if (joseHeader.zip !== "DEF") {
      throw new JOSENotSupported('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
    }
  }
  const { alg, enc } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWEInvalid("missing JWE Algorithm (alg) in JWE Header");
  }
  if (typeof enc !== "string" || !enc) {
    throw new JWEInvalid("missing JWE Encryption Algorithm (enc) in JWE Header");
  }
  const keyManagementAlgorithms = options && validate_algorithms_default("keyManagementAlgorithms", options.keyManagementAlgorithms);
  const contentEncryptionAlgorithms = options && validate_algorithms_default("contentEncryptionAlgorithms", options.contentEncryptionAlgorithms);
  if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter not allowed');
  }
  if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc)) {
    throw new JOSEAlgNotAllowed('"enc" (Encryption Algorithm) Header Parameter not allowed');
  }
  let encryptedKey;
  if (jwe.encrypted_key !== void 0) {
    encryptedKey = decode(jwe.encrypted_key);
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jwe);
    resolvedKey = true;
  }
  let cek;
  try {
    cek = await decrypt_key_management_default(alg, key, encryptedKey, joseHeader, options);
  } catch (err) {
    if (err instanceof TypeError || err instanceof JWEInvalid || err instanceof JOSENotSupported) {
      throw err;
    }
    cek = cek_default(enc);
  }
  const iv = decode(jwe.iv);
  const tag = decode(jwe.tag);
  const protectedHeader = encoder.encode((_a = jwe.protected) !== null && _a !== void 0 ? _a : "");
  let additionalData;
  if (jwe.aad !== void 0) {
    additionalData = concat(protectedHeader, encoder.encode("."), encoder.encode(jwe.aad));
  } else {
    additionalData = protectedHeader;
  }
  let plaintext = await decrypt_default(enc, cek, decode(jwe.ciphertext), iv, tag, additionalData);
  if (joseHeader.zip === "DEF") {
    plaintext = await ((options === null || options === void 0 ? void 0 : options.inflateRaw) || inflate)(plaintext);
  }
  const result = { plaintext };
  if (jwe.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jwe.aad !== void 0) {
    result.additionalAuthenticatedData = decode(jwe.aad);
  }
  if (jwe.unprotected !== void 0) {
    result.sharedUnprotectedHeader = jwe.unprotected;
  }
  if (jwe.header !== void 0) {
    result.unprotectedHeader = jwe.header;
  }
  if (resolvedKey) {
    return { ...result, key };
  }
  return result;
}
var init_decrypt2 = __esm({
  "node_modules/jose/dist/browser/jwe/flattened/decrypt.js"() {
    init_base64url();
    init_decrypt();
    init_zlib();
    init_errors();
    init_is_disjoint();
    init_is_object();
    init_decrypt_key_management();
    init_buffer_utils();
    init_cek();
    init_validate_crit();
    init_validate_algorithms();
  }
});

// node_modules/jose/dist/browser/jwe/compact/decrypt.js
async function compactDecrypt(jwe, key, options) {
  if (jwe instanceof Uint8Array) {
    jwe = decoder.decode(jwe);
  }
  if (typeof jwe !== "string") {
    throw new JWEInvalid("Compact JWE must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: encryptedKey, 2: iv, 3: ciphertext, 4: tag, length } = jwe.split(".");
  if (length !== 5) {
    throw new JWEInvalid("Invalid Compact JWE");
  }
  const decrypted = await flattenedDecrypt({
    ciphertext,
    iv: iv || void 0,
    protected: protectedHeader || void 0,
    tag: tag || void 0,
    encrypted_key: encryptedKey || void 0
  }, key, options);
  const result = { plaintext: decrypted.plaintext, protectedHeader: decrypted.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}
var init_decrypt3 = __esm({
  "node_modules/jose/dist/browser/jwe/compact/decrypt.js"() {
    init_decrypt2();
    init_errors();
    init_buffer_utils();
  }
});

// node_modules/jose/dist/browser/jwe/general/decrypt.js
async function generalDecrypt(jwe, key, options) {
  if (!isObject(jwe)) {
    throw new JWEInvalid("General JWE must be an object");
  }
  if (!Array.isArray(jwe.recipients) || !jwe.recipients.every(isObject)) {
    throw new JWEInvalid("JWE Recipients missing or incorrect type");
  }
  if (!jwe.recipients.length) {
    throw new JWEInvalid("JWE Recipients has no members");
  }
  for (const recipient of jwe.recipients) {
    try {
      return await flattenedDecrypt({
        aad: jwe.aad,
        ciphertext: jwe.ciphertext,
        encrypted_key: recipient.encrypted_key,
        header: recipient.header,
        iv: jwe.iv,
        protected: jwe.protected,
        tag: jwe.tag,
        unprotected: jwe.unprotected
      }, key, options);
    } catch (_a) {
    }
  }
  throw new JWEDecryptionFailed();
}
var init_decrypt4 = __esm({
  "node_modules/jose/dist/browser/jwe/general/decrypt.js"() {
    init_decrypt2();
    init_errors();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/runtime/key_to_jwk.js
var keyToJWK, key_to_jwk_default;
var init_key_to_jwk = __esm({
  "node_modules/jose/dist/browser/runtime/key_to_jwk.js"() {
    init_webcrypto();
    init_invalid_key_input();
    init_base64url();
    init_is_key_like();
    keyToJWK = async (key) => {
      if (key instanceof Uint8Array) {
        return {
          kty: "oct",
          k: encode(key)
        };
      }
      if (!isCryptoKey(key)) {
        throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
      }
      if (!key.extractable) {
        throw new TypeError("non-extractable CryptoKey cannot be exported as a JWK");
      }
      const { ext, key_ops, alg, use, ...jwk } = await webcrypto_default.subtle.exportKey("jwk", key);
      return jwk;
    };
    key_to_jwk_default = keyToJWK;
  }
});

// node_modules/jose/dist/browser/key/export.js
async function exportSPKI(key) {
  return toSPKI(key);
}
async function exportPKCS8(key) {
  return toPKCS8(key);
}
async function exportJWK(key) {
  return key_to_jwk_default(key);
}
var init_export = __esm({
  "node_modules/jose/dist/browser/key/export.js"() {
    init_asn1();
    init_asn1();
    init_key_to_jwk();
  }
});

// node_modules/jose/dist/browser/lib/encrypt_key_management.js
async function encryptKeyManagement(alg, enc, key, providedCek, providedParameters = {}) {
  let encryptedKey;
  let parameters;
  let cek;
  check_key_type_default(alg, key, "encrypt");
  switch (alg) {
    case "dir": {
      cek = key;
      break;
    }
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!ecdhAllowed(key)) {
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      }
      const { apu, apv } = providedParameters;
      let { epk: ephemeralKey } = providedParameters;
      ephemeralKey || (ephemeralKey = (await generateEpk(key)).privateKey);
      const { x, y, crv, kty } = await exportJWK(ephemeralKey);
      const sharedSecret = await deriveKey(key, ephemeralKey, alg === "ECDH-ES" ? enc : alg, alg === "ECDH-ES" ? bitLength2(enc) : parseInt(alg.slice(-5, -2), 10), apu, apv);
      parameters = { epk: { x, crv, kty } };
      if (kty === "EC")
        parameters.epk.y = y;
      if (apu)
        parameters.apu = encode(apu);
      if (apv)
        parameters.apv = encode(apv);
      if (alg === "ECDH-ES") {
        cek = sharedSecret;
        break;
      }
      cek = providedCek || cek_default(enc);
      const kwAlg = alg.slice(-6);
      encryptedKey = await wrap(kwAlg, sharedSecret, cek);
      break;
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      cek = providedCek || cek_default(enc);
      encryptedKey = await encrypt2(alg, key, cek);
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      cek = providedCek || cek_default(enc);
      const { p2c, p2s: p2s2 } = providedParameters;
      ({ encryptedKey, ...parameters } = await encrypt(alg, key, cek, p2c, p2s2));
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      cek = providedCek || cek_default(enc);
      encryptedKey = await wrap(alg, key, cek);
      break;
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      cek = providedCek || cek_default(enc);
      const { iv } = providedParameters;
      ({ encryptedKey, ...parameters } = await wrap2(alg, key, cek, iv));
      break;
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
  return { cek, encryptedKey, parameters };
}
var encrypt_key_management_default;
var init_encrypt_key_management = __esm({
  "node_modules/jose/dist/browser/lib/encrypt_key_management.js"() {
    init_aeskw();
    init_ecdhes();
    init_pbes2kw();
    init_rsaes();
    init_base64url();
    init_cek();
    init_errors();
    init_export();
    init_check_key_type();
    init_aesgcmkw();
    encrypt_key_management_default = encryptKeyManagement;
  }
});

// node_modules/jose/dist/browser/jwe/flattened/encrypt.js
var unprotected, FlattenedEncrypt;
var init_encrypt2 = __esm({
  "node_modules/jose/dist/browser/jwe/flattened/encrypt.js"() {
    init_base64url();
    init_encrypt();
    init_zlib();
    init_iv();
    init_encrypt_key_management();
    init_errors();
    init_is_disjoint();
    init_buffer_utils();
    init_validate_crit();
    unprotected = Symbol();
    FlattenedEncrypt = class {
      constructor(plaintext) {
        if (!(plaintext instanceof Uint8Array)) {
          throw new TypeError("plaintext must be an instance of Uint8Array");
        }
        this._plaintext = plaintext;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._sharedUnprotectedHeader) {
          throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this._sharedUnprotectedHeader = sharedUnprotectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
      }
      setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      async encrypt(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) {
          throw new JWEInvalid("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
        }
        if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
          throw new JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
        }
        const joseHeader = {
          ...this._protectedHeader,
          ...this._unprotectedHeader,
          ...this._sharedUnprotectedHeader
        };
        validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options === null || options === void 0 ? void 0 : options.crit, this._protectedHeader, joseHeader);
        if (joseHeader.zip !== void 0) {
          if (!this._protectedHeader || !this._protectedHeader.zip) {
            throw new JWEInvalid('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
          }
          if (joseHeader.zip !== "DEF") {
            throw new JOSENotSupported('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
          }
        }
        const { alg, enc } = joseHeader;
        if (typeof alg !== "string" || !alg) {
          throw new JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc !== "string" || !enc) {
          throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let encryptedKey;
        if (alg === "dir") {
          if (this._cek) {
            throw new TypeError("setContentEncryptionKey cannot be called when using Direct Encryption");
          }
        } else if (alg === "ECDH-ES") {
          if (this._cek) {
            throw new TypeError("setContentEncryptionKey cannot be called when using Direct Key Agreement");
          }
        }
        let cek;
        {
          let parameters;
          ({ cek, encryptedKey, parameters } = await encrypt_key_management_default(alg, enc, key, this._cek, this._keyManagementParameters));
          if (parameters) {
            if (options && unprotected in options) {
              if (!this._unprotectedHeader) {
                this.setUnprotectedHeader(parameters);
              } else {
                this._unprotectedHeader = { ...this._unprotectedHeader, ...parameters };
              }
            } else {
              if (!this._protectedHeader) {
                this.setProtectedHeader(parameters);
              } else {
                this._protectedHeader = { ...this._protectedHeader, ...parameters };
              }
            }
          }
        }
        this._iv || (this._iv = iv_default(enc));
        let additionalData;
        let protectedHeader;
        let aadMember;
        if (this._protectedHeader) {
          protectedHeader = encoder.encode(encode(JSON.stringify(this._protectedHeader)));
        } else {
          protectedHeader = encoder.encode("");
        }
        if (this._aad) {
          aadMember = encode(this._aad);
          additionalData = concat(protectedHeader, encoder.encode("."), encoder.encode(aadMember));
        } else {
          additionalData = protectedHeader;
        }
        let ciphertext;
        let tag;
        if (joseHeader.zip === "DEF") {
          const deflated = await ((options === null || options === void 0 ? void 0 : options.deflateRaw) || deflate)(this._plaintext);
          ({ ciphertext, tag } = await encrypt_default(enc, deflated, cek, this._iv, additionalData));
        } else {
          ;
          ({ ciphertext, tag } = await encrypt_default(enc, this._plaintext, cek, this._iv, additionalData));
        }
        const jwe = {
          ciphertext: encode(ciphertext),
          iv: encode(this._iv),
          tag: encode(tag)
        };
        if (encryptedKey) {
          jwe.encrypted_key = encode(encryptedKey);
        }
        if (aadMember) {
          jwe.aad = aadMember;
        }
        if (this._protectedHeader) {
          jwe.protected = decoder.decode(protectedHeader);
        }
        if (this._sharedUnprotectedHeader) {
          jwe.unprotected = this._sharedUnprotectedHeader;
        }
        if (this._unprotectedHeader) {
          jwe.header = this._unprotectedHeader;
        }
        return jwe;
      }
    };
  }
});

// node_modules/jose/dist/browser/jwe/general/encrypt.js
var IndividualRecipient, GeneralEncrypt;
var init_encrypt3 = __esm({
  "node_modules/jose/dist/browser/jwe/general/encrypt.js"() {
    init_encrypt2();
    init_errors();
    init_cek();
    init_is_disjoint();
    init_encrypt_key_management();
    init_base64url();
    init_validate_crit();
    IndividualRecipient = class {
      constructor(enc, key, options) {
        this.parent = enc;
        this.key = key;
        this.options = options;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
      }
      addRecipient(...args) {
        return this.parent.addRecipient(...args);
      }
      encrypt(...args) {
        return this.parent.encrypt(...args);
      }
      done() {
        return this.parent;
      }
    };
    GeneralEncrypt = class {
      constructor(plaintext) {
        this._recipients = [];
        this._plaintext = plaintext;
      }
      addRecipient(key, options) {
        const recipient = new IndividualRecipient(this, key, { crit: options === null || options === void 0 ? void 0 : options.crit });
        this._recipients.push(recipient);
        return recipient;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = sharedUnprotectedHeader;
        return this;
      }
      setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
      }
      async encrypt(options) {
        var _a, _b, _c;
        if (!this._recipients.length) {
          throw new JWEInvalid("at least one recipient must be added");
        }
        options = { deflateRaw: options === null || options === void 0 ? void 0 : options.deflateRaw };
        if (this._recipients.length === 1) {
          const [recipient] = this._recipients;
          const flattened = await new FlattenedEncrypt(this._plaintext).setAdditionalAuthenticatedData(this._aad).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).encrypt(recipient.key, { ...recipient.options, ...options });
          let jwe2 = {
            ciphertext: flattened.ciphertext,
            iv: flattened.iv,
            recipients: [{}],
            tag: flattened.tag
          };
          if (flattened.aad)
            jwe2.aad = flattened.aad;
          if (flattened.protected)
            jwe2.protected = flattened.protected;
          if (flattened.unprotected)
            jwe2.unprotected = flattened.unprotected;
          if (flattened.encrypted_key)
            jwe2.recipients[0].encrypted_key = flattened.encrypted_key;
          if (flattened.header)
            jwe2.recipients[0].header = flattened.header;
          return jwe2;
        }
        let enc;
        for (let i = 0; i < this._recipients.length; i++) {
          const recipient = this._recipients[i];
          if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader, recipient.unprotectedHeader)) {
            throw new JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
          }
          const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...recipient.unprotectedHeader
          };
          const { alg } = joseHeader;
          if (typeof alg !== "string" || !alg) {
            throw new JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
          }
          if (alg === "dir" || alg === "ECDH-ES") {
            throw new JWEInvalid('"dir" and "ECDH-ES" alg may only be used with a single recipient');
          }
          if (typeof joseHeader.enc !== "string" || !joseHeader.enc) {
            throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
          }
          if (!enc) {
            enc = joseHeader.enc;
          } else if (enc !== joseHeader.enc) {
            throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients');
          }
          validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), recipient.options.crit, this._protectedHeader, joseHeader);
          if (joseHeader.zip !== void 0) {
            if (!this._protectedHeader || !this._protectedHeader.zip) {
              throw new JWEInvalid('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
            }
          }
        }
        const cek = cek_default(enc);
        let jwe = {
          ciphertext: "",
          iv: "",
          recipients: [],
          tag: ""
        };
        for (let i = 0; i < this._recipients.length; i++) {
          const recipient = this._recipients[i];
          const target = {};
          jwe.recipients.push(target);
          const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...recipient.unprotectedHeader
          };
          const p2c = joseHeader.alg.startsWith("PBES2") ? 2048 + i : void 0;
          if (i === 0) {
            const flattened = await new FlattenedEncrypt(this._plaintext).setAdditionalAuthenticatedData(this._aad).setContentEncryptionKey(cek).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).setKeyManagementParameters({ p2c }).encrypt(recipient.key, {
              ...recipient.options,
              ...options,
              [unprotected]: true
            });
            jwe.ciphertext = flattened.ciphertext;
            jwe.iv = flattened.iv;
            jwe.tag = flattened.tag;
            if (flattened.aad)
              jwe.aad = flattened.aad;
            if (flattened.protected)
              jwe.protected = flattened.protected;
            if (flattened.unprotected)
              jwe.unprotected = flattened.unprotected;
            target.encrypted_key = flattened.encrypted_key;
            if (flattened.header)
              target.header = flattened.header;
            continue;
          }
          const { encryptedKey, parameters } = await encrypt_key_management_default(((_a = recipient.unprotectedHeader) === null || _a === void 0 ? void 0 : _a.alg) || ((_b = this._protectedHeader) === null || _b === void 0 ? void 0 : _b.alg) || ((_c = this._unprotectedHeader) === null || _c === void 0 ? void 0 : _c.alg), enc, recipient.key, cek, { p2c });
          target.encrypted_key = encode(encryptedKey);
          if (recipient.unprotectedHeader || parameters)
            target.header = { ...recipient.unprotectedHeader, ...parameters };
        }
        return jwe;
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/subtle_dsa.js
function subtleDsa(alg, algorithm) {
  const hash = `SHA-${alg.slice(-3)}`;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return { hash, name: "RSA-PSS", saltLength: alg.slice(-3) >> 3 };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash, name: "ECDSA", namedCurve: algorithm.namedCurve };
    case (isCloudflareWorkers() && "EdDSA"):
      const { namedCurve } = algorithm;
      return { name: namedCurve, namedCurve };
    case "EdDSA":
      return { name: algorithm.name };
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
}
var init_subtle_dsa = __esm({
  "node_modules/jose/dist/browser/runtime/subtle_dsa.js"() {
    init_env();
    init_errors();
  }
});

// node_modules/jose/dist/browser/runtime/get_sign_verify_key.js
function getCryptoKey3(alg, key, usage) {
  if (isCryptoKey(key)) {
    checkSigCryptoKey(key, alg, usage);
    return key;
  }
  if (key instanceof Uint8Array) {
    if (!alg.startsWith("HS")) {
      throw new TypeError(invalid_key_input_default(key, ...types));
    }
    return webcrypto_default.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}
var init_get_sign_verify_key = __esm({
  "node_modules/jose/dist/browser/runtime/get_sign_verify_key.js"() {
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
  }
});

// node_modules/jose/dist/browser/runtime/verify.js
var verify, verify_default;
var init_verify = __esm({
  "node_modules/jose/dist/browser/runtime/verify.js"() {
    init_subtle_dsa();
    init_webcrypto();
    init_check_key_length();
    init_get_sign_verify_key();
    verify = async (alg, key, signature, data) => {
      const cryptoKey = await getCryptoKey3(alg, key, "verify");
      check_key_length_default(alg, cryptoKey);
      const algorithm = subtleDsa(alg, cryptoKey.algorithm);
      try {
        return await webcrypto_default.subtle.verify(algorithm, cryptoKey, signature, data);
      } catch (_a) {
        return false;
      }
    };
    verify_default = verify;
  }
});

// node_modules/jose/dist/browser/jws/flattened/verify.js
async function flattenedVerify(jws, key, options) {
  var _a;
  if (!isObject(jws)) {
    throw new JWSInvalid("Flattened JWS must be an object");
  }
  if (jws.protected === void 0 && jws.header === void 0) {
    throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
  }
  if (jws.protected !== void 0 && typeof jws.protected !== "string") {
    throw new JWSInvalid("JWS Protected Header incorrect type");
  }
  if (jws.payload === void 0) {
    throw new JWSInvalid("JWS Payload missing");
  }
  if (typeof jws.signature !== "string") {
    throw new JWSInvalid("JWS Signature missing or incorrect type");
  }
  if (jws.header !== void 0 && !isObject(jws.header)) {
    throw new JWSInvalid("JWS Unprotected Header incorrect type");
  }
  let parsedProt = {};
  if (jws.protected) {
    try {
      const protectedHeader = decode(jws.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader));
    } catch (_b) {
      throw new JWSInvalid("JWS Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jws.header)) {
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jws.header
  };
  const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options === null || options === void 0 ? void 0 : options.crit, parsedProt, joseHeader);
  let b64 = true;
  if (extensions.has("b64")) {
    b64 = parsedProt.b64;
    if (typeof b64 !== "boolean") {
      throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
  }
  const { alg } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  }
  const algorithms = options && validate_algorithms_default("algorithms", options.algorithms);
  if (algorithms && !algorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter not allowed');
  }
  if (b64) {
    if (typeof jws.payload !== "string") {
      throw new JWSInvalid("JWS Payload must be a string");
    }
  } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
    throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jws);
    resolvedKey = true;
  }
  check_key_type_default(alg, key, "verify");
  const data = concat(encoder.encode((_a = jws.protected) !== null && _a !== void 0 ? _a : ""), encoder.encode("."), typeof jws.payload === "string" ? encoder.encode(jws.payload) : jws.payload);
  const signature = decode(jws.signature);
  const verified = await verify_default(alg, key, signature, data);
  if (!verified) {
    throw new JWSSignatureVerificationFailed();
  }
  let payload;
  if (b64) {
    payload = decode(jws.payload);
  } else if (typeof jws.payload === "string") {
    payload = encoder.encode(jws.payload);
  } else {
    payload = jws.payload;
  }
  const result = { payload };
  if (jws.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jws.header !== void 0) {
    result.unprotectedHeader = jws.header;
  }
  if (resolvedKey) {
    return { ...result, key };
  }
  return result;
}
var init_verify2 = __esm({
  "node_modules/jose/dist/browser/jws/flattened/verify.js"() {
    init_base64url();
    init_verify();
    init_errors();
    init_buffer_utils();
    init_is_disjoint();
    init_is_object();
    init_check_key_type();
    init_validate_crit();
    init_validate_algorithms();
  }
});

// node_modules/jose/dist/browser/jws/compact/verify.js
async function compactVerify(jws, key, options) {
  if (jws instanceof Uint8Array) {
    jws = decoder.decode(jws);
  }
  if (typeof jws !== "string") {
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3) {
    throw new JWSInvalid("Invalid Compact JWS");
  }
  const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
  const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}
var init_verify3 = __esm({
  "node_modules/jose/dist/browser/jws/compact/verify.js"() {
    init_verify2();
    init_errors();
    init_buffer_utils();
  }
});

// node_modules/jose/dist/browser/jws/general/verify.js
async function generalVerify(jws, key, options) {
  if (!isObject(jws)) {
    throw new JWSInvalid("General JWS must be an object");
  }
  if (!Array.isArray(jws.signatures) || !jws.signatures.every(isObject)) {
    throw new JWSInvalid("JWS Signatures missing or incorrect type");
  }
  for (const signature of jws.signatures) {
    try {
      return await flattenedVerify({
        header: signature.header,
        payload: jws.payload,
        protected: signature.protected,
        signature: signature.signature
      }, key, options);
    } catch (_a) {
    }
  }
  throw new JWSSignatureVerificationFailed();
}
var init_verify4 = __esm({
  "node_modules/jose/dist/browser/jws/general/verify.js"() {
    init_verify2();
    init_errors();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/lib/epoch.js
var epoch_default;
var init_epoch = __esm({
  "node_modules/jose/dist/browser/lib/epoch.js"() {
    epoch_default = (date) => Math.floor(date.getTime() / 1e3);
  }
});

// node_modules/jose/dist/browser/lib/secs.js
var minute, hour, day, week, year, REGEX, secs_default;
var init_secs = __esm({
  "node_modules/jose/dist/browser/lib/secs.js"() {
    minute = 60;
    hour = minute * 60;
    day = hour * 24;
    week = day * 7;
    year = day * 365.25;
    REGEX = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
    secs_default = (str) => {
      const matched = REGEX.exec(str);
      if (!matched) {
        throw new TypeError("Invalid time period format");
      }
      const value = parseFloat(matched[1]);
      const unit = matched[2].toLowerCase();
      switch (unit) {
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
          return Math.round(value);
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
          return Math.round(value * minute);
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
          return Math.round(value * hour);
        case "day":
        case "days":
        case "d":
          return Math.round(value * day);
        case "week":
        case "weeks":
        case "w":
          return Math.round(value * week);
        default:
          return Math.round(value * year);
      }
    };
  }
});

// node_modules/jose/dist/browser/lib/jwt_claims_set.js
var normalizeTyp, checkAudiencePresence, jwt_claims_set_default;
var init_jwt_claims_set = __esm({
  "node_modules/jose/dist/browser/lib/jwt_claims_set.js"() {
    init_errors();
    init_buffer_utils();
    init_epoch();
    init_secs();
    init_is_object();
    normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, "");
    checkAudiencePresence = (audPayload, audOption) => {
      if (typeof audPayload === "string") {
        return audOption.includes(audPayload);
      }
      if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
      }
      return false;
    };
    jwt_claims_set_default = (protectedHeader, encodedPayload, options = {}) => {
      const { typ } = options;
      if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', "typ", "check_failed");
      }
      let payload;
      try {
        payload = JSON.parse(decoder.decode(encodedPayload));
      } catch (_a) {
      }
      if (!isObject(payload)) {
        throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
      }
      const { issuer } = options;
      if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
        throw new JWTClaimValidationFailed('unexpected "iss" claim value', "iss", "check_failed");
      }
      const { subject } = options;
      if (subject && payload.sub !== subject) {
        throw new JWTClaimValidationFailed('unexpected "sub" claim value', "sub", "check_failed");
      }
      const { audience } = options;
      if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
        throw new JWTClaimValidationFailed('unexpected "aud" claim value', "aud", "check_failed");
      }
      let tolerance;
      switch (typeof options.clockTolerance) {
        case "string":
          tolerance = secs_default(options.clockTolerance);
          break;
        case "number":
          tolerance = options.clockTolerance;
          break;
        case "undefined":
          tolerance = 0;
          break;
        default:
          throw new TypeError("Invalid clockTolerance option type");
      }
      const { currentDate } = options;
      const now = epoch_default(currentDate || new Date());
      if ((payload.iat !== void 0 || options.maxTokenAge) && typeof payload.iat !== "number") {
        throw new JWTClaimValidationFailed('"iat" claim must be a number', "iat", "invalid");
      }
      if (payload.nbf !== void 0) {
        if (typeof payload.nbf !== "number") {
          throw new JWTClaimValidationFailed('"nbf" claim must be a number', "nbf", "invalid");
        }
        if (payload.nbf > now + tolerance) {
          throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', "nbf", "check_failed");
        }
      }
      if (payload.exp !== void 0) {
        if (typeof payload.exp !== "number") {
          throw new JWTClaimValidationFailed('"exp" claim must be a number', "exp", "invalid");
        }
        if (payload.exp <= now - tolerance) {
          throw new JWTExpired('"exp" claim timestamp check failed', "exp", "check_failed");
        }
      }
      if (options.maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof options.maxTokenAge === "number" ? options.maxTokenAge : secs_default(options.maxTokenAge);
        if (age - tolerance > max) {
          throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
        }
        if (age < 0 - tolerance) {
          throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed");
        }
      }
      return payload;
    };
  }
});

// node_modules/jose/dist/browser/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  var _a;
  const verified = await compactVerify(jwt, key, options);
  if (((_a = verified.protectedHeader.crit) === null || _a === void 0 ? void 0 : _a.includes("b64")) && verified.protectedHeader.b64 === false) {
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  }
  const payload = jwt_claims_set_default(verified.protectedHeader, verified.payload, options);
  const result = { payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}
var init_verify5 = __esm({
  "node_modules/jose/dist/browser/jwt/verify.js"() {
    init_verify3();
    init_jwt_claims_set();
    init_errors();
  }
});

// node_modules/jose/dist/browser/jwt/decrypt.js
async function jwtDecrypt(jwt, key, options) {
  const decrypted = await compactDecrypt(jwt, key, options);
  const payload = jwt_claims_set_default(decrypted.protectedHeader, decrypted.plaintext, options);
  const { protectedHeader } = decrypted;
  if (protectedHeader.iss !== void 0 && protectedHeader.iss !== payload.iss) {
    throw new JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', "iss", "mismatch");
  }
  if (protectedHeader.sub !== void 0 && protectedHeader.sub !== payload.sub) {
    throw new JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', "sub", "mismatch");
  }
  if (protectedHeader.aud !== void 0 && JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)) {
    throw new JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', "aud", "mismatch");
  }
  const result = { payload, protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}
var init_decrypt5 = __esm({
  "node_modules/jose/dist/browser/jwt/decrypt.js"() {
    init_decrypt3();
    init_jwt_claims_set();
    init_errors();
  }
});

// node_modules/jose/dist/browser/jwe/compact/encrypt.js
var CompactEncrypt;
var init_encrypt4 = __esm({
  "node_modules/jose/dist/browser/jwe/compact/encrypt.js"() {
    init_encrypt2();
    CompactEncrypt = class {
      constructor(plaintext) {
        this._flattened = new FlattenedEncrypt(plaintext);
      }
      setContentEncryptionKey(cek) {
        this._flattened.setContentEncryptionKey(cek);
        return this;
      }
      setInitializationVector(iv) {
        this._flattened.setInitializationVector(iv);
        return this;
      }
      setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
      }
      setKeyManagementParameters(parameters) {
        this._flattened.setKeyManagementParameters(parameters);
        return this;
      }
      async encrypt(key, options) {
        const jwe = await this._flattened.encrypt(key, options);
        return [jwe.protected, jwe.encrypted_key, jwe.iv, jwe.ciphertext, jwe.tag].join(".");
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/sign.js
var sign, sign_default;
var init_sign = __esm({
  "node_modules/jose/dist/browser/runtime/sign.js"() {
    init_subtle_dsa();
    init_webcrypto();
    init_check_key_length();
    init_get_sign_verify_key();
    sign = async (alg, key, data) => {
      const cryptoKey = await getCryptoKey3(alg, key, "sign");
      check_key_length_default(alg, cryptoKey);
      const signature = await webcrypto_default.subtle.sign(subtleDsa(alg, cryptoKey.algorithm), cryptoKey, data);
      return new Uint8Array(signature);
    };
    sign_default = sign;
  }
});

// node_modules/jose/dist/browser/jws/flattened/sign.js
var FlattenedSign;
var init_sign2 = __esm({
  "node_modules/jose/dist/browser/jws/flattened/sign.js"() {
    init_base64url();
    init_sign();
    init_is_disjoint();
    init_errors();
    init_buffer_utils();
    init_check_key_type();
    init_validate_crit();
    FlattenedSign = class {
      constructor(payload) {
        if (!(payload instanceof Uint8Array)) {
          throw new TypeError("payload must be an instance of Uint8Array");
        }
        this._payload = payload;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
      }
      async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
          throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
        }
        if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader)) {
          throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
        }
        const joseHeader = {
          ...this._protectedHeader,
          ...this._unprotectedHeader
        };
        const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options === null || options === void 0 ? void 0 : options.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has("b64")) {
          b64 = this._protectedHeader.b64;
          if (typeof b64 !== "boolean") {
            throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
          }
        }
        const { alg } = joseHeader;
        if (typeof alg !== "string" || !alg) {
          throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        check_key_type_default(alg, key, "sign");
        let payload = this._payload;
        if (b64) {
          payload = encoder.encode(encode(payload));
        }
        let protectedHeader;
        if (this._protectedHeader) {
          protectedHeader = encoder.encode(encode(JSON.stringify(this._protectedHeader)));
        } else {
          protectedHeader = encoder.encode("");
        }
        const data = concat(protectedHeader, encoder.encode("."), payload);
        const signature = await sign_default(alg, key, data);
        const jws = {
          signature: encode(signature),
          payload: ""
        };
        if (b64) {
          jws.payload = decoder.decode(payload);
        }
        if (this._unprotectedHeader) {
          jws.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
          jws.protected = decoder.decode(protectedHeader);
        }
        return jws;
      }
    };
  }
});

// node_modules/jose/dist/browser/jws/compact/sign.js
var CompactSign;
var init_sign3 = __esm({
  "node_modules/jose/dist/browser/jws/compact/sign.js"() {
    init_sign2();
    CompactSign = class {
      constructor(payload) {
        this._flattened = new FlattenedSign(payload);
      }
      setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
      }
      async sign(key, options) {
        const jws = await this._flattened.sign(key, options);
        if (jws.payload === void 0) {
          throw new TypeError("use the flattened module for creating JWS with b64: false");
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
      }
    };
  }
});

// node_modules/jose/dist/browser/jws/general/sign.js
var IndividualSignature, GeneralSign;
var init_sign4 = __esm({
  "node_modules/jose/dist/browser/jws/general/sign.js"() {
    init_sign2();
    init_errors();
    IndividualSignature = class {
      constructor(sig, key, options) {
        this.parent = sig;
        this.key = key;
        this.options = options;
      }
      setProtectedHeader(protectedHeader) {
        if (this.protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this.protectedHeader = protectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
      }
      addSignature(...args) {
        return this.parent.addSignature(...args);
      }
      sign(...args) {
        return this.parent.sign(...args);
      }
      done() {
        return this.parent;
      }
    };
    GeneralSign = class {
      constructor(payload) {
        this._signatures = [];
        this._payload = payload;
      }
      addSignature(key, options) {
        const signature = new IndividualSignature(this, key, options);
        this._signatures.push(signature);
        return signature;
      }
      async sign() {
        if (!this._signatures.length) {
          throw new JWSInvalid("at least one signature must be added");
        }
        const jws = {
          signatures: [],
          payload: ""
        };
        for (let i = 0; i < this._signatures.length; i++) {
          const signature = this._signatures[i];
          const flattened = new FlattenedSign(this._payload);
          flattened.setProtectedHeader(signature.protectedHeader);
          flattened.setUnprotectedHeader(signature.unprotectedHeader);
          const { payload, ...rest } = await flattened.sign(signature.key, signature.options);
          if (i === 0) {
            jws.payload = payload;
          } else if (jws.payload !== payload) {
            throw new JWSInvalid("inconsistent use of JWS Unencoded Payload Option (RFC7797)");
          }
          jws.signatures.push(rest);
        }
        return jws;
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/produce.js
var ProduceJWT;
var init_produce = __esm({
  "node_modules/jose/dist/browser/jwt/produce.js"() {
    init_epoch();
    init_is_object();
    init_secs();
    ProduceJWT = class {
      constructor(payload) {
        if (!isObject(payload)) {
          throw new TypeError("JWT Claims Set MUST be an object");
        }
        this._payload = payload;
      }
      setIssuer(issuer) {
        this._payload = { ...this._payload, iss: issuer };
        return this;
      }
      setSubject(subject) {
        this._payload = { ...this._payload, sub: subject };
        return this;
      }
      setAudience(audience) {
        this._payload = { ...this._payload, aud: audience };
        return this;
      }
      setJti(jwtId) {
        this._payload = { ...this._payload, jti: jwtId };
        return this;
      }
      setNotBefore(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, nbf: input };
        } else {
          this._payload = { ...this._payload, nbf: epoch_default(new Date()) + secs_default(input) };
        }
        return this;
      }
      setExpirationTime(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, exp: input };
        } else {
          this._payload = { ...this._payload, exp: epoch_default(new Date()) + secs_default(input) };
        }
        return this;
      }
      setIssuedAt(input) {
        if (typeof input === "undefined") {
          this._payload = { ...this._payload, iat: epoch_default(new Date()) };
        } else {
          this._payload = { ...this._payload, iat: input };
        }
        return this;
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/sign.js
var SignJWT;
var init_sign5 = __esm({
  "node_modules/jose/dist/browser/jwt/sign.js"() {
    init_sign3();
    init_errors();
    init_buffer_utils();
    init_produce();
    SignJWT = class extends ProduceJWT {
      setProtectedHeader(protectedHeader) {
        this._protectedHeader = protectedHeader;
        return this;
      }
      async sign(key, options) {
        var _a;
        const sig = new CompactSign(encoder.encode(JSON.stringify(this._payload)));
        sig.setProtectedHeader(this._protectedHeader);
        if (Array.isArray((_a = this._protectedHeader) === null || _a === void 0 ? void 0 : _a.crit) && this._protectedHeader.crit.includes("b64") && this._protectedHeader.b64 === false) {
          throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
        }
        return sig.sign(key, options);
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/encrypt.js
var EncryptJWT;
var init_encrypt5 = __esm({
  "node_modules/jose/dist/browser/jwt/encrypt.js"() {
    init_encrypt4();
    init_buffer_utils();
    init_produce();
    EncryptJWT = class extends ProduceJWT {
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      replicateIssuerAsHeader() {
        this._replicateIssuerAsHeader = true;
        return this;
      }
      replicateSubjectAsHeader() {
        this._replicateSubjectAsHeader = true;
        return this;
      }
      replicateAudienceAsHeader() {
        this._replicateAudienceAsHeader = true;
        return this;
      }
      async encrypt(key, options) {
        const enc = new CompactEncrypt(encoder.encode(JSON.stringify(this._payload)));
        if (this._replicateIssuerAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, iss: this._payload.iss };
        }
        if (this._replicateSubjectAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, sub: this._payload.sub };
        }
        if (this._replicateAudienceAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, aud: this._payload.aud };
        }
        enc.setProtectedHeader(this._protectedHeader);
        if (this._iv) {
          enc.setInitializationVector(this._iv);
        }
        if (this._cek) {
          enc.setContentEncryptionKey(this._cek);
        }
        if (this._keyManagementParameters) {
          enc.setKeyManagementParameters(this._keyManagementParameters);
        }
        return enc.encrypt(key, options);
      }
    };
  }
});

// node_modules/jose/dist/browser/jwk/thumbprint.js
async function calculateJwkThumbprint(jwk, digestAlgorithm) {
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  digestAlgorithm !== null && digestAlgorithm !== void 0 ? digestAlgorithm : digestAlgorithm = "sha256";
  if (digestAlgorithm !== "sha256" && digestAlgorithm !== "sha384" && digestAlgorithm !== "sha512") {
    throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
  }
  let components;
  switch (jwk.kty) {
    case "EC":
      check(jwk.crv, '"crv" (Curve) Parameter');
      check(jwk.x, '"x" (X Coordinate) Parameter');
      check(jwk.y, '"y" (Y Coordinate) Parameter');
      components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x, y: jwk.y };
      break;
    case "OKP":
      check(jwk.crv, '"crv" (Subtype of Key Pair) Parameter');
      check(jwk.x, '"x" (Public Key) Parameter');
      components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x };
      break;
    case "RSA":
      check(jwk.e, '"e" (Exponent) Parameter');
      check(jwk.n, '"n" (Modulus) Parameter');
      components = { e: jwk.e, kty: jwk.kty, n: jwk.n };
      break;
    case "oct":
      check(jwk.k, '"k" (Key Value) Parameter');
      components = { k: jwk.k, kty: jwk.kty };
      break;
    default:
      throw new JOSENotSupported('"kty" (Key Type) Parameter missing or unsupported');
  }
  const data = encoder.encode(JSON.stringify(components));
  return encode(await digest_default(digestAlgorithm, data));
}
async function calculateJwkThumbprintUri(jwk, digestAlgorithm) {
  digestAlgorithm !== null && digestAlgorithm !== void 0 ? digestAlgorithm : digestAlgorithm = "sha256";
  const thumbprint = await calculateJwkThumbprint(jwk, digestAlgorithm);
  return `urn:ietf:params:oauth:jwk-thumbprint:sha-${digestAlgorithm.slice(-3)}:${thumbprint}`;
}
var check;
var init_thumbprint = __esm({
  "node_modules/jose/dist/browser/jwk/thumbprint.js"() {
    init_digest();
    init_base64url();
    init_errors();
    init_buffer_utils();
    init_is_object();
    check = (value, description) => {
      if (typeof value !== "string" || !value) {
        throw new JWKInvalid(`${description} missing or invalid`);
      }
    };
  }
});

// node_modules/jose/dist/browser/jwk/embedded.js
async function EmbeddedJWK(protectedHeader, token) {
  const joseHeader = {
    ...protectedHeader,
    ...token.header
  };
  if (!isObject(joseHeader.jwk)) {
    throw new JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
  }
  const key = await importJWK({ ...joseHeader.jwk, ext: true }, joseHeader.alg, true);
  if (key instanceof Uint8Array || key.type !== "public") {
    throw new JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a public key');
  }
  return key;
}
var init_embedded = __esm({
  "node_modules/jose/dist/browser/jwk/embedded.js"() {
    init_import();
    init_is_object();
    init_errors();
  }
});

// node_modules/jose/dist/browser/jwks/local.js
function getKtyFromAlg(alg) {
  switch (typeof alg === "string" && alg.slice(0, 2)) {
    case "RS":
    case "PS":
      return "RSA";
    case "ES":
      return "EC";
    case "Ed":
      return "OKP";
    default:
      throw new JOSENotSupported('Unsupported "alg" value for a JSON Web Key Set');
  }
}
function isJWKSLike(jwks) {
  return jwks && typeof jwks === "object" && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
}
function isJWKLike(key) {
  return isObject(key);
}
function clone(obj) {
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}
function createLocalJWKSet(jwks) {
  return LocalJWKSet.prototype.getKey.bind(new LocalJWKSet(jwks));
}
var LocalJWKSet;
var init_local = __esm({
  "node_modules/jose/dist/browser/jwks/local.js"() {
    init_import();
    init_errors();
    init_is_object();
    LocalJWKSet = class {
      constructor(jwks) {
        this._cached = /* @__PURE__ */ new WeakMap();
        if (!isJWKSLike(jwks)) {
          throw new JWKSInvalid("JSON Web Key Set malformed");
        }
        this._jwks = clone(jwks);
      }
      async getKey(protectedHeader, token) {
        const { alg, kid } = { ...protectedHeader, ...token.header };
        const kty = getKtyFromAlg(alg);
        const candidates = this._jwks.keys.filter((jwk2) => {
          let candidate = kty === jwk2.kty;
          if (candidate && typeof kid === "string") {
            candidate = kid === jwk2.kid;
          }
          if (candidate && typeof jwk2.alg === "string") {
            candidate = alg === jwk2.alg;
          }
          if (candidate && typeof jwk2.use === "string") {
            candidate = jwk2.use === "sig";
          }
          if (candidate && Array.isArray(jwk2.key_ops)) {
            candidate = jwk2.key_ops.includes("verify");
          }
          if (candidate && alg === "EdDSA") {
            candidate = jwk2.crv === "Ed25519" || jwk2.crv === "Ed448";
          }
          if (candidate) {
            switch (alg) {
              case "ES256":
                candidate = jwk2.crv === "P-256";
                break;
              case "ES256K":
                candidate = jwk2.crv === "secp256k1";
                break;
              case "ES384":
                candidate = jwk2.crv === "P-384";
                break;
              case "ES512":
                candidate = jwk2.crv === "P-521";
                break;
            }
          }
          return candidate;
        });
        const { 0: jwk, length } = candidates;
        if (length === 0) {
          throw new JWKSNoMatchingKey();
        } else if (length !== 1) {
          throw new JWKSMultipleMatchingKeys();
        }
        const cached = this._cached.get(jwk) || this._cached.set(jwk, {}).get(jwk);
        if (cached[alg] === void 0) {
          const keyObject = await importJWK({ ...jwk, ext: true }, alg);
          if (keyObject instanceof Uint8Array || keyObject.type !== "public") {
            throw new JWKSInvalid("JSON Web Key Set members must be public keys");
          }
          cached[alg] = keyObject;
        }
        return cached[alg];
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/fetch_jwks.js
var fetchJwks, fetch_jwks_default;
var init_fetch_jwks = __esm({
  "node_modules/jose/dist/browser/runtime/fetch_jwks.js"() {
    init_errors();
    fetchJwks = async (url, timeout, options) => {
      let controller;
      let id;
      let timedOut = false;
      if (typeof AbortController === "function") {
        controller = new AbortController();
        id = setTimeout(() => {
          timedOut = true;
          controller.abort();
        }, timeout);
      }
      const response = await fetch(url.href, {
        signal: controller ? controller.signal : void 0,
        redirect: "manual",
        headers: options.headers
      }).catch((err) => {
        if (timedOut)
          throw new JWKSTimeout();
        throw err;
      });
      if (id !== void 0)
        clearTimeout(id);
      if (response.status !== 200) {
        throw new JOSEError("Expected 200 OK from the JSON Web Key Set HTTP response");
      }
      try {
        return await response.json();
      } catch (_a) {
        throw new JOSEError("Failed to parse the JSON Web Key Set HTTP response as JSON");
      }
    };
    fetch_jwks_default = fetchJwks;
  }
});

// node_modules/jose/dist/browser/jwks/remote.js
function createRemoteJWKSet(url, options) {
  return RemoteJWKSet.prototype.getKey.bind(new RemoteJWKSet(url, options));
}
var RemoteJWKSet;
var init_remote = __esm({
  "node_modules/jose/dist/browser/jwks/remote.js"() {
    init_fetch_jwks();
    init_env();
    init_errors();
    init_local();
    RemoteJWKSet = class extends LocalJWKSet {
      constructor(url, options) {
        super({ keys: [] });
        this._jwks = void 0;
        if (!(url instanceof URL)) {
          throw new TypeError("url must be an instance of URL");
        }
        this._url = new URL(url.href);
        this._options = { agent: options === null || options === void 0 ? void 0 : options.agent, headers: options === null || options === void 0 ? void 0 : options.headers };
        this._timeoutDuration = typeof (options === null || options === void 0 ? void 0 : options.timeoutDuration) === "number" ? options === null || options === void 0 ? void 0 : options.timeoutDuration : 5e3;
        this._cooldownDuration = typeof (options === null || options === void 0 ? void 0 : options.cooldownDuration) === "number" ? options === null || options === void 0 ? void 0 : options.cooldownDuration : 3e4;
        this._cacheMaxAge = typeof (options === null || options === void 0 ? void 0 : options.cacheMaxAge) === "number" ? options === null || options === void 0 ? void 0 : options.cacheMaxAge : 6e5;
      }
      coolingDown() {
        return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cooldownDuration : false;
      }
      fresh() {
        return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cacheMaxAge : false;
      }
      async getKey(protectedHeader, token) {
        if (!this._jwks || !this.fresh()) {
          await this.reload();
        }
        try {
          return await super.getKey(protectedHeader, token);
        } catch (err) {
          if (err instanceof JWKSNoMatchingKey) {
            if (this.coolingDown() === false) {
              await this.reload();
              return super.getKey(protectedHeader, token);
            }
          }
          throw err;
        }
      }
      async reload() {
        if (this._pendingFetch && isCloudflareWorkers()) {
          return new Promise((resolve) => {
            const isDone = () => {
              if (this._pendingFetch === void 0) {
                resolve();
              } else {
                setTimeout(isDone, 5);
              }
            };
            isDone();
          });
        }
        if (!this._pendingFetch) {
          this._pendingFetch = fetch_jwks_default(this._url, this._timeoutDuration, this._options).then((json) => {
            if (!isJWKSLike(json)) {
              throw new JWKSInvalid("JSON Web Key Set malformed");
            }
            this._jwks = { keys: json.keys };
            this._jwksTimestamp = Date.now();
            this._pendingFetch = void 0;
          }).catch((err) => {
            this._pendingFetch = void 0;
            throw err;
          });
        }
        await this._pendingFetch;
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/unsecured.js
var UnsecuredJWT;
var init_unsecured = __esm({
  "node_modules/jose/dist/browser/jwt/unsecured.js"() {
    init_base64url();
    init_buffer_utils();
    init_errors();
    init_jwt_claims_set();
    init_produce();
    UnsecuredJWT = class extends ProduceJWT {
      encode() {
        const header = encode(JSON.stringify({ alg: "none" }));
        const payload = encode(JSON.stringify(this._payload));
        return `${header}.${payload}.`;
      }
      static decode(jwt, options) {
        if (typeof jwt !== "string") {
          throw new JWTInvalid("Unsecured JWT must be a string");
        }
        const { 0: encodedHeader, 1: encodedPayload, 2: signature, length } = jwt.split(".");
        if (length !== 3 || signature !== "") {
          throw new JWTInvalid("Invalid Unsecured JWT");
        }
        let header;
        try {
          header = JSON.parse(decoder.decode(decode(encodedHeader)));
          if (header.alg !== "none")
            throw new Error();
        } catch (_a) {
          throw new JWTInvalid("Invalid Unsecured JWT");
        }
        const payload = jwt_claims_set_default(header, decode(encodedPayload), options);
        return { payload, header };
      }
    };
  }
});

// node_modules/jose/dist/browser/util/base64url.js
var base64url_exports2 = {};
__export(base64url_exports2, {
  decode: () => decode2,
  encode: () => encode2
});
var encode2, decode2;
var init_base64url2 = __esm({
  "node_modules/jose/dist/browser/util/base64url.js"() {
    init_base64url();
    encode2 = encode;
    decode2 = decode;
  }
});

// node_modules/jose/dist/browser/util/decode_protected_header.js
function decodeProtectedHeader(token) {
  let protectedB64u;
  if (typeof token === "string") {
    const parts = token.split(".");
    if (parts.length === 3 || parts.length === 5) {
      ;
      [protectedB64u] = parts;
    }
  } else if (typeof token === "object" && token) {
    if ("protected" in token) {
      protectedB64u = token.protected;
    } else {
      throw new TypeError("Token does not contain a Protected Header");
    }
  }
  try {
    if (typeof protectedB64u !== "string" || !protectedB64u) {
      throw new Error();
    }
    const result = JSON.parse(decoder.decode(decode2(protectedB64u)));
    if (!isObject(result)) {
      throw new Error();
    }
    return result;
  } catch (_a) {
    throw new TypeError("Invalid Token or Protected Header formatting");
  }
}
var init_decode_protected_header = __esm({
  "node_modules/jose/dist/browser/util/decode_protected_header.js"() {
    init_base64url2();
    init_buffer_utils();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/util/decode_jwt.js
function decodeJwt(jwt) {
  if (typeof jwt !== "string")
    throw new JWTInvalid("JWTs must use Compact JWS serialization, JWT must be a string");
  const { 1: payload, length } = jwt.split(".");
  if (length === 5)
    throw new JWTInvalid("Only JWTs using Compact JWS serialization can be decoded");
  if (length !== 3)
    throw new JWTInvalid("Invalid JWT");
  if (!payload)
    throw new JWTInvalid("JWTs must contain a payload");
  let decoded;
  try {
    decoded = decode2(payload);
  } catch (_a) {
    throw new JWTInvalid("Failed to parse the base64url encoded payload");
  }
  let result;
  try {
    result = JSON.parse(decoder.decode(decoded));
  } catch (_b) {
    throw new JWTInvalid("Failed to parse the decoded payload as JSON");
  }
  if (!isObject(result))
    throw new JWTInvalid("Invalid JWT Claims Set");
  return result;
}
var init_decode_jwt = __esm({
  "node_modules/jose/dist/browser/util/decode_jwt.js"() {
    init_base64url2();
    init_buffer_utils();
    init_is_object();
    init_errors();
  }
});

// node_modules/jose/dist/browser/runtime/generate.js
async function generateSecret(alg, options) {
  var _a;
  let length;
  let algorithm;
  let keyUsages;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      length = parseInt(alg.slice(-3), 10);
      algorithm = { name: "HMAC", hash: `SHA-${length}`, length };
      keyUsages = ["sign", "verify"];
      break;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      length = parseInt(alg.slice(-3), 10);
      return random_default(new Uint8Array(length >> 3));
    case "A128KW":
    case "A192KW":
    case "A256KW":
      length = parseInt(alg.slice(1, 4), 10);
      algorithm = { name: "AES-KW", length };
      keyUsages = ["wrapKey", "unwrapKey"];
      break;
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW":
    case "A128GCM":
    case "A192GCM":
    case "A256GCM":
      length = parseInt(alg.slice(1, 4), 10);
      algorithm = { name: "AES-GCM", length };
      keyUsages = ["encrypt", "decrypt"];
      break;
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
  }
  return webcrypto_default.subtle.generateKey(algorithm, (_a = options === null || options === void 0 ? void 0 : options.extractable) !== null && _a !== void 0 ? _a : false, keyUsages);
}
function getModulusLengthOption(options) {
  var _a;
  const modulusLength = (_a = options === null || options === void 0 ? void 0 : options.modulusLength) !== null && _a !== void 0 ? _a : 2048;
  if (typeof modulusLength !== "number" || modulusLength < 2048) {
    throw new JOSENotSupported("Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used");
  }
  return modulusLength;
}
async function generateKeyPair(alg, options) {
  var _a, _b, _c;
  let algorithm;
  let keyUsages;
  switch (alg) {
    case "PS256":
    case "PS384":
    case "PS512":
      algorithm = {
        name: "RSA-PSS",
        hash: `SHA-${alg.slice(-3)}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: getModulusLengthOption(options)
      };
      keyUsages = ["sign", "verify"];
      break;
    case "RS256":
    case "RS384":
    case "RS512":
      algorithm = {
        name: "RSASSA-PKCS1-v1_5",
        hash: `SHA-${alg.slice(-3)}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: getModulusLengthOption(options)
      };
      keyUsages = ["sign", "verify"];
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      algorithm = {
        name: "RSA-OAEP",
        hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: getModulusLengthOption(options)
      };
      keyUsages = ["decrypt", "unwrapKey", "encrypt", "wrapKey"];
      break;
    case "ES256":
      algorithm = { name: "ECDSA", namedCurve: "P-256" };
      keyUsages = ["sign", "verify"];
      break;
    case "ES384":
      algorithm = { name: "ECDSA", namedCurve: "P-384" };
      keyUsages = ["sign", "verify"];
      break;
    case "ES512":
      algorithm = { name: "ECDSA", namedCurve: "P-521" };
      keyUsages = ["sign", "verify"];
      break;
    case (isCloudflareWorkers() && "EdDSA"):
      switch (options === null || options === void 0 ? void 0 : options.crv) {
        case void 0:
        case "Ed25519":
          algorithm = { name: "NODE-ED25519", namedCurve: "NODE-ED25519" };
          keyUsages = ["sign", "verify"];
          break;
        default:
          throw new JOSENotSupported("Invalid or unsupported crv option provided");
      }
      break;
    case "EdDSA":
      keyUsages = ["sign", "verify"];
      const crv = (_a = options === null || options === void 0 ? void 0 : options.crv) !== null && _a !== void 0 ? _a : "Ed25519";
      switch (crv) {
        case "Ed25519":
        case "Ed448":
          algorithm = { name: crv };
          break;
        default:
          throw new JOSENotSupported("Invalid or unsupported crv option provided");
      }
      break;
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      keyUsages = ["deriveKey", "deriveBits"];
      const crv2 = (_b = options === null || options === void 0 ? void 0 : options.crv) !== null && _b !== void 0 ? _b : "P-256";
      switch (crv2) {
        case "P-256":
        case "P-384":
        case "P-521": {
          algorithm = { name: "ECDH", namedCurve: crv2 };
          break;
        }
        case "X25519":
        case "X448":
          algorithm = { name: crv2 };
          break;
        default:
          throw new JOSENotSupported("Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448");
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
  }
  return webcrypto_default.subtle.generateKey(algorithm, (_c = options === null || options === void 0 ? void 0 : options.extractable) !== null && _c !== void 0 ? _c : false, keyUsages);
}
var init_generate = __esm({
  "node_modules/jose/dist/browser/runtime/generate.js"() {
    init_env();
    init_webcrypto();
    init_errors();
    init_random();
  }
});

// node_modules/jose/dist/browser/key/generate_key_pair.js
async function generateKeyPair2(alg, options) {
  return generateKeyPair(alg, options);
}
var init_generate_key_pair = __esm({
  "node_modules/jose/dist/browser/key/generate_key_pair.js"() {
    init_generate();
  }
});

// node_modules/jose/dist/browser/key/generate_secret.js
async function generateSecret2(alg, options) {
  return generateSecret(alg, options);
}
var init_generate_secret = __esm({
  "node_modules/jose/dist/browser/key/generate_secret.js"() {
    init_generate();
  }
});

// node_modules/jose/dist/browser/index.js
var browser_exports = {};
__export(browser_exports, {
  CompactEncrypt: () => CompactEncrypt,
  CompactSign: () => CompactSign,
  EmbeddedJWK: () => EmbeddedJWK,
  EncryptJWT: () => EncryptJWT,
  FlattenedEncrypt: () => FlattenedEncrypt,
  FlattenedSign: () => FlattenedSign,
  GeneralEncrypt: () => GeneralEncrypt,
  GeneralSign: () => GeneralSign,
  SignJWT: () => SignJWT,
  UnsecuredJWT: () => UnsecuredJWT,
  base64url: () => base64url_exports2,
  calculateJwkThumbprint: () => calculateJwkThumbprint,
  calculateJwkThumbprintUri: () => calculateJwkThumbprintUri,
  compactDecrypt: () => compactDecrypt,
  compactVerify: () => compactVerify,
  createLocalJWKSet: () => createLocalJWKSet,
  createRemoteJWKSet: () => createRemoteJWKSet,
  decodeJwt: () => decodeJwt,
  decodeProtectedHeader: () => decodeProtectedHeader,
  errors: () => errors_exports,
  exportJWK: () => exportJWK,
  exportPKCS8: () => exportPKCS8,
  exportSPKI: () => exportSPKI,
  flattenedDecrypt: () => flattenedDecrypt,
  flattenedVerify: () => flattenedVerify,
  generalDecrypt: () => generalDecrypt,
  generalVerify: () => generalVerify,
  generateKeyPair: () => generateKeyPair2,
  generateSecret: () => generateSecret2,
  importJWK: () => importJWK,
  importPKCS8: () => importPKCS8,
  importSPKI: () => importSPKI,
  importX509: () => importX509,
  jwtDecrypt: () => jwtDecrypt,
  jwtVerify: () => jwtVerify
});
var init_browser = __esm({
  "node_modules/jose/dist/browser/index.js"() {
    init_decrypt3();
    init_decrypt2();
    init_decrypt4();
    init_encrypt3();
    init_verify3();
    init_verify2();
    init_verify4();
    init_verify5();
    init_decrypt5();
    init_encrypt4();
    init_encrypt2();
    init_sign3();
    init_sign2();
    init_sign4();
    init_sign5();
    init_encrypt5();
    init_thumbprint();
    init_embedded();
    init_local();
    init_remote();
    init_unsecured();
    init_export();
    init_import();
    init_decode_protected_header();
    init_decode_jwt();
    init_errors();
    init_generate_key_pair();
    init_generate_secret();
    init_base64url2();
  }
});

// node_modules/@panva/hkdf/dist/web/runtime/hkdf.js
var getGlobal, hkdf_default;
var init_hkdf = __esm({
  "node_modules/@panva/hkdf/dist/web/runtime/hkdf.js"() {
    getGlobal = () => {
      if (typeof globalThis !== "undefined")
        return globalThis;
      if (typeof self !== "undefined")
        return self;
      if (typeof window !== "undefined")
        return window;
      throw new Error("unable to locate global object");
    };
    hkdf_default = async (digest2, ikm, salt, info, keylen) => {
      const { crypto: { subtle } } = getGlobal();
      return new Uint8Array(await subtle.deriveBits({
        name: "HKDF",
        hash: `SHA-${digest2.substr(3)}`,
        salt,
        info
      }, await subtle.importKey("raw", ikm, "HKDF", false, ["deriveBits"]), keylen << 3));
    };
  }
});

// node_modules/@panva/hkdf/dist/web/index.js
var web_exports = {};
__export(web_exports, {
  default: () => hkdf,
  hkdf: () => hkdf
});
function normalizeDigest(digest2) {
  switch (digest2) {
    case "sha256":
    case "sha384":
    case "sha512":
    case "sha1":
      return digest2;
    default:
      throw new TypeError('unsupported "digest" value');
  }
}
function normalizeUint8Array(input, label) {
  if (typeof input === "string")
    return new TextEncoder().encode(input);
  if (!(input instanceof Uint8Array))
    throw new TypeError(`"${label}"" must be an instance of Uint8Array or a string`);
  return input;
}
function normalizeIkm(input) {
  const ikm = normalizeUint8Array(input, "ikm");
  if (!ikm.byteLength)
    throw new TypeError(`"ikm" must be at least one byte in length`);
  return ikm;
}
function normalizeInfo(input) {
  const info = normalizeUint8Array(input, "info");
  if (info.byteLength > 1024) {
    throw TypeError('"info" must not contain more than 1024 bytes');
  }
  return info;
}
function normalizeKeylen(input, digest2) {
  if (typeof input !== "number" || !Number.isInteger(input) || input < 1) {
    throw new TypeError('"keylen" must be a positive integer');
  }
  const hashlen = parseInt(digest2.substr(3), 10) >> 3 || 20;
  if (input > 255 * hashlen) {
    throw new TypeError('"keylen" too large');
  }
  return input;
}
async function hkdf(digest2, ikm, salt, info, keylen) {
  return hkdf_default(normalizeDigest(digest2), normalizeIkm(ikm), normalizeUint8Array(salt, "salt"), normalizeInfo(info), normalizeKeylen(keylen, digest2));
}
var init_web = __esm({
  "node_modules/@panva/hkdf/dist/web/index.js"() {
    init_hkdf();
  }
});

// node_modules/uuid/dist/esm-browser/rng.js
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var getRandomValues, rnds8;
var init_rng = __esm({
  "node_modules/uuid/dist/esm-browser/rng.js"() {
    rnds8 = new Uint8Array(16);
  }
});

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default;
var init_regex = __esm({
  "node_modules/uuid/dist/esm-browser/regex.js"() {
    regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  }
});

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default;
var init_validate = __esm({
  "node_modules/uuid/dist/esm-browser/validate.js"() {
    init_regex();
    validate_default = validate;
  }
});

// node_modules/uuid/dist/esm-browser/stringify.js
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var byteToHex, i, stringify_default;
var init_stringify = __esm({
  "node_modules/uuid/dist/esm-browser/stringify.js"() {
    init_validate();
    byteToHex = [];
    for (i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).substr(1));
    }
    stringify_default = stringify;
  }
});

// node_modules/uuid/dist/esm-browser/v1.js
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();
    if (node == null) {
      node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
  }
  var msecs = options.msecs !== void 0 ? options.msecs : Date.now();
  var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
  if (dt < 0 && options.clockseq === void 0) {
    clockseq = clockseq + 1 & 16383;
  }
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
    nsecs = 0;
  }
  if (nsecs >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;
  msecs += 122192928e5;
  var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
  b[i++] = tl >>> 24 & 255;
  b[i++] = tl >>> 16 & 255;
  b[i++] = tl >>> 8 & 255;
  b[i++] = tl & 255;
  var tmh = msecs / 4294967296 * 1e4 & 268435455;
  b[i++] = tmh >>> 8 & 255;
  b[i++] = tmh & 255;
  b[i++] = tmh >>> 24 & 15 | 16;
  b[i++] = tmh >>> 16 & 255;
  b[i++] = clockseq >>> 8 | 128;
  b[i++] = clockseq & 255;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf || stringify_default(b);
}
var _nodeId, _clockseq, _lastMSecs, _lastNSecs, v1_default;
var init_v1 = __esm({
  "node_modules/uuid/dist/esm-browser/v1.js"() {
    init_rng();
    init_stringify();
    _lastMSecs = 0;
    _lastNSecs = 0;
    v1_default = v1;
  }
});

// node_modules/uuid/dist/esm-browser/parse.js
function parse2(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  var v;
  var arr = new Uint8Array(16);
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 255;
  arr[2] = v >>> 8 & 255;
  arr[3] = v & 255;
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 255;
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 255;
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 255;
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v / 4294967296 & 255;
  arr[12] = v >>> 24 & 255;
  arr[13] = v >>> 16 & 255;
  arr[14] = v >>> 8 & 255;
  arr[15] = v & 255;
  return arr;
}
var parse_default;
var init_parse = __esm({
  "node_modules/uuid/dist/esm-browser/parse.js"() {
    init_validate();
    parse_default = parse2;
  }
});

// node_modules/uuid/dist/esm-browser/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  var bytes = [];
  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
function v35_default(name, version2, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = parse_default(namespace);
    }
    if (namespace.length !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version2;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return stringify_default(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL2;
  return generateUUID;
}
var DNS, URL2;
var init_v35 = __esm({
  "node_modules/uuid/dist/esm-browser/v35.js"() {
    init_stringify();
    init_parse();
    DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  }
});

// node_modules/uuid/dist/esm-browser/md5.js
function md5(bytes) {
  if (typeof bytes === "string") {
    var msg = unescape(encodeURIComponent(bytes));
    bytes = new Uint8Array(msg.length);
    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = "0123456789abcdef";
  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 255;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
    output.push(hex);
  }
  return output;
}
function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
function wordsToMd5(x, len) {
  x[len >> 5] |= 128 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}
function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));
  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 255) << i % 32;
  }
  return output;
}
function safeAdd(x, y) {
  var lsw = (x & 65535) + (y & 65535);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
var md5_default;
var init_md5 = __esm({
  "node_modules/uuid/dist/esm-browser/md5.js"() {
    md5_default = md5;
  }
});

// node_modules/uuid/dist/esm-browser/v3.js
var v3, v3_default;
var init_v3 = __esm({
  "node_modules/uuid/dist/esm-browser/v3.js"() {
    init_v35();
    init_md5();
    v3 = v35_default("v3", 48, md5_default);
    v3_default = v3;
  }
});

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default;
var init_v4 = __esm({
  "node_modules/uuid/dist/esm-browser/v4.js"() {
    init_rng();
    init_stringify();
    v4_default = v4;
  }
});

// node_modules/uuid/dist/esm-browser/sha1.js
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  var K = [1518500249, 1859775393, 2400959708, 3395469782];
  var H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof bytes === "string") {
    var msg = unescape(encodeURIComponent(bytes));
    bytes = [];
    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(128);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);
  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);
    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }
    M[_i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);
    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }
    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }
    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];
    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
}
var sha1_default;
var init_sha1 = __esm({
  "node_modules/uuid/dist/esm-browser/sha1.js"() {
    sha1_default = sha1;
  }
});

// node_modules/uuid/dist/esm-browser/v5.js
var v5, v5_default;
var init_v5 = __esm({
  "node_modules/uuid/dist/esm-browser/v5.js"() {
    init_v35();
    init_sha1();
    v5 = v35_default("v5", 80, sha1_default);
    v5_default = v5;
  }
});

// node_modules/uuid/dist/esm-browser/nil.js
var nil_default;
var init_nil = __esm({
  "node_modules/uuid/dist/esm-browser/nil.js"() {
    nil_default = "00000000-0000-0000-0000-000000000000";
  }
});

// node_modules/uuid/dist/esm-browser/version.js
function version(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  return parseInt(uuid.substr(14, 1), 16);
}
var version_default;
var init_version = __esm({
  "node_modules/uuid/dist/esm-browser/version.js"() {
    init_validate();
    version_default = version;
  }
});

// node_modules/uuid/dist/esm-browser/index.js
var esm_browser_exports = {};
__export(esm_browser_exports, {
  NIL: () => nil_default,
  parse: () => parse_default,
  stringify: () => stringify_default,
  v1: () => v1_default,
  v3: () => v3_default,
  v4: () => v4_default,
  v5: () => v5_default,
  validate: () => validate_default,
  version: () => version_default
});
var init_esm_browser = __esm({
  "node_modules/uuid/dist/esm-browser/index.js"() {
    init_v1();
    init_v3();
    init_v4();
    init_v5();
    init_nil();
    init_version();
    init_validate();
    init_stringify();
    init_parse();
  }
});

// node_modules/@babel/runtime/helpers/classApplyDescriptorGet.js
var require_classApplyDescriptorGet = __commonJS({
  "node_modules/@babel/runtime/helpers/classApplyDescriptorGet.js"(exports, module) {
    function _classApplyDescriptorGet(receiver, descriptor) {
      if (descriptor.get) {
        return descriptor.get.call(receiver);
      }
      return descriptor.value;
    }
    module.exports = _classApplyDescriptorGet, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/classExtractFieldDescriptor.js
var require_classExtractFieldDescriptor = __commonJS({
  "node_modules/@babel/runtime/helpers/classExtractFieldDescriptor.js"(exports, module) {
    function _classExtractFieldDescriptor(receiver, privateMap, action) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    module.exports = _classExtractFieldDescriptor, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/classPrivateFieldGet.js
var require_classPrivateFieldGet = __commonJS({
  "node_modules/@babel/runtime/helpers/classPrivateFieldGet.js"(exports, module) {
    var classApplyDescriptorGet = require_classApplyDescriptorGet();
    var classExtractFieldDescriptor = require_classExtractFieldDescriptor();
    function _classPrivateFieldGet(receiver, privateMap) {
      var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
      return classApplyDescriptorGet(receiver, descriptor);
    }
    module.exports = _classPrivateFieldGet, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/classApplyDescriptorSet.js
var require_classApplyDescriptorSet = __commonJS({
  "node_modules/@babel/runtime/helpers/classApplyDescriptorSet.js"(exports, module) {
    function _classApplyDescriptorSet(receiver, descriptor, value) {
      if (descriptor.set) {
        descriptor.set.call(receiver, value);
      } else {
        if (!descriptor.writable) {
          throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
      }
    }
    module.exports = _classApplyDescriptorSet, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/classPrivateFieldSet.js
var require_classPrivateFieldSet = __commonJS({
  "node_modules/@babel/runtime/helpers/classPrivateFieldSet.js"(exports, module) {
    var classApplyDescriptorSet = require_classApplyDescriptorSet();
    var classExtractFieldDescriptor = require_classExtractFieldDescriptor();
    function _classPrivateFieldSet(receiver, privateMap, value) {
      var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
      classApplyDescriptorSet(receiver, descriptor, value);
      return value;
    }
    module.exports = _classPrivateFieldSet, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/next-auth/core/lib/cookie.js
var require_cookie = __commonJS({
  "node_modules/next-auth/core/lib/cookie.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SessionStore = void 0;
    exports.defaultCookies = defaultCookies;
    var _classPrivateFieldGet3 = _interopRequireDefault(require_classPrivateFieldGet());
    var _classPrivateFieldSet2 = _interopRequireDefault(require_classPrivateFieldSet());
    function _classPrivateMethodInitSpec(obj, privateSet) {
      _checkPrivateRedeclaration(obj, privateSet);
      privateSet.add(obj);
    }
    function _classPrivateFieldInitSpec(obj, privateMap, value) {
      _checkPrivateRedeclaration(obj, privateMap);
      privateMap.set(obj, value);
    }
    function _checkPrivateRedeclaration(obj, privateCollection) {
      if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
      }
    }
    function _classPrivateMethodGet(receiver, privateSet, fn) {
      if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return fn;
    }
    var ALLOWED_COOKIE_SIZE = 4096;
    var ESTIMATED_EMPTY_COOKIE_SIZE = 163;
    var CHUNK_SIZE = ALLOWED_COOKIE_SIZE - ESTIMATED_EMPTY_COOKIE_SIZE;
    function defaultCookies(useSecureCookies) {
      const cookiePrefix = useSecureCookies ? "__Secure-" : "";
      return {
        sessionToken: {
          name: `${cookiePrefix}next-auth.session-token`,
          options: {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
            secure: useSecureCookies
          }
        },
        callbackUrl: {
          name: `${cookiePrefix}next-auth.callback-url`,
          options: {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
            secure: useSecureCookies
          }
        },
        csrfToken: {
          name: `${useSecureCookies ? "__Host-" : ""}next-auth.csrf-token`,
          options: {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
            secure: useSecureCookies
          }
        },
        pkceCodeVerifier: {
          name: `${cookiePrefix}next-auth.pkce.code_verifier`,
          options: {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
            secure: useSecureCookies,
            maxAge: 60 * 15
          }
        },
        state: {
          name: `${cookiePrefix}next-auth.state`,
          options: {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
            secure: useSecureCookies,
            maxAge: 60 * 15
          }
        },
        nonce: {
          name: `${cookiePrefix}next-auth.nonce`,
          options: {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
            secure: useSecureCookies
          }
        }
      };
    }
    var _chunks = /* @__PURE__ */ new WeakMap();
    var _option = /* @__PURE__ */ new WeakMap();
    var _logger = /* @__PURE__ */ new WeakMap();
    var _chunk = /* @__PURE__ */ new WeakSet();
    var _clean = /* @__PURE__ */ new WeakSet();
    var SessionStore = class {
      constructor(option, req, logger) {
        _classPrivateMethodInitSpec(this, _clean);
        _classPrivateMethodInitSpec(this, _chunk);
        _classPrivateFieldInitSpec(this, _chunks, {
          writable: true,
          value: {}
        });
        _classPrivateFieldInitSpec(this, _option, {
          writable: true,
          value: void 0
        });
        _classPrivateFieldInitSpec(this, _logger, {
          writable: true,
          value: void 0
        });
        (0, _classPrivateFieldSet2.default)(this, _logger, logger);
        (0, _classPrivateFieldSet2.default)(this, _option, option);
        const {
          cookies: _cookies
        } = req;
        const {
          name: cookieName
        } = option;
        if (typeof (_cookies === null || _cookies === void 0 ? void 0 : _cookies.getAll) === "function") {
          for (const {
            name,
            value
          } of _cookies.getAll()) {
            if (name.startsWith(cookieName)) {
              (0, _classPrivateFieldGet3.default)(this, _chunks)[name] = value;
            }
          }
        } else if (_cookies instanceof Map) {
          for (const name of _cookies.keys()) {
            if (name.startsWith(cookieName))
              (0, _classPrivateFieldGet3.default)(this, _chunks)[name] = _cookies.get(name);
          }
        } else {
          for (const name in _cookies) {
            if (name.startsWith(cookieName))
              (0, _classPrivateFieldGet3.default)(this, _chunks)[name] = _cookies[name];
          }
        }
      }
      get value() {
        var _Object$values;
        return (_Object$values = Object.values((0, _classPrivateFieldGet3.default)(this, _chunks))) === null || _Object$values === void 0 ? void 0 : _Object$values.join("");
      }
      chunk(value, options) {
        const cookies = _classPrivateMethodGet(this, _clean, _clean2).call(this);
        const chunked = _classPrivateMethodGet(this, _chunk, _chunk2).call(this, {
          name: (0, _classPrivateFieldGet3.default)(this, _option).name,
          value,
          options: {
            ...(0, _classPrivateFieldGet3.default)(this, _option).options,
            ...options
          }
        });
        for (const chunk of chunked) {
          cookies[chunk.name] = chunk;
        }
        return Object.values(cookies);
      }
      clean() {
        return Object.values(_classPrivateMethodGet(this, _clean, _clean2).call(this));
      }
    };
    exports.SessionStore = SessionStore;
    function _chunk2(cookie) {
      const chunkCount = Math.ceil(cookie.value.length / CHUNK_SIZE);
      if (chunkCount === 1) {
        (0, _classPrivateFieldGet3.default)(this, _chunks)[cookie.name] = cookie.value;
        return [cookie];
      }
      const cookies = [];
      for (let i = 0; i < chunkCount; i++) {
        const name = `${cookie.name}.${i}`;
        const value = cookie.value.substr(i * CHUNK_SIZE, CHUNK_SIZE);
        cookies.push({
          ...cookie,
          name,
          value
        });
        (0, _classPrivateFieldGet3.default)(this, _chunks)[name] = value;
      }
      (0, _classPrivateFieldGet3.default)(this, _logger).debug("CHUNKING_SESSION_COOKIE", {
        message: `Session cookie exceeds allowed ${ALLOWED_COOKIE_SIZE} bytes.`,
        emptyCookieSize: ESTIMATED_EMPTY_COOKIE_SIZE,
        valueSize: cookie.value.length,
        chunks: cookies.map((c) => c.value.length + ESTIMATED_EMPTY_COOKIE_SIZE)
      });
      return cookies;
    }
    function _clean2() {
      const cleanedChunks = {};
      for (const name in (0, _classPrivateFieldGet3.default)(this, _chunks)) {
        var _classPrivateFieldGet2;
        (_classPrivateFieldGet2 = (0, _classPrivateFieldGet3.default)(this, _chunks)) === null || _classPrivateFieldGet2 === void 0 ? true : delete _classPrivateFieldGet2[name];
        cleanedChunks[name] = {
          name,
          value: "",
          options: {
            ...(0, _classPrivateFieldGet3.default)(this, _option).options,
            maxAge: 0
          }
        };
      }
      return cleanedChunks;
    }
  }
});

// node_modules/next-auth/jwt/types.js
var require_types = __commonJS({
  "node_modules/next-auth/jwt/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});

// node_modules/next-auth/jwt/index.js
var require_jwt = __commonJS({
  "node_modules/next-auth/jwt/index.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _exportNames = {
      encode: true,
      decode: true,
      getToken: true
    };
    exports.decode = decode3;
    exports.encode = encode3;
    exports.getToken = getToken;
    var _jose = (init_browser(), __toCommonJS(browser_exports));
    var _hkdf = _interopRequireDefault((init_web(), __toCommonJS(web_exports)));
    var _uuid = (init_esm_browser(), __toCommonJS(esm_browser_exports));
    var _cookie = require_cookie();
    var _types = require_types();
    Object.keys(_types).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _types[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _types[key];
        }
      });
    });
    var DEFAULT_MAX_AGE = 30 * 24 * 60 * 60;
    var now = () => Date.now() / 1e3 | 0;
    async function encode3(params) {
      const {
        token = {},
        secret,
        maxAge = DEFAULT_MAX_AGE
      } = params;
      const encryptionSecret = await getDerivedEncryptionKey(secret);
      return await new _jose.EncryptJWT(token).setProtectedHeader({
        alg: "dir",
        enc: "A256GCM"
      }).setIssuedAt().setExpirationTime(now() + maxAge).setJti((0, _uuid.v4)()).encrypt(encryptionSecret);
    }
    async function decode3(params) {
      const {
        token,
        secret
      } = params;
      if (!token)
        return null;
      const encryptionSecret = await getDerivedEncryptionKey(secret);
      const {
        payload
      } = await (0, _jose.jwtDecrypt)(token, encryptionSecret, {
        clockTolerance: 15
      });
      return payload;
    }
    async function getToken(params) {
      var _process$env$NEXTAUTH, _process$env$NEXTAUTH2, _req$headers;
      const {
        req,
        secureCookie = (_process$env$NEXTAUTH = (_process$env$NEXTAUTH2 = process.env.NEXTAUTH_URL) === null || _process$env$NEXTAUTH2 === void 0 ? void 0 : _process$env$NEXTAUTH2.startsWith("https://")) !== null && _process$env$NEXTAUTH !== void 0 ? _process$env$NEXTAUTH : !!process.env.VERCEL,
        cookieName = secureCookie ? "__Secure-next-auth.session-token" : "next-auth.session-token",
        raw,
        decode: _decode = decode3,
        logger = console,
        secret = process.env.NEXTAUTH_SECRET
      } = params;
      if (!req)
        throw new Error("Must pass `req` to JWT getToken()");
      const sessionStore = new _cookie.SessionStore({
        name: cookieName,
        options: {
          secure: secureCookie
        }
      }, {
        cookies: req.cookies,
        headers: req.headers
      }, logger);
      let token = sessionStore.value;
      const authorizationHeader = req.headers instanceof Headers ? req.headers.get("authorization") : (_req$headers = req.headers) === null || _req$headers === void 0 ? void 0 : _req$headers.authorization;
      if (!token && (authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(" ")[0]) === "Bearer") {
        const urlEncodedToken = authorizationHeader.split(" ")[1];
        token = decodeURIComponent(urlEncodedToken);
      }
      if (!token)
        return null;
      if (raw)
        return token;
      try {
        return await _decode({
          token,
          secret
        });
      } catch (_unused) {
        return null;
      }
    }
    async function getDerivedEncryptionKey(secret) {
      return await (0, _hkdf.default)("sha256", secret, "", "NextAuth.js Generated Encryption Key", 32);
    }
  }
});

// node_modules/next-auth/utils/parse-url.js
var require_parse_url = __commonJS({
  "node_modules/next-auth/utils/parse-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = parseUrl;
    function parseUrl(url) {
      var _url2;
      const defaultUrl = new URL("http://localhost:3000/api/auth");
      if (url && !url.startsWith("http")) {
        url = `https://${url}`;
      }
      const _url = new URL((_url2 = url) !== null && _url2 !== void 0 ? _url2 : defaultUrl);
      const path = (_url.pathname === "/" ? defaultUrl.pathname : _url.pathname).replace(/\/$/, "");
      const base = `${_url.origin}${path}`;
      return {
        origin: _url.origin,
        host: _url.host,
        path,
        base,
        toString: () => base
      };
    }
  }
});

// node_modules/next-auth/next/middleware.js
var require_middleware = __commonJS({
  "node_modules/next-auth/next/middleware.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    exports.withAuth = withAuth2;
    var _server = require_server();
    var _jwt = require_jwt();
    var _parseUrl = _interopRequireDefault(require_parse_url());
    async function handleMiddleware(req, options, onSuccess) {
      var _options$pages$signIn, _options$pages, _options$pages$error, _options$pages2, _options$secret, _options$jwt, _options$cookies, _options$cookies$sess, _await$options$callba, _options$callbacks, _options$callbacks$au;
      const {
        pathname,
        search,
        origin,
        basePath
      } = req.nextUrl;
      const signInPage = (_options$pages$signIn = options === null || options === void 0 ? void 0 : (_options$pages = options.pages) === null || _options$pages === void 0 ? void 0 : _options$pages.signIn) !== null && _options$pages$signIn !== void 0 ? _options$pages$signIn : "/api/auth/signin";
      const errorPage = (_options$pages$error = options === null || options === void 0 ? void 0 : (_options$pages2 = options.pages) === null || _options$pages2 === void 0 ? void 0 : _options$pages2.error) !== null && _options$pages$error !== void 0 ? _options$pages$error : "/api/auth/error";
      const authPath = (0, _parseUrl.default)(process.env.NEXTAUTH_URL).path;
      const publicPaths = ["/_next", "/favicon.ico"];
      if (`${basePath}${pathname}`.startsWith(authPath) || [signInPage, errorPage].includes(pathname) || publicPaths.some((p) => pathname.startsWith(p))) {
        return;
      }
      const secret = (_options$secret = options === null || options === void 0 ? void 0 : options.secret) !== null && _options$secret !== void 0 ? _options$secret : process.env.NEXTAUTH_SECRET;
      if (!secret) {
        console.error(`[next-auth][error][NO_SECRET]`, `
https://next-auth.js.org/errors#no_secret`);
        const errorUrl = new URL(`${basePath}${errorPage}`, origin);
        errorUrl.searchParams.append("error", "Configuration");
        return _server.NextResponse.redirect(errorUrl);
      }
      const token = await (0, _jwt.getToken)({
        req,
        decode: options === null || options === void 0 ? void 0 : (_options$jwt = options.jwt) === null || _options$jwt === void 0 ? void 0 : _options$jwt.decode,
        cookieName: options === null || options === void 0 ? void 0 : (_options$cookies = options.cookies) === null || _options$cookies === void 0 ? void 0 : (_options$cookies$sess = _options$cookies.sessionToken) === null || _options$cookies$sess === void 0 ? void 0 : _options$cookies$sess.name,
        secret
      });
      const isAuthorized = (_await$options$callba = await (options === null || options === void 0 ? void 0 : (_options$callbacks = options.callbacks) === null || _options$callbacks === void 0 ? void 0 : (_options$callbacks$au = _options$callbacks.authorized) === null || _options$callbacks$au === void 0 ? void 0 : _options$callbacks$au.call(_options$callbacks, {
        req,
        token
      }))) !== null && _await$options$callba !== void 0 ? _await$options$callba : !!token;
      if (isAuthorized)
        return await (onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(token));
      const signInUrl = new URL(`${basePath}${signInPage}`, origin);
      signInUrl.searchParams.append("callbackUrl", `${basePath}${pathname}${search}`);
      return _server.NextResponse.redirect(signInUrl);
    }
    function withAuth2(...args) {
      if (!args.length || args[0] instanceof Request) {
        return handleMiddleware(...args);
      }
      if (typeof args[0] === "function") {
        const middleware = args[0];
        const options2 = args[1];
        return async (...args2) => await handleMiddleware(args2[0], options2, async (token) => {
          args2[0].nextauth = {
            token
          };
          return await middleware(...args2);
        });
      }
      const options = args[0];
      return async (...args2) => await handleMiddleware(args2[0], options);
    }
    var _default = withAuth2;
    exports.default = _default;
  }
});

// node_modules/next-auth/middleware.js
var require_middleware2 = __commonJS({
  "node_modules/next-auth/middleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _exportNames = {};
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _middleware.default;
      }
    });
    var _middleware = _interopRequireWildcard(require_middleware());
    Object.keys(_middleware).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _middleware[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _middleware[key];
        }
      });
    });
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
  }
});

// middleware.ts
var import_middleware = __toESM(require_middleware2());
var middleware_default = (0, import_middleware.withAuth)({
  callbacks: {
    authorized({ req, token }) {
      return !!token;
    }
  }
});
var config = { matcher: ["/betas/path:*"] };
export {
  config,
  middleware_default as default
};
/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
