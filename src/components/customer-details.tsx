import { Suspense, useState } from "react"
import { dangerouslySetCustomerId } from "../seed"
import type { CustomerProps } from "../types"
import SectionHeading from "./section-heading"
import CustomerOrders from "./customer-orders"
import { getCustomerOrders } from "../actions"
import CustomerForm from "./customer-form"

export default function CustomerDetails({ customerId: initialCustomerId = dangerouslySetCustomerId }: CustomerProps) {
    const [customerId] = useState(initialCustomerId)
    return (
        <section id="customer" className="flex flex-col gap-1">
            <SectionHeading>Find customer</SectionHeading>
            <CustomerForm />
            <Suspense>
                <CustomerOrders customerOrdersPromise={getCustomerOrders({ customerId: customerId, page: 1 })} />
            </Suspense>
        </section>
    )
}
