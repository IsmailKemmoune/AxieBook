import { useState, useEffect } from "react";
import { BiExpandAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { request } from "graphql-request";
import Image from "next/image";
import query from "../graphqlQuery";
import BodyPartModal from "../components/BodyPartModal";

const axieLoader = ({ src }) => {
  return `https://assets.axieinfinity.com/axies/${src}/axie/axie-full-transparent.png`;
};

// export default function AxieImage({ setShowForm, setModalOn }) {
export default function AxieImage({ setShowForm }) {
  const [axieId, setAxieId] = useState("");
  const [axie, setAxie] = useState({});
  const [axieImages, setAxieImages] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getAxiePicture();
    }
  };

  const variables = {
    axieId: axieId,
  };

  useEffect(() => {
    axieImages.length === 3 ? setShowForm(true) : setShowForm(false);
  }, [axieImages, setShowForm]);

  const getInputData = (e) => {
    const { value } = e.target;
    setAxieId(value);
  };

  const fetchAxie = async () => {
    try {
      const data = await request(
        "https://graphql-gateway.axieinfinity.com/graphql",
        query,
        variables
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getAxiePicture = async () => {
    if (!axieId) {
      alert("Axie ID is required");
      return;
    }
    if (axieImages.some((img) => img.id === axieId))
      alert("This axie is already in the team");
    else {
      if (axieImages.length < 3) {
        setIsLoading(true);
        const data = await fetchAxie();
        setAxie(data);
        setAxieImages((currentImages) => [
          ...currentImages,
          {
            img: data.axie.image,
            id: data.axie.id,
          },
        ]);
        setIsLoading(false);
      } else alert("you cant have more than 3 Axies in 1 team");
    }
    setAxieId("");
  };

  const deleteAxie = (axieId) => {
    setAxieImages((prevAxieImages) =>
      prevAxieImages.filter((img) => img.id != axieId)
    );
  };

  const expandAxie = () => {
    setModalOn(true);
  };

  let imagesElement = axieImages.map((axie) => {
    return (
      <div
        key={axie.id}
        className="group relative cursor-pointer axie-img w-48 h-60 bg-secondary m-5 rounded-md flex flex-col justify-evenly items-center border-2 border-shades-600 hover:border-2 hover:border-primary hover:shadow-2xl transition duration-200 ease-linear"
      >
        {/* <div className="hidden  z-10 group-hover:block transition duration-200 ease-linear"> */}
        <div className="hidden group-hover:block z-10 w-[70px] h-[35px] bg-secondary border-shades-600 border-[1px] rounded-[4px] absolute top-[-20px] right-[10px] hover:shadow-button">
          <div className="w-full h-full grid grid-cols-2">
            <div className="w-full h-full flex items-center justify-center hover:bg-primary transition duration-100 ease-linear cursor-pointer ">
              <button className="w-full h-full flex items-center justify-center">
                <AiOutlineDelete
                  className="w-full h-full p-2 text-white transition duration-200 ease-linear hover:text-delete"
                  onClick={() => deleteAxie(axie.id)}
                />
              </button>
            </div>
            <div className="w-full h-full flex items-center justify-center hover:bg-primary">
              <div className="w-full h-full flex items-center justify-center hover:bg-primary transition duration-100 ease-linear cursor-pointer ">
                <button className="w-full h-full flex items-center justify-centerr">
                  <BiExpandAlt
                    className="w-full h-full p-2 text-white transition duration-200 ease-linear hover:text-expand"
                    onClick={() => expandAxie(axie.id)}
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
              src={axie.id}
              alt="Axie image"
              quality={100}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {modalOn && (
        <BodyPartModal
          parts={axie.axie.parts}
          stats={axie.axie.stats}
          setModalOn={setModalOn}
        />
      )}
      <div className="bg-primary flex flex-col items-center justify-center">
        <div className="relative">
          <input
            className="px-14 indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-l-md border-2 border-primary focus:border-expand focus:border-2 outline-none font-light p-2"
            placeholder="Enter Axie ID..."
            onChange={getInputData}
            onKeyDown={handleKeyDown}
            value={axieId}
          ></input>

          <button
            onClick={getAxiePicture}
            className="absolte bottom-0 top-0 right-0 h-max text-white border bg-gray-500 border-gray-500 rounded-r-md px-3 hover:bg-secondary font-extralight transition duration-200 ease-linear cursor-pointer p-2"
          >
            Seach Axie
          </button>
        </div>
        <div className="flex mt-5">{imagesElement}</div>
      </div>
    </>
  );
}
