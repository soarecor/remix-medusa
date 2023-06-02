import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { createClient } from "~/utils/client";

export const loader = async () => {
 const client = createClient();
 const { products } = await client.products.list();
 return json(products);
};

export default function ProductsIndexRoute() {
 const products = useLoaderData();

 return (
  <div className="w-full mt-8">
   <h1>Latest Arrivals</h1>
   <ul>
     {products.map((product) => (
     <li key={product.id}>{product.title}</li>
     ))}
   </ul>
  </div>
  );
}