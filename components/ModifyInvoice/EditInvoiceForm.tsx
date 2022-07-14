import React from "react";
import { Formik } from "formik";
import { AnimatePresence } from "framer-motion";
import { styled } from "stitches-config";
import { Button } from "@/components/Button";
import Backdrop from "./Backdrop";
import Fields from "./Fields";
import Form from "./Form";
import Header from "./Header";
import IInvoice from "@/types/invoice";
import { validationSchema } from "@/data/form";
import { useAppDispatch } from "@/store/hooks";
import { FormValues } from "@/types/form";
import { editInvoice } from "@/store/InvoicesSlice";
import { createInvoice } from "@/utilities/form";

const Buttons = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "0.5rem",
  padding: "2rem 0",
});

interface IEditInvoiceForm {
  isOpen: boolean;
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  invoice: IInvoice;
}

const EditInvoiceForm: React.FC<IEditInvoiceForm> = ({
  isOpen,
  invoice,
  setFormIsOpen,
}) => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: FormValues) => {
    dispatch(
      editInvoice({
        id: invoice.id,
        changes: {
          id: invoice.id,
          ...createInvoice(invoice.status, values),
        },
      })
    );
    setFormIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Formik
          onSubmit={onSubmit}
          initialValues={invoice}
          validationSchema={validationSchema}
        >
          {() => (
            <React.Fragment>
              <Backdrop setFormIsOpen={setFormIsOpen} />
              <Form>
                <Header>
                  Edit <span>#</span>
                  {invoice.id}
                </Header>

                <Fields />

                <Buttons>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => setFormIsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary">
                    Save Changes
                  </Button>
                </Buttons>
              </Form>
            </React.Fragment>
          )}
        </Formik>
      )}
    </AnimatePresence>
  );
};

export default EditInvoiceForm;
