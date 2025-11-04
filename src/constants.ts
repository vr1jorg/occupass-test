import type { Customer, CustomerOrder } from "./types"

export const customerIdInputId = "customerId"
export const customerIdInputLabel = "Customer id"
export const menuLinks = [
    { href: "#customers", text: "Customers" },
    { href: "#customer", text: "Find customer details" },
]
export const customersTableColumns = [
    {
        name: 'Id',
        selector: (row: Customer) => row.id,
        sortable: true,
    },
    {
        name: 'Country',
        selector: (row: Customer) => row.companyName,
        sortable: true,
    },
    {
        name: 'Contact number',
        selector: (row: Customer) => row.contactName,
        sortable: true,
    },
    {
        name: 'Contact title',
        selector: (row: Customer) => row.contactTitle,
        sortable: true,
    },
    {
        name: 'Address',
        selector: (row: Customer) => row.address,
        sortable: true,
    },
    {
        name: 'City',
        selector: (row: Customer) => row.city,
        sortable: true,
    },
    {
        name: 'Region',
        selector: (row: Customer) => row.region,
        sortable: true,
    },
    {
        name: 'Postal code',
        selector: (row: Customer) => row.postalCode,
        sortable: true,
    },
    {
        name: 'Country',
        selector: (row: Customer) => row.country,
        sortable: true,
    },
    {
        name: 'Phone',
        selector: (row: Customer) => row.phone,
        sortable: true,
    },
    {
        name: 'Fax',
        selector: (row: Customer) => row.fax,
        sortable: true,
    },
]

export const ordersTableColumns = [
    {
        name: 'Id',
        selector: (row: CustomerOrder) => row.order.id,
        sortable: true,
    },
    {
        name: 'Customer Id',
        selector: (row: CustomerOrder) => row.order.customerId,
        sortable: true,
    },
    {
        name: 'Employee Id',
        selector: (row: CustomerOrder) => row.order.employeeId,
        sortable: true,
    },
    {
        name: 'Order date',
        selector: (row: CustomerOrder) => row.order?.orderDate ?? "TBD",
        sortable: true,
    },
    {
        name: 'Required date',
        selector: (row: CustomerOrder) => row.order?.requiredDate ?? "TBD",
        sortable: true,
    },
    {
        name: 'Shipped date',
        selector: (row: CustomerOrder) => row.order?.shippedDate ?? "TBD",
        sortable: true,
    },
    {
        name: 'Ship via',
        selector: (row: CustomerOrder) => row.order?.shipVia ?? "TBD",
        sortable: true,
    },
    {
        name: 'Freight',
        selector: (row: CustomerOrder) => row.order.freight,
        sortable: true,
    },
    {
        name: 'Ship Name',
        selector: (row: CustomerOrder) => row.order.shipName,
        sortable: true,
    },
    {
        name: 'Ship Address',
        selector: (row: CustomerOrder) => row.order.shipAddress,
        sortable: true,
    },
    {
        name: 'Ship Region',
        selector: (row: CustomerOrder) => row.order.shipRegion,
        sortable: true,
    },
    {
        name: 'Ship City',
        selector: (row: CustomerOrder) => row.order.shipCity,
        sortable: true,
    },
    {
        name: 'Ship Postal Code',
        selector: (row: CustomerOrder) => row.order.shipPostalCode,
        sortable: true,
    },
    {
        name: 'Ship Country',
        selector: (row: CustomerOrder) => row.order.shipCountry,
        sortable: true,
    },
]