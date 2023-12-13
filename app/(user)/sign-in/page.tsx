"use client";

import { useState } from "react";
import * as styles from "./agreement.css";
import { useRouter } from "next/navigation";

export default function Agreement() {
  const router = useRouter();

  const [checkConfirm, setCheckConfirm] = useState<string[]>([]);

  const handleCheckConfirm = (checked: boolean, id: string) => {
    if (checked) {
      setCheckConfirm([...checkConfirm, id]);
    } else {
      setCheckConfirm(checkConfirm.filter((button) => button !== id));
    }
    console.log(checkConfirm);
  };

  const handleNextButton = () => {
    if (checkConfirm.length === 2) {
      router.push("/sign-in/join");
    } else {
      alert("123");
    }
  };

  return (
    <div className={styles.agreementContainer}>
      <input type="checkbox" />
      <input
        type="checkbox"
        onChange={(e) => handleCheckConfirm(e.currentTarget.checked, "check1")}
        checked={checkConfirm.includes("check1") ? true : false}
      />
      <input
        type="checkbox"
        onChange={(e) => handleCheckConfirm(e.currentTarget.checked, "check2")}
        checked={checkConfirm.includes("check2") ? true : false}
      />
      <button onClick={() => handleNextButton()}>다음</button>
    </div>
  );
}
