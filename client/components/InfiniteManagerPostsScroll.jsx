import ManagerPost from "./ManagerPost";
import LoadingSpinner from "./LoadingSpinner";
import PageEnd from "./PageEnd";
import axios from "axios";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-swr-infinite-scroll";

const PAGE_SIZE = 3;
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function InfiniteScholarPostsScroll() {
  const getManagerKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `http://localhost:3080/api/manager-post?page=${pageIndex}&limit=${PAGE_SIZE}`;
  };

  const managerSwr = useSWRInfinite(getManagerKey, fetcher);

  let managerPostsEl = [];
  if (managerSwr.data) {
    const managerPosts = [].concat(...managerSwr.data);
    managerPostsEl = managerPosts.map((managerPost) => (
      <ManagerPost key={managerPost._id} postData={managerPost} />
    ));
  }
  return (
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
  );
}
