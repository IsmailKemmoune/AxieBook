import { RiHome2Line } from "react-icons/ri";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiUser6Line } from "react-icons/ri";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-black min-w-[300px]">
      <div className="w-full h-full bg-black flex justify-end">
        <div className=" h-screen min-w-[300px] flex flex-col items-center justify-between">
          <div>
            <Link href="/">
              <h1 className="text-white text-5xl my-6 cursor-pointer">
                AxieBook
              </h1>
            </Link>
            <Link href="/">
              <button className="flex items-center justify-start px-4 py-3 my-1 text-white text-xl rounded-full hover:bg-primary">
                <RiHome2Line className="mr-4" />
                <span>Home</span>
              </button>
            </Link>
            <button className="flex items-center justify-start px-4 py-3 my-1 text-white text-xl rounded-full hover:bg-primary">
              <IoBookmarkOutline className="mr-4" />
              <span>Bookmarks</span>
            </button>
            <button className="flex items-center justify-start px-4 py-3 my-1 text-white text-xl rounded-full hover:bg-primary">
              <RiUser6Line className="mr-4" />
              <span>profile</span>
            </button>
          </div>
          <div className="w-full">
            <p className="text-shades-100 p-3 font-extralight">Made by Viyen</p>
          </div>
        </div>
      </div>
    </div>
  );
}
