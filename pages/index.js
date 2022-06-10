import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

export default function Home() {
  return (

    <Allotment minSize={500}>
      <Allotment.Pane minSize={680}>
      <div className="scroll-div max-h-full overflow-y-auto">
        <ManagerPost />
        <ManagerPost />
        <ManagerPost />
        <ManagerPost />
        <ManagerPost />
      </div>
      </Allotment.Pane>
      <Allotment.Pane minSize={200}>
      <div className="scroll-div max-h-full overflow-y-auto">
        <ScholarPost />
        <ScholarPost />
        <ScholarPost />
        <ScholarPost />
        <ScholarPost />
        <ScholarPost />
        <ScholarPost />
      </div>
      </Allotment.Pane>
    </Allotment>

  );
}
