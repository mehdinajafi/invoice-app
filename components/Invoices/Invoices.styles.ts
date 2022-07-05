import { styled } from "stitches-config";

const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "45.625rem",
  margin: "0 auto",
});

const InvoicesList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export { Wrapper, InvoicesList };
