import { useLoaderData } from "@remix-run/react";
import ProductCard from "~/components/product-card";
import { createClient } from "~/utils/client";
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno

export const loader = async ({request}:LoaderArgs) => {
  const client = createClient();
  const { products } = await client.products.list();

  return {products}
};

export default function ProductsIndexRoute() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div className="w-full p-4 my-8">
      <h1 className="text-center">Latest Arrivals</h1>
      <div className="grid grid-cols-1 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
