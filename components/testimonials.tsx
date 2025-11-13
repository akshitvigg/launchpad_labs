import { TestimonialIcon } from "@/icons/testimonialicon"
import Image from "next/image"


export const Testimonial = () => {
  return (
    <div className=" h-[1000px] font-sans bg-white">
      <div className="flex justify-center pt-8">
        <TestimonialIcon />
      </div>

      <div className=" flex justify-center">
        <div className=" mt-38">
          <p className="font-semibold text-[24px] text-[#202020]">What Founders Are Saying About <br /> LaunchPad Labs</p>
          <div>
            <Image src={"/dev.png"} width={510} height={300} alt="software dev" />
          </div>

        </div>
        <div className=" mt-10">
          {/* <div><Image src={"/fog.png"} className=" absolute translate-y-10" width={610} height={300} alt="software dev" /></div> */}
          <div>        <Image src={"/testcard1.png"} width={320} height={300} alt="software dev" /></div>

          <div>    <Image src={"/testcard2.png"} width={320} height={300} alt="software dev" /></div>
          <div>        <Image src={"/testcard3.png"} width={320} height={300} alt="software dev" /></div>
        </div>
        <div className=" -translate-y-15">
          <div>        <Image src={"/testcard4.png"} width={320} height={300} alt="software dev" /></div>
          <div>    <Image src={"/testcard5.png"} width={320} height={300} alt="software dev" /></div>
          <div>        <Image src={"/testgur.png"} width={320} height={300} alt="software dev" /></div>
          <div>        <Image src={"/testcard7.png"} width={330} height={300} alt="software dev" /></div>
        </div>
      </div>
      <div className="-translate-y-15 ">
        <hr />
      </div>
    </div>
  )
}
