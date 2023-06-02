import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";


import styles from "./tailwind.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
// export default function App() {
//   return (
//    <Document>
//     <Layout>
//      <Outlet />
//      <ScrollRestoration />
//      <Scripts />
//      <LiveReload />
//     </Layout>
//    </Document>
//    );
//  }

//  function Document({ children }) {
//   return (
//    <html lang="en">
//     <head>
//      <Meta />
//      <Links />
//     </head>
//     <body>{children}</body>
//    </html>
//    );
//  }

export const links: LinksFunction = () => [
  // {
  //   rel: "stylesheet",
  //   href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
  // },
  { rel: "stylesheet", href: styles },
];

