/* eslint-disable no-useless-computed-key */
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    info2: true;
    info3: true;
    info4: true;
    body3: true;
    body4: true;
    body5: true;
    input: true;
    links: true;
    smallLinks: true;
    labels: true;
    smallLabels: true;
    button: true;
    h7: true;
    h8: true;
    h9: true;
    subtitle3: true;
    subtitle4: true;
    subtitle5: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    verified: Palette["primary"];
    textPrimary: Palette["primary"];
    textSecondary: Palette["primary"];
    textSecondary2: Palette["primary"];
    textSecondary3: Palette["primary"];
    textSecondary4: Palette["primary"];
    textSecondary5: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    verified?: PaletteOptions["primary"];
    textPrimary?: PaletteOptions["primary"];
    textSecondary?: PaletteOptions["primary"];
    textSecondary2?: PaletteOptions["primary"];
    textSecondary3?: PaletteOptions["primary"];
    textSecondary4?: PaletteOptions["primary"];
    textSecondary5?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    [800]?: string;
    [700]?: string;
    [600]?: string;
    [500]?: string;
    [502]?: string;
    [400]?: string;
    [300]?: string;
    [200]?: string;
    [100]?: string;
  }
  interface SimplePaletteColorOptions {
    [800]?: string;
    [700]?: string;
    [600]?: string;
    [500]?: string;
    [502]?: string;
    [400]?: string;
    [300]?: string;
    [200]?: string;
    [100]?: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    verified: true;
  }
  interface ButtonPropsSizeOverrides {
    XL: true;
    LG: true;
    LG_MD: true;
    LG_SM: true;
    LG_MD_SM: true;
    MD: true;
    SM: true;
    XS: true;
  }
}

const defaultTheme = createTheme({
  palette: {
    neutral: {
      [800]: "#1B1D21",
      [700]: "#252A32",
      [600]: "#485469",
      [500]: "#8A94A6",
      [502]: "#A7ADB5",
      [400]: "#E1E8ED",
      [300]: "#F5F5F6",
      [200]: "#FBFBFD",
      [100]: "#FFFFFF",
    },
    primary: {
      main: "#3360FF",
      dark: "#4D73F6",
      [800]: "#D16040",
      [700]: "#F06745",
      [600]: "#F0CDC4",
    },
    secondary: {
      main: "#D16040",
      dark: "#F06745",
      [800]: "#3360FF",
      [700]: "#4D73F6",
      [600]: "#9DB1F9",
      [500]: "#D7DFFC",
      [400]: "#E7EFFF",
    },
    success: {
      [800]: "#74BE29",
      [700]: "#9DC864",
      [600]: "#B5D689",
      [500]: "#D9EBC3",
    },
    warning: {
      [800]: "#F96F22",
      [700]: "#EC915B",
      [600]: "#F0AC82",
      [500]: "#F5C7AB",
    },
    error: {
      800: "#E33509",
      700: "#D96546",
      600: "#E18B71",
      500: "#EAB1A0",
    },
    grey: {
      100: "#FBFBFD",
      300: "#E1E8ED",
    },
    verified: {
      main: "rgba(116, 190, 41, 0.14)",
    },
    textPrimary: {
      main: "#252A32",
    },
    textSecondary: {
      main: "#485469",
    },
    textSecondary2: {
      main: "#8A94A6",
    },
    textSecondary3: {
      main: "#A7ADB5",
    },
    textSecondary4: {
      main: "#E7EFFF",
    },
    textSecondary5: {
      main: "#858A94",
    },
  },
  breakpoints: {
    values: {
      // extra-small
      xs: 426,
      // small
      sm: 769,
      // medium
      md: 1110,
      // large
      lg: 1201,
      // extra-large
      xl: 1441,
    },
  },
});

const { breakpoints } = defaultTheme;

const calcSize = (start: number, end: number, min: number, max: number) => {
  const disViewport = end - start;
  const disSize = max - min;
  const k = disSize / disViewport;
  const baseSize = min - start * k;

  return `calc(${Math.round(baseSize * 100) / 100}px + ${Math.round(100 * k * 100) / 100}vw)`;
};

