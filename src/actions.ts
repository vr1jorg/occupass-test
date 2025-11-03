"use server"

import type { CustomerFormData } from "./schemas";
import type { GetCustomerDetailsArgs, GetCustomerOrdersArgs } from "./types";

export async function getCustomers() {
    const response = await fetch("https://uitestapi.occupass.com/api/GetAllCustomers");
    const data = await response.json();
    return data.results
}

export async function getCustomerOrders({ customerId, page }: GetCustomerOrdersArgs) {
    const response = await fetch(`https://uitestapi.occupass.com/api/GetOrders?page=${page}&customerId=${customerId}`);
    const data = await response.json();
    return data.results
}

export async function getCustomer({ customerId }: GetCustomerDetailsArgs) {
    const response = await fetch(`https://uitestapi.occupass.com/api/GetCustomerDetails?customerId=${customerId}`);
    console.log(response)
    const data = await response.json();
    return data.results
}


export async function submitForm(data: CustomerFormData) {
    console.log(data);
}