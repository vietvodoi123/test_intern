import React, { useState } from "react";
import classes from "./Input.module.css";

const Input = ({ label, error, value, setValue, setBlur }) => {
  const handleBlur = () => {
    setBlur((prevBlur) => ({
      ...prevBlur,
      [label.toLowerCase()]: true,
    }));
  };
  return (
    <div className={classes.input_box}>
      <label htmlFor={label.toLowerCase()} className={classes.label}>
        {label}
      </label>
      <input
        className={`${classes.input} ${error ? classes.input_error : ""}`}
        id={label.toLowerCase()}
        onBlur={() => handleBlur()}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={`Enter your ${label}`}
      />
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default Input;
