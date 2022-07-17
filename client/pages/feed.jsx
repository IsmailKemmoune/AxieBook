import Layout from "../components/Layout";
import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import LoadingFeed from "../components/LoadingFeed";
import BodyPartModal from "../components/BodyPartModal";
import axios from "axios";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-swr-infinite-scroll";
import { useMemo } from "react";
import { useAtom } from "jotai";
import { modalStatusAtom } from "../atoms";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import ManagerPostSkeleton from "../components/ManagerPostSkeleton";

const PAGE_SIZE = 3;
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Feed() {
  const [modalStatus] = useAtom(modalStatusAtom);
  // const managerPostURL = "http://localhost:3080/api/manager-post";
  // const scholarPostURL = "http://localhost:3080/api/scholar-post";

  const getManagerKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `http://localhost:3080/api/manager-post?page=${pageIndex}&limit=${PAGE_SIZE}`;
  };
  const getScholarKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `http://localhost:3080/api/scholar-post?page=${pageIndex}&limit=${PAGE_SIZE}`;
  };

  const managerSwr = useSWRInfinite(getManagerKey, fetcher);
  const scholarSwr = useSWRInfinite(getScholarKey, fetcher);
  // console.log(managerSwr.data);
  // const {
  //   data: managerPosts,
  //   error: managerError,
  //   size: managerSize,
  //   setSize: setManagerSize,
  // } = useSWRInfinite(getManagerKey, fetcher);
  // const {
  //   data: scholarPosts,
  //   error: scholarError,
  //   size: scholarSize,
  //   setSize: setScholarSize,
  // } = useSWRInfinite(getScholarKey, fetcher);

  // const feedPosts = useMemo(() => {
  //   if (managerPosts && scholarPosts) {
  //     const posts = [...managerPosts, ...scholarPosts];

  //     return posts.sort((a, b) => {
  //       return new Date(a.createdAt) - new Date(b.createdAt);
  //     });
  //   }
  // }, [managerPosts, scholarPosts]);

  // if (managerError) return <div>failed to load</div>;
  // if (!managerPosts) return <LoadingFeed />;

  // console.log(managerPosts);
  // console.log(scholarPosts);

  // const feedPostsEl = feedPosts.map((feedPost) =>
  //   feedPost.axies ? (
  //     <ManagerPost key={feedPost._id} postData={feedPost} />
  //   ) : (
  //     <ScholarPost key={feedPost._id} postData={feedPost} />
  //   )
  // );
  // let managerPostsEl = [];
  // if (managerSwr.data) {
  //   managerSwr.data.forEach((page) => {
  //     managerPostsEl = page.map((managerPost) => (
  //       <ManagerPost key={managerPost._id} postData={managerPost} />
  //     ));
  //   });
  // }

  // arr1d = [].concat(...arr2d)
  let managerPostsEl = [];
  if (managerSwr.data) {
    const managerPosts = [].concat(...managerSwr.data);
    // console.log(managerPosts);
    managerPostsEl = managerPosts.map((managerPost) => (
      <ManagerPost key={managerPost._id} postData={managerPost} />
    ));
  }

  let scholarPostsEl = [];
  if (scholarSwr.data) {
    const scholarPosts = [].concat(...scholarSwr.data);
    console.log(scholarPosts);
    scholarPostsEl = scholarPosts.map((scholarPost) => (
      <ScholarPost key={scholarPost._id} postData={scholarPost} />
    ));
  }

  // const managerPostsEl = managerSwr.data.map((managerPost) => (
  //   <ManagerPost key={managerPost._id} postData={managerPost} />
  // ));

  // const scholarPostsEl = scholarPosts.map((scholarPost) => (
  //   <ScholarPost key={scholarPost._id} postData={scholarPost} />
  // ));

  return (
    <>
      {modalStatus && <BodyPartModal />}

      <div className="grid grid-cols-2 relative top-[-80px] feedmd:grid-cols-0 feedmd:block w-fit">
        <div className="scroll-div max-h-screen overflow-y-auto border-r-[1px] border-shades-200 feedmd:hidden h-screen">
          <InfiniteScroll
            swr={managerSwr}
            loadingIndicator={<ManagerPostSkeleton />}
            endingIndicator="No more posts! 🎉"
            isReachingEnd={(managerSwr) =>
              managerSwr.data?.[0]?.length === 0 ||
              managerSwr.data?.[managerSwr.data?.length - 1]?.length < PAGE_SIZE
            }
          >
            <div className="mt-[130px]">{managerPostsEl}</div>
          </InfiniteScroll>
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto feedmd:hidden">
          {/* <div className="mt-[130px]">{scholarPostsEl}</div> */}
          <InfiniteScroll
            swr={scholarSwr}
            loadingIndicator={<ManagerPostSkeleton />}
            endingIndicator="No more posts! 🎉"
            isReachingEnd={(scholarSwr) =>
              scholarSwr.data?.[0]?.length === 0 ||
              scholarSwr.data?.[scholarSwr.data?.length - 1]?.length < PAGE_SIZE
            }
          >
            <div className="mt-[130px]">{scholarPostsEl}</div>
          </InfiniteScroll>
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto hidden feedmd:block">
          {/* <div className="mt-[130px]">{feedPostsEl}</div> */}
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
