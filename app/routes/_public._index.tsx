import type { V2_MetaFunction } from "@remix-run/node";
import { Link, NavLink } from "@remix-run/react";
import { IframeDocument } from "~/components/iframeDoc";
import hero from "~/assets/home-hero.png";
import heroM from "~/assets/hero-mobile1.png";
import {Button} from "~/components/ui/button"
import root from "~/assets/root1.svg";
import forest from "~/assets/home-hero.png";



export const meta: V2_MetaFunction = () => {
  return [
    { title: "zer0 supply" },
    { name: "description", content: "zer0 trees in 2050" },
  ];
};

export default function IndexRoute() {
  // const { cartId } = useLoaderData<typeof loader>();

  return (
    <div className="">
     {/* {cartId} */}
    <div className="relative">
     <img className="hidden lg:block lg:w-screen" src={hero}  />
     <img className="lg:hidden w-screen" src={heroM}  />
     {/* <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-76 text-white"> */}
     <div className="absolute top-1/4 lg:top-1/3 grid grid-cols-5 items-center px-8 lg:px-0 lg:pr-5 w-full">
       <span className="col-span-4 lg:col-start-2 justify-center text-white">
            <span className="text-2xl md:text-2xl  sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl font-bold">The year is 2050.</span> 
            <span className="text-lg md:text-2xl  sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold block pt-4 md:pt-10 drop-shadow-lg">90% of earths forests are impacted by climate change.</span>  
            <div>
                <Button className="mt-4 md:mt-10" size="lg" variant="secondary"> <span className="text-base md:text-lg lg:text-2xl 2xl:text-3xl p-0 md:p-3">                      <NavLink
                            to="/chat"
                            className=""
                        >
                            CHAT TO LEARN MORE
                        </NavLink></span></Button>
            </div>
       </span>
     </div>
    </div>

        {/* ARTICLE 1 */}
    <div className="flex flex-col items-center justify-center lg:px-0 my-20">
        {/* xl:grid lg:max-w-none xl:grid-cols-5 */}
        <div className="relative h-full  col-start-2 col-span-1  grid place-items-center content-center">
            <img className="w-40" src={root} />
        </div>
        <div className="grid col-span-3 p-0 xl:p-20 m-10 h-full place-items-center content-center gap-0">
            <div className="lg:w-3/5 text-xl">
                <span className="block font-bold text-xl md:text-3xl lg:text-6xl mb-4">
                    zer0 trees
                </span>
                <span className="block text-base  md:text-2xl leading-relaxed md:leading-loose">
                    While climate change might be visible in certain parts of the 
                    globe, we are all responsible for the outcome. 
                    At this rate of decline, we are on a trajectory that will 
                    put us in a bleak position in 2050. We are hoping to shed some 
                    light on what the future will look like in this scenario - a future on a trajectory to zero trees.
                    At zer0.supply, we transcend the present to shape a future where every action counts. Drawing from the stark realities of a treeless future, where environmental devastation has ravaged our planet, we lead the charge in cultivating a sustainable tomorrow. In a world where forests are scorched, temperatures are relentless, and water is scarce, we're committed to redefining the narrative. Our mission is to reverse the countdown to zero trees, empowering individuals and communities with knowledge. Together, we envision a future where life thrives in harmony with nature, crafting a legacy of resilience and abundance for generations to come.
                </span>
            </div>
        </div>
    </div>

    <div className="flex flex-col-reverse items-center justify-center lg:px-0 my-20">
        <div className="grid col-start-2 col-span-2 p-0 xl:p-20 m-10 h-full place-items-center content-center gap-0">
            <div className="lg:w-3/5 text-xl">
                <span className="block font-bold text-xl md:text-3xl lg:text-6xl mb-4">
                    Deforestation is still an issue
                </span>
                <span className="block text-base md:text-2xl leading-relaxed md:leading-loose">
                The world was once a much greener place. 10,000 years ago, 71% of the Earth’s land surface – a total of 10.6 billion hectares – was covered by forests, shrubs, and wild grasslands. Today, half of this land is mostly used for agriculture, grazing, and urban settlements, while the surface still covered by forests and grassland has dropped down to just around 4.1 billion hectares. To put things into perspective, we are losing forests at a rate equivalent to 27 soccer fields per minute.
                </span>
            </div>
        </div>
        <div className="h-full col-span-2 grid justify-center content-center">
            <img className="max-h-full object-contain" src={forest} />
        </div>
    </div>

    <div className="flex flex-col items-center justify-center lg:px-0 my-20">
        <div className="relative h-full col-start-2 col-span-1 lg:grid-cols-1 grid place-items-center content-center">
              <img className="w-40" src={root} />
        </div>
        <div className="grid col-span-3 p-0 xl:p-20 m-10 h-full place-items-center content-center gap-0">
            <div className="lg:w-3/5 text-xl">
                <span className="block font-bold text-xl md:text-3xl lg:text-5xl  mb-4">
                Today, nearly 1.6 Billion Hectares of Forest Are at High Risk
                </span>
                <span className="block text-base md:text-2xl leading-relaxed md:leading-loose">
                The impending threat of deforestation and forest degradation casts a shadow over the earth's lungs, with a staggering 47% of global forests facing high risks of depletion or deterioration by 2030. While the distinction between deforestation and forest degradation is crucial, the consequences of both are equally devastating.

Deforestation, often driven by unsustainable and unlawful agricultural practices, entails the complete obliteration of forests, making way for lucrative cash crops like palm oil and rubber. 

Conversely, forest degradation, though less perceptible, poses an equally grave threat, rendering vibrant forests into mere shadows of their former selves. As their vitality diminishes, crucial ecological functions such as air and water purification, biodiversity support, and habitat provision for wildlife are significantly compromised. 

A convergence of factors contributes to forest degradation, including the relentless impact of climate change, manifesting in heightened temperatures, erratic weather patterns, and an increased vulnerability to forest fires, pest infestations, and diseases. However, the primary culprit remains unsustainable and illegal logging - a lucrative industry fueled by the insatiable demand for timber, paper products and fuel.
                </span>
            </div>
        </div>
    </div>

    <div className="flex flex-col items-center justify-center lg:px-0 my-20">
        <div className="grid col-span-3 p-0 xl:p-20 m-10 h-full place-items-center content-center gap-0">
            <div className="lg:w-3/5 text-xl">
                <span className="block font-semibold text-xl md:text-3xl lg:text-5xl mb-4">
                Nearly <span className="italic">75%</span> of the Amazon rainforest has been exhibiting signs of degradation since the early 2000s
                </span>
                <span className="block text-base md:text-2xl leading-relaxed md:leading-loose">
      Recent studies reveal a distressing trend, with more than 75% of the rainforest exhibiting signs of degradation since the early 2000s, potentially signaling an irreversible shift towards savanna terrain.

Evidently, the interplay of deforestation and climate change emerges as the chief catalyst driving this decline. An analysis of satellite data unequivocally exposes a consistent erosion of the rainforest's resilience, particularly pronounced in regions proximate to human encroachment and those subjected to dwindling rainfall, laying bare the vulnerability of this system.

The ominous implications of this echo throughout the Amazon, heightening the risk of widespread ecosystem collapse. Despite its seemingly unchanged facade, the rainforest's capacity to recuperate from adversities such as droughts is diminishing, laying the groundwork for a monumental ecological paradigm shift that threatens the delicate balance of biodiversity, global carbon sequestration, and the overarching trajectory of climate change.

While the exact timeline remains elusive, experts warn of an imminent threshold, a critical juncture that could precipitate the irreversible transformation of the Amazon. The confluence of multifaceted stressors, from droughts and deforestation to degradation and climate fluctuations, portends the inevitability of this catastrophic tipping point, with profound ramifications for the planet's intricate climatic equilibrium.

Tropical forests, epitomized by the Amazon, assume an indispensable role in climate regulation. Serving as reservoirs of biodiversity, these ecosystems not only sustains a quarter of the world's biodiversity but also orchestrates the vital natural cycles fundamental to the planet's sustenance.
                </span>
            </div>
        </div>
    </div>


   </div>
   );
 }

