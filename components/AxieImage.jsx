import { useState } from "react";
import { BiExpandAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
export default function AxieImage() {
  const [inputId, setInputId] = useState("");
  const [axieImages, setAxieImages] = useState([]);

  const getInputData = (e) => {
    const { value } = e.target;
    setInputId(value);
  };

  const getAxiePicture = () => {
    setInputId("");
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
            available: false,
          },
        ]);
      } else alert("you cant have more than 3 Axies in 1 team");
    }
  };

  //   console.log(axieImages);
  const deleteAxie = (axieId) => {
    setAxieImages((prevAxieImages) =>
      prevAxieImages.filter((img) => img.id != axieId)
    );
    console.log(axieId);
    console.log(axieImages);
  };

  let imagesElement = axieImages.map((axie) => {
    return (
      <div className="group axie-img w-48 h-60 bg-secondary m-5 rounded-md flex flex-col justify-evenly items-center border-2 border-secondary hover:border-2 hover:border-shades-300 hover:shadow-2xl transition duration-200 ease-linear">
        <div className="hidden group-hover:block flex items-center content-around transition duration-200 ease-linear">
          <button className="cursor-pointer mr-4">
            <AiOutlineDelete
              className="text-white hover:text-delete transition duration-200 ease-linear"
              onClick={() => deleteAxie(axie.id)}
            />
          </button>
          <button className="cursor-pointer">
            <BiExpandAlt className="text-white hover:text-expand transition duration-200 ease-linear" />
          </button>
        </div>
        <div>
          <img
            key={axie.id}
            src={axie.img}
            alt="Axie Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
  });
  //   console.log("elements :", imagesElement);
  return (
    <div className="bg-primary flex flex-col items-center">
      <div className="flex">{imagesElement}</div>
      <div className="relative">
        <input
          className="px-10 indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-l-md hover:border-red focus:border-white outline-none font-light "
          placeholder="Enter Axie ID..."
          onChange={getInputData}
          value={inputId}
        ></input>

        <button
          onClick={getAxiePicture}
          className="absolte bottom-0 top-0 right-0 h-max text-white border bg-gray-500 border-gray-500 rounded-r-md px-3 hover:bg-secondary font-extralight transition duration-200 ease-linear cursor-pointer"
        >
          Seach Axie
        </button>
      </div>
    </div>
  );
}
