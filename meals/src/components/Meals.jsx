import React, { useState, useEffect } from "react";
import Meal from "./Meal";
import axiosWithAuth from "../functions/axiosWithAuth";
import PropTypes from "prop-types";

function Meals({ history }) {
  const [meals, setMeals] = useState(false);
  const logout = event => {
    event.preventDefault();
    localStorage.removeItem("token");
    history.push("/");
  };
  useEffect(() => {
    const url = "http://localhost:5000/api/restricted/data";
    console.log("in use effect");
    localStorage.getItem("token") &&
      axiosWithAuth()
        .get(url)
        .then(response => {
          console.log("get success! ", response);
          if (meals === false) setMeals(response.data);
        })
        .catch(error => console.log(error));
  }, [meals]);
  return (
    <div>
      <button className="logout" onClick={event => logout(event)}>
        logout
      </button>
      {meals && meals.map(meal => <Meal key={meal} meal={meal} />)}
    </div>
  );
}

Meals.propTypes = {};

export default Meals;
