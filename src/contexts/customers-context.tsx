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
export const SelectedCustomerContext = createContext<{
  selectedCustomerId: string | null;
  selectedCustomerDetails: CustomerDetails | null;
  selectCustomer: (id: string | null) => void;
  isPending: boolean;
}>({
  selectedCustomerId: null,
  selectedCustomerDetails: null,
  selectCustomer: () => { },
  isPending: false,
});

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
        console.log(selectedCustomerId, customerDetails)
        setSelectedCustomerDetails(customerDetails);
      });
    } else {
      setSelectedCustomerDetails(null)
    }
  }, [selectedCustomerId])

  const selectCustomer = (customerId: string | null) => {
    startTransition(() => {
      setSelectedCustomerId(customerId);
    });
  };

  return (
    <CustomersContext.Provider value={{ customers }}>
      <SelectedCustomerContext.Provider
        value={{ selectedCustomerId, selectedCustomerDetails, selectCustomer, isPending }}
      >
        {children}
      </SelectedCustomerContext.Provider>
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

export function useSelectedCustomer() {
  const context = useContext(SelectedCustomerContext);
  if (!context) {
    throw new Error('useSelectedCustomer must be used within a SelectedCustomerProvider');
  }
  return context;
}