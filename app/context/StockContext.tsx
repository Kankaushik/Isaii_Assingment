import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type StockItem = {
  id: string;
  name: string;
  quantity: number;
};

type StockContextType = {
  stock: StockItem[];
  reduceStock: (itemName: string, qty: number) => void;
  resetStock: () => void;
};

const StockContext = createContext<StockContextType | undefined>(undefined);

const STOCK_KEY = "APP_STOCK_DATA_V1";

const initialStock: StockItem[] = [
  { id: "1", name: "Rice (1kg)", quantity: 250 },
  { id: "2", name: "Wheat Flour (1kg)", quantity: 80 },
  { id: "3", name: "Sugar (1kg)", quantity: 150 },
  { id: "4", name: "Cooking Oil (1L)", quantity: 5 },
];

export function StockProvider({ children }: { children: ReactNode }) {
  const [stock, setStock] = useState<StockItem[]>(initialStock);

  useEffect(() => {
    const loadStock = async () => {
      const saved = await AsyncStorage.getItem(STOCK_KEY);
      if (saved) {
        setStock(JSON.parse(saved));
      }
    };
    loadStock();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STOCK_KEY, JSON.stringify(stock));
  }, [stock]);

  const reduceStock = (itemName: string, qty: number) => {
    setStock((prev) =>
      prev.map((item) =>
        item.name.toLowerCase() === itemName.toLowerCase()
          ? {
              ...item,
              quantity: Math.max(item.quantity - qty, 0),
            }
          : item
      )
    );
  };

  const resetStock = async () => {
    await AsyncStorage.removeItem(STOCK_KEY);
    setStock(initialStock);
  };

  return (
    <StockContext.Provider value={{ stock, reduceStock, resetStock }}>
      {children}
    </StockContext.Provider>
  );
}

export function useStock() {
  const context = useContext(StockContext);
  if (!context) {
    throw new Error("useStock must be used inside StockProvider");
  }
  return context;
}
