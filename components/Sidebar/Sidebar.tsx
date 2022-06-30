import { Avatar } from "components/Avatar";
import Image from "next/image";
import Logo from "./Logo";
import { Button, Divider, Wrapper, OptionsWrapper } from "./Sidebar.styles";

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
