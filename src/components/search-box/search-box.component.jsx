import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ className, type, placeholder, handlechange }) => (
  <input
    className={className}
    type={type}
    placeholder={placeholder}
    onChange={handlechange}
  />
);

export default SearchBox;
