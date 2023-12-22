import * as styles from "./ProductDescription.css";

interface ProductDescriptionProps {
  handlTitle: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  handleDescription: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  handlePrice: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}

export default function ProductDescription({
  handlTitle,
  handleDescription,
  handlePrice,
}: ProductDescriptionProps) {
  return (
    <div className={styles.productDescriptionContainer}>
      <input
        type="text"
        className={styles.productTitle}
        onBlur={(e) => handlTitle(e)}
      />
      <input
        type="text"
        className={styles.productDescription}
        onBlur={(e) => handleDescription(e)}
      />
      <br />
      <div className={styles.productPrice}>
        <input type="number" onBlur={(e) => handlePrice(e)} />
        <p>원</p>
      </div>
    </div>
  );
}
