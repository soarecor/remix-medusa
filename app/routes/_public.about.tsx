import { getCartCookie } from "~/data/cart.server";
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { createClient } from "~/utils/client";
import { getUser } from '~/data/auth.server';
import { cartItems } from '~/data/cart.server'

export async function loader({request}: LoaderArgs){
  const items = await cartItems(request)

  const user = await getUser(request)
  const userId = user?.id ? user.id : null

  if(items) {
    return{ userId, itemLength: items.length}
  }

  return { userId, itemLength:0 }
};

export default function AboutRoute() {
  const userId = useLoaderData();
  return (
    <div className="w-full mt-8">
      <h1>About</h1>
      <p className="mt-4 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aperiam
        maxime assumenda dolore excepturi ipsam accusantium repudiandae ducimus
        eum, voluptatibus, adipisci nam temporibus vel ex! Non iure dolore at
        mollitia.
      </p>
    </div>
  );
}
