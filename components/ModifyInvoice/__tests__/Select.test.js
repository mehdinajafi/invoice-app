import Select from "../Select";
import { render, screen } from "@testing-library/react";
import { Formik } from "formik";

const Wrapper = ({ children }) => <Formik>{children}</Formik>;

describe("Select", () => {
  it("should render select correctly", () => {
    render(
      <Wrapper>
        <Select
          data-testid="form-select"
          name="form-select"
          options={[{ name: "select-option", value: 1 }]}
        />
      </Wrapper>
    );

    expect(screen.getByText("select-option")).toBeInTheDocument();
  });
});
