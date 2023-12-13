import { signUpType } from "@/app/types/signUpType";

export default function signUpValidation(type: string, value: signUpType) {
  const errors: signUpType = {};
  if (type === "name") {
    if (!value.name) {
      errors.name = "이름이 입력되지 않았습니다.";
    } else {
      errors.name = "";
    }
  }

  if (type === "email") {
    if (!value.email) {
      errors.email = "이메일이 입력되지 않았습니다.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
      errors.email = "입력된 이메일이 유효하지 않습니다.";
    } else {
      errors.email = "";
    }
  }

  if (type === "id") {
    if (!value.id) {
      errors.id = "아이디가 입력되지 않았습니다.";
    } else {
      errors.id = "";
    }
  }

  if (type === "password") {
    if (!value) {
      errors.password = "비밀번호가 입력되지 않았습니다.";
    } else if (value.password!.length < 8) {
      errors.password = "8자 이상의 패스워드를 사용해야 합니다.";
    } else {
      errors.password = "";
    }
  }

  if (type === "passwordConfirm") {
    if (!value.passwordConfirm) {
      errors.passwordConfirm = "비밀번호 확인이 입력되지 않았습니다.";
    } else if (value.password !== value.passwordConfirm) {
      errors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    } else {
      errors.passwordConfirm = "";
    }
  }

  if (type === "phone") {
    if (!value.phone) {
      errors.phone = "휴대폰 번호가 입력되지 않았습니다.";
    } else {
      errors.phone = "";
    }
  }
  /*
   */

  /*
  else if (Some regex validation) {
    errors.id = 'Some error text';
  } 
  */

  return errors;
}
