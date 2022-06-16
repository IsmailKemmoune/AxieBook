import ManagerPostAxieImage from "./ManagerPostAxieImage";
import { RiSplitCellsHorizontal } from "react-icons/ri";
import { IoIosFlash } from "react-icons/io";
import { BsCalendarRange } from "react-icons/bs";
import { GiHealthPotion } from "react-icons/gi";
import { BsChevronCompactDown } from "react-icons/bs";

export default function ManagerPostInfo({ text, children }) {
  return (
    <div className="grid grid-cols-[30px_1fr] gap-x-5 items-center mb-2 mt-6 w-[200px]">
      {/* <RiSplitCellsHorizontal className="text-secondary mr-2 text-3xl" /> */}
      {children}
      <p className="text-white italic">{text}</p>
    </div>
  );
}
