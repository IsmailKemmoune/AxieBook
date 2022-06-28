import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-primary min-h-[320px] w-full flex justify-center">
      <div className="w-[1400px] h-full">
        <div className="py-10 px-20 h-full w-full">
          <div className="grid grid-cols-[25%_1fr] ">
            <h2 className="font-logo text-4xl">AxieBook</h2>
            <nav className="flex justify-around">
              <div>
                <h5 className="text-lg">Managers</h5>
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
              <div>
                <h5 className="text-lg">Scholars</h5>
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
              <div>
                <h5 className="text-lg">Guilds</h5>
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
              <div>
                <h5 className="text-lg">Contact</h5>
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
          <div className="w-full mt-20 flex space-x-3 justify-center items-center">
            <span className="font-light">Created with</span>
            <AiFillHeart className="text-[#c23a3a] text-2xl" />
            <span className="font-light">for Axie Infinity community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
