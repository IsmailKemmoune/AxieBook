import AxieForm from "../components/AxieForm";
import AxieImage from "../components/AxieImage";
import BodyPartModal from "../components/BodyPartModal";
import { useState } from "react";

export default function PostCreation() {
  const [modalOn, setModalOn] = useState(false);
  return (
    <div className="w-full h-screen">
      {modalOn && <BodyPartModal setModalOn={setModalOn} />}
      <AxieImage setModalOn={setModalOn} />
      <div className="h-96 mt-10">
        <AxieForm />
      </div>
    </div>
  );
}
