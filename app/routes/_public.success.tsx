import { getCartCookie } from "~/data/cart.server";
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { createClient } from "~/utils/client";

const client = createClient();

export async function loader({ request }: LoaderArgs) {
    const cartId = await getCartCookie(request)
   const cart = await client.carts.complete(cartId)

   console.log('SUUCCCESSSS', cart)
   return ''
  }

export default function CartRoute() {
    return (
      <div className="w-full mt-8 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 flex justify-items-center">
        this is the success page
      </div>
    );
}
  