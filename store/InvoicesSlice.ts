import {
  createEntityAdapter,
  createSlice,
  EntityId,
  PayloadAction,
} from "@reduxjs/toolkit";
import IInvoice from "types/invoice";
import data from "@/data/data.json";

const invoicesAdapter = createEntityAdapter<IInvoice>({
  selectId: (invoice) => invoice.id,
});

const emptyInitialState = invoicesAdapter.getInitialState();
const filledState = invoicesAdapter.upsertMany(
  emptyInitialState,
  data as IInvoice[]
);

const Invoices = createSlice({
  name: "invoices",
  initialState: filledState,
  reducers: {
    addOne: invoicesAdapter.addOne,
    deleteOne: invoicesAdapter.removeOne,
    markInvoiceAsPaid: (state, action: PayloadAction<EntityId>) => {
      invoicesAdapter.updateOne(state, {
        id: action.payload,
        changes: { status: "paid" },
      });
    },
    editInvoice: (
      state,
      action: PayloadAction<{ id: EntityId; changes: IInvoice }>
    ) => {
      invoicesAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload.changes,
      });
    },
  },
});

export const { addOne, deleteOne, markInvoiceAsPaid, editInvoice } =
  Invoices.actions;

export const { selectAll, selectById } = invoicesAdapter.getSelectors();

export default Invoices.reducer;
