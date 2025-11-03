import { useContext, useState } from "react"
import type { Customer, CustomersProps } from "../types"
import SectionHeading from "./section-heading"
import CustomerView from "./customer-view"
import CustomersFilter from "./customers-filter"
import CustomersList from "./customers-list"
import { CustomersContext, useCustomers } from "../contexts/customers-context"

export default function Customers() {
 
  return (
    <section id="customers">
      <SectionHeading>Customers</SectionHeading>
      <CustomersList customers={customers} />
      {selectedCustomer ? <CustomerView customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} /> : <p>Please select a costumer to see their orders</p>}
    </section>
  )
}