import {  useState } from "react"
import type { CustomerOrdersProps } from "../types"
import SectionHeading from "./section-heading"
import CustomerOrderView from "./customer-order-view"
import Pagination from "./pagination"

export default function CustomerOrders({ customerOrders }: CustomerOrdersProps) {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <section id="orders">
            <SectionHeading>Customer Orders</SectionHeading>
            <ul>
                {customerOrders.map(customerOrder => (
                    <CustomerOrderView key={customerOrder.order.id} customerOrder={customerOrder} />
                ))}
            </ul>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </section>
    )
}