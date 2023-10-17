import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { IframeDocument } from "~/components/iframeDoc";
import hero from "~/assets/home-hero.png";
import heroM from "~/assets/hero-mobile.png";
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
     <img className="hidden md:block md:w-screen" src={hero}  />
     <img className="md:hidden" src={heroM}  />
       <div className="absolute top-1/4 md:top-1/3 grid grid-cols-5 items-center px-8 md:p-0 md:w-screen">
       <span className="col-span-4 md:col-start-2 justify-center text-white">
            <span className="text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl font-semibold ">CHAT..</span> 
            <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold block pt-4 md:pt-10 drop-shadow-lg max-w-3xl leading-relaxed">An agent from the future will assist with your questions on the impact of climate change </span>  
       </span>
     </div>
    </div>


    <div className="text-6xl text-center py-20"> </div>
    <div className="m-auto mt-20 w-screen md:w-8/12">
    <IframeDocument>Hello, IframeDocument</IframeDocument>
    </div>

   </div>
   );
 }
