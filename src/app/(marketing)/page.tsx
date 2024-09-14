import GetStartedButton from "@/components/buttons/get-started-button";
import { ModeToggle } from "../../components/buttons/dark-light-button";
import AnimatedOceanWaveGraphCard from "@/components/animated-waves";
import { HeroChart } from "@/components/hero-chart";

export default function Home() {
  return (
    <main className="px-4 flex flex-col min-h-screen items-start">
      {/* TODO  */}
      <ModeToggle />
      <div className="relative mx-auto w-full flex flex-col items-center gap-y-8 ">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
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
    <section className="container mx-auto px-4 py-12 space-y-6 sm:space-y-8">
      <Heading />
      <h3 className="text-foreground max-w-3xl mx-auto text-center text-2xl sm:text-3xl md:text-4xl tracking-wide leading-tight sm:leading-snug md:leading-10">
        A community-driven initiative for data scientists in Pakistan.
      </h3>
      <p className="text-muted-foreground max-w-3xl mx-auto text-center text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-loose md:leading-10">
        Bringing together data scientists to network, collaborate, educate, and
        innovate.
      </p>
      <div className="flex flex-col items-center justify-center">
        <GetStartedButton>Join Now</GetStartedButton>
      </div>
    </section>
  );
}
