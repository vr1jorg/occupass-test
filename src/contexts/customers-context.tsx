import {
  createContext,
  useContext,
  useEffect,
  useState,
  useTransition
} from 'react';
import type { CustomerDetails, CustomersContextType, CustomersProviderProps } from '../types';
import { getCustomerDetails, getCustomers } from '../actions';

export const CustomersContext = createContext<CustomersContextType | null>(null);

export default function CustomersProvider({ children }: CustomersProviderProps) {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null)
  const [selectedCustomerDetails, setSelectedCustomerDetails] = useState<CustomerDetails | null>(null);
  const [customers, setCustomers] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const customers = await getCustomers();
      setCustomers(customers);
    });
  }, []);

  useEffect(() => {
    if (selectedCustomerId) {
      startTransition(async () => {
        const customerDetails = await getCustomerDetails({ customerId: selectedCustomerId });
        setSelectedCustomerDetails(customerDetails);
      });
    }
  }, [selectedCustomerId])

  const selectCustomer = (customerId: string) => {
    startTransition(() => {
      setSelectedCustomerId(customerId);
    });
  };





  return (
    <CustomersContext.Provider
      value={{ customers, selectedCustomerDetails, selectCustomer, isPending, selectedCustomerId }}
    >
      {children}
    </CustomersContext.Provider>
  );
}

export function useCustomers() {
  const context = useContext(CustomersContext);
  if (!context) {
    throw new Error('useCustomers must be used within a CustomersProvider');
  }
  return context;
}