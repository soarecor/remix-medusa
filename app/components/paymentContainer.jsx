import { useState } from "react";
import { createClient } from "~/utils/client";
import { Elements } from "@stripe/react-stripe-js";
import Form from "./paymentForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.PUBLIC_STRIPE_KEY);
const client = createClient();

export default function Container({ cartId }) {
  const [clientSecret, setClientSecret] = useState();

  //   const cart = client.carts.createPaymentSessions(cartId);
  //   console.log(JSON.stringify(cart));

  //   client.carts.createPaymentSessions(cartId).then(({ cart }) => {
  //     // check if stripe is selected
  //     console.log("WE GOT CART", cart);
  //     const isStripeAvailable = cart.payment_sessions?.some(
  //       (session) => session.processor_id === "stripe"
  //     );
  //     if (!isStripeAvailable) {
  //       return;
  //     }

  //     // select stripe payment session
  //     client.carts
  //       .setPaymentSession(cart.id, {
  //         processor_id: "stripe",
  //       })
  //       .then(({ cart }) => {
  //         setClientSecret(cart.payment_session.data.client_secret);
  //         console.log("CLIENT SECRET", clientSecret);
  //       });
  //   });

  return (
    <div>
      {/* {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
          }}
        >
          <Form clientSecret={clientSecret} cartId={cartId} />
        </Elements>
      )} */}
    </div>
  );
}
