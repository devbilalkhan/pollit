import { HeroChart } from "@/components/hero-chart";
import Logo from "@/components/logo";
import Particles from "@/components/magicui/particles";
import AnimatedNeuralNetwork from "@/components/neural-network";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="px-4 flex flex-col min-h-screen items-start">
      {/* TODO  */}
      <HeroChart />

      <div className="relative mx-auto w-full flex flex-col items-center gap-y-8 ">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
          <span className="pointer-events-none whitespace-pre-wrap bg-clip-text text-cente leading-none text-foreground dark:from-white dark:to-slate-900/10">
            <Hero />
          </span>
          {/* <Particles
            className="absolute inset-0"
            quantity={300}
            ease={80}
            color="#000"
            refresh
          /> */}
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
    <section className="space-y-7">
      <Heading />
      <h3 className="text-foreground max-w-3xl text-center text-4xl tracking-wide leading-10">
        A community-driven initiative for data scientists in Pakistan.
      </h3>
      <p className="text-muted-foreground max-w-3xl text-center text-2xl leading-10">
        Bringing together data scientists to network, collaborate, educate, and
        innovate.
      </p>
      <div className="flex flex-col md:flex-row  items-center justify-center gap-3">
        <Button className="w-full md:w-32">Join Now</Button>
        <Button className="w-full md:w-32" variant="secondary">
          Explore
        </Button>
      </div>
    </section>
  );
}
