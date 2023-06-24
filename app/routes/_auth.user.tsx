import { getUserFromSession } from '~/data/auth.server';
import { useLoaderData } from "@remix-run/react";
import { Form,NavLink } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno


export async function loader({request}: LoaderArgs){
  console.log('REQUEST', request)
  return getUserFromSession(request)
};

export default function AuthRoute() {
  const userId = useLoaderData();
    return (
     <div className="w-full mt-8">
        {userId}
    
        <div>We are redirecting here after a user is logged in</div>
     </div>
     );
   }    