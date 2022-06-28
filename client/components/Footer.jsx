import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-primary min-h-[320px] w-full flex justify-center">
      <div className="w-[1400px] h-full">
        <div className="py-10 px-20 h-full w-full">
          <div className="flex flex-wrap">
            <div className="w-[30%] min-w-[200px]">
              <h2 className="font-logo text-4xl">AxieBook</h2>
            </div>
            <nav className="flex justify-around w-[70%] flex-wrap">
              <div className="w-[200px]">
                <h5 className="text-lg mt-5">Managers</h5>
                <ul className="flex flex-col space-y-3 mt-5">
                  <Link href="#">
                    <li className="text-shades-100 hover:text-white hover:cursor-pointer">
                      Hire scholars
                    </li>
                  </Link>
                  <Link href="#">
                    <li className="text-shades-100 hover:text-white hover:cursor-pointer">
                      How to hire
                    </li>
                  </Link>
                  <Link href="#">
                    <li className="text-shades-100 hover:text-white hover:cursor-pointer">
                      Create an account
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="w-[200px]">
                <h5 className="text-lg mt-5">Scholars</h5>
                <ul className="flex flex-col space-y-3 mt-5">
                  <Link href="#">
                    <li className="text-shades-100 hover:text-white hover:cursor-pointer">
                      Find a team
                    </li>
                  </Link>
                  <Link href="#">
                    <li className="text-shades-100 hover:text-white hover:cursor-pointer">
                      How to apply
                    </li>
                  </Link>
                  <Link href="#">
                    <li className="text-shades-100 hover:text-white hover:cursor-pointer">
                      Create an account
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="w-[200px]">
                <h5 className="text-lg mt-5">Guilds</h5>
                <ul className="flex flex-col space-y-3 mt-5">
                  <Link href="#">
                    <li className="text-shades-100 hover:text-white hover:cursor-pointer">
                      Hire scholars
                    </li>
                  </Link>
                  <Link href="#">
                    <li className="text-shades-100 hover:text-white hover:cursor-pointer">
                      Create a guild account
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="w-[200px]">
                <h5 className="text-lg mt-5">Contact</h5>
                <ul className="flex flex-col space-y-3 mt-5">
                  <Link href="#">
                    <li className="text-shades-100 hover:text-white hover:cursor-pointer">
                      Contact Us
                    </li>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
          <div className="w-full mt-20 flex flex-wrap space-x-3 justify-center items-center">
            <span className="font-light">Created with</span>
            <AiFillHeart className="text-[#c23a3a] text-2xl" />
            <span className="font-light">for Axie Infinity community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
