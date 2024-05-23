import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  backgroundColor: {
    bodyColor: "#F8F9FB",
    pointColor: "#212121",
  },
  borderColor: {
    medium: "#212121"
  },
  font: {
    size: {
      small: "12px",
      medium: "16px",
      large: "20px",
      xLarge: "24px",
    },
    color: {
      normalColor: "#F8F9FB",
      accentColor: "rgb(255 ,69 ,0)",
    },
    fontWeight: {
      thin: "400",
      medium: "500",
      bold: "700",
    }
  },
  size: {
    navbarHeight: {
      desktop: "99px",
      mobile: "76px",
    },
  },
  mediaQuery: {
    mobile: "576px",
    tablet: "768px",
  },
});
