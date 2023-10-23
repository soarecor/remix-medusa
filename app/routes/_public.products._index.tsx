import { useLoaderData } from "@remix-run/react";
import ProductCard from "~/components/product-card";
import { createClient } from "~/utils/client";
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import bag from "~/assets/bag.png";
import tote from "~/assets/alt-tote.png";
import tree from "~/assets/tree.svg";


export const loader = async ({request}:LoaderArgs) => {
  const client = createClient();
  const { products } = await client.products.list();
  console.log("PRODUCTs", products)

  return {products}
};

export default function ProductsIndexRoute() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div className="w-full">
    <div className="grid xl:h-[75vh] content-center justify-items-center grid-cols-1 xl:grid-cols-5 bg-black">
        <img className="py-6 md:col-start-1 xl:col-start-2 xl:col-span-1  px-8 w-[50vw] md:w-20vw] sm:w-[35vw] xl:w-[15vw]" src={bag}  />
     {/* <img className="absolute z-10 top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 xl:w-[14vw]" src={tote}  /> */}

       <div className="py-8 md:col-start-4 xl:col-start-3 xl:col-span-2 self-center px-8 xl:p-0">
       <span className="text-white">
            <span className="text-lg md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-8xl font-semibold ">Totes</span> 
            <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold block pt-4 md:pt-10 drop-shadow-lg max-w-3xl leading-relaxed"> Reusable. </span>
            <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold block pt-4 md:pt-10 drop-shadow-lg max-w-3xl leading-relaxed"> Made from Recycled Cotton. </span>
            <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold block pt-4 md:pt-10 drop-shadow-lg max-w-3xl leading-relaxed"> Chill. </span> 
            <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold block pt-4 md:pt-10 drop-shadow-lg max-w-3xl leading-relaxed"> Plant 1          <img src={tree} className="inline-block" width="25" /> for every sale.  </span> 
       </span>
    </div>
    </div>

        {/* UNCOMMENT THESE LINES WHEN THE PRODUCT IS READY */}
        <section className="my-20">
      <h1 className="text-center text-6xl my-10">COMING SOON</h1>
      <div className="mx-auto text-2xl my-2 w-[50vw] sm:max-w-lg"> <span className="">We are partnering with a nature conscious organization that will plant trees for every item purchased.  </span></div>
        </section>
      {/* <div className="grid grid-cols-1 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
    {/* UNCOMMENT THESE LINES WHEN THE PRODUCT IS READY */}
      {/* <h1 className="text-center">Latest Arrivals</h1>
      <div className="grid grid-cols-1 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
    </div>
  );
}
