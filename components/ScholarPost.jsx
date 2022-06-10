import { AiFillTrophy } from "react-icons/ai";
import { FiPercent } from "react-icons/fi";
import { BiDevices } from "react-icons/bi";
import { GiHealthPotion } from "react-icons/gi";

import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import ManagerPostInfo from "./ManagerPostInfo";
import { useState } from "react";

export default function ScholarPost() {
  const [postToggle, setPostToggle] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  return (
    <div
      onClick={() => setPostToggle((prevValue) => (prevValue = !prevValue))}
      className="bg-shades-200 m-10 hover:shadow-post hover:-translate-y-2 hover:translate-x-2 transition duration-200 ease-linear min-w-[580px] max-w-6xl cursor-pointer"
    >
      {postToggle && (
        <div className="pl-6 py-4 bg-secondary flex justify-between shadow-lg">
          <div className="flex">
            <div className="bg-white rounded-full h-12 w-12 mr-4"></div>
            <div>
              <h1 className="text-white text-lg">
                High MMR player looking for scholar
              </h1>
              <p className="text-white text-sm italic font-extralight">
                2H ago
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mr-4">
            {bookmark ? (
              <BsFillBookmarkHeartFill
                onClick={(e) => {
                  setBookmark(!bookmark);
                  e.stopPropagation();
                }}
                className="text-red-500 text-2xl hover:text-red-600 cursor-pointer"
              />
            ) : (
              <BsFillBookmarkFill
                onClick={(e) => {
                  setBookmark(!bookmark);
                  e.stopPropagation();
                }}
                className="text-shades-200 text-2xl hover:text-shades-300 cursor-pointer"
              />
            )}
          </div>
        </div>
      )}
      <div className="border-l-8 border-scholar flex flex-wrap p-6">
        <div className="w-[650px] grow pr-5">
          <h2 className="text-secondary text-xl pb-3">Description</h2>
          <p className="text-white font-light">
            Vestibulum scelerisque tristique quam sed condimentum. Vestibulum
            porttitor justo a ornare dapibus. Suspendisse potenti. Proin
            tincidunt aliquam eros, at tincidunt risus euismod nec. Cras vel
            justo eget orci tempor scelerisque. Vivamus hendrerit facilisis leo,
            eget sollicitudin nibh malesuada ut. Sed interdum nibh eu sapien
            imperdiet, et vulputate mauris tempus. Mauris maximus et felis at
            sollicitudin. Suspendisse id ante massa.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-5 grid-rows-2 grow justify-items-center">
          <ManagerPostInfo text="Laptop">
            <BiDevices className="text-secondary mr-2 text-3xl" />
          </ManagerPostInfo>
          <ManagerPostInfo text="2030 MMR">
            <AiFillTrophy className="text-secondary mr-2 text-3xl" />
          </ManagerPostInfo>
          <ManagerPostInfo text="60 - 70 SLP">
            <GiHealthPotion className="text-secondary mr-2 text-3xl" />
          </ManagerPostInfo>
          <ManagerPostInfo text="60 / 40">
            <FiPercent className="text-secondary mr-2 text-3xl" />
          </ManagerPostInfo>
        </div>
      </div>
    </div>
  );
}
