import { Hero } from "@/components/herosection";
import { Navbar } from "@/components/navbar";
import { OurImpact } from "@/components/ourimpact";
import { OurWork } from "@/components/ourwork";
import { WhyLaunchPad } from "@/components/whylanuchpad";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurImpact />
      <OurWork />
      <WhyLaunchPad />
    </>

  )
}
