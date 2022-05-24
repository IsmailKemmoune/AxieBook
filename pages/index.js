import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="bg-primary grid grid-cols-layout h-full">
      <Sidebar />
      <div className="flex flex-col bg-primary">
        <NavBar />
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
      </div>
    </div>
  );
}
