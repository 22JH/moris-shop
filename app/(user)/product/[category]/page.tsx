import ItemList from "@/app/components/product/itemList/ItemList";
import * as styles from "./product.css";
import { getItemByCategory } from "@/app/lib/actions/itemsAction/items.action";
import Categories from "@/app/components/product/itemList/Categories";
import PaginationBar from "@/app/components/common/PaginationBar";

interface ProductProps {
  params: {
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Product({ params, searchParams }: ProductProps) {
  const pageNumber = Number(searchParams.page as string);
  const category = params.category;
  const { items, totalPost, totalPage } = await getItemByCategory({
    category,
    pageNumber,
  });
  return (
    <div className={styles.productContainer}>
      <Categories currentCategory={category} />
      <ItemList items={items} />
      <PaginationBar
        currentPage={pageNumber}
        totalPage={totalPage}
        category={category}
      />
    </div>
  );
}
