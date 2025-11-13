import { FooterIcon } from "@/icons/footericon"
import { FooterLine } from "@/icons/footerlineicon"
import { LinkedInIcon } from "@/icons/linkedinicon"
import { XIcon } from "@/icons/xicon"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {

  return (
    <div className=" bg-white pt-23 font-sans h-[612px] text-black ">

      <div className=" ml-17 flex justify-between mr-18.5 ">
        <div className=" -translate-y-3">
          <Image src={"/Logo.png"} width={231} height={100} alt="logo" />
          <p className="text-[14px] mt-2 translate-x-3 mb-2 font-medium text-[#525252]">We build high-quality MVPs to transform </p>
          <p className="text-[14px] mt-2 translate-x-3 mb-3   font-medium text-[#525252]"> your ideas into reality.</p>
          <div className=" flex ">
            <XIcon />
            <LinkedInIcon />
          </div>

        </div>
        <div className=" space-y-3 ">
          <p className="text-[17px] font-semibold text-black">Services</p>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> MVP Development</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> UI/UX Design</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> Web Development</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> Mobile Apps</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> Consulting</Link></div>
        </div>
        <div className=" space-y-3 ">
          <p className="text-[17px] font-semibold text-black">About</p>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> Our Process</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> How We Work</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> Contact</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> FAQs</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> Contact</Link></div>
        </div>
        <div className=" space-y-3 ">
          <p className="text-[17px] font-semibold text-black">Portfolio</p>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> Case Studies</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> Success Stories</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> MVP Showcase</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> Testimonial</Link></div>
        </div>
        <div className=" space-y-3 ">
          <p className="text-[17px] font-semibold text-black">Legal</p>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> Privacy Policy</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> Terms of Services</Link></div>
          <div><Link className="text-[14px] -2 font-medium text-[#616161]" href={"/"}> Cookie Policy</Link></div>
        </div>

      </div>
      <div className="mt-17 flex justify-center ">
        <FooterIcon />
      </div>
      <div className=" mt-12">
        <div> <FooterLine />   </div>
        <p className="text-center text-[#818181] mt-4 text-[13px]">© 2025 LinkVerse. All rights reserved</p>
      </div>
    </div>
  )
}
