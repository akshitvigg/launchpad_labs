import { Calendar } from "@/components/calendar";
import { CaseStudyIndividualList } from "@/components/casestudyindividualList";
import Image from "next/image";

export default function CaseStudyList() {

  return (

    <>    <div className="pt-[95px] bg-[#F3F7F8] h-[1628px] font-sans">

      <div className="flex justify-between">
        <div className=" mt-19 ml-17.5">
          <span className="text-[48px] pr-1 text-[#202020] font-semibold"> From vision to</span>
          {" "}
          <span
            className="font-[600] text-[48px] leading-[31px] tracking-[0px] font-['Plus_Jakarta_Sans']"
            style={{
              background: "linear-gradient(90deg, #186AD2 0%, #1481DC 50%, #0FA4EB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Launchpad
          </span>
          <p className="text-[17px] text-[#686868] mt-1.5">Explore some of the MVPs and products we’ve brought to life</p>
        </div>
        <div className="flex mr-16 mt-7.5">
          <div className=" translate-y-15 translate-x-26">
            <Image src={"/bookcall.png"} width={240} height={100} alt="bookcall" />
          </div>
          <div >
            <Image src={"/cal.png"} width={268} height={100} alt="call" />
          </div>
        </div>
      </div>

      <div className="flex mt-10 justify-center">
        <div className="space-y-7">
          <CaseStudyIndividualList />
          <CaseStudyIndividualList />
          <CaseStudyIndividualList />
        </div>
      </div>
    </div >
      <Calendar />
    </>

  )
}
