import Filter from "./Filter";
import {
  Wrapper,
  SubHeading,
  TextWrapper,
  Title,
  NewInvoiceBtn,
  PlusIconWrapper,
} from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>Invoices</Title>
        <SubHeading>There are 8 total invoices.</SubHeading>
      </TextWrapper>

      <Filter />

      <NewInvoiceBtn>
        <PlusIconWrapper>
          <img src="/images/icon-plus.svg" alt="plus" />
        </PlusIconWrapper>
        <span>New Invoice</span>
      </NewInvoiceBtn>
    </Wrapper>
  );
};

export default Header;
