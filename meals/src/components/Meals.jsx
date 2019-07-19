import React, { useState, useEffect } from "react";
import Meal from "./Meal";
import PropTypes from "prop-types";

function Meals(props) {
  const [meals, setMeals] = useState([]);
  useEffect(() => {}, [meals]);
  return (
    <div>
      {meals.map(meal => (
        <Meal meal={meal} />
      ))}
    </div>
  );
}

Meals.propTypes = {};

export default Meals;
