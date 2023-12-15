import ItemList from "@/app/components/product/ItemList";
import * as styles from "./product.css";

interface ProductProps {
  params: {
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Product({ params, searchParams }: ProductProps) {
  const page = Number(searchParams.page as string);
  const category = params.category;
  return (
    <div className={styles.productContainer}>
      <h1>{category}</h1>
      <ItemList />
    </div>
  );
}
