import React, { useState } from "react";
import { withFormik, Form as FormK, Field, FormikBag } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalstorage";
import PropTypes from "prop-types";

function Login({ touched, values, errors, formikBag, isSubmitting, history }) {
  const [token, setTokenToLocalStorage] = useLocalStorage("token");
  const [isLoading, setIsLoading] = useState(false);
  const login = event => {
    event.preventDefault();
    const url = "http://localhost:5000/api/register";
    const test = () => { setIsLoading(!isLoading)
console.log("in test: ", isLoading)
    }
    axios
      .post(url, values)
      .then(response => {
        console.log("post success! ", response);
        response.data.token && setTokenToLocalStorage(response.data.token);
        test();
        setIsLoading(true);
      })
      .then(() => {
        test()
        setTimeout(() => history.push("/meals"), 1000);
        setIsLoading(false);
        console.log("second", isLoading);
      })
      .catch(error => console.log(error));
  };
  return (
    <div>
      <FormK onSubmit={event => login(event)}>
        <Field name="username" placeholder="username" />
        {touched.username && errors.username && <div>{errors.username}</div>}
        <Field name="password" placeholder="password" type="password" />
        {touched.password && errors.password && <div>{errors.password}</div>}
        <button
          type="submit"
          // disabled={isSubmitting}
        >
          submit
        </button>
        {isSubmitting && <div>Submitting...</div>}
      </FormK>
      {isLoading && <div>Loading..</div>}
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
  // handleSubmit(values, formikBag) {
  //   formikBag.resetForm();
  // },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4)
      .required(),
    password: Yup.string()
      .min(4)
      .required(),
  }),
})(Login);
