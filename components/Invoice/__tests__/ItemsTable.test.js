import { render, screen, within } from "@testing-library/react";
import ItemsTable from "../ItemsTable";

const invoice = {
  items: [
    {
      name: "Brand Guidelines",
      quantity: "1",
      price: 1800.9,
      total: 1800.9,
    },
  ],
  total: 1800.9,
};

const setup = () => {
  const { container } = render(<ItemsTable invoice={invoice} />);
  return {
    container,
  };
};

describe("Items Table", () => {
  it("should render table heading correctly", () => {
    setup();
    const itemName = screen.getByText("Item Name");
    const ItemQuantity = screen.getByText("QTY.");
    const itemPrice = screen.getByText("Price");
    const itemTotal = screen.getByText("Total");
    expect(itemName).toBeInTheDocument();
    expect(ItemQuantity).toBeInTheDocument();
    expect(itemPrice).toBeInTheDocument();
    expect(itemTotal).toBeInTheDocument();
  });

  it("should render prices in body correctly", () => {
    const { container } = setup();
    const tbody = container.querySelector("tbody");
    const prices = within(tbody).getAllByText(`$1,800.9`);
    expect(prices).toHaveLength(2);
  });

  it("should render footer correctly", () => {
    const { container } = setup();
    const tfoot = container.querySelector("tfoot");
    const title = screen.getByText("Amount Due");
    const totalPrice = within(tfoot).getByText(`$1,800.9`);
    expect(title).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
  });
});
