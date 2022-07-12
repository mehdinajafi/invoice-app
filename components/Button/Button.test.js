import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import Button from "./Button";

const user = userEvent.setup();

describe("Button", () => {
  it("should render button correctly", () => {
    const wrapper = render(<Button>Button</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render diffrent text", () => {
    const wrapper = render(<Button>Button1</Button>);
    expect(screen.getByText("Button1")).toBeInTheDocument();
    wrapper.rerender(<Button>Button2</Button>);
    expect(screen.getByText("Button2")).toBeInTheDocument();
  });

  it("should ignore events when button is disabled", () => {
    const ButtonWrapper = () => {
      const [state, setState] = useState("state1");

      return (
        <Button disabled onClick={() => setState("state2")}>
          {state}
        </Button>
      );
    };
    render(<ButtonWrapper />);
    const button = screen.getByText("state1");
    user.click(button);
    expect(screen.getByText("state1")).toBeInTheDocument();
    expect(screen.queryByText("state2")).not.toBeInTheDocument();
  });
});
