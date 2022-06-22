import { BiExpandAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";

const axieLoader = ({ src }) => {
  return `https://assets.axieinfinity.com/axies/${src}/axie/axie-full-transparent.png`;
};

export default function AxieImage({
  id,
  setAxieImages,
  setModalOn,
  axieImages,
  setModalAxie,
}) {
  const deleteAxie = (axieId) => {
    setAxieImages((prevAxieImages) =>
      prevAxieImages.filter((img) => img.axie.id != axieId)
    );
  };

  const expandAxie = (axieId) => {
    setModalAxie(axieImages.filter((img) => img.axie.id === axieId));
    setModalOn(true);
  };

  return (
    <div className="group relative cursor-pointer axie-img w-48 h-60 bg-secondary m-5 rounded-md flex flex-col justify-evenly items-center border-2 border-shades-600 hover:border-2 hover:border-primary hover:shadow-2xl transition duration-200 ease-linear">
      <div className="hidden group-hover:block z-10 w-[70px] h-[35px] bg-secondary border-shades-600 border-[1px] rounded-[4px] absolute top-[-20px] right-[10px] hover:shadow-button">
        <div className="w-full h-full grid grid-cols-2">
          <div className="w-full h-full flex items-center justify-center hover:bg-primary transition duration-100 ease-linear cursor-pointer ">
            <button className="w-full h-full flex items-center justify-center">
              <AiOutlineDelete
                className="w-full h-full p-2 text-white transition duration-200 ease-linear hover:text-delete"
                onClick={() => deleteAxie(id)}
              />
            </button>
          </div>
          <div className="w-full h-full flex items-center justify-center hover:bg-primary">
            <div className="w-full h-full flex items-center justify-center hover:bg-primary transition duration-100 ease-linear cursor-pointer ">
              <button className="w-full h-full flex items-center justify-centerr">
                <BiExpandAlt
                  className="w-full h-full p-2 text-white transition duration-200 ease-linear hover:text-expand"
                  onClick={() => expandAxie(id)}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <Image
            // placeholder="blur"
            // loading="eager"
            blurDataURL="/assets/skeleton.png"
            width="1280px"
            height="960px"
            loader={axieLoader}
            src={id}
            alt="Axie image"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
