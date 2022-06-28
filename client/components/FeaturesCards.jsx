import { RiSearchEyeLine } from "react-icons/ri";
import { RiFocus3Line } from "react-icons/ri";
import { CgCommunity } from "react-icons/cg";

export default function featuresCards() {
  return (
    <>
      <div className="p-5 bg-shades-600 rounded-lg border-l-8 border-secondary shadow-card divide-dashed divide-y-2 divide-secondary w-[630px]">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl pb-3">
            Finding what you're looking for won't ever be difficult for you
          </h2>
          <RiSearchEyeLine className=" w-[90px] h-[65px] ml-5 bg-gradient-to-r from-[#21B6F8] to-[#482FBD] p-3 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] text-shades-600" />
        </div>
        <p className="font-light text-xl pt-5 leading-relaxed">
          As a scholar, you will come across a range of diverse teams. This will
          allow you to find the composition that you are most comfortable with.{" "}
          <br />
          As a manager, you may quickly recruit the top scholars.
        </p>
      </div>
      <div className="p-5 bg-shades-600 rounded-lg border-l-8 border-secondary shadow-card divide-dashed divide-y-2 divide-secondary w-[630px] self-end">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl pb-3">
            Focus on the important matters for your guild while we handle the
            rest
          </h2>
          <RiFocus3Line className=" w-[90px] h-[65px] ml-5 bg-gradient-to-r from-purple-400 to-pink-600 p-3 rounded-[0%_100%_0%_100%_/_50%_50%_50%_50%] text-shades-600" />
        </div>
        <p className="font-light text-xl pt-5 leading-relaxed">
          Because big and medium-sized guilds require interest as well, AxieBook
          provides unique features for guilds.
        </p>
      </div>
      <div className="p-5 bg-shades-600 rounded-lg border-l-8 border-secondary shadow-card divide-dashed divide-y-2 divide-secondary w-[630px]">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl pb-3">
            Join our community to find others with shared interests
          </h2>
          <CgCommunity className=" w-[90px] h-[65px] ml-3 bg-gradient-to-r from-[#1AA2DA] to-[#63BF8F] p-3 rounded-[92%_8%_92%_8%_/_92%_8%_92%_8%] text-shades-600" />
        </div>
        <p className="font-light text-xl pt-5 leading-relaxed">
          By joining our Discord server, you will obtain tags based on who you
          are and your qualifications. In addition, you can connect with people
          who have similar experiences and hear about their stories.
        </p>
      </div>
    </>
  );
}
