import { FaTwitter } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import Link from "next/link";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  const router = useRouter();
  return (
    <div>
      <div>
        <p className="mb-2 select-none">Sign in with</p>
        <div className="flex justify-between">
          <a href="http://localhost:3080/auth/twitter">
            <button className="border-2 border-black p-2 rounded-lg cursor-pointer px-12 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition duration-200 ease-linear hover:scale-105 hover:-translate-y-1 hover:shadow-default">
              <FaTwitter />
            </button>
          </a>
          <a href="http://localhost:3080/auth/google">
            <button className="border-2 border-black p-2 rounded-lg cursor-pointer px-12 hover:bg-[#DB4437] hover:text-white hover:border-[#DB4437] transition duration-200 ease-linear hover:scale-105 hover:-translate-y-1 hover:shadow-default">
              <BsGoogle />
            </button>
          </a>
          <a href="http://localhost:3080/auth/facebook">
            <button className="border-2 border-black p-2 rounded-lg cursor-pointer px-12 hover:bg-[#4267B2] hover:text-white hover:border-[#4267B2] transition duration-200 ease-linear hover:scale-105 hover:-translate-y-1 hover:shadow-default">
              <FaFacebookF />
            </button>
          </a>
        </div>
      </div>

      <div className="my-6 relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 select-none">
              Email
            </label>
            <input
              {...register("email")}
              className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md border-2 border-primary focus:border-expand focus:border-2 outline-none font-light w-96 p-2"
              placeholder="example@example.com"
              type="email"
              id="email"
            />
            <p className="text-delete font-light text-sm">
              {errors.email?.message}
            </p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 select-none">
              Password
            </label>
            <input
              {...register("password")}
              className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md border-2 border-primary focus:border-expand focus:border-2 outline-none font-light w-96 p-2"
              placeholder="Password"
              type="password"
              id="password"
            />
            <p className="text-delete font-light text-sm">
              {errors.password?.message}
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="text-white border bg-gray-500 border-gray-500 rounded-md px-3 hover:bg-secondary font-extralight transition duration-200 ease-linear cursor-pointer w-full p-2 mx-auto mt-10 hover:scale-95"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
