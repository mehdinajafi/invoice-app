import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import React from "react";
import { keyframes, styled } from "stitches-config";

const Button = styled(MenuButton, {
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  fontFamily: "$spartan",
  fontSize: "$xs",
  fontWeight: 700,
  color: "$ntrl-dkr",
  cursor: "pointer",

  "& img": {
    marginInlineStart: "1rem",
    transition: "transform 400ms",
  },
  variants: {
    isExpanded: {
      true: {
        "& img": {
          transform: "rotate(-180deg)",
        },
      },
    },
  },
});

const slideDown = keyframes({
  from: {
    transform: "translateY(-10px)",
    opacity: 0,
  },
  to: {
    transform: "translateY(0)",
    opacity: 1,
  },
});

const List = styled(MenuList, {
  boxShadow: "rgb(72 84 159 / 25%) 0px 10px 20px",
  width: "12rem",
  padding: "1.5rem",
  marginBlockStart: "1.2rem",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  "&[data-reach-menu-list] , &[data-reach-menu-items]": {
    animation: `${slideDown} 200ms ease`,
  },
});

const Item = styled(MenuItem, {
  "&[data-selected]": {},
});

const LabelItem = styled("label", {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",

  "&:hover input + span": {
    borderColor: "$primary",
  },

  "& input": {
    display: "none",
  },
  "& span": {
    fontFamily: "$spartan",
    fontSize: "$xs",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  "& input + span img": {
    display: "none",
  },
  "& input:checked + span img": {
    display: "inline",
  },
  "& input:checked + span": {
    backgroundColor: "$primary",
  },
});

const Checkbox = styled("span", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "16px",
  height: "16px",
  marginInlineEnd: "1rem",
  border: "1px solid transparent",
  borderRadius: "2px",
  backgroundColor: "$primary-ltr",

  "& img": {
    width: "10px",
    height: "7px",
  },
});

const Filter = () => {
  return (
    <Menu>
      {({ isExpanded }: { isExpanded: boolean }) => (
        <React.Fragment>
          <Button isExpanded={isExpanded}>
            Filter by status{" "}
            <img
              alt=""
              src="/images/icon-arrow-down.svg"
              width={11}
              height={7}
            />
          </Button>

          <List>
            <Item onSelect={() => {}}>
              <LabelItem>
                <input type="checkbox" />

                <Checkbox>
                  <img src="/images/icon-check.svg" width={10} height={6} />
                </Checkbox>

                <span>paid</span>
              </LabelItem>
            </Item>
            <Item onSelect={() => {}}>
              <LabelItem>
                <input type="checkbox" />

                <Checkbox>
                  <img src="/images/icon-check.svg" width={10} height={6} />
                </Checkbox>

                <span>pending</span>
              </LabelItem>
            </Item>
            <Item onSelect={() => {}}>
              <LabelItem>
                <input type="checkbox" />

                <Checkbox>
                  <img src="/images/icon-check.svg" width={10} height={6} />
                </Checkbox>

                <span>draft</span>
              </LabelItem>
            </Item>
          </List>
        </React.Fragment>
      )}
    </Menu>
  );
};

export default Filter;
