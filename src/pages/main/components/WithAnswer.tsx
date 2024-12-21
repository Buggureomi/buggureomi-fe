import BOTTARI_WITH_ANSWER_IMAGE from "@/assets/image/main/bottari_with_answer.png";
import { ReflectionButton } from "@/pages/main/components/ReflectionButton";
import { Button } from "@/components/ui/button";
import ShareButton from "@/components/share/ShareButton";

type Props = {
  answerCount: number;
  previewMessage: string;
  userId: number;
};

export default function WithAnswer({
  answerCount,
  previewMessage,
  userId,
}: Props) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-white text-h2 mb-6">
        {answerCount}개의 답변이 담겨 있어요!
      </span>
      <div className="w-40 mb-6">
        <img src={BOTTARI_WITH_ANSWER_IMAGE} className="w-full h-full" />
      </div>
      <h3 className="font-bold mb-2 w-full text-left text-white">
        담긴 쪽지 미리보기
      </h3>
      <p className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md mb-10 h-24 overflow-y-auto font-nanum-dahaengce">
        {previewMessage}
      </p>
      <span className="font-nanum-dahaengce mb-4 text-white text-xl">
        누구의 쪽지일까요? 지금 열어보세요!
      </span>

      <Button className="mb-2 w-full" children="열어보기" />

      <div className="flex w-full">
        <ReflectionButton userId={userId} />
        <ShareButton
          variant={"outline"}
          className="w-full ml-2"
          userId={userId}
        >
          공유
        </ShareButton>
      </div>
    </div>
  );
}
