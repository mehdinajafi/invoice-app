import { render, screen } from "@testing-library/react";
import InvoiceList from "../InvoiceList";

describe("Home invoice list", () => {
  it("should render children correctly", () => {
    render(
      <InvoiceList>
        <div>children</div>
      </InvoiceList>
    );
    const children = screen.getByText(/children/i);
    expect(children).toBeInTheDocument();
  });
});
