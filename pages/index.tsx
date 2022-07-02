import { Invoices } from "components/Invoices";
import RootLayout from "layouts/Root";
import IInvoice from "types/invoice";
import Seo from "../components/Seo";
import invoices from "../data/data.json";

export default function Index() {
  return (
    <RootLayout>
      <Seo title="Invoice App" />

      <Invoices invoices={invoices as IInvoice[]} />
    </RootLayout>
  );
}
