import { render, screen } from "@testing-library/react";
import Wrapper from "../Wrapper";

describe("Invoice page Wrapper", () => {
  it("should render children correctly", () => {
    render(
      <Wrapper>
        <div>children</div>
      </Wrapper>
    );
    const children = screen.getByText("children");
    expect(children).toBeInTheDocument();
  });
});
