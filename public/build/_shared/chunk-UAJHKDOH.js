import {
  Link,
  NavLink
} from "/build/_shared/chunk-KVO35S3M.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-NLQNPAAV.js";

// app/routes/layouts.navbar.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/react-icons/bi/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/react-icons/lib/esm/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/react-icons/lib/esm/iconsManifest.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/react-icons/lib/esm/iconBase.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/bi/index.esm.js
function BiShoppingBag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z" } }] })(props);
}

// app/routes/layouts.navbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Navbar() {
  const links = [
    {
      label: "Home",
      url: "/"
    },
    {
      label: "Products",
      url: "/products"
    },
    {
      label: "About",
      url: "/about"
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex items-center justify-between px-8 pt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-mono text-3xl font-extrabold uppercase", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "w-28", src: "/logo.svg", alt: "Medusa" }, void 0, false, {
      fileName: "app/routes/layouts.navbar.tsx",
      lineNumber: 25,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/layouts.navbar.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/layouts.navbar.tsx",
      lineNumber: 23,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-x-4", children: links.map((link, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: link.url, className: "navlink", children: link.label }, index, false, {
      fileName: "app/routes/layouts.navbar.tsx",
      lineNumber: 32,
      columnNumber: 6
    }, this)) }, void 0, false, {
      fileName: "app/routes/layouts.navbar.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-gray-600 hover:text-emerald-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      NavLink,
      {
        to: "/checkout",
        className: "inline-flex items-center space-x-1 transition-colors duration-300",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BiShoppingBag, { className: "text-xl" }, void 0, false, {
            fileName: "app/routes/layouts.navbar.tsx",
            lineNumber: 44,
            columnNumber: 6
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "0" }, void 0, false, {
            fileName: "app/routes/layouts.navbar.tsx",
            lineNumber: 44,
            columnNumber: 44
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/layouts.navbar.tsx",
        lineNumber: 40,
        columnNumber: 5
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/layouts.navbar.tsx",
      lineNumber: 39,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/layouts.navbar.tsx",
    lineNumber: 21,
    columnNumber: 3
  }, this);
}

export {
  Navbar
};
//# sourceMappingURL=/build/_shared/chunk-UAJHKDOH.js.map
