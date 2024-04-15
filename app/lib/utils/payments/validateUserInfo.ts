import { UserType } from "@/app/types/UserType";

export const validateUserInfo = (user: UserType) => {
  if (!user.name) {
    alert("이름을 입력해 주세요");
    return false;
  }
  if (!user.email) {
    alert("이메일을 입력해 주세요");
    return false;
  }
  if (!user.phone) {
    alert("연락처를 입력해 주세요");
    return false;
  }
  if (!user.postCode || !user.address || !user.addressDetail) {
    alert("주소를 입력해 주세요");
    return false;
  }
  return true;
};
