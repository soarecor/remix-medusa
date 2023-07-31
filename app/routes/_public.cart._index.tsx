import { getCartCookie } from "~/data/cart.server";
import type { LoaderArgs, ActionArgs } from "@remix-run/node"; // or cloudflare/deno
import { createClient } from "~/utils/client";
import { useLoaderData, Link } from "@remix-run/react";
import PaymentContainer from "~/components/paymentContainer";

const client = createClient();

export async function loader({ request }: LoaderArgs) {
  const cartId = await getCartCookie(request)
  if(!cartId) return null

  const { cart } = await client.carts.retrieve(cartId)
  return {items: cart.items || [], cartId}
}

export default function CartRoute() {
  const  data = useLoaderData<typeof loader>();
  const items = data.items

  return (
    <div className="w-full mt-8 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 flex justify-items-center">
      <div className="">
      <h1 className="text-3xl">Cart</h1>
        <div>
          {items.map((item) => 
          <div className="pb-6" key={item.id}>
          <span>{item.title}</span>
          {/* <span>{JSON.stringify(item)}</span> */}
          <img className="w-80" src={item.thumbnail} alt={item.title} />
            
          <Link to={`/cart/${item.id}`}>
            Delete
          </Link>
          </div>
          )}
        </div>
      </div>
      <div>
        Checkout
      </div>
      <div>
      {/* {cartId && (
        <PaymentContainer cartId={cartId}/>
        )} */}
      </div>
    </div>
  );
}
