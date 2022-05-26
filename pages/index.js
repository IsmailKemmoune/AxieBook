import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

export default function Home() {
  return (
    <Allotment>
      <div className="scroll-div max-h-screen overflow-y-auto">
        <ManagerPost />
        <ManagerPost />
        <ManagerPost />
        <ManagerPost />
        <ManagerPost />
      </div>
      <div className="max-h-full">
        <ScholarPost />
      </div>
    </Allotment>
  );
}
