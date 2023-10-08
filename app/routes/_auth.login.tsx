import { signup, login } from '~/data/auth.server';
import { validateCredentials } from '~/data/validation.server';
import AuthForm from '~/components/AuthForm';
import type { ActionArgs } from "@remix-run/node"; // or cloudflare/deno
import forest from "~/assets/forest.jpg";
import pao from "~/assets/pao.png";
import paoBlack from "~/assets/pao-black.png"

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

export default function LoginRoute() {

  return (

  <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    <div className="relative hidden h-full flex-col bg-muted text-white dark:border-r md:hidden lg:flex">
      <img className="h-screen" src={forest} alt=""/>
      {/* <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={pao} alt=""/> */}
    </div>
    <div className="h-screen grid place-items-center content-center gap-0">
      {/* <img className="text-left" src={paoBlack} alt=""/> */}
      <AuthForm />
    </div>
  </div>
  );
}  
