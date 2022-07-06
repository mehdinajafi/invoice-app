import IInvoice from "./invoice";

export type FormValues = Omit<
  IInvoice,
  "id" | "status" | "paymentDue" | "total"
>;
