import React from "react";
import Ingredient from "./Ingredient"
import PropTypes from "prop-types";

function Meal({ meal }) {
  return (
    <div>
      <div>{meal.name}</div>
      <div>{meal.course}</div>
      <div>{meal.technique}</div>
      <div>
        {meal.ingredients.map(ingredient => (
          <Ingredient ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
}

Meal.propTypes = {};

export default Meal;
