import { useState, useEffect } from "react";
import { request } from "graphql-request";
import query from "../graphqlQuery";
import AxieImage from "./AxieImage";
import BodyPartModal from "./BodyPartModal";

export default function AxieTeam({ setShowForm, axieImages, setAxieImages }) {
  const [axieId, setAxieId] = useState("");
  const [modalAxie, setModalAxie] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log(modalAxie);

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
        setAxieImages((currentImages) => [...currentImages, data]);
        setIsLoading(false);
      } else alert("you cant have more than 3 Axies in 1 team");
    }
    setAxieId("");
  };

  let imagesElement = axieImages.map((axie) => (
    <AxieImage
      key={axie.axie.id}
      id={axie.axie.id}
      setAxieImages={setAxieImages}
      setModalOn={setModalOn}
      setModalAxie={setModalAxie}
      axieImages={axieImages}
    />
  ));

  return (
    <>
      {modalOn && (
        <BodyPartModal
          image={modalAxie[0].axie.image}
          parts={modalAxie[0].axie.parts}
          stats={modalAxie[0].axie.stats}
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
