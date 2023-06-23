import { signup, login } from '~/data/auth.server';
import { validateCredentials } from '~/data/validation.server';
import AuthForm from '~/components/AuthForm';
import type { ActionArgs } from "@remix-run/node"; // or cloudflare/deno


export default function LoginRoute() {
    return <AuthForm />;
   }


export async function action({ request }: ActionArgs) {
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