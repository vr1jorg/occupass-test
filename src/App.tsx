import { Suspense, useEffect, useState } from "react"
import { getCustomers } from "./actions"
import Customers from "./components/customers"
import Header from "./components/header"
import type { LayoutProps } from "./types"
import { startTransition } from "react";


function App() {
 
  return (
    <Layout>
      <Suspense>
        <Customers customers={customers} />
      </Suspense>
    </Layout>
  )
}




export default App
