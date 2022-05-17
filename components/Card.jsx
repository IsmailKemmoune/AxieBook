import React from "react";
import { useState } from "react";
// import { data } from "autoprefixer";
import Image from "next/image";
import Axie from "../components/Axie";
import axios from "axios";

export default function Card() {
  // const [axieName, setAxieName] = useState("");
  // const [axieImage, setAxieImage] = useState("");
  // const [inputId, setInputId] = useState("");

  const getInputData = (e) => {
    const { value } = e.target;
    setInputId(value);
  };

  const getAxieInfo = async (inputId) => {
    try {
      const { data } = await axios.get(
        `https://api.axie.technology/getaxies/${inputId}`
      );
      const axieName = data.name;
      const axieImage = data.figure.image;
      console.log(data);
      setAxieName(axieName);
      setAxieImage(axieImage);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-primary w-3/5 h-80 rounded-md drop-shadow-lg">
      {/* <div className="w-50 border-2 border-secondary rounded mb-5">
        <img src={axieImage} alt="axie image" />
      </div> */}
      {/* <p>{axieName}</p> */}
      {/* <input
        placeholder="Axie ID"
        onChange={getInputData}
        value={inputId}
      ></input>
      <button onClick={() => getAxieInfo(inputId)}>Search</button> */}
      <Axie />
    </div>
  );
}

//atlas : https://assets.axieinfinity.com/axies/940499/axie/axie.atlas
//image : https://assets.axieinfinity.com/axies/940499/axie/axie.png
//model : https://assets.axieinfinity.com/axies/940499/axie/axie.json
