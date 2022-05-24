import Card from "../components/Card";
import BodyPartModal from "../components/BodyPartModal";
import { useState } from "react";

export default function PostCreation() {
  const [modalOn, setModalOn] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Card setModalOn={setModalOn} />
      {modalOn && <BodyPartModal setModalOn={setModalOn} />}
    </div>
  );
}
