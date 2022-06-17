import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import RightBar from "../components/RightBar";

export default function Layout({ children }) {
  return (
    <div className="bg-primary grid grid-cols-layout h-full overflow-y-hidden">
      <Sidebar />
      <div className="flex flex-col bg-primary w-[1300px]">
        <NavBar />
        {/* <div className="w-full h-10 bg-red-300 relative top-[-10px]">
          hahahaha
        </div> */}
        {children}
      </div>
      <RightBar />
    </div>
  );
}
