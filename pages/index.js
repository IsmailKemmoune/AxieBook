import ManagerPost from "../components/ManagerPost";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-primary h-screen grid ">
      <Sidebar />
      <div className="flex flex-col items-center justify-center">
        <ManagerPost />
      </div>
    </div>
  );
}
