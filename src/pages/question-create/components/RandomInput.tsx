import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getRandomIndex } from "@/lib/utils";
import { useState } from "react";
import { MOCK_QUESTION_LIST } from "../mock";

export default function RandomInput() {
  const [question, setQuestion] = useState<string>("");
  const randomQuestion = MOCK_QUESTION_LIST[getRandomIndex(MOCK_QUESTION_LIST)];

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  return (
    <div className="flex gap-2">
      <Input
        value={question}
        className="w-64"
        placeholder="문구를 입력해주세요"
        onChange={handleChangeInput}
      />
      <Button onClick={() => setQuestion(randomQuestion)}>랜덤</Button>
    </div>
  );
}
