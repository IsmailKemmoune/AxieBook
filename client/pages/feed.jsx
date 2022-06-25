import Link from "next/link";

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
    <div className="bg-black w-full h-full text-white">
      <nav style={glassmorphism}>
        <ul>
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
      </nav>
      <main>
        {/* hero */}
        <section className="flex flex-col items-center py-4">
          <h1 className="text-3xl">The bridge between scholars and managers</h1>
          <div className="flex mt-5 space-x-4">
            <button className="bg-white w-[250px] py-3 rounded-md border-2 border-black hover:border-white hover:bg-black hover:border-2 text-black hover:text-white text-lg transition duration-200 ease-linear">
              Create an account
            </button>
            <button className="w-[250px] py-3 rounded-md border-[1px] border-[#333] hover:border-white hover:border-2 text-[#888] hover:text-white text-lg transition duration-200 ease-linear">
              Browse offers
            </button>
          </div>
        </section>
        {/* features */}
        <section className="flex flex-col items-center">
          <p>Explore various offers depends on your specific need</p>
          <div className="grid grid-cols-2 mt-5">
            <div>
              <h3>For managers</h3>
            </div>
            <div>
              <h3>For scholars</h3>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
