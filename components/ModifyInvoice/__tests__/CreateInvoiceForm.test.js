import { Provider } from "react-redux";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "@/store/index";
import { formatDate } from "@/utilities/misc";
import CreateInvoiceForm from "../CreateInvoiceForm";

const typeOnForm = async (fields, user, except) => {
  const addItemButton = screen.getByRole("button", {
    name: /\+ add new item/i,
  });
  await user.click(addItemButton);

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    if (field.key !== except) {
      if (field.group) {
        await user.type(
          within(field.group).getByLabelText(field.label),
          field.value
        );
      } else {
        await user.type(screen.getByLabelText(field.label), field.value);
      }
    }
  }
};

const formValues = {
  description: "Re-branding",
  clientName: "Jensen Huang",
  clientEmail: "jensenh@mail.com",
  createdAt: formatDate("now"),
  paymentTerms: "30",
  senderAddress: {
    street: "19 Union Terrace",
    city: "London",
    postCode: "E1 3EZ",
    country: "United Kingdom",
  },
  clientAddress: {
    street: "106 Kendell Street",
    city: "Sharrington",
    postCode: "NR24 5WQ",
    country: "United Kingdom",
  },
  items: [
    {
      name: "Brand Guidelines",
      quantity: "1",
      price: "1800.9",
      total: 1800.9,
    },
  ],
};

const createFields = () => {
  const billFromGroup = screen.getByRole("group", {
    name: /bill from/i,
  });
  const billToGroup = screen.getByRole("group", {
    name: /bill to/i,
  });

  return [
    {
      label: /Description/i,
      value: formValues.description,
      key: "description",
      group: null,
    },
    {
      label: /street address/i,
      value: formValues.senderAddress.street,
      key: "senderAddress.street",
      group: billFromGroup,
    },
    {
      label: /city/i,
      value: formValues.senderAddress.city,
      key: "senderAddress.city",
      group: billFromGroup,
    },
    {
      label: /post code/i,
      value: formValues.senderAddress.postCode,
      key: "senderAddress.postCode",
      group: billFromGroup,
    },
    {
      label: /country/i,
      value: formValues.senderAddress.country,
      key: "senderAddress.country",
      group: billFromGroup,
    },
    {
      label: /Client's Email/i,
      value: formValues.clientEmail,
      key: "clientEmail",
      group: billToGroup,
    },
    {
      label: /Client's Name/i,
      value: formValues.clientName,
      key: "clientName",
      group: billToGroup,
    },
    {
      label: /street address/i,
      value: formValues.clientAddress.street,
      key: "clientAddress.street",
      group: billToGroup,
    },
    {
      label: /city/i,
      value: formValues.clientAddress.city,
      key: "clientAddress.city",
      group: billToGroup,
    },
    {
      label: /post code/i,
      value: formValues.clientAddress.postCode,
      key: "clientAddress.postCode",
      group: billToGroup,
    },
    {
      label: /country/i,
      value: formValues.clientAddress.country,
      key: "clientAddress.country",
      group: billToGroup,
    },
    {
      label: /item name/i,
      value: formValues.items[0].name,
      key: "items.0.name",
      group: null,
    },
    {
      label: /qty\./i,
      value: formValues.items[0].quantity,
      key: "items.0.quantity",
      group: null,
    },
    {
      label: /price/i,
      value: formValues.items[0].price,
      key: "items.0.price",
      group: null,
    },
  ];
};

const setup = (props) => {
  render(
    <Provider store={store}>
      <CreateInvoiceForm {...props} />
    </Provider>
  );
  const user = userEvent.setup();

  return {
    user,
  };
};

describe("CreateInvoiceForm", () => {
  it("should run header correctly", () => {
    const setFormIsOpen = jest.fn();
    setup({ isOpen: true, setFormIsOpen });
    const header = screen.getByText("Create Invoice");
    expect(header).toBeInTheDocument();
  });

  it("should render correct buttons", () => {
    const setFormIsOpen = jest.fn();
    setup({ isOpen: true, setFormIsOpen });
    const saveAndSendButton = screen.getByRole("button", {
      name: /save & send/i,
    });
    const saveAndDraftButton = screen.getByRole("button", {
      name: /save as draft/i,
    });
    const discardButton = screen.getByRole("button", {
      name: /draft/i,
    });

    expect(saveAndSendButton).toBeInTheDocument();
    expect(saveAndDraftButton).toBeInTheDocument();
    expect(discardButton).toBeInTheDocument();
  });

  it("Rendering & submitting 'Create Invoice Form'", async () => {
    const handleSubmit = jest.fn();
    const setFormIsOpen = jest.fn();
    const { user } = setup({
      onSubmit: handleSubmit,
      setFormIsOpen,
      isOpen: true,
    });

    const fields = createFields();
    await typeOnForm(fields, user);
    const submitButton = screen.getByText("Save & Send");
    await user.click(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toBeCalledTimes(1);
      expect(handleSubmit).toBeCalledWith(formValues);
    });
  });

  test.each([
    { key: "senderAddress.street" },
    { key: "senderAddress.city" },
    { key: "senderAddress.postCode" },
    { key: "senderAddress.country" },
    { key: "clientName" },
    { key: "clientEmail" },
    { key: "clientAddress.street" },
    { key: "clientAddress.city" },
    { key: "clientAddress.postCode" },
    { key: "clientAddress.country" },
    { key: "description" },
    { key: "items.0.name" },
    { key: "items.0.quantity" },
    { key: "items.0.price" },
  ])(
    "stop submitting when '$key' is not entered and throw error",
    async ({ key }) => {
      const handleSubmit = jest.fn();
      const setFormIsOpen = jest.fn();
      const { user } = setup({
        onSubmit: handleSubmit,
        setFormIsOpen: setFormIsOpen,
        isOpen: true,
      });

      const fields = createFields();
      await typeOnForm(fields, user, key);

      const submitButton = screen.getByText("Save & Send");
      await user.click(submitButton);

      await waitFor(() => {
        expect(handleSubmit).toBeCalledTimes(0);

        const errors = screen.getAllByTestId("form-error");
        expect(errors).toHaveLength(1);
      });
    }
  );
});
