"use client";

import { useState } from "react";
import * as styles from "./login.css";

export default function Login() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleId = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setId(e.target.value);
  };

  const handlePassword = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {};
  return (
    <div className={styles.loginContainer}>
      <input type="text" onBlur={(e) => handleId(e)} />
      <input type="password" onBlur={(e) => handlePassword(e)} />

      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}
