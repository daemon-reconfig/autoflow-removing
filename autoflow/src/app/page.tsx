import { HeroParallax } from "@/components/global/connect-parallex";
import { ContainerScroll } from "@/components/global/container-scroll-anim";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md 
      !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#230219_100%)]">
        </div>
        <div className="flex flex-col ">
          <ContainerScroll
            titleComponent ={
              <div className="flex items-center justify-center flex-col ">
                <Button size={'lg'}
                className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D]
                bg-[#19092f] hover:bg-[#8336ee] group transition-all flex items-center justify-center
                gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500
                  to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r
                  group-hover:from-black group-hover:to-black">
                    Start Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent 
                bg-gradient-to-b from-white to-neutral-600 font-sans font-bold pb-5">
                  Automate your workflow with AutoFlow
                </h1>
              </div>
            }
          >
          </ContainerScroll>
        </div>
      </section>
      <InfiniteMovingCards 
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products}>
        </HeroParallax>
      </section>
      <section className="mt-[-500px]">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">

        </div>
      </section>
    </main>
  );
}
