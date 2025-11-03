import type { CustomerViewProps } from "../types";

export default function CustomerView({ customer }: CustomerViewProps) {
    return (
        <div>
            <div className="rounded overflow-hidden">
                <div className="py-4">
                    <p className="font-bold text-xl font-roboto">{customer.contactName}</p>
                    <p className="uppercase mb-1 font-roboto">{customer.companyName}</p>
                    <p className="text-gray-700 text-base font-roboto">
                        {customer.address}
                    </p>
                </div>
            </div>
        </div>
    )
}
