export const formatPhoneNumber = (phoneNumber: string | undefined) => {
  // 숫자만 추출
  if (!phoneNumber) return undefined;
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  // 전화번호의 길이에 따라 하이픈 추가
  const match = cleaned.match(/^(\d{2,3})(\d{3,4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phoneNumber;
};
