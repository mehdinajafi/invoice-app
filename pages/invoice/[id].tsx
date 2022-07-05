import { Invoice } from "components/Invoice";
import Seo from "components/Seo";
import RootLayout from "layouts/Root";
import { GetServerSidePropsContext } from "next";
import IInvoice from "types/invoice";
import invoices from "../../data/data.json";
import EditInvoiceForm from "../../components/ModifyInvoice/EditInvoiceForm";
import { useState } from "react";

interface IIndex {
  invoice: IInvoice;
}

const Index: React.FC<IIndex> = ({ invoice }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <RootLayout>
      <Seo title={`Invoice | #${invoice.id}`} />

      <Invoice invoice={invoice} setFormIsOpen={setFormIsOpen} />

      <EditInvoiceForm
        isOpen={formIsOpen}
        setFormIsOpen={setFormIsOpen}
        invoice={invoice}
      />
    </RootLayout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.query.id;
  const invoice = invoices.find((invoice) => invoice.id === id);

  return {
    props: {
      invoice: invoice,
    },
  };
};

export default Index;
