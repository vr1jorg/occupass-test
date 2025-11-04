import type { CustomerOrderInformationProps } from "../types";

export default function CustomerOrderInformation({ customerOrder }: CustomerOrderInformationProps) {
    return (
        <div>
            {customerOrder.orderDetails.map(detail => (
                <p key={detail.productId}><span className="font-bold">{detail.quantity}</span> x {detail.orderId} at ${detail.unitPrice}</p>
            ))}
        </div>
    )
}
