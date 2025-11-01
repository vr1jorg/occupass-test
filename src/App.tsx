import { useEffect, useState } from "react"
import type { CustomerProps, CustomerViewProps, CustomersProps, InputProps, LabelProps, OrderProps, OrderViewProps, OrdersProps } from "./types"
import { dangerouslySetCustomerId, dangerouslySetOrderId } from "./seed"
import { customerIdInputId, customerIdInputLabel } from "./constants"
import { getCustomerEntries } from "./actions"

function App() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    async function getCustomers() {
      const customers = await getCustomerEntries()
      setCustomers(customers)
    }
  }, [])

  return (
    <main className="p-4 flex flex-col gap-4">
      <h1 className='text-xl font-bold'>Occupass Dashboard</h1>
      <hr />
      <Customers customers={[]} />
      <Customer customerId={"ALFKI"} />
      <Orders orders={[]} />
      <Order orderId={"10643"} />
    </main>
  )
}

function Customers({ customers }: CustomersProps) {
  return (
    <section>
      <button className='cursor-pointer bg-green-200 animate-pulse hover:animate-none hover:bg-gray-200 rounded-md outline px-2 py-3 inline'>Click here to list all customers</button>
      <ul className="flex flex-col gap-4">
        {customers.map(customer => (
          <CustomerView customer={customer} />
        ))}
      </ul>
    </section>
  )
}

function Customer({ customerId: initialCustomerId = dangerouslySetCustomerId }: CustomerProps) {
  const [customerId, setCustomerId] = useState(initialCustomerId)
  return (
    <section className="flex gap-1">
      <Label label={customerIdInputLabel} inputId={customerIdInputId} />
      <input id={customerIdInputId} type="text" value={customerId} onChange={(event) => setCustomerId(event.target.value)} />
    </section>
  )
}

function Orders({ orders }: OrdersProps) {
  function getOrders() {
    console.log("Fetching orders")
  }
  return (
    <section>
      <button className='cursor-pointer bg-green-200 animate-pulse hover:animate-none hover:bg-gray-200 rounded-md outline px-2 py-3 inline' onClick={getOrders} >Click here to list all customer orders</button>
      <ul>
        {orders.map(order => <OrderView order={order} />)}
      </ul>
    </section>
  )
}

function OrderView({
  order
}: OrderViewProps) {
  return (
    <div className="outline p-4">
      <h6>{order.id}</h6>
    </div>
  )
}

function Order({ orderId: initialOrderId = dangerouslySetOrderId }: OrderProps) {
  const [orderId, setOrderId] = useState(initialOrderId)
  return (
    <section className="flex gap-1">
      <Label inputId={"order"} label={"Order id"} />
      <Input value={orderId} id={"order"} onChange={(event) => setOrderId(event.target.value)} />
    </section>
  )
}

function CustomerView({ customer }: CustomerViewProps) {
  return (
    <div>
      <h6>{customer.contactName}</h6>
    </div>
  )
}

function Input({ value, onChange, id }: InputProps) {
  return (
    <input value={value} onChange={onChange} id={id} />
  )
}

function Label({ label, inputId }: LabelProps) {
  return (
    <label htmlFor={inputId} className="font-bold">{label}</label>
  )
}


export default App
