import { ArrowDiagonal } from "@/icons/arrowdiagonal"
import { OurWorkIcon } from "@/icons/ourworkicon"
import Image from "next/image"

export const OurWork = () => {
  return (

    <div className="bg-[#F3F7F8] font-sans h-[692px]">
      <div className=" flex justify-center pt-21"> <OurWorkIcon /> </div>
      <p className=" text-center font-semibold mt-6 text-[28px] text-[#202020]">Every product here went from idea to live in 2 weeks</p>
      <p className="text-center  text-[16px] font-medium text-[#525252] mt-3">Built, launched, and loved by real users</p>

      <div className=" flex mt-15 justify-between  ">
        <Image className="-translate-y-4.5" src="/cardpic0.png" width="94" height={300} alt="cardpic" />

        <div className="w-[380px] relative -translate-x-3 h-[316px] bg-white rounded-[16px] shadow-[0_2px_21px_0_rgba(0,0,0,0.1)] overflow-hidden">
          <div className=" absolute top-2 left-2">
            <Image src="/pic1.png" width="364" height={300} alt="cardpic" />
            <div className=" flex justify-between">
              <p className="text-[16px] text-[#404040] font-semibold mt-2">FitAI</p>
              <span className="translate-x-1"><ArrowDiagonal /></span>
            </div>
          </div>
        </div>
        <div className="w-[380px] relative  h-[316px] bg-white rounded-[16px] shadow-[0_2px_21px_0_rgba(0,0,0,0.1)] overflow-hidden">
          <div className=" absolute top-2 left-2">
            <Image src="/cardpic2.png" width="364" height={300} alt="cardpic" />
            <div className=" flex justify-between">
              <p className="text-[16px] text-[#404040] font-semibold mt-2">FinSub</p>
              <span className="translate-x-1"><ArrowDiagonal /></span>
            </div>
          </div>
        </div>
        <div className="w-[380px] translate-x-3 relative  h-[316px] bg-white rounded-[16px] shadow-[0_2px_21px_0_rgba(0,0,0,0.1)] overflow-hidden">
          <div className=" absolute top-2 left-2">
            <Image src="/cardpic3.png" width="364" height={300} alt="cardpic" />
            <div className=" flex justify-between">
              <p className="text-[16px] text-[#404040] font-semibold mt-2">BillFlow</p>
              <span className="translate-x-1"><ArrowDiagonal /></span>
            </div>
          </div>
        </div>
        <Image className="-translate-y-4.5" src="/cardpic4.png" width="71" height={300} alt="cardpic" />
      </div>
    </div>
  )
}
