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

/**
 *  1. 상품 등록
 *  -
 *  2. 주문 현황
 *  - 주문 진행단계
 *  3. 회원 보기
 *  4. 매출 보기
 */
