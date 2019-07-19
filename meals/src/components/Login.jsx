import React from "react";
import { withFormik, Form as FormK, Field, FormikBag } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PropTypes from "prop-types";

function Login({ touched, values, errors, FormikBag, isSubmitting }) {
  return (
    <div>
      <FormK>
        <Field name="username" placeholder="username" />
        {touched.username && errors.username && <div>{errors.username}</div>}
        <Field name="password" placeholder="password" type="password" />
        {touched.password && errors.password && <div>{errors.password}</div>}
        <button type="submit" disabled={isSubmitting}>
          submit
        </button>
        {isSubmitting && <div>Submitting...</div>}
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
    const url = "http://localhost:5000/api/register";
    axios
      .post(url, values)
      .then(console.log)
      .catch(error => console.log(error));
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4)
      .required(),
    password: Yup.string()
      .min(4)
      .required(),
  }),
})(Login);
