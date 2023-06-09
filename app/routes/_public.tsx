import { Outlet } from '@remix-run/react';
import Navbar from "~/components/navbar";
import { getUserFromSession } from '~/data/auth.server';
import { cartItems } from '~/data/cart.server'
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno

export async function loader({request}: LoaderArgs){
  const items = await cartItems(request)

  const userId = await getUserFromSession(request)
  if(items) {
    return{ userId, itemLength: items.length}
  }
  return {userId, itemLength:0}
};

export default function IndexLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}