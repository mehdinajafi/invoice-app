import IInvoice from "types/invoice";
import { Header } from "./Header";
import Invoice from "./Invoice/Invoice";
import { InvoicesList } from "./Invoices.styles";

interface IInvoices {
  invoices: IInvoice[];
}

const Invoices: React.FC<IInvoices> = (props) => {
  return (
    <div>
      <Header />

      <InvoicesList>
        {props.invoices.map((invoice) => (
          <Invoice key={invoice.id} invoice={invoice} />
        ))}
      </InvoicesList>
    </div>
  );
};

export default Invoices;
