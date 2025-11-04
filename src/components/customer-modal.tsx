import CustomerOrders from "./customer-orders";
import CustomerInformation from "./customer-information";
import { useCustomers } from "../contexts/customers-context"

export default function CustomerModal() {
    const { selectedCustomerId } = useCustomers()

    return (
        selectedCustomerId ? <div>
            <CustomerOrders />
            <CustomerInformation />
        </div > : null
    )
}
