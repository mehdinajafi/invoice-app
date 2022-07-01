import { Invoices } from "components/Invoices";
import RootLayout from "layouts/Root";
import Seo from "../components/Seo";

export default function Index() {
  return (
    <RootLayout>
      <Seo title="Invoice App" />

      <Invoices />
    </RootLayout>
  );
}
