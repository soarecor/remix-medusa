import { Outlet } from '@remix-run/react';
import AuthNavbar from "~/components/auth-navbar";
import { getUser } from '~/data/auth.server';
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno

export async function loader({request}: LoaderArgs){
    return getUser(request)
  };

export default function AuthLayout() {
  return (
    <>
      <AuthNavbar />
      <Outlet />
    </>
  );
}