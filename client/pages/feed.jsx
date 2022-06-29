import Layout from "../components/Layout";
import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import BodyPartModal from "../components/BodyPartModal";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

export default function Feed() {
  const [modalOn, setModalOn] = useState(false);
  const [managerPosts, setManagerPosts] = useState([]);
  const [scholarPosts, setScholarPosts] = useState([]);
  const [modalAxie, setModalAxie] = useState([]);

  const feedPosts = useMemo(() => {
    const posts = [...managerPosts, ...scholarPosts];
    return posts.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
  }, [managerPosts, scholarPosts]);

  useEffect(() => {
    const managerPostURL = "http://localhost:3080/api/manager-post";
    const scholarPostURL = "http://localhost:3080/api/scholar-post";

    const managerPostPromise = axios.get(managerPostURL);
    const scholarPostPromise = axios.get(scholarPostURL);
    Promise.all([managerPostPromise, scholarPostPromise]).then((response) => {
      setManagerPosts(response[0].data);
      setScholarPosts(response[1].data);
    });
  }, []);

  const feedPostsEl = feedPosts.map((feedPost) =>
    feedPost.axies ? (
      <ManagerPost
        key={feedPost._id}
        setModalOn={setModalOn}
        postData={feedPost}
        setModalAxie={setModalAxie}
      />
    ) : (
      <ScholarPost key={feedPost._id} postData={feedPost} />
    )
  );

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

      <div className="grid grid-cols-2 relative top-[-80px] w-fit feedmd:grid-cols-0 feedmd:block">
        <div className="scroll-div max-h-screen overflow-y-auto border-r-[1px] border-shades-200 feedmd:hidden">
          <div className="mt-[130px]">{managerPostsEl}</div>
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto feedmd:hidden">
          <div className="mt-[130px]">{scholarPostsEl}</div>
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto hidden feedmd:block">
          <div className="mt-[130px]">{feedPostsEl}</div>
        </div>
      </div>
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
