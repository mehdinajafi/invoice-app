import { styled } from "stitches-config";

const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: "4rem",
});

const TextWrapper = styled("div", {
  marginInlineEnd: "auto",
});

const Title = styled("h1", {
  fontFamily: "$spartan",
  fontWeight: 700,
});

const SubHeading = styled("div", {
  fontFamily: "$spartan",
  fontSize: "$xs",
  color: "$ntrl-ltr",
});

const NewInvoiceBtn = styled("button", {
  backgroundColor: "$primary",
  color: "White",
  fontFamily: "$spartan",
  fontSize: "$xs",
  fontWeight: 700,
  border: "1px solid $primary",
  borderRadius: "10rem",
  padding: "0.5rem 1rem 0.5rem 0.5rem",
  marginInlineStart: "2.5rem",
  transition: "background-color 200ms",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$primary-lt",
  },
});

const PlusIconWrapper = styled("span", {
  display: "inline-flex",
  borderRadius: "50%",
  padding: "0.625rem",
  marginInlineEnd: "0.5rem",
  backgroundColor: "White",
});

export {
  Wrapper,
  TextWrapper,
  Title,
  SubHeading,
  NewInvoiceBtn,
  PlusIconWrapper,
};
