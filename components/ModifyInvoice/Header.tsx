import { styled } from "stitches-config";

const StyledHeader = styled("div", {
  marginBlockEnd: "3rem",
  fontFamily: "$spartan",
  fontSize: "$xxl",
  fontWeight: 700,

  "& span": {
    color: "$ntrl-ltr",
  },
});

interface IHeader {
  children: React.ReactNode;
}

const Header: React.FC<IHeader> = ({ children, ...props }) => {
  return <StyledHeader {...props}>{children}</StyledHeader>;
};

export default Header;