export const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiContainer: {
      variants: [
        {
          props: {},
          style: {
            paddingLeft: "16px !important",
            paddingRight: "16px !important",
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "h7" },
          style: {
            fontSize: 16,
            fontWeight: 600,
            lineHeight: "24px",
            fontFamily: "Work Sans",

            [breakpoints.down("sm")]: {
              lineHeight: "20px",
            },
          },
        },
        {
          props: { variant: "h8" },
          style: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: "16px",
            fontFamily: "Quicksand",

            [breakpoints.down("sm")]: {
              lineHeight: "22px",
            },
          },
        },
        {
          props: { variant: "h9" },
          style: {
            fontSize: 12,
            fontWeight: 600,
            lineHeight: "14px",
            fontFamily: "Work Sans",
          },
        },
        {
          props: { variant: "body3" },
          style: {
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "20px",
            fontFamily: "Work Sans",
          },
        },
        {
          props: { variant: "body4" },
          style: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: "20px",
            fontFamily: "Work Sans",
          },
        },
        {
          props: { variant: "body5" },
          style: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: "20px",
            fontFamily: "Work Sans",
          },
        },
        {
          props: { variant: "input" },
          style: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "24px",
            fontFamily: "Work Sans",
          },
        },
        {
          props: { variant: "links" },
          style: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "20px",
            fontFamily: "Work Sans",
            textDecoration: "underline",
          },
        },
        {
          props: { variant: "smallLinks" },
          style: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: "16px",
            fontFamily: "Work Sans",
            textDecoration: "underline",
          },
        },
        {
          props: { variant: "labels" },
          style: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: "16px",
            fontFamily: "Work Sans",
          },
        },
        {
          props: { variant: "smallLabels" },
          style: {
            fontSize: 10,
            fontWeight: 400,
            lineHeight: "14px",
            fontFamily: "Work Sans",
          },
        },
        {
          props: { variant: "button" },
          style: {
            fontSize: 16,
            fontWeight: 600,
            lineHeight: "24px",
            fontFamily: "Quicksand",
            textTransform: "inherit",
          },
        },
        {
          props: { variant: "info2" },
          style: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: "24px",
            fontFamily: "Quicksand",
            color: "#8A94A6",
          },
        },
        {
          props: { variant: "info3" },
          style: {
            fontSize: 16,
            fontWeight: 600,
            lineHeight: "24px",
            fontFamily: "Work Sans",
          },
        },
        {
          props: { variant: "info4" },
          style: {
            fontSize: 16,
            fontWeight: 700,
            fontFamily: "Quicksand",
            lineHeight: "24px",
          },
        },
        {
          props: { variant: "subtitle3" },
          style: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "20px",
            fontFamily: "Work Sans",

            [breakpoints.down("sm")]: {
              fontSize: 14,
              lineHeight: "24px",
            },
          },
        },
        {
          props: { variant: "subtitle4" },
          style: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "20px",
            fontFamily: "Work Sans",
            color: "#8A94A6",

            [breakpoints.down("sm")]: {
              fontSize: 12,
              lineHeight: "16px",
            },

            [breakpoints.down("xs")]: {
              fontSize: 14,
              lineHeight: "20px",
            },
          },
        },
        {
          props: { variant: "subtitle5" },
          style: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "20px",
            fontFamily: "Work Sans",

            [breakpoints.down("sm")]: {
              fontSize: 16,
              lineHeight: "24px",
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { color: "verified" },
          style: {
            fontFamily: "Quicksand",
            background: "rgba(116, 190, 41, 0.14)",
            color: "#74BE29",
          },
        },
        {
          props: { size: "XL" },
          style: {
            width: 311,
          },
        },
        {
          props: { size: "LG" },
          style: {
            width: 254,
          },
        },
        {
          props: { size: "LG_MD" },
          style: {
            width: 254,

            [breakpoints.down("md")]: {
              width: 160,
            },
          },
        },
        {
          props: { size: "LG_SM" },
          style: {
            width: 254,

            [breakpoints.down("sm")]: {
              width: 114,
            },
          },
        },
        {
          props: { size: "LG_MD_SM" },
          style: {
            width: 254,

            [breakpoints.down("md")]: {
              width: 160,
            },

            [breakpoints.down("sm")]: {
              fontSize: calcSize(breakpoints.values.xs, breakpoints.values.md, 12, 14),
              width: 114,
            },
          },
        },
        {
          props: { size: "MD" },
          style: {
            width: 160,
          },
        },
        {
          props: { size: "SM" },
          style: {
            width: 114,
          },
        },
        {
          props: { size: "XS" },
          style: {
            width: 72,
          },
        },
      ],
    },
    MuiCard: {
      variants: [
        {
          props: {
            variant: "outlined",
          },
          style: {
            position: "relative",
            height: "fit-content",
            width: 255,
            border: "none",

            [breakpoints.down("md")]: {
              width: 228,
            },
            [breakpoints.down("sm")]: {
              width: 311,
            },
          },
        },
      ],
    },
    MuiCardContent: {
      variants: [
        {
          props: {},
          style: {
            padding: "16px 8px",
          },
        },
      ],
    },
    MuiAvatar: {
      variants: [
        {
          props: {},
          style: {
            backgroundColor: "#3360FF",
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: "Work Sans, Quicksand",
    h1: {
      fontSize: 40,
      lineHeight: "48px",
      fontWeight: 700,
      fontFamily: "Quicksand",

      [breakpoints.down("md")]: {
        fontSize: calcSize(breakpoints.values.xs, breakpoints.values.md, 24, 40),
        lineHeight: "32px",
      },
    },
    h2: {
      fontSize: 32,
      lineHeight: "40px",
      fontWeight: 700,
      fontFamily: "Quicksand",

      [breakpoints.down("md")]: {
        fontSize: calcSize(breakpoints.values.xs, breakpoints.values.md, 24, 32),
        lineHeight: "32px",
      },
    },
    h3: {
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 700,
      fontFamily: "Quicksand",

      [breakpoints.down("md")]: {
        fontWeight: 600,
      },
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "32px",
      fontFamily: "Quicksand",

      [breakpoints.down("md")]: {
        fontWeight: 700,
      },
    },
    h5: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: "24px",
      fontFamily: "Quicksand",

      [breakpoints.down("md")]: {
        fontSize: 20,
        lineHeight: "28px",
      },
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "24px",
      fontFamily: "Quicksand",

      [breakpoints.down("sm")]: {
        fontWeight: 700,
      },
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "24px",
      fontFamily: "Work Sans",
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "20px",
      fontFamily: "Work Sans",
    },
    subtitle2: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "32px",

      [breakpoints.down("xs")]: {
        fontSize: 18,
        lineHeight: "24px",
      },
    },
  },
});
