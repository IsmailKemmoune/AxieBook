import Layout from "../components/Layout";
import ManagerForm from "../components/ManagerForm";
import AxieImage from "../components/AxieTeam";
import { useState } from "react";

export default function ManagerPostCreation() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="scroll-div max-h-screen overflow-y-auto  pt-10">
      <div className="flex flex-col items-center justify-center min-w-[1322px]">
        <AxieImage setShowForm={setShowForm} />
        {showForm && <ManagerForm showForm={showForm} />}
      </div>
    </div>
  );
}

ManagerPostCreation.getLayout = function getLayout() {
  return (
    <Layout>
      <ManagerPostCreation />
    </Layout>
  );
};
