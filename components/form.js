/* Framework */
import React, { useState } from "react";

import FormikForm from "./formik-form";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: [
        {
          value: "0",
        },
      ],
    };
  }

  render() {
    const { hours } = this.state;
    return (
      <>
        {hours.map((data) => (
          <FormikForm value={data.value} />
        ))}
      </>
    );
  }
}

export default Form;
