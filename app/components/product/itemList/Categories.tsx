import { menus } from "@/app/constants/menus";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./categories.css";
import Link from "next/link";

interface CateogriesProps {
  currentCategory: string;
}

export default function Categories({ currentCategory }: CateogriesProps) {
  return (
    <section className={styles.categoriesFrame}>
      {menus.map((menu) => {
        const active = currentCategory === menu.category;
        return (
          <Link
            href={menu.url}
            key={menu.category}
            style={assignInlineVars({
              color: active ? "yellow" : "black",
            })}>
            {menu.category}
          </Link>
        );
      })}
    </section>
  );
}
