import Link from "next/link";
import * as styles from "./Menus.css";
import { menus } from "../../constants/menus";

interface PropType {
  handleClickedNavbar: () => void;
}

export default function Menus({ handleClickedNavbar }: PropType) {
  return (
    <div className={styles.menusConatiner}>
      <div className={styles.auth}>
        <Link onClick={() => handleClickedNavbar()} href="/login">
          로그인
        </Link>
        <Link href="/sign-in">회원가입</Link>
      </div>
      <div className={styles.items}>
        {menus.map((menu) => {
          return <p key={menu.category}>{menu.category}</p>;
        })}
      </div>
      <div className={styles.notice}></div>
    </div>
  );
}
