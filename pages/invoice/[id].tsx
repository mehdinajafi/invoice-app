import React, { useState } from "react";
import { useRouter } from "next/router";
import EditInvoiceForm from "@/components/ModifyInvoice/EditInvoiceForm";
import Wrapper from "@/components/Invoice/Wrapper";
import InvoiceHeader from "@/components/Invoice/InvoiceHeader";
import InvoiceBody from "@/components/Invoice/InvoiceBody";
import InvoiceFooter from "@/components/Invoice/InvoiceFooter";
import HomeLink from "@/components/Invoice/HomeLink";
import { selectById } from "@/store/InvoicesSlice";
import { useAppSelector } from "@/store/hooks";
import Seo from "@/components/Seo";

const InvoicePage = () => {
  const { query } = useRouter();
  const invoice = useAppSelector((state) =>
    selectById(state.invoices, query.id as string)
  );
  const [formIsOpen, setFormIsOpen] = useState(false);

  if (!invoice) {
    return <div>Invoice Not Found!</div>;
  }

  return (
    <React.Fragment>
      <Seo title={`Invoice | #${invoice.id}`} />

      <Wrapper>
        <HomeLink />

        <InvoiceHeader setFormIsOpen={setFormIsOpen} invoice={invoice} />

        <InvoiceBody invoice={invoice} />

        <InvoiceFooter invoice={invoice} setFormIsOpen={setFormIsOpen} />
      </Wrapper>

      <EditInvoiceForm
        isOpen={formIsOpen}
        setFormIsOpen={setFormIsOpen}
        invoice={invoice}
      />
    </React.Fragment>
  );
};

export default InvoicePage;
