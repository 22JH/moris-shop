/**
 *  @param title url 형태로 변경 할 글 제목
 *  @returns 특수문자, 공백을 "-"로 치환한 string
 */
export const titleToUrl = (title: string) => {
  const url = title.replace(/[^\w\s가-힣]/gi, "").replace(/ /g, "-");
  return url;
};
