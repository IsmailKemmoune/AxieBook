import Layout from "../components/Layout";
import AxieForm from "../components/AxieForm";
import AxieImage from "../components/AxieImage";
import BodyPartModal from "../components/BodyPartModal";
import { useState } from "react";

export default function PostCreation() {
  const [modalOn, setModalOn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="scroll-div w-full max-h-screen flex flex-col items-center overflow-y-auto pt-20">
      {modalOn && <BodyPartModal setModalOn={setModalOn} />}
      <AxieImage setShowForm={setShowForm} setModalOn={setModalOn} />
      {showForm && <AxieForm showForm={showForm} />}
    </div>
  );
}

PostCreation.getLayout = function getLayout() {
  return (
    <Layout>
      <PostCreation />
    </Layout>
  );
};
