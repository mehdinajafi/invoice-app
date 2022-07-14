import { forwardRef } from "react";
import { useField, useFormikContext } from "formik";
import { styled } from "stitches-config";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalenderIcon from "@/public/images/icon-calendar.svg";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.625rem",
});

const Label = styled("label", {
  fontFamily: "$spartan",
  fontSize: "$xs",
  color: "$ntrl-ltr",
});

const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "1rem 1.5rem",
  border: "1px solid $ntrl-ltst",
  borderRadius: "4px",
  backgroundColor: "$subtle-floating",
  fontFamily: "$spartan",
  fontSize: "$xs",
  fontWeight: "bold",
  cursor: "pointer",
});

const CustumInput = forwardRef<HTMLButtonElement, any>(
  ({ value, onClick }, ref) => (
    <Button type="button" onClick={onClick} ref={ref}>
      <span>{value}</span>
      <CalenderIcon />
    </Button>
  )
);

CustumInput.displayName = "CustumDatePickerInput";

interface IDatePicker {
  [x: string]: any;
  label: string;
  name: string;
}

const DatePicker: React.FC<IDatePicker> = ({ name, label }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>

      <ReactDatePicker
        id={name}
        selected={new Date(field.value)}
        onChange={(date) => setFieldValue(name, date)}
        dateFormat="MMM d, yyyy"
        customInput={<CustumInput />}
      />
    </Wrapper>
  );
};

export default DatePicker;
