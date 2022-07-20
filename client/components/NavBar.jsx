import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu4Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

const glassmorphism = {
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  // padding: "25px 0px",
  // position: "sticky",
  width: "100%",
  // top: "-0.5px",
  zIndex: "10",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "saturate(180%) blur(5px)",
};
// const glassmorphism = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   padding: "25px 0px",
//   position: "sticky",
//   width: "100%",
//   top: "-0.5px",
//   zIndex: "1",
//   color: "white",
//   fontSize: "16px",
//   fontWeight: "600",
//   backgroundColor: "rgba(0, 0, 0, 0.6)",
//   backdropFilter: "saturate(180%) blur(9px)",
//   borderBottom: "solid 1px #545267",
// };

export default function NavBar() {
  const [isBurger, setIsBurger] = useState(false);
  const [width, setWidth] = useState(0);

  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (width >= 740) setIsBurger(false);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>
      <nav
        style={glassmorphism}
        className="flex absolute top-[-0.5px] p-[25px_0px]"
      >
        <ul className="flex feedlg:justify-around space-x-24 justify-center feedsm:hidden w-full">
          <Link href="/manager-post-creation">
            <li className="font-light cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
              Find scholar
            </li>
          </Link>
          <Link href="/scholar-post-creation">
            <li className="font-light cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
              Find manager
            </li>
          </Link>
          <Link href="">
            <li className="font-light cursor-pointer border-2 border-transparent hover:border-b-2 hover:border-b-white">
              Join Discord
            </li>
          </Link>
        </ul>
        <div className="hidden w-full feedsm:flex items-center justify-around">
          <Link href="/">
            <div>
              <h1 className="font-logo text-3xl cursor-pointer">AxieBook</h1>
            </div>
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            // className="hidden feedsm:block"
            onClick={() => setIsBurger((prevState) => !prevState)}
          >
            <GiHamburgerMenu className="text-3xl" />
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {isBurger && (
          <motion.nav
            key="navbar"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            style={glassmorphism}
            className="fixed top-[85px] h-[50px] border-y-[0.5px] border-shades-200 hidden feedsm:block"
          >
            <ul className="flex w-full h-full justify-around">
              <Link href="/manager-post-creation">
                <li className="font-light cursor-pointer border-2 border-transparent hover:border-b-2 hover:bg-shades-200 w-1/2 flex items-center justify-center transition duration-200 ease-linear">
                  Find scholar
                </li>
              </Link>
              <Link href="/scholar-post-creation">
                <li className="font-light cursor-pointer border-2 border-transparent hover:border-b-2 hover:bg-shades-200 w-1/2 flex items-center justify-center transition duration-200 ease-linear">
                  Find manager
                </li>
              </Link>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
