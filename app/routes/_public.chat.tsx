import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { IframeDocument } from "~/components/iframeDoc";
import hero from "~/assets/home-hero.png";
import heroM from "~/assets/hero-mobile.png";
import {Button} from "~/components/ui/button"
import { MoveDown } from 'lucide-react'

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
       <div className="absolute top-1/4 md:top-1/3 grid grid-cols-5 items-center px-8 lg:pr-5 md:w-screen">
       <span className="col-span-4 lg:col-start-2 justify-center text-white">
            <span className="text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl font-semibold ">CHAT...</span> 
            <span className="text-md leading-relaxed lg:leading-[2rem] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold block pt-4 md:pt-10 max-w-3xl ">An agent from the future will assist with any questions on the impact of climate change. </span>  
       </span>
     </div>
    </div>

    <div className="px-12 text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl md:text-5xl text-center  py-4 md:py-20"> Chat here 
    <span className="inline-block text-black outline-none animate-bounce"><MoveDown size={40}/></span></div>
    
    <div className="bg-black">
      <div className="bg-black m-auto lg:mt-10 w-screen md:w-8/12">
      <IframeDocument>Hello, IframeDocument</IframeDocument>
      </div>
    </div>

   </div>
   );
 }
