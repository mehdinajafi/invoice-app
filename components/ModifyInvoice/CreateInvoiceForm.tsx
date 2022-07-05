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
  const onSubmit = () => {};

  return (
    <AnimatePresence>
      {isOpen && (
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {() => (
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
                  >
                    Discard
                  </Button>
                  <Button type="button" variant="dark">
                    Save as Draft
                  </Button>
                  <Button type="button" variant="primary">
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
