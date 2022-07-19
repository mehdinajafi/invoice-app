import { useEffect, useState } from "react";
import Image from "next/image";
import { styled } from "stitches-config";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setTheme } from "@/store/ThemeSlice";
import { Avatar } from "@/components/Avatar";
import Logo from "./Logo";

const Wrapper = styled("aside", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "$ntrl-dk",
  borderRadius: "0",
  zIndex: "$layer-c",

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
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  // This flag is for show theme toggle only on client
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const ThemeToggle = () => {
    if (theme === "light") {
      return (
        <Button
          data-testid="change-theme-to-dark"
          onClick={() => dispatch(setTheme("dark"))}
        >
          <Image
            src="/images/icon-moon.svg"
            width={20}
            height={20}
            alt="moon"
          />
        </Button>
      );
    } else {
      return (
        <Button
          data-testid="change-theme-to-light"
          onClick={() => dispatch(setTheme("light"))}
        >
          <Image src="/images/icon-sun.svg" width={20} height={20} alt="sun" />
        </Button>
      );
    }
  };

  return (
    <Wrapper>
      <Logo />

      <OptionsWrapper>
        {hasMounted && <ThemeToggle />}
        <Divider />
        <Button>
          <a
            href="https://github.com/mehdinajafi"
            target="_blank"
            rel="noreferrer"
            data-testid="github-link"
          >
            <Avatar
              src="https://avatars.githubusercontent.com/u/49032944?v=4"
              width={30}
              height={30}
              alt=""
            />
          </a>
        </Button>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default Sidebar;
