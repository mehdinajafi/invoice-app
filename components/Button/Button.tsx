import { styled } from "stitches-config";

const Button = styled("button", {
  border: "none",
  borderRadius: "10rem",
  padding: "1rem 1.5rem",
  fontFamily: "$spartan",
  fontSize: "$xs",
  fontWeight: 700,
  transition: "background 0.3s ease, color 0.3s ease",
  cursor: "pointer",
  whiteSpace: "nowrap",

  variants: {
    variant: {
      primary: {
        backgroundColor: "$primary",
        color: "White",

        "&:hover": {
          backgroundColor: "$primary-lt",
        },
      },
      danger: {
        backgroundColor: "$danger",
        color: "White",

        "&:hover": {
          backgroundColor: "$danger-background",
        },
      },
      light: {
        backgroundColor: "$muted",
        color: "$ntrl-lt",

        "&:hover": {
          backgroundColor: "$muted-dk",
        },
      },
      dark: {
        backgroundColor: "$dark",
        color: "$ntrl-ltr",

        "&:hover": {
          backgroundColor: "$dark-dk",
        },
      },
    },
  },
});

export default Button;
