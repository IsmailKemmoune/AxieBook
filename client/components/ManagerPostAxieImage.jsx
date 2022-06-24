import { motion } from "framer-motion";
import { useState } from "react";
import BodyPartModal from "../components/BodyPartModal";
import classesIcons from "./classesIcons";

const colors = {
  Plant: "#96CB00",
  Aquatic: "#35C2DE",
  Beast: "#F59B14",
  Bird: "#FA59A0",
  Reptile: "#9967FB",
  Mech: "#71898E",
  Dusk: "#029FAE",
  Bug: "#FF433E",
  Dawn: "#7183E3",
};

export default function ManagerPostAxieImage({
  // setModalOn,
  image,
  id,
  axieClass,
  parts,
  stats,
}) {
  const [modalOn, setModalOn] = useState(false);
  console.log(parts);
  // console.log(stats);
  return (
    <>
      {modalOn && (
        <BodyPartModal
          setModalOn={setModalOn}
          image={image}
          parts={parts}
          stats={stats}
        />
      )}
      <div className="flex flex-col items-center w-fit">
        <div className="w-48">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={image}
            alt="axie image"
            className="w-full h-full object-cover"
            onClick={() => setModalOn(true)}
          />
        </div>
        <div
          className="flex items-center px-3 rounded-md w-max"
          style={{ backgroundColor: colors[axieClass] }}
        >
          {classesIcons[axieClass + "Icon"]()}
          <p className="ml-3 text-white text-sm font-light tracking-widest ">
            {`#${id}`}
          </p>
        </div>
      </div>
    </>
  );
}
