import React, { useState, useEffect } from "react";
import Meal from "./Meal";
import PropTypes from "prop-types";

function Meals({ history }) {
  const [meals, setMeals] = useState([]);
  const logout = event => {
    event.preventDefault();
    localStorage.removeItem("token");
    history.push("/");
  };
  useEffect(() => {}, [meals]);
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
