import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import InvoiceFooter from "../InvoiceFooter";
import { store } from "@/store/index";

const setup = (props) => {
  render(
    <Provider store={store}>
      <InvoiceFooter setFormIsOpen={jest.fn} {...props} />
    </Provider>
  );
  const user = userEvent.setup();
  return {
    user,
  };
};

describe("Invoice Footer", () => {
  it("should render buttons correctly", () => {
    setup({ invoice: { status: "pending" } });
    const editButton = screen.getByRole("button", { name: "Edit" });
    const deleteButton = screen.getByRole("button", { name: "Delete" });
    const markAsReadButton = screen.getByRole("button", {
      name: "Mark As Paid",
    });
    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(markAsReadButton).toBeInTheDocument();
  });

  it("shouldn't render mark as read button when status is 'Paid'", () => {
    setup({ invoice: { status: "paid" } });
    const markAsReadButton = screen.queryByRole("button", {
      name: "Mark As Paid",
    });
    expect(markAsReadButton).not.toBeInTheDocument();
  });

  it("when click on edit button setFormIsOpen called correctly", async () => {
    const setFormIsOpen = jest.fn();
    const { user } = setup({ invoice: { status: "paid" }, setFormIsOpen });
    const editButton = screen.getByRole("button", { name: "Edit" });
    await user.click(editButton);
    expect(setFormIsOpen).toBeCalledTimes(1);
    expect(setFormIsOpen).toBeCalledWith(true);
  });
});
