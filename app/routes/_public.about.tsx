import { getCartCookie } from "~/data/cart.server";
import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { createClient } from "~/utils/client";
import { getUser } from '~/data/auth.server';
import { cartItems } from '~/data/cart.server'
import {Button} from "~/components/ui/button"
import hero from "~/assets/roots-slim.png";
import root from "~/assets/root1.svg";

export async function loader({request}: LoaderArgs){
  const items = await cartItems(request)

  const user = await getUser(request)
  const userId = user?.id ? user.id : null

  if(items) {
    return{ userId, itemLength: items.length}
  }

  return { userId, itemLength:0 }
};

export default function AboutRoute() {
  const userId = useLoaderData();
  return (
    <section className="w-full">

      {/* HERO */}
    <div className="relative">
        <img className="w-screen" src={hero} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-76 text-white">
            <span className="text-9xl font-bold">ROOTS.</span>
        </div>
    </div>

    {/* ARTICLE 1 */}
    <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-5 lg:px-0">
        {/* 1 */}
        <div className="relative h-full  col-start-2 col-span-1 lg:grid-cols-1 grid place-items-center content-center">
            {/* border-solid border-4 border-sky-500 */}
            <img className="w-40" src={root} />
        </div>
        <div className="grid col-span-3 p-20 h-full place-items-center content-center gap-0">
            {/* <img className="text-left" src={paoBlack} alt=""/> */}
            {/* <AuthForm /> */}
            <div className="w-3/5 text-xl">
                <span className="block font-bold text-3xl mb-4">
                    Why Pao?
                </span>
                <span className="block leading-relaxed">
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

    <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-5 lg:px-0">
        <div className="grid col-span-3 p-20 h-full place-items-center content-center gap-0">
            <div className="w-3/5 text-xl">
                <span className="block font-bold text-3xl mb-4">
                    Deforestation is still an issue
                </span>
                <span className="block leading-relaxed">
                The world was once a much greener place. 10,000 years ago, 71% of the Earth’s land surface – a total of 10.6 billion hectares – was covered by forests, shrubs, and wild grasslands. Today, half of this land is mostly used for agriculture, grazing, and urban settlements, while the total surface still covered by forests and grassland dropped down to just around 4.1 billion hectares. To put things into perspective, we are losing forests at a rate equivalent to 27 soccer fields per minute.
                </span>
            </div>
        </div>
        <div className="relative h-full col-start-4 col-span-1 lg:grid-cols-1 grid place-items-center content-center">
            <img className="w-40" src={root} />
        </div>
    </div>

    <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-5 lg:px-0">
        <div className="relative h-full col-start-2 col-span-1 lg:grid-cols-1 grid place-items-center content-center">
              <img className="w-40" src={root} />
        </div>
        <div className="grid col-span-3 p-20 h-full place-items-center content-center gap-0">
            <div className="w-3/5 text-xl">
                <span className="block font-bold text-3xl mb-4">
                Nearly 1.6 Billion Hectares of Forest Are at High Risk of Degradation
                </span>
                <span className="block leading-relaxed">
                In terms of land mass, forest degradation is an even bigger problem than deforestation. Nearly 1.6 billion hectares of forest are at high risk of degradation in the next decade. This phenomenon occurs when forest ecosystems are weakened to a point where they lose their ability to provide goods and services to people and nature. Even though climate change is a contributing factor in degradation, the main trigger for it has been unsustainable and illegal logging. This, along with timber extraction, are the major drivers in Asia and Latin America: together, they account for more than 70% of total tropical forest degradation. In Africa, this occurs as forests are exploited to obtain fuelwood and charcoal. Indeed, more than 80% of people in Sub-Saharan Africa do not have clean cooking fuels and thus heavily rely on wood.
                </span>
            </div>
        </div>
    </div>
    </section>
  );
}

{/* <text x="0" y="503" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by anisah mahfudhah billah</text><text x="0" y="508" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg> */}
