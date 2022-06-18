import Link from "next/link";

const glassmorphism = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px 0px",
  position: "sticky",
  width: "100%",
  top: "-0.5px",
  zIndex: "1",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "saturate(180%) blur(9px)",
  // backdropFilter: "blur(12px)",
  borderBottom: "solid 1px #545267",
};

export default function NavBar() {
  return (
    <nav style={glassmorphism}>
      <ul className="flex ">
        <Link href="/post-creation">
          <li className="mr-14 font-light cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
            Find scholar
          </li>
        </Link>
        <Link href="">
          <li className="mr-14 font-light cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
            Find manager
          </li>
        </Link>
        <Link href="">
          <li className="mr-14 font-light cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
            Join Discord
          </li>
        </Link>
      </ul>
    </nav>
  );
}
