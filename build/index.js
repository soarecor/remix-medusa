var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 89,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/components/footer.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Footer() {
  let currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-4 text-sm text-center text-gray-200 bg-gray-800", children: [
    "\xA9 Copyright ",
    currentYear,
    " [Brand name]. All Rights Reserved"
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KSCYKGK4.css";

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "border-b" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var links = () => [
  // {
  //   rel: "stylesheet",
  //   href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
  // },
  { rel: "stylesheet", href: tailwind_default }
];

// app/routes/_public.products.$productId.tsx
var public_products_productId_exports = {};
__export(public_products_productId_exports, {
  action: () => action,
  default: () => ProductRoute,
  loader: () => loader
});
var import_react3 = require("react"), import_node4 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_bi = require("react-icons/bi"), import_react5 = require("@remix-run/react");

// app/utils/client.js
var import_medusa_js = __toESM(require("@medusajs/medusa-js")), BACKEND_URL = process.env.PUBLIC_MEDUSA_URL || "http://localhost:9000", createClient = () => new import_medusa_js.default({ baseUrl: BACKEND_URL });

// app/utils/prices.js
var locale = "en-US", regionCurrency = "usd";
function formatPrice(variant) {
  let price = variant.prices.find(
    (price2) => price2.currency_code == regionCurrency
  );
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: regionCurrency
  }).format(price.amount / 100);
}

// app/data/cart.server.js
var import_node2 = require("@remix-run/node"), import_node3 = require("@remix-run/node");
var cartCookie = (0, import_node2.createCookie)("cart", {
  maxAge: 604800
  // one week
});
async function createCartCookie(request) {
  let client2 = createClient(), cookieHeader = request.headers.get("Cookie"), cookie = await cartCookie.parse(cookieHeader) || {};
  if (cookie.cartId)
    return cookie.cartId;
  let { cart } = await client2.carts.create();
  return {
    cartId: cart.id,
    headers: {
      "Set-Cookie": await cartCookie.serialize({
        cartId: cart.id
      })
    }
  };
}
async function getCartCookie(request) {
  let cookieHeader = request.headers.get("Cookie"), cookie = await cartCookie.parse(cookieHeader) || {};
  return cookie.cartId ? cookie.cartId : null;
}
async function cartItems(request) {
  let cartId = await getCartCookie(request);
  if (!cartId)
    return null;
  let client2 = createClient(), { cart } = await client2.carts.retrieve(cartId);
  return cart.items;
}

