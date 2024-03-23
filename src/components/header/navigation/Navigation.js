import React, { useContext } from "react";
import classes from "./Navigation.module.css";
import Logo from "../../ui/logo/Logo";
import ButtonViolet from "../../ui/button/ButtonViolet";
import { UserContext } from "../../../context/UserContext";
function Navigation() {
  const { isLogin, ridirectLogin, ridirectProfile, logOut } =
    useContext(UserContext);
  console.log(isLogin);
  return (
    <div className={classes.navigation}>
      <Logo />
      <div>
        {!isLogin() && <ButtonViolet onClick={ridirectLogin} text="Sign In" />}
        {isLogin() && (
          <div style={{ display: "flex", gap: "40px" }}>
            <ButtonViolet text="Profile" onClick={ridirectProfile} />
            <ButtonViolet text="Log Out" onClick={logOut} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
