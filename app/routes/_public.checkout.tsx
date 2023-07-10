
import { getCartCookie } from "~/data/cart.server";
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno

export async function loader({ request }: LoaderArgs) {
return getCartCookie(request)
}

export default function CheckoutRoute() {
  return (
    <div className="w-full mt-8">
      <h1>Checkout Page</h1>
    </div>
  );
}
