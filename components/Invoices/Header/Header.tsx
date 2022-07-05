import Filter from "./Filter";
import {
  Wrapper,
  SubHeading,
  TextWrapper,
  Title,
  NewInvoiceBtn,
  PlusIconWrapper,
} from "./Header.styles";

interface IHeader {
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<IHeader> = ({ setFormIsOpen }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>Invoices</Title>
        <SubHeading>There are 8 total invoices.</SubHeading>
      </TextWrapper>

      <Filter />

      <NewInvoiceBtn onClick={() => setFormIsOpen(true)}>
        <PlusIconWrapper>
          <img src="/images/icon-plus.svg" alt="plus" />
        </PlusIconWrapper>
        <span>New Invoice</span>
      </NewInvoiceBtn>
    </Wrapper>
  );
};

export default Header;
