import { Hero } from "@/components/herosection";
import { Navbar } from "@/components/navbar";
import { OurImpact } from "@/components/ourimpact";
import { OurWork } from "@/components/ourwork";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurImpact />
      <OurWork />
    </>

  )
}
