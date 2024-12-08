import AnswerList from "@/components/answer/AnswerList";
import dummyData from "@/components/answer/dummy.json";

export default function AnswerResult() {
  return (
    <div>
      <div className="text-center pt-20 pb-10 mb-3">
        <h2 className="font-bold text-h2">OOO님의 보따리</h2>
        <h5 className="font-bold text-h5">
          {dummyData.answerData.length}개의 답변이 담겨 있어요!
        </h5>
      </div>

      <AnswerList listData={dummyData.answerData} />
    </div>
  );
}
