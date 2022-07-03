import { styled } from "stitches-config";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
});

const GoBackLink = styled("a", {
  display: "flex",
  alignItems: "center",
  marginBlockEnd: "2rem",
  maxWidth: "min-content",
  whiteSpace: "nowrap",
  textAlign: "start",
  fontFamily: "$spartan",
  fontSize: "$xs",
  cursor: "pointer",
  transition: "color 200ms",

  "&:hover": {
    color: "$ntrl-lt",
  },

  "& img": {
    transform: "rotate(90deg)",
    marginInlineEnd: "1.5rem",
  },
});

const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "1.5rem",
  marginBlockEnd: "1.5rem",
  borderRadius: "8px",
  boxShadow: "rgb(72 84 159 / 10%) 0px 10px 10px -10px",
  backgroundColor: "White",
});

const StatusWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "$spartan",
  fontSize: "$xs",
  color: "$ntrl-ltr",
  width: "100%",

  "@md": {
    justifyContent: "flex-start",
  },
});

const InvoiceStatus = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "6.5rem",
  height: "2.5rem",
  marginInlineStart: "1rem",
  borderRadius: "6px",
  fontSize: "$xs",
  fontWeight: 700,
  textTransform: "capitalize",

  "&::before": {
    content: " ",
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

        "&::before": {
          backgroundColor: "$success",
        },
      },
      pending: {
        backgroundColor: "$warning-lt",
        color: "$warning",

        "&::before": {
          backgroundColor: "$warning",
        },
      },
      draft: {
        backgroundColor: "rgb(55 59 83 / 6%)",
        color: "$ntrl-dk",

        "&::before": {
          backgroundColor: "$ntrl-dk",
        },
      },
    },
  },
});

const ButtonsWrapper = styled("div", {
  display: "none",
  gap: "0.5rem",

  "@md": {
    display: "flex",
  },
});

const InformationWrapper = styled(Header, {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: "2rem",

  "@lg": {
    gridTemplateColumns: "1fr 1fr 1fr",
    rowGap: "1.25rem",
  },
});

// Title
const InvoiceTitle = styled("div", {
  "@lg": {
    gridArea: "1 / 1 / 2 / 3",
  },
});

const InvoiceId = styled("h1", {
  fontFamily: "$spartan",
  fontSize: "$base",
  fontWeight: 700,
  marginBlockEnd: "0.5rem",

  "&:before": {
    content: "#",
    color: "$ntrl-lt",
  },
});

const InvoiceDescription = styled("div", {
  fontFamily: "$spartan",
  fontSize: "$xs",
  color: "$ntrl-ltr",
});

// Address
const SenderAddress = styled("div", {
  gridArea: "2 / 1 / 3 / 2",

  "@lg": {
    gridArea: "1 / 3 / 2 / 4",
  },
});

const Address = styled("address", {
  display: "flex",
  flexDirection: "column",
  color: "$ntrl-ltr",
  fontFamily: "$spartan",
  fontSize: "$xxs",
  fontStyle: "normal",
  letterSpacing: "-0.23px",

  "@lg": {
    textAlign: "end",
  },
});

// Date
const Dates = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  gridArea: "3 / 1 / 4 / 2",
});

const DateTitle = styled("div", {
  fontFamily: "$spartan",
  fontSize: "$xs",
  color: "$ntrl-ltr",
  marginBottom: "0.25rem",
});

const DateText = styled("div", {
  fontFamily: "$spartan",
  fontSize: "0.9375rem",
  fontWeight: 700,
});

// clinet address
const ClientAddress = styled("div", {
  gridArea: "3 / 2 / 4 / 3",
  fontFamily: "$spartan",
  fontSize: "$xs",

  "@lg": {
    gridArea: "3 / 2 / 4 / 3",
  },

  // title
  "& div:nth-child(1)": {
    marginBlockEnd: "0.5rem",
    color: "$ntrl-ltr",
  },
  // client name
  "& div:nth-child(2)": {
    marginBlockEnd: "0.25rem",
    fontFamily: "$spartan",
    fontSize: "0.9375rem",
    fontWeight: 700,
  },
});

