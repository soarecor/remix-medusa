import { Outlet } from '@remix-run/react';
import AuthNavbar from "~/components/auth-navbar";

export default function ExpensesAppLayout() {
  return (
    <>
      <AuthNavbar />
      <Outlet />
    </>
  );
}