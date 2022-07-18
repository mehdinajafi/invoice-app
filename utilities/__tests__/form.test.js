import { reduceErrors, createInvoice } from "../form";

const formValues = {
  description: "Re-branding",
  clientName: "Jensen Huang",
  clientEmail: "jensenh@mail.com",
  createdAt: "2022-07-18",
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

describe("form utilities", () => {
  it("should reduceErrors work correctly", () => {
    const errors = {
      clientName: "- All fields must be filled.",
      clientAddress: {
        street: "- All fields must be filled.",
        city: "- Client city is required.",
      },
      items: [
        {
          name: "- All fields must be filled.",
          price: "- Item name is required.",
        },
      ],
    };
    const errorMessages = reduceErrors(errors);
    expect(errorMessages).toStrictEqual([
      "- All fields must be filled.",
      "- Client city is required.",
      "- Item name is required.",
    ]);
  });

  it.each([["paid"], ["draft"], ["pending"]])(
    "should createInvoice work when status is '$status'",
    (status) => {
      const invoice = createInvoice(status, formValues);
      expect(invoice).toStrictEqual({
        ...formValues,
        status: status,
        paymentDue: "2022-08-17",
        total: 1800.9,
      });
    }
  );
});
