import { useState } from "react"
import { dangerouslySetOrderId } from "../seed"
import type { OrderProps } from "../types"
import Input from "./input"
import Label from "./label"
import SectionHeading from "./section-heading"

export default function Order({ orderId: initialOrderId = dangerouslySetOrderId }: OrderProps) {
    const [orderId, setOrderId] = useState(initialOrderId)
    return (
        <section id="order" className="flex flex-col gap-1">
            <SectionHeading>Order Lookup</SectionHeading>
            <Label inputId={"order"} label={"Order id"} />
            <Input value={orderId} id={"order"} onChange={(event) => setOrderId(event.target.value)} />
        </section>
    )
}
