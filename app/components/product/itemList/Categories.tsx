"use client";

import { menus } from "@/app/constants/menus";
import * as styles from "./categories.css";
import Link from "next/link";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/app/lib/hooks/useIntersectionObserver";

interface CateogriesProps {
  currentCategory: string;
}

export default function Categories({ currentCategory }: CateogriesProps) {
  const { setTarget, isObserved } = useIntersectionObserver();
  return (
    <section
      className={`${!isObserved && styles.stuckOnTopStyle} ${
        styles.categoriesFrame
      }`}
      ref={setTarget}
    >
      {menus.map((menu) => {
        const isActive = currentCategory === menu.category;
        return (
          <Link
            href={menu.url}
            key={menu.category}
            className={`${isActive && styles.activeButton} ${
              styles.categoryItem
            }`}
          >
            {menu.category}
          </Link>
        );
      })}
    </section>
  );
}
