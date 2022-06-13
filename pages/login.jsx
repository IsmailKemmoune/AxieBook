import { FaUserCircle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import Link from "next/link";
export default function Login() {
  return (
    // <div className="h-full w-[177.77777778vh] min-w-full min-h-[56.25vw]">
    //   <video
    //     autoPlay
    //     muted
    //     loop
    //     className="fixed right-0 bottom-0 min-h-full min-w-full"
    //   >
    //     <source
    //       src="https://cdn.axieinfinity.com/website/final.webm"
    //       type="video/webm"
    //     />
    //     <source
    //       src="https://cdn.axieinfinity.com/website/final.mp4"
    //       type="video/mp4"
    //     />
    //   </video>
    // </div>

    <div className="grid lg:grid-cols-2 md:grid-cols-2 min-h-screen">
      <div className=" flex justify-center items-center">
        <form action="" className="flex flex-col">
          <FaUserCircle className="mx-auto mb-5 text-5xl" />
          <label htmlFor="email">Email</label>
          <input
            className="px-4 py-2 rounded-md border-black border-2 placeholder:opacity-50"
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            required
          />
          <label htmlFor="password" className="mt-4">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="example@example.com"
            className="px-4 py-2 rounded-md border-black border-2 placeholder:opacity-50"
            required
          />

          <div className="mt-6 relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <ul className="flex justify-around">
            <li className="border-2 border-black p-2 rounded-lg cursor-pointer">
              <Link href="#">
                <FaTwitter />
              </Link>
            </li>
            <li className="border-2 border-black p-2 rounded-lg cursor-pointer">
              <Link href="#">
                <BsGoogle />
              </Link>
            </li>
          </ul>
          <p className="text-center my-2">or</p>
          <p className="text-center underline">
            <Link href="#">Sign Up ?</Link>
          </p>
        </form>
      </div>
      <div className="">
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
