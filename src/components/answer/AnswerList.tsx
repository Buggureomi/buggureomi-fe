import { ScrollArea } from "../ui/scroll-area";
import AnswerCard from "./AnswerCard";

import { Marble } from "@/pages/answer-result/type/marble";

// TODO: 임시 선언이므로 업데이트 필요
interface Props {
  listData: Marble[];
}

export default function AnswerList({ listData }: Props) {
  const answerData: Marble[] = listData;

  return (
    <ScrollArea className="h-[650px]">
      <div className="flex flex-col gap-1 px-3">
        {answerData.map((a, index) => {
          return <AnswerCard key={index} answer={a} />; // TODO: key값 업데이트 필요
        })}
      </div>
    </ScrollArea>
  );
}
