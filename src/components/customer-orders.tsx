import SectionHeading from "./section-heading"
import CustomerOrderInformation from "./customer-order-view"
import type { CustomerOrdersProps } from "../types"

export default function CustomerOrders() {

    return (
        <section id="orders">
            <SectionHeading>Customer Orders</SectionHeading>
            <ul>
                {customerOrders.map(customerOrder => (
                    <CustomerOrderInformation key={customerOrder.order.id} customerOrder={customerOrder} />
                ))}
            </ul>
        </section>
    )
}