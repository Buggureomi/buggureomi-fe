import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useUserStore } from "@/store/userStore";

import BackButton from "@/components/header-button/BackButton";
import SettingsSheet from "@/features/settings/SettingsSheet";

export default function Header() {
  const location = useLocation();
  const { userInfo } = useUserStore();
  const isAuthenticated = !!userInfo?.id;

  const [isMainPage, setIsMainPage] = useState(false);
  const [isShowOnlyLogout, setIsShowOnlyLogout] = useState(false);

  useEffect(() => {
    const isMain = location.pathname === "/main" && isAuthenticated;
    const isQuestionRoute = location.pathname.startsWith("/question");

    setIsMainPage(isMain || isQuestionRoute);
    setIsShowOnlyLogout(isQuestionRoute);
  }, [location, isAuthenticated]);

  return (
    <header className="flex items-center justify-between pt-4">
      <BackButton />
      {isMainPage && <SettingsSheet showOnlyLogout={isShowOnlyLogout} />}
    </header>
  );
}
