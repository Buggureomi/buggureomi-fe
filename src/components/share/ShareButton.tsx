import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";
import { getLink } from "@/api/link";
import { useToast } from "@/hooks/use-toast";
import { Link } from "lucide-react";

type Props = {
  userId: number;
  questionId: number;
} & ButtonProps;

export default function ShareButton({
  className,
  userId,
  questionId,
  children,
}: Props) {
  const { toast } = useToast();

  const copyShareLinkAddress = () => {
    getLink(questionId, userId).then((data) => {
      navigator.clipboard.writeText(data.data.url).then(() => {
        toast({
          description: "링크가 복사되었습니다",
        });
      });
    });
  };

  return (
    <Button onClick={copyShareLinkAddress} className={cn(className)}>
      <Link />
      {children}
    </Button>
  );
}
