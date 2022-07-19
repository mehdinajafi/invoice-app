import { useRouter } from "next/router";
import React from "react";
import { styled } from "stitches-config";
import { Button } from "@/components/Button";
import { useAppDispatch } from "@/store/hooks";
import { deleteOne, markInvoiceAsPaid } from "@/store/InvoicesSlice";
import IInvoice from "@/types/invoice";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "0.5rem",
  backgroundColor: "$subtle-floating",
  padding: "0.5rem",
  borderRadius: "8px",
  boxShadow: "rgb(72 84 159 / 10%) 0px 10px 10px -10px",

  "@sm": {
    gap: "0.5rem",
    padding: "1.5rem",
  },

  "@md": {
    display: "none",
  },
});

interface IInvoiceFooter {
  invoice: IInvoice;
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const InvoiceFooter: React.FC<IInvoiceFooter> = ({
  invoice,
  setFormIsOpen,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const deleteInvoice = () => {
    dispatch(deleteOne(invoice.id));
    router.push("/");
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default InvoiceFooter;
