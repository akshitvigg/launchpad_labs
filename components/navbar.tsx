
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#F3F7F8] text-[#1F1F1F] font-sans antialiased z-50">
      <div className="max-w-[1400px] items-center mx-auto flex h-[95px] px-[60px]">
        <div className="flex gap-[360px]">
          {/* Logo */}
          <div className="">
            <Link href={"/"}><Image src="/Logo.png" alt="logo" width={231} height={42} priority /></Link>
          </div>

          <nav className="flex items-center -mt-1 gap-[39px] text-[15px] font-semibold leading-[100%] whitespace-nowrap">
            <Link href="/howitworks">How It Works</Link>
            <Link href="/ourwork">Our Work</Link>
            <Link href="/ourprocess">Our Process</Link>
            <Link href="/founder">Founder</Link>
            <Link href="/pricing">Pricing</Link>
            {/*   <button */}
            {/*     className="relative w-[137px] h-[48px] rounded-full text-white font-semibold text-lg overflow-hidden" */}
            {/*     style={{ */}
            {/*       background: 'linear-gradient(357.62deg, #0F93FF 2.16%, #003BB9 145.02%)', */}
            {/*       boxShadow: ` */}
            {/*   0px 2px 4px 0px rgba(30, 113, 229, 0.15), */}
            {/*   0px 7px 7px 0px rgba(30, 113, 229, 0.13), */}
            {/*   0px 17px 10px 0px rgba(30, 113, 229, 0.08), */}
            {/*   0px 30px 12px 0px rgba(30, 113, 229, 0.02), */}
            {/*   0px 46px 13px 0px rgba(30, 113, 229, 0) */}
            {/* ` */}
            {/*     }} */}
            {/*   > */}
            {/*     <span */}
            {/*       className="absolute inset-[-1px] rounded-full pointer-events-none" */}
            {/*       style={{ */}
            {/*         background: 'linear-gradient(90deg, #9CC6FF 0%, #00D0FF 100%)', */}
            {/*         padding: '2px', */}
            {/*         WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', */}
            {/*         WebkitMaskComposite: 'xor', */}
            {/*         maskComposite: 'exclude', */}
            {/*         transform: 'translateZ(0)', */}
            {/*         backfaceVisibility: 'hidden' */}
            {/*       }} */}
            {/*     /> */}
            {/**/}
            {/*     <span className="relative z-10">Book A Call</span> */}
            {/*   </button> */}
            <div className="flex-shrink-0 -translate-x-4 translate-y-3">
              <Image src="/btn.png" width={160} height={48} alt="btn" priority />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

