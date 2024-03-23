import Modal from "../Modal";
import classes from "./Navbar1.module.css";
import React, { useContext } from "react";
import Logo from "../../logo/Logo";
import { UserContext } from "../../../../context/UserContext";

function Navbar1({ setIsOpen, isOpen }) {
  const { logOut } = useContext(UserContext);
  return (
    <Modal isOpen={isOpen}>
      <div className={classes.backdrop} onClick={() => setIsOpen(false)}></div>
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
    </Modal>
  );
}

export default Navbar1;
