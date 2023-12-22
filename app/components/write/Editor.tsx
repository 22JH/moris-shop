"use client";

import * as styles from "./Editor.css";
import { useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "@looop/quill-image-resize-module-react";
import Thumbnail from "./Thumbnail";
import ProductDescription from "./ProductDescription";
Quill.register("modules/ImageResize", ImageResize);

export default function Editor() {
  const [thumbnail, setThumbnails] = useState<(string | ArrayBuffer | null)[]>(
    []
  );
  const [contents, setContents] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const addThumbanil = (uri: string | ArrayBuffer | null) => {
    setThumbnails((prev) => [...prev, uri]);
  };

  const deleteThumbnail = (index: number) => {
    const newThumbnails = thumbnail.filter((_, thumbnailIndex) => {
      return index !== thumbnailIndex;
    });
    setThumbnails(newThumbnails);
  };

  const handleTitle = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setTitle(e.target.value);
  };

  const handleDescription = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    setDescription(e.target.value);
  };

  const handlePrice = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setPrice(Number(e.target.value));
  };
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

  const handleSubmit = () => {
    if (!(title && price && description)) {
      alert("다 채워야지?");
      return;
    }
    if (!contents) {
      alert("내용 써야지?");
      return;
    }
  };
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
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
      <div className={styles.inner}>
        <div className={styles.productDetail}>
          <Thumbnail
            addThumbanil={addThumbanil}
            thumbnail={thumbnail}
            deleteThumbnail={deleteThumbnail}
          />
          <ProductDescription
            handlTitle={handleTitle}
            handlePrice={handlePrice}
            handleDescription={handleDescription}
          />
        </div>
        <ReactQuill
          modules={modules}
          className={styles.editorStyle}
          onChange={setContents}
        />
        <button className={styles.submitBtn} onClick={() => handleSubmit()}>
          등록하기
        </button>
        <button>미리보기</button>
      </div>
    </div>
  );
}
