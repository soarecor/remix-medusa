import { getCartCookie } from "~/data/cart.server";
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { createClient } from "~/utils/client";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
  const cartId = await getCartCookie(request)
  if(!cartId) return null

  const client = createClient();
  const { cart } = await client.carts.retrieve(cartId)

  return {items: cart.items || []}
}

export default function CartRoute() {
  const  data = useLoaderData<typeof loader>();
  const items = data.items
  return (
    <div className="w-full mt-8">
      <h1>Cart</h1>
      <div className="grid grid-cols-1 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
<div>
  {items.map((item) => <div key={item.id}>{item.id}</div>)}
</div>
      </div>
    </div>
  );
}
