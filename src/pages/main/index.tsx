import { useState, useEffect } from "react";
import WithoutAnswer from "./components/WithoutAnswer";
import WithAnswer from "./components/WithAnswer";
import NonLoggedSection from "./components/NonLoggedSection";
import { useUserStore } from "@/store/userStore";
import { useHistory } from "react-router-dom";
import { mainPageApi } from "@/api/main";
import { MainPageInfo } from "@/types/main-page";

export default function Main() {
  const [mainPageInfo, setMainPageInfo] = useState<MainPageInfo>();

  const { userInfo } = useUserStore();

  useEffect(() => {
    if (userInfo?.id) {
      mainPageApi.getInfo().then((res) => {
        const data = res.data.data;
        setMainPageInfo(data);
      });
    }
  }, [userInfo]);

  const hasUserId = userInfo?.id != null;

  const history = useHistory();

  if (mainPageInfo && !mainPageInfo.content) {
    history.replace("/question-create");
    return null;
  }

  return (
    <>
      {!hasUserId ? (
        <NonLoggedSection />
      ) : !mainPageInfo ? null : (
        <section className="flex flex-col justify-center items-center h-screen">
          <h2 className="font-bold text-h2 mb-2 text-white">
            {mainPageInfo.nickname}님의 보따리에
          </h2>
          {mainPageInfo.totalCount < 1 ? (
            <WithoutAnswer
              userId={userInfo.id}
              questionContent={mainPageInfo.content}
            />
          ) : (
            <WithAnswer
              userId={userInfo.id}
              answerCount={mainPageInfo.totalCount}
              previewMessage={mainPageInfo.answerContent || ""}
              questionContent={mainPageInfo.content}
            />
          )}
        </section>
      )}
    </>
  );
}
