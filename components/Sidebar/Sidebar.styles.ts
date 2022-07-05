import { styled } from "stitches-config";

const Wrapper = styled("aside", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "$ntrl-dk",
  borderRadius: "0",
  zIndex: "$layerC",

  "@lg": {
    flexDirection: "column",
    borderRadius: "0 20px 20px 0",
  },
});

const OptionsWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",

  "@lg": {
    flexDirection: "column",
    borderRadius: "0 0 20px 0",
  },
});

const Button = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  margin: "1.5rem 1.5rem",
  cursor: "pointer",

  "@lg": {
    margin: "1.5rem 0",
  },
});

const Divider = styled("div", {
  width: "1px",
  height: "100%",
  backgroundColor: "$ntrl",
  alignSelf: "stretch",
  transform: "rotate(180deg)",

  "@lg": {
    width: "100%",
    height: "1px",
  },
});

export { Wrapper, Button, Divider, OptionsWrapper };
