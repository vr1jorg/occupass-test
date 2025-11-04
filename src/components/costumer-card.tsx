import { useSelectedCustomer } from "../contexts/customers-context";
import type { CustomerCardProps } from "../types";

export default function CustomerCard({ customer }: CustomerCardProps) {
    const { selectedCustomerId, selectCustomer } = useSelectedCustomer()
    const isSelected = selectedCustomerId && selectedCustomerId === customer.id

    function handleSelectCustomer() {
        selectCustomer(customer.id)
    }
    return (
        <div onClick={handleSelectCustomer} className={`${isSelected ? 'border-blue-500 border-2 ' : ''}`}>
            <p>{customer.contactName}</p>
            <p>{customer.companyName}</p>
        </div>
    )
}
