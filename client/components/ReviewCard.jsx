import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export default function ReviewCard() {
  return (
    <div className="bg-shades-200 m-10 shadow-button hover:shadow-post hover:-translate-y-2 hover:translate-x-2 transition duration-200 ease-linear w-[580px] cursor-pointer">
      <div className="pl-6 py-4 bg-secondary flex justify-between shadow-lg">
        <div className="flex">
          <div className="bg-white rounded-full h-12 w-12 mr-4"></div>
          <div>
            <h1 className="text-white text-lg">Brown Tigre</h1>
            <p className="text-white text-sm italic font-extralight">2H ago</p>
          </div>
        </div>
        <div className="flex justify-center items-center mr-4">
          <AiFillStar className="text-classes-Beast text-xl" />
          <AiFillStar className="text-classes-Beast text-xl" />
          <AiFillStar className="text-classes-Beast text-xl" />
          <AiOutlineStar className="text-white text-xl" />
          <AiOutlineStar className="text-white text-xl" />
        </div>
      </div>

      <div className="border-l-8 border-scholar flex flex-col p-10">
        <div>
          <h2 className="text-secondary text-xl pb-3">Review</h2>
          <p className="text-white font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eros quam, condimentum vel libero eget, rhoncus dapibus lectus.
          </p>
        </div>
      </div>
    </div>
  );
}
