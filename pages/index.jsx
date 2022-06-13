import Layout from "../components/Layout";
import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

export default function Home() {
  return (
<div className="h-full absolute left-[300px] right-0">
    <Allotment>
      <Allotment.Pane minSize={650} >
      <div className="scroll-div max-h-full overflow-y-auto">
        <div className="h-full w-full mt-32"> 
          <ManagerPost />
          <ManagerPost />
          <ManagerPost />
          <ManagerPost />
          <ManagerPost />
        </div>
      </div>
      </Allotment.Pane>
      <Allotment.Pane minSize={650}>
      <div className="scroll-div max-h-full overflow-y-auto">
        <div className="h-full w-full mt-32">
          <ScholarPost />
          <ScholarPost />
          <ScholarPost />
          <ScholarPost />
          <ScholarPost />
          <ScholarPost />
          <ScholarPost />
        </div>
      </div>
      </Allotment.Pane>
    </Allotment>
    </div>
  );
}

Home.getLayout = function getLayout() {
  return (
    <Layout>
     <Home />
    </Layout>
  )
}