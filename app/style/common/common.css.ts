import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme.css";

export const flex = recipe({
  base: {
    display: "flex",
  },
  variants: {
    justify: {
      start: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center",
      },
      between: {
        justifyContent: "space-between",
      },
      end: {
        justifyContent: "flex-end"
      }
    },
    align: {
      start: {
        alignItems: "flex-start"
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end"
      }
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
    flex: {
      1: {
        flex: 1
      },
    }
  },
});

export const centerAbsolute = recipe({
  base: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
    weight: {
      500: {
        fontWeight: 500
      },
      600: {
        fontWeight: 600
      },
      700: {
        fontWeight: 700
      },
      800: {
        fontWeight: 800
      },
      900: {
        fontWeight: 900
      },
    }
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
