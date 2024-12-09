import { BaseResponse } from "../type";

export type AnswerCreateParam = {
  memberId: number;
  questionId: number;
  nickname: string;
  sender: string;
  content: string;
  colorCode: string;
};

export type AnswerCreateResponse = BaseResponse<{
  nickname: string;
  questionContent: string;
  colorCode: string;
}>;
