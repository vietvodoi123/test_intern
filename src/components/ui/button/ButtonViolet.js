import React, { useContext } from "react";
import classes from "./ButtonViolet.module.css";

function ButtonViolet({ text, onClick }) {
  return (
    <button onClick={onClick} className={classes.btn_violet}>
      {text}
    </button>
  );
}

export default ButtonViolet;
