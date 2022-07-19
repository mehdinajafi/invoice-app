import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import Filter from "../Filter";

const Wrapper = () => {
  const [filter, setFilter] = useState("");

  return <Filter filter={filter} setFilter={setFilter} />;
};

const setup = () => {
  render(<Wrapper />);
  const user = userEvent.setup();
  const menuButton = screen.getByText(/Filter/i);
  const menu = screen.getByTestId(/filter-menu-list/i);
  const paidCheckbox = screen.getByLabelText(/paid/i);
  const pendingCheckbox = screen.getByLabelText(/pending/i);
  const draftCheckbox = screen.getByLabelText(/draft/i);

  return {
    user,
    menuButton,
    menu,
    paidCheckbox,
    pendingCheckbox,
    draftCheckbox,
  };
};

describe("Filter", () => {
  it("should render 3 checkbox correctly", () => {
    const { paidCheckbox, pendingCheckbox, draftCheckbox } = setup();
    expect(paidCheckbox).not.toBeVisible();
    expect(pendingCheckbox).not.toBeVisible();
    expect(draftCheckbox).not.toBeVisible();
  });

  it("should menu button work correctly", async () => {
    const { user, menuButton, menu } = setup();
    await user.click(menuButton);
    expect(menu).toBeVisible();
    await user.click(menuButton);
    expect(menu).not.toBeVisible();
  });

  it("when click on label checkbox get checked", async () => {
    const { user, menuButton, paidCheckbox, pendingCheckbox, draftCheckbox } =
      setup();

    await user.click(menuButton);
    await user.click(paidCheckbox);
    expect(paidCheckbox).toBeChecked();
    await user.click(pendingCheckbox);
    expect(pendingCheckbox).toBeChecked();
    await user.click(draftCheckbox);
    expect(draftCheckbox).toBeChecked();
  });
});
