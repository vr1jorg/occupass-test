import { Suspense } from "react"
import { dangerouslySetCustomerId } from "./seed"
import { getCustomers } from "./actions"
import CustomerDetails from "./components/customer-details"
import Customers from "./components/customers"
import Menu from "./components/menu"

function App() {
  return (
    <main className="p-4 flex flex-col gap-4">
      <h1 className='text-xl font-bold font-roboto'>Occupass Dashboard</h1>
      <Menu />
      <hr />
      <div className="grid grid-cols-2 gap-4">
        <Suspense>
          <Customers customersPromise={getCustomers()} />
        </Suspense>
        <CustomerDetails customerId={dangerouslySetCustomerId} />
      </div>
    </main>
  )
}


export default App
