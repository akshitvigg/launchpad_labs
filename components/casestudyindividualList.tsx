import { ArrowDiagonal } from "@/icons/arrowdiagonal";
import Image from "next/image";
import { ViewCaseStudy } from "./viewcasestudybtn";
import Link from "next/link";


export const CaseStudyIndividualList = () => {
  return (

    <div
      className="
    bg-white 
          flex justify-between
    w-[1280px] 
    h-[341px] 
    rounded-[16px] 
    shadow-[0px_2px_21px_0px_rgba(0,0,0,0.1)]
  "
    >
      <div className="pl-10 pt-5">
        <p className="text-[26px] text-[#404040] font-semibold">FitAI</p>
        <p className="text-[15px] text-[#686868] mt-4 ">FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans,</p>
        <p className="text-[15px] text-[#686868] mt-2">real-time guidance, and progress tracking to help you stay fit anytime, anywhere.</p>
        <div className="flex gap-3.5 mt-5">
          <p className="w-[77px] flex  justify-center items-center font-medium h-[34px] text-[14px] text-black bg-[#E2EFF9] rounded-[32px] "> UI/UX</p>
          <p className="w-[159px] flex  justify-center items-center font-medium h-[34px] text-[14px] text-black bg-[#E2EFF9] rounded-[32px] "> Web Development</p>
          <p className="w-[105px] flex  justify-center items-center font-medium h-[34px] text-[14px] text-black bg-[#E2EFF9] rounded-[32px] ">Mobile App</p>
        </div>

        <Link href={"/billflow"}> <ViewCaseStudy /></Link>
      </div>
      <div>
        <Image src={"/casepic1.png"} className=" -translate-y-1.5 translate-x-2" width={483} height={100} alt="hd" />
      </div>
    </div>

  )
}
