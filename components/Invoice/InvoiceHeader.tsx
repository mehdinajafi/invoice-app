import { Button } from "components/Button";
import { useRouter } from "next/router";
import React from "react";
import { styled } from "stitches-config";
import { useAppDispatch } from "store/hooks";
import { deleteOne, markInvoiceAsPaid } from "store/InvoicesSlice";
import IInvoice from "types/invoice";

const Wrapper = styled("div", {
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

interface IHeader {
  invoice: IInvoice;
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const InvoiceHeader: React.FC<IHeader> = ({ invoice, setFormIsOpen }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const deleteInvoice = () => {
    dispatch(deleteOne(invoice.id));
    router.push("/");
  };

  return (
    <Wrapper>
      <StatusWrapper>
        <span>Status</span>

        <InvoiceStatus status={invoice.status}>{invoice.status}</InvoiceStatus>
      </StatusWrapper>

      <ButtonsWrapper>
        <Button variant="light" onClick={() => setFormIsOpen(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => deleteInvoice()}>
          Delete
        </Button>
        {invoice.status !== "paid" && (
          <Button
            variant="primary"
            onClick={() => dispatch(markInvoiceAsPaid(invoice.id))}
          >
            Mark As Paid
          </Button>
        )}
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default InvoiceHeader;