// app/routes/_public.products.$productId.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), client = createClient(), loader = async ({ params }) => {
  let { product } = await client.products.retrieve(params.productId);
  return (0, import_node4.json)(product);
};
async function action({ params, request }) {
  let cartId = await getCartCookie(request), headers = new Headers();
  if (!cartId) {
    let response = await createCartCookie(request);
    cartId = response.cartId, headers = new Headers({
      ...response.headers
    });
  }
  let { product } = await client.products.retrieve(params.productId), variant_id = product.variants[0].id, { cart } = await client.carts.lineItems.create(cartId, {
    variant_id,
    quantity: 1
  });
  return (0, import_node4.json)(cart.items, {
    headers
  });
}
function ProductRoute() {
  let product = (0, import_react4.useLoaderData)(), [variant, setVariant] = (0, import_react3.useState)(product.variants[0]), [image, setImage] = (0, import_react3.useState)(product.images[0]), [quantity, setQuantity] = (0, import_react3.useState)(1), handleVariantChange = (index) => {
    setVariant(product.variants[index]), setQuantity(1);
  }, handleQuantityChange = (action4) => {
    switch (action4) {
      case "inc":
        quantity < variant.inventory_quantity && setQuantity(quantity + 1);
        break;
      case "dec":
        quantity > 1 && setQuantity(quantity - 1);
        break;
      default:
        break;
    }
  }, handleImageChange = (id) => {
    setImage(product.images.find((img) => img.id === id));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid items-center md:grid-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "img",
        {
          className: "w-full rounded-lg",
          src: image.url,
          alt: product.title
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_public.products.$productId.tsx",
          lineNumber: 87,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-center p-4 space-x-2", children: product.images.map((imageItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "img",
        {
          className: `w-16 border-2 rounded-lg ${imageItem.id === image.id ? "border-teal-400" : null}`,
          src: imageItem.url,
          alt: product.title,
          onClick: () => handleImageChange(imageItem.id)
        },
        imageItem.id,
        !1,
        {
          fileName: "app/routes/_public.products.$productId.tsx",
          lineNumber: 94,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/_public.products.$productId.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.products.$productId.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col px-16 py-4 space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: [
        product.title,
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/_public.products.$productId.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-semibold text-teal-600", children: formatPrice(variant) }, void 0, !1, {
        fileName: "app/routes/_public.products.$productId.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-semibold", children: "Select Quantity" }, void 0, !1, {
          fileName: "app/routes/_public.products.$productId.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center px-4 mt-2 space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              className: "px-4 py-2 hover:shadow-sm hover:text-teal-500 hover:font-bold",
              onClick: () => handleQuantityChange("dec"),
              children: "-"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_public.products.$productId.tsx",
              lineNumber: 130,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: quantity }, void 0, !1, {
            fileName: "app/routes/_public.products.$productId.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              className: "px-4 py-2 hover:shadow-sm hover:text-teal-500 hover:font-bold",
              onClick: () => handleQuantityChange("inc"),
              children: "+"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_public.products.$productId.tsx",
              lineNumber: 137,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_public.products.$productId.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.products.$productId.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", className: "inline-flex items-center px-4 py-2 font-semibold text-gray-200 bg-gray-700 rounded hover:text-white hover:bg-gray-900", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_bi.BiShoppingBag, { className: "mr-2 text-lg" }, void 0, !1, {
          fileName: "app/routes/_public.products.$productId.tsx",
          lineNumber: 149,
          columnNumber: 17
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Add to Cart" }, void 0, !1, {
          fileName: "app/routes/_public.products.$productId.tsx",
          lineNumber: 150,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.products.$productId.tsx",
        lineNumber: 148,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public.products.$productId.tsx",
        lineNumber: 146,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public.products.$productId.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-semibold", children: "Product Description" }, void 0, !1, {
          fileName: "app/routes/_public.products.$productId.tsx",
          lineNumber: 155,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("hr", { className: "w-2/3 mt-2 border-t-2 border-gray-300" }, void 0, !1, {
          fileName: "app/routes/_public.products.$productId.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-4 text-gray-700", children: product.description }, void 0, !1, {
          fileName: "app/routes/_public.products.$productId.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.products.$productId.tsx",
        lineNumber: 154,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.products.$productId.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.products.$productId.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.products.$productId.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/_public.products._index.tsx
var public_products_index_exports = {};
__export(public_products_index_exports, {
  default: () => ProductsIndexRoute,
  loader: () => loader2
});
var import_react7 = require("@remix-run/react");

// app/components/product-card.jsx
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function ProductCard({ product }) {
  let variant = product.variants[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "overflow-hidden bg-white rounded-lg shadow:md hover:shadow-lg w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { to: `/products/${product.id}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "w-80", src: product.thumbnail, alt: product.title }, void 0, !1, {
      fileName: "app/components/product-card.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-lg font-bold text-gray-700 hover:underline", children: product.title }, void 0, !1, {
        fileName: "app/components/product-card.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-semibold text-teal-600", children: formatPrice(variant) }, void 0, !1, {
        fileName: "app/components/product-card.jsx",
        lineNumber: 15,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/product-card.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/product-card.jsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/product-card.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/_public.products._index.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let client2 = createClient(), { products } = await client2.products.list();
  return { products };
};
function ProductsIndexRoute() {
  let { products } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full p-4 my-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-center", children: "Latest Arrivals" }, void 0, !1, {
      fileName: "app/routes/_public.products._index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ProductCard, { product }, product.id, !1, {
      fileName: "app/routes/_public.products._index.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_public.products._index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.products._index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/_public.checkout.tsx
var public_checkout_exports = {};
__export(public_checkout_exports, {
  default: () => CheckoutRoute,
  loader: () => loader3
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  return getCartCookie(request);
}
function CheckoutRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Checkout Page" }, void 0, !1, {
    fileName: "app/routes/_public.checkout.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.checkout.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_public._index.tsx
var public_index_exports = {};
__export(public_index_exports, {
  default: () => IndexRoute,
  meta: () => meta
});
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "px-12 py-32 text-center text-gray-200 bg-gray-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-5xl text-gray-100", children: "New arrivals are here" }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 18,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "px-8 mt-2 font-semibold text-gray-300", children: "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock." }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 19,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_react8.Link,
      {
        to: "/products",
        className: "inline-block px-6 py-2 mt-8 text-sm font-semibold text-gray-700 transition duration-300 bg-gray-100 rounded-md hover:bg-white hover:text-gray-900 hover:scale-110 color",
        children: "Shop New Arrivals"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 24,
        columnNumber: 6
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_public._index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public._index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/_public.about.tsx
var public_about_exports = {};
__export(public_about_exports, {
  default: () => AboutRoute,
  loader: () => loader4
});
var import_react9 = require("@remix-run/react");

// app/data/auth.server.js
var import_node5 = require("@remix-run/node"), SESSION_SECRET = process.env.SESSION_SECRET, sessionStorage = (0, import_node5.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    secure: !1,
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    // 30 days
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectPath) {
  let session = await sessionStorage.getSession();
  return session.set("userId", userId), (0, import_node5.redirect)(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
async function getUserFromSession(request) {
  let userId = (await sessionStorage.getSession(
    request.headers.get("Cookie")
  )).get("userId");
  return userId || null;
}
async function requireUserSession(request) {
  let userId = await getUserFromSession(request);
  if (!userId)
    throw (0, import_node5.redirect)("/login");
  return userId;
}
async function destroyUserSession(request) {
  let session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return (0, import_node5.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function signup(credentials) {
  let client2 = createClient(), { customer } = await client2.customers.create({
    first_name: "Alec",
    last_name: "Reynolds",
    email: credentials.email,
    password: credentials.password
  });
  return createUserSession(customer.id, "/user");
}
async function login(credentials) {
  let client2 = createClient(), { customer } = await client2.auth.authenticate({
    email: credentials.email,
    password: credentials.password
  });
  return createUserSession(customer.id, "/user");
}

// app/routes/_public.about.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  let items = await cartItems(request), userId = await getUserFromSession(request);
  return items ? { userId, itemLength: items.length } : { userId, itemLength: 0 };
}
function AboutRoute() {
  let userId = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full mt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "About" }, void 0, !1, {
      fileName: "app/routes/_public.about.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-4 text-justify", children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aperiam maxime assumenda dolore excepturi ipsam accusantium repudiandae ducimus eum, voluptatibus, adipisci nam temporibus vel ex! Non iure dolore at mollitia." }, void 0, !1, {
      fileName: "app/routes/_public.about.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.about.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/_public.cart.tsx
var public_cart_exports = {};
__export(public_cart_exports, {
  default: () => CartRoute,
  loader: () => loader5
});
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function loader5({ request }) {
  let cartId = await getCartCookie(request);
  if (!cartId)
    return null;
  let client2 = createClient(), { cart } = await client2.carts.retrieve(cartId);
  return { items: cart.items || [] };
}
function CartRoute() {
  let items = (0, import_react10.useLoaderData)().items;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-full mt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: "Cart" }, void 0, !1, {
      fileName: "app/routes/_public.cart.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: items.map(
      (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: item.title }, void 0, !1, {
          fileName: "app/routes/_public.cart.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { className: "w-80", src: item.thumbnail, alt: item.title }, void 0, !1, {
          fileName: "app/routes/_public.cart.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      ] }, item.id, !0, {
        fileName: "app/routes/_public.cart.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ) }, void 0, !1, {
      fileName: "app/routes/_public.cart.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.cart.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.cart.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action2,
  default: () => LoginRoute
});

// app/data/validation.server.js
function isValidEmail(value) {
  return value && value.includes("@");
}
function isValidPassword(value) {
  return value && value.trim().length >= 7;
}
function validateCredentials(input) {
  let validationErrors = {};
  if (isValidEmail(input.email) || (validationErrors.email = "Invalid email address."), isValidPassword(input.password) || (validationErrors.password = "Invalid password. Must be at least 7 characters long."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}

// app/components/AuthForm.jsx
var import_react11 = require("@remix-run/react"), import_fa = require("react-icons/fa"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function AuthForm() {
  let [searchParams] = (0, import_react11.useSearchParams)(), navigation = (0, import_react11.useTransition)(), actionData = (0, import_react11.useActionData)(), authMode = searchParams.get("mode") || "login", submitBtnCaption = authMode === "login" ? "Login" : "Create User", toggleBtnCaption = authMode === "login" ? "Create a new user" : "Log in with existing user", isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Form, { method: "post", className: "form", id: "auth-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "icon-img", children: authMode === "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_fa.FaLock, {}, void 0, !1, {
      fileName: "app/components/AuthForm.jsx",
      lineNumber: 26,
      columnNumber: 33
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_fa.FaUserPlus, {}, void 0, !1, {
      fileName: "app/components/AuthForm.jsx",
      lineNumber: 26,
      columnNumber: 46
    }, this) }, void 0, !1, {
      fileName: "app/components/AuthForm.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "email", children: "Email Address" }, void 0, !1, {
        fileName: "app/components/AuthForm.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "email", id: "email", name: "email", required: !0 }, void 0, !1, {
        fileName: "app/components/AuthForm.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AuthForm.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, !1, {
        fileName: "app/components/AuthForm.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "password", id: "password", name: "password", minLength: 7 }, void 0, !1, {
        fileName: "app/components/AuthForm.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AuthForm.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    actionData && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { children: Object.values(actionData).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: item }, item, !1, {
      fileName: "app/components/AuthForm.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/AuthForm.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Authenticating..." : submitBtnCaption }, void 0, !1, {
        fileName: "app/components/AuthForm.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { to: authMode === "login" ? "?mode=signup" : "?mode=login", children: toggleBtnCaption }, void 0, !1, {
        fileName: "app/components/AuthForm.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AuthForm.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AuthForm.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
var AuthForm_default = AuthForm;

// app/routes/_auth.login.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function LoginRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(AuthForm_default, {}, void 0, !1, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 8,
    columnNumber: 12
  }, this);
}
async function action2({ request }) {
  let authMode = new URL(request.url).searchParams.get("mode") || "login", formData = await request.formData(), credentials = Object.fromEntries(formData);
  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }
  try {
    return authMode === "login" ? await login(credentials) : await signup(credentials);
  } catch (error) {
    if (error.status === 422)
      return { credentials: error.message };
  }
}

// app/routes/_auth.user.tsx
var auth_user_exports = {};
__export(auth_user_exports, {
  default: () => AuthRoute,
  loader: () => loader6
});
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
async function loader6({ request }) {
  return await requireUserSession(request), getUserFromSession(request);
}
function AuthRoute() {
  let userId = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-full mt-8", children: [
    userId,
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: "We are redirecting here after a user is logged in" }, void 0, !1, {
      fileName: "app/routes/_auth.user.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.user.tsx",
    lineNumber: 15,
    columnNumber: 6
  }, this);
}

// app/routes/_public.tsx
var public_exports = {};
__export(public_exports, {
  default: () => IndexLayout,
  loader: () => loader7
});
var import_react14 = require("@remix-run/react");

// app/components/navbar.jsx
var import_react13 = require("@remix-run/react"), import_bi2 = require("react-icons/bi"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Navbar() {
  let links2 = [
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
  ], data = (0, import_react13.useLoaderData)(), userId = data.userId, itemLength = data.itemLength;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("nav", { className: "flex items-center justify-between px-8 pt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "font-mono text-3xl font-extrabold uppercase", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react13.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { className: "w-28", src: "/logo.svg", alt: "Medusa" }, void 0, !1, {
      fileName: "app/components/navbar.jsx",
      lineNumber: 38,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "space-x-4", children: links2.map((link, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react13.NavLink, { to: link.url, className: "navlink", children: link.label }, index, !1, {
      fileName: "app/components/navbar.jsx",
      lineNumber: 45,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/components/navbar.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "font-semibold text-gray-600 hover:text-emerald-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      import_react13.NavLink,
      {
        to: "/cart",
        className: "inline-flex items-center space-x-1 transition-colors duration-300",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_bi2.BiShoppingBag, { className: "text-xl" }, void 0, !1, {
            fileName: "app/components/navbar.jsx",
            lineNumber: 57,
            columnNumber: 11
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { children: itemLength }, void 0, !1, {
            fileName: "app/components/navbar.jsx",
            lineNumber: 57,
            columnNumber: 49
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/navbar.jsx",
        lineNumber: 53,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/navbar.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
      userId && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react13.Form, { method: "post", action: "/logout", id: "logout-form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { className: "cta-alt", children: "Logout" }, void 0, !1, {
        fileName: "app/components/navbar.jsx",
        lineNumber: 64,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navbar.jsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      userId && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_react13.NavLink,
        {
          to: "/user",
          className: "inline-flex items-center space-x-1 transition-colors duration-300",
          children: "User"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navbar.jsx",
          lineNumber: 69,
          columnNumber: 11
        },
        this
      ),
      !userId && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_react13.NavLink,
        {
          to: "/login",
          className: "inline-flex items-center space-x-1 transition-colors duration-300",
          children: "Login"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navbar.jsx",
          lineNumber: 78,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/navbar.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/_public.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
async function loader7({ request }) {
  let items = await cartItems(request), userId = await getUserFromSession(request);
  return items ? { userId, itemLength: items.length } : { userId, itemLength: 0 };
}
function IndexLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/routes/_public.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_public.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action3
});
var import_node6 = require("@remix-run/node");
function action3({ request }) {
  if (request.method !== "POST")
    throw (0, import_node6.json)({ message: "Invalid request method" }, { status: 400 });
  return destroyUserSession(request);
}

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout,
  loader: () => loader8
});
var import_react16 = require("@remix-run/react");

// app/components/auth-navbar.jsx
var import_react15 = require("@remix-run/react"), import_bi3 = require("react-icons/bi"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Navbar2() {
  let links2 = [
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
  ], userId = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("nav", { className: "flex items-center justify-between px-8 pt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "font-mono text-3xl font-extrabold uppercase", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "w-28", src: "/logo.svg", alt: "Medusa" }, void 0, !1, {
      fileName: "app/components/auth-navbar.jsx",
      lineNumber: 34,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/auth-navbar.jsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/auth-navbar.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "space-x-4", children: links2.map((link, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.NavLink, { to: link.url, className: "navlink", children: link.label }, index, !1, {
      fileName: "app/components/auth-navbar.jsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/components/auth-navbar.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
      userId && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Form, { method: "post", action: "/logout", id: "logout-form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { className: "cta-alt", children: "Logout" }, void 0, !1, {
        fileName: "app/components/auth-navbar.jsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/auth-navbar.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      userId && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_react15.NavLink,
        {
          to: "/user",
          className: "inline-flex items-center space-x-1 transition-colors duration-300",
          children: "User"
        },
        void 0,
        !1,
        {
          fileName: "app/components/auth-navbar.jsx",
          lineNumber: 55,
          columnNumber: 11
        },
        this
      ),
      !userId && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_react15.NavLink,
        {
          to: "/login",
          className: "inline-flex items-center space-x-1 transition-colors duration-300",
          children: "Login"
        },
        void 0,
        !1,
        {
          fileName: "app/components/auth-navbar.jsx",
          lineNumber: 64,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/auth-navbar.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth-navbar.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
async function loader8({ request }) {
  return getUserFromSession(request);
}
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Navbar2, {}, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react16.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UHDOLDTM.js", imports: ["/build/_shared/chunk-S5WX6F3R.js", "/build/_shared/chunk-NWZQ45AO.js", "/build/_shared/chunk-H6TUETJN.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DESXMXGQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-ALWEVJSI.js", imports: ["/build/_shared/chunk-R2FWX4PW.js", "/build/_shared/chunk-QS7MC2HN.js", "/build/_shared/chunk-H4U6JSGI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "routes/_auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-X4DB25ET.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.user": { id: "routes/_auth.user", parentId: "routes/_auth", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.user-Q5PXUHV3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public": { id: "routes/_public", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_public-3L2743WX.js", imports: ["/build/_shared/chunk-R2FWX4PW.js", "/build/_shared/chunk-QS7MC2HN.js", "/build/_shared/chunk-H4U6JSGI.js", "/build/_shared/chunk-E6WQW5T2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public._index": { id: "routes/_public._index", parentId: "routes/_public", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_public._index-IC4T37R4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.about": { id: "routes/_public.about", parentId: "routes/_public", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.about-PR3VAYMV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.cart": { id: "routes/_public.cart", parentId: "routes/_public", path: "cart", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.cart-2OPA4T4U.js", imports: ["/build/_shared/chunk-AC544PYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.checkout": { id: "routes/_public.checkout", parentId: "routes/_public", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.checkout-TZQUZTFH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.products.$productId": { id: "routes/_public.products.$productId", parentId: "routes/_public", path: "products/:productId", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.products.$productId-FDQURQDC.js", imports: ["/build/_shared/chunk-FGNAQ4K4.js", "/build/_shared/chunk-AC544PYV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.products._index": { id: "routes/_public.products._index", parentId: "routes/_public", path: "products", index: !0, caseSensitive: void 0, module: "/build/routes/_public.products._index-AHVYUAA5.js", imports: ["/build/_shared/chunk-FGNAQ4K4.js", "/build/_shared/chunk-AC544PYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-SE52HUUP.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "df213697", hmr: void 0, url: "/build/manifest-DF213697.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_public.products.$productId": {
    id: "routes/_public.products.$productId",
    parentId: "routes/_public",
    path: "products/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: public_products_productId_exports
  },
  "routes/_public.products._index": {
    id: "routes/_public.products._index",
    parentId: "routes/_public",
    path: "products",
    index: !0,
    caseSensitive: void 0,
    module: public_products_index_exports
  },
  "routes/_public.checkout": {
    id: "routes/_public.checkout",
    parentId: "routes/_public",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: public_checkout_exports
  },
  "routes/_public._index": {
    id: "routes/_public._index",
    parentId: "routes/_public",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: public_index_exports
  },
  "routes/_public.about": {
    id: "routes/_public.about",
    parentId: "routes/_public",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: public_about_exports
  },
  "routes/_public.cart": {
    id: "routes/_public.cart",
    parentId: "routes/_public",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: public_cart_exports
  },
  "routes/_auth.login": {
    id: "routes/_auth.login",
    parentId: "routes/_auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/_auth.user": {
    id: "routes/_auth.user",
    parentId: "routes/_auth",
    path: "user",
    index: void 0,
    caseSensitive: void 0,
    module: auth_user_exports
  },
  "routes/_public": {
    id: "routes/_public",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: public_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_auth": {
    id: "routes/_auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
