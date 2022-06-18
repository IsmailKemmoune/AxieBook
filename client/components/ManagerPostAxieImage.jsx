import { motion } from "framer-motion";
import BeastIcon from "./classesIcons/BeastIcon";

export default function ManagerPostAxieImage({ setModalOn }) {
  return (
    <div className="flex flex-col items-center w-fit">
      <div className="w-48">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src="https://assets.axieinfinity.com/axies/1235/axie/axie-full-transparent.png"
          alt="axie image"
          className="w-full h-full object-cover"
          onClick={() => setModalOn(true)}
        />
      </div>
      <div className="flex items-center bg-classes-beast w-fit px-3 rounded-md ">
        <BeastIcon />
        <p className="ml-3 text-white text-sm font-light tracking-widest">
          #11321128
        </p>
      </div>
    </div>
  );
}
