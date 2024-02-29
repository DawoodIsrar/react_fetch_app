import React, { useEffect, useState } from "react";
import "./Forminput.css";
const FormInput = (props) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = (e) => {
    e.preventDefault();
    console.log("focus =======>", focus);
    setFocus(true);
  };
  return (
    <div className="FormInput">
      <label>{props.label}</label>
      <input
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        required
        onBlur={handleFocus}
        focus={focus.toString()}
      />
      <span>{props.errorMessage}</span>
    </div>
  );
};

export default FormInput;
