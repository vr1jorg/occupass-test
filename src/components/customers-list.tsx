import { useContext } from "react";
import CustomerCard from "./costumer-card";
import { CustomersContext, useCustomers } from "../contexts/customers-context";

export default function CustomersList() {
 const { customers, selectedCustomer, selectCustomer, isPending } = useCustomers();

  if (isPending) return <p>Loading...</p>;
  return (
    <ul className="grid grid-cols-3 mt-2">
      {customers.map(customer => (
        <CustomerCard onClick={() => selectCustomer(customer)} key={customer.id} customer={customer} />
      ))}
    </ul>
  )
}