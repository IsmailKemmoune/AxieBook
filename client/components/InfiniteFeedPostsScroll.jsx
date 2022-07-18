import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import LoadingSpinner from "../components/LoadingSpinner";
import PageEnd from "../components/PageEnd";
import axios from "axios";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-swr-infinite-scroll";

const PAGE_SIZE = 3;
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function InfiniteFeedPostsScroll() {
  const getFeedKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `http://localhost:3080/api/feed-post?page=${pageIndex}&limit=${PAGE_SIZE}`;
  };

  const feedSwr = useSWRInfinite(getFeedKey, fetcher);

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
  );
}
