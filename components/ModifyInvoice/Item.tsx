import { useEffect } from "react";
import { styled } from "stitches-config";
import { FieldArrayRenderProps, useFormikContext } from "formik";
import Input from "./Input";
import IInvoice from "@/types/invoice";
import DeleteIcon from "@/images/icon-delete.svg";

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr) min-content",
  gap: "1.5rem 1rem",

  "& > :nth-child(1)": {
    gridColumn: "1 / 4",
  },
  "& > :nth-child(2)": {
    gridColumn: "4 / 5",
  },
  "& > :nth-child(3)": {
    gridColumn: "5 / 7",
  },
  "& > :nth-child(5)": {
    alignSelf: "end",
    display: "flex",
    alignItems: "center",
    height: "3rem",
  },
});

const DeleteButton = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  "& svg": {
    fill: "CurrentColor",
    color: "#888EB0",
    transition: "color 200ms",
    blockSize: "auto",
    "&:hover": {
      color: "$danger",
    },
  },
});

interface IItem {
  index: number;
  helpers: FieldArrayRenderProps;
}

const Item: React.FC<IItem> = ({ index, helpers }) => {
  const { values, setFieldValue } = useFormikContext<IInvoice>();
  const quantity = values.items[index].quantity;
  const price = values.items[index].price;

  useEffect(() => {
    const total = quantity * price;
    const rounded = Math.round((total + Number.EPSILON) * 100) / 100;
    setFieldValue(`items.${index}.total`, rounded || "");
  }, [index, setFieldValue, quantity, price]);

  return (
    <Wrapper data-testid="item">
      <Input
        label="Item Name"
        name={`items.${index}.name`}
        data-testid={`item-name-${index}`}
      />
      <Input
        label="Qty."
        name={`items.${index}.quantity`}
        data-testid={`item-quantity-${index}`}
      />
      <Input
        label="Price"
        name={`items.${index}.price`}
        data-testid={`item-price-${index}`}
      />
      <Input
        label="Total"
        name={`items.${index}.total`}
        data-testid={`item-total-${index}`}
        disabled
      />
      <DeleteButton onClick={() => helpers.remove(index)}>
        <DeleteIcon />
      </DeleteButton>
    </Wrapper>
  );
};

export default Item;
