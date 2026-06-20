import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Routine } from "@/components/sections/Routine";
import { Progress } from "@/components/sections/Progress";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Approach />
      <Routine />
      <Progress />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}
