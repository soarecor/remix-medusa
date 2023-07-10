import { getCartCookie } from "~/data/cart.server";
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { createClient } from "~/utils/client";

export async function loader({ request }: LoaderArgs) {
  const cartId = await getCartCookie(request)
  if(!cartId) return null

  const client = createClient();
  const { cart } = await client.carts.retrieve(cartId)

  return cart
}

export default function CartRoute() {
  // const matches = useMatches();
  return (
    <div className="w-full mt-8">
      <h1>Cart</h1>
    </div>
  );
}
