import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-primary grid grid-cols-layout h-full">
      <Sidebar />
      <div className="flex flex-col bg-primary">
        <nav
          className="z-10 sticky top-0 text-black bg-clip-padding bg-white shadow-lg bg-opacity-30 border border-gray-200 flex items-center justify-center py-5"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <ul className="flex ">
            <li className="mr-7 pointer-cursor">Find scholar</li>
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
