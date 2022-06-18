import Layout from "../components/Layout";
import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import BodyPartModal from "../components/BodyPartModal";
import { useState } from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

export default function Home() {
  const [modalOn, setModalOn] = useState(false);

  return (
    <>
      {modalOn && <BodyPartModal setModalOn={setModalOn} />}
      <div className="grid grid-cols-2 relative top-[-80px]">
        <div className="scroll-div max-h-screen overflow-y-auto border-r-[1px] border-shades-200">
          <div className="mt-[130px]">
            <ManagerPost setModalOn={setModalOn} />
            <ManagerPost setModalOn={setModalOn} />
            <ManagerPost setModalOn={setModalOn} />
            <ManagerPost setModalOn={setModalOn} />
            <ManagerPost setModalOn={setModalOn} />
          </div>
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto">
          <div className="mt-[130px]">
            <ScholarPost />
            <ScholarPost />
            <ScholarPost />
            <ScholarPost />
            <ScholarPost />
            <ScholarPost />
            <ScholarPost />
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};
