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
    wrap: {
      nowrap: {
        flexWrap: "nowrap",
      },
      wrap: {
        flexWrap: "wrap",
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

export const boxSize = recipe({
  variants: {
    width: {
      small: {
        width: 100,
      },
      medium: {
        width: 170,
      },
      large: {
        width: 250,
      },
      full: {
        width: "100%",
      },
    },
    height: {
      small: {
        height: 40,
      },
      meidum: {
        height: 70,
      },
      large: {
        height: 100,
      },
    },
  },
});
