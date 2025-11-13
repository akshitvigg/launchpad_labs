"use client"
import { BookAcall } from '@/icons/bookacall';
import { FAQsIcon } from '@/icons/faqs';
import { useState } from 'react';

export default function Faqs() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqData = [
    {
      question: "How long does it take to launch my MVP with LaunchPad Labs?",
      answer: "We specialize in speed. Most MVPs are launched in as little as 2-4 weeks, depending on complexity."
    },
    {
      question: "What exactly is included in the MVP package?",
      answer: "We specialize in speed. Most MVPs are launched in as little as 2-4 weeks, depending on complexity."
    },
    {
      question: "Do I need to have all my ideas finalized before starting?",
      answer: "We specialize in speed. Most MVPs are launched in as little as 2-4 weeks, depending on complexity."
    },
    {
      question: "How involved will I be during the development process?",
      answer: "We specialize in speed. Most MVPs are launched in as little as 2-4 weeks, depending on complexity."
    },
    {
      question: "Can I scale my MVP into a full product later?",
      answer: "We specialize in speed. Most MVPs are launched in as little as 2-4 weeks, depending on complexity."
    }
  ];

  const toggleExpand = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="h-[1058.5px] font-sans bg-gradient-to-br bg-[#F3F7F8] pt-[95px] pb-20">
      <div className="max-w-[1440px] mx-auto ml-17 px-4 mt-20">
        <div className="mb-12">
          <FAQsIcon />

          <h1 className="text-[28px] font-semibold mt-4.5 text-[#202020] mb-4">
            Got Questions? We've Got Answers
          </h1>
          <p className="text-[16px] font-medium text-[#525252]">
            Simple explanations for your most important questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-2.5">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-[17px] shadow-[0px_2px_11px_0px_rgba(0,0,0,0.06)] transition-all duration-300 ease-in-out overflow-hidden"
                style={{
                  height: expandedIndex === index ? '172px' : '83px',
                  width: '100%',
                  maxWidth: '828px'
                }}
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full h-[83px] px-8 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-left font-semibold text-[#404040] text-[16px]">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 cursor-pointer ml-4">
                    {expandedIndex === index ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </div>
                </button>

                <div
                  className={`px-4 ml-8 mr-23 relative  py-4  transition-opacity duration-300 ${expandedIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                > <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="698"
                      height="54"
                      rx="10"
                      ry="10"
                      fill="none"
                      stroke="#E3E3E3"
                      strokeWidth="1"
                      strokeDasharray="5 5"
                    />
                  </svg>

                  <p className="text-[#474545] text-[14px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>


          {/* Right Column - CTA Card */}
          <div
            className=" absolute top-[260px] left-[985px] w-[373px] h-[330px] bg-white rounded-[17px] shadow-[0px_2px_11px_0px_#0000000F] " >
            <div className="mb-3 mt-6.5 ml-8.5">
              <img
                src="/foundersvg.png"
                alt="Profile"
                width={71}
                height={71}
                className="rounded-full object-cover"
              />
            </div>

            <div className=" ml-8">
              <p className="text-[18px] text-[#8C8C8C] font-semibold ">
                Still not sure?
              </p>

              <h3 className="text-[20px] text-black font-semibold mb-3">
                Book a free call.
              </h3>

              <p className="text-[14px] text-black">
                Learn more about how we work and how we <br />
                can help you and your startup.
              </p>

              <div className="mt-4 -translate-x-3 "><BookAcall /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
