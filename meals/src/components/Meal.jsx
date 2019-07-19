import React from "react";
import Ingredient from "./Ingredient";
import PropTypes from "prop-types";

function Meal({ meal }) {
  return (
    <div className="meal">
      <div>
        <div className="name">Name</div>
        {meal.name}
      </div>
      <div>
        <div className="course">Course</div>
        {meal.course}
      </div>
      <div>
        <div className="technique">Technique</div>
        {meal.technique}
      </div>
      <div>
        <div className="ingredients">Ingredients</div>
        {meal.ingredients.map(ingredient => (
          <Ingredient key={ingredient} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
}

Meal.propTypes = {
  meal: PropTypes.object,
};

export default Meal;
