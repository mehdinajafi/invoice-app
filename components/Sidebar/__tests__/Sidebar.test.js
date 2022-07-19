import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import Sidebar from "../Sidebar";

const setup = () => {
  render(
    <Provider store={store}>
      <Sidebar />
    </Provider>
  );
  const user = userEvent.setup();
  return {
    user,
  };
};

describe("Sidebar", () => {
  it("should change theme work correctly", async () => {
    const { user } = setup();
    const changeToDark = screen.getByTestId(/change-theme-to-dark/i);
    await user.click(changeToDark);
    const changeToLight = screen.getByTestId(/change-theme-to-light/i);
    expect(changeToLight).toBeInTheDocument();
    expect(document.querySelector("html")).toHaveAttribute("class", "dark");
  });

  it("avatar link to github profile in new tab", () => {
    setup();
    const link = screen.getByTestId(/github-link/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("href", "https://github.com/mehdinajafi");
  });
});
