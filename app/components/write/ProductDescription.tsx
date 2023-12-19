import * as styles from "./ProductDescription.css";

export default function ProductDescription() {
  return (
    <div className={styles.productDescriptionContainer}>
      <input type="text" className={styles.productTitle} />
      <input type="text" className={styles.productDescription} />
      <br />
      <div className={styles.productPrice}>
        <input type="number" />
      </div>
    </div>
  );
}
