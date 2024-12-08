import { Marble } from "@/pages/answer-result/type/marble";

interface Props {
  answer: Marble;
}

export default function AnswerCard({ answer }: Props) {
  return (
    <div>
      <p>{answer.sender}님의 구슬</p>
      <div className="rounded-md bg-gray-medium min-h-20">
        <p>{answer.content}</p>
      </div>
    </div>
  );
}
