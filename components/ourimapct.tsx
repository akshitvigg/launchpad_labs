import { OurImpactLogo } from "@/icons/ourimpact"


export const OurImpact = () => {

  return (

    <div className=" bg-white font-sans h-[518px]">
      <div className="  flex justify-center pt-15">
        <OurImpactLogo />
      </div>
      <p className=" text-center mt-5 text-[24px] font-semibold text-[#202020]"> Fast launches Real results </p>

      <div className=" flex  justify-center mt-13 gap-9">
        <div className="w-[298px] h-[246px] rounded-[23px] p-[5px] bg-[linear-gradient(180deg,#B9E8FF_0%,rgba(140,180,255,0.93)_46.15%,rgba(222,248,255,0.66)_100%)]">
          <div className="w-full h-full rounded-[18px] bg-[linear-gradient(359.3deg,#FFFFFF_-23.56%,#E6F3FF_114.62%)] flex flex-col items-center justify-center text-center">
            <h2 className="text-[58px] font-semibold text-[#0766DB] leading-none">$25M+</h2>
            <p className="text-[#505050] font-medium mt-5 text-[16px] leading-snug">
              <span className="font-bold text-[#1B1B1B]">Raised</span> by founders who <br /> launched with us
            </p>
          </div>
        </div>
        <div className="w-[298px] h-[246px] rounded-[23px] p-[5px] bg-[linear-gradient(180deg,#B9E8FF_0%,rgba(140,180,255,0.93)_46.15%,rgba(222,248,255,0.66)_100%)]">
          <div className="w-full h-full rounded-[18px] bg-[linear-gradient(359.3deg,#FFFFFF_-23.56%,#E6F3FF_114.62%)] flex flex-col items-center justify-center text-center">
            <h2 className="text-[58px] font-semibold text-[#0766DB] leading-none">50+</h2>
            <p className="text-[#505050] font-medium mt-5 text-[16px] leading-snug">
              <span className="font-bold text-[#1B1B1B]">MVPs Build</span> - live in market <br /> within 2 weeks          </p>
          </div>
        </div>

        <div className="w-[298px] h-[246px] rounded-[23px] p-[5px] bg-[linear-gradient(180deg,#B9E8FF_0%,rgba(140,180,255,0.93)_46.15%,rgba(222,248,255,0.66)_100%)]">
          <div className="w-full h-full rounded-[18px] bg-[linear-gradient(359.3deg,#FFFFFF_-23.56%,#E6F3FF_114.62%)] flex flex-col items-center justify-center text-center">
            <h2 className="text-[58px] font-semibold text-[#0766DB] leading-none">5</h2>
            <p className="text-[#505050] font-medium  mt-5 text-[16px] leading-snug">
              <span className="font-bold text-[#1B1B1B]">Startups Acquired</span> after launching <br /> through LaunchPad Labs </p>
          </div>
        </div>
      </div>
    </div>
  )
}
