import EditInvoiceForm from "../EditInvoiceForm";
import { store } from "@/store/index";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import format from "date-fns/format";

const invoice = {
  status: "paid",
  id: "RT3080",
  description: "Re-branding",
  clientName: "Jensen Huang",
  clientEmail: "jensenh@mail.com",
  createdAt: new Date(),
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

const setup = (props) => {
  render(
    <Provider store={store}>
      <EditInvoiceForm {...props} />
    </Provider>
  );
  const user = userEvent.setup();

  return {
    user,
  };
};

describe("EditInvoiceForm", () => {
  it("should run header correctly", () => {
    setup({ isOpen: true, invoice, setFormIsOpen: jest.fn });
    const header = screen.getByTestId(`edit-invoice-header`);
    expect(header.textContent).toBe(`Edit #${invoice.id}`);
  });

  it("should render correct buttons", () => {
    setup({ isOpen: true, invoice, setFormIsOpen: jest.fn });
    const cancel = screen.getByRole("button", {
      name: "Cancel",
    });
    const saveButton = screen.getByRole("button", {
      name: "Save Changes",
    });

    expect(cancel).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  it("should put invoice in form", () => {
    setup({ isOpen: true, invoice, setFormIsOpen: jest.fn });
    const billFromGroup = screen.getByRole("group", {
      name: /bill from/i,
    });
    const billToGroup = screen.getByRole("group", {
      name: /bill to/i,
    });

    expect(within(billFromGroup).getByLabelText(/street address/i)).toHaveValue(
      invoice.senderAddress.street
    );
    expect(within(billFromGroup).getByLabelText(/city/i)).toHaveValue(
      invoice.senderAddress.city
    );
    expect(within(billFromGroup).getByLabelText(/post code/i)).toHaveValue(
      invoice.senderAddress.postCode
    );
    expect(within(billFromGroup).getByLabelText(/country/i)).toHaveValue(
      invoice.senderAddress.country
    );

    expect(within(billToGroup).getByLabelText(/client's name/i)).toHaveValue(
      invoice.clientName
    );
    expect(within(billToGroup).getByLabelText(/client's email/i)).toHaveValue(
      invoice.clientEmail
    );
    expect(within(billToGroup).getByLabelText(/street address/i)).toHaveValue(
      invoice.clientAddress.street
    );
    expect(within(billToGroup).getByLabelText(/city/i)).toHaveValue(
      invoice.clientAddress.city
    );
    expect(within(billToGroup).getByLabelText(/post code/i)).toHaveValue(
      invoice.clientAddress.postCode
    );
    expect(within(billToGroup).getByLabelText(/country/i)).toHaveValue(
      invoice.clientAddress.country
    );

    expect(
      screen.getByText(format(invoice.createdAt, "MMM dd, yyyy"))
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/payment terms/i)).toHaveValue(
      invoice.paymentTerms
    );
    expect(screen.getByLabelText(/description/i)).toHaveValue(
      invoice.description
    );

    expect(screen.getAllByTestId("item")).toHaveLength(invoice.items.length);
    expect(screen.getByLabelText(/description/i)).toHaveValue(
      invoice.description
    );

    invoice.items.forEach((item, index) => {
      expect(screen.getByTestId(`item-name-${index}`)).toHaveValue(item.name);
      expect(screen.getByTestId(`item-quantity-${index}`)).toHaveValue(
        item.quantity
      );
      expect(screen.getByTestId(`item-price-${index}`)).toHaveValue(item.price);
      expect(screen.getByTestId(`item-total-${index}`)).toHaveValue(
        item.total.toString()
      );
    });
  });
});
