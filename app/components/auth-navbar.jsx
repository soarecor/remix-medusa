import {
  Link,
  NavLink,
  useLoaderData,
  useRouteLoaderData,
  useMatches,
  Form,
} from "@remix-run/react";
import { BiShoppingBag } from "react-icons/bi";
import pao from "~/assets/pao.png";

export default function Navbar() {
  const links = [
    // {
    //   label: "Home",
    //   url: "/",
    // },
    {
      label: "Products",
      url: "/products",
    },
    // {
    //   label: "About",
    //   url: "/about",
    // },
  ];

  const userId = useLoaderData();

  return (
    <nav className="flex items-center justify-between px-8 py-10 bg-black">
      {/* Site Logo */}
      <div className="font-mono pl-2 text-3xl font-extrabold uppercase">
        <Link to="/">
          <img src={pao} width="100" />
        </Link>
      </div>
      {/* Navigation Links */}
      <div className="space-x-4">
        {links.map((link, index) => (
          <NavLink
            className="inline-flex items-center space-x-1 text-white duration-300"
            key={index}
            to={link.url}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div>
        {userId && (
          <Form method="post" action="/logout" id="logout-form">
            <button className="cta-alt">Logout</button>
          </Form>
        )}

        {userId && (
          <NavLink
            to="/user"
            className="inline-flex items-center space-x-1 text-white duration-300"
          >
            User
          </NavLink>
        )}

        {!userId && (
          <NavLink
            to="/login"
            className="inline-flex items-center space-x-1 text-white duration-300"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}
