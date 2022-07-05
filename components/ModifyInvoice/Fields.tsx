import { styled } from "stitches-config";
import DatePicker from "./DatePicker";
import Input from "./Input";
import Items from "./Items";
import Select from "./Select";

const Wrapper = styled("div", {
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
  "@sm": {
    paddingInlineEnd: "1rem",
  },
});

const Fieldset = styled("fieldset", {
  border: "none",
  padding: 0,
});

const Legend = styled("legend", {
  fontFamily: "$spartan",
  fontSize: "$xs",
  fontWeight: "bold",
  color: "$primary",
  marginBlockEnd: "1.5rem",
});

const BillFromWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1.5rem",

  "@md": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },

  "& > :nth-child(1)": {
    gridColumn: "1 / -1",
  },
});

const BillToWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1.5rem",

  "@md": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },

  "& > :nth-child(1), & > :nth-child(2), & > :nth-child(3)": {
    gridColumn: "1 / -1",
  },
});

const OtherFieldWrapper = styled("fieldset", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1.5rem",
  border: "none",
  padding: 0,

  "& > :nth-child(3)": {
    gridColumn: "1 / -1",
  },
});

const dropdownOptions = [
  { name: "Net 1 Day", value: 1 },
  { name: "Net 7 Days", value: 7 },
  { name: "Net 14 Days", value: 14 },
  { name: "Net 30 Days", value: 30 },
];

const Fields = () => {
  return (
    <Wrapper>
      <Fieldset>
        <Legend>Bill From</Legend>
        <BillFromWrapper>
          <Input label="Street Address" name="senderAddress.street" />
          <Input label="City" name="senderAddress.city" />
          <Input label="Post Code" name="senderAddress.postCode" />
          <Input label="Country" name="senderAddress.country" />
        </BillFromWrapper>
      </Fieldset>

      <Fieldset>
        <Legend>Bill To</Legend>
        <BillToWrapper>
          <Input label="Client's Name" name="clientName" />
          <Input label="Client's Email" name="clientEmail" />
          <Input label="Street Address" name="clientAddress.street" />
          <Input label="City" name="clientAddress.city" />
          <Input label="Post Code" name="clientAddress.postCode" />
          <Input label="Country" name="clientAddress.country" />
        </BillToWrapper>
      </Fieldset>

      <OtherFieldWrapper>
        <DatePicker name="createdAt" label="Invoice Date" />
        <Select
          label="Payment Terms"
          name="paymentTerms"
          options={dropdownOptions}
        ></Select>
        <Input
          label="Description"
          name="description"
          placeholder="e.g. Graphic Design Service"
        />
      </OtherFieldWrapper>

      <Items />
    </Wrapper>
  );
};

export default Fields;
