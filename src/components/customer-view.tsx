import { Suspense } from "react";
import type { CustomerViewProps } from "../types";
import CustomerOrders from "./customer-orders";
import { getCustomerOrders } from "../actions";
import CustomerDetails from "./customer-details";

export default async function CustomerView({ customer, onClose }: CustomerViewProps) {
    const customerOrders = await getCustomerOrders({ customerId: customer.id, page: 1 })
    return (
        <div>
            <CustomerDetails customer={customer} />
            <Suspense>
                <CustomerOrders customerOrders={customerOrders} />
            </Suspense>
        </div>
    )
}
