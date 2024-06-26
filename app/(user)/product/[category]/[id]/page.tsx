import ProductDetailInfo from "@/app/components/product/productDetail/ProductDetailInfo";
import { getItem } from "@/app/lib/actions/itemsAction/items.action";
import * as styles from "./productDetails.css";

interface ProductDeatilProps {
  params: {
    category: string;
    id: string;
  };
}

export default async function ProductDetail({ params }: ProductDeatilProps) {
  const id = params.id.split("-")[0];
  const item = await getItem({ id });
  return (
    <div className={styles.productDetailFrame}>
      <ProductDetailInfo item={item} />
      <hr className={styles.hrStyle} />
      <div dangerouslySetInnerHTML={{ __html: item.contents }} />
    </div>
  );
}
