import { Button } from "@/components/ui/button";
import { getRandomIndex } from "@/lib/utils";
import { Answer } from "@/types/answer";

export default function Main() {
  const answers: Answer[] = [
    {
      sender: "someone",
      content: "힘내세요",
      colorCode: "#ffffff",
      regDate: "",
    },
    {
      sender: "anyone",
      content: "밥 먹으세요",
      colorCode: "#000000",
      regDate: "",
    },
  ];

  const answerCount = answers.length;
  const previewMessage = answers[getRandomIndex(answers)];

  return (
    <>
      {answerCount < 1 ? (
        <Button>나를 돌아보기</Button>
      ) : (
        <p>{previewMessage.content}</p>
      )}
    </>
  );
}
