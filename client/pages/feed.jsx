import Layout from "../components/Layout";
import BodyPartModal from "../components/BodyPartModal";
import InfiniteFeedPostsScroll from "../components/InfiniteFeedPostsScroll";
import InfiniteScholarPostsScroll from "../components/InfiniteScholarPostsScroll";
import InfiniteManagerPostsScroll from "../components/InfiniteManagerPostsScroll";
import { useAtom } from "jotai";
import { modalStatusAtom } from "../atoms";
import "allotment/dist/style.css";

export default function Feed() {
  const [modalStatus] = useAtom(modalStatusAtom);

  return (
    <>
      {modalStatus && <BodyPartModal />}

      <div className="grid grid-cols-2 relative top-[-80px] feedmd:grid-cols-0 feedmd:block w-fit">
        <div className="scroll-div max-h-screen overflow-y-auto border-r-[1px] border-shades-200 feedmd:hidden h-screen">
          <InfiniteManagerPostsScroll />
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto feedmd:hidden">
          <InfiniteScholarPostsScroll />
        </div>
        <div className="scroll-div max-h-screen overflow-y-auto hidden feedmd:block">
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
