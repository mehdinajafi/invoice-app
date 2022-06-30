import Image from "next/image";
import { styled } from "stitches-config";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$primary",
  width: "80px",
  height: "100%",
  position: "relative",
  borderRadius: "0px 20px 20px 0px",

  "@lg": {
    width: "100%",
    height: "103px",
  },

  "&::after": {
    content: " ",
    backgroundColor: "$primary-lt",
    position: "absolute",
    bottom: "0",
    right: 0,
    left: 0,
    height: "50%",
    borderRadius: "20px 0",
  },
});

const LogoImg = styled(Image, {
  zIndex: 1,
  width: "31px",
  height: "29px",

  "@lg": {
    width: "40px",
    height: "37px",
  },
});

const Logo = () => {
  return (
    <Wrapper>
      <LogoImg src="/images/logo.svg" width={40} height={37} />
    </Wrapper>
  );
};

export default Logo;
