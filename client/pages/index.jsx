import Layout from "../components/Layout";
import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import BodyPartModal from "../components/BodyPartModal";
import { useState, useEffect } from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

export default function Home() {
  const [modalOn, setModalOn] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <>
      {modalOn && <BodyPartModal setModalOn={setModalOn} />}
      {windowSize.width >= 1800 ? (
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
