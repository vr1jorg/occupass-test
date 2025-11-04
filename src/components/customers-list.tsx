import CustomerCard from "./costumer-card";
import { useCustomers } from "../contexts/customers-context";

export default function CustomersList() {
  const { customers } = useCustomers();

  return (
    <ul className="grid grid-cols-3 mt-2">
      {customers.map(customer => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </ul>
  )
}