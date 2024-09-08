export type TLoginVal = {
  userEmail?: string;
  userPw?: string;
};

export type TUseInput = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];
