import DataTable from "react-data-table-component";
import { useCustomers, useSelectedCustomer } from "../contexts/customers-context";
import { customersTableColumns } from "../constants";
import type { Customer } from "../types";

export default function CustomersTable() {
    const { customers } = useCustomers()
    const { selectCustomer } = useSelectedCustomer()

    if (!customers) {
        return null
    }

    function handleRowClick(row: Customer) {
        console.log(row)
        selectCustomer(row.id)
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

