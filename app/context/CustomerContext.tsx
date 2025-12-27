import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Customer = {
  id: string;
  name: string;
  phone: string;
  pendingAmount: number;
};

type CustomerContextType = {
  customers: Customer[];
  addPendingAmount: (customerName: string, amount: number) => void;
};

const CustomerContext = createContext<CustomerContextType | undefined>(
  undefined
);

const CUSTOMER_KEY = "APP_CUSTOMER_DATA";

const initialCustomers: Customer[] = [
  {
    id: "1",
    name: "Virat Kumar",
    phone: "9876543210",
    pendingAmount: 1200,
  },
  {
    id: "2",
    name: "Ankita Sharma",
    phone: "9123456789",
    pendingAmount: 850,
  },
  {
    id: "3",
    name: "Sweta Singh",
    phone: "9988776655",
    pendingAmount: 450,
  },
];

export function CustomerProvider({ children }: { children: ReactNode }) {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);

  useEffect(() => {
    const loadCustomers = async () => {
      const saved = await AsyncStorage.getItem(CUSTOMER_KEY);
      if (saved) {
        setCustomers(JSON.parse(saved));
      }
    };
    loadCustomers();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(CUSTOMER_KEY, JSON.stringify(customers));
  }, [customers]);

  const addPendingAmount = (customerName: string, amount: number) => {
    setCustomers((prev) =>
      prev.map((c) =>
        c.name.toLowerCase() === customerName.toLowerCase()
          ? { ...c, pendingAmount: c.pendingAmount + amount }
          : c
      )
    );
  };

  return (
    <CustomerContext.Provider value={{ customers, addPendingAmount }}>
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("useCustomer must be used within CustomerProvider");
  }
  return context;
}
