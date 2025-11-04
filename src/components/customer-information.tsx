import { useSelectedCustomer } from "../contexts/customers-context"
import Loading from "./loading"

export default function CustomerInformation() {
    const { selectedCustomerDetails, isPending } = useSelectedCustomer()

    if (isPending) {
        return <Loading />
    }

    if (!selectedCustomerDetails) {
        return null
    }

    return (
        <section id="customer" className="flex flex-col gap-1">
            <div className="p-4">
                <p className="font-bold text-xl font-roboto">{selectedCustomerDetails.customer.contactName}</p>
                <p className="uppercase mb-1 font-roboto">{selectedCustomerDetails.customer.companyName}</p>
                <p className="text-gray-700 text-base font-roboto">
                    {selectedCustomerDetails.customer.address}
                </p>
            </div>
        </section>
    )
}
