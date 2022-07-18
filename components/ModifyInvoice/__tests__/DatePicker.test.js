import { render, screen } from "@testing-library/react";
import { Formik } from "formik";
import format from "date-fns/format";
import DatePicker from "../DatePicker";

const setup = () => {
  return render(
    <Formik
      onSubmit={() => jest.fn()}
      initialValues={{ createdAt: new Date() }}
    >
      <DatePicker name="createdAt" label="Invoice Date" />
    </Formik>
  );
};

describe("DatePicker", () => {
  it("should render DatePicker correctly", () => {
    const { unmount } = setup();
    expect(() => unmount()).not.toThrow();
  });

  it("should render label correctly", () => {
    setup();
    const label = screen.getByText(/Invoice Date/i);
    expect(label).toBeInTheDocument();
  });

  it("should first display today's date with 'Dec 25, 2021' format", () => {
    setup();
    const datePickerInput = screen.getByText(format(new Date(), "MMM d, yyyy"));
    expect(datePickerInput).toBeInTheDocument();
  });
});
