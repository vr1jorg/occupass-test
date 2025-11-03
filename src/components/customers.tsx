import { use, useState } from "react"
import type { CustomersProps } from "../types"
import SectionHeading from "./section-heading"
import CustomerView from "./customer-view"
import CustomersFilter from "./customers-filter"

export default function Customers({ customersPromise }: CustomersProps) {
  const [sortNameAsc, setSortNameAsc] = useState(true)
  const customers = use(customersPromise)
  const filteredCustomers = customers.sort(((customerA, customerB) => {
    if (sortNameAsc) {
      return customerA.contactName < customerB.contactName ? -1 : 1
    } else {
      return customerA.contactName > customerB.contactName ? -1 : 1
    }
  }))
  return (
    <section id="customers">
      <SectionHeading>Customers</SectionHeading>
      <CustomersFilter sortNameAsc={sortNameAsc} toggleNameSort={() => setSortNameAsc(!sortNameAsc)} />
      <ul className="grid grid-cols-2 mt-2">
        {filteredCustomers.map(customer => (
          <CustomerView key={customer.id} customer={customer} />
        ))}
      </ul>
    </section>
  )
}