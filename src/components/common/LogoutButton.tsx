import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import { useUserStore } from "@/store/userStore";

type Props = {
  className?: string;
};

export default function LogoutButton({ className }: Props) {
  const { clearUserId, clearUserInfo } = useUserStore();

  const logout = () => {
    clearUserId();
    clearUserInfo();
  };

  return (
    <Button
      onClick={logout}
      className={cn(className, "w-20 h-11 bg-[#484B5E]")}
    >
      로그아웃
    </Button>
  );
}
