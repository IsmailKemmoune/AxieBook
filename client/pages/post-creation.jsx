import Layout from "../components/Layout";
import AxieForm from "../components/AxieForm";
import AxieImage from "../components/AxieTeam";
import { useState } from "react";

export default function PostCreation() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="scroll-div max-h-screen overflow-y-auto  pt-10">
      <div className="flex flex-col items-center justify-center min-w-[1322px]">
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
