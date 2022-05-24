import ManagerPost from "../components/ManagerPost";
import ScholarPost from "../components/ScholarPost";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const glassmorphism = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px 0px",
  position: "sticky",
  top: "0",
  zIndex: "10",
  color: "#1C1B29",
  fontSize: "20px",
  fontWeight: "600",
  background: "rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(60, 66, 77, 0.3)",
};

const defaultNav = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px 0px",
  position: "sticky",
  top: "0",
  zIndex: "10",
  color: "white",
  backgroundColor: "Black",
};

export default function Home() {
  const [glassmorph, setGlassmorph] = useState(false);

  const changeBgStyle = () => {
    if (scrollY > 53) setGlassmorph(true);
    else setGlassmorph(false);
  };

  window.addEventListener("scroll", changeBgStyle);

  return (
    <div className="bg-primary grid grid-cols-layout h-full">
      <Sidebar />
      <div className="flex flex-col bg-primary">
        <nav style={glassmorph ? glassmorphism : defaultNav}>
          {/* <nav
          className="z-10 sticky top-0 text-black bg-clip-padding bg-white shadow-lg bg-opacity-30 border border-gray-200 flex items-center justify-center py-5"
          style={{ backdropFilter: "blur(20px)" }}
        > */}
          <ul className="flex ">
            <li className="mr-14 cursor-pointer">Find scholar</li>
            <li className="mr-14 cursor-pointer">Find manager</li>
            <li className="mr-14 cursor-pointer">Join Discord</li>
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
