import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { IframeDocument } from "~/components/iframeDoc";
import hero from "~/assets/home-hero.png";
import heroM from "~/assets/hero-mobile.png";
import {Button} from "~/components/ui/button"
import root from "~/assets/root1.svg";
import forest from "~/assets/home-hero.png";



export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function IndexRoute() {
  // const { cartId } = useLoaderData<typeof loader>();

  return (
    <div className="">
     {/* {cartId} */}
    <div className="relative">
     <img className="hidden md:block md:w-screen" src={hero}  />
     <img className="md:hidden" src={heroM}  />
     {/* <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-76 text-white"> */}
     <div className="absolute top-1/4 md:top-1/3 grid grid-cols-5 items-center px-8 md:p-0 md:w-screen">
       <span className="col-span-4 md:col-start-2 justify-center text-white">
            <span className="text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl font-semibold ">FAST FORWARD TO 2050.</span> 
            <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold block pt-4 md:pt-10 drop-shadow-lg">The world is impacted by climate change. </span>  
            <div>
                <Button className="mt-4 md:mt-10" size="lg" variant="secondary"> <span className="text-base md:text-lg lg:text-2xl 2xl:text-3xl p-0 md:p-3"> CHAT TO LEARN MORE</span></Button>
            </div>
       </span>
       </div>
    </div>

        {/* ARTICLE 1 */}
    <div className="flex flex-col items-center justify-center xl:grid lg:max-w-none xl:grid-cols-5 lg:px-0 my-20">
        <div className="relative h-full  col-start-2 col-span-1 lg:grid-cols-1 grid place-items-center content-center">
            <img className="w-40" src={root} />
        </div>
        <div className="grid col-span-3 p-0 xl:p-20 m-10 h-full place-items-center content-center gap-0">
            <div className="lg:w-3/5 text-xl">
                <span className="block font-bold text-xl md:text-3xl mb-4">
                    Why Pao?
                </span>
                <span className="block text-base  md:text-2xl leading-relaxed md:leading-loose">
                    Why a word that is used in the Indian
                    subcontinent, Brazil, Portugal and Macao?
                    Pao (meaning bread) is a simple word that
                    unites us, no matter which part of the world you come from.
                    While climate change might be visible in certain parts of the 
                    globe, we are all responsible for the outcome. 
                    At the rate of decline, we are likely on a trajectory that will 
                    put us in a bleak position in 2050. We are hoping to shed some 
                    light on what the future will look like in this scenario - some 
                    food for thought.
                </span>
            </div>
        </div>
    </div>

    <div className="flex flex-col-reverse items-center justify-center xl:grid lg:max-w-none xl:grid-cols-5 lg:px-0 my-20">
        <div className="grid col-start-2 col-span-2 m-10 h-full place-items-center xl:place-items-start content-center gap-0">
            <div className="lg:w-3/5 text-xl">
                <span className="block font-bold text-3xl mb-4">
                    Deforestation is still an issue
                </span>
                <span className="block text-base md:text-2xl leading-relaxed md:leading-loose">
                The world was once a much greener place. 10,000 years ago, 71% of the Earth’s land surface – a total of 10.6 billion hectares – was covered by forests, shrubs, and wild grasslands. Today, half of this land is mostly used for agriculture, grazing, and urban settlements, while the total surface still covered by forests and grassland dropped down to just around 4.1 billion hectares. To put things into perspective, we are losing forests at a rate equivalent to 27 soccer fields per minute.
                </span>
            </div>
        </div>
        <div className="h-full col-span-2 grid justify-center content-center">
            <img className="max-h-full object-contain" src={forest} />
        </div>
    </div>

    <div className="flex flex-col items-center justify-center xl:grid lg:max-w-none xl:grid-cols-5 lg:px-0 my-20">
        <div className="relative h-full col-start-2 col-span-1 lg:grid-cols-1 grid place-items-center content-center">
              <img className="w-40" src={root} />
        </div>
        <div className="grid col-span-3 p-0 xl:p-20 m-10 h-full place-items-center content-center gap-0">
            <div className="lg:w-3/5 text-xl">
                <span className="block font-bold text-3xl mb-4">
                Nearly 1.6 Billion Hectares of Forest Are at High Risk of Degradation
                </span>
                <span className="block text-base md:text-2xl leading-relaxed md:leading-loose">
                In terms of land mass, forest degradation is an even bigger problem than deforestation. Nearly 1.6 billion hectares of forest are at high risk of degradation in the next decade. This phenomenon occurs when forest ecosystems are weakened to a point where they lose their ability to provide goods and services to people and nature. Even though climate change is a contributing factor in degradation, the main trigger for it has been unsustainable and illegal logging. This, along with timber extraction, are the major drivers in Asia and Latin America: together, they account for more than 70% of total tropical forest degradation. In Africa, this occurs as forests are exploited to obtain fuelwood and charcoal. Indeed, more than 80% of people in Sub-Saharan Africa do not have clean cooking fuels and thus heavily rely on wood.
                </span>
            </div>
        </div>
    </div>

   </div>
   );
 }

