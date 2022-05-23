import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-primary grid grid-cols-layout h-full">
      <Sidebar />
      <div className="flex flex-col bg-primary">
        <nav className="text-white bg-black flex items-center justify-center py-5">
          <ul className="flex ">
            <li className="mr-7">Find scholar</li>
            <li className="mr-7">Find manager</li>
            <li className="mr-7">Join Discord</li>
          </ul>
        </nav>
        <ManagerPost />
        <ScholarPost />
        <ManagerPost />
        <ManagerPost />
      </div>
    </div>
  );
}
