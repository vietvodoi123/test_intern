import { UserContext } from "../../../context/UserContext";
import Logo from "../../ui/logo/Logo";
import Navbar1 from "../../ui/modal/navbar/Navbar1";
import classes from "./Navbar.module.css";
import React, { useContext, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut } = useContext(UserContext);
  return (
    <>
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
      <Navbar1 isOpen={isOpen} setIsOpen={setIsOpen} />
      <button onClick={() => setIsOpen(true)} className={classes.btn_open}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
        )}
      </button>
    </>
  );
}

export default Navbar;
