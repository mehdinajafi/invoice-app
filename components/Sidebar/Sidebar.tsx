import { Avatar } from "components/Avatar";
import Image from "next/image";
import { styled } from "stitches-config";
import Logo from "./Logo";

const Wrapper = styled("aside", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "$ntrl-dk",
  borderRadius: "0",
  zIndex: "$layerC",

  "@lg": {
    flexDirection: "column",
    borderRadius: "0 20px 20px 0",
  },
});

const OptionsWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",

  "@lg": {
    flexDirection: "column",
    borderRadius: "0 0 20px 0",
  },
});

const Button = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  margin: "1.5rem 1.5rem",
  cursor: "pointer",

  "@lg": {
    margin: "1.5rem 0",
  },
});

const Divider = styled("div", {
  width: "1px",
  height: "100%",
  backgroundColor: "$ntrl",
  alignSelf: "stretch",
  transform: "rotate(180deg)",

  "@lg": {
    width: "100%",
    height: "1px",
  },
});

const Sidebar = () => {
  return (
    <Wrapper>
      <Logo />

      <OptionsWrapper>
        <Button>
          <Image src="/images/icon-moon.svg" width={20} height={20} alt="" />
        </Button>
        <Divider />
        <Button>
          <Avatar
            src="https://avatars.githubusercontent.com/u/49032944?v=4"
            width={30}
            height={30}
            alt=""
          />
        </Button>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default Sidebar;
