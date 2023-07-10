import { createCookie } from "@remix-run/node";
import { json } from "@remix-run/node";
import { createClient } from "~/utils/client";

const cartCookie = createCookie("cart", {
  maxAge: 604_800, // one week
});

export async function createCartCookie(request) {
  const client = createClient();
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await cartCookie.parse(cookieHeader)) || {};

  //   if cart cookie has been created, do not recreate and return the cookie id
  if (cookie.cartId) {
    return cookie.cartId;
  }

  // else create the cookie, serializing the cartId to be used for future cart mutations
  const { cart } = await client.carts.create();
  return {
    cartId: cart.id,
    headers: {
      "Set-Cookie": await cartCookie.serialize({
        cartId: cart.id,
      }),
    },
  };
}

export async function getCartCookie(request) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await cartCookie.parse(cookieHeader)) || {};

  if (cookie.cartId) {
    return cookie.cartId;
  }
  return null;
}

export async function cartItems(request) {
  const cartId = await getCartCookie(request);
  if (!cartId) return null;

  const client = createClient();
  const { cart } = await client.carts.retrieve(cartId);

  return cart.items;
}
