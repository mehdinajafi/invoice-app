import { render, screen, within } from "@testing-library/react";
import InvoiceBody from "../InvoiceBody";

const invoice = {
  status: "paid",
  id: "RT3080",
  description: "Re-branding",
  clientName: "Jensen Huang",
  clientEmail: "jensenh@mail.com",
  createdAt: "07-07-2022",
  paymentDue: "06-08-2022",
  senderAddress: {
    street: "19 Union Terrace",
    city: "London",
    postCode: "E1 3EZ",
    country: "United Kingdom",
  },
  clientAddress: {
    street: "106 Kendell Street",
    city: "Sharrington",
    postCode: "NR24 5WQ",
    country: "United Kingdom",
  },
  items: [
    {
      name: "Brand Guidelines",
      quantity: "1",
      price: "1800.9",
      total: "1800.9",
    },
  ],
  total: 1800.9,
};

const invoiceFormattedFields = {
  id: "#RT3080",
  createdAt: "07 Jul 2022",
  paymentDue: "06 Jun 2022",
  items: [
    {
      price: "$1,800.9",
      total: "$1,800.9",
    },
  ],
  total: "$1,800.9",
};

describe("Invoice Body", () => {
  it("should show invoice id and description", () => {
    render(<InvoiceBody invoice={invoice} />);
    const id = screen.getByText(invoice.id);
    const description = screen.getByText(invoice.description);
    expect(id).toBeInTheDocument();
    expect(id.textContent).toBe(invoiceFormattedFields.id);
    expect(description).toBeInTheDocument();
  });

  it("should show sender address", () => {
    render(<InvoiceBody invoice={invoice} />);
    const group = screen.getByTestId("invoice-sender-address");
    const street = within(group).getByText(invoice.senderAddress.street);
    const city = within(group).getByText(invoice.senderAddress.city);
    const postCode = within(group).getByText(invoice.senderAddress.postCode);
    const country = within(group).getByText(invoice.senderAddress.country);
    expect(street).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(postCode).toBeInTheDocument();
    expect(country).toBeInTheDocument();
  });

  it("should show client information", () => {
    render(<InvoiceBody invoice={invoice} />);
    const group = screen.getByTestId("invoice-client-address");
    const clientName = screen.getByText(invoice.clientName);
    const clientEmail = screen.getByText(invoice.clientEmail);
    const street = within(group).getByText(invoice.clientAddress.street);
    const city = within(group).getByText(invoice.clientAddress.city);
    const postCode = within(group).getByText(invoice.clientAddress.postCode);
    const country = within(group).getByText(invoice.clientAddress.country);
    expect(clientName).toBeInTheDocument();
    expect(clientEmail).toBeInTheDocument();
    expect(street).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(postCode).toBeInTheDocument();
    expect(country).toBeInTheDocument();
  });

  it("should show 'invoice date' and 'payment due' in correct format", () => {
    render(<InvoiceBody invoice={invoice} />);
    const invoiceDate = screen.getByText(invoiceFormattedFields.createdAt);
    const paymentDue = screen.getByText(invoiceFormattedFields.paymentDue);
    expect(invoiceDate).toBeInTheDocument();
    expect(paymentDue).toBeInTheDocument();
  });
});
