import { Answer } from "@/types/answer";
import { Bead } from "@/components/bead/Bead";

interface Props {
  answer: Answer;
  onDialogOpen: () => void;
}

export default function AnswerCard({ answer, onDialogOpen }: Props) {
  const date = answer.regDate as string;

  return (
    <div>
      <div className="flex justify-between  mb-1 text-white">
        <span className="flex gap-2 font-semibold">
          <Bead color={answer.colorCode} size={25} />
          {answer.sender}님의 구슬
        </span>
        <span>{date}</span>
      </div>

      <div
        onClick={onDialogOpen}
        className="rounded-md border-2 min-h-20 p-3 bg-[#F3F3F3] font-nanum-dahaengce text-xl whitespace-pre-wrap"
      >
        <p className="line-clamp-2 overflow-hidden">{answer.content}</p>
      </div>
    </div>
  );
}
