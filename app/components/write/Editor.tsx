"use client";

import * as styles from "./Editor.css";

import { useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize";
Quill.register("modules/ImageResize", ImageResize);

export default function Editor() {
  // const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState("");

  // const imageHandler = () => {
  // 	// 파일을 업로드 하기 위한 input 태그 생성
  //   const input = document.createElement("input");
  //   const formData = new FormData();
  //   let url = "";

  //   input.setAttribute("type", "file");
  //   input.setAttribute("accept", "image/*");
  //   input.click();

  //   input.onchange = async () => {
  //     const file = input.files;
  //     if (file !== null) {
  //       formData.append("image", file[0]);
  //       try {
  //         const res = axios를 통해 백엔드 개발자분과 통신했고, 데이터는 폼데이터로 주고받았습니다.

  //         url = res.data.url;

  //         const range = QuillRef.current?.getEditor().getSelection()?.index;
  //         if (range !== null && range !== undefined) {
  //           let quill = QuillRef.current?.getEditor();

  //           quill?.setSelection(range, 1);

  //           quill?.clipboard.dangerouslyPasteHTML(
  //             range,
  //             `<img src=${url} alt="이미지 태그가 삽입됩니다." />`
  //           );
  //         }

  //         return { ...res, success: true };
  //       } catch (error) {
  //         const err = error as AxiosError;
  //         return { ...err.response, success: false };
  //       }
  //     }
  //   };
  // };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],

          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],

        // handlers: { image: imageHandler },
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
      },
    }),
    []
  );

  return (
    <div className={styles.editorContainer}>
      <ReactQuill
        style={{ width: "800px", height: "600px" }}
        modules={modules}
        className={styles.editorStyle}
        onChange={setContents}
      />
    </div>
  );
}
