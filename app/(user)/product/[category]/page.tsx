import ItemList from "@/app/components/product/ItemList";
import * as styles from "./product.css";
import { getItemByCategory } from "@/app/lib/actions/postAction/post.action";

interface ProductProps {
  params: {
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Product({ params, searchParams }: ProductProps) {
  const pageNumber = Number(searchParams.page as string);
  const category = params.category;
  const { items, totalPost } = await getItemByCategory({
    category,
    pageNumber,
  });
  return (
    <div className={styles.productContainer}>
      <h1>{category}</h1>
      <ItemList items={items} />
    </div>
  );
}
