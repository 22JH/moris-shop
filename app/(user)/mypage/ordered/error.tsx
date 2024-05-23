"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <h1>에러 발생</h1>
      <button onClick={reset}>리셋</button>
    </>
  );
}
