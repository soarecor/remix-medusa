import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export const cartCookie = createCookie("cart", {
  maxAge: 604_800, // one week
});