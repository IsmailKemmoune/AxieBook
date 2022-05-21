import ManagerPostAxieImage from "./ManagerPostAxieImage";
import { MdSplitscreen } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import { BsCalendarRange } from "react-icons/bs";
import { GiHealthPotion } from "react-icons/gi";
import { BsChevronCompactDown } from "react-icons/bs";
import ManagerPostInfo from "./ManagerPostInfo";
//MdSplitscreen
//IoIosFlash
//BsCalendarRange
//GiHealthPotion
//BsChevronCompactDown

export default function ManagerPost() {
  return (
    <div className="bg-shades-200 my-10 hover:shadow-post hover:-translate-y-2 hover:translate-x-2 transition duration-200 ease-linear min-w-post max-w-6xl">
      <div className="pl-6 py-4 bg-secondary flex shadow-lg">
        <div className="bg-white rounded-full h-12 w-12 mr-4"></div>
        <div>
          <h1 className="text-white text-lg">Meta team available</h1>
          <p className="text-white text-sm italic font-extralight">1H ago</p>
        </div>
      </div>
      <div className="grid gap-x-5 grid-cols-[60%_40%]">
        <div className="flex p-5">
          <ManagerPostAxieImage />
          <ManagerPostAxieImage />
          <ManagerPostAxieImage />
        </div>
        <div className="grid grid-rows-2 grid-cols-2 gap-x-5 p-5">
          <ManagerPostInfo icon="MdSplitscreen" text="50 / 50" />
          <ManagerPostInfo text="40 energy" />
          <ManagerPostInfo text="40 - 50 SLP" />
          <ManagerPostInfo text="Every 15 days" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-secondary text-xl pb-3">Description</h2>
        <p className="text-white font-light">
          Vestibulum scelerisque tristique quam sed condimentum. Vestibulum
          porttitor justo a ornare dapibus. Suspendisse potenti. Proin tincidunt
          aliquam eros, at tincidunt risus euismod nec. Cras vel justo eget orci
          tempor scelerisque. Vivamus hendrerit facilisis leo, eget sollicitudin
          nibh malesuada ut. Sed interdum nibh eu sapien imperdiet, et vulputate
          mauris tempus. Mauris maximus et felis at sollicitudin. Suspendisse id
          ante massa.
        </p>
      </div>
    </div>
  );
}
