import React, { useContext, useEffect, useState } from "react";
import classes from "./Login.module.css";
import Logo from "../ui/logo/Logo";
import useHttps from "../../hooks/useHttps";
import { UserContext } from "../../context/UserContext";
import Input from "../ui/input/Input";

function Login() {
  const [username, setUsername] = useState("");
  const [error1, setError] = useState(null);
  const [blur, setBlur] = useState({ username: false });
  const { loading, error, fetchData } = useHttps();
  const { signIn } = useContext(UserContext);
  useEffect(() => {
    if (blur.username && username.trim().length === 0) {
      setError("Username is required!");
    } else {
      setError(null);
    }
  }, [username, blur]);

  const handleLogin = () => {
    console.log(error);
    if (!error1 && username !== "") {
      console.log(error1);
      const req = {
        url: "/auth/login",
        config: { method: "POST" },
        body: {
          username: username,
        },
      };
      console.log(req);
      const tranform = (data) => {
        signIn(data);
      };

      fetchData(req, tranform);
    }
  };
  return (
    <div className={classes.login_container + " main"}>
      <div className={classes.header}>
        <Logo />
      </div>

      <div className={classes.form_login}>
        <h1 className={classes.title}>Sign In</h1>
        <Input
          value={username}
          setValue={setUsername}
          setBlur={setBlur}
          label="Username"
          error={error1}
        />
        <buton onClick={handleLogin} type="submit" className={classes.sign_in}>
          {loading ? "Loading...!" : "Sign In"}
        </buton>
      </div>
    </div>
  );
}

export default Login;
