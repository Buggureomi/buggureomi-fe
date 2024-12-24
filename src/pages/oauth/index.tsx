import { useLocation, useHistory } from "react-router-dom";
import { memberAPI } from "@/api/member";

import { tokenCookie } from "@/lib/authToken";

import { Skeleton } from "@/components/ui/skeleton";
import { useUserStore } from "@/store/userStore";

export default function OAuth() {
  const history = useHistory();
  const location = useLocation();
  const code = new URLSearchParams(location.search).get("code");

  const { setUserInfo } = useUserStore();

  if (code) {
    memberAPI.getToken({ code }).then((res) => {
      const data = res.data;

      try {
        if (res.data.status === "OK") {
          if (data.data) {
            tokenCookie.setCookie("accessToken", data.data.accessToken, 0.25);
            tokenCookie.setCookie("refreshToken", data.data.refreshToken, 1);
          }

          if (tokenCookie.getCookie("accessToken")) {
            memberAPI.search().then((res) => {
              const data = res.data;

              if (data.status === "OK") {
                setUserInfo(data.data);
                history.push("/main");
              } else {
                throw new Error("Fail to get user information");
              }
            });
          } else {
            throw new Error(
              "Token API call is 'OK', but there is no accessToken"
            );
          }
        } else {
          throw new Error("Fail to receive user token");
        }
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === "Fail to get user information") {
            history.push("/main");
          } else if (
            error.message === "Fail to receive user token" ||
            error.message ===
              "Token API call is 'OK', but there is no accessToken"
          ) {
            history.push("/member-login");
          }
        }
      }
    });
  }

  return (
    <div className="flex flex-col gap-4 mt-8">
      <Skeleton className="w-full h-10 bg-gray-400" />
      <Skeleton className="w-full h-52 bg-gray-400" />
      <Skeleton className="w-full h-8 bg-gray-400" />
      <Skeleton className="w-full h-8 bg-gray-400" />
      <Skeleton className="w-full h-36 bg-gray-400" />
      <Skeleton className="w-full h-36 bg-gray-400" />
      <Skeleton className="w-full h-8 bg-gray-400" />
    </div>
  );
}
