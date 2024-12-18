import * as T from "./type";
import { api } from "..";

export async function getLink(
  questionId: number,
  userId: number
): Promise<T.ShareLinkResponse> {
  const res = await api.get(`/question/${questionId}/share-info/${userId}`);
  return res.data;
}
