import { useField } from "formik";
import { styled } from "stitches-config";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.625rem",
});

const Label = styled("label", {
  fontFamily: "$spartan",
  fontSize: "$xs",
  color: "$ntrl-ltr",

  variants: {
    hasError: {
      true: {
        color: "$danger",
      },
    },
  },
});

const StyledInput = styled("input", {
  border: "1px solid $primary-ltr",
  borderRadius: "4px",
  outline: "none",
  fontFamily: "$spartan",
  fontSize: "$xs",
  fontWeight: "bold",
  lineHeight: 1.125,
  padding: "1rem 1.25rem",
  width: "100%",
  transition: "border-color 200ms",

  "&:focus": {
    border: "1px solid $primary",
  },

  "&:disabled": {
    border: "none",
    backgroundColor: "transparent",
    padding: "1rem 0",
  },

  variants: {
    hasError: {
      true: {
        borderColor: "$danger",
      },
    },
  },
});

interface IInput {
  [x: string]: any;
  name: string;
}

const Input: React.FC<IInput> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error ? true : false;

  return (
    <Wrapper>
      <Label htmlFor={props.name} hasError={hasError}>
        {label}
      </Label>
      <StyledInput {...field} {...props} id={props.name} hasError={hasError} />
    </Wrapper>
  );
};

export default Input;
