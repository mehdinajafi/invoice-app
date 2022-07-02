import { styled } from "stitches-config";

const Wrapper = styled("div", {
  width: "min(100%, 45.625rem)",
  margin: "0 auto",
  padding: "2rem 1.5rem",

  "@lg": {
    padding: "4.5rem 0",
  },
});

const InvoicesList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export { Wrapper, InvoicesList };
