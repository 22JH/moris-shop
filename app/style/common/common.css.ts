import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme.css";

export const flex = recipe({
  base: {
    display: "flex",
  },
  variants: {
    justify: {
      center: {
        justifyContent: "center",
      },
      between: {
        justifyContent: "space-between",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
    },
    direction: {
      row: {
        flexDirection: "row",
      },
      col: {
        flexDirection: "column",
      },
    },
  },
});

export const centerPosition = recipe({
  base: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  },
});

export const font = recipe({
  variants: {
    size: {
      small: {
        fontSize: vars.font.size.small,
      },
      medium: {
        fontSize: vars.font.size.medium,
      },
      large: {
        fontSize: vars.font.size.large,
      },
      xLarge: {
        fontSize: vars.font.size.xLarge,
      },
    },
  },
});
