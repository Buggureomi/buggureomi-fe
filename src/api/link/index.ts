import * as T from "./type";
import { api } from "..";

export async function getLink(
  userId: number,
  params: T.ShareLinkParam
): Promise<T.ShareLinkResponse> {
  const res = await api.get(`/member/share-info/${userId}`, {
    params,
  });
  return res.data;
}
