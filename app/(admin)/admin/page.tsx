import Link from "next/link";

export default function Admin() {
  return (
    <div>
      <Link href="/admin/regist-item">상품 등록</Link>
      <Link href="/admin/orders">주문 현황</Link>
      <Link href="/admin/members">회원 보기</Link>
      <Link href="/admin/sales">매출 보기</Link>
    </div>
  );
}
