import {
  createContext,
  useContext,
  useEffect,
  useState,
  useTransition
} from 'react';
import type { Customer, CustomersContextType, CustomersProviderProps } from '../types';
import { getCustomers } from '../actions';

export const CustomersContext = createContext<CustomersContextType | null>(null);

export default function CustomersProvider({ children }: CustomersProviderProps) {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [customers, setCustomers] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const data = await getCustomers();
      setCustomers(data);
    });
  }, []);

  const selectCustomer = (customer: Customer) => {
    startTransition(() => {
      setSelectedCustomer(customer);
    });
  };

  return (
    <CustomersContext.Provider
      value={{ customers, selectedCustomer, selectCustomer, isPending }}
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