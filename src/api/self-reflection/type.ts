import { BaseResponse } from "@/api/type";

export type ReflectionQuestion = {
  id: number;
  content: string;
};

export type ReflectionRequest = {
  id: number;
  content: string;
};

export type SubmitReflectionsPayload = {
  reflections: ReflectionRequest[];
};

export type QuestionResponse = BaseResponse<ReflectionQuestion[]>;

export interface SubmitReflectionResponse {
  status: "OK" | "BAD_REQUEST" | "NOT_FOUND";
  message: string;
  data: {
    reflections: {
      questionId: number;
      content: string;
    }[];
  };
}

export interface ReflectionAnswer {
  commonQuestionsId: number;
  content: string;
}

export interface GetReflectionResponse {
  status: "OK" | "BAD_REQUEST" | "NOT_FOUND";
  message: string;
  data: ReflectionAnswer[];
}

export type GetReflectionAnswerResponse = BaseResponse<ReflectionAnswer[]>;
