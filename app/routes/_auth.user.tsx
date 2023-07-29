import { getUserFromSession, requireUserSession, getUser, requireUserCookie } from '~/data/auth.server';
import { useLoaderData } from "@remix-run/react";
import { Form,NavLink } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { createClient } from "~/utils/client";
import { json } from "@remix-run/node";

const client = createClient();

export async function loader({request}: LoaderArgs){
  await requireUserCookie(request)

  const customer  = await getUser(request)
  return json(customer)
};

export default function AuthRoute() {
  const customer = useLoaderData();

    return (
     <div className="w-full mt-8">

       <div>{customer.id}</div>
       <div>{customer.first_name}</div>
       <div>{customer.last_name}</div>
    
        <div>We are redirecting here after a user is logged in</div>
     </div>
     );
   }    