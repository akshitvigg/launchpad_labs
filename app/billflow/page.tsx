import { Calendar } from "@/components/calendar";
import { ArrowDiagonal } from "@/icons/arrowdiagonal";
import { BacktoWorkIcon } from "@/icons/backtoworkicon"
import Image from "next/image"
import Link from "next/link";


export default function BillFlow() {

  return (
    <>
      <div className="bg-[#F3F7F8] pt-[95px] h-[3050px] font-sans">
        <div className=" pt-4 pl-20">
          <Link href={"/casestudylist"}> <BacktoWorkIcon /> </Link>
        </div>
        <div className="flex justify-center ml-8 mt-11">
          <Image src={"/billfflowmain.png"} width={1310} height={100} alt="billflow" />
        </div>
        <div className=" pl-19 pt-6 flex justify-between">
          <p className="text-[40px] text-[#404040] font-semibold">BillFlow</p>
          <div>
            <div
              className="relative  flex items-center justify-center mt-1 mr-11 "
              style={{
                width: '175px',
                height: '48px',
                borderRadius: '31px'
              }}
            >
              <div
                className="absolute inset-0 rounded-full p-[2px]"
                style={{
                  background: 'linear-gradient(90deg, #9CC6FF 0%, #00D0FF 100%)',
                  borderRadius: '31px'
                }}
              >
                <div
                  className="w-full h-full bg-white rounded-full flex items-center justify-center"
                  style={{ borderRadius: '29px' }}
                >
                  <div className="text-black text-[16px] flex items-center font-semibold">

                    View Project <ArrowDiagonal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center ml-11 mt-10 mr-5">
          <div className=" border border-[#C9E8FD] rounded-[17px] h-[114px] w-[1280px]">
            <div className=" flex justify-between  pl-17 pt-5 pr-15.5">

              <div className="space-y-3">
                <p className=" text-[#565656] font-semibold">YEAR</p>
                <p className=" text-black font-semibold">2025</p>
              </div>
              <div className="space-y-3">
                <p className=" text-[#565656] text-center font-semibold">EXPERTISE</p>
                <div className="flex gap-3.5 ">
                  <p className="w-[77px] flex  justify-center items-center font-medium h-[34px] text-[14px] text-black bg-[#E2EFF9] rounded-[32px] "> UI/UX</p>
                  <p className="w-[159px] flex  justify-center items-center font-medium h-[34px] text-[14px] text-black bg-[#E2EFF9] rounded-[32px] "> Web Development</p>
                  <p className="w-[105px] flex  justify-center items-center font-medium h-[34px] text-[14px] text-black bg-[#E2EFF9] rounded-[32px] ">Mobile App</p>
                </div>

              </div>
              <div className="space-y-3">
                <p className=" text-[#565656] font-semibold">PLATFORM</p>
                <p className=" text-black font-semibold">Web App</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-13.5">
          <p className="text-[44px]  text-[#828282] text-center font-semibold">Overview</p>


          <p className="text-[19px] text-black text-left font-medium w-[1090px] mx-auto leading-[2.3] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="mt-17.5">
          <p className="text-[44px]  text-[#828282] text-center font-semibold">The Product</p>


          <div className=" mt-14 flex font-semibold">

            <div className="ml-15"><Image src={"/billflowleft.png"} width={583} height={200} alt="400" />  </div>
            <div className=" ml-16.5 mt-45">
              <p className="text-[24px] text-black">Hero Section</p>
              <p className="text-[19px] text-black text-left font-medium w-[560px] mx-auto leading-[2.3] mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>

            </div>

          </div>
        </div>
        <div className=" mt-14 gap-2 ml-30 flex justify-center font-semibold">

          <div className="mt-42">
            <p className="text-[24px] text-black">Hero Section</p>
            <p className="text-[19px] text-black text-left font-medium w-[560px] mx-auto leading-[2.3] mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>

          </div>

          <div className=" -translate-y-13"><Image src={"/billflowright.png"} width={583} height={200} alt="400" />  </div>
        </div>


      </div>
      <Calendar />
    </>
  )
}
