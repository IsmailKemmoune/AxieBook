import Link from "next/link";
import FeatureManagerCard from "../components/FeatureManagerCard";
import FeatureScholarCard from "../components/FeatureScholarCard";
import ReasonsCards from "../components/ReasonCard";
import Footer from "../components/Footer";
import { RiSearchEyeLine } from "react-icons/ri";
import { RiFocus3Line } from "react-icons/ri";
import { CgCommunity } from "react-icons/cg";

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
          <div className="flex justify-around">
            <FeatureManagerCard />
            <FeatureScholarCard />
          </div>
        </section>
        {/* reasons */}
        <section className="flex flex-col py-20 w-[1400px]">
          <h2 className="text-3xl ml-20">Why join AxieBook?</h2>
          <div className="flex  justify-around">
            <ReasonsCards />
          </div>
        </section>
        {/* joining steps */}
        <section className="flex flex-col py-20 w-[1400px] space-y-20">
          <div className="p-5 bg-shades-600 rounded-lg border-l-8 border-secondary shadow-card divide-dashed divide-y-2 divide-secondary w-1/2">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl pb-3">
                Finding what you're looking for won't ever be difficult for you
              </h2>
              <RiSearchEyeLine className=" w-[90px] h-[65px] bg-gradient-to-r from-[#21B6F8] to-[#482FBD] p-3 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] text-shades-600" />
            </div>
            <p className="font-light text-xl pt-5">
              As a scholar, you will come across a range of diverse teams. This
              will allow you to find the composition that you are most
              comfortable with. <br />
              As a manager, you may quickly recruit the top scholars.
            </p>
          </div>
          <div className="p-5 bg-shades-600 rounded-lg border-l-8 border-secondary shadow-card divide-dashed divide-y-2 divide-secondary w-1/2">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl pb-3">
                Focus on the important matters for your guild while we handle
                the rest
              </h2>
              <RiFocus3Line className=" w-[90px] h-[65px] bg-gradient-to-r from-purple-400 to-pink-600 p-3 rounded-[0%_100%_0%_100%_/_50%_50%_50%_50%] text-shades-600" />
            </div>
            <p className="font-light text-xl pt-5">
              Because big and medium-sized guilds require interest as well,
              AxieBook provides unique features for guilds.
            </p>
          </div>
          <div className="p-5 bg-shades-600 rounded-lg border-l-8 border-secondary shadow-card divide-dashed divide-y-2 divide-secondary w-1/2">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl pb-3">
                Join our community to find others with shared interests
              </h2>
              <CgCommunity className=" w-[90px] h-[65px] bg-gradient-to-r from-[#1AA2DA] to-[#63BF8F] p-3 rounded-[92%_8%_92%_8%_/_92%_8%_92%_8%] text-shades-600" />
            </div>
            {/* <h2 className="text-3xl pb-3">
              Join our community to find others with shared interests
            </h2> */}
            <p className="font-light text-xl pt-5">
              By joining our Discord server, you will obtain tags based on who
              you are and your qualifications. In addition, you can connect with
              people who have similar experiences and hear about their stories.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// 1 - efficiency and ease of use
// With AxieBook, you can browse, bookmark, or even create your posts, while letting others have all the necessary information.
// We made the process of matching scholars with managers quite simple, creating the post takes less than 1min, and then the magic will happen.

// 2 - centralized and organized
// AxieBook allows you to browse among hundreds of offers in an organized way,
// instead of wasting your time and energy looking up random Discord servers with Axie infinity players

// 3 - verified profiles
//  with AxieBook you can access others's profiles, see their badges, and check the reviews, that way you can be sure you're dealing with the right person

//----------------------------------------------------------------------------

// Finding what you're looking for won't ever be difficult for you.
// as a scholar you will find a variation of different teams, that way you can find the composition that you master
// as manager you can hire the best scholars in few steps

// Focus on the important matters for your guild while we handle the rest.
// large and medium sized guild need interest too, that why AxieBook gives a special pearks for guilds

// Join our community to find others with shared interests.
// by joining our Discord server you can get tags depends on who you are, and your achievements, not only that
// you can meet others with your same experience who share their experiences
