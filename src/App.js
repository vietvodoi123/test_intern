import { useContext, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import { UserContext } from "./context/UserContext";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
function App() {
  const { page } = useContext(UserContext);
  return (
    <div className="App">
      {page === "" && <Home />}
      {page === "login" && <Login />}
      {page !== "profile" && <Footer />}
      {page === "profile" && <Profile />}
    </div>
  );
}

export default App;
