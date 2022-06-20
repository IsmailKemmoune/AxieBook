import Layout from "../components/Layout";
import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import BodyPartModal from "../components/BodyPartModal";
import { useState, useEffect } from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

export default function Home() {
  const [modalOn, setModalOn] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  console.log(windowSize.innerWidth);
  return (
    <>
      {/* {modalOn && <BodyPartModal setModalOn={setModalOn} />}
      <div className="grid grid-cols-2 relative top-[-80px] ">
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
      </div> */}

      {modalOn && <BodyPartModal setModalOn={setModalOn} />}
      {windowSize.innerWidth >= 1800 ? (
        <div className="grid grid-cols-2 relative top-[-80px] ">
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
      ) : (
        <div className="relative top-[-80px] min-w-[660px]">
          <div className="scroll-div max-h-screen overflow-y-auto">
            <div className="mt-[130px]">
              <ManagerPost setModalOn={setModalOn} />
              <ManagerPost setModalOn={setModalOn} />
              <ScholarPost />
              <ScholarPost />
              <ManagerPost setModalOn={setModalOn} />
              <ManagerPost setModalOn={setModalOn} />
              <ScholarPost />
              <ManagerPost setModalOn={setModalOn} />
            </div>
          </div>
        </div>
      )}
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
