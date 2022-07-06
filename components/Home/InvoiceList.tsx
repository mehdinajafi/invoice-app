import React from "react";
import { styled } from "stitches-config";

const List = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

interface IInvoicesList {
  children?: React.ReactNode;
}

const InvoicesList: React.FC<IInvoicesList> = ({ children }) => {
  return <List>{children}</List>;
};

export default InvoicesList;
