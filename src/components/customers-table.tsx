import DataTable from "react-data-table-component";
import { useCustomers } from "../contexts/customers-context";
import Loading from "./loading";
import { customersTableColumns } from "../constants";
import type { Customer } from "../types";

export default function CustomersTable() {
    const { customers, isPending } = useCustomers()

    if (isPending) {
        return <Loading />
    }

    if (!customers) {
        return null
    }

    function handleRowClick(row: Customer) {
        console.log(row)
    }

    const columns = customersTableColumns
    return (
        <DataTable
            columns={columns}
            data={customers}
            onRowClicked={handleRowClick}
        />
    )
}

