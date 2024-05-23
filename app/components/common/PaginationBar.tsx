import Link from "next/link";
import * as styles from "./paginationBar.css";

interface PaginationBarProps {
  currentPage: number;
  totalPage: number;
  category: string;
}

export default function PaginationBar({
  currentPage,
  totalPage,
  category,
}: PaginationBarProps) {
  let pageNumbers = [];
  const startPageGroup = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const endPageGroup = Math.min(totalPage, startPageGroup + 4);

  for (let i = startPageGroup; i <= endPageGroup; i++) {
    pageNumbers.push(i);
  }

  const nextPageGroupStart = endPageGroup + 1;
  const prevPageGroupStart = startPageGroup - 5;

  return (
    <section className={styles.paginationBarFrame}>
      {startPageGroup > 1 && (
        <Link
          href={`/product/${category}?page=${prevPageGroupStart}`}
          className={styles.paginationButton}
        >
          {"<<"}
        </Link>
      )}
      {pageNumbers.map((number) => {
        const isActive = number === currentPage;
        return (
          <Link
            key={number}
            href={`/product/${category}?page=${number}`}
            className={`${isActive && styles.activeButton} ${
              styles.paginationButton
            }`}
          >
            {number}
          </Link>
        );
      })}
      {totalPage > endPageGroup && (
        <Link
          href={`/product/${category}?page=${nextPageGroupStart}`}
          className={styles.paginationButton}
        >
          {">>"}
        </Link>
      )}
    </section>
  );
}
