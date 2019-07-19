import React, { useState, useEffect } from "react";
import Meal from "./Meal";
import axiosWithAuth from "../functions/axiosWithAuth";
import PropTypes from "prop-types";

function Meals({ history }) {
  const [meals, setMeals] = useState([]);
  const logout = event => {
    event.preventDefault();
    localStorage.removeItem("token");
    history.push("/");
  };
  useEffect(() => {
    const url = "http://localhost:5000/api/restricted/data";
    axiosWithAuth()
      .get(url)
      .then(response => {
        console.log("get success! ", response);
        setMeals(response.data);
      })
      .catch(error => console.log(error));
  }, [meals]);
  return (
    <div>
      <button onClick={event => logout(event)}>logout</button>
      {meals.map(meal => (
        <Meal meal={meal} />
      ))}
    </div>
  );
}

Meals.propTypes = {};

export default Meals;
