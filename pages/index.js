import ManagerPost from "../components/ManagerPost";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-primary grid grid-cols-layout h-full">
      {/* <div className="bg-primary"> */}
      <Sidebar />
      {/* <div className="flex flex-col items-center justify-center"> */}
      <div className="">
        <ManagerPost />
        <ManagerPost />
        <ManagerPost />
      </div>
    </div>
  );
}
