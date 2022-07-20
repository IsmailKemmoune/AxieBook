import Layout from "../components/Layout";
import InfiniteFeedPostsScroll from "../components/InfiniteFeedPostsScroll";
import InfiniteScholarPostsScroll from "../components/InfiniteScholarPostsScroll";
import InfiniteManagerPostsScroll from "../components/InfiniteManagerPostsScroll";

export default function Feed() {
  return (
    <>
      <div className="grid grid-cols-2 feedlg:grid-cols-0 feedlg:flex flex-col items-center w-full">
        <div className="scroll-div max-h-screen overflow-y-auto border-r-[1px] border-shades-200 feedlg:hidden h-screen flex flex-col items-center">
          <InfiniteManagerPostsScroll />
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto feedlg:hidden flex flex-col items-center">
          <InfiniteScholarPostsScroll />
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto hidden feedlg:flex flex-col items-center">
          <InfiniteFeedPostsScroll />
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
