import Image from "next/image";

export default function ReasonsCards() {
  return (
    <div className="w-full flex justify-around mt-10">
      {/* 1 */}
      <div className="w-[350px] h-[450px] mt-5 border-2 border-secondary p-5 relative">
        <div className="bg-black w-fit absolute top-[-35px] pl-2">
          <Image
            src="/rocket.png"
            alt="rocket image"
            width="70px"
            height="70px"
          />
        </div>
        <div className="flex mt-12 items-center">
          <div className="w-12">
            <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center mr-2">
              <span className="text-2xl bg-clip-text bg-gradient-to-r from-[#21B6F8] to-[#482FBD] text-transparent">
                1
              </span>
            </div>
          </div>
          <h3 className="flex items-center text-2xl bg-clip-text bg-gradient-to-r from-[#21B6F8] to-[#482FBD] text-transparent">
            Efficiency and ease of use
          </h3>
        </div>
        <p className="mt-4 font-light leading-relaxed">
          With AxieBook, you can browse, bookmark, or even create your posts,
          while letting others have all the necessary information.
        </p>
        <p className="mt-4 font-light leading-relaxed">
          We made the process of matching scholars with managers quite simple,
          creating the post takes less than 1min, and then the magic will
          happen.
        </p>
      </div>
      {/* 2 */}
      <div className="w-[350px] h-[450px] mt-5 border-2 border-secondary p-5 relative">
        <div className="bg-black w-fit absolute top-[-40px] px-1">
          <Image
            src="/structure.png"
            alt="rocket image"
            width="75px"
            height="75px"
          />
        </div>
        <div className="flex mt-12 items-center">
          <div className="w-12">
            <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center mr-2">
              <span className="text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">
                2
              </span>
            </div>
          </div>
          <h3 className="flex items-center text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">
            Centralized and organized
          </h3>
        </div>
        <p className="mt-4 font-light leading-relaxed">
          AxieBook allows you to browse among hundreds of offers in an organized
          way, instead of wasting your time and energy looking up random Discord
          servers with Axie infinity players.
        </p>
      </div>
      {/* 3 */}
      <div className="w-[350px] h-[450px] mt-5 border-2 border-secondary p-5 relative">
        <div className="bg-black w-fit absolute top-[-35px] px-2">
          <Image
            src="/user.png"
            alt="rocket image"
            width="60px"
            height="60px"
          />
        </div>
        <div className="flex mt-12 items-center">
          <div className="w-12">
            <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center mr-2">
              <span className="text-2xl bg-clip-text bg-gradient-to-r from-[#1AA2DA] to-[#63BF8F] text-transparent">
                3
              </span>
            </div>
          </div>
          <h3 className="flex items-center text-2xl bg-clip-text bg-gradient-to-r from-[#1AA2DA] to-[#63BF8F] text-transparent">
            Verified profiles
          </h3>
        </div>
        <p className="mt-4 font-light leading-relaxed">
          With AxieBook you can access others's profiles, see their badges, and
          check the reviews, that way you can be sure you're dealing with the
          right person
        </p>
      </div>
    </div>
  );
}
