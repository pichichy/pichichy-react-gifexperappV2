import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length > 2) {
      setCategories((category) => [input, ...category]);
    }
  };

  return (
    <form className="mt-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search"
        placeholder="Category"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
