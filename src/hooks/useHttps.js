import React, { useCallback, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

// type RequestConfig = {
//   method?: string;
//   headers?: { [key: string]: string };
//   body?: any;
// };

// transform: function to tranfrom response data
function useHttps() {
  const base_url = "https://agiletech-test-api.zeabur.app";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const userContext = useContext(UserContext) || { user: null };
  const { user, refeshToken } = userContext;
  const authorizationHeader = user ? `Bearer ${user.accessToken}` : null;
  // fetching data
  const fetchData = useCallback(async (req, transform, params) => {
    setLoading(true);
    setError(null);
    try {
      const p = new URLSearchParams(params);
      const config = {
        method: req.config && req.config.method ? req.config.method : "GET",
        headers: {
          "Content-Type":
            req.config && req.headers && req.config.headers["Content-Type"]
              ? req.config.headers["Content-Type"]
              : "application/json",
          Authorization: authorizationHeader,
          mode:'no-cors'
        },
        body: req.body ? JSON.stringify(req.body) : null,
      };
      const url = base_url + req.url + (params ? `?${p}` : "");
      const response = await fetch(url, config);

      if (!response.ok) {
        if (response.status === 401) {
          // Nếu nhận được mã trạng thái 401, refresh token
          await refreshAccessToken(); // Đảm bảo bạn đã xử lý lỗi refresh token
          // Sau khi refresh token, thực hiện lại yêu cầu với token mới
          config.headers.Authorization = `Bearer ${user.accessToken}`;

          const refreshedResponse = await fetch(url, config);
          if (!refreshedResponse.ok) {
            throw new Error(
              "Network response was not ok after refreshing token"
            );
          }
          const refreshedData = await refreshedResponse.json();
          transform(refreshedData);
        } else {
          throw new Error("Network response was not ok");
        }
      } else {
        // console.log(response).json();
        const responseData = await response.json();
        transform(responseData);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // refesh token
  const refreshAccessToken = async () => {
    try {
      // Gửi yêu cầu refresh token đến API
      const refreshResponse = await fetch(base_url + "/auth/refresh-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Thêm các tiêu đề khác nếu cần
        },
        body: JSON.stringify({ refreshToken: user.refreshToken }),
      });

      if (!refreshResponse.ok) {
        throw new Error("Failed to refresh access token");
      }

      const newTokens = await refreshResponse.json();
      // Lưu trữ lại access token mới vào Context hoặc localStorage
      refeshToken(newTokens);
    } catch (error) {
      console.error("Error refreshing access token:", error);
      // Xử lý lỗi refresh token tại đây (ví dụ: đăng xuất người dùng)
    }
  };

  return {
    loading,
    error,
    fetchData,
  };
}

export default useHttps;
