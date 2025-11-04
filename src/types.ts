import type { Dispatch, ReactNode, SetStateAction } from "react"
import type React from "react"
import type { Control, UseFormRegister } from "react-hook-form"
import type { CustomerFormData } from "./schemas"

export type Customer = {
    id: string,
    companyName: string,
    contactName: string,
    contactTitle: string,
    address: string,
    city: string,
    region: string,
    postalCode: string,
    country: string,
    phone: string,
    fax: string
}

export interface CustomersProps {
    customers: Customer[]
}

export interface CustomerCardProps {
    customer: Customer,
}

export interface CustomerDetailsProps {
    customer: Customer
}

type Order = {
    id: number,
    customerId: string,
    employeeId: number,
    orderDate?: string,
    requiredDate?: string,
    shippedDate?: string,
    shipVia?: number,
    freight: number,
    shipName: string,
    shipAddress: string,
    shipRegion: string,
    shipCity: string,
    shipPostalCode: number,
    shipCountry: string
}

export type ResponseError = {
    errorCode: string,
    fieldName: string,
    message: string,
    meta: { [index: string]: string; },
}

export type ResponseStatus = {
    errorCode: string,
    message: string,
    stackTrace: string,
    errors: ResponseError[],
    meta: { [index: string]: string; }
}

export type QueryResponse<T> = {
    offset: number,
    total: number,
    results: T[],
    meta: { [index: string]: string; },
    responseStatus: ResponseStatus,
}

export type QueryBase = {
    skip?: number,
    take?: number,
    orderBy: string,
    orderByDesc: string,
    include: string,
    fields: string,
    meta: { [index: string]: string; }
}

export type CustomersResponse = {
    results: Customer[],
    responseStatus: ResponseStatus,
}

export type CustomerDetailsResponse = {
    customer: Customer,
    orders: CustomerOrder[],
    responseStatus: ResponseStatus
}

export type OrdersResponse = {
    results: CustomerOrder[],
    responseStatus: ResponseStatus
}


export interface OrderProps {
    orderId: string
}

export type CustomerOrderDetail = {
    orderId: number,
    productId: number,
    unitPrice: number,
    quantity: number,
    discount: number
}

export interface CustomerOrdersProps {
    customerOrders: CustomerOrder[]
}

export type CustomerOrder = {
    order: Order,
    orderDetails: CustomerOrderDetail[]
}

export interface CustomerOrderInformationProps {
    customerOrder: CustomerOrder
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

export enum Path {
    CustomersEndpoint = `/GetAllCustomers`,
    OrdersEndpoint = `/GetOrders`,
    CustomerDetailsEndpoint = `/GetCustomerDetails`,
    ApiBaseUrl = `https://uitestapi.occupass.com`
}

export interface GetCustomerDetailsArgs {
    customerId: string
}

export interface GetOrdersArgs {
    page?: number,
    customerId: string
}

export interface QueryCustomersArgs {
    ids: string[],
    countryStartsWith: string
}

export interface QueryOrdersArgs {
    freight?: number
}

export interface SectionHeadingProps {
    children: ReactNode
}

export interface PaginationProps {
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>
}

export interface LinkProps {
    href: string,
    children: ReactNode
}

export interface CustomerOrderViewProps {
    customerOrder: CustomerOrder
}

export interface GetCustomerOrdersArgs {
    customerId: string,
    page: number
}

export interface CustomersFilterProps {
    toggleNameSort: () => void
    sortNameAsc: boolean
}

export interface IconProps {
    className: string
}

export interface SortByNameProps {
    toggleNameSort: () => void
    sortNameAsc: boolean
}

export interface FieldProps {
    label: string;
    placeholder: string,
    type?: string;
    name: string;
    register: UseFormRegister<CustomerFormData>;
    error?: string;
}

export interface SelectFieldOption {
    value: string,
    label: string
}

export interface SelectFieldProps {
    control: Control<CustomerFormData>,
    name: string,
    options: SelectFieldOption[],
    placeholder: string,
    label: string
    register: UseFormRegister<CustomerFormData>;
}

export interface LayoutProps {
    children: ReactNode
}

export interface CustomersProviderProps {
    children: ReactNode
}

export interface CustomersListProps {
    customers: Customer[]
}

export type CustomersContextType = {
    customers: Customer[];
    selectedCustomerDetails: CustomerDetails | null;
    selectedCustomerId: string | null;
    selectCustomer: (customerId: string) => void;
    isPending: boolean;
}

export type CustomerDetails = {
    customer: Customer,
    orders: CustomerOrder[]
}

export interface CustomerInformationProps {
    customer: Customer
}

export interface ExpandedCustomerProps {
    customer: Customer
}

export interface CustomerOrdersProps {
    
}