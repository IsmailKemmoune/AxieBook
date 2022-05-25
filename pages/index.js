import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_10px_1fr] gap-1 h-full">
      <div className="scroll-div max-h-screen overflow-y-auto">
        <ManagerPost />
        <ManagerPost />
        <ManagerPost />
        <ManagerPost />
        <ManagerPost />
      </div>
      <div className="bg-black"></div>
      <div>
        <ScholarPost />
      </div>
    </div>
  );
}
