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
          backgroundColor: "$danger-lt",
        },
      },
      light: {
        "$$light-bg": "hsl(228, 71%, 99%)",
        backgroundColor: "$$light-bg",
        color: "$ntrl-lt",

        "&:hover": {
          backgroundColor: "hsl(231, 73%, 93%)",
        },
      },
    },
  },
});

export default Button;
