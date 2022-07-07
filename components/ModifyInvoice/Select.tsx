import { useField } from "formik";
import { styled } from "stitches-config";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "0.625rem",
});

const Label = styled("label", {
  color: "$ntrl-ltr",
  fontFamily: "$spartan",
  fontSize: "$xs",
});

const SelectWrapper = styled("div", {
  position: "relative",
  "&::after": {
    content: "url(/images/icon-arrow-down.svg)",
    position: "absolute",
    top: "50%",
    right: "1rem",
    transform: "translateY(-50%)",
  },
});

const StyledSelect = styled("select", {
  border: "1px solid $ntrl-ltst",
  borderRadius: "4px",
  width: "100%",
  height: "100%",
  padding: "1rem 1.25rem",
  fontFamily: "$spartan",
  fontSize: "$xs",
  fontWeight: "bold",
  appearance: "none",
  outline: "none",
  backgroundColor: "$subtle-floating",

  "&:focus": {
    borderColor: "$primary",
  },
});

interface ISelect {
  label: string;
  name: string;
  options: {
    name: string;
    value: number;
  }[];
}

const Select: React.FC<ISelect> = ({ options, name, label }) => {
  const [field] = useField(name);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <SelectWrapper>
        <StyledSelect {...field}>
          {options.map((option) => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
        </StyledSelect>
      </SelectWrapper>
    </Wrapper>
  );
};

export default Select;
