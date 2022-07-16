import Layout from "../components/Layout";
import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import LoadingFeed from "../components/LoadingFeed";
import BodyPartModal from "../components/BodyPartModal";
import axios from "axios";
import useSWR from "swr";
import { useState, useEffect, useMemo } from "react";
import { useAtom } from "jotai";
import { modalStatusAtom } from "../atoms";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

import ManagerPostSkeleton from "../components/ManagerPostSkeleton";
import ScholarPostSkeleton from "../components/ScholarPostSkeleton";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Feed() {
  // const [managerPosts, setManagerPosts] = useState([]);
  // const [scholarPosts, setScholarPosts] = useState([]);
  const [modalStatus] = useAtom(modalStatusAtom);

  const managerPostURL = "http://localhost:3080/api/manager-post";
  const scholarPostURL = "http://localhost:3080/api/scholar-post";

  const { data: managerPosts, error: managerError } = useSWR(
    managerPostURL,
    fetcher
  );
  const { data: scholarPosts, error: scholarError } = useSWR(
    scholarPostURL,
    fetcher
  );

  const feedPosts = useMemo(() => {
    if (managerPosts && scholarPosts) {
      const posts = [...managerPosts, ...scholarPosts];

      return posts.sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
    }
  }, [managerPosts, scholarPosts]);

  if (managerError) return <div>failed to load</div>;
  if (!managerPosts) return <LoadingFeed />;

  // console.log(managerPosts);

  // useEffect(() => {
  //   const managerPostURL = "http://localhost:3080/api/manager-post";
  //   const scholarPostURL = "http://localhost:3080/api/scholar-post";

  //   const managerPostPromise = axios.get(managerPostURL);
  //   const scholarPostPromise = axios.get(scholarPostURL);
  //   Promise.all([managerPostPromise, scholarPostPromise]).then((response) => {
  //     setManagerPosts(response[0].data);
  //     setScholarPosts(response[1].data);
  //   });
  // }, []);

  const feedPostsEl = feedPosts.map((feedPost) =>
    feedPost.axies ? (
      <ManagerPost key={feedPost._id} postData={feedPost} />
    ) : (
      <ScholarPost key={feedPost._id} postData={feedPost} />
    )
  );

  const managerPostsEl = managerPosts.map((managerPost) => (
    <ManagerPost key={managerPost._id} postData={managerPost} />
  ));

  const scholarPostsEl = scholarPosts.map((scholarPost) => (
    <ScholarPost key={scholarPost._id} postData={scholarPost} />
  ));

  return (
    <>
      {modalStatus && <BodyPartModal />}

      <div className="grid grid-cols-2 relative top-[-80px] feedmd:grid-cols-0 feedmd:block w-fit">
        <div className="scroll-div max-h-screen overflow-y-auto border-r-[1px] border-shades-200 feedmd:hidden h-screen">
          {/* <div className="mt-[130px]">
            <ManagerPostSkeleton />
            <ManagerPostSkeleton />
            <ManagerPostSkeleton />
            <ManagerPostSkeleton />
          </div> */}
          <div className="mt-[130px]">{managerPostsEl}</div>
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto feedmd:hidden">
          {/* <div className="mt-[130px]">
            <ScholarPostSkeleton />
          </div> */}
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
