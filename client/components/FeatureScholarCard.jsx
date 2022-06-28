import { SiGooglescholar } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function FeaturScholarCard() {
  return (
    <div className="m-10 bg-primary w-[550px] p-6 rounded-lg border-2 border-b-8 border-secondary shadow-card hover:-translate-y-1 transition duration-200 ease-linear">
      <div className="flex items-center">
        <div className="bg-secondary rounded-md p-2 mr-2">
          <SiGooglescholar className="text-3xl" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">FOR SCHOLARS</h1>
          <p className="text-sm font-light text-shades-100">
            Find the ideal team that suits your gameplay
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-col space-y-3">
        <p className="leading-relaxed font-light">
          Tired of applying all day long and never hearing back from the
          managers?
        </p>
        <p className="leading-relaxed font-light">
          You may create, update, and track your application offers here while
          you wait for interested managers to get in contact with you.
        </p>
        <p className="leading-relaxed font-light">
          Alternatively, you can simply browse manager offers or profiles to
          find the ideal team for your gameplay style and strategy.
        </p>
      </div>
      <div className="">
        <button className="flex items-center bg-secondary py-2 px-3 mt-8 hover:shadow-button hover:bg-white hover:text-shades-400 transition duration-100 ease-linear rounded-sm">
          Browse latest offers
          <MdKeyboardArrowRight className="text-2xl ml-2" />
        </button>
      </div>
    </div>
  );
}
