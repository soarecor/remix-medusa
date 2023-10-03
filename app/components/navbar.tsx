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
      label: "Story",
      url: "/about",
    },
    {
      label: "",
      url: "/products",
    },
  ];

  const data = useLoaderData();
  // console.log("CART DATA", data);

  const userId = data.userId;
  const itemLength = data.itemLength;

  return (
    <nav className="flex items-center justify-between px-8 py-10 bg-black">
      {/* Site Logo */}
      <div className="font-mono pl-2 text-3xl font-extrabold uppercase">
        <Link to="/">
          <img src={pao} width="100" />
        </Link>
      </div>
      {/* Navigation Links */}
      <div className="space-x-4 text-white">
        {links.map((link, index) => (
          <NavLink key={index} to={link.url} className="navlink">
            {link.label}
          </NavLink>
        ))}
      </div>
      {/* Shopping Cart Indicator/Checkout Link */}
      <div className="flex items-center justify-between">
        <div className="font-semibold text-white hover:text-emerald-500">
          <NavLink
            to="/cart"
            className="inline-flex items-center space-x-1 text-white duration-300"
          >
            <BiShoppingBag className="text-xl" /> <span>{itemLength}</span>
          </NavLink>
        </div>

        <div className="px-4">
          {userId && (
            <Form method="post" action="/logout" id="logout-form">
              <button className="cta-alt text-white">Logout</button>
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
      </div>
    </nav>
  );
}
