import Layout from "../components/Layout";
import ManagerForm from "../components/ManagerForm";
import AxieTeam from "../components/AxieTeam";
import BodyPartModal from "../components/BodyPartModal";
import { useAtom } from "jotai";
import { modalStatusAtom } from "../atoms";

export default function ManagerPostCreation() {
  const [modalStatus] = useAtom(modalStatusAtom);

  return (
    <>
      {modalStatus && <BodyPartModal />}
      <div className="scroll-div max-h-screen overflow-y-auto pt-10">
        <div className="flex flex-col items-center justify-center min-w-[1322px]">
          <AxieTeam />
          <ManagerForm />
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
