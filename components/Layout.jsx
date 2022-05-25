import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

export default function Layout({ children }) {
  return (
    <div className="bg-primary grid grid-cols-layout h-full">
      <Sidebar />
      <div className="flex flex-col bg-primary">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
