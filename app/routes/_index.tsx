import type { V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { createClient } from "~/utils/client";

// export const loader = async () => {
//   const client = createClient();
//   const { customer } = await client.auth.getSession()
//   console.log(customer)
//   return json(customer);
// };


export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function IndexRoute() {
  //  const customer = useLoaderData();
  return (
    <div>
     {/* {customer} */}

    <div className="px-12 py-32 text-center text-gray-200 bg-gray-800">
     <h1 className="text-5xl text-gray-100">New arrivals are here</h1>
     <p className="px-8 mt-2 font-semibold text-gray-300">
       The new arrivals have, well, newly arrived. Check out the latest
       options from our summer small-batch release while they're still in
       stock.
     </p>
     <Link
      to="/products"
      className="inline-block px-6 py-2 mt-8 text-sm font-semibold text-gray-700 transition duration-300 bg-gray-100 rounded-md hover:bg-white hover:text-gray-900 hover:scale-110 color"
     >
       Shop New Arrivals
     </Link>
    </div>

   </div>
   );
 }