import IInvoice from "types/invoice";
import { Header } from "./Header";
import Invoice from "./Invoice/Invoice";
import { InvoicesList, Wrapper } from "./Invoices.styles";

interface IInvoices {
  invoices: IInvoice[];
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Invoices: React.FC<IInvoices> = (props) => {
  return (
    <Wrapper>
      <Header setFormIsOpen={props.setFormIsOpen} />

      <InvoicesList>
        {props.invoices.map((invoice) => (
          <Invoice key={invoice.id} invoice={invoice} />
        ))}
      </InvoicesList>
    </Wrapper>
  );
};

export default Invoices;
