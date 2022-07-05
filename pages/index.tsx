import { Invoices } from "components/Invoices";
import CreateInvoiceForm from "components/ModifyInvoice/CreateInvoiceForm";
import RootLayout from "layouts/Root";
import { useState } from "react";
import IInvoice from "types/invoice";
import Seo from "../components/Seo";
import invoices from "../data/data.json";

export default function Index() {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <RootLayout>
      <Seo title="Invoice App" />

      <CreateInvoiceForm
        isOpen={formIsOpen}
        setFormIsOpen={setFormIsOpen}
      ></CreateInvoiceForm>

      <Invoices
        invoices={invoices as IInvoice[]}
        setFormIsOpen={setFormIsOpen}
      />
    </RootLayout>
  );
}
