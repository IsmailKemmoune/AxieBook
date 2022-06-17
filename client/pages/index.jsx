import Layout from "../components/Layout";
import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

export default function Home() {
  return (
    // <Allotment>
    //   <div className="scroll-div max-h-full overflow-y-auto">
    //     <div className="h-full w-full mt-32">
    //       <ManagerPost />
    //       <ManagerPost />
    //       <ManagerPost />
    //       <ManagerPost />
    //       <ManagerPost />
    //     </div>
    //   </div>
    //   <div className="scroll-div max-h-full overflow-y-auto">
    //     <div className="h-full w-full mt-32">
    //       <ScholarPost />
    //       <ScholarPost />
    //       <ScholarPost />
    //       <ScholarPost />
    //       <ScholarPost />
    //       <ScholarPost />
    //       <ScholarPost />
    //     </div>
    //   </div>
    // </Allotment>

    //WITHOUT SPLIT VERSION-------------
    <div className="grid grid-cols-2 relative top-[-80px]">
      <div className="scroll-div max-h-screen overflow-y-auto border-r-[1px] border-shades-200 ">
        <div className="mt-[130px]">
          <ManagerPost />
          <ManagerPost />
          <ManagerPost />
          <ManagerPost />
          <ManagerPost />
        </div>
      </div>
      <div className="scroll-div max-h-screen overflow-y-auto border-r-[1px] border-shades-200">
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
  );
}

Home.getLayout = function getLayout() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};
