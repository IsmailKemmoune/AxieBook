import { FaUserCircle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import Link from "next/link";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 min-h-screen">
      <div className=" flex justify-center items-center ">
        <LoginForm />
      </div>
      <div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://cdn.axieinfinity.com/website/final.webm"
            type="video/webm"
          />
          <source
            src="https://cdn.axieinfinity.com/website/final.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
