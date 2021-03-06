import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";

export default function RightBar() {
  const [inputValue, setInputValue] = useState("");

  const getInputData = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="flex flex-col items-center bg-black border-l-[1px] border-shades-200 text-white grow-[1] min-w-[400px] feedmd:hidden">
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
      <Link href="/login">
        <button className="flex items-center justify-center w-[70%] h-[50px] mt-5 bg-primary text-white text-xl rounded-full hover:bg-shades-600 hover:shadow-button hover:-translate-y-1 transition duration-200 ease-linear">
          <span>Login</span>
          <FiLogIn className="ml-4" />
        </button>
      </Link>
    </div>
  );
}
