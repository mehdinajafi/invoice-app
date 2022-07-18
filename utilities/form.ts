import add from "date-fns/add";
import { FormValues } from "types/form";
import { IItem } from "types/invoice";
import { formatDate } from "./misc";

export const reduceErrors = (errors: any): string[] => {
  const messages = [];

  for (const key in errors) {
    const value = errors[key];
    if (typeof value === "string") {
      messages.push(value);
    } else if (typeof value === "object") {
      messages.push(...reduceErrors(value));
    } else if (Array.isArray(value)) {
      for (const item of value) {
        messages.push(...reduceErrors(item));
      }
    }
  }

  return [...new Set(messages)];
};

const calcTotal = (items: IItem[]) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].total;
  }
  return total;
};

export const createInvoice = (
  status: "paid" | "draft" | "pending",
  values: FormValues
) => {
  const createdAt = new Date(values.createdAt);

  return {
    ...values,
    status,
    paymentDue: formatDate(
      add(createdAt, { days: Number(values.paymentTerms) })
    ),
    total: calcTotal(values.items),
  };
};
