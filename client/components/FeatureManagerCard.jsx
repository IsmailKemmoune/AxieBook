import { FaUserTie } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function FeaturManagerCard() {
  return (
    <div className="m-10 bg-primary w-[500px] p-6 rounded-lg border-2 border-b-8 border-secondary hover:shadow-card hover:-translate-y-1 transition duration-200 ease-linear">
      <div className="flex items-center">
        <div className="bg-secondary rounded-md p-2 mr-2">
          <FaUserTie className="text-3xl" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">FOR MANAGERS</h1>
          <p className="text-sm font-light">
            Get the perfect scholar for your team
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-col space-y-3">
        <p className="leading-relaxed">
          We know that you are struggling to find good scholars while wasting
          your time looking for them on random Discord servers.
        </p>
        <p>
          Here you can create, manage and track your offers, then wait for the
          interested scholars to contact you.
        </p>
        <p>
          Or you can simply browse scholar's offers or profiles, and choose the
          ideal scholars for your teams.
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
