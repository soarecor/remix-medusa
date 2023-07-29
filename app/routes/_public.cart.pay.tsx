import { getCartCookie } from "~/data/cart.server";
import type { LoaderArgs, ActionArgs } from "@remix-run/node"; // or cloudflare/deno
import { createClient } from "~/utils/client";
import { useLoaderData, Link } from "@remix-run/react";
import PaymentContainer from "~/components/paymentContainer";
import { redirect } from "@remix-run/node";
import { createPaymentIntent } from '~/data/payments.server'


const client = createClient();

export async function loader({ request }: LoaderArgs) {
    const cartId = await getCartCookie(request)
    if(!cartId) return null

    return await createPaymentIntent(cartId)
}

export default function CartRoute() {
    const  data = useLoaderData<typeof loader>();
    console.log(data)
  
    return (
      <div className="w-full mt-8 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 flex justify-items-center">
            CHECKOUT
      </div>
    );
  }