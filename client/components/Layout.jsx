import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import RightBar from "../components/RightBar";

export default function Layout({ children }) {
  return (
    // <div className="bg-primary grid grid-cols-layout h-full overflow-y-hidden sidebarsm:grid-cols-smallsb">
    <div className="bg-primary h-full overflow-y-hidden flex">
      <Sidebar />
      <div className="flex flex-col bg-primary w-max">
        <NavBar />
        {children}
      </div>
      <RightBar />
    </div>
  );
}
