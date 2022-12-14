import { style } from "@vanilla-extract/css";
import { vars } from "../../style.css";

export const button = style({
  // background: `linear-gradient(-45deg, ${vars.color.brand[500]} 0%, ${vars.color.brand[300]} 100%)`,
  // color: "white",
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

export const buttonVariants = {
  primary: style({
    background: `linear-gradient(-45deg, ${vars.color.brand[500]} 0%, ${vars.color.brand[300]} 100%)`,
    color: "white",
  }),
  secondary: style({
    background: `linear-gradient(-45deg, ${vars.color.brand[200]} 0%, ${vars.color.brand[100]} 100%)`,
    color: "white",
  }),
  tertiary: style({
    background: "white",
    color: vars.color.brand[500],
  }),
}


