import React, { useState } from "react";
import { GetServerSidePropsContext } from "next";
import EditInvoiceForm from "@/components/ModifyInvoice/EditInvoiceForm";
import Wrapper from "@/components/Invoice/Wrapper";
import InvoiceHeader from "@/components/Invoice/InvoiceHeader";
import InvoiceBody from "@/components/Invoice/InvoiceBody";
import InvoiceFooter from "@/components/Invoice/InvoiceFooter";
import HomeLink from "@/components/Invoice/HomeLink";
import { selectById } from "@/store/InvoicesSlice";
import { useAppSelector } from "@/store/hooks";
import Seo from "@/components/Seo";

interface IIndex {
  id: string;
}

const Index: React.FC<IIndex> = ({ id }) => {
  const invoice = useAppSelector((state) => selectById(state.invoices, id));
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <React.Fragment>
      {invoice && (
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
      )}
    </React.Fragment>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.query.id;

  return {
    props: {
      id,
    },
  };
};

export default Index;