// client email
const ClientEmail = styled("div", {
  gridArea: "4 / 1 / 5 / 3",

  "@lg": {
    gridArea: "3 / 3 / 4 / 4",
  },
  // title
  "& div:nth-child(1)": {
    marginBlockEnd: "0.25rem",
    color: "$ntrl-ltr",
    fontFamily: "$spartan",
    fontSize: "$xs",
  },
  // email
  "& div:nth-child(2)": {
    fontFamily: "$spartan",
    fontSize: "0.9375rem",
    fontWeight: 700,
  },
});

// items table
const TableWrapper = styled("div", {
  gridArea: "6 / 1 / 7 / -1",
  borderRadius: "8px",
  overflow: "hidden",

  "& table": {
    backgroundColor: "hsl(228, 71%, 99%)",
    width: "100%",
    paddingTop: "2rem",
    borderSpacing: "0",
    fontFamily: "$spartan",

    "& thead": {
      display: "none",

      "@sm": {
        display: "table-header-group",
      },

      "& tr": {
        color: "$ntrl-ltr",
        fontSize: "$xxs",
        fontWeight: 500,

        "& th": {
          textAlign: "end",
          padding: "0px 0px 2rem",

          "&:nth-child(1)": {
            padding: "0px 0px 2rem 2rem",
            textAlign: "start",
          },
          "&:nth-child(2)": {
            textAlign: "center",
          },
          "&:last-child": {
            padding: "0px 2rem 2rem 0px",
          },
        },
      },
    },

    "& tbody": {
      "& tr": {
        "& td": {
          fontSize: "$xs",
          fontWeight: 700,
          textAlign: "end",

          "&:nth-child(1)": {
            padding: "0px 0px 2rem 2rem",
            textAlign: "start",
            color: "$ntrl-dkr",
          },
          "&:nth-child(2)": {
            textAlign: "center",
            color: "$ntrl-ltr",
            display: "none",
            "@sm": {
              display: "table-cell",
            },
          },
          "&:nth-child(3)": {
            color: "$ntrl-ltr",
            display: "none",
            "@sm": {
              display: "table-cell",
            },
          },
          "&:nth-child(4)": {
            padding: "0px 2rem 2rem 0px",
            color: "$ntrl-dkr",
          },
        },
      },
    },

    "& tfoot": {
      backgroundColor: "$ntrl-dk",
      color: "White",

      "& tr": {
        "& td": {
          "&:first-child": {
            textAlign: "start",
            padding: "2rem 0 2rem 2rem",
            fontSize: "$xxs",
            fontWeight: 700,
          },
          "&:nth-child(2)": {
            display: "none",
            "@sm": {
              display: "table-cell",
            },
          },
          "&:nth-child(3)": {
            display: "none",
            "@sm": {
              display: "table-cell",
            },
          },
          "&:last-child": {
            textAlign: "end",
            padding: "2rem 2rem 2rem 0px",
            fontWeight: 700,
            fontSize: "$xl",

            "@sm": {
              fontSize: "$xxl",
            },
          },
        },
      },
    },
  },
});

const Footer = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "0.5rem",
  backgroundColor: "White",
  padding: "1.5rem",
  borderRadius: "8px",
  boxShadow: "rgb(72 84 159 / 10%) 0px 10px 10px -10px",

  "@md": {
    display: "none",
  },
});

export {
  Wrapper,
  Header,
  StatusWrapper,
  ButtonsWrapper,
  InvoiceStatus,
  GoBackLink,
  InformationWrapper,
  InvoiceTitle,
  InvoiceId,
  InvoiceDescription,
  SenderAddress,
  Address,
  Dates,
  DateTitle,
  DateText,
  ClientAddress,
  ClientEmail,
  TableWrapper,
  Footer,
};
