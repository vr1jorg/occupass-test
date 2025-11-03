import type { CustomerCardProps } from "../types";


export default function CustomerCard({ customer, onClick }: CustomerCardProps) {
    const isSelected= selectedCustomer && selectedCustomer.id === customer.id
    return (
        <div onClick={onSelect} className={`${isSelected ? 'border-blue-500 border-2 ' : ''}`}>
            <p>{customer.contactName}</p>
            <p>{customer.companyName}</p>
        </div>
    )
}
