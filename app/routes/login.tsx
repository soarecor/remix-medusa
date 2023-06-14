import { createClient } from "~/utils/client";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { redirect } from '@remix-run/node';
import { signup, login } from '~/data/auth.server';
import { validateCredentials } from '~/data/validation.server';
import AuthForm from '~/components/AuthForm';

// export const loader = async () => {
//     const client = createClient();
//     const { customer } = await client.auth.authenticate({
//         email: 'user@example.com',
//         password: 'supersecret'
//       })
    //   ({
    //     first_name: 'Alec',
    //     last_name: 'Reynolds',
    //     email: 'user@example.com',
    //     password: 'supersecret'
    //   });
//     return json(customer);
//   };

export default function LoginRoute() {
    return <AuthForm />;
   }


export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }

  try {
    if (authMode === 'login') {
        return await login(credentials);
        // return redirect('/index');
    } else {
      return await signup(credentials);
    //   return redirect('/index');
    }
  } catch (error) {
    if (error.status === 422) {
      return { credentials: error.message };
    }
  }
}

// export function links() {
//   return [{ rel: 'stylesheet', href: authStyles }];
// }