function App() {

  return (
    <main className="p-4 flex flex-col gap-4">
      <h1 className='text-xl font-bold'>Occupass Dashboard</h1>
      <Actions />
    </main>
  )
}

function Actions() {
  function handleListOrders() {
    console.log("Fetching orders")
  }

  return (
    <ul>
      <button className='cursor-pointer bg-green-200 animate-pulse hover:animate-none hover:bg-gray-200 rounded-md outline px-2 py-3 inline' onClick={handleListOrders}>Click here to fetch the latest orders</button>
    </ul>
  )
}

export default App
