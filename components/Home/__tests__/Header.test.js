import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import Header from "../Header";

const Wrapper = () => {
  const [filter, setFilter] = useState(null);
  return (
    <Header
      totalFiltredInvoices={3}
      filter={filter}
      setFilter={setFilter}
      setFormIsOpen={jest.fn}
    />
  );
};

const setup = () => {
  render(<Wrapper />);
  const user = userEvent.setup();
  return {
    user,
  };
};

describe("Header", () => {
  it("should render heading and sub heading correctly", () => {
    setup();
    const heading = screen.getByText("Invoices");
    const subHeading = screen.getByText("There are 3 total invoices.");
    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
  });
  it("when change filter subHeading changes", async () => {
    const { user } = setup();
    const paidCheckbox = screen.getByLabelText(/paid/i);
    await user.click(paidCheckbox);
    const subHeading = screen.getByText("There are 3 paid invoices.");
    expect(subHeading).toBeInTheDocument();
  });
  it("should render new invoice button", () => {
    setup();
    const newInvoiceButton = screen.getByTestId(/new-invoice-button/i);
    expect(newInvoiceButton).toBeInTheDocument();
  });
});
