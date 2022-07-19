import { render, screen } from "@testing-library/react";
import InvoiceItem from "../InvoiceItem";

const invoice = {
  status: "paid",
  id: "RT3080",
  description: "Re-branding",
  clientName: "Jensen Huang",
  clientEmail: "jensenh@mail.com",
  createdAt: "07-07-2022",
  paymentTerms: "30",
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
      total: 1800.9,
    },
  ],
  total: 1800.9,
};

describe("Invoice Item", () => {
  it("should render all invoice fields", () => {
    render(<InvoiceItem invoice={invoice} />);
    const id = screen.getByText(invoice.id);
    const date = screen.getByText("Due 07 Jul 2022");
    const clientName = screen.getByText(invoice.clientName);
    const price = screen.getByText("$1,800.9");
    const status = screen.getByText(invoice.status);
    expect(id.textContent).toBe(`#${invoice.id}`);
    expect(date).toBeInTheDocument();
    expect(clientName).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(status).toBeInTheDocument();
  });
});
