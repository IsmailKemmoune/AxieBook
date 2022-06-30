import Link from "next/link";
import FeatureManagerCard from "../components/FeatureManagerCard";
import FeatureScholarCard from "../components/FeatureScholarCard";
import ReasonsCards from "../components/ReasonsCards";
import Footer from "../components/Footer";
import FeaturesCards from "../components/FeaturesCards";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";

const glassmorphism = {
  // display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px 0px",
  // position: "sticky",
  width: "100%",
  // top: "-0.5px",
  zIndex: "1",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "saturate(180%) blur(5px)",
};

export default function Home() {
  const [isBurger, setIsBurger] = useState(false);

  return (
    <AnimatePresence>
      <div className="bg-black w-full flex flex-col items-center text-white ">
        <nav style={glassmorphism} className="flex sticky top-[-0.5px] ">
          <div className="max-w-[1400px] w-[90%] flex justify-around">
            <div>
              <h1 className="font-logo text-3xl">AxieBook</h1>
            </div>
            <ul className="flex homesm:hidden">
              <Link href="/manager-post-creation">
                <li className="mr-14 font-light cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
                  Find scholar
                </li>
              </Link>
              <Link href="/manager-post-creation">
                <li className="mr-14 font-light cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
                  Find manager
                </li>
              </Link>
            </ul>
            <button
              className="hidden homesm:block"
              onClick={() => setIsBurger((prevState) => !prevState)}
            >
              <RiMenu4Fill className="text-3xl" />
            </button>
          </div>
        </nav>
        {isBurger && (
          <motion.nav
            key="navbar"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            style={glassmorphism}
            className="fixed top-[85px] h-[30px] border-y-[0.5px] border-shades-200 hidden homesm:flex"
          >
            <ul className="flex w-full justify-around">
              <Link href="/manager-post-creation">
                <li className="font-light cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
                  Find scholar
                </li>
              </Link>
              <Link href="/manager-post-creation">
                <li className="font-light cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
                  Find manager
                </li>
              </Link>
            </ul>
          </motion.nav>
        )}
        <main className="flex flex-col items-center">
          {/* hero */}
          <section className="flex flex-col items-center py-20 px-30 max-w-[1400px] w-full">
            <div className="flex flex-col justify-center items-center p-5">
              <h1 className="text-7xl">The bridge between</h1>
              <h1 className="text-7xl">scholars and managers</h1>
            </div>
            <div className="flex justify-evenly mt-20 flex-wrap w-[80%]">
              <Link href="/login">
                <button className="bg-white w-[250px] py-3 rounded-md border-2 border-black hover:border-white hover:bg-black hover:border-2 text-black hover:text-white text-lg transition duration-200 ease-linear mt-10">
                  Create an account
                </button>
              </Link>
              <Link href="/feed">
                <button className="w-[250px] py-3 rounded-md border-[1px] border-[#333] hover:border-white hover:border-2 text-[#888] hover:text-white text-lg transition duration-200 ease-linear mt-10">
                  Browse offers
                </button>
              </Link>
            </div>
          </section>
          {/* features */}
          <section className="flex flex-col py-20 max-w-[1400px] w-full">
            <h2 className="text-3xl ml-20">
              Explore various offers depends on your specific needs
            </h2>
            <div className="flex justify-evenly flex-wrap">
              <FeatureManagerCard />
              <FeatureScholarCard />
            </div>
          </section>
          {/* reasons */}
          <section className="flex flex-col py-20 max-w-[1400px] w-full">
            <h2 className="text-3xl ml-20">Why join AxieBook?</h2>
            <div className="flex justify-around">
              <ReasonsCards />
            </div>
          </section>
          {/* Features */}
          <section className="max-w-[1400px] w-full">
            <FeaturesCards />
          </section>
          {/* joining steps */}
          <section className="flex flex-col py-20 max-w-[1400px] w-full space-y-20 mb-10">
            <h2 className="text-3xl ml-20">
              How to begin your journey using AxieBook
            </h2>
            <div className="flex justify-around flex-wrap">
              {/* 1 */}
              <div className="w-[300px] mt-10">
                <div className="">
                  <div className="bg-secondary w-7 h-7 rounded-full flex items-center justify-center mr-2">
                    <span>1</span>
                  </div>
                  <h4 className="text-xl mt-2">Create your account</h4>
                </div>
                <p className="font-light mt-3 leading-relaxed">
                  Providing basic information will help people to identify you.
                </p>
              </div>
              {/* 2 */}
              <div className="w-[300px] mt-10">
                <div className="">
                  <div className="bg-secondary w-7 h-7 rounded-full flex items-center justify-center mr-2">
                    <span>2</span>
                  </div>
                  <h4 className="text-xl mt-2">Fill out the form</h4>
                </div>
                <p className="font-light mt-3 leading-relaxed">
                  You must fill out a brief form to explain your offer in order
                  to create a post.
                </p>
              </div>
              {/* 3 */}
              <div className="w-[300px] mt-10">
                <div className="">
                  <div className="bg-secondary w-7 h-7 rounded-full flex items-center justify-center mr-2">
                    <span>3</span>
                  </div>
                  <h4 className="text-xl mt-2">Recieve offers</h4>
                </div>
                <p className="font-light mt-3 leading-relaxed">
                  receive proposals from people that are interested.
                </p>
              </div>
              {/* 4 */}
              <div className="w-[300px] mt-10">
                <div className="">
                  <div className="bg-secondary w-7 h-7 rounded-full flex items-center justify-center mr-2">
                    <span>4</span>
                  </div>
                  <h4 className="text-xl mt-2">Contact the right person</h4>
                </div>
                <p className="font-light mt-3 leading-relaxed">
                  contact the matching prospect to begin your adventure.
                </p>
              </div>
              {/* 2 */}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
