import BodyParts from "./BodyParts";
import { useAtom } from "jotai";
import { modalStatusAtom } from "../atoms";

const glassmorphism = {
  display: "flex",
  position: "absolute",
  inset: "0",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  zIndex: "1000",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "saturate(180%) blur(5px)",
  borderBottom: "solid 1px #545267",
};

export default function BodyPartModal() {
  const [, setModalStatus] = useAtom(modalStatusAtom);

  return (
    <div
      style={glassmorphism}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        setModalStatus(false);
      }}
    >
      <BodyParts />
    </div>
  );
}
