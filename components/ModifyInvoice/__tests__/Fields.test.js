import { Formik } from "formik";
import Fields from "../Fields";
import { initialValues } from "@/data/form";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setup = () => {
  return render(
    <Formik onSubmit={jest.fn} initialValues={initialValues}>
      <Fields />
    </Formik>
  );
};

describe("Fields", () => {
  it("should render Fields correctrly", () => {
    const { unmount } = setup();
    expect(() => unmount()).not.toThrow();
  });

  it("should render all fields", async () => {
    setup();
    const user = userEvent.setup();

    const billFromGroup = screen.getByRole("group", {
      name: /bill from/i,
    });
    expect(billFromGroup).toBeInTheDocument();

    expect(
      within(billFromGroup).getByLabelText(/street address/i)
    ).toBeInTheDocument();
    expect(within(billFromGroup).getByLabelText(/city/i)).toBeInTheDocument();
    expect(
      within(billFromGroup).getByLabelText(/post code/i)
    ).toBeInTheDocument();
    expect(
      within(billFromGroup).getByLabelText(/country/i)
    ).toBeInTheDocument();

    const billToGroup = screen.getByRole("group", {
      name: /bill to/i,
    });
    expect(billToGroup).toBeInTheDocument();

    expect(screen.getByLabelText(/client's name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/client's email/i)).toBeInTheDocument();
    expect(
      within(billToGroup).getByLabelText(/street address/i)
    ).toBeInTheDocument();
    expect(within(billToGroup).getByLabelText(/city/i)).toBeInTheDocument();
    expect(
      within(billToGroup).getByLabelText(/post code/i)
    ).toBeInTheDocument();
    expect(within(billToGroup).getByLabelText(/country/i)).toBeInTheDocument();

    const addItemButton = screen.getByRole("button", {
      name: /\+ add new item/i,
    });
    expect(addItemButton).toBeInTheDocument();
    await user.click(addItemButton);

    expect(screen.getByLabelText(/item name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/qty\./i)).toBeInTheDocument();
    expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/total/i)).toBeInTheDocument();
  });
});
