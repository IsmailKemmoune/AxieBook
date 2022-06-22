import Layout from "../components/Layout";
import AxieForm from "../components/AxieForm";
import AxieImage from "../components/AxieImage";
import BodyPartModal from "../components/BodyPartModal";
import { useState } from "react";

export default function PostCreation() {
  // const [modalOn, setModalOn] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="scroll-div max-h-screen overflow-y-auto w-[1322px] pt-10">
      <div className="flex flex-col items-center justify-center ">
        {/* {modalOn && <BodyPartModal setModalOn={setModalOn} />} */}
        {/* <AxieImage setShowForm={setShowForm} setModalOn={setModalOn} /> */}
        <AxieImage setShowForm={setShowForm} />

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
