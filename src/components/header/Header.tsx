import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import GoBackHeader from "@/components/go-back-header/GoBackHeader";
import SettingsSheet from "@/components/settings-sheet/SettingsSheet";

export default function Header() {
  const history = useHistory();
  const [isMainPage, setIsMainPage] = useState(
    history.location.pathname === "/main"
  );

  useEffect(() => {
    const unlisten = history.listen((location) => {
      setIsMainPage(location.pathname === "/main");
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <div className="flex items-center justify-between">
      <GoBackHeader />
      {isMainPage && <SettingsSheet />}
    </div>
  );
}
