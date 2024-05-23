import { vars } from "@/app/style/theme.css";
import { style } from "@vanilla-extract/css";

export const icon = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, calc(-50% + 4px))",
  fontSize: 20,
  fontWeight: "bold",
  color: "navy"
});

export const TopbarContainer = style({
  position: "relative",
  width: "100vw",
  height: vars.size.navbarHeight.desktop,
  transition: "transform 0.4s",
  "@media": {
    "(max-width: 574px)": {
      height: vars.size.navbarHeight.mobile,
    },
  },
});
