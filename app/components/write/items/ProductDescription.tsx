import { menus } from "@/app/constants/menus";
import * as styles from "./ProductDescription.css";

interface ProductDescriptionProps {
  handlTitle: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  handleDescription: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  handlePrice: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  handleCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  category: string;
}

export default function ProductDescription({
  handlTitle,
  handleDescription,
  handlePrice,
  handleCategory,
  category,
}: ProductDescriptionProps) {
  return (
    <div className={styles.productDescriptionContainer}>
      <input
        type="text"
        className={styles.productTitle}
        onBlur={(e) => handlTitle(e)}
        placeholder="상품명"
      />
      <input
        type="text"
        className={styles.productDescription}
        onBlur={(e) => handleDescription(e)}
        placeholder="상품 설명"
      />
      <select value={category} onChange={(e) => handleCategory(e)}>
        {menus.map((menus, idx) => {
          /** menus의 All 카테고리 제외 */
          if (idx !== 0) {
            return (
              <option value={menus.category} key={menus.category}>
                {menus.category}
              </option>
            );
          }
        })}
      </select>
      <div className={styles.productPrice}>
        <input
          type="number"
          onBlur={(e) => handlePrice(e)}
          className={styles.productPriceInput}
        />
        <p>원</p>
      </div>
    </div>
  );
}
