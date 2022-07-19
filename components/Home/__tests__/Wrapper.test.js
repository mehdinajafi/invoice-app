import { render, screen } from "@testing-library/react";
import Wrapper from "../Wrapper";

describe("Home wrapper", () => {
  it("should render children correctly", () => {
    render(
      <Wrapper>
        <div>children</div>
      </Wrapper>
    );
    const children = screen.getByText(/children/i);
    expect(children).toBeInTheDocument();
  });
});
