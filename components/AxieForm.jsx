import { Formik, Field, Form } from "formik";
import { useState } from "react";

const AxieForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <Formik
        initialValues={{
          energy: "",
          payment: "",
          slp: "",
          split: "",
          description: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="slp" className="text-white">
              SLP
            </label>
            <input
              className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md hover:border-red focus:border-white outline-none font-light w-96"
              placeholder="How much SLP do you expect"
              type="text"
              name="slp"
              id="slp"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            <label htmlFor="slp" className="text-white">
              Paymenet schedule
            </label>
            <input
              className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md hover:border-red focus:border-white outline-none font-light w-96"
              placeholder="Every x days"
              type="text"
              name="paymenet"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            <div id="my-radio-group">Picked</div>
            <div role="group" aria-labelledby="my-radio-group">
              <div className="">
                <label className="inline-flex items-center mt-3">
                  <Field
                    type="radio"
                    name="picked"
                    value="20"
                    className="h-5 w-5 text-red-600 "
                  />
                  20
                </label>
              </div>
              <label>
                <Field type="radio" name="picked" value="40" />
                40
              </label>
              <label>
                <Field type="radio" name="picked" value="60" />
                60
              </label>
              <div>Picked: {values.picked}</div>
            </div>
            {/*  */}

            <input
              className="w-96 h-1 rounded-sm appearance-none outline-none "
              type="range"
              name="split"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            <textarea
              className="indent-3 placeholder:italic placeholder:opacity-50 placeholder:text-slate-400 rounded-md hover:border-red focus:border-white outline-none font-light w-96"
              placeholder="Description"
              rows="7"
              cols="33"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.textarea}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white border bg-gray-500 border-gray-500 rounded-md px-3 hover:bg-secondary font-extralight transition duration-200 ease-linear cursor-pointer w-44"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AxieForm;

// className="hidden checked:bg-shades-200"
