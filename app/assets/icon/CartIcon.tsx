import { vars } from "@/app/style/theme.css";
import * as styles from "./CartIcon.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { usePathname } from "next/navigation";

export default function CartIcon() {
  const pathname = usePathname();
  const isWishListPage = pathname.includes("wishlist");
  console.log(isWishListPage);
  return (
    <div className={styles.cartIconContainer}>
      <svg
        className={`${isWishListPage && styles.activeButton} ${
          styles.svgStyle
        }`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 13.25C10.4142 13.25 10.75 13.5858 10.75 14V16C10.75 16.4142 10.4142 16.75 10 16.75C9.58579 16.75 9.25 16.4142 9.25 16V14C9.25 13.5858 9.58579 13.25 10 13.25Z"
          style={assignInlineVars({ fill: vars.backgroundColor.pointColor })}
        />
        <path
          d="M14.75 14C14.75 13.5858 14.4142 13.25 14 13.25C13.5858 13.25 13.25 13.5858 13.25 14V16C13.25 16.4142 13.5858 16.75 14 16.75C14.4142 16.75 14.75 16.4142 14.75 16V14Z"
          style={assignInlineVars({ fill: vars.backgroundColor.pointColor })}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.64952 3.375C9.85662 3.01628 9.73372 2.55759 9.375 2.35048C9.01628 2.14338 8.55759 2.26628 8.35048 2.625L6.35048 6.0891C6.32052 6.141 6.29746 6.19499 6.28103 6.25H6C4.48122 6.25 3.25 7.48122 3.25 9C3.25 9.85913 3.64397 10.6262 4.26109 11.1305L4.92803 15.7152L5.37478 17.8084C5.64244 19.0625 6.66623 20.0151 7.93636 20.1918C10.6325 20.567 13.3675 20.567 16.0636 20.1918C17.3338 20.0151 18.3576 19.0625 18.6252 17.8084L19.072 15.7152L19.7389 11.1305C20.356 10.6262 20.75 9.85913 20.75 9C20.75 7.48122 19.5188 6.25 18 6.25H17.719C17.7025 6.19499 17.6795 6.141 17.6495 6.0891L15.6495 2.625C15.4424 2.26628 14.9837 2.14338 14.625 2.35048C14.2663 2.55759 14.1434 3.01628 14.3505 3.375L16.0104 6.25H7.98963L9.64952 3.375ZM18.1335 11.7468C18.0892 11.7489 18.0447 11.75 18 11.75H6C5.95525 11.75 5.91076 11.7489 5.86653 11.7468L6.4053 15.4504L6.84174 17.4953C6.97772 18.1324 7.49783 18.6163 8.14308 18.7061C10.702 19.0622 13.298 19.0622 15.8569 18.7061C16.5022 18.6163 17.0223 18.1324 17.1583 17.4953L17.5947 15.4504L18.1335 11.7468ZM4.75 9C4.75 8.30965 5.30964 7.75 6 7.75H18C18.6904 7.75 19.25 8.30965 19.25 9C19.25 9.69036 18.6904 10.25 18 10.25H6C5.30964 10.25 4.75 9.69036 4.75 9Z"
          style={assignInlineVars({ fill: vars.backgroundColor.pointColor })}
        />
      </svg>
    </div>
  );
}
