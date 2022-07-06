import { useEffect, useState } from "react";
import RootLayout from "layouts/Root";
import Seo from "../components/Seo";
import CreateInvoiceForm from "components/ModifyInvoice/CreateInvoiceForm";
import Wrapper from "components/Home/Wrapper";
import Header from "components/Home/Header";
import InvoicesList from "components/Home/InvoiceList";
import InvoiceItem from "components/Home/InvoiceItem";
import { selectAll as selectAllInvoices } from "store/InvoicesSlice";
import { useAppSelector } from "store/hooks";

export type Filter = null | "paid" | "pending" | "draft";

export default function Index() {
  const invoices = useAppSelector((state) => selectAllInvoices(state.invoices));
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);
  const [filter, setFilter] = useState<Filter>(null);
  const [formIsOpen, setFormIsOpen] = useState(false);

  useEffect(() => {
    if (filter === null) {
      setFilteredInvoices(invoices);
    } else {
      setFilteredInvoices(
        invoices.filter((invoice) => invoice.status === filter)
      );
    }
  }, [filter, invoices]);

  const toggleFilter = (filterBy: Filter) => {
    if (filterBy === filter) {
      setFilter(null);
    } else {
      setFilter(filterBy);
    }
  };

  return (
    <RootLayout>
      <Seo title="Invoice App" />

      <CreateInvoiceForm isOpen={formIsOpen} setFormIsOpen={setFormIsOpen} />

      <Wrapper>
        <Header
          setFormIsOpen={setFormIsOpen}
          setFilter={toggleFilter}
          filter={filter}
          totalFiltredInvoices={filteredInvoices.length}
        />

        <InvoicesList>
          {filteredInvoices.map((invoice) => (
            <InvoiceItem key={invoice.id} invoice={invoice} />
          ))}
        </InvoicesList>
      </Wrapper>
    </RootLayout>
  );
}
