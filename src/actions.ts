"use server"

import { Path, type GetCustomerDetailsArgs } from "./types";

export async function getCustomers() {
    const response = await fetch("https://uitestapi.occupass.com/api/GetAllCustomers");
    const data = await response.json();
    return data.results
}

export async function getCustomerDetails({ customerId }: GetCustomerDetailsArgs) {
    const params = new URLSearchParams();
    params.append("id", customerId);
    const response = await fetch(`${Path.ApiBaseUrl}${Path.CustomerDetailsEndpoint}?${params}`);
    const data = await response.json();
    return data
}