import Filter from "./Filter";
import { styled } from "stitches-config";
import { motion } from "framer-motion";
import { Filter as FilterType } from "@/pages/index";
import IconPlus from "@/public/images/icon-plus.svg";

const Wrapper = styled(motion.div, {
  display: "flex",
  alignItems: "center",
  marginBottom: "4rem",
});

const TextWrapper = styled("div", {
  marginInlineEnd: "auto",
});

const Title = styled("h1", {
  fontFamily: "$spartan",
  fontSize: "$xl",
  fontWeight: 700,
  color: "$ntrl-dkr",

  "@sm": {
    fontSize: "2rem",
  },
});

const SubHeading = styled("div", {
  fontFamily: "$spartan",
  fontSize: "$xs",
  color: "$ntrl-ltr",
});

const NewInvoiceBtn = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$primary",
  color: "White",
  fontFamily: "$spartan",
  fontSize: "$xs",
  fontWeight: 700,
  border: "1px solid $primary",
  borderRadius: "10rem",
  padding: "0.5rem 1rem 0.5rem 0.5rem",
  marginInlineStart: "1rem",
  transition: "background-color 200ms",
  cursor: "pointer",

  "@sm": {
    marginInlineStart: "2.5rem",
  },

  "&:hover": {
    backgroundColor: "$primary-lt",
  },

  "& span": {
    display: "none",

    "@sm": {
      display: "inline",
    },
  },
});

const PlusIconWrapper = styled("div", {
  display: "inline-flex",
  borderRadius: "50%",
  padding: "0.625rem",
  marginInlineEnd: "0.5rem",
  backgroundColor: "White",
});

const animation = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

interface IHeader {
  filter: FilterType;
  totalFiltredInvoices: number;
  setFilter: (filterBy: FilterType) => void;
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<IHeader> = ({
  filter,
  totalFiltredInvoices,
  setFilter,
  setFormIsOpen,
}) => {
  return (
    <Wrapper variants={animation} initial="hidden" animate="visible">
      <TextWrapper>
        <Title>Invoices</Title>
        <SubHeading>
          There are {totalFiltredInvoices} {filter === null ? "total" : filter}{" "}
          invoices.
        </SubHeading>
      </TextWrapper>

      <Filter filter={filter} setFilter={setFilter} />

      <NewInvoiceBtn onClick={() => setFormIsOpen(true)}>
        <PlusIconWrapper>
          <IconPlus />
        </PlusIconWrapper>
        <div>
          New <span>Invoice</span>
        </div>
      </NewInvoiceBtn>
    </Wrapper>
  );
};

export default Header;
