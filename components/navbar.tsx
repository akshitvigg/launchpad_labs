
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#FF7F8] text-[#1F1F1F] font-sans antialiased z-50">
      <div className="max-w-[1400px] items-center mx-auto flex h-[95px] px-[55px]">
        <div className="flex gap-[360px]">
          <div className="-mt-3">
            <Image src="/Logo.png" alt="logo" width={231} height={42} priority />
          </div>
          <nav className="flex items-center -mt-1 gap-[39px] text-[15px] font-semibold leading-[100%]">
            <Link href="/howitworks">How It Works</Link>
            <Link href="/ourwork">Our Work</Link>
            <Link href="/ourprocess">Our Process</Link>
            <Link href="/founder">Founder</Link>
            <Link href="/pricing">Pricing</Link>
          </nav>
        </div></div>
    </header>
  );
};

