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

export default function Container({ clientSecret, cartId }) {
  console.log("from container", clientSecret, cartId);

  return (
    <div>
      THIS IS THE PAYMENT CONTAINER Here is the payment element
      <Form>
        <PaymentElement />
        <button>Submit</button>
      </Form>
    </div>
  );
}
