import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { IframeDocument } from "~/components/iframeDoc";
import hero from "~/assets/home-hero.jpg";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function IndexRoute() {
  // const { cartId } = useLoaderData<typeof loader>();
  return (
    <div>
     {/* {cartId} */}
 
    <div className="relative">
     <img className="w-screen" src={hero}  />
     <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-76 text-white">
       <span className="text-9xl">FAST FORWARD TO THE END.</span> 
       <span className="text-3xl block">Climate change has destroyed the world in 2050. </span>  </span>
    </div>


    <div className="text-6xl text-center py-20"> CHAT WITH AN AGENT FROM THE FUTURE.</div>
    <div className="m-auto w-screen">
    <IframeDocument>Hello, IframeDocument</IframeDocument>;
    </div>

   </div>
   );
 }

