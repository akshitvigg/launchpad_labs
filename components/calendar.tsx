
import Image from "next/image"
export const Calendar = () => {

  return (
    <div className=" h-[800px] bg-white  font-sans ">

      <p className="font-semibold text-[28px] text-center pt-16 text-[#202020]"> Ready to launch your next big idea? </p>

      <p className="font-medium text-[16px] mt-2 text-center text-[#525252]"> Book a consultation call and let's turn your vision into reality </p>
      <div className="flex justify-center mt-6"><Image src={"/bookcall.png"} width={240} height={100} alt="book call" /></div>


      <div className="flex relative justify-center mt-6">
        <Image src={"/calendar.png"} width={942} height={100} alt="calendar" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
    w-[942px] h-[150px] bg-gradient-to-t from-white to-transparent" />

        <Image className="absolute left-238 top-15.5" src={"/time2.png"} width={348} height={100} alt="book call" />
      </div>
    </div>
  )
}
