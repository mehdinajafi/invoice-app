export interface IItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface IInvoice {
  id: string;
  createdAt: Date | string;
  paymentDue: string;
  description: string;
  paymentTerms: string;
  clientName: string;
  clientEmail: string;
  status: "paid" | "draft" | "pending";
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: IItem[];
  total: number;
}

export default IInvoice;
