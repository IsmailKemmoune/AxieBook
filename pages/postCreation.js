import AxieForm from "../components/AxieForm";
import AxieImage from "../components/AxieImage";
import BodyPartModal from "../components/BodyPartModal";
import { useState } from "react";

export default function PostCreation() {
  const [modalOn, setModalOn] = useState(false);
  return (
    <div className="scroll-div w-full h-full flex flex-col items-center overflow-auto pt-20">
      {modalOn && <BodyPartModal setModalOn={setModalOn} />}
      <AxieImage setModalOn={setModalOn} />
      <AxieForm />
    </div>
  );
}
