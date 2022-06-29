import Layout from "../components/Layout";
import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import BodyPartModal from "../components/BodyPartModal";
import axios from "axios";
import { useState, useEffect } from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

export default function Feed() {
  const [modalOn, setModalOn] = useState(false);
  const [managerPosts, setManagerPosts] = useState([]);
  const [scholarPosts, setScholarPosts] = useState([]);
  const [modalAxie, setModalAxie] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const managerPostURL = "http://localhost:3080/api/manager-post";
    const scholarPostURL = "http://localhost:3080/api/scholar-post";

    const managerPostPromise = axios.get(managerPostURL);
    const scholarPostPromise = axios.get(scholarPostURL);
    Promise.all([managerPostPromise, scholarPostPromise]).then((response) => {
      setManagerPosts(response[0].data);
      setScholarPosts(response[1].data);
    });

    // axios
    //   .get("http://localhost:3080/api/manager-post")
    //   .then((response) => setScholarPosts(response.data));
  }, []);

  const managerPostsEl = managerPosts.map((managerPost) => (
    <ManagerPost
      key={managerPost._id}
      setModalOn={setModalOn}
      postData={managerPost}
      setModalAxie={setModalAxie}
    />
  ));

  const scholarPostsEl = scholarPosts.map((scholarPost) => (
    <ScholarPost key={scholarPost._id} postData={scholarPost} />
  ));

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      function handleResize() {
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
      {modalOn && (
        <BodyPartModal
          image={modalAxie.axie.image}
          parts={modalAxie.axie.parts}
          stats={modalAxie.axie.stats}
          setModalOn={setModalOn}
        />
      )}

      <div className="grid grid-cols-2 relative top-[-80px] w-fit testsm:grid-cols-0 testsm:flex testsm:flex-col">
        <div className="scroll-div max-h-screen overflow-y-auto border-r-[1px] border-shades-200">
          <div className="mt-[130px]">{managerPostsEl}</div>
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto">
          <div className="mt-[130px]">{scholarPostsEl}</div>
        </div>
      </div>

      {/* {windowSize.width >= 1800 ? (
        <div className="grid grid-cols-2 relative top-[-80px] min-w-[1322px]">
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
      )} */}
    </>
  );
}

Feed.getLayout = function getLayout() {
  return (
    <Layout>
      <Feed />
    </Layout>
  );
};
