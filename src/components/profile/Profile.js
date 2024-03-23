import React from "react";
import classes from "./Profile.module.css";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";

function Profile() {
  return (
    <div className={classes.profile_container}>
      <Navbar />
      <Main />
    </div>
  );
}

export default Profile;
