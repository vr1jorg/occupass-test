import SectionHeading from "./section-heading"
import CustomerModal from "./customer-modal"
import CustomersTable from "./customers-table"

export default function Customers() {
  return (
    <section>
      <SectionHeading>Customers</SectionHeading>
      <CustomersTable />
      <CustomerModal /> 
    </section>
  )
}