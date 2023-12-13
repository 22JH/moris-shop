"use client";

import * as styles from "./signIn.css";
import { useState } from "react";
import { signUpType } from "@/app/types/signUpType";
import signUpValidation from "@/app/hooks/useForm/signUpValidation";

export default function SignIn() {
  const [form, setForm] = useState<signUpType>({
    id: "",
    password: "",
    passwordConfirm: "",
    name: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState<signUpType>({
    id: "",
    password: "",
    passwordConfirm: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (
    event: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const errors = signUpValidation(event.target.name, form);
    setError((prev) => ({ ...prev, ...errors }));
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  console.log(error);
  return (
    <div className={styles.signInContainer}>
      <input
        type="text"
        name="id"
        placeholder="아이디"
        onBlur={handleInputChange}
      />
      {error.id && <p>{error.id}</p>}
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        onBlur={handleInputChange}
      />
      {error.password && <p>{error.password}</p>}
      <input
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        onBlur={handleInputChange}
      />
      {error.passwordConfirm && <p>{error.passwordConfirm}</p>}
      <input
        type="text"
        name="name"
        placeholder="이름"
        onBlur={handleInputChange}
      />
      {error.name && <p>{error.name}</p>}
      <input
        type="tel"
        name="phone"
        placeholder="휴대전화"
        onBlur={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="이메일"
        onBlur={handleInputChange}
      />
      <button type="submit">회원가입</button>
    </div>
  );
}

/** 아이디
 * 비밀번호
 * 비밀번호 확인
 * 이름
 * 휴대전화
 * 이메일
 */
