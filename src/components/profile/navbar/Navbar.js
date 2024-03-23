import { UserContext } from "../../../context/UserContext";
import Logo from "../../ui/logo/Logo";
import classes from "./Navbar.module.css";
import React, { useContext } from "react";

function Navbar() {
  const { logOut } = useContext(UserContext);
  return (
    <div className={classes.navbar}>
      <div className={classes.header}>
        <div>
          <Logo />
        </div>
      </div>
      <div className={classes.menu}>
        <button className={classes.btn + " " + classes.post}>Post</button>
        <button
          className={classes.btn + " " + classes.log_out}
          onClick={() => logOut()}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
