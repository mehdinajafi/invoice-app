import React from "react";
import { FieldArray, useFormikContext } from "formik";
import { styled } from "stitches-config";
import { Button } from "components/Button";
import Item from "./Item";
import { IItem } from "types/invoice";

const Wrapper = styled("fieldset", {
  border: "none",
  padding: 0,
});

const Legend = styled("legend", {
  marginBlockEnd: "1.5rem",
  color: "$ntrl-ltr",
  fontFamily: "$spartan",
  fontSize: "$lg",
  fontWeight: "bold",
});

const ItemsList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const AddNewItemButton = styled(Button, {
  color: "$ntrl-lt",
  backgroundColor: "hsl(228, 71%, 99%)",
  inlineSize: "100%",

  "&:hover": {
    backgroundColor: "$primary-ltr",
  },
});

const Items = () => {
  const { values }: { values: any } = useFormikContext();

  return (
    <Wrapper>
      <Legend>Item List</Legend>
      <FieldArray
        name="items"
        render={(helpers) =>
          values.items && values.items.length > 0 ? (
            <ItemsList>
              {values.items.map((item: IItem, index: number) => (
                <Item key={index} index={index} helpers={helpers} />
              ))}
              <AddNewItemButton
                type="button"
                variant="light"
                onClick={() =>
                  helpers.push({
                    name: "",
                    quantity: "",
                    price: "",
                    total: "",
                  })
                }
              >
                + Add New Item
              </AddNewItemButton>
            </ItemsList>
          ) : (
            <AddNewItemButton
              type="button"
              variant="light"
              onClick={() =>
                helpers.push({ name: "", quantity: "", price: "", total: "" })
              }
            >
              + Add New Item
            </AddNewItemButton>
          )
        }
      />
    </Wrapper>
  );
};

export default Items;
