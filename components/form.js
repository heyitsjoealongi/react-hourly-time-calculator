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
      <Form className="w-full flex flex-wrap font-sans justify-center content-center items-center">
        <div className="w-full flex-auto">
          <p className="w-full text-7xl py-10 m-auto text-center subpixel-antialiased font-bold text-cyan-400">
            0
          </p>
        </div>
        <div className="flex-1 m-auto text-center my-10 mr-4">
          <label
            htmlFor="timeOne"
            className="h-10 w-full mb-8 text-center text-gray-700 font-semibold uppercase"
          >
            Time One
          </label>
          <Field
            id="timeOne"
            name="timeOne"
            placeholder="10:00"
            type="time"
            min="00:01"
            max="24:00"
            required
            className="h-20 w-full p-3 m-auto text-center text-3xl text-cyan-400 border-2 border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex-1 m-auto text-center my-10">
          <label
            htmlFor="timeTwo"
            className="h-10 w-full mb-8 text-center text-gray-700 font-semibold uppercase"
          >
            Time Two
          </label>
          <Field
            id="timeTwo"
            name="timeTwo"
            placeholder="4:00"
            type="time"
            type="time"
            min="00:01"
            max="24:00"
            required
            className="h-20 w-full p-3 m-auto text-center text-3xl text-cyan-400 border-2 border-gray-300 rounded-lg"
          />
        </div>
        <div className="w-full flex-auto">
          <button
            type="submit"
            className="w-full text-base p-3 m-auto subpixel-antialiased font-bold text-white text-center uppercase bg-gray-600 border-2 border-gray-300 rounded-lg shadow-2xl hover:bg-cyan-400 hover:border-white hover:shadow-none transition duration-500 ease-in-out"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  </>
);

export default Basic;
