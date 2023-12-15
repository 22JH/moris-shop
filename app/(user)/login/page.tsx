"use client";

import { useEffect, useState } from "react";
import * as styles from "./login.css";
import { signIn, signOut } from "next-auth/react";
import { getSession } from "next-auth/react";

export default function Login() {
  console.log();
  useEffect(() => {
    (async function () {
      const session = await getSession();
      console.log(session);
    })();
  }, []);
  return (
    <div className={styles.loginContainer}>
      <button onClick={() => signIn("kakao")}>카카오</button>
      <button onClick={() => signIn("google")}>구글</button>
      <button onClick={() => signIn("naver")}>네이버</button>
      <button onClick={() => signOut()}>로그아웃</button>
      <button onClick={() => console.log(new Date(1702569530))}></button>
    </div>
  );
}
