import React, { useState, useEffect, useContext } from "react";
import classes from "./Logo.module.css";
import { UserContext } from "../../../context/UserContext";

function Logo({ loading }) {
  const [colorSwap, setColorSwap] = useState(false);
  const { ridirectHome } = useContext(UserContext);
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setColorSwap((prevColorSwap) => !prevColorSwap);
      }, 1000); // Đổi màu mỗi giây
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <div
      onClick={() => !loading && ridirectHome()}
      className={`${classes.logo} ${colorSwap ? classes.loading : ""}`}
    >
      <div
        className={`${classes.logo_item1} ${
          colorSwap ? classes.colorSwap : ""
        }`}
      ></div>
      <div
        className={`${classes.logo_item2} ${
          colorSwap ? classes.colorSwap1 : ""
        }`}
      ></div>
    </div>
  );
}

export default Logo;
