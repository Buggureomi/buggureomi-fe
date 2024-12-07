import { Button } from "@/components/ui/button";

interface Member {
  nickname: string;
  answerCount: number;
  previewMessage: string;
}

interface Marble {
  colorCode: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface previewMarbles {
  counts: number;
  list: Marble[];
}

export default function Main() {
  const member: Member | undefined = {
    nickname: "park",
    answerCount: 1,
    previewMessage: "수고많으셨어요...",
  }; // by getMemberSession();

  if (!member) {
    // todo: redirect("/login");
  }

  return (
    <>
      {member.answerCount < 1 ? (
        <Button>나를 돌아보기</Button>
      ) : (
        <p>{member.previewMessage}</p>
      )}
    </>
  );
}
