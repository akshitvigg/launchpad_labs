
import { ArrowDiagonal } from "@/icons/arrowdiagonal";
export const ViewCaseStudy = () => {

  return (
    <div
      className="relative  flex items-center justify-center mt-19"
      style={{
        width: '199px',
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
            View Case Study <ArrowDiagonal />
          </div>
        </div>
      </div>
    </div>
  )
}
