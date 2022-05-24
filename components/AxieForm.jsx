import { Formik, Field, Form } from "formik";

const AxieForm = () => (
  <div>
    <Formik
      initialValues={{ energy: "", payment: "", slp: "", split: "" }}
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
        <form onSubmit={handleSubmit}>
          {/*  */}
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="energy" value="20" />
              20
            </label>
            <label>
              <Field type="radio" name="energy" value="40" />
              40
            </label>
            <label>
              <Field type="radio" name="energy" value="60" />
              60
            </label>
            <div>Picked: {values.picked}</div>
          </div>
          {/*  */}
          <input
            type="range"
            name="split"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <input
            type="text"
            name="slp"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <input
            type="text"
            name="paymenet"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default AxieForm;
