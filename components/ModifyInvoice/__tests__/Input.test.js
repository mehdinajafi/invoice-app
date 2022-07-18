import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik } from "formik";
import Input from "../Input";

const setup = () => {
  return render(
    <Formik onSubmit={jest.fn} initialValues={{ description: "" }}>
      <Input
        label="Description"
        name="description"
        placeholder="e.g. Graphic Design Service"
      />
    </Formik>
  );
};

describe("Input", () => {
  it("should render Input correctly", () => {
    const { unmount } = setup();
    expect(() => unmount()).not.toThrow();
  });
  it("should render input and label correctly", () => {
    setup();
    const input = screen.getByLabelText("Description");
    expect(input).toBeInTheDocument();
  });
  it("should change value correctly", async () => {
    setup();
    const user = userEvent.setup();
    const input = screen.getByLabelText(/description/i);
    const text = "some text text";
    await user.type(input, text);
    expect(input).toHaveValue(text);
  });
  it("should render placeholder correctly", () => {
    setup();
    const input = screen.getByPlaceholderText("e.g. Graphic Design Service");
    expect(input).toBeInTheDocument();
  });
});
