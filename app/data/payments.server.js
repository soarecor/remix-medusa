import Stripe from "stripe";
import { createClient } from "~/utils/client";

const stripe = new Stripe(process.env.SECRET_STRIPE_KEY);
const client = createClient();

export async function createPaymentIntent(cartId) {
  // const { customer } = await client.customers.retrieve();
  // console.log(customer.email);
  // const cartToBeUsed = await client.carts.update(cartId, {
  //   email: "test",
  // });
  // console.log("CARTtoBEused", cartToBeUsed);
  // const cart = await client.carts.createPaymentSessions(cartToBeUsed.id);
  // console.log("CARTR", cart);
  // const isStripeAvailable = cart.payment_sessions?.some(
  //   (session) => session.processor_id === "stripe"
  // );
  // if (!isStripeAvailable) {
  //   return;
  // }
  // const cartSession = client.carts.setPaymentSession(cartId, {
  //   processor_id: "stripe",
  // });
  // return cartSession.payment_session.data.client_secret;
}
