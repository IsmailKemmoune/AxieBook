import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function RightBar() {
  const [inputValue, setInputValue] = useState("");

  const getInputData = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="flex flex-col items-center bg-black border-l-[1px] border-shades-200 text-white grow-[1] min-w-[400px] feedsm:hidden">
      {/* <div className="w-full"> */}
      <div className="bg-[#202327] flex w-[70%] h-[50px] border-black border-[1px] hover:border-[1px] hover:border-shades-200 rounded-full mt-5">
        <div className="flex items-center justify-end w-[15%]">
          <FiSearch className="text-shades-200 text-2xl" />
        </div>
        <input
          className="bg-transparent indent-3 outline-none placeholder:text-shades-200 placeholder:italic w-full"
          placeholder="Search..."
          onChange={getInputData}
          value={inputValue}
        ></input>
      </div>
      {/* </div> */}
    </div>
  );
}
