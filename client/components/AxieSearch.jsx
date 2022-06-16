import { useState } from "react";

export default function AxieSearch() {
  const [inputId, setInputId] = useState("");

  const getAxiePicture = () => {
    setAxieImage(
      `https://assets.axieinfinity.com/axies/${inputId}/axie/axie-full-transparent.png`
    );
  };

  const getInputData = (e) => {
    const { value } = e.target;
    setInputId(value);
  };

  return (
    <div>
      <input
        placeholder="Axie ID"
        onChange={getInputData}
        value={inputId}
      ></input>
      <button
        onClick={getAxiePicture}
        className="text-white border bg-gray-500 border-gray-500 rounded-md px-3 hover:bg-gray-100"
      >
        Seach Axie
      </button>
    </div>
  );
}
