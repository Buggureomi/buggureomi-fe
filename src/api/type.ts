export interface BaseResponse<T extends object | null = null> {
  status: "OK" | "BAD_REQUEST";
  message: string;
  data: T;
}
