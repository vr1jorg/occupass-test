import type { CustomerOrderViewProps } from "../types";

export default function CustomerOrderView({ customerOrder }: CustomerOrderViewProps) {
    return (
        <div>
            {customerOrder.orderDetails.map(detail => (
                <p key={detail.productId}><span className="font-bold">{detail.quantity}</span> x {detail.orderId} at ${detail.unitPrice}</p>
            ))}
        </div>
    )
}
