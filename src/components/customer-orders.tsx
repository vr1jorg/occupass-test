import SectionHeading from "./section-heading"
import { useSelectedCustomer } from "../contexts/customers-context"
import Loading from "./loading"
import CustomerOrdersTable from "./orders-table"

export default function CustomerOrders() {
    const { selectedCustomerDetails, isPending } = useSelectedCustomer()
    if (isPending) {
        return <Loading />
    }

    if (!selectedCustomerDetails) {
        return null
    }

    return (
        <section >
            <SectionHeading>Customer Orders</SectionHeading>
            <CustomerOrdersTable />
        </section>
    )
}