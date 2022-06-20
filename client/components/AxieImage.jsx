import { useState, useEffect } from "react";
import { BiExpandAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";

const axieLoader = ({ src }) => {
  return `https://assets.axieinfinity.com/axies/${src}/axie/axie-full-transparent.png`;
};

export default function AxieImage({ setShowForm, setModalOn }) {
  const [inputId, setInputId] = useState("");
  const [axieImages, setAxieImages] = useState([]);

  useEffect(() => {
    axieImages.length === 3 ? setShowForm(true) : setShowForm(false);
  }, [axieImages, setShowForm]);

  const getInputData = (e) => {
    const { value } = e.target;
    setInputId(value);
  };

  const getAxiePicture = () => {
    if (!inputId) {
      alert("Axie ID is required");
      return;
    }
    if (axieImages.some((img) => img.id === inputId))
      alert("This axie is already in the team");
    else {
      if (axieImages.length < 3) {
        setAxieImages((currentImages) => [
          ...currentImages,
          {
            img: `https://assets.axieinfinity.com/axies/${inputId}/axie/axie-full-transparent.png`,
            id: `${inputId}`,
          },
        ]);
      } else alert("you cant have more than 3 Axies in 1 team");
    }
    setInputId("");
  };

  const deleteAxie = (axieId) => {
    setAxieImages((prevAxieImages) =>
      prevAxieImages.filter((img) => img.id != axieId)
    );
  };

  const expandAxie = (axieId) => {
    setModalOn(true);
  };

  let imagesElement = axieImages.map((axie) => {
    return (
      <div
        key={axie.id}
        className="group cursor-pointer axie-img w-48 h-60 bg-secondary m-5 rounded-md flex flex-col justify-evenly items-center border-2 border-secondary hover:border-2 hover:border-shades-300 hover:shadow-2xl transition duration-200 ease-linear"
      >
        <div className="hidden  z-10 group-hover:block transition duration-200 ease-linear">
          <div className="flex items-center content-around transition duration-200 ease-linear">
            <button className="cursor-pointer mr-4">
              <AiOutlineDelete
                className="text-white hover:text-delete transition duration-200 ease-linear"
                onClick={() => deleteAxie(axie.id)}
              />
            </button>
            <button className="cursor-pointer">
              <BiExpandAlt
                className="text-white hover:text-expand transition duration-200 ease-linear"
                onClick={() => expandAxie(axie.id)}
              />
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            // placeholder="blur"
            // loading="eager"
            blurDataURL="/assets/skeleton.png"
            width="1280px"
            height="960px"
            loader={axieLoader}
            src={axie.id}
            alt="Axie image"
            quality={100}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="bg-primary flex flex-col items-center justify-center">
      <div className="relative">
        <input
          className="px-14 indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-l-md border-2 border-primary focus:border-expand focus:border-2 outline-none font-light p-2"
          placeholder="Enter Axie ID..."
          onChange={getInputData}
          value={inputId}
        ></input>

        <button
          onClick={getAxiePicture}
          className="absolte bottom-0 top-0 right-0 h-max text-white border bg-gray-500 border-gray-500 rounded-r-md px-3 hover:bg-secondary font-extralight transition duration-200 ease-linear cursor-pointer p-2"
        >
          Seach Axie
        </button>
      </div>
      <div className="flex">{imagesElement}</div>
    </div>
  );
}
