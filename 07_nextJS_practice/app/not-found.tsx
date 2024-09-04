/**
 * 파일명이 not-found.tsx이면 404 페이지로 해당 파잎이 보여진다.
 * 이 때 함수명은 어떻게 쓰던 상관없다. 중요한 것은 파일명!!!!
 */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div>
      <p className="text-red-500">404</p>
      <h1>Page Not Found</h1>
    </div>
  );
}
