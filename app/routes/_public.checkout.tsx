
import { getCartCookie } from "~/data/cart.server";
import { getUser } from '~/data/auth.server';
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { createClient } from "~/utils/client";
import { loadStripe } from "@stripe/stripe-js";
import { 
  CardElement,
  useElements,
  useStripe,
  Elements
} from "@stripe/react-stripe-js"
import { useLoaderData, Link } from "@remix-run/react";
import PaymentContainer from "~/components/paymentContainer";

const stripePromise = loadStripe('pk_test_51NNNZcLmCBCCfwjsA39Wr6xZ5Xsy2R2RB9WUtnEJCXjH54oUBmylrScj7NpUc7moCRSyW9DNvTNY8A7pwwzBpV0w00KLlw5KKi');

const client = createClient();

export async function loader({ request }: LoaderArgs) {
  const cartId = await getCartCookie(request)
  // console.log("CAARTID cookie", cartId)
  const customer  = await getUser(request)
  // console.log('custtomer', customer)

  await client.carts.update(cartId, {
    email: customer.email
  })
  
  const { cart }= await client.carts.retrieve(cartId);
  // console.log("carrrt", cart.region.payment_providers);

  const data = await client.carts.createPaymentSessions(cart.id);
  // console.log('PAYMENT SESSION', data?.cart?.payment_sessions)

  const isStripeAvailable = data?.cart?.payment_session?.provider_id === "stripe"
  // console.log("STRIPE AVAILANBLE", isStripeAvailable)

  let csCart
  if (isStripeAvailable) {
     csCart = await client.carts.setPaymentSession(cartId, {
      provider_id: "stripe",
    })
  }
  // console.log('CSCARRRT', csCart)
  const clientSecret = csCart?.cart?.payment_session?.data.client_secret

  return { clientSecret, cartId, customer }
}

export default function CheckoutRoute() {
  const  { clientSecret, cartId, customer } = useLoaderData<typeof loader>();
  // console.log('LOADER', clientSecret)
  return (
    <div className="w-full mt-8">
      <h1>Checkout Page</h1>
      <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{
          clientSecret,
        }}>
        <PaymentContainer clientSecret={clientSecret} cartId={cartId} customer={customer}/>
      </Elements>
      )}
    </div>
    </div>
  );
}
