import Image from "next/image"
import Link from "next/link"



export const Navbar = () => {

  return (
    <div className="bg-[#F3F7F8] text-[#1f1f1f] flex h-[95px] fixed w-full top-0 left-0 font-bold">
      <div className="pl-[80px] pt-[18px]">
        <Image src={"/Logo.png"} alt="logo" width={231} height={42} />
      </div>
      <div className="ml-[667px] mt-[34px] font-semibold leading-[100%] space-x-[39px] text-[16px]">
        <Link href={"/howitworks"}>How It Works</Link>
        <Link href={"/howitworks"}>Our Work</Link>
        <Link href={"/howitworks"}>Our Process</Link>
        <Link href={"/howitworks"}>Founder</Link>
        <Link href={"/howitworks"}>Pricing</Link>
      </div>
    </div>
  )
}
