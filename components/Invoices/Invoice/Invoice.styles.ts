import { styled } from "stitches-config";

const Wrapper = styled("a", {
  display: "grid",
  gridTemplateRows: "max-content 1fr",
  backgroundColor: "White",
  border: "1px solid transparent",
  borderRadius: "8px",
  fontFamily: "$spartan",
  padding: "1rem 1.5rem",
  cursor: "pointer",

  "@lg": {
    alignItems: "center",
    gridTemplateColumns: "5rem 9rem 1fr min-content min-content min-content",
    gridTemplateRows: "min-content",
  },

  "&:hover": {
    borderColor: "$primary",
  },
});

const InvoiceId = styled("h3", {
  fontSize: "$xs",
  fontWeight: 700,
  color: "$ntrl-dkr",
  marginBlockEnd: "1.5rem",
  "@lg": {
    marginBlockEnd: "0",
  },
  "& span": {
    color: "hsl(231, 37%, 63%)",
  },
});

const InvoiceClient = styled("div", {
  fontSize: "$xs",
  color: "$ntrl-ltr",
  gridArea: "1 / 2 / 2 / 3",
  textAlign: "end",

  "@lg": {
    gridArea: "1 / 3 / 2 / 4",
    textAlign: "start",
  },
});

const InvoiceDate = styled("div", {
  fontSize: "$xs",
  color: "$ntrl-ltr",
  marginInlineEnd: "2.5rem",
  whiteSpace: "nowrap",
});

const InvoicePrice = styled("div", {
  fontSize: "$base",
  fontWeight: 700,
});

const InvoiceStatus = styled("div", {
  gridArea: "2 / 2 / 4 / 3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginInlineStart: "auto",
  width: "6.5rem",
  height: "2.5rem",
  borderRadius: "6px",
  fontSize: "$xs",
  fontWeight: 700,
  textTransform: "capitalize",

  "@lg": {
    gridArea: "1 / 5 / 2 / 6",
    marginInlineStart: "2.5rem",
    marginInlineEnd: "1.25rem",
  },

  "& span:first-child": {
    width: "0.5rem",
    height: "0.5rem",
    marginInlineEnd: "0.5rem",
    borderRadius: "50%",
  },

  variants: {
    status: {
      paid: {
        backgroundColor: "$success-lt",
        color: "$success",

        "& span:first-child": {
          backgroundColor: "$success",
        },
      },
      pending: {
        backgroundColor: "$warning-lt",
        color: "$warning",

        "& span:first-child": {
          backgroundColor: "$warning",
        },
      },
      draft: {
        backgroundColor: "rgb(55 59 83 / 6%)",
        color: "$ntrl-dk",

        "& span:first-child": {
          backgroundColor: "$ntrl-dk",
        },
      },
    },
  },
});

const GoToInvoiceIcon = styled("div", {
  display: "none",
  "@lg": {
    display: "block",
  },
  "& img": {
    transform: "rotate(-90deg)",
    width: 10,
    height: 7,
  },
});

export {
  Wrapper,
  InvoiceId,
  InvoiceClient,
  InvoiceDate,
  InvoicePrice,
  InvoiceStatus,
  GoToInvoiceIcon,
};
