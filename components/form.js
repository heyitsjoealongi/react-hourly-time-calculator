import React from "react";
import ReactDOM from "react-dom";

import { Formik, Field, Form } from "formik";

const Basic = () => (
  <>
    <Formik
      initialValues={{
        timeOne: "",
        timeTwo: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="timeOne">Time One</label>
        <Field
          id="timeOne"
          name="timeOne"
          placeholder="10:00"
          type="time"
          min="00:01"
          max="24:00"
          required
        />

        <label htmlFor="timeTwo">Time Two</label>
        <Field
          id="timeTwo"
          name="timeTwo"
          placeholder="4:00"
          type="time"
          type="time"
          min="00:01"
          max="24:00"
          required
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </>
);

export default Basic;
