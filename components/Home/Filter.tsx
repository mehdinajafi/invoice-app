import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import React from "react";
import { dark, keyframes, styled } from "stitches-config";
import { Filter as FilterType } from "@/pages/index";
import ArrowDownIcon from "@/public/images/icon-arrow-down.svg";
import CheckIcon from "@/public/images/icon-check.svg";

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

  "& svg": {
    marginInlineStart: "1rem",
    transition: "transform 400ms",
  },
  "& span": {
    display: "none",

    "@sm": {
      display: "inline",
    },
  },
  variants: {
    isExpanded: {
      true: {
        "& svg": {
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
  backgroundColor: "$subtle-floating",
  boxShadow: "rgb(72 84 159 / 25%) 0px 10px 20px",
  width: "12rem",
  padding: "1.5rem",
  marginBlockStart: "1.2rem",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  [`.${dark} &`]: {
    boxShadow: "rgb(72 84 159 / 10%) 0px 10px 20px",
  },

  "&[data-reach-menu-list] , &[data-reach-menu-items]": {
    animation: `${slideDown} 200ms ease`,
  },
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
  "& input + span svg": {
    display: "none",
  },
  "& input:checked + span svg": {
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
  backgroundColor: "$ntrl-ltst",

  "& svg": {
    width: "10px",
    height: "7px",
  },
});

interface IItem {
  label: string;
  filter: FilterType;
  onSelect: () => void;
}

const Item: React.FC<IItem> = ({ label, filter, onSelect }) => {
  return (
    <MenuItem onSelect={() => {}}>
      <LabelItem>
        <input type="checkbox" checked={label === filter} onChange={onSelect} />

        <Checkbox>
          <CheckIcon />
        </Checkbox>

        <span>{label}</span>
      </LabelItem>
    </MenuItem>
  );
};

interface IFilter {
  filter: FilterType;
  setFilter: (filterBy: FilterType) => void;
}

const Filter: React.FC<IFilter> = ({ filter, setFilter }) => {
  return (
    <Menu>
      {({ isExpanded }: { isExpanded: boolean }) => (
        <React.Fragment>
          <Button isExpanded={isExpanded}>
            Filter <span>by status</span> <ArrowDownIcon />
          </Button>

          <List>
            <Item
              label="paid"
              filter={filter}
              onSelect={() => setFilter("paid")}
            />
            <Item
              label="pending"
              filter={filter}
              onSelect={() => setFilter("pending")}
            />
            <Item
              label="draft"
              filter={filter}
              onSelect={() => setFilter("draft")}
            />
          </List>
        </React.Fragment>
      )}
    </Menu>
  );
};

export default Filter;
