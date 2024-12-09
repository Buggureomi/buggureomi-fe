import { AxiosResponse } from "axios";
import { api } from "..";
import * as T from "./type";

export const answer = {
  create: async (
    param: T.AnswerCreateParam
  ): Promise<AxiosResponse<T.AnswerCreateResponse>> => {
    const res = await api.post("/answer", param);

    return res;
  },
};
