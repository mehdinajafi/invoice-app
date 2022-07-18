import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik } from "formik";
import Items from "../Items";

const setup = () => {
  return render(
    <Formik onSubmit={jest.fn} initialValues={{ items: [] }}>
      <Items />
    </Formik>
  );
};

describe("Items", () => {
  it("should render Items correctly", () => {
    const { unmount } = setup();
    expect(() => unmount()).not.toThrow();
  });
  it("should render header correctly", () => {
    setup();
    const header = screen.getByText("Item List");
    expect(header).toBeInTheDocument();
  });
  it("should in first just render add new item's button", () => {
    setup();
    const addNewItemButton = screen.getByRole("button", {
      name: /\+ add new item/i,
    });
    const itemNameInput = screen.queryAllByTestId(/item/i);
    expect(addNewItemButton).toBeInTheDocument();
    expect(itemNameInput).toHaveLength(0);
  });
  it("when click on add new item's button add new item", async () => {
    setup();
    const user = userEvent.setup();
    let addNewItemButton = screen.getByRole("button", {
      name: /\+ add new item/i,
    });
    await user.click(addNewItemButton);
    const itemNameInput = screen.getAllByTestId(/item/i);
    expect(addNewItemButton).toBeInTheDocument();
    expect(itemNameInput).toHaveLength(1);
  });
  it("when clicked multiple times on add new item, items will be added", async () => {
    setup();
    const user = userEvent.setup();
    let addNewItemButton = screen.queryByRole("button", {
      name: /\+ add new item/i,
    });
    await user.click(addNewItemButton);
    await user.click(addNewItemButton);
    await user.click(addNewItemButton);
    const itemNameInput = screen.getAllByTestId(/item/i);
    expect(itemNameInput).toHaveLength(3);
  });
});
