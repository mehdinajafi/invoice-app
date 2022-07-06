import React from "react";
import { Formik } from "formik";
import { AnimatePresence } from "framer-motion";
import { styled } from "stitches-config";
import { Button } from "components/Button";
import Backdrop from "./Backdrop";
import Fields from "./Fields";
import Form from "./Form";
import Header from "./Header";
import { initialValues, validationSchema } from "../../data/form";
import { addOne } from "store/InvoicesSlice";
import { createInvoice } from "utilities/form";
import { generateUniqueId } from "utilities/id";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { FormValues } from "types/form";

const Buttons = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.5rem",
  padding: "2rem 0",
});

interface ICreateInvoiceForm {
  isOpen: boolean;
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateInvoiceForm: React.FC<ICreateInvoiceForm> = ({
  isOpen,
  setFormIsOpen,
}) => {
  const invoicesIds = useAppSelector((state) => state.invoices.ids);
  const dispatch = useAppDispatch();

  const onSubmit = (values: FormValues) => {
    dispatch(
      addOne({
        id: generateUniqueId(invoicesIds),
        ...createInvoice("paid", values),
      })
    );
    setFormIsOpen(false);
  };

  const saveAsDraft = (values: FormValues) => {
    dispatch(
      addOne({
        id: generateUniqueId(invoicesIds),
        ...createInvoice("draft", values),
      })
    );
    setFormIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues as FormValues}
          validationSchema={validationSchema}
        >
          {({ values }) => (
            <React.Fragment>
              <Backdrop setFormIsOpen={setFormIsOpen} />
              <Form>
                <Header>Create Invoice</Header>

                <Fields />

                <Buttons>
                  <Button
                    type="button"
                    variant="light"
                    css={{ marginRight: "auto" }}
                    onClick={() => setFormIsOpen(false)}
                  >
                    Discard
                  </Button>
                  <Button
                    type="button"
                    variant="dark"
                    onClick={() => saveAsDraft(values)}
                  >
                    Save as Draft
                  </Button>
                  <Button type="submit" variant="primary">
                    Save & Send
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

export default CreateInvoiceForm;
