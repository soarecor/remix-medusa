import { getUserFromSession } from '~/data/auth.server';
import { useLoaderData } from "@remix-run/react";
import { Form,NavLink } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno


export async function loader({request}: LoaderArgs){
  console.log('REQUEST', request)
  return getUserFromSession(request)
};

export default function AboutRoute() {
  const userId = useLoaderData();
    return (
     <div className="w-full mt-8">
           {userId &&        <Form method="post" action="/logout">
          <button className="cta">Logout</button>
        </Form>}
    {!userId && <NavLink
     to="/login"
     className="inline-flex items-center space-x-1 transition-colors duration-300"
    >
      Login
    </NavLink>}
    <div>        
        
 </div>
        <div>We are redirecting here after a user is logged in</div>
     </div>
     );
   }    