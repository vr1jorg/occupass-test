import type { CustomerDetailsProps } from "../types"
import SectionHeading from "./section-heading"

export default function CustomerDetails({ customer }: CustomerDetailsProps) {
    return (
        <section id="customer" className="flex flex-col gap-1">
            <SectionHeading>Customer Details</SectionHeading>
            <div className="rounded overflow-hidden">
                <div className="py-4">
                    <p className="font-bold text-xl font-roboto">{customer.contactName}</p>
                    <p className="uppercase mb-1 font-roboto">{customer.companyName}</p>
                    <p className="text-gray-700 text-base font-roboto">
                        {customer.address}
                    </p>
                </div>
            </div>
        </section>
    )
}
