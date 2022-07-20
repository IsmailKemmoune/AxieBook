import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import RightBar from "../components/RightBar";
import BodyPartModal from "../components/BodyPartModal";
import { useAtom } from "jotai";
import { modalStatusAtom } from "../atoms";

export default function Layout({ children }) {
  const [modalStatus] = useAtom(modalStatusAtom);

  return (
    <div className="bg-primary h-full flex">
      {modalStatus && <BodyPartModal />}
      <Sidebar />
      <div className="flex flex-col bg-primary w-max sidebarsm:w-full relative">
        <NavBar />
        {children}
      </div>
      <RightBar />
    </div>
  );
}
