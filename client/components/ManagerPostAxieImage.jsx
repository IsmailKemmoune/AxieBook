import { motion } from "framer-motion";
import { request } from "graphql-request";
import query from "../graphqlQuery";
import classesIcons from "./classesIcons";
import { useAtom } from "jotai";
import { modalStatusAtom } from "../atoms";
import { selectedAxieAtom } from "../atoms";

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

export default function ManagerPostAxieImage({ image, id, axieClass }) {
  const [, setModalStatus] = useAtom(modalStatusAtom);
  const [, setSelectedAxie] = useAtom(selectedAxieAtom);

  const variables = {
    axieId: id,
  };
  const fetchAxie = async () => {
    try {
      const data = await request(
        "https://graphql-gateway.axieinfinity.com/graphql",
        query,
        variables
      );
      setSelectedAxie(data);
      setModalStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-fit">
        <div className="w-48">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={image}
            alt="axie image"
            className="w-full h-full object-cover"
            onClick={fetchAxie}
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
