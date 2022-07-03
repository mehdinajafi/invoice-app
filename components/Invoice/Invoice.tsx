import Link from "next/link";
import format from "date-fns/format";
import IInvoice from "types/invoice";
import { Button } from "components/Button";
import {
  Wrapper,
  Header,
  GoBackLink,
  StatusWrapper,
  InvoiceStatus,
  ButtonsWrapper,
  InformationWrapper,
  InvoiceTitle,
  InvoiceId,
  InvoiceDescription,
  SenderAddress,
  Address,
  Dates,
  DateTitle,
  DateText,
  ClientAddress,
  ClientEmail,
  TableWrapper,
  Footer,
} from "./Invoice.styles";

interface IInvoiceComponent {
  invoice: IInvoice;
}

const Invoice: React.FC<IInvoiceComponent> = ({ invoice }) => {
  return (
    <Wrapper>
      <Link href="/">
        <GoBackLink>
          <img src="/images/icon-arrow-down.svg" />
          Go back
        </GoBackLink>
      </Link>

      <Header>
        <StatusWrapper>
          <span>Status</span>

          <InvoiceStatus status={invoice.status}>
            {invoice.status}
          </InvoiceStatus>
        </StatusWrapper>

        <ButtonsWrapper>
          <Button variant="light">Edit</Button>
          <Button variant="danger">Delete</Button>
          {invoice.status !== "paid" && (
            <Button variant="primary">Mark As Paid</Button>
          )}
        </ButtonsWrapper>
      </Header>

      <InformationWrapper>
        <InvoiceTitle>
          <InvoiceId>{invoice.id}</InvoiceId>
          <InvoiceDescription>{invoice.description}</InvoiceDescription>
        </InvoiceTitle>

        <SenderAddress>
          <Address>
            <span>{invoice.senderAddress.street}</span>
            <span>{invoice.senderAddress.city}</span>
            <span>{invoice.senderAddress.postCode}</span>
            <span>{invoice.senderAddress.country}</span>
          </Address>
        </SenderAddress>

        <Dates>
          <div>
            <DateTitle>Invoice Date</DateTitle>
            <DateText>
              {format(new Date(invoice.createdAt), "MM LLL yyyy")}
            </DateText>
          </div>

          <div>
            <DateTitle>Payment Due</DateTitle>
            <DateText>
              {format(new Date(invoice.paymentDue), "MM LLL yyyy")}
            </DateText>
          </div>
        </Dates>

        <ClientAddress>
          <div>Bill to</div>
          <div>{invoice.clientName}</div>
          <Address css={{ textAlign: "start" }}>
            <span>{invoice.clientAddress.street}</span>
            <span>{invoice.clientAddress.city}</span>
            <span>{invoice.clientAddress.postCode}</span>
            <span>{invoice.clientAddress.country}</span>
          </Address>
        </ClientAddress>

        <ClientEmail>
          <div>Sent to</div>
          <div>{invoice.clientEmail}</div>
        </ClientEmail>

        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>QTY.</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Amount Due</td>
                <td></td>
                <td></td>
                <td>${invoice.total}</td>
              </tr>
            </tfoot>
          </table>
        </TableWrapper>
      </InformationWrapper>

      <Footer>
        <Button variant="light">Edit</Button>
        <Button variant="danger">Delete</Button>
        {invoice.status !== "paid" && (
          <Button variant="primary">Mark As Paid</Button>
        )}
      </Footer>
    </Wrapper>
  );
};

export default Invoice;
