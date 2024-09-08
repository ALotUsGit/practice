"use client";

import { useRouter } from "next/navigation";
import useLoginValue from "@/components/hooks/useLoginValue";
import { TLoginVal } from "@/components/types/LoginType";
import { useState } from "react";

const page = () => {
  const router = useRouter();
  const [email, onChnageEmail] = useLoginValue("");
  const [password, onChnagePassword] = useLoginValue("");
  const [error, setError] = useState<TLoginVal>({});

  // 로그인 유효성 검사
  const loginError = () => {
    const error: TLoginVal = {};

    // 이메일 형식이 맞는지?
    const emailRegex =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    // 영문, 숫자, 특수문자 포함 & 8글자 이상인지?
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!email || !emailRegex.test(email))
      error.userEmail = "Please check your E-mail";

    if (!password || !passwordRegex.test(password))
      error.userPw = "Please check your password";

    return error;
  };

  const checkInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(loginError());

    // 유효성검사가 통과되면 root로 이동
    if (Object.keys(loginError()).length === 0) router.push("/");
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="relative  w-full max-w-sm">
        {/* 디자인 요소 */}
        <div className="absolute left-0 top-0 w-60 h-60 bg-violet-400 rounded-full blur-3xl -z-10"></div>
        <div className="absolute right-[-2rem] bottom-[-2.4rem] w-80 h-80 bg-indigo-300 rounded-full blur-3xl -z-10"></div>

        {/* 로그인 영역 */}
        <form
          className="flex flex-col gap-4 py-12 px-8 bg-[#ffffff82] border border-white rounded-xl"
          onSubmit={checkInput}
        >
          <h1 className="mb-4 text-2xl font-bold text-center">ALOTUS</h1>

          <label htmlFor="userEmail" className="flex flex-col gap-2">
            <span>E-mail</span>
            <input
              type="text"
              id="userEmail"
              className={`rounded ${error.userEmail && "border-rose-500"}`}
              placeholder="Enter your email"
              onChange={onChnageEmail}
            />
            {error.userEmail && (
              <span className="text-rose-500 text-sm">{error.userEmail}</span>
            )}
          </label>

          <label htmlFor="userPw" className="flex flex-col gap-2">
            <span>Password</span>
            <input
              type="password"
              id="userPw"
              className={`rounded ${error.userPw && "border-rose-500"}`}
              placeholder="Enter your password"
              onChange={onChnagePassword}
            />
            {error.userPw && (
              <span className="text-rose-500 text-sm">{error.userPw}</span>
            )}
          </label>

          <button className="mt-2 py-4 text-white text-center bg-indigo-500 rounded transition hover:opacity-90">
            LOGIN
          </button>
        </form>
      </div>
    </section>
  );
};
export default page;
