import React from "react";
import { useState } from "react";
// import { data } from "autoprefixer";
import Image from "next/image";
import AxieImage from "./AxieImage";
import AxieForm from "./AxieForm";
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

  // const axieArray = []
  // const axieDetails = {
  //   id: "",
  //   name: "",
  //   class: "",
  //   parts: [
  //     {
  //       name: "",
  //       type: "",
  //     }
  //   ],
  // };

  return (
    <div className="card flex flex-col items-center justify-center w-3/5 bg-primary rounded-md drop-shadow-lg h-96">
      <AxieImage />
      <hr />
      {/* <div className="h-96 pt-10">
        <AxieForm />
      </div> */}
    </div>
  );
}

//atlas : https://assets.axieinfinity.com/axies/940499/axie/axie.atlas
//image : https://assets.axieinfinity.com/axies/940499/axie/axie.png
//model : https://assets.axieinfinity.com/axies/940499/axie/axie.json
