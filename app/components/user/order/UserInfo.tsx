"use client";

import { useDaumPostcodePopup } from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
import type { UserType } from "@/app/types/UserType";
import { flex } from "@/app/style/common/common.css";

interface UserInfoProps {
  userInfo: UserType;
  setUserInfo: React.Dispatch<React.SetStateAction<UserType>>;
}

export default function UserInfo({ userInfo, setUserInfo }: UserInfoProps) {
  const open = useDaumPostcodePopup();

  const handleChangeAddr = (data: Address) => {
    setUserInfo((prev) => ({
      ...prev,
      postCode: data.zonecode,
      address: data.address,
    }));
  };

  const handleChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.alt;
    const value = e.target.value;
    setUserInfo((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <input
        alt="name"
        type="text"
        value={userInfo?.name || ""}
        placeholder="이름"
        onChange={(e) => handleChangeInfo(e)}
      />
      <input
        alt="email"
        type="text"
        value={userInfo?.email || ""}
        placeholder="이메일"
        onChange={(e) => handleChangeInfo(e)}
      />
      <input
        alt="phone"
        type="text"
        placeholder="전화번호"
        value={userInfo?.phone || ""}
        onChange={(e) => handleChangeInfo(e)}
      />
      <section className={flex({ direction: "col" })}>
        <input
          type="text"
          placeholder="우편번호"
          value={userInfo?.postCode || ""}
          readOnly
        />
        <input
          type="text"
          placeholder="주소"
          value={userInfo?.address || ""}
          readOnly
        />
        <input
          alt="addressDetail"
          type="text"
          placeholder="상세주소"
          value={userInfo?.addressDetail || ""}
          onChange={(e) => handleChangeInfo(e)}
        />
        <button onClick={() => open({ onComplete: handleChangeAddr })}>
          주소 찾기
        </button>
      </section>
    </>
  );
}
