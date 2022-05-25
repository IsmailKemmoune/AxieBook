import Link from "next/link";
import { useState } from "react";

const glassmorphism = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px 0px",
  position: "sticky",
  width: "100%",
  top: "-0.5px",
  zIndex: "10",
  color: "white",
  fontSize: "18px",
  fontWeight: "600",
  backgroundColor: "rgba(0, 0, 0, 0.65)",
  backdropFilter: "blur(12px)",
};

const defaultNav = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px 0px",
  position: "sticky",
  width: "100%",
  top: "-0.5px",
  zIndex: "10",
  color: "white",
  backgroundColor: "Black",
};

export default function NavBar() {
  const [glassmorph, setGlassmorph] = useState(false);

  const changeBgStyle = () => {
    if (scrollY > 53) setGlassmorph(true);
    else setGlassmorph(false);
  };

  if (typeof window !== "undefined") {
    //here `window` is available
    window.addEventListener("scroll", changeBgStyle);
  }

  return (
    <nav style={glassmorph ? glassmorphism : defaultNav}>
      <ul className="flex ">
        <Link href="/postCreation">
          <li className="mr-14 cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
            Find scholar
          </li>
        </Link>
        <Link href="">
          <li className="mr-14 cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
            Find manager
          </li>
        </Link>
        <Link href="">
          <li className="mr-14 cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
            Join Discord
          </li>
        </Link>
      </ul>
    </nav>
  );
}
