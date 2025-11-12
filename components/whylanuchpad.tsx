
import { WhyLaunchPadIcon } from "@/icons/whylaunchpadicon";
import Image from "next/image";

export const WhyLaunchPad = () => {
  return (
    <div className="bg-white font-sans h-[845px]">
      <div className="pt-21 flex justify-center">
        <WhyLaunchPadIcon />
      </div>
      <p className="text-center mt-6 text-[#202020] font-semibold text-[28px]">
        Built faster Built smarter Built by founders
      </p>
      <p className="text-[#525252] font-medium text-[16px] mt-3 text-center">
        MVPs built faster, smarter, and better – by founders who’ve done it before.
        <br />
        We turn your idea into a launch-ready product in just{" "}
        <span className="font-bold text-[#333333]">2 weeks</span>, using modern
        <br />
        tech and proven systems trusted by{" "}
        <span className="font-bold text-[#333333]">50+ funded startups</span>.
      </p>


      <div className="flex gap-[46px] justify-center mt-18">
        <div className="w-[380px] relative -translate-x-3 h-[415px] bg-white rounded-[16px] shadow-[0_2px_21px_0_rgba(0,0,0,0.1)] overflow-hidden">
          <div className=" absolute top-2 left-2">
            <Image src="/launchpadpic1.png" width="364" height={300} alt="cardpic" />
            <div className=" flex justify-center">
              <p className="font-semibold text-[18px] text-[#404040] mt-3">MVP Package</p>
            </div>
            <div className=" flex justify-center">
              <p className=" text-[14px] text-[#404040] mt-3">Everything you need
              </p>
            </div>
            <div className=" flex justify-center">
              <p className=" text-[14px] text-[#404040] mt-1">SaaS, web app, or landing page
              </p>
            </div>
            <div className=" flex justify-center">
              <p className=" text-[14px] text-[#404040] mt-1"> build and launch-ready in 2 weeks.
              </p>
            </div>
          </div>
        </div>


        <div className="w-[380px] relative -translate-x-3 h-[415px] bg-white rounded-[16px] shadow-[0_2px_21px_0_rgba(0,0,0,0.1)] overflow-hidden">
          <div className=" absolute top-2 left-2">
            <Image src="/launchpadpic2.png" width="364" height={300} alt="cardpic" />
            <div className=" flex justify-center">
              <p className="font-semibold text-[18px] text-[#404040] mt-3">Integrations</p>
            </div>
            <div className=" flex justify-center">
              <p className=" text-[14px] text-[#404040] mt-3">Payments, logins, emails & more.
              </p>
            </div>
            <div className=" flex justify-center">
              <p className=" text-[14px] text-[#404040] mt-1">We connect everything so you’re ready to
              </p>
            </div>
            <div className=" flex justify-center">
              <p className=" text-[14px] text-[#404040] mt-1">onboard users from day one.
              </p>
            </div>
          </div>
        </div>


        <div className="w-[380px] relative -translate-x-3 h-[415px] bg-white rounded-[16px] shadow-[0_2px_21px_0_rgba(0,0,0,0.1)] overflow-hidden">
          <div className=" absolute top-2 left-2">
            <Image src="/launchpadpic3.png" width="364" height={300} alt="cardpic" />
            <div className=" flex justify-center">
              <p className="font-semibold text-[18px] text-[#404040] mt-3">Modern Stack</p>
            </div>
            <div className=" flex justify-center">
              <p className=" text-[14px] text-[#404040] mt-3">Built with the latest tech and AI
              </p>
            </div>
            <div className=" flex justify-center">
              <p className=" text-[14px] text-[#404040] mt-1">delivering speed, stability, and scalability for real
              </p>
            </div>
            <div className=" flex justify-center">
              <p className=" text-[14px] text-[#404040] mt-1">growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

