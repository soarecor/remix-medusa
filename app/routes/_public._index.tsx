import type { V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { getCartFromSession, createCartSession } from '~/data/cart.server';
import { createClient } from "~/utils/client";
import { cartCookie } from "~/data/cookies";
import { json } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request }: LoaderArgs) {
  const client = createClient();
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await cartCookie.parse(cookieHeader)) || {};

  // if cart cookie has been created, do not recreate and return the cookie id
  if (cookie.cartId) {
    // await client.carts.retrieve(cookie.cartId)
    // .then(({ cart }) => console.log("this cart already exists", cart))
    return cookie.cartId
  } 
  
  // else create the cookie, serializing the cartId to be used for future cart mutations
  const { cart } = await client.carts.create()
  return json(null, {
    headers: {
      "Set-Cookie": await cartCookie.serialize({
        cartId: cart.id,
      }),
    },
  });
}
// export async function loader({request}: LoaderArgs){
//   const client = createClient();
//   // check if cart exists
//   let cartId = await getCartFromSession(request)

//   // if yes, get cart and add item to cart with correct quantity
//   // if no, create cart, get cart and add item and quantity to cart
//   if (cartId) {
//       await client.carts.retrieve(cartId)
//       .then(({ cart }) => console.log("this cart already exists", cart))
//   } else {
//       const { cart } = await client.carts.create()
//       await createCartSession(cart.id)
//   }
//   return cartId
// };

export default function IndexRoute() {
  // const { cartId } = useLoaderData<typeof loader>();
  return (
    <div>
     {/* {cartId} */}
 
    <div className="px-12 py-32 text-center text-gray-200 bg-gray-800">
     <h1 className="text-5xl text-gray-100">New arrivals are here</h1>
     <p className="px-8 mt-2 font-semibold text-gray-300">
       The new arrivals have, well, newly arrived. Check out the latest
       options from our summer small-batch release while they're still in
       stock.
     </p>
     <Link
      to="/products"
      className="inline-block px-6 py-2 mt-8 text-sm font-semibold text-gray-700 transition duration-300 bg-gray-100 rounded-md hover:bg-white hover:text-gray-900 hover:scale-110 color"
     >
       Shop New Arrivals
     </Link>
    </div>

   </div>
   );
 }

