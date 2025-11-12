import { OurProcessIcon } from "@/icons/ourprocessicon"
import Image from "next/image"

export const OurProcess = () => {

  return (
    <div className="bg-white font-sans h-[1300px]">
      <div className=" flex justify-center pt-21">
        <OurProcessIcon />
      </div>
      <p className="text-[28px] text-center mt-6 font-semibold text-[#202020]">The LaunchPad Process</p>
      <p className="text-center font-medium text-[16px] mt-3 text-[#525252]">A transparent, founder-friendly journey  from idea to live MVP in just <span className="font-bold text-[#333333]">2 weeks</span>.</p>
      <div className=" flex justify-center gap-1 mt-13">
        <Image src={"/process.png"} width={401} height={300} alt="process" />

        <Image src={"/processsec.png"} width={401} height={300} alt="process" />

        <Image src={"/processthir.png"} width={401} height={300} alt="process" />
      </div>

      <div className=" flex justify-center gap-1 mt-1">
        <Image src={"/deliverypro.png"} width={608} height={300} alt="process" />

        <Image src={"/supportpro.png"} width={608} height={300} alt="process" />
      </div>
    </div>
  )
}
