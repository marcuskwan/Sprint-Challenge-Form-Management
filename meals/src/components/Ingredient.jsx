import React from "react";
import PropTypes from "prop-types";

function Ingredient({ ingredient }) {
  return (
    <div>
      <div> {ingredient}</div>
    </div>
  );
}

Ingredient.propTypes = {
  ingredient: PropTypes.string,
};

export default Ingredient;
