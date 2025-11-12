import { Calendar } from "@/components/calendar";
import { Hero } from "@/components/herosection";
import { Navbar } from "@/components/navbar";
import { OurApproach } from "@/components/ourapproach";
import { OurImpact } from "@/components/ourimpact";
import { OurProcess } from "@/components/ourprocess";
import { OurWork } from "@/components/ourwork";
import { Testimonial } from "@/components/testimonials";
import { WhyLaunchPad } from "@/components/whylanuchpad";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurImpact />
      <OurWork />
      <WhyLaunchPad />
      <OurApproach />
      <OurProcess />
      <Testimonial />
      <Calendar />
    </>

  )
}
