import { AiFillTrophy } from "react-icons/ai";
import { FiPercent } from "react-icons/fi";
import { BiDevices } from "react-icons/bi";
import { GiHealthPotion } from "react-icons/gi";

import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import ManagerPostInfo from "./ManagerPostInfo";
import { useState } from "react";

export default function ScholarPost({ postData }) {
  // const [postToggle, setPostToggle] = useState(true);
  const [bookmark, setBookmark] = useState(false);

  const {
    title,
    peakMMR,
    device,
    description,
    createdAt,
    slpQuota,
    slpSplit,
    updatedAt,
  } = postData;

  return (
    <div
      // onClick={() => setPostToggle((prevValue) => (prevValue = !prevValue))}
      className="bg-shades-200 m-10 hover:shadow-post hover:-translate-y-2 hover:translate-x-2 transition duration-200 ease-linear w-[580px] cursor-pointer"
    >
      <div className="pl-6 py-4 bg-secondary flex justify-between shadow-lg">
        <div className="flex">
          <div className="bg-white rounded-full h-12 w-12 mr-4"></div>
          <div>
            <h1 className="text-white text-lg">{title}</h1>
            <p className="text-white text-sm italic font-extralight">2H ago</p>
          </div>
        </div>
        <div className="flex justify-center items-center mr-4">
          {bookmark ? (
            <button>
              <BsFillBookmarkHeartFill
                onClick={(e) => {
                  setBookmark(!bookmark);
                  e.stopPropagation();
                }}
                className="text-red-500 text-2xl hover:text-red-600 cursor-pointer"
              />
            </button>
          ) : (
            <button>
              <BsFillBookmarkFill
                onClick={(e) => {
                  setBookmark(!bookmark);
                  e.stopPropagation();
                }}
                className="text-shades-200 text-2xl hover:text-shades-300 cursor-pointer"
              />
            </button>
          )}
        </div>
      </div>

      <div className="border-l-8 border-scholar flex flex-col p-10">
        <div className="pb-10">
          <h2 className="text-secondary text-xl pb-3">Description</h2>
          <p className="text-white font-light">{description}</p>
        </div>
        <div className="w-full">
          <h2 className="text-secondary text-xl relative top-[8px]">
            Offer infos
          </h2>
          <div className="grid grid-cols-2 gap-x-5 grid-rows-2 items-center">
            <ManagerPostInfo text={device}>
              <BiDevices className="text-secondary mr-2 text-3xl" />
            </ManagerPostInfo>
            <ManagerPostInfo text={`${peakMMR} MMR`}>
              <AiFillTrophy className="text-secondary mr-2 text-3xl" />
            </ManagerPostInfo>
            <ManagerPostInfo text={`${slpQuota} SLP per day`}>
              <GiHealthPotion className="text-secondary mr-2 text-3xl" />
            </ManagerPostInfo>
            <ManagerPostInfo text={`${slpSplit}% for Scholar`}>
              <FiPercent className="text-secondary mr-2 text-3xl" />
            </ManagerPostInfo>
          </div>
        </div>
      </div>
    </div>
  );
}
