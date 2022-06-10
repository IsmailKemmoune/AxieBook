import { useForm } from "react-hook-form";
import { useState } from "react";

const AxieForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [split, setSplit] = useState(100);

  const splitCalc = (e) => {
    const value = e.target.value;
    setSplit((prevVal) => (prevVal = 100 - value));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-7"
      >
        <div className="flex flex-col">
          <label htmlFor="slp" className="text-white">
            Title
          </label>
          <input
            {...register("title")}
            className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md focus:border-white outline-none font-light w-96 p-2"
            placeholder="Title"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="slp" className="text-white">
            SLP
          </label>
          <input
            {...register("slp")}
            className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md focus:border-white outline-none font-light w-96 p-2"
            placeholder="How much SLP do you expect"
            type="text"
            id="slp"
          />
        </div>

        <div className="w-96 flex items-end">
          <div className="flex flex-col w-9/12 mr-3">
            <label htmlFor="slp" className="text-white">
              SLP split
            </label>
            <input
              {...register("split")}
              onChange={splitCalc}
              className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md  focus:border-white outline-none font-light p-2"
              placeholder="SLP % for the scholar"
              type="text"
            />
          </div>
          <div className="bg-white border-slate-400 w-1/2 rounded-md h-[40px] p-2 cursor-not-allowed">
            <p className="text-slate-400 italic ">{split}% - manager</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-white">Paymenet schedule</p>
          <div className="grid w-96 grid-cols-3 space-x-2 rounded-xl bg-white p-2">
            <div>
              <input
                {...register("payment")}
                type="radio"
                id="15"
                className="peer hidden"
                checked
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
          <p className="text-white">Account energy</p>
          <div className="grid w-96 grid-cols-3 space-x-2 rounded-xl bg-white p-2">
            <div>
              <input
                {...register("energy")}
                type="radio"
                value="20"
                id="20"
                className="peer hidden"
                checked
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
                value={40}
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
                value={60}
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
        {/*  */}
        {/* <div className="flex flex-col">
          <p className="text-white">SLP split</p>
          <input
            {...register("split")}
            className="w-96 h-1 rounded-sm appearance-none outline-none "
            type="range"
          />
        </div> */}

        <div className="flex flex-col">
          <label htmlFor="description" className="text-white">
            Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md hover:border-red focus:border-white outline-none font-light w-96"
            placeholder="Description"
            rows="7"
            cols="33"
          />
        </div>

        <button
          type="submit"
          className="text-white border bg-gray-500 border-gray-500 rounded-md px-3 hover:bg-secondary font-extralight transition duration-200 ease-linear cursor-pointer w-44"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AxieForm;

// className="hidden checked:bg-shades-200"
