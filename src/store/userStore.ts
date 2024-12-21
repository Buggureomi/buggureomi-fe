import { create } from "zustand";
import { persist } from "zustand/middleware";

import { MemberSearchResponse } from "@/api/member/type";

interface UserStore {
  userId: number | null;
  userInfo: MemberSearchResponse["data"] | null;
  setUserId: (user: number) => void;
  clearUserId: () => void;
  setUserInfo: (info: MemberSearchResponse["data"]) => void;
  clearUserInfo: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userId: null,
      setUserId: (user: number) => set({ userId: user }),
      clearUserId: () => set({ userId: null }),
      userInfo: null,
      setUserInfo: (info: MemberSearchResponse["data"]) =>
        set({ userInfo: info }),
      clearUserInfo: () => set({ userInfo: null }),
    }),
    {
      name: "user-storage",
    }
  )
);
