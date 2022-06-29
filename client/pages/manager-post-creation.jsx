import Layout from "../components/Layout";
import ManagerForm from "../components/ManagerForm";
import AxieImage from "../components/AxieTeam";
import BodyPartModal from "../components/BodyPartModal";
import { useState } from "react";

export default function ManagerPostCreation() {
  const [showForm, setShowForm] = useState(false);
  const [axieImages, setAxieImages] = useState([]);
  const [modalAxie, setModalAxie] = useState([]);
  const [modalOn, setModalOn] = useState(false);

  return (
    <>
      {modalOn && (
        <BodyPartModal
          image={modalAxie[0].axie.image}
          parts={modalAxie[0].axie.parts}
          stats={modalAxie[0].axie.stats}
          setModalOn={setModalOn}
        />
      )}
      <div className="scroll-div max-h-screen overflow-y-auto  pt-10">
        <div className="flex flex-col items-center justify-center min-w-[1322px]">
          <AxieImage
            setShowForm={setShowForm}
            axieImages={axieImages}
            setAxieImages={setAxieImages}
            setModalAxie={setModalAxie}
            setModalOn={setModalOn}
          />
          <ManagerForm axieImages={axieImages} showForm={showForm} />
        </div>
      </div>
    </>
  );
}

ManagerPostCreation.getLayout = function getLayout() {
  return (
    <Layout>
      <ManagerPostCreation />
    </Layout>
  );
};
