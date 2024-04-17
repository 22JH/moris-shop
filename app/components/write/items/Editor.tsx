"use client";

import * as styles from "./Editor.css";
import { useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "@looop/quill-image-resize-module-react";
import Thumbnail from "./Thumbnail";
import ProductDescription from "./ProductDescription";
import { uploadImage } from "@/app/lib/actions/itemsAction/uploadImage.action";
import { createItem } from "@/app/lib/actions/itemsAction/items.action";
Quill.register("modules/ImageResize", ImageResize);

export default function Editor() {
  const [thumbnails, setThumbnails] = useState<(string | ArrayBuffer | null)[]>(
    []
  );
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("OUTER");
  const [price, setPrice] = useState<number>(0);
  const [contents, setContents] = useState<string>("");

  const editorRef = useRef<ReactQuill | null>();

  /** 썸네일 추가 */
  const addThumbanil = (uri: string | ArrayBuffer | null) => {
    setThumbnails((prev) => [...prev, uri]);
  };

  /** 썸네일 삭제 */
  const deleteThumbnail = (index: number) => {
    const newThumbnails = thumbnails.filter((_, thumbnailIndex) => {
      return index !== thumbnailIndex;
    });
    setThumbnails(newThumbnails);
  };

  /** 상품명 변경 */
  const handleTitle = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setTitle(e.target.value);
  };

  /** 상품 간단 설명 변경 */
  const handleDescription = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    setDescription(e.target.value);
  };

  /** 카테고리 변경 */
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  /** 가격 변경 */
  const handlePrice = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setPrice(Number(e.target.value));
  };

  /** 에디터 이미지 파이어베이스 업로드 */
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      const file: File | null = input?.files ? input.files[0] : null;
      if (!file) return;
      const editor = editorRef.current?.getEditor();
      /** 커서 위치 */
      const range = editor?.getSelection();
      /** 로딩중 삽입 */
      editor?.insertEmbed(range?.index!, "image", `/loading.gif`);
      try {
        const url = await uploadImage(file);
        editor?.deleteText(range?.index!, 1);
        editor?.insertEmbed(range?.index!, "image", url);
      } catch (error) {
        throw new Error(`이미지 삽입 중 오류 ${error}`);
      }
    };
  };

  /** 등록 버튼 클릭 시 */
  const handleSubmit = async () => {
    if (!(title && price && description)) {
      alert("다 채워야지?");
      return;
    }
    if (!contents) {
      alert("내용 써야지?");
      return;
    }

    const thumbnailsUrl = await Promise.all(
      thumbnails.map(async (url) => {
        const blob = await fetch(url as string).then((response) =>
          response.blob()
        );
        return uploadImage(blob);
      })
    );

    await createItem({
      contents,
      description,
      category,
      price,
      thumbnails: thumbnailsUrl,
      title,
    });
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

        handlers: { image: imageHandler },
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
            thumbnails={thumbnails}
            deleteThumbnail={deleteThumbnail}
          />
          <ProductDescription
            handlTitle={handleTitle}
            handlePrice={handlePrice}
            handleDescription={handleDescription}
            handleCategory={handleCategory}
            category={category}
          />
        </div>
        <ReactQuill
          modules={modules}
          className={styles.editorStyle}
          onChange={setContents}
          ref={(element) => {
            if (element !== null) {
              editorRef.current = element;
            }
          }}
        />
        <button className={styles.submitBtn} onClick={() => handleSubmit()}>
          등록하기
        </button>
      </div>
    </div>
  );
}
