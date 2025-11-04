import { useCustomers } from "../contexts/customers-context"
import Loading from "./loading"

export default function CustomerInformation() {
    const { selectedCustomerDetails, isPending } = useCustomers()

    if (isPending) {
        return <Loading />
    }

    if (!selectedCustomerDetails) {
        return null
    }

    return (
        <section id="customer" className="flex flex-col gap-1">
            <div className="rounded overflow-hidden">
                <div className="py-4">
                    <p className="font-bold text-xl font-roboto">{selectedCustomerDetails.customer.contactName}</p>
                    <p className="uppercase mb-1 font-roboto">{selectedCustomerDetails.customer.companyName}</p>
                    <p className="text-gray-700 text-base font-roboto">
                        {selectedCustomerDetails.customer.address}
                    </p>
                </div>
            </div>
        </section>
    )
}
