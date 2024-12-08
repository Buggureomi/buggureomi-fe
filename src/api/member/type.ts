export type MemberJoinParam = {
  nickname: string;
  password: string;
  email: `${string}@${string}`;
};

export type MemberJoinResponse = {
  status: string;
  message: string;
};

export type MemberLoginParam = {
  nickname: string;
  password: string | number;
};

export type MemberLoginResponse = {
  status: string;
  message: string;
  data: {
    id: number;
  };
};
