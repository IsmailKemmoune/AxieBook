import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
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
    split: yup
      .number()
      .integer()
      .required()
      .min(0, "Minimum value is 0")
      .max(100, "Maximum value is 100")
      .typeError("SLP split must be a % between 0 and 100"),
    energy: yup.number().positive().integer().required(),
    payment: yup.number().positive().integer().required(),
    description: yup.string().required(),
  })
  .required();

const AxieForm = ({ showForm }) => {
  const [split, setSplit] = useState(100);

  useEffect(() => {
    console.log("rendeeer");
  }, [showForm]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      energy: "20",
      payment: "15",
    },
  });
  const onSubmit = (data) => console.log(data);

  const splitCalc = (e) => {
    const value = e.target.value;
    isNaN(value)
      ? setSplit(100)
      : setSplit((prevVal) => (prevVal = 100 - value));
  };
  console.log("render");
  console.log(showForm);
  return (
    <div className="mt-20 animate-fade-down-form">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-7 items-center"
      >
        <div className="flex flex-col">
          <label htmlFor="slp" className="text-white">
            Title
          </label>
          <input
            {...register("title")}
            className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md border-2 border-primary focus:border-expand focus:border-2 outline-none font-light w-96 p-2"
            placeholder="Title"
            type="text"
          />
          <p className="text-delete font-light text-sm">
            {errors.title?.message}
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="slp" className="text-white">
            SLP quota
          </label>
          <input
            {...register("slp")}
            className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md border-2 border-primary focus:border-expand focus:border-2  outline-none font-light w-96 p-2"
            placeholder="How much SLP do you expect"
            type="text"
            id="slp"
          />
          <p>{errors.slp?.message}</p>
        </div>

        <div className="flex flex-col">
          <div className="w-96 flex items-end">
            <div className="flex flex-col w-9/12 mr-3">
              <label htmlFor="slp" className="text-white">
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
          <p>{errors.split?.message}</p>
        </div>

        <div className="flex flex-col">
          <p className="text-white select-none">Paymenet schedule</p>
          <div className="grid w-96 grid-cols-3 space-x-2 rounded-xl bg-white p-2">
            <div>
              <input
                {...register("payment")}
                type="radio"
                id="15"
                value="15"
                className="peer hidden"
              />
              <label
                htmlFor="15"
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-secondary peer-checked:font-bold peer-checked:text-white"
              >
                15
              </label>
            </div>

            <div>
              <input
                {...register("payment")}
                type="radio"
                id="30"
                value="30"
                className="peer hidden"
              />
              <label
                htmlFor="30"
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-secondary peer-checked:font-bold peer-checked:text-white"
              >
                30
              </label>
            </div>

            <div>
              <input
                {...register("payment")}
                type="radio"
                id="45"
                value="45"
                className="peer hidden"
              />
              <label
                htmlFor="45"
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-secondary peer-checked:font-bold peer-checked:text-white"
              >
                45
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-white select-none">Account energy</p>
          <div className="grid w-96 grid-cols-3 space-x-2 rounded-xl bg-white p-2">
            <div>
              <input
                {...register("energy")}
                type="radio"
                value="20"
                id="20"
                className="peer hidden"
              />
              <label
                htmlFor="20"
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-secondary peer-checked:font-bold peer-checked:text-white"
              >
                20
              </label>
            </div>

            <div>
              <input
                {...register("energy")}
                type="radio"
                value="40"
                id="40"
                className="peer hidden"
              />
              <label
                htmlFor="40"
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-secondary peer-checked:font-bold peer-checked:text-white"
              >
                40
              </label>
            </div>

            <div>
              <input
                {...register("energy")}
                type="radio"
                value="60"
                id="60"
                className="peer hidden"
              />
              <label
                htmlFor="60"
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-secondary peer-checked:font-bold peer-checked:text-white"
              >
                60
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-white">
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
          <p>{errors.description?.message}</p>
        </div>

        <button
          type="submit"
          className="text-white border bg-gray-500 border-gray-500 rounded-md px-3 hover:bg-secondary font-extralight transition duration-200 ease-linear cursor-pointer w-44 p-2 self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AxieForm;

// className="hidden checked:bg-shades-200"
