import { useState, useEffect } from "react";
import { request } from "graphql-request";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { AxieTeamAtom } from "../atoms";
import { formStatusAtom } from "../atoms";
import query from "../graphqlQuery";
import AxieImage from "./AxieImage";

export default function AxieTeam() {
  const [isLoading, setIsLoading] = useState(false);
  const [axieId, setAxieId] = useState("");
  const [axieTeam, setAxieTeam] = useAtom(AxieTeamAtom);
  const [, setFormStatus] = useAtom(formStatusAtom);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getAxie();
    }
  };

  const variables = {
    axieId: axieId,
  };

  useEffect(() => {
    axieTeam.length === 3 ? setFormStatus(true) : setFormStatus(false);
  }, [axieTeam, setFormStatus]);

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

  const getAxie = async () => {
    if (!axieId) {
      alert("Axie ID is required");
      return;
    }
    if (axieTeam.some((axie) => axie.id === axieId))
      alert("This axie is already in the team");
    else {
      if (axieTeam.length < 3) {
        setIsLoading(true);
        const newAxie = await fetchAxie();
        setAxieTeam((currentAxies) => [...currentAxies, newAxie]);
        setIsLoading(false);
      } else alert("you cant have more than 3 Axies in 1 team");
    }
    setAxieId("");
  };

  let axiesElement = axieTeam.map((axie) => (
    <AxieImage key={axie.axie.id} id={axie.axie.id} />
  ));

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="bg-primary flex flex-col items-center justify-center"
    >
      <div className="relative">
        <input
          className="px-14 indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-l-md border-2 border-primary focus:border-expand focus:border-2 outline-none font-light p-2"
          placeholder="Enter Axie ID..."
          onChange={getInputData}
          onKeyDown={handleKeyDown}
          value={axieId}
        ></input>

        <button
          onClick={getAxie}
          className="absolte bottom-0 top-0 right-0 h-max text-white border bg-gray-500 border-gray-500 rounded-r-md px-3 hover:bg-secondary font-extralight transition duration-200 ease-linear cursor-pointer p-2"
        >
          Seach Axie
        </button>
      </div>
      <div className="flex mt-5">{axiesElement}</div>
    </motion.div>
  );
}
