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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "" }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-DOCC2NJO.css";

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
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", {}, void 0, !1, {
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
  let client10 = createClient(), cookieHeader = request.headers.get("Cookie"), cookie = await cartCookie.parse(cookieHeader) || {}, regionId = (await client10.regions.list()).regions[0].id;
  if (cookie.cartId)
    return cookie.cartId;
  let { cart } = await client10.carts.create({ region_id: regionId });
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
  let client10 = createClient(), { cart } = await client10.carts.retrieve(cartId);
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

// app/routes/_public.cart.$productId.tsx
var public_cart_productId_exports = {};
__export(public_cart_productId_exports, {
  default: () => DeleteItem,
  loader: () => loader2
});
var import_react7 = require("@remix-run/react");

// app/components/deleteItemForm.jsx
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function ExpenseForm() {
  let today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { method: "post", className: "form", id: "expense-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Are you sure you want to delete this item from your cart?" }, void 0, !1, {
      fileName: "app/components/deleteItemForm.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { children: "Delete" }, void 0, !1, {
        fileName: "app/components/deleteItemForm.jsx",
        lineNumber: 11,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { to: "..", children: "Cancel" }, void 0, !1, {
        fileName: "app/components/deleteItemForm.jsx",
        lineNumber: 12,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/deleteItemForm.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/deleteItemForm.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
var deleteItemForm_default = ExpenseForm;

// app/components/util/Modal.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Modal({ children, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "dialog",
    {
      className: "modal",
      open: !0,
      onClick: (event) => event.stopPropagation(),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/util/Modal.jsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/util/Modal.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Modal_default = Modal;

// app/routes/_public.cart.$productId.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), client2 = createClient(), loader2 = async ({ params }) => (console.log("FROM CART MODAL:", params.productId), params.productId);
function DeleteItem() {
  let data = (0, import_react7.useLoaderData)(), navigate = (0, import_react7.useNavigate)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Modal_default, { onClose: closeHandler, children: [
    JSON.stringify(data),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: '"hey"' }, void 0, !1, {
      fileName: "app/routes/_public.cart.$productId.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(deleteItemForm_default, {}, void 0, !1, {
      fileName: "app/routes/_public.cart.$productId.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.cart.$productId.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/_public.products._index.tsx
var public_products_index_exports = {};
__export(public_products_index_exports, {
  default: () => ProductsIndexRoute,
  loader: () => loader3
});
var import_react9 = require("@remix-run/react");

// app/components/product-card.jsx
var import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ProductCard({ product }) {
  let variant = product.variants[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "overflow-hidden bg-white rounded-lg shadow:md hover:shadow-lg w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: `/products/${product.id}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "img",
      {
        className: "w-80",
        src: product.thumbnail,
        alt: product.title
      },
      void 0,
      !1,
      {
        fileName: "app/components/product-card.jsx",
        lineNumber: 10,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "text-lg font-bold text-gray-700 hover:underline", children: product.title }, void 0, !1, {
        fileName: "app/components/product-card.jsx",
        lineNumber: 16,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "font-semibold text-teal-600", children: formatPrice(variant) }, void 0, !1, {
        fileName: "app/components/product-card.jsx",
        lineNumber: 19,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/product-card.jsx",
      lineNumber: 15,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/product-card.jsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/product-card.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/routes/_public.products._index.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  let client10 = createClient(), { products } = await client10.products.list();
  return { products };
};
function ProductsIndexRoute() {
  let { products } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full p-4 my-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-center", children: "Latest Arrivals" }, void 0, !1, {
      fileName: "app/routes/_public.products._index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ProductCard, { product }, product.id, !1, {
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

// app/routes/_public.cart.success.tsx
var public_cart_success_exports = {};
__export(public_cart_success_exports, {
  default: () => CartRoute
});
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function CartRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-full mt-8 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 flex justify-items-center", children: "this is the success page" }, void 0, !1, {
    fileName: "app/routes/_public.cart.success.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/_public.cart._index.tsx
var public_cart_index_exports = {};
__export(public_cart_index_exports, {
  default: () => CartRoute2,
  loader: () => loader4
});
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), client3 = createClient();
async function loader4({ request }) {
  let cartId = await getCartCookie(request);
  if (!cartId)
    return null;
  let { cart } = await client3.carts.retrieve(cartId);
  return { items: cart.items || [], cartId };
}
function CartRoute2() {
  let data = (0, import_react10.useLoaderData)(), items = data && data.items ? data.items : [], cartId = data && data.cartId ? data.cartId : "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w-full mt-8 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 flex justify-items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-3xl", children: "Cart" }, void 0, !1, {
        fileName: "app/routes/_public.cart._index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      items.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: items.map(
        (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "pb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: item.title }, void 0, !1, {
            fileName: "app/routes/_public.cart._index.tsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { className: "w-80", src: item.thumbnail, alt: item.title }, void 0, !1, {
            fileName: "app/routes/_public.cart._index.tsx",
            lineNumber: 32,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react10.Link, { to: `/cart/${item.id}`, children: "Delete" }, void 0, !1, {
            fileName: "app/routes/_public.cart._index.tsx",
            lineNumber: 34,
            columnNumber: 15
          }, this)
        ] }, item.id, !0, {
          fileName: "app/routes/_public.cart._index.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this)
      ) }, void 0, !1, {
        fileName: "app/routes/_public.cart._index.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: " Please add items to your cart" }, void 0, !1, {
        fileName: "app/routes/_public.cart._index.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.cart._index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: "Checkout" }, void 0, !1, {
      fileName: "app/routes/_public.cart._index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.cart._index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/_public.cart.pay.tsx
var public_cart_pay_exports = {};
__export(public_cart_pay_exports, {
  default: () => CartRoute3,
  loader: () => loader5
});
var import_react11 = require("@remix-run/react");

// app/data/payments.server.js
var import_stripe = __toESM(require("stripe"));
var stripe = new import_stripe.default(process.env.SECRET_STRIPE_KEY), client4 = createClient();
async function createPaymentIntent(cartId) {
}

// app/routes/_public.cart.pay.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), client5 = createClient();
async function loader5({ request }) {
  let cartId = await getCartCookie(request);
  return cartId ? await createPaymentIntent(cartId) : null;
}
function CartRoute3() {
  let data = (0, import_react11.useLoaderData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full mt-8 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 flex justify-items-center", children: "CHECKOUT" }, void 0, !1, {
    fileName: "app/routes/_public.cart.pay.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this);
}

// app/routes/_public.checkout.tsx
var public_checkout_exports = {};
__export(public_checkout_exports, {
  default: () => CheckoutRoute,
  loader: () => loader6
});

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
async function signup(credentials) {
  let data = await createClient().customers.create({
    first_name: "Alec",
    last_name: "Reynolds",
    email: credentials.email,
    password: credentials.password
  }), headers = new Headers({
    ...data.response.headers
  });
  return (0, import_node5.redirect)("/user", {
    headers
  });
}
async function requireUserCookie(request) {
  let parsedCookie = (request.headers.get("cookie") || "").split("; ").reduce((prev, current) => {
    let [name, ...value] = current.split("=");
    return prev[name] = value.join("="), prev;
  }, {});
  if (!parsedCookie)
    throw (0, import_node5.redirect)("/login");
  let reqCookie;
  if (parsedCookie.hasOwnProperty("connect.sid")) {
    if (reqCookie = parsedCookie["connect.sid"], !reqCookie)
      throw (0, import_node5.redirect)("/login");
  } else
    throw (0, import_node5.redirect)("/login");
}
async function logout(request) {
  let requestHeaders = new Headers({
    // accept: "application/json",
    // ["Content-Type"]: "application/json",
    // connection: request.headers.get("connection"),
    cookie: request.headers.get("cookie")
  }), response = await fetch("http://localhost:9000/store/auth", {
    method: "DELETE",
    headers: requestHeaders
  }), responseHeaders = new Headers({
    "Set-Cookie": "connect.sid="
  });
  return (0, import_node5.redirect)("/", { headers: responseHeaders });
}
async function getUser(request) {
  let cookie = request.headers.get("cookie");
  if (!cookie)
    return null;
  let splitCookie = cookie.split("; ").reduce((prev, current) => {
    let [name, ...value] = current.split("=");
    return prev[name] = value.join("="), prev;
  }, {});
  if (!splitCookie["connect.sid"])
    return null;
  let sid = `connect.sid=${splitCookie["connect.sid"]}`, headers = new Headers({
    accept: "application/json",
    ["Content-Type"]: "application/json",
    connection: request.headers.get("connection"),
    cookie: sid
  }), customer = await (await fetch("http://localhost:9000/store/auth", {
    method: "GET",
    headers
  })).json().then((data) => data.customer);
  return customer || null;
}
async function login(credentials) {
  let data = await createClient().auth.authenticate({
    email: credentials.email,
    password: credentials.password
  }), headers = new Headers({
    ...data.response.headers
  });
  return (0, import_node5.redirect)("/user", {
    headers
  });
}

// app/routes/_public.checkout.tsx
var import_stripe_js2 = require("@stripe/stripe-js"), import_react_stripe_js3 = require("@stripe/react-stripe-js"), import_react13 = require("@remix-run/react");

// app/components/paymentContainer.jsx
var import_react12 = require("react");
var import_react_stripe_js = require("@stripe/react-stripe-js");
var import_stripe_js = require("@stripe/stripe-js"), import_react_stripe_js2 = require("@stripe/react-stripe-js"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), stripePromise = (0, import_stripe_js.loadStripe)(process.env.PUBLIC_STRIPE_KEY), client6 = createClient();
function Container({ clientSecret, cartId, customer }) {
  console.log(import_react_stripe_js2.CardElement);
  let stripe2 = (0, import_react_stripe_js2.useStripe)(), elements = (0, import_react_stripe_js2.useElements)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
    "THIS IS THE PAYMENT CONTAINER Here is the payment element",
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("form", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react_stripe_js2.PaymentElement, {}, void 0, !1, {
        fileName: "app/components/paymentContainer.jsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { onClick: async (e) => (e.preventDefault(), stripe2.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/success"
        }
      })), children: "Submit" }, void 0, !1, {
        fileName: "app/components/paymentContainer.jsx",
        lineNumber: 40,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/paymentContainer.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/paymentContainer.jsx",
    lineNumber: 35,
    columnNumber: 9
  }, this);
}

// app/routes/_public.checkout.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), stripePromise2 = (0, import_stripe_js2.loadStripe)("pk_test_51NNNZcLmCBCCfwjsA39Wr6xZ5Xsy2R2RB9WUtnEJCXjH54oUBmylrScj7NpUc7moCRSyW9DNvTNY8A7pwwzBpV0w00KLlw5KKi"), client7 = createClient();
async function loader6({ request }) {
  var _a, _b, _c, _d;
  let cartId = await getCartCookie(request), customer = await getUser(request);
  await client7.carts.update(cartId, {
    email: customer.email
  });
  let { cart } = await client7.carts.retrieve(cartId), data = await client7.carts.createPaymentSessions(cart.id), isStripeAvailable = ((_b = (_a = data == null ? void 0 : data.cart) == null ? void 0 : _a.payment_session) == null ? void 0 : _b.provider_id) === "stripe", csCart;
  return isStripeAvailable && (csCart = await client7.carts.setPaymentSession(cartId, {
    provider_id: "stripe"
  })), { clientSecret: (_d = (_c = csCart == null ? void 0 : csCart.cart) == null ? void 0 : _c.payment_session) == null ? void 0 : _d.data.client_secret, cartId, customer };
}
function CheckoutRoute() {
  let { clientSecret, cartId, customer } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "w-full mt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { children: "Checkout Page" }, void 0, !1, {
      fileName: "app/routes/_public.checkout.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: clientSecret && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react_stripe_js3.Elements, { stripe: stripePromise2, options: {
      clientSecret
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Container, { clientSecret, cartId, customer }, void 0, !1, {
      fileName: "app/routes/_public.checkout.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.checkout.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.checkout.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.checkout.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/_public.success.tsx
var public_success_exports = {};
__export(public_success_exports, {
  default: () => CartRoute4,
  loader: () => loader7
});
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), client8 = createClient();
async function loader7({ request }) {
  let cartId = await getCartCookie(request), cart = await client8.carts.complete(cartId);
  return console.log("SUUCCCESSSS", cart), "";
}
function CartRoute4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-full mt-8 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 flex justify-items-center", children: "this is the success page" }, void 0, !1, {
    fileName: "app/routes/_public.success.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this);
}

// app/routes/_public._index.tsx
var public_index_exports = {};
__export(public_index_exports, {
  default: () => IndexRoute,
  meta: () => meta
});

// app/assets/home-hero.png
var home_hero_default = "/build/_assets/home-hero-SNSI4A4G.png";

// app/assets/hero-mobile.png
var hero_mobile_default = "/build/_assets/hero-mobile-3Z2Y6CL7.png";

// app/components/ui/button.tsx
var React = __toESM(require("react")), import_react_slot = require("@radix-ui/react-slot"), import_class_variance_authority = require("class-variance-authority");

// app/lib/utils .ts
var import_clsx = require("clsx"), import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// app/components/ui/button.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    asChild ? import_react_slot.Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.tsx",
      lineNumber: 47,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// app/assets/root1.svg
var root1_default = "/build/_assets/root1-G6RBKOQG.svg";

// app/routes/_public._index.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { className: "hidden md:block md:w-screen", src: home_hero_default }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 26,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { className: "md:hidden", src: hero_mobile_default }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 27,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "absolute top-1/4 md:top-1/3 grid grid-cols-5 items-center px-8 md:p-0 md:w-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "col-span-4 md:col-start-2 justify-center text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl font-semibold ", children: "FAST FORWARD TO 2050." }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold block pt-4 md:pt-10 drop-shadow-lg", children: "The world is impacted by climate change. " }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Button, { className: "mt-4 md:mt-10", size: "lg", variant: "secondary", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "text-base md:text-lg lg:text-2xl 2xl:text-3xl p-0 md:p-3", children: " CHAT TO LEARN MORE" }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 34,
            columnNumber: 82
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 30,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 29,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 25,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col items-center justify-center xl:grid lg:max-w-none xl:grid-cols-5 lg:px-0 my-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "relative h-full  col-start-2 col-span-1 lg:grid-cols-1 grid place-items-center content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { className: "w-40", src: root1_default }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "grid col-span-3 p-0 xl:p-20 m-10 h-full place-items-center content-center gap-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "lg:w-3/5 text-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "block font-bold text-xl md:text-3xl mb-4", children: "Why Pao?" }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "block text-base  md:text-2xl leading-relaxed md:leading-loose", children: "Why a word that is used in the Indian subcontinent, Brazil, Portugal and Macao? Pao (meaning bread) is a simple word that unites us, no matter which part of the world you come from. While climate change might be visible in certain parts of the globe, we are all responsible for the outcome. At the rate of decline, we are likely on a trajectory that will put us in a bleak position in 2050. We are hoping to shed some light on what the future will look like in this scenario - some food for thought." }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col-reverse items-center justify-center xl:grid lg:max-w-none xl:grid-cols-5 lg:px-0 my-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "grid col-start-2 col-span-2 m-10 h-full place-items-center xl:place-items-start content-center gap-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "lg:w-3/5 text-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "block font-bold text-3xl mb-4", children: "Deforestation is still an issue" }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "block text-base md:text-2xl leading-relaxed md:leading-loose", children: "The world was once a much greener place. 10,000 years ago, 71% of the Earth\u2019s land surface \u2013 a total of 10.6 billion hectares \u2013 was covered by forests, shrubs, and wild grasslands. Today, half of this land is mostly used for agriculture, grazing, and urban settlements, while the total surface still covered by forests and grassland dropped down to just around 4.1 billion hectares. To put things into perspective, we are losing forests at a rate equivalent to 27 soccer fields per minute." }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "h-full col-span-2 grid justify-center content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { className: "max-h-full object-contain", src: home_hero_default }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 66,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col items-center justify-center xl:grid lg:max-w-none xl:grid-cols-5 lg:px-0 my-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "relative h-full col-start-2 col-span-1 lg:grid-cols-1 grid place-items-center content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { className: "w-40", src: root1_default }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 84,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "grid col-span-3 p-0 xl:p-20 m-10 h-full place-items-center content-center gap-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "lg:w-3/5 text-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "block font-bold text-3xl mb-4", children: "Nearly 1.6 Billion Hectares of Forest Are at High Risk of Degradation" }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 88,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "block text-base md:text-2xl leading-relaxed md:leading-loose", children: "In terms of land mass, forest degradation is an even bigger problem than deforestation. Nearly 1.6 billion hectares of forest are at high risk of degradation in the next decade. This phenomenon occurs when forest ecosystems are weakened to a point where they lose their ability to provide goods and services to people and nature. Even though climate change is a contributing factor in degradation, the main trigger for it has been unsustainable and illegal logging. This, along with timber extraction, are the major drivers in Asia and Latin America: together, they account for more than 70% of total tropical forest degradation. In Africa, this occurs as forests are exploited to obtain fuelwood and charcoal. Indeed, more than 80% of people in Sub-Saharan Africa do not have clean cooking fuels and thus heavily rely on wood." }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 91,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 82,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public._index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/_public.about.tsx
var public_about_exports = {};
__export(public_about_exports, {
  default: () => AboutRoute,
  loader: () => loader8
});
var import_react14 = require("@remix-run/react");

// app/assets/roots-slim.png
var roots_slim_default = "/build/_assets/roots-slim-KJNBM2K5.png";

// app/routes/_public.about.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
async function loader8({ request }) {
  let items = await cartItems(request), user = await getUser(request), userId = user != null && user.id ? user.id : null;
  return items ? { userId, itemLength: items.length } : { userId, itemLength: 0 };
}
function AboutRoute() {
  let userId = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { className: "w-screen", src: roots_slim_default }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-76 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-9xl font-bold", children: "ROOTS." }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.about.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-5 lg:px-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "relative h-full  col-start-2 col-span-1 lg:grid-cols-1 grid place-items-center content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { className: "w-40", src: root1_default }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid col-span-3 p-20 h-full place-items-center content-center gap-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-3/5 text-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "block font-bold text-3xl mb-4", children: "Why Pao?" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "block leading-relaxed", children: "Why a word that is used in the Indian subcontinent, Brazil, Portugal and Macao? Pao (meaning bread) is a simple word that unites us, no matter which part of the world you come from. While climate change might be visible in certain parts of the globe, we are all responsible for the outcome. At the rate of decline, we are likely on a trajectory that will put us in a bleak position in 2050. We are hoping to shed some light on what the future will look like in this scenario - some food for thought." }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.about.tsx",
      lineNumber: 38,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-5 lg:px-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid col-span-3 p-20 h-full place-items-center content-center gap-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-3/5 text-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "block font-bold text-3xl mb-4", children: "Deforestation is still an issue" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "block leading-relaxed", children: "The world was once a much greener place. 10,000 years ago, 71% of the Earth\u2019s land surface \u2013 a total of 10.6 billion hectares \u2013 was covered by forests, shrubs, and wild grasslands. Today, half of this land is mostly used for agriculture, grazing, and urban settlements, while the total surface still covered by forests and grassland dropped down to just around 4.1 billion hectares. To put things into perspective, we are losing forests at a rate equivalent to 27 soccer fields per minute." }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "relative h-full col-start-4 col-span-1 lg:grid-cols-1 grid place-items-center content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { className: "w-40", src: root1_default }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.about.tsx",
      lineNumber: 67,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-5 lg:px-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "relative h-full col-start-2 col-span-1 lg:grid-cols-1 grid place-items-center content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { className: "w-40", src: root1_default }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 85,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid col-span-3 p-20 h-full place-items-center content-center gap-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-3/5 text-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "block font-bold text-3xl mb-4", children: "Nearly 1.6 Billion Hectares of Forest Are at High Risk of Degradation" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "block leading-relaxed", children: "In terms of land mass, forest degradation is an even bigger problem than deforestation. Nearly 1.6 billion hectares of forest are at high risk of degradation in the next decade. This phenomenon occurs when forest ecosystems are weakened to a point where they lose their ability to provide goods and services to people and nature. Even though climate change is a contributing factor in degradation, the main trigger for it has been unsustainable and illegal logging. This, along with timber extraction, are the major drivers in Asia and Latin America: together, they account for more than 70% of total tropical forest degradation. In Africa, this occurs as forests are exploited to obtain fuelwood and charcoal. Indeed, more than 80% of people in Sub-Saharan Africa do not have clean cooking fuels and thus heavily rely on wood." }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 92,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.about.tsx",
      lineNumber: 83,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.about.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/_public.chat.tsx
var public_chat_exports = {};
__export(public_chat_exports, {
  default: () => IndexRoute2,
  meta: () => meta2
});

// app/components/iframeDoc.jsx
var import_react15 = require("react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), IframeDocument = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
  "iframe",
  {
    style: {},
    srcDoc: `<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Chat with bot',
                  'botConversationDescription': 'This chatbot was built surprisingly fast with Botpress',
                  'botName': 'Audrey',
                  'botId': '4826e83d-3962-4689-b894-4755df8edb8f',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': '4826e83d-3962-4689-b894-4755df8edb8f',
                  'enableConversationDeletion': true,
                  'showPoweredBy': true,
                  'avatarUrl': 'https://dl.openseauserdata.com/cache/originImage/files/16c89aba97c9604fb5a1125d061e0f8f.png',
                  'className': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                  'hideWidget': true,
                  'showCloseButton': false,
                  'disableAnimations': true,
                  'closeOnEscape': false,
                  'showConversationsButton': false,
                  'enableTranscriptDownload': false,
                  'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/3fcd3e4e-d5bc-4bf5-8699-14b621b3ada2/v31782/style.css'
                  
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>`,
    width: "100%",
    height: "700px"
  },
  void 0,
  !1,
  {
    fileName: "app/components/iframeDoc.jsx",
    lineNumber: 4,
    columnNumber: 1
  },
  this
);

// app/routes/_public.chat.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function IndexRoute2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { className: "hidden md:block md:w-screen", src: home_hero_default }, void 0, !1, {
        fileName: "app/routes/_public.chat.tsx",
        lineNumber: 21,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { className: "md:hidden", src: hero_mobile_default }, void 0, !1, {
        fileName: "app/routes/_public.chat.tsx",
        lineNumber: 22,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "absolute top-1/4 md:top-1/3 grid grid-cols-5 items-center px-8 md:p-0 md:w-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "col-span-4 md:col-start-2 justify-center text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl font-semibold ", children: "CHAT.." }, void 0, !1, {
          fileName: "app/routes/_public.chat.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold block pt-4 md:pt-10 drop-shadow-lg max-w-3xl leading-relaxed", children: "An agent from the future will assist with your questions on the impact of climate change " }, void 0, !1, {
          fileName: "app/routes/_public.chat.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.chat.tsx",
        lineNumber: 24,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public.chat.tsx",
        lineNumber: 23,
        columnNumber: 8
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.chat.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "text-6xl text-center py-20", children: " " }, void 0, !1, {
      fileName: "app/routes/_public.chat.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "m-auto mt-20 w-screen md:w-8/12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(IframeDocument, { children: "Hello, IframeDocument" }, void 0, !1, {
      fileName: "app/routes/_public.chat.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.chat.tsx",
      lineNumber: 33,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.chat.tsx",
    lineNumber: 18,
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

// app/components/AuthForm.tsx
var import_react16 = require("@remix-run/react");

// app/components/ui/input.tsx
var React2 = __toESM(require("react"));
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    "input",
    {
      type,
      className: cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/input.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  )
);
Input.displayName = "Input";

// app/assets/pao-black.png
var pao_black_default = "/build/_assets/pao-black-MVR5KJHI.png";

// app/components/AuthForm.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function AuthForm() {
  let [searchParams] = (0, import_react16.useSearchParams)(), navigation = (0, import_react16.useTransition)(), validationErrors = (0, import_react16.useActionData)(), authMode = searchParams.get("mode") || "login", submitBtnCaption = authMode === "login" ? "Login" : "Create User", toggleBtnCaption = authMode === "login" ? "Create a new user" : "Log in with existing user", isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    import_react16.Form,
    {
      method: "post",
      className: "grid w-full max-w-sm items-center gap-1.5",
      id: "auth-form",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { className: "w-26", src: pao_black_default, alt: "" }, void 0, !1, {
          fileName: "app/components/AuthForm.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "my-4 text-xl font-semibold", children: authMode === "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: "Login" }, void 0, !1, {
          fileName: "app/components/AuthForm.tsx",
          lineNumber: 38,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: "Sign up" }, void 0, !1, {
          fileName: "app/components/AuthForm.tsx",
          lineNumber: 38,
          columnNumber: 52
        }, this) }, void 0, !1, {
          fileName: "app/components/AuthForm.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "my-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "email", children: "Email Address" }, void 0, !1, {
              fileName: "app/components/AuthForm.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Input, { type: "email", id: "email", name: "email", required: !0 }, void 0, !1, {
              fileName: "app/components/AuthForm.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AuthForm.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "mt-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, !1, {
              fileName: "app/components/AuthForm.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Input, { type: "password", id: "password", name: "password", minLength: 7 }, void 0, !1, {
              fileName: "app/components/AuthForm.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AuthForm.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/AuthForm.tsx",
          lineNumber: 41,
          columnNumber: 7
        }, this),
        validationErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: error }, error, !1, {
          fileName: "app/components/AuthForm.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this)) }, void 0, !1, {
          fileName: "app/components/AuthForm.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { className: "mt-5", disabled: isSubmitting, children: isSubmitting ? "Authenticating..." : submitBtnCaption }, void 0, !1, {
            fileName: "app/components/AuthForm.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_react16.Link,
            {
              className: "text-center mt-5",
              to: authMode === "login" ? "?mode=signup" : "?mode=login",
              children: toggleBtnCaption
            },
            void 0,
            !1,
            {
              fileName: "app/components/AuthForm.tsx",
              lineNumber: 63,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AuthForm.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/AuthForm.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}
var AuthForm_default = AuthForm;

// app/assets/forest.jpg
var forest_default = "/build/_assets/forest-6RXTOGRR.jpg";

// app/routes/_auth.login.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
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
function LoginRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "relative hidden h-full flex-col bg-muted text-white dark:border-r md:hidden lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("img", { className: "h-screen", src: forest_default, alt: "" }, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "h-screen grid place-items-center content-center gap-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(AuthForm_default, {}, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 41,
    columnNumber: 3
  }, this);
}

// app/routes/_auth.user.tsx
var auth_user_exports = {};
__export(auth_user_exports, {
  default: () => AuthRoute,
  loader: () => loader9
});
var import_react17 = require("@remix-run/react");
var import_node6 = require("@remix-run/node"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), client9 = createClient();
async function loader9({ request }) {
  await requireUserCookie(request);
  let customer = await getUser(request);
  return (0, import_node6.json)(customer);
}
function AuthRoute() {
  let customer = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-full mt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: customer.id }, void 0, !1, {
      fileName: "app/routes/_auth.user.tsx",
      lineNumber: 22,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: customer.first_name }, void 0, !1, {
      fileName: "app/routes/_auth.user.tsx",
      lineNumber: 23,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: customer.last_name }, void 0, !1, {
      fileName: "app/routes/_auth.user.tsx",
      lineNumber: 24,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: "We are redirecting here after a user is logged in" }, void 0, !1, {
      fileName: "app/routes/_auth.user.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.user.tsx",
    lineNumber: 20,
    columnNumber: 6
  }, this);
}

// app/routes/_public.tsx
var public_exports = {};
__export(public_exports, {
  default: () => IndexLayout,
  loader: () => loader10
});
var import_react19 = require("@remix-run/react");

// app/components/navbar.tsx
var import_react18 = require("@remix-run/react"), React3 = __toESM(require("react")), import_bi2 = require("react-icons/bi");

// app/assets/zro.svg
var zro_default = "/build/_assets/zro-3JUKAMHQ.svg";

// app/components/navbar.tsx
var import_lucide_react = require("lucide-react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function Navbar() {
  let [state, setState] = React3.useState(!1), links2 = [
    // {
    //   label: "Home",
    //   url: "/",
    // },
    {
      label: "Story",
      url: "/about"
    },
    {
      label: "Shop",
      url: "/products"
    },
    {
      label: "Chat",
      url: "/chat"
    }
  ], data = (0, import_react18.useLoaderData)(), userId = data.userId, itemLength = data.itemLength;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("nav", { className: "flex md:grid md:grid-cols-5 items-center justify-between md:py-10 bg-black", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex w-screen justify-between items-center p-4 md:p-0 lg:col-span-1 lg:col-start-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react18.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "img",
        {
          src: zro_default,
          className: "pl-4 md:pl-0 w-[70px] md:w-[150px]"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navbar.tsx",
          lineNumber: 48,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "md:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "button",
          {
            className: "text-white outline-none p-2",
            onClick: () => setState(!state),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_lucide_react.Menu, {}, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 58,
              columnNumber: 25
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar.tsx",
            lineNumber: 54,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "div",
          {
            className: `h-screen w-screen top-0 left-0 bg-black pl-2 z-10 pb-3 md:hidden border-4 border-lime-500 ${state ? "absolute" : "hidden"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                "button",
                {
                  className: "text-white outline-none p-2",
                  onClick: () => setState(!state),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_lucide_react.X, {}, void 0, !1, {
                    fileName: "app/components/navbar.tsx",
                    lineNumber: 70,
                    columnNumber: 29
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/navbar.tsx",
                  lineNumber: 66,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "justify-center items-center md:flex md:space-x-6 md:space-y-0", children: links2.map((link, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                import_react18.NavLink,
                {
                  to: link.url,
                  className: "text-white block hover:text-indigo-600",
                  onClick: () => setState(!state),
                  children: link.label
                },
                index,
                !1,
                {
                  fileName: "app/components/navbar.tsx",
                  lineNumber: 74,
                  columnNumber: 33
                },
                this
              )) }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 72,
                columnNumber: 25
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/navbar.tsx",
            lineNumber: 61,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "hidden md:flex col-span-1 justify-between text-white ", children: links2.map((link, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react18.NavLink, { to: link.url, className: "navlink", children: link.label }, index, !1, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 90,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 88,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "hidden md:flex col-span-2 justify-end ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "font-semibold text-white hover:text-emerald-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_react18.NavLink,
        {
          to: "/cart",
          className: "inline-flex items-center space-x-1 text-white duration-300 ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_bi2.BiShoppingBag, { className: "text-xl" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 102,
              columnNumber: 25
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { children: itemLength }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 103,
              columnNumber: 25
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/navbar.tsx",
          lineNumber: 98,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 97,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "px-4", children: [
        userId && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react18.Form, { method: "post", action: "/logout", id: "logout-form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { className: "cta-alt text-white", children: "Logout" }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 110,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 109,
          columnNumber: 25
        }, this),
        userId && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          import_react18.NavLink,
          {
            to: "/user",
            className: "inline-flex items-center space-x-1 text-white duration-300",
            children: "User"
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar.tsx",
            lineNumber: 117,
            columnNumber: 25
          },
          this
        ),
        !userId && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          import_react18.NavLink,
          {
            to: "/login",
            className: "inline-flex items-center space-x-1 text-white duration-300",
            children: "Login"
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar.tsx",
            lineNumber: 126,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 107,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 96,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

// app/routes/_public.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
async function loader10({ request }) {
  let items = await cartItems(request), user = await getUser(request), userId = user != null && user.id ? user.id : null;
  return items ? { userId, itemLength: items.length } : { userId, itemLength: 0 };
}
function IndexLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/routes/_public.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react19.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_public.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action3
});
var import_node7 = require("@remix-run/node");
function action3({ request }) {
  if (request.method !== "POST")
    throw (0, import_node7.json)({ message: "Invalid request method" }, { status: 400 });
  return logout(request);
}

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout,
  loader: () => loader11
});
var import_react20 = require("@remix-run/react");
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
async function loader11({ request }) {
  return getUser(request);
}
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react20.Outlet, {}, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-2O6U4O5S.js", imports: ["/build/_shared/chunk-TR72F42V.js", "/build/_shared/chunk-NWZQ45AO.js", "/build/_shared/chunk-H6TUETJN.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DLO762OL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-V4SJQHLJ.js", imports: ["/build/_shared/chunk-H4U6JSGI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "routes/_auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-FVHLIEDG.js", imports: ["/build/_shared/chunk-5BA5YPQJ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.user": { id: "routes/_auth.user", parentId: "routes/_auth", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.user-T6SCP6WR.js", imports: ["/build/_shared/chunk-AC544PYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public": { id: "routes/_public", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_public-GGRU35N7.js", imports: ["/build/_shared/chunk-H4U6JSGI.js", "/build/_shared/chunk-G3PXCU5R.js", "/build/_shared/chunk-E6WQW5T2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public._index": { id: "routes/_public._index", parentId: "routes/_public", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_public._index-RVY4IBQR.js", imports: ["/build/_shared/chunk-2IHEWGGZ.js", "/build/_shared/chunk-IVHM3IJE.js", "/build/_shared/chunk-5BA5YPQJ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.about": { id: "routes/_public.about", parentId: "routes/_public", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.about-XQACP3S5.js", imports: ["/build/_shared/chunk-2IHEWGGZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.cart.$productId": { id: "routes/_public.cart.$productId", parentId: "routes/_public", path: "cart/:productId", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.cart.$productId-X22BDGDY.js", imports: ["/build/_shared/chunk-AC544PYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.cart._index": { id: "routes/_public.cart._index", parentId: "routes/_public", path: "cart", index: !0, caseSensitive: void 0, module: "/build/routes/_public.cart._index-SKYXCALQ.js", imports: ["/build/_shared/chunk-AC544PYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.cart.pay": { id: "routes/_public.cart.pay", parentId: "routes/_public", path: "cart/pay", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.cart.pay-2NK5W4YK.js", imports: ["/build/_shared/chunk-AC544PYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.cart.success": { id: "routes/_public.cart.success", parentId: "routes/_public", path: "cart/success", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.cart.success-65ZC34N4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.chat": { id: "routes/_public.chat", parentId: "routes/_public", path: "chat", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.chat-DZA3QNUU.js", imports: ["/build/_shared/chunk-IVHM3IJE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.checkout": { id: "routes/_public.checkout", parentId: "routes/_public", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.checkout-ZGA7YNVF.js", imports: ["/build/_shared/chunk-AC544PYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.products.$productId": { id: "routes/_public.products.$productId", parentId: "routes/_public", path: "products/:productId", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.products.$productId-6VQEV2EF.js", imports: ["/build/_shared/chunk-FGNAQ4K4.js", "/build/_shared/chunk-AC544PYV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.products._index": { id: "routes/_public.products._index", parentId: "routes/_public", path: "products", index: !0, caseSensitive: void 0, module: "/build/routes/_public.products._index-DVNKEFEK.js", imports: ["/build/_shared/chunk-FGNAQ4K4.js", "/build/_shared/chunk-AC544PYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.success": { id: "routes/_public.success", parentId: "routes/_public", path: "success", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.success-DSPHMJZU.js", imports: ["/build/_shared/chunk-AC544PYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-SE52HUUP.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "1c5ea00b", hmr: void 0, url: "/build/manifest-1C5EA00B.js" };

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
  "routes/_public.cart.$productId": {
    id: "routes/_public.cart.$productId",
    parentId: "routes/_public",
    path: "cart/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: public_cart_productId_exports
  },
  "routes/_public.products._index": {
    id: "routes/_public.products._index",
    parentId: "routes/_public",
    path: "products",
    index: !0,
    caseSensitive: void 0,
    module: public_products_index_exports
  },
  "routes/_public.cart.success": {
    id: "routes/_public.cart.success",
    parentId: "routes/_public",
    path: "cart/success",
    index: void 0,
    caseSensitive: void 0,
    module: public_cart_success_exports
  },
  "routes/_public.cart._index": {
    id: "routes/_public.cart._index",
    parentId: "routes/_public",
    path: "cart",
    index: !0,
    caseSensitive: void 0,
    module: public_cart_index_exports
  },
  "routes/_public.cart.pay": {
    id: "routes/_public.cart.pay",
    parentId: "routes/_public",
    path: "cart/pay",
    index: void 0,
    caseSensitive: void 0,
    module: public_cart_pay_exports
  },
  "routes/_public.checkout": {
    id: "routes/_public.checkout",
    parentId: "routes/_public",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: public_checkout_exports
  },
  "routes/_public.success": {
    id: "routes/_public.success",
    parentId: "routes/_public",
    path: "success",
    index: void 0,
    caseSensitive: void 0,
    module: public_success_exports
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
  "routes/_public.chat": {
    id: "routes/_public.chat",
    parentId: "routes/_public",
    path: "chat",
    index: void 0,
    caseSensitive: void 0,
    module: public_chat_exports
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
