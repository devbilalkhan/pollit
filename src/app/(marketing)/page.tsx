import GetStartedButton from "@/components/buttons/get-started-button";
import { ModeToggle } from "../../components/buttons/dark-light-button";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import BoxReveal from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-start">
      {/* TODO  */}
      <ModeToggle />

      <div className="relative mx-auto w-full flex flex-col items-center gap-y-8 ">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
          <span className="pointer-events-none whitespace-pre-wrap bg-clip-text text-cente leading-none text-foreground dark:from-white dark:to-slate-900/10">
            <Hero />
          </span>
        </div>
      </div>
    </main>
  );
}

export function Heading() {
  return (
    <h1 className="text-5xl md:text-6xl text-center font-extrabold text-pretty tracking-tighter leading=[1.15]">
      Sochspace
    </h1>
  );
}

export function Hero() {
  return (
    <section className="container mx-auto  max-w-xl bg-transparent space-y-6 sm:space-y-8">
      <FlickeringGrid
        className="z-0 absolute inset-0 w-full mx-auto"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.3}
        flickerChance={0.1}
      />
      {/* <Heading />
      <h3 className="px-4 text-foreground max-w-3xl mx-auto text-center text-2xl sm:text-3xl md:text-4xl tracking-wide leading-tight sm:leading-snug md:leading-10">
        A community-driven initiative for data scientists in Pakistan
      </h3>
      <p className="px-4 text-muted-foreground max-w-3xl mx-auto text-center text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-loose md:leading-10">
        Bringing together data scientists to network, collaborate, educate, and
        innovate.
      </p>
      <div className="flex flex-col items-center justify-center">
        <GetStartedButton>Join Now</GetStartedButton>
      </div> */}
      <BoxRevealDemo />
    </section>
  );
}

export async function BoxRevealDemo() {
  return (
    <div className="px-4 h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Sochspace<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1.5rem]">
          Community driven initiative{" "}
          <span className="text-[#5046e6]">Data Scientists</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="my-[1.5rem] ">
          <p className="space-y-3 text-[1.1rem]">
            -&gt; Bringing together data scientists to
            <span className="font-semibold text-[#5046e6]"> network</span>,{" "}
            <span className="font-semibold text-[#5046e6]">educate</span>,{" "}
            <span className="font-semibold text-[#5046e6]">collaborate</span>,{" "}
            and
            <span className="font-semibold text-[#5046e6]"> innovate</span>
            . <br />
            -&gt; Everyone is welcome to join <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <GetStartedButton>Join us</GetStartedButton>
      </BoxReveal>
    </div>
  );
}
