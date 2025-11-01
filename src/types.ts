import type React from "react"

type Customer = {
    id: string,
    companyName: string,
    contactName: string,
    contactTitle: string,
    address: string,
    city: string,
    postalCode: string,
    country: string,
    phone: string,
    fax: string
}

export interface CustomersProps {
    customers: Customer[]
}

export interface CustomerViewProps {
    customer: Customer
}

export interface CustomerProps {
    customerId: string
}

type Order = {
    id: number,
    customerId: string,
    employeeId: number,
    orderDate: string,
    requiredDate: string,
    shippedDate: string,
    shipVia: number,
    freight: number,
    shipName: string,
    shipAddress: string,
    shipCity: string,
    shipPostalCode: number,
    shipCountry: string
}

export interface OrderProps {
    orderId: string
}

type Preference = {
    orderId: number,
    productId: number,
    unitPrice: number,
    quantity: number,
    discount: number
}

export interface OrdersProps {
    orders: Order[]
}

export interface GetOrdersArgs {
    page: string,
    customerId: string
}

export type GetOrderResponse = {
    order: Order,
    orderDetails: Preference[]
}[]

export interface OrderViewProps {
    order: Order
}

export interface InputProps {
    id: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export interface LabelProps {
    label: string,
    inputId: string
}