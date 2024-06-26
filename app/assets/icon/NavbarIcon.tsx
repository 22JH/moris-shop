import { vars } from "@/app/style/theme.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./NavbarIcon.css";

interface PropType {
  handleClickedNavbar: () => void;
  clickedNavbar: boolean;
}

export default function NavbarIcon({
  handleClickedNavbar,
  clickedNavbar,
}: PropType) {
  return (
    <div
      onClick={() => handleClickedNavbar()}
      className={styles.navbarIconContainer}
    >
      <svg
        className={`${clickedNavbar && styles.activeButton} ${styles.svgStyle}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.9989 6.10345C2.4469 6.10345 1.9989 6.55145 1.9989 7.10345C1.9989 7.65545 2.4469 8.10345 2.9989 8.10345H20.9989C21.5509 8.10345 21.9989 7.65545 21.9989 7.10345C21.9989 6.55145 21.5509 6.10345 20.9989 6.10345H2.9989ZM2.9989 11.1035C2.4469 11.1035 1.9989 11.5515 1.9989 12.1035C1.9989 12.6555 2.4469 13.1035 2.9989 13.1035H20.9989C21.5509 13.1035 21.9989 12.6555 21.9989 12.1035C21.9989 11.5515 21.5509 11.1035 20.9989 11.1035H2.9989ZM2.9989 16.1035C2.4469 16.1035 1.9989 16.5515 1.9989 17.1035C1.9989 17.6555 2.4469 18.1035 2.9989 18.1035H20.9989C21.5509 18.1035 21.9989 17.6555 21.9989 17.1035C21.9989 16.5515 21.5509 16.1035 20.9989 16.1035H2.9989Z"
          style={assignInlineVars({
            fill: clickedNavbar
              ? vars.font.color.accentColor
              : vars.backgroundColor.pointColor,
          })}
        />
      </svg>
    </div>
  );
}
