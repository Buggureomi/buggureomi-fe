import hexToRgb from "@/tools/hexToRgb";

import { Marble } from "@/pages/answer-result/type/marble";

interface Props {
  answer: Marble;
}

export default function AnswerCard({ answer }: Props) {
  return (
    <div>
      <p className="font-bold">{answer.sender}님의 구슬</p>
      {/** COMMENT: 사용자가 선택한 답변(구슬) 색상의 활용 여부는 추후 변경될 수 있습니다. e.g. 유저 이름, 배경 색 등 */}
      <div
        style={{ borderColor: hexToRgb(answer.colorCode, 0.4) }}
        className="rounded-md border-2 min-h-20 p-3"
      >
        <p>{answer.content}</p>
      </div>
    </div>
  );
}
