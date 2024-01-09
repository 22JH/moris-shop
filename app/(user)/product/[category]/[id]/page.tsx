import { getItem } from "@/app/lib/actions/postAction/post.action";

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
    <div>
      <h1>상품명 : {item.title}</h1>
      <h2>상품 설명 : {item.description}</h2>
      <h2>가격 : {item.price}</h2>
      <h2>카테고리 : {item.category}</h2>
      <div dangerouslySetInnerHTML={{ __html: item.contents }} />
    </div>
  );
}
