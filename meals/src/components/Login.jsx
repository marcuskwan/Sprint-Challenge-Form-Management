import React from "react";
import { withFormik, Form as FormK, Field, FormikBag } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PropTypes from "prop-types";

function Login({ values, FormikBag }) {
  return (
    <div>
      <FormK>
        <Field name="username" placeholder="username" />
        <Field name="password" placeholder="password" type="password" />
        <button type="submit">submit</button>
      </FormK>
    </div>
  );
}

Login.propTypes = {};

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  handleSubmit(values, formikBag) {
    formikBag.resetForm();
    const url = "http://localhost:6000/api/register";
    axios
      .post(url, values)
      .then(console.log)
      .catch(error => console.log(error));
  },
  validationSchema(values) {},
})(Login);
