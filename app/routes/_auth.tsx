import { Outlet } from '@remix-run/react';
import AuthNavbar from "~/components/auth-navbar";
import { getUserFromSession } from '~/data/auth.server';
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno

export async function loader({request}: LoaderArgs){
    return getUserFromSession(request)
  };

export default function AuthLayout() {
  return (
    <>
      <AuthNavbar />
      <Outlet />
    </>
  );
}