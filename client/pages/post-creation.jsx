import Layout from "../components/Layout";
import AxieForm from "../components/AxieForm";
import AxieImage from "../components/AxieImage";
import BodyPartModal from "../components/BodyPartModal";
import { useState } from "react";

export default function PostCreation() {
  const [modalOn, setModalOn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="scroll-div max-h-screen overflow-y-auto ">
      <div className="flex flex-col items-center justify-center ">
        {modalOn && <BodyPartModal setModalOn={setModalOn} />}
        <AxieImage setShowForm={setShowForm} setModalOn={setModalOn} />
        {/* <AxieForm showForm={showForm} /> */}
        {showForm && <AxieForm showForm={showForm} />}
      </div>
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
