import { useState, useEffect } from "react";
import { createClient } from "~/utils/client";
import { Elements } from "@stripe/react-stripe-js";
import Form from "./paymentForm";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.PUBLIC_STRIPE_KEY);
const client = createClient();

export default function Container({ clientSecret, cartId, customer }) {
  // console.log("from container", clientSecret, cartId, customer.email);
  console.log(CardElement);

  const stripe = useStripe();
  const elements = useElements();
  // console.log("typeof card", typeof card);

  const handlePayment = async (e) => {
    e.preventDefault();
    return stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success",
      },
    });
  };

  return (
    <div>
      THIS IS THE PAYMENT CONTAINER Here is the payment element
      <form>
        {/* <CardElement /> */}
        <PaymentElement />
        <button onClick={handlePayment}>Submit</button>
      </form>
    </div>
  );
}
