// import * as PIXI from "pixi.js";
// import { Spine } from "pixi-spine";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import Image from "next/image";
import axieParts from "./axieParts";
import { useAtom } from "jotai";
import { modalStatusAtom } from "../atoms";
import { selectedAxieAtom } from "../atoms";
import AxieSpine from "./AxieSpine";

const axieLoader = ({ src }) => {
  return src;
};

export default function BodyParts() {
  const [, setModalStatus] = useAtom(modalStatusAtom);
  const [selectedAxie] = useAtom(selectedAxieAtom);

  const {
    axie: { stats, parts, image },
  } = selectedAxie;
  const { hp, speed, skill, morale } = stats;
  const [eyes, ears, back, mouth, horn, tail] = parts;

  return (
    <div className="bg-secondary text-white w-[1000px] flex flex-col justify-evenly p-7 rounded-md mt-10 drop-shadow-lg">
      <div className="w-full flex items-center justify-between mb-5">
        <p>BODY PARTS</p>
        <AiOutlineCloseCircle
          className="pointer-cursor text-xl hover:text-delete"
          onClick={() => setModalStatus(false)}
        />
      </div>
      <hr />
      <div className="flex justify-center mt-10 w-full">
        <div className="grid grid-cols-2 gap-y-5 gap-x-[250px] w-[80%] ">
          <div className="w-full flex items-center">
            {axieParts[eyes.class + "Eye"]()}
            <p className="ml-2 text-lg">{eyes.name}</p>
          </div>
          <div className="w-full flex items-center">
            {axieParts[ears.class + "Ear"]()}
            <p className="ml-2 text-lg">{ears.name}</p>
          </div>
          <div className="w-full flex items-center">
            {axieParts[back.class + "Back"]()}
            <p className="ml-2 text-lg">{back.name}</p>
          </div>
          <div className="w-full flex items-center">
            {axieParts[mouth.class + "Mouth"]()}
            <p className="ml-2 text-lg">{mouth.name}</p>
          </div>
          <div className="w-full flex items-center">
            {axieParts[horn.class + "Horn"]()}
            <p className="ml-2 text-lg">{horn.name}</p>
          </div>
          <div className="w-full flex items-center">
            {axieParts[tail.class + "Tail"]()}
            <p className="ml-2 text-lg">{tail.name}</p>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-[180px_1fr_180px]">
            <div className="flex flex-col justify-around">
              <div className="rounded-full h-[90px] ">
                <img
                  src={back.abilities[0].backgroundUrl}
                  className="object-cover overflow-hidden w-full h-full rounded-full object-[50%_31%]"
                />
              </div>
              <div className="rounded-full h-[90px] ">
                <img
                  src={mouth.abilities[0].backgroundUrl}
                  className="object-cover overflow-hidden w-full h-full rounded-full object-[50%_31%]"
                />
              </div>
            </div>
            <Image
              width="1280px"
              height="960px"
              loader={axieLoader}
              // unoptimized={true}
              src={image}
              alt="Axie image"
              quality={100}
            />
            <div className="flex flex-col justify-around">
              {/* <div>
                <div className="rounded-full relative">
                  <img
                    src={horn.abilities[0].backgroundUrl}
                    className=" clip absolute"
                  />
                </div>
              </div> */}
              <div className="rounded-full h-[90px] ">
                <img
                  src={horn.abilities[0].backgroundUrl}
                  className="object-cover overflow-hidden w-full h-full rounded-full object-[50%_31%]"
                />
              </div>
              <div className="rounded-full h-[90px] ">
                <img
                  src={tail.abilities[0].backgroundUrl}
                  className="object-cover overflow-hidden w-full h-full rounded-full object-[50%_31%]"
                />
              </div>
            </div>
          </div>
          <div className="w-[60%]">
            <ul className="flex justify-around">
              <li className="w-auto">
                <div className="w-full">
                  <p className="font-semibold text-xs tracking-wider">HEALTH</p>
                  <div className="flex items-center">
                    <div className="text-[#3ac279] text-xl bg-[#3c424d] rounded-lg p-1 mr-2">
                      <AiFillHeart />
                    </div>
                    <p className="text-2xl font-semibold">{hp}</p>
                  </div>
                </div>
              </li>
              <li className="w-auto">
                <div className="w-full">
                  <p className="font-semibold text-xs tracking-wider">SPEED</p>
                  <div className="flex items-center">
                    <div className="text-[#f7ac0a] text-xl bg-[#3c424d] rounded-lg p-1 mr-2">
                      <AiFillThunderbolt />
                    </div>
                    <p className="text-2xl font-semibold">{speed}</p>
                  </div>
                </div>
              </li>
              <li className="w-auto">
                <div className="w-full">
                  <p className="font-semibold text-xs tracking-wider">SKILL</p>
                  <div className="flex items-center">
                    <div className="text-[#6a3ac2] text-xl bg-[#3c424d] rounded-lg p-1 mr-2">
                      <AiFillStar />
                    </div>
                    <p className="text-2xl font-semibold">{skill}</p>
                  </div>
                </div>
              </li>
              <li className="w-auto">
                <div className="w-full">
                  <p className="font-semibold text-xs tracking-wider">MORALE</p>
                  <div className="flex items-center">
                    <div className="text-[#c23a3a] text-xl bg-[#3c424d] rounded-lg p-1 mr-2">
                      <AiFillFire />
                    </div>
                    <p className="text-2xl font-semibold">{morale}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
