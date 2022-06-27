import Link from "next/link";
import FeatureManagerCard from "../components/FeatureManagerCard";
import FeatureScholarCard from "../components/FeatureScholarCard";
import ReasonsCards from "../components/ReasonCard";
import Footer from "../components/Footer";
import FeaturesCards from "../components/FeaturesCards";

const glassmorphism = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px 0px",
  position: "sticky",
  width: "100%",
  top: "-0.5px",
  zIndex: "1",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "saturate(180%) blur(5px)",
  // backdropFilter: "blur(12px)",
  //   borderBottom: "solid 1px #545267",
};

export default function Feed() {
  return (
    <div className="bg-black w-full flex flex-col items-center text-white ">
      <nav style={glassmorphism} className="flex ">
        <div className="w-[1400px] flex justify-around">
          <div>
            <h1 className="font-logo text-3xl">AxieBook</h1>
          </div>
          <ul className="flex">
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
        </div>
      </nav>
      <main>
        {/* hero */}
        <section className="flex flex-col items-center py-20 w-[1400px]">
          <div className="flex flex-col justify-center items-center py-5">
            <h1 className="text-7xl">The bridge between</h1>
            <h1 className="text-7xl">scholars and managers</h1>
          </div>
          <div className="flex mt-20 space-x-12">
            <button className="bg-white w-[250px] py-3 rounded-md border-2 border-black hover:border-white hover:bg-black hover:border-2 text-black hover:text-white text-lg transition duration-200 ease-linear">
              Create an account
            </button>
            <button className="w-[250px] py-3 rounded-md border-[1px] border-[#333] hover:border-white hover:border-2 text-[#888] hover:text-white text-lg transition duration-200 ease-linear">
              Browse offers
            </button>
          </div>
        </section>
        {/* features */}
        <section className="flex flex-col py-20 w-[1400px]">
          <h2 className="text-3xl ml-20">
            Explore various offers depends on your specific needs
          </h2>
          <div className="flex justify-evenly">
            <FeatureManagerCard />
            <FeatureScholarCard />
          </div>
        </section>
        {/* reasons */}
        <section className="flex flex-col py-20 w-[1400px]">
          <h2 className="text-3xl ml-20">Why join AxieBook?</h2>
          <div className="flex justify-around">
            <ReasonsCards />
          </div>
        </section>
        {/* Features */}
        <section className="flex flex-col p-20 w-[1400px] space-y-20">
          <FeaturesCards />
        </section>
        {/* joining steps */}
        <section className="flex flex-col py-20 w-[1400px] space-y-20">
          <h2 className="text-3xl ml-20">
            How to begin your journey using AxieBook
          </h2>
          <div className="flex justify-around">
            {/* 1 */}
            <div className="w-[320px]">
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
            <div className="w-[320px]">
              <div className="">
                <div className="bg-secondary w-7 h-7 rounded-full flex items-center justify-center mr-2">
                  <span>2</span>
                </div>
                <h4 className="text-xl mt-2">Fill out the form</h4>
              </div>
              <p className="font-light mt-3 leading-relaxed">
                You must fill out a brief form to explain your offer in order to
                create a post.
              </p>
            </div>
            {/* 3 */}
            <div className="w-[320px]">
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
            <div className="w-[320px]">
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
  );
}
