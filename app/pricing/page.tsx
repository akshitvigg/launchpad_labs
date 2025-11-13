import { PricingGraph } from "@/icons/pricinggraph";
import { PricingIcon } from "@/icons/pricingicon";
import { PricingRocket } from "@/icons/pricingrocket";
import { Tick2Icon } from "@/icons/tick2icon";
import Image from "next/image";

export default function Pricing() {
  return (
    <div className=" pt-[95px] font-sans h-[1150px] bg-[#F3F7F8]">

      <div className=" flex justify-center pt-20 ">
        <PricingIcon />
      </div>
      <p className="text-[28px] text-center font-semibold mt-4.5 text-[#202020]">Two ways to launch fast - and keep growing even faster</p>
      <p className="text-[16px] text-center font-medium mt-2 text-[#525252]">Choose the perfect package to launch and grow your startup</p>


      <div className="relative  flex gap-14 justify-center mt-18">
        <Image
          src="/popback.png"
          width={270}
          height={100}
          alt="mostpopular"
          className="absolute  -translate-y-14 translate-x-76.5 -top-[550] z-0"
        />
        <div className="  w-[401px] border-5 border-[#E8EBEC] h-[594px] bg-[#F5F5F5] rounded-[20px] ">
          <div className=" flex items-center justify-between ml-3 mr-5 ">
            <div><PricingRocket /></div>
            <p className="font-medium text-[13px]  text-[#7C7C7C]">One Time</p>
          </div>
          <div className="ml-6 ">
            <div className="font-semibold text-[20px]  text-[#202020]">MVP Development</div>
            <p className=" text-[15px] mt-1  text-[#525252]">MVP Development Package</p>
          </div>
          <div className="ml-6 flex items-center gap-2">
            <p className="font-semibold text-[21px] translate-y-1.5 line-through  text-[#72747C]">$6500</p>
            <p className=" text-[37px]  font-bold  text-[#363A47]">$4997</p>
          </div>
          <p className=" text-[15px] italic ml-6  text-[#525252]">Complete MVP Delivered in just 2 weeks</p>

          <div className="flex justify-center mt-6">
            <div
              className=" w-[231px] h-[52px] bg-white rounded-[31px]  relative " >
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="230"
                  height="51"
                  rx="28"
                  ry="28"
                  fill="none"
                  stroke="#9C9C9C"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>

              <div className="flex text-[16px] text-black font-semibold items-center justify-center w-full h-full">
                Book a Free MVP Call
              </div>
            </div>
          </div>
          <div className="bg-[#F5F5F5] border border-[#CFCFCF] rounded-b-2xl shadow-lg mt-7 h-72 rounded-t-[50px]">
            <p className="text-[15px] border-b border-[#CFCFCF] w-full  pb-3 pt-1 pl-7 mt-4 text-black font-semibold ">What's Included</p>
            <div className="">
              <div className="ml-3.5 mt-3.5 flex items-center gap-2.5 "> <Tick2Icon /> <span className="text-[14px] text-[#525252]">Full web or mobile MVP - built to scale</span> </div>
              <div className="ml-3.5 mt-3.5 flex items-center gap-2.5 "> <Tick2Icon /> <span className="text-[14px] text-[#525252]">Modern, reliable tech stack (AI-ready)</span> </div>
              <div className="ml-3.5 mt-3.5 flex items-center gap-2.5 "> <Tick2Icon /> <span className="text-[14px] text-[#525252]">Seamless integrations (payments, auth, email, etc)</span> </div>
              <div className="ml-3.5 mt-3.5 flex items-center gap-2.5 "> <Tick2Icon /> <span className="text-[14px] text-[#525252]">30 days of free post-launch support</span> </div>
              <div className="ml-3.5 mt-3.5 flex items-center gap-2.5 "> <Tick2Icon /> <span className="text-[14px] text-[#525252]">Direct founder-led development & weekly updates</span> </div>
              <div className="ml-3.5 mt-3.5 flex items-center gap-2.5 "> <Tick2Icon /> <span className="text-[14px] text-[#525252]">Transparent progress tracking - no surprises</span> </div>
            </div>
          </div>

        </div>

        {/* 2nd card */}

        <div className="relative">

          {/* POP IMAGE BEHIND CARD */}

          <div className="w-[401px] border-[5.5px] border-[#ADD5F4] h-[594px] bg-[#F5F5F5] rounded-[20px] shadow-[0px_7px_21px_0px_#C2E4FF]">
            <div className="flex items-center justify-between ml-3 mr-5">
              <div><PricingGraph /></div>
            </div>

            <div className="ml-6">
              <div className="font-semibold text-[20px] text-[#202020]">Growth Retainer Package</div>
              <p className="text-[15px] mt-1 text-[#525252]">Continuous Growth Package</p>
            </div>

            <div className="ml-6 flex items-center gap-2">
              <p className="font-semibold text-[21px] translate-y-1.5 line-through text-[#72747C]">$5000/m</p>
              <p className="text-[37px] font-bold text-[#363A47]">$3997<span className="text-[37px] font-medium  text-[#363A47]">/</span><span className="text-[19px] font-medium  text-[#363A47]">m</span></p>
            </div>

            <p className="text-[15px] italic ml-6 text-[#525252]">
              No long-term commitment-cancel anytime
            </p>

            <div className="flex justify-center mt-6">

              <Image src="/bookcall.png" width={240} height={100} alt="book" />

            </div>

            <div className="bg-[#F5F5F5] border border-[#CFCFCF] rounded-b-2xl shadow-lg -translate-y-3  h-72 rounded-t-[50px]">
              <p className="text-[15px] border-b border-[#CFCFCF] w-full pb-3 pt-1 pl-7 mt-4 text-black font-semibold">
                Monthly Services:
              </p>

              <div>
                <div className="ml-3.5 mt-3.5 flex items-center gap-2.5">
                  <Tick2Icon /> <span className="text-[14px] text-[#525252]">60 hours of flexible dev time monthly</span>
                </div>
                <div className="ml-3.5 mt-3.5 flex items-center gap-2.5">
                  <Tick2Icon /> <span className="text-[14px] text-[#525252]">Priority feature updates & bug fixes</span>
                </div>
                <div className="ml-3.5 mt-3.5 flex items-center gap-2.5">
                  <Tick2Icon /> <span className="text-[14px] text-[#525252]">Weekly strategy + product calls</span>
                </div>
                <div className="ml-3.5 mt-3.5 flex items-center gap-2.5">
                  <Tick2Icon /> <span className="text-[14px] text-[#525252]">Continuous performance optimization</span>
                </div>
                <div className="ml-3.5 mt-3.5 flex items-center gap-2.5">
                  <Tick2Icon /> <span className="text-[14px] text-[#525252]">Same-day emergency support</span>
                </div>
                <div className="ml-3.5 mt-3.5 flex items-center gap-2.5">
                  <Tick2Icon /> <span className="text-[14px] text-[#525252]">Cancel anytime - zero hassle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
