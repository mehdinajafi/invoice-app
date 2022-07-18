import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FieldArray, Formik } from "formik";
import Item from "../Item";

const setup = () => {
  const user = userEvent.setup();

  const { unmount } = render(
    <Formik
      onSubmit={jest.fn}
      initialValues={{
        items: [{ name: "", quantity: "", price: "", total: "" }],
      }}
    >
      <FieldArray
        name="items"
        render={(helpers) => <Item index={0} helpers={helpers} />}
      />
    </Formik>
  );

  const nameInput = screen.getByLabelText(/item name/i);
  const quantityInput = screen.getByLabelText(/qty\./i);
  const priceInput = screen.getByLabelText(/price/i);
  const totalInput = screen.getByLabelText(/total/i);

  return {
    user,
    unmount,
    nameInput,
    quantityInput,
    priceInput,
    totalInput,
  };
};

describe("Item", () => {
  it("should render Item correctly", () => {
    const { unmount } = setup();
    expect(() => unmount()).not.toThrow();
  });

  it("should render all required inputs correctly", () => {
    const { nameInput, quantityInput, priceInput, totalInput } = setup();
    expect(nameInput).toBeInTheDocument();
    expect(quantityInput).toBeInTheDocument();
    expect(priceInput).toBeInTheDocument();
    expect(totalInput).toBeInTheDocument();
  });

  it("total input must be disabled", () => {
    const { totalInput } = setup();
    expect(totalInput).toBeDisabled();
  });

  it("should change name value correctly", async () => {
    const { user, nameInput } = setup();
    const text = "some random text";
    await user.type(nameInput, text);
    expect(nameInput).toHaveValue(text);
  });

  it.each([
    ["5", "100", "500"],
    ["4", "5.337", "21.35"],
    ["8.3", "9398.3", "78005.89"],
  ])("should calculate the total price correctly", async (a, b, expected) => {
    const { user, quantityInput, priceInput, totalInput } = setup();

    await user.type(quantityInput, a);
    await user.type(priceInput, b);

    expect(totalInput).toHaveValue(expected);
  });
});
