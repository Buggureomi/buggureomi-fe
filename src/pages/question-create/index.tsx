import { Button } from "@/components/ui/button";
import RandomInput from "./components/RandomInput";

const BUNDEL_IMAGE_URL =
  "https://img.freepik.com/premium-vector/santa-s-sack-pouch-sack-isolated-white-background-vector-illustration_650542-580.jpg";

export default function QuestionCreate() {
  return (
    <section className="flex flex-col items-center h-screen">
      <div className="flex flex-col items-center gap-4 grow">
        <p className="text-center">
          <b>
            나에 대한 질문을 만들어볼까요?
            <br />
            만들기 어렵다면 준비된 질문을 활용해보세요!
          </b>
        </p>

        <img src={BUNDEL_IMAGE_URL} alt="bundle" />
        <span>
          <b>대답을 담을 보따리에 어떤 문구를 붙일까요?</b>
        </span>
        <RandomInput />
      </div>

      <div className="p-12">
        <Button children="다음" />
      </div>
    </section>
  );
}
