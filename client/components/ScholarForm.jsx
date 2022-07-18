import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion, AnimatePresence } from "framer-motion";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required().max(35),
    slp: yup
      .number()
      // .sequence()
      .required("Please fill out this field")
      .positive()
      .integer()
      .max(200)
      .typeError("SLP quota must be a valid number"),
    mmr: yup
      .number()
      // .sequence()
      .required("Please fill out this field")
      .positive()
      .integer()
      .max(4000)
      .typeError("MRR must be a valid number"),
    split: yup
      .number()
      .integer()
      .required()
      .min(0, "Minimum value is 0")
      .max(100, "Maximum value is 100")
      .typeError("SLP split must be a % between 0 and 100"),
    description: yup.string().required(),
  })
  .required();

const ScholarForm = () => {
  const [split, setSplit] = useState(100);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      device: "Mobile",
    },
  });

  const onSubmit = async (data) => {
    const path = "http://localhost:3080/api/scholar-post";
    try {
      const response = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const splitCalc = (e) => {
    const value = e.target.value;
    isNaN(value)
      ? setSplit(100)
      : setSplit((prevVal) => (prevVal = 100 - value));
  };

  return (
    <AnimatePresence>
      <motion.div
        key="scholar-form"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className=" flex items-center my-10"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-7 items-center"
        >
          <div className="flex flex-col">
            <label htmlFor="slp" className="text-white select-none">
              Title
            </label>
            <input
              {...register("title")}
              className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md border-2 border-primary focus:border-expand focus:border-2 outline-none font-light w-96 p-2"
              placeholder="Title"
              type="text"
            />
            {errors.title && (
              <div className="flex items-center">
                <BiErrorCircle className="text-delete mr-2" />
                <p className="text-delete text-sm">{errors.title?.message}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="slp" className="text-white select-none">
              Peak MMR
            </label>
            <input
              {...register("mmr")}
              className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md border-2 border-primary focus:border-expand focus:border-2 outline-none font-light w-96 p-2"
              placeholder="What is your peak MMR"
              type="text"
            />
            {errors.mmr && (
              <div className="flex items-center">
                <BiErrorCircle className="text-delete mr-2" />
                <p className="text-delete text-sm">{errors.mmr?.message}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="slp" className="text-white select-none">
              SLP quota
            </label>
            <input
              {...register("slp")}
              className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md border-2 border-primary focus:border-expand focus:border-2  outline-none font-light w-96 p-2"
              placeholder="How much SLP you can farm per day"
              type="text"
              id="slp"
            />
            {errors.slp && (
              <div className="flex items-center">
                <BiErrorCircle className="text-delete mr-2" />
                <p className="text-delete text-sm">{errors.slp?.message}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="w-96 flex items-end">
              <div className="flex flex-col w-9/12 mr-3">
                <label htmlFor="slp" className="text-white select-none">
                  SLP split
                </label>
                <input
                  {...register("split")}
                  onChange={splitCalc}
                  className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md  border-2 border-primary focus:border-expand focus:border-2  outline-none font-light p-2"
                  placeholder="SLP % for the scholar"
                  type="text"
                />
              </div>
              <div className="bg-white border-slate-400 w-1/2 rounded-md h-[40px] p-2 cursor-not-allowed">
                <p className="text-slate-400 italic ">{split}% - manager</p>
              </div>
            </div>
            {errors.split && (
              <div className="flex items-center">
                <BiErrorCircle className="text-delete mr-2" />
                <p className="text-delete text-sm">{errors.split?.message}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <p className="text-white select-none">Payment schedule</p>
            <div className="grid w-96 grid-cols-2 space-x-2 rounded-xl bg-white p-2">
              <div>
                <input
                  {...register("device")}
                  type="radio"
                  id="mobile"
                  value="Mobile"
                  className="peer hidden"
                />
                <label
                  htmlFor="mobile"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-secondary peer-checked:font-bold peer-checked:text-white"
                >
                  Mobile
                </label>
              </div>

              <div>
                <input
                  {...register("device")}
                  type="radio"
                  id="laptop"
                  value="Laptop"
                  className="peer hidden"
                />
                <label
                  htmlFor="laptop"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-secondary peer-checked:font-bold peer-checked:text-white"
                >
                  Laptop
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-white select-none">
              Description
            </label>
            <textarea
              {...register("description")}
              id="description"
              className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md hover:border-red border-2 border-primary focus:border-expand focus:border-2  outline-none font-light w-96"
              placeholder="Description"
              rows="7"
              cols="33"
            />
            {errors.description && (
              <div className="flex items-center">
                <BiErrorCircle className="text-delete mr-2" />
                <p className="text-delete text-sm">
                  {errors.description?.message}
                </p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="text-white border bg-gray-500 border-gray-500 rounded-md px-3 hover:bg-secondary font-extralight transition duration-200 ease-linear cursor-pointer w-44 p-2 self-center"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScholarForm;
