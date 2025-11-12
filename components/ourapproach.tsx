import { CrossIcon } from "@/icons/crossicon"
import { OurApproachIcon } from "@/icons/ourapproachicon"
import { TickIcon } from "@/icons/tickicon"
import Image from "next/image"


export const OurApproach = () => {

  return (
    <div className=" bg-[#F3F7F8] font-sans h-[837px]">
      <div className=" flex justify-center pt-21">
        <OurApproachIcon />
      </div>
      <p className="text-center text-[24px] mt-4.5 text-[#202020] font-semibold">
        Why founders launch faster with LaunchPad labs
      </p>
      <div className=" flex gap-[78px] mt-13.5 justify-center">
        <div
          className="w-[458px] h-[411px] rounded-[20px] relative"
          style={{ padding: '2px' }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: 'visible' }}
          >
            <rect
              x="1"
              y="1"
              width="456"
              height="409"
              rx="20"
              ry="20"
              fill="none"
              stroke="#FFACAC"
              strokeWidth="2"
              strokeDasharray="9 9"
            />
          </svg>
          <div className="relative z-10">

            <div className="flex justify-center mt-5">
              <p className="w-[257px] h-[40px] rounded-[68px] bg-white flex items-center justify-center text-[16px] font-semibold text-[#242424] [box-shadow:0_2px_12px_0_rgba(0,0,0,0.12)]">
                Traditional Development
              </p>
            </div>

            <div>
              <div className="flex gap-3 mt-7.5 ml-6.5  items-center">
                <CrossIcon />
                <p className="text-black -translate-y-1 font-semibold text-[16px]">Months of Planning</p>
              </div>
              <div className="flex gap-3 ml-6.5  items-center">
                <CrossIcon />
                <p className="text-black -translate-y-1 font-semibold text-[16px]">Too Many Cooks</p>
              </div>
              <div className="flex gap-3  ml-6.5 items-center">
                <CrossIcon />
                <p className="text-black -translate-y-1 font-semibold text-[16px]">Design-Then-Build Bottlenecks</p>
              </div>
              <div className="flex gap-3 ml-6.5  items-center">
                <CrossIcon />
                <p className="text-black -translate-y-1 font-semibold text-[16px]">Huge Upfront Fees</p>
              </div>
              <div className="flex gap-3  ml-6.5 items-center">
                <CrossIcon />
                <p className="text-black -translate-y-1 font-semibold text-[16px]">Complex Tech Steup</p>
              </div>
            </div>

          </div>
        </div>

        {/* 2nd  card */}
        <div
          className="w-[458px] h-[411px] rounded-[20px] relative"
          style={{ padding: '2px' }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: 'visible' }}
          >
            <rect
              x="1"
              y="1"
              width="456"
              height="409"
              rx="20"
              ry="20"
              fill="none"
              stroke="#55E294"
              strokeWidth="2"
              strokeDasharray="9 9"
            />
          </svg>
          <div className="relative z-10">

            <div className="flex justify-center mt-5">
              <p className="w-[257px] h-[40px] rounded-[68px] bg-white flex items-center justify-center text-[16px] font-semibold text-[#242424] [box-shadow:0_2px_12px_0_rgba(0,0,0,0.12)]">
                LaunchPad Labs Approach
              </p>
            </div>

            <div>
              <div className="flex gap-3 mt-7.5 ml-6.5  items-center">
                <TickIcon />
                <p className="text-black -translate-y-1 font-semibold text-[16px]">2-Week Launch System</p>
              </div>
              <div className="flex gap-3 ml-6.5  items-center">
                <TickIcon />
                <p className="text-black -translate-y-1 font-semibold text-[16px]">Focused Founder-Led Pods</p>
              </div>
              <div className="flex gap-3  ml-6.5 items-center">
                <TickIcon />
                <p className="text-black -translate-y-1 font-semibold text-[16px]">Real-Time Prototyping</p>
              </div>
              <div className="flex gap-3 ml-6.5  items-center">
                <TickIcon />
                <p className="text-black -translate-y-1 font-semibold text-[16px]">Flat $4,997 Transparent Pricing</p>
              </div>
              <div className="flex gap-3  ml-6.5 items-center">
                <TickIcon />
                <p className="text-black -translate-y-1 font-semibold text-[16px]">Modern, Scalable Stack</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className=" flex justify-center mt-13.5">
        <Image alt="bookcall" src={"/bookcall.png"} width={240} height={100} />
      </div>
    </div>
  )
}
