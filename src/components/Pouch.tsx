import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import MessageModal from "./MessageModal";
import { Answer } from "@/types/answer";

export default function Pouch() {
  const [selectedMessage, setSelectedMessage] = useState<Answer | null>(null);

  const username = "사용자";

  const answers: Answer[] = [
    {
      sender: "someone",
      content:
        "힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요",
      colorCode: "#ffffff",
      regDate: "",
    },
    {
      sender: "anyone",
      content:
        "밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 ",
      colorCode: "#000000",
      regDate: "",
    },
    {
      sender: "someone",
      content:
        "힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요 힘내세요",
      colorCode: "#ffffff",
      regDate: "",
    },
    {
      sender: "anyone",
      content:
        "밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 밥 먹으세요 ",
      colorCode: "#000000",
      regDate: "",
    },
  ];

  return (
    <div className='space-y-4'>
      <div>
        <h2 className='text-h2 text-primary'>{username}님의 보따리</h2>
        <p className='text-body text-gray-dark'>
          {answers.length}개의 답변이 담겨 있어요!
        </p>
      </div>
      <ScrollArea className='h-[calc(100vh-200px)]'>
        {answers.map((answer) => (
          <Card
            key={answer.content} // TODO: id값으로 수정
            className='mb-4 cursor-pointer hover:bg-gray-light'
            onClick={() => setSelectedMessage(answer)}
          >
            <CardContent className='p-4'>
              <div className='text-h6 text-primary mb-2'>
                {answer.sender}님의 쪽지
              </div>
              <p className='text-body text-gray-dark line-clamp-2'>
                {answer.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
      {selectedMessage && (
        <MessageModal
          message={selectedMessage.content}
          sender={selectedMessage.sender}
          onClose={() => setSelectedMessage(null)}
        />
      )}
    </div>
  );
}
