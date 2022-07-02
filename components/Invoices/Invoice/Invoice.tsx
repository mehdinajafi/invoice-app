import format from "date-fns/format";
import Link from "next/link";
import IInvoice from "types/invoice";
import {
  Wrapper,
  InvoiceClient,
  InvoiceDate,
  InvoiceId,
  InvoicePrice,
  InvoiceStatus,
  GoToInvoiceIcon,
} from "./Invoice.styles";

interface IInvoiceComponent {
  invoice: IInvoice;
}

const Invoice: React.FC<IInvoiceComponent> = (props) => {
  return (
    <Link href={`/invoice/${props.invoice.id}`}>
      <Wrapper>
        <InvoiceId>
          <span>#</span>
          {props.invoice.id}
        </InvoiceId>
        <InvoiceDate>
          Due {format(new Date(props.invoice.createdAt), "MM LLL yyyy")}
        </InvoiceDate>
        <InvoiceClient>{props.invoice.clientName}</InvoiceClient>

        <InvoicePrice>${props.invoice.total}</InvoicePrice>

        <InvoiceStatus status={props.invoice.status}>
          <span></span>
          <span>{props.invoice.status}</span>
        </InvoiceStatus>
        <GoToInvoiceIcon>
          <img src="/images/icon-arrow-down.svg" width={10} height={7} />
        </GoToInvoiceIcon>
      </Wrapper>
    </Link>
  );
};

export default Invoice;
