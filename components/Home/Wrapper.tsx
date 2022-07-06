import { styled } from "stitches-config";

const StyledWrapper = styled("div", {
  width: "100%",
  maxWidth: "45.625rem",
  margin: "0 auto",
});

interface IWrapper {
  children?: React.ReactNode;
}

const Wrapper: React.FC<IWrapper> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
