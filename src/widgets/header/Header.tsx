import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SettingsSheet from "@/features/settings/SettingsSheet";
import BackHeader from "@/components/back-header/BackHeader";
import { useUserStore } from "@/store/userStore";

export default function Header() {
  const location = useLocation();
  const { userInfo } = useUserStore();
  const isAuthenticated = !!userInfo?.id;

  const [isMainPage, setIsMainPage] = useState(false);

  useEffect(() => {
    setIsMainPage(location.pathname === "/main" && isAuthenticated);
  }, [location, isAuthenticated]);

  return (
    <div className="flex items-center justify-between pt-4">
      <BackHeader />
      {isMainPage && <SettingsSheet />}
    </div>
  );
}
