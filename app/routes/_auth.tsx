import { Outlet } from '@remix-run/react';
import Navbar from "~/components/navbar";
import { getUserFromSession } from '~/data/auth.server';
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno

export async function loader({request}: LoaderArgs){
    // console.log('REQUEST', request)
    return getUserFromSession(request)
  };

export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}