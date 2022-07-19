import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import RightBar from "../components/RightBar";

export default function Layout({ children }) {
  return (
    <div className="bg-primary h-full flex">
      <Sidebar />
      <div className="flex flex-col bg-primary w-max sidebarsm:w-full relative">
        <NavBar />
        {children}
      </div>
      <RightBar />
    </div>
  );
}
