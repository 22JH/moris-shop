import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  backgroundColor: {
    bodyColor: "rgb(175, 204, 180)",
    pointColor: "rgb(50, 82, 56)",
  },
  fontColor: {
    accentColor: "rgb(255 ,69 ,0)",
  },
  size: {
    navbarHeight: {
      desktop: "80px",
      mobile: "60px",
    },
  },
  mediaQuery: {
    mobile: "576px",
    tablet: "768px",
  },
});

// export const orange = {
//   100: "rgb(255,69,0)",
// };

// export const orange = {
//   100: "rgb(50,82,56)",
// };
// // export const navy = {
// //   100: "rgb(13,20,34)",
// // };
// export const navy = {
//   100: "#AFCCB4",
// };
