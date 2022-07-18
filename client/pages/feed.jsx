import Layout from "../components/Layout";
import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import BodyPartModal from "../components/BodyPartModal";
import LoadingSpinner from "../components/LoadingSpinner";
import PageEnd from "../components/PageEnd";
import axios from "axios";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-swr-infinite-scroll";
import { useAtom } from "jotai";
import { modalStatusAtom } from "../atoms";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

const PAGE_SIZE = 3;
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Feed() {
  const [modalStatus] = useAtom(modalStatusAtom);

  const getManagerKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `http://localhost:3080/api/manager-post?page=${pageIndex}&limit=${PAGE_SIZE}`;
  };
  const getScholarKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `http://localhost:3080/api/scholar-post?page=${pageIndex}&limit=${PAGE_SIZE}`;
  };
  const getFeedKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `http://localhost:3080/api/feed-post?page=${pageIndex}&limit=${PAGE_SIZE}`;
  };

  const managerSwr = useSWRInfinite(getManagerKey, fetcher);
  const scholarSwr = useSWRInfinite(getScholarKey, fetcher);
  const feedSwr = useSWRInfinite(getFeedKey, fetcher);

  // arr1d = [].concat(...arr2d)
  let managerPostsEl = [];
  if (managerSwr.data) {
    const managerPosts = [].concat(...managerSwr.data);
    managerPostsEl = managerPosts.map((managerPost) => (
      <ManagerPost key={managerPost._id} postData={managerPost} />
    ));
  }

  let scholarPostsEl = [];
  if (scholarSwr.data) {
    const scholarPosts = [].concat(...scholarSwr.data);
    scholarPostsEl = scholarPosts.map((scholarPost) => (
      <ScholarPost key={scholarPost._id} postData={scholarPost} />
    ));
  }
  let feedPostsEl = [];
  if (feedSwr.data) {
    const feedPosts = [].concat(...feedSwr.data);
    feedPostsEl = feedPosts.map((feedPost) =>
      feedPost.axies?.length ? (
        <ManagerPost key={feedPost._id} postData={feedPost} />
      ) : (
        <ScholarPost key={feedPost._id} postData={feedPost} />
      )
    );
  }

  return (
    <>
      {modalStatus && <BodyPartModal />}

      <div className="grid grid-cols-2 relative top-[-80px] feedmd:grid-cols-0 feedmd:block w-fit">
        <div className="scroll-div max-h-screen overflow-y-auto border-r-[1px] border-shades-200 feedmd:hidden h-screen">
          <InfiniteScroll
            swr={managerSwr}
            loadingIndicator={<LoadingSpinner />}
            endingIndicator={<PageEnd />}
            isReachingEnd={(managerSwr) =>
              managerSwr.data?.[0]?.length === 0 ||
              managerSwr.data?.[managerSwr.data?.length - 1]?.length < PAGE_SIZE
            }
          >
            <div className="mt-[130px]">{managerPostsEl}</div>
          </InfiniteScroll>
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto feedmd:hidden">
          <InfiniteScroll
            swr={scholarSwr}
            loadingIndicator={<LoadingSpinner />}
            endingIndicator={<PageEnd />}
            isReachingEnd={(scholarSwr) =>
              scholarSwr.data?.[0]?.length === 0 ||
              scholarSwr.data?.[scholarSwr.data?.length - 1]?.length < PAGE_SIZE
            }
          >
            <div className="mt-[130px]">{scholarPostsEl}</div>
          </InfiniteScroll>
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto hidden feedmd:block">
          <InfiniteScroll
            swr={feedSwr}
            loadingIndicator={<LoadingSpinner />}
            endingIndicator={<PageEnd />}
            isReachingEnd={(feedSwr) =>
              feedSwr.data?.[0]?.length === 0 ||
              feedSwr.data?.[feedSwr.data?.length - 1]?.length < PAGE_SIZE
            }
          >
            <div className="mt-[130px]">{feedPostsEl}</div>
          </InfiniteScroll>
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
