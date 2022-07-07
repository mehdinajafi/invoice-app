import format from "date-fns/format";
import { styled } from "stitches-config";
import IInvoice from "types/invoice";
import ItemsTable from "./ItemsTable";

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: "2rem",
  padding: "1.5rem",
  marginBlockEnd: "1.5rem",
  borderRadius: "8px",
  boxShadow: "rgb(72 84 159 / 10%) 0px 10px 10px -10px",
  backgroundColor: "$subtle-floating",

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

interface IInvoiceBody {
  invoice: IInvoice;
  children?: React.ReactNode;
}

const InvoiceBody: React.FC<IInvoiceBody> = ({ invoice, children }) => {
  return (
    <Wrapper>
      <InvoiceTitle>
        <InvoiceId>{invoice.id}</InvoiceId>
        <InvoiceDescription>{invoice.description}</InvoiceDescription>
      </InvoiceTitle>

      <SenderAddress>
        <Address>
          <span>{invoice.senderAddress.street}</span>
          <span>{invoice.senderAddress.city}</span>
          <span>{invoice.senderAddress.postCode}</span>
          <span>{invoice.senderAddress.country}</span>
        </Address>
      </SenderAddress>

      <Dates>
        <div>
          <DateTitle>Invoice Date</DateTitle>
          <DateText>
            {format(new Date(invoice.createdAt), "MM LLL yyyy")}
          </DateText>
        </div>

        <div>
          <DateTitle>Payment Due</DateTitle>
          <DateText>
            {format(new Date(invoice.paymentDue), "MM LLL yyyy")}
          </DateText>
        </div>
      </Dates>

      <ClientAddress>
        <div>Bill to</div>
        <div>{invoice.clientName}</div>
        <Address css={{ textAlign: "start" }}>
          <span>{invoice.clientAddress.street}</span>
          <span>{invoice.clientAddress.city}</span>
          <span>{invoice.clientAddress.postCode}</span>
          <span>{invoice.clientAddress.country}</span>
        </Address>
      </ClientAddress>

      <ClientEmail>
        <div>Sent to</div>
        <div>{invoice.clientEmail}</div>
      </ClientEmail>

      <ItemsTable invoice={invoice} />
    </Wrapper>
  );
};

export default InvoiceBody;
