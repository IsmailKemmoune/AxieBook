import ScholarPost from "./ScholarPost";
import LoadingSpinner from "./LoadingSpinner";
import PageEnd from "./PageEnd";
import axios from "axios";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-swr-infinite-scroll";

const PAGE_SIZE = 3;
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function InfiniteScholarPostsScroll() {
  const getScholarKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `http://localhost:3080/api/scholar-post?page=${pageIndex}&limit=${PAGE_SIZE}`;
  };

  const scholarSwr = useSWRInfinite(getScholarKey, fetcher);

  let scholarPostsEl = [];
  if (scholarSwr.data) {
    const scholarPosts = [].concat(...scholarSwr.data);
    scholarPostsEl = scholarPosts.map((scholarPost) => (
      <ScholarPost key={scholarPost._id} postData={scholarPost} />
    ));
  }
  return (
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
  );
}
