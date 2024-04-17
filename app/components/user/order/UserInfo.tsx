"use client";

import { useDaumPostcodePopup } from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
import type { UserType } from "@/app/types/UserType";
import { boxSize, flex } from "@/app/style/common/common.css";
import * as styles from "./userInfo.css";
import { formatPhoneNumber } from "@/app/lib/utils/formatPhoneNumber";
import { validateUserInfo } from "@/app/lib/utils/payments/validateUserInfo";
import { updateUser } from "@/app/lib/actions/userAction/signup.action";

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
    const key = e.target.name;
    let value = e.target.value;
    if (key === "phone") value = formatPhoneNumber(value) || "";
    setUserInfo((prev) => ({ ...prev, [key]: value }));
  };
  const handleSaveDefault = async () => {
    if (validateUserInfo(userInfo)) await updateUser(userInfo);
  };
  return (
    <section className={styles.userInfoFrame}>
      <section>
        <p>이름</p>
        <input
          name="name"
          type="text"
          value={userInfo?.name || ""}
          onChange={handleChangeInfo}
          className={boxSize({ width: "medium", height: "small" })}
        />
      </section>
      <section>
        <p>전화번호</p>
        <input
          name="phone"
          type="text"
          placeholder="전화번호"
          value={formatPhoneNumber(userInfo?.phone) || ""}
          onChange={handleChangeInfo}
          className={boxSize({ width: "medium", height: "small" })}
        />
      </section>
      <section>
        <p>이메일</p>
        <input
          name="email"
          type="text"
          value={userInfo?.email}
          placeholder="이메일"
          className={boxSize({ width: "large", height: "small" })}
          readOnly
        />
      </section>
      <section className={flex({ direction: "col" })}>
        <p>주소</p>
        <section>
          <input
            type="text"
            placeholder="우편번호"
            value={userInfo?.postCode || ""}
            className={boxSize({ width: "small", height: "small" })}
            readOnly
          />
          <button onClick={() => open({ onComplete: handleChangeAddr })}>
            주소 찾기
          </button>
        </section>
        <input
          type="text"
          placeholder="주소"
          value={userInfo?.address || ""}
          className={boxSize({ width: "full", height: "small" })}
          readOnly
        />
        <input
          name="addressDetail"
          type="text"
          placeholder="상세주소"
          value={userInfo?.addressDetail || ""}
          className={boxSize({ width: "full", height: "small" })}
          onChange={handleChangeInfo}
        />
      </section>
      <button onClick={handleSaveDefault}>기본 정보로 저장</button>
    </section>
  );
}
