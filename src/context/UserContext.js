import React, { useState } from "react";
import { createContext } from "react";
import useHttps from "../hooks/useHttps";
export const UserContext = createContext();

function UserContextProvide({ children }) {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("");
  //type User {
  //   "accessToken": "string",
  //   "refreshToken": "string"
  // }
  const { fetchData } = useHttps();

  const isLogin = () => {
    return user ? true : false;
  };
  const signIn = (resLogin) => {
    ridirectHome();
    return setUser(resLogin);
  };
  const logOut = async () => {
    // Kiểm tra xem fetchData đã được khởi tạo hay chưa
    if (fetchData) {
      // Nếu đã khởi tạo, thực hiện yêu cầu logout
      fetchData({ url: "/auth/logout" }, (data) => console.log(data));
    }
    ridirectHome();
    return setUser(null);
  };
  const refeshToken = (newTokens) => {
    setUser(newTokens);
  };
  const ridirectHome = () => {
    setPage("");
  };
  const ridirectLogin = () => {
    setPage("login");
  };
  const ridirectProfile = () => {
    setPage("profile");
  };
  return (
    <UserContext.Provider
      value={{
        user,
        signIn,
        logOut,
        page,
        isLogin,
        refeshToken,
        ridirectHome,
        ridirectLogin,
        ridirectProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvide;
