import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  regret: z.string().min(1, { message: "이 필드는 필수입니다" }),
  bestThing: z.string().min(1, { message: "이 필드는 필수입니다" }),
  nextYearGoal: z.string().min(1, { message: "이 필드는 필수입니다" }),
  message2024: z.string().min(1, { message: "이 필드는 필수입니다" }),
  message2025: z.string().min(1, { message: "이 필드는 필수입니다" }),
});

export default function SelfReflection() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      regret: "",
      bestThing: "",
      nextYearGoal: "",
      message2024: "",
      message2025: "",
    },
  });

  function onSubmit() {
    setShowConfirmModal(true);
  }

  const confirmSubmission = () => {
    setShowConfirmModal(false);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-h3 text-gray-dark">나 돌아보기</CardTitle>
        <p className="text-body text-destructive">
          수정이 불가능하니 나를 깊게 돌아봐주세요
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="regret"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-dark">
                    올해 가장 후회되는 일은?
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="후회되는 일을 적어주세요" {...field} />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bestThing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-dark">
                    올해 가장 잘한 일은?
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="잘한 일을 적어주세요" {...field} />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nextYearGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-dark">
                    내년에는 이것만큼은 꼭 해내야지!
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="내년의 목표를 적어주세요" {...field} />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message2024"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-dark">
                    2024년의 나에게 하고싶은 한마디
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="2024년의 나에게 메시지를 남겨주세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message2025"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-dark">
                    2025년의 나에게 하고 싶은 한마디
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="2025년의 나에게 메시지를 남겨주세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />
            <Button
              size="lg"
              type="submit"
              className="w-full"
              disabled={!form.formState.isValid || form.formState.isSubmitting}
            >
              제출하기
            </Button>
          </form>
        </Form>
      </CardContent>
      <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>제출 확인</DialogTitle>
            <DialogDescription>
              정말로 제출하시겠습니까? 제출 후에는 수정이 불가능합니다.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col gap-2 sm:flex-row sm:gap-0 sm:justify-end">
            <Button
              onClick={() => setShowConfirmModal(false)}
              variant="outline"
            >
              취소
            </Button>
            <Button
              onClick={confirmSubmission}
              className="bg-primary text-white"
            >
              확인
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
