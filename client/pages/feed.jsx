import Link from "next/link";
import FeatureManagerCard from "../components/FeatureManagerCard";
import FeatureScholarCard from "../components/FeatureScholarCard";
import ReasonsCards from "../components/ReasonCard";
import Footer from "../components/Footer";

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
  backdropFilter: "saturate(180%) blur(9px)",
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
        <section className="flex flex-col py-20 w-[1400px]"></section>
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

// You will never have struggles to find what you're looking for

// Focus on your guild's important things and

// Join our community and meet people that share your same interests
