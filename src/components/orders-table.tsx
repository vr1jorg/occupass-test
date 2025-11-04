import DataTable from "react-data-table-component";
import { useCustomers } from "../contexts/customers-context";
import Loading from "./loading";
import { ordersTableColumns } from "../constants";

export default function CustomerOrdersTable() {
    const { selectedCustomerDetails, isPending } = useCustomers()

    if (isPending) {
        return <Loading />
    }

    if (!selectedCustomerDetails) {
        return null
    }
    const columns = ordersTableColumns
    return (
        <DataTable
            columns={columns}
            data={selectedCustomerDetails.orders}
        />
    )
}