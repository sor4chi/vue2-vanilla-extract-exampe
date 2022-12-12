import { globalStyle, createTheme, style } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const [themeClass, vars] = createTheme({
  color: {
    brand: {
      900: "#0f3647",
      800: "#14484d",
      700: "#1a5c64",
      600: "#1f6f7a",
      500: "#2d9aa7",
      400: "#38b4c2",
      300: "#4cd1e0",
      200: "#7ee7f2",
      100: "#b3f5ff",
    },
  },
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  font: {
    family: {
      sans: "sans-serif",
    },
    size: {
      small: "12px",
      medium: "16px",
      large: "24px",
    },
    weight: {
      thin: "100",
      normal: "400",
      bold: "700",
    },
    shadow: {
      none: "none",
      small: "0 1px 2px rgba(0, 0, 0, 0.1)",
      medium: "0 2px 4px rgba(0, 0, 0, 0.1)",
      large: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  },
});

export const button = style({
  background: `linear-gradient(-45deg, ${vars.color.brand[500]} 0%, ${vars.color.brand[300]} 100%)`,
  color: "white",
  padding: `${vars.space.medium} ${vars.space.large}`,
  borderRadius: vars.space.small,
  border: "none",
  cursor: "pointer",
  fontWeight: vars.font.weight.bold,
  fontFamily: vars.font.family.sans,
  fontSize: vars.font.size.medium,
  boxShadow: vars.font.shadow.large,

  ":hover": {
    background: `linear-gradient(-45deg, ${vars.color.brand[400]} 0%, ${vars.color.brand[200]} 100%)`,
  },

  ":active": {
    boxShadow: vars.font.shadow.none,
  },
});
