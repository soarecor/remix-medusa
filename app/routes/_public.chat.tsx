import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { IframeDocument } from "~/components/iframeDoc";
import hero from "~/assets/home-hero.jpg";
import {Button} from "~/components/ui/button"

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
       <span className="text-9xl font-semibold ">CHAT.</span> 
       <span className="text-3xl block pt-10">An agent from the future will assist with your questions on the impact of climate change. </span>  
       <div>
    </div>
       </span>
    </div>


    <div className="text-6xl text-center py-20"> CHAT WITH AN AGENT FROM THE FUTURE.</div>
    <div className="m-auto w-screen md:w-8/12">
    <IframeDocument>Hello, IframeDocument</IframeDocument>
    </div>

   </div>
   );
 }
